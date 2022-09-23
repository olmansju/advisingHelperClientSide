//builds an edit student section
let thisStudent;

function buildEditStudent(NUid, lName){
    console.log('buildEditStudent function called', 'NUid value', NUid, 'lName value', lName);
    thisStudent = newArray.find(x => x.adviseeID === NUid && x.lName === lName);
    console.log('thisStudent', thisStudent);
    document.getElementById("middleRightFormDiv").innerHTML = `
    <p id="formDirections"> Editing info for <b>${thisStudent.fName} ${thisStudent.lName}</b>... </p>
      <form id="editStudentForm">
        <label for="email"> email: </label>
        <input type="text" name="email" id="email" value="${thisStudent.email}" required size="35" maxlength="45"><br><br>
        <label for="interests"> interests: </label>
        <input type="text" name="interests" id="interests" value="${thisStudent.researchInterests}" size="35" maxlength="45"><br><br>
        <label for="funding"> funding: </label>
        <input type="text" name="funding" id="funding" value="${thisStudent.funding}" size="55" maxlength="85"><br><br>
        <label for="committee"> committee (separate w commas): </label>
        <input type="text" name="committee" id="committee" value="${thisStudent.committee}" size="55" maxlength="85"><br><br>
        <label for="PoS"> Plan of Study (format: YYYY/MM/DD or leave blank): </label>
        <input type="text" id="PoS" name="PoS" value="${thisStudent.status.PoS}"><br><br>
        
        <label for="courses"> Courses Taken (TEAC 859, EDPS 800): </label>
        <textarea id="courses" name="courses"> ${thisStudent.status.courses_taken} </textarea><br><br>
        
        <label for="pilot_study"> Pilot Study (format: YYYY/MM/DD 'in progress' or leave blank): </label>
        <input type="text" id="pilot_study" name="pilot_study" value="${thisStudent.status.pilot_study}"><br><br>
        
        <label for="comps"> Comprehensive Exam (YYYY/MM/DD 'in progress' or leave blank): </label>
        <input type="text" id="comps" name="comps" value="${thisStudent.status.comps}"><br><br>
        
        <label for="proposal"> Proposal (YYYY/MM/DD 'in progress' or leave blank): </label>
        <input type="text" id="proposal" name="proposal" value="${thisStudent.status.proposal}"><br><br>
        
        <label for="dissertation"> Dissertation (YYYY/MM/DD 'in progress' or leave blank): </label>
        <input type="text" id="dissertation" name="dissertation" value="${thisStudent.status.dissertation}"><br><br>
        
        <label for="graduation"> Graduation (YYYY/MM/DD 'in progress' or leave blank): </label>
        <input type="text" id="graduation" name="graduation" value="${thisStudent.status.graduation}"><br><br>
        
        <label for="imageURL">Link to profile image:</label>
          <input type="url" id="imageURL" name="imageURL" size="50" value="${thisStudent.imageURL}"> <br><br>
        <button id="updateStudent">Update</button> <p id="statusUpdate"> </p>
      </form>
    `;
}

document.addEventListener('click', function(event){
    console.log('eventListener ', event.target.id);
    if (event.target.id === "updateStudent"){
        compareFormFieldsToObjectValues();
        event.preventDefault();
    } else if (event.target.id === "addStudent"){
        makeAndInsertStudentObjectIntoStudentArray(); //see buildAddStudent.js
        event.preventDefault();
    } else if (event.target.id === "showAddStudentForm"){
        buildAddStudent(); //see buildAddStudent.js
        event.preventDefault();
    } else if (event.target.id === "showInviteStudentForm"){
        buildInviteStudents(); //see buildInviteStudents.js
        event.preventDefault();
    } else if (event.target.id === "inviteStudents"){
        sendInvitesToEmailClient(); //see buildInviteStudents.js
        event.preventDefault();
    }
})

function compareFormFieldsToObjectValues(){
    let changedFields = {};

    let emailField = document.forms[0].querySelector('input[name="email"]').value;
    const emailUpdate = (thisStudent.email !== emailField) ? (thisStudent.email = emailField, changedFields['email'] = emailField) : "same";

    let researchField = document.forms[0].querySelector('input[name="interests"]').value.split(',');
    const researchUpdate = (thisStudent.researchInterests !== researchField) ? (thisStudent.researchInterests = researchField, changedFields['researchInterests'] = researchField) : "same";

    let fundingField = document.forms[0].querySelector('input[name="funding"]').value;
    const fundingUpdate = (thisStudent.funding !== fundingField) ? (thisStudent.funding = fundingField, changedFields['funding'] = fundingField) : "same";

    let committeeField = document.forms[0].querySelector('input[name="committee"]').value.split(',');
    const committeeUpdate = (thisStudent.committee !== committeeField) ? (thisStudent.committee = committeeField, changedFields['committee'] = committeeField) : "same";

    let posField = document.forms[0].querySelector('input[name="PoS"]').value;
    const posUpdate = (thisStudent.PoS !== posField) ? (thisStudent.PoS = posField, changedFields['PoS'] = posField) : "same";

    let coursesField = document.getElementById("courses").value.split(',');
    const coursesUpdate = (thisStudent.status.courses_taken !== coursesField) ? (thisStudent.status.courses_taken = coursesField, changedFields['courses_taken'] = coursesField) : "same";

    let pilot_studyField = document.forms[0].querySelector('input[name="pilot_study"]').value;
    const pilot_studyUpdate = (thisStudent.status.pilot_study !== pilot_studyField) ? (thisStudent.status.pilot_study = pilot_studyField, changedFields['pilot_study'] = pilot_studyField) : "same";

    let compsField = document.forms[0].querySelector('input[name="comps"]').value;
    const compsUpdate = (thisStudent.status.comps !== compsField) ? (thisStudent.status.comps = compsField, changedFields['comps'] = compsField) : "same";

    let proposalField = document.forms[0].querySelector('input[name="proposal"]').value;
    const proposalUpdate = (thisStudent.status.proposal !== proposalField) ? (thisStudent.status.proposal = proposalField, changedFields['proposal'] = proposalField) : "same";

    let dissertationField = document.forms[0].querySelector('input[name="dissertation"]').value;
    const dissertationUpdate = (thisStudent.status.dissertation !== dissertationField) ? (thisStudent.status.dissertation = dissertationField, changedFields['dissertation'] = dissertationField) : "same";

    let graduationField = document.forms[0].querySelector('input[name="graduation"]').value;
    const graduationUpdate = (thisStudent.status.graduation !== graduationField) ? (thisStudent.status.graduation = graduationField, changedFields['graduation'] = graduationField) : "same";

    let imageURLField = document.forms[0].querySelector('input[name="imageURL"]').value;
    const imageURLUpdate = (thisStudent.imageURL !== imageURLField) ? (thisStudent.imageURL = imageURLField, changedFields['imageURL'] = imageURLField) : "same";

    if (Object.keys(changedFields).length > 0){
        buildAdviseeTable(newArray);
        updateAdvisee(thisStudent.adviseeID, changedFields);
    }
}

function updateAdvisee(id, changedFieldsObject){
    // send id and changedFieldsObject to server side for updating
}
