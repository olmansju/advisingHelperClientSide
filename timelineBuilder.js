//builds timeline

async function buildTimelineCards(divName, statusArray){
    let notesBuilt = 0;
    for (item in statusArray.status) {
        let imageURL;
        console.log('buildTimelineCards', item, statusArray.status[item], statusArray.currentGoals);
        if (item === statusArray.currentGoals[0]) {
            imageURL = "images/in-progress-icon-9.png";
            noteBuilder(item, timelineJustinJSON);
            notesBuilt += 1;
        } else if (statusArray.status[item] === "" || statusArray.status[item] === "n/a" || statusArray.status[item] === "needed") {
            imageURL = "images/256px-Icon-notepad.svg.png";
        } else {
            if (item === "expiration"){
                imageURL = "images/hourglass.png"
            } else if (item === "cr_hrs_taken"){
                continue;
            } else if (item === "courses_taken"){
                imageURL = "images/books.png";
            } else {
                imageURL = "images/finished-icon-9.png";
            }
        }
        document.getElementById(divName).innerHTML += `<div class=${divName}><div class="card-header card-image"> <img id=${item} src=${imageURL} onclick="noteBuilder('${item}')"> </div> <div class="card-body"><b>${item.replaceAll("_", " ")}</b> ${parseValue(item, statusArray.status[item])} </div></div>`;
    }
    if (notesBuilt < 1){
        noteBuilder("courses_taken", timelineJustinJSON);
    }
}

function parseValue(category, value){
    switch(category){
        case "admitted":
            let semester;
            let stringUNLdate = value.toString();
            if (stringUNLdate.slice(-1) === '8'){
                semester = 'Fall';
            } else if (stringUNLdate.slice(-1) === '1'){
                semester = 'Spring';
            } else {
                semester = 'May';
            }
            let readableYear = '20' + stringUNLdate.slice(1, 3);
            let readableDate = `${semester} ${readableYear}`;
            return readableDate;
        case "courses_taken":
            return value.length;
        case "PoS":
        case "pilot_study":
        case "comps":
        case "candidacy":
        case "proposal":
        case "dissertation":
        case "job_market":
        case "graduation":
        case "expiration":
            return value;
    }
}
