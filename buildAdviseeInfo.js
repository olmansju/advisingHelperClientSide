// this file builds student info and updates a student file object on the advisee side

function buildStudentSelfEditInfo(){
    console.log('buildStudentSelfEditInfo function called', randomStudent);
    document.getElementById("notes").innerHTML = `
    <p id="formDirections"> Editing info for <b>${randomStudent.fName} ${randomStudent.lName}</b>... </p>
      <form id="editSelfStudentForm">
        <label for="fName"> First Name: </label>
        <input type="text" name="fName" id="fName" value="${randomStudent.fName}" required size="35" maxlength="45"><br><br>
        <label for="email"> email: </label>
        <input type="text" name="email" id="email" value="${randomStudent.email}" required size="35" maxlength="45"><br><br>
        <label for="interests"> interests (separate w commas): </label>
        <input type="text" name="interests" id="interests" value="${randomStudent.researchInterests.join(', ')}" size="35" maxlength="45"><br><br>
        
        <label for="currentGoals"> current milestone: </label>
        <select name="currentGoals" id="currentGoals">
        <option value="firstSemester" ${selectedCheck('firstSemester', randomStudent.currentGoals)}> First Semester</option>
        <option value="PoS" ${selectedCheck('PoS', randomStudent.currentGoals)} > Plan of Study</option>
        <option value="coursework" ${selectedCheck('coursework', randomStudent.currentGoals)}> Coursework</option>
        <option value="comps" ${selectedCheck('comps', randomStudent.currentGoals)}> Comps</option>
        <option value="proposal" ${selectedCheck('proposal', randomStudent.currentGoals)}> Proposal</option>
        <option value="dissertation" ${selectedCheck('dissertation', randomStudent.currentGoals)}> Dissertation</option>
        <option value="graduation" ${selectedCheck('graduation', randomStudent.currentGoals)}> Graduation</option>
        </select><br><br>
        
        <label for="portfolioURL"> portfolio url: </label>
        <input type="text" name="portfolioURL" id="portfolioURL" value="${randomStudent.portfolioURL}" size="35"><br><br>
        
        <label for="committee"> committee (separate w commas): </label>
        <input type="text" name="committee" id="committee" value="${randomStudent.committee.join(', ')}" size="55" maxlength="85"><br><br>
        <label for="PoS"> Plan of Study (format: YYYY/MM/DD or leave blank): </label>
        <input type="text" id="PoS" name="PoS" value="${randomStudent.status.PoS}"><br><br>
        
        <label for="courses"> Courses Taken (TEAC 859, EDPS 800): </label>
        <textarea id="courses" name="courses"> ${randomStudent.status.courses_taken} </textarea><br><br>
        
        <label for="pilot_study"> Pilot Study (format: YYYY/MM/DD 'in progress' or leave blank): </label>
        <input type="text" id="pilot_study" name="pilot_study" value="${randomStudent.status.pilot_study}"><br><br>
        
        <label for="comps"> Comprehensive Exam (YYYY/MM/DD 'in progress' or leave blank): </label>
        <input type="text" id="comps" name="comps" value="${randomStudent.status.comps}"><br><br>
        
        <label for="proposal"> Proposal (YYYY/MM/DD 'in progress' or leave blank): </label>
        <input type="text" id="proposal" name="proposal" value="${randomStudent.status.proposal}"><br><br>
        
        <label for="dissertation"> Dissertation (YYYY/MM/DD 'in progress' or leave blank): </label>
        <input type="text" id="dissertation" name="dissertation" value="${randomStudent.status.dissertation}"><br><br>
        
        <label for="graduation"> Graduation (YYYY/MM/DD 'in progress' or leave blank): </label>
        <input type="text" id="graduation" name="graduation" value="${randomStudent.status.graduation}"><br><br>
        
        <label for="imageURL">Update profile image:</label>
          <input type="url" id="imageURL" name="imageURL" size="50" value="${randomStudent.imageURL}"> <br><br>
        <button id="updateSelfStudent">Update</button> <p id="statusUpdate"> </p>
      </form>
    `;
}

document.addEventListener('click', function(event){
    console.log('eventListener ', event.target.id);
    if (event.target.id === "updateSelfStudent"){
        compareFormFieldsToObjectValuesSelfStudent();
        event.preventDefault();
    }
})

function selectedCheck(milestone, existingGoals){
    if (milestone === existingGoals[0]){
        return "selected";
    } else {
        return "";
    }
}

function compareFormFieldsToObjectValuesSelfStudent(){

    let fNameField = document.forms[0].querySelector('input[name="fName"]').value;
    let fNameUpdate = (randomStudent.fName !== fNameField) ? (randomStudent.fName = fNameField) : "same";

    let emailField = document.forms[0].querySelector('input[name="email"]').value;
    let emailUpdate = (randomStudent.email !== emailField) ? (randomStudent.email = emailField) : "same";

    let researchField = document.forms[0].querySelector('input[name="interests"]').value.split(',');
    let researchUpdate = (randomStudent.researchInterests !== researchField) ? (randomStudent.researchInterests = researchField) : "same";

    let goalsField = document.querySelector("#currentGoals").value;
    let goalsUpdate = (randomStudent.currentGoals[0] !== goalsField) ? (randomStudent.currentGoals = [goalsField]) : "same";
    console.log('goalsField', goalsField, 'thisStudent', randomStudent);

    let portfolioUrlField = document.forms[0].querySelector('input[name="portfolioURL"]').value;
    let portfolioUrlUpdate = (randomStudent.portfolioURL !== portfolioUrlField) ? (randomStudent.portfolioURL = portfolioUrlField) : "same";

    let committeeField = document.forms[0].querySelector('input[name="committee"]').value.split(',');
    let committeeUpdate = (randomStudent.committee !== committeeField) ? (randomStudent.committee = committeeField) : "same";

    let posField = document.forms[0].querySelector('input[name="PoS"]').value;
    let posUpdate = (randomStudent.PoS !== posField) ? (randomStudent.PoS = posField) : "same";

    let coursesField = document.getElementById("courses").value.split(',');
    let coursesUpdate = (randomStudent.status.courses_taken !== coursesField) ? (randomStudent.status.courses_taken = coursesField) : "same";

    let pilot_studyField = document.forms[0].querySelector('input[name="pilot_study"]').value;
    let pilot_studyUpdate = (randomStudent.status.pilot_study !== pilot_studyField) ? (randomStudent.status.pilot_study = pilot_studyField) : "same";

    let compsField = document.forms[0].querySelector('input[name="comps"]').value;
    let compsUpdate = (randomStudent.status.comps !== compsField) ? (randomStudent.status.comps = compsField) : "same";

    let proposalField = document.forms[0].querySelector('input[name="proposal"]').value;
    let proposalUpdate = (randomStudent.status.proposal !== proposalField) ? (randomStudent.status.proposal = proposalField) : "same";

    let dissertationField = document.forms[0].querySelector('input[name="dissertation"]').value;
    let dissertationUpdate = (randomStudent.status.dissertation !== dissertationField) ? (randomStudent.status.dissertation = dissertationField) : "same";

    let graduationField = document.forms[0].querySelector('input[name="graduation"]').value;
    let graduationUpdate = (randomStudent.status.graduation !== graduationField) ? (randomStudent.status.graduation = graduationField) : "same";

    let imageURLField = document.forms[0].querySelector('input[name="imageURL"]').value;
    let imageURLUpdate = (randomStudent.imageURL !== imageURLField) ? (randomStudent.imageURL = imageURLField) : "same";

    displayAdvisee(randomStudent);
    buildTimelineCards('timeline', randomStudent);
}
