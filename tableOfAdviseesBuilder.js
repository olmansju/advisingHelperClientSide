// table of advisees builder
let allEmailAddresses;
let compositeArray = {total: 0, PoS: 0, cr_hrs_left: 0, pilot_study: 0, comps: 0, candidacy: 0, proposal: 0, dissertation: 0, graduation: 0};

function buildAdviseeTable(data){
    //const data = [menteeOne, menteeOne, mentorOne, adviseeOne, menteeOne, mentorOne, adviseeOne, menteeOne, mentorOne, adviseeOne, menteeOne, mentorOne]; // any json data or array of objects
    updateCompositeArray('total', data.length);
    let sortedData = data.sort((a, b) => a.status.admitted - b.status.admitted);
    const tableData = sortedData.map(function(student){
        return (
            `<tr>
             <td><img class="profile" src=images/${student.imageFile} onclick="buildEditStudent(${student.adviseeID})"></td>
             <td>${student.fName} ${student.lName}<br><br>${checkPortfolio(student.portfolioURL)}</td>
             <td> 
             <a href="mailto:${student.email}">email</a>
             </td>
             <td>${student.program} ${student.researchInterests.join(", ")}</td>
             <td>${student.funding}</td>
             <td>${unlDateToReadableDate(student.status.admitted)}</td>
             <td>${student.committee.join(", ")}</td>
             <td>${doneOrNot(student.status.PoS, 'PoS')}</td>
             <td><span title="${student.status.courses_taken}">${doneOrNot(student.status.cr_hrs_taken, 'cr_hrs_taken')}</span></td>
             <td>${doneOrNot(student.status.pilot_study, 'pilot_study')}</td>
             <td>${doneOrNot(student.status.comps, 'comps')}</td>
             <td>${doneOrNot(student.status.candidacy, 'candidacy')}</td>
             <td>${doneOrNot(student.status.proposal, 'proposal')}</td>
             <td>${doneOrNot(student.status.dissertation, 'dissertation')}</td>
             <td>${doneOrNot(student.status.graduation, 'graduation')}</td>
         </tr>`
        );
    }).join('');

    const tableBody = document.querySelector("#tableBody");
    tableBody.innerHTML = tableData;

    allEmailAddresses = data.map(e => e.email);

    buildMiddleLeftCompositeReport();
}

function checkImage(personObject){
    if (personObject.imageURL.length > 4){
        return personObject.imageURL;
    } else {
        return `images/${personObject.imageFile}`;
    }
}

function buildMiddleLeftCompositeReport(){
    //console.log('building middle left report');
    const compositeReport = `<b>Total Advisees</b> ${compositeArray.total}<br><br><b>PoS Completed</b> ${compositeArray.PoS}/${compositeArray.total}<br><br><b>Coursework Completed</b> ${compositeArray.cr_hrs_left}/${compositeArray.total}<br><br><b>Pilot Study Completed</b> ${compositeArray.pilot_study}/${compositeArray.total}<br><br><b>Comps Completed</b> ${compositeArray.comps}/${compositeArray.total}<br><br><b>Advanced to Candidacy</b> ${compositeArray.candidacy}/${compositeArray.total}<br><br><b>Proposal Accepted</b> ${compositeArray.proposal}/${compositeArray.total}<br><br><b>Dissertation Defended</b> ${compositeArray.dissertation}/${compositeArray.total}<br><br><b>Advisees Graduated</b> ${compositeArray.graduation}/${compositeArray.total}<br>`;
    document.getElementById("compositeReport").innerHTML = compositeReport;
}

function checkPortfolio(portfolioInfo){
    if (portfolioInfo.length > 4){
        return `<a target="_blank" rel="noopener noreferrer" href=${portfolioInfo}>portfolio</a>`
    } else {
        return "";
    }
}

function unlDateToReadableDate(unlDate){
    let semester;
    if (typeof unlDate === 'string'){
        return "pre enrolled";
    } else {
        let stringUNLdate = unlDate.toString();
        if (stringUNLdate.slice(-1) === '8'){
            semester = 'Fall';
        } else if (stringUNLdate.slice(-1) === '1'){
            semester = 'Spring';
        } else {
            semester = 'Summer';
        }
        let readableYear = '20' + stringUNLdate.slice(1, 3);
        let readableDate = `${semester} ${readableYear}`;
        return readableDate;
    }
}

function doneOrNot(passedValue, facet){
    switch(facet)
    {
        case "PoS":
        case "pilot_study":
        case "comps":
        case "candidacy":
        case "proposal":
        case "dissertation":
        case "graduation":
            if (passedValue === "in progress"){
                return passedValue;
            } else if (passedValue !== "" && passedValue !== 'needed'){
                //console.log(facet, 'passedValue', passedValue, 'not empty string');
                updateCompositeArray(facet, 1);
                return passedValue;
            }
            else {
                return 'Needed';
            }
        case "cr_hrs_taken":
            console.log('cr_hrs_taken passedValue', passedValue, facet);
            if (passedValue > 44){
                    updateCompositeArray(facet, 1);
                    return passedValue;
                } else {
                return passedValue;
            }
        default:
            console.log('Something got through doneOrNot function', facet, passedValue);
    }
}

function updateCompositeArray(facet, value){
    if (facet == 'total'){
        compositeArray.total = value;
        //console.log('updating total', facet, value, compositeArray.total);
    } else {
        compositeArray[facet] += value;
        //console.log('updating', facet, 'value is now', compositeArray[facet]);
    }
}

function emailAll(){
    window.location = `mailto:${allEmailAddresses.join(";")}`;
}
