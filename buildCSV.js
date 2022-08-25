/**
 * Parse takes a string of CSV data and converts it to a 2 dimensional array
 *
 * options
 * - typed - infer types [false]
 *
 * @static
 * @param {string} csv the CSV string to parse
 * @param {Object} [options] an object containing the options
 * @param {Function} [reviver] a custom function to modify the values
 * @returns {Array} a 2 dimensional array of `[entries][values]`
 */
function parse (csv, options, reviver = v => v) {
    const ctx = Object.create(null)
    ctx.options = options || {}
    ctx.reviver = reviver
    ctx.value = ''
    ctx.entry = []
    ctx.output = []
    ctx.col = 1
    ctx.row = 1

    const lexer = /"|,|\r\n|\n|\r|[^",\r\n]+/y
    const isNewline = /^(\r\n|\n|\r)$/

    let matches = []
    let match = ''
    let state = 0

    while ((matches = lexer.exec(csv)) !== null) {
        match = matches[0]

        switch (state) {
            case 0: // start of entry
                switch (true) {
                    case match === '"':
                        state = 3
                        break
                    case match === ',':
                        state = 0
                        valueEnd(ctx)
                        break
                    case isNewline.test(match):
                        state = 0
                        valueEnd(ctx)
                        entryEnd(ctx)
                        break
                    default:
                        ctx.value += match
                        state = 2
                        break
                }
                break
            case 2: // un-delimited input
                switch (true) {
                    case match === ',':
                        state = 0
                        valueEnd(ctx)
                        break
                    case isNewline.test(match):
                        state = 0
                        valueEnd(ctx)
                        entryEnd(ctx)
                        break
                    default:
                        state = 4
                        throw Error(`CSVError: Illegal state [row:${ctx.row}, col:${ctx.col}]`)
                }
                break
            case 3: // delimited input
                switch (true) {
                    case match === '"':
                        state = 4
                        break
                    default:
                        state = 3
                        ctx.value += match
                        break
                }
                break
            case 4: // escaped or closing delimiter
                switch (true) {
                    case match === '"':
                        state = 3
                        ctx.value += match
                        break
                    case match === ',':
                        state = 0
                        valueEnd(ctx)
                        break
                    case isNewline.test(match):
                        state = 0
                        valueEnd(ctx)
                        entryEnd(ctx)
                        break
                    default:
                        throw Error(`CSVError: Illegal state [row:${ctx.row}, col:${ctx.col}]`)
                }
                break
        }
    }

    // flush the last value
    if (ctx.entry.length !== 0) {
        valueEnd(ctx)
        entryEnd(ctx)
    }

    return ctx.output
}

/**
 * Stringify takes a 2 dimensional array of `[entries][values]` and converts them to CSV
 *
 * options
 * - eof - add a trailing newline at the end of file [true]
 *
 * @static
 * @param {Array} array the input array to stringify
 * @param {Object} [options] an object containing the options
 * @param {Function} [replacer] a custom function to modify the values
 * @returns {string} the CSV string
 */
function stringify (array, options = {}, replacer = v => v) {
    const ctx = Object.create(null)
    ctx.options = options
    ctx.options.eof = ctx.options.eof !== undefined ? ctx.options.eof : true
    ctx.row = 1
    ctx.col = 1
    ctx.output = ''

    const needsDelimiters = /"|,|\r\n|\n|\r/

    array.forEach((row, rIdx) => {
        let entry = ''
        ctx.col = 1
        row.forEach((col, cIdx) => {
            if (typeof col === 'string') {
                col = col.replace(/"/g, '""')
                col = needsDelimiters.test(col) ? `"${col}"` : col
            }
            entry += replacer(col, ctx.row, ctx.col)
            if (cIdx !== row.length - 1) {
                entry += ','
            }
            ctx.col++
        })
        switch (true) {
            case ctx.options.eof:
            case !ctx.options.eof && rIdx !== array.length - 1:
                ctx.output += `${entry}\n`
                break
            default:
                ctx.output += `${entry}`
                break
        }
        ctx.row++
    })

    return ctx.output
}

/** @private */
function valueEnd (ctx) {
    const value = ctx.options.typed ? inferType(ctx.value) : ctx.value
    ctx.entry.push(ctx.reviver(value, ctx.row, ctx.col))
    ctx.value = ''
    ctx.col++
}

/** @private */
function entryEnd (ctx) {
    ctx.output.push(ctx.entry)
    ctx.entry = []
    ctx.row++
    ctx.col = 1
}

/** @private */
function inferType (value) {
    const isNumber = /.\./

    switch (true) {
        case value === 'true':
        case value === 'false':
            return value === 'true'
        case isNumber.test(value):
            return parseFloat(value)
        case isFinite(value):
            return parseInt(value)
        default:
            return value
    }
}


function getCSVfileContents(fileName){
    let rawFile = new XMLHttpRequest();
    rawFile.open("GET", fileName, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                let allText = rawFile.responseText;
                console.log('allText', typeof allText, allText);
                return allText;
            }
        }
    }
    console.log('rawFile', rawFile.send(null));
}

function buildAdviseeObjectsFromCSVfile(fileName){
    let csvFile = getCSVfileContents(fileName);
    let objectArray = parse(csvFile);
    let directObjectArray = parse(sampleCSV);
    console.log('objectArray', objectArray, 'sampleCSV', directObjectArray);
}

let sampleCSV = `lName,fName,mName,NUID,Email,US,Citizen,prog_status,admitted,degree,primary_plan,minor,first_grad_enrolled,lastest_enrolled,latest_grad_eligible,gs_holds,dept_funding,advisor,committee_members_doc,PoS,candidacy,examForm,diss_deposited,expiration,cr_hrs_taken,courses_taken,imageURL
Al Shorman,Deef Allah,M Y,46892717,dalshorman2@huskers.unl.edu,Non-US,JOR,Active,1218,D,EDUS-PHD (INLT-SPC),,1201,1228,1228,,"$16,000 GA, $1,500 Fellowships",Justin D Olmanson,"Al Steckelberg, June Griffin, Guy Trainin",2022/05/04,,,,2030/05/01,66 hours,"TEAC 800, TEAC 882B, TEAC 882D, TEAC 801, TEAC 880A, TEAC 880P, TEAC 859, TEAC 860, ENTO 830, TEAC 889, TEAC 959, TEAC 960, EDPS 800, EDPS 859, TEAC 995A, EDPS 870, EDPS 941, TEAC 880E, TEAC 895, TEAC 999, EDPS 942, TEAC 905, TEAC 995","deef.jpg"`

buildAdviseeObjectsFromCSVfile("Olmanson_Fall22_Advisees_CSV.csv");
