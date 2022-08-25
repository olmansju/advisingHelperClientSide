//builds an add student section
let thisNewStudent;

function buildAddStudent(){
    console.log('buildAddStudent function called');
    document.getElementById("middleRightFormDiv").innerHTML = `
    <p id="formDirections"> <b>Adding new student...</b> </p>
      <form id="addStudentForm">
        <label for="fName"> first name: </label>
        <input type="text" name="fName" id="fName" required size="35" maxlength="45"><br><br>
        <label for="lName"> family name: </label>
        <input type="text" name="lName" id="lName" required size="35" maxlength="45"><br><br>
        <label for="NUID"> NUID: </label>
        <input type="text" name="NUID" id="NUID" required size="35" maxlength="45"><br><br>
        <label for="email"> email: </label>
        <input type="text" name="email" id="email" required size="35" maxlength="45"><br><br>
        <label for="program"> Program (EDUS-PHD (INLT-SPC)): </label>
        <input type="text" id="program" name="program" ><br><br>
        <label for="interests"> research interests: </label>
        <input type="text" name="interests" id="interests" size="35" maxlength="45"><br><br>
        <label for="funding"> funding ($16,000 GA, $3,000 Fellowships or leave blank if none): </label>
        <input type="text" name="funding" id="funding" size="55" maxlength="85"><br><br>
        
        <label for="admitted"> Admitted (format: YYYY/MM/DD or leave blank): </label>
        <input type="text" id="admitted" name="admitted" ><br><br>
        <label for="PoS"> Plan of Study (format: YYYY/MM/DD or leave blank): </label>
        <input type="text" id="PoS" name="PoS" ><br><br>
        <label for="committee"> committee (separate w commas): </label>
        <input type="text" name="committee" id="committee"  size="55" maxlength="85"><br><br>
        
        <label for="courses"> Courses Taken (TEAC 859, EDPS 800): </label>
        <textarea id="courses" name="courses">  </textarea><br><br>
        
        <label for="pilot_study"> Pilot Study (format: YYYY/MM/DD 'in progress' or leave blank): </label>
        <input type="text" id="pilot_study" name="pilot_study"><br><br>
        
        <label for="comps"> Comprehensive Exam (YYYY/MM/DD 'in progress' or leave blank): </label>
        <input type="text" id="comps" name="comps" ><br><br>
        
        <label for="proposal"> Proposal (YYYY/MM/DD 'in progress' or leave blank): </label>
        <input type="text" id="proposal" name="proposal" ><br><br>
        
        <label for="dissertation"> Dissertation (YYYY/MM/DD 'in progress' or leave blank): </label>
        <input type="text" id="dissertation" name="dissertation"><br><br>
        
        <label for="graduation"> Graduation (YYYY/MM/DD 'in progress' or leave blank): </label>
        <input type="text" id="graduation" name="graduation" ><br><br>
        
        <label for="imageURL">Link to profile image (should end in .jpg or .png):</label>
          <input type="url" id="imageURL" name="imageURL" size="50"> <br><br>
        <button id="addStudent">Add</button> 
        <p id="statusUpdate"> </p>
      </form>
    `;
}

function makeAndInsertStudentObjectIntoStudentArray(){
    let fNameField = document.forms[0].querySelector('input[name="fName"]').value;
    let lNameField = document.forms[0].querySelector('input[name="lName"]').value;
    let NUIDField = document.forms[0].querySelector('input[name="NUID"]').value;
    let emailField = document.forms[0].querySelector('input[name="email"]').value;
    let programField = document.forms[0].querySelector('input[name="program"]').value.split(',');
    let researchField = document.forms[0].querySelector('input[name="interests"]').value.split(',');
    let fundingField = document.forms[0].querySelector('input[name="funding"]').value;

    let admittedField = document.forms[0].querySelector('input[name="admitted"]').value;
    let posField = document.forms[0].querySelector('input[name="PoS"]').value;
    let committeeField = document.forms[0].querySelector('input[name="committee"]').value.split(',');
    let coursesField = document.getElementById("courses").value.split(','); //this may break things as it needs to be changed elsewhere
    let pilot_studyField = document.forms[0].querySelector('input[name="pilot_study"]').value;
    let compsField = document.forms[0].querySelector('input[name="comps"]').value;
    let proposalField = document.forms[0].querySelector('input[name="proposal"]').value;
    let dissertationField = document.forms[0].querySelector('input[name="dissertation"]').value;
    let graduationField = document.forms[0].querySelector('input[name="graduation"]').value;

    let imageURLField = document.forms[0].querySelector('input[name="imageURL"]').value;

    thisNewStudent = new Advisee(fNameField, lNameField, Number(NUIDField), emailField, "", fundingField, researchField, [], [],  committeeField, `${advisorOne}`, "", "", programField, {admitted: Number(admittedField), PoS: posField, cr_hrs_left: 0, pilot_study: pilot_studyField, comps: compsField, candidacy: compsField, proposal: proposalField, dissertation: dissertationField, graduation: graduationField, courses_taken: coursesField }, imageURLField);
    newArray.push(thisNewStudent);
    console.log('thisNewStudent', thisNewStudent, 'newArray', newArray);
    buildAdviseeTable(newArray);
}
