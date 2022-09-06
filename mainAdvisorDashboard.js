//dashboard for Advisee
let facultyLocalStorageObject;
let facultyObject;
let facultyAdviseesArray;

// #1 checks local storage for login credentials
function loggedInCheck(message = " "){
    // if loggedIn go to dB get student documents matching advisor name/ID and call displayAdvisor
    facultyLocalStorageObject = checkLocalStorage();
    if (facultyLocalStorageObject.inLocalStorage == 1){
        console.log('loggedInCheck found in local storage');
        document.getElementById("advisor").innerHTML = `AdvisingHelper<div id="logout" style="float: right;"> <button id="facultyLogout" > log out </button></div>`;
        document.getElementById("facultyLogout").addEventListener("click", clearLocalStorage);
        loginDBattempt(facultyLocalStorageObject);
    } else {
        // if notLoggedIn display login area, set listener that calls loginAttempt function
        console.log('loggedInCheck not found in local storage');
        document.getElementById("advisor").innerHTML = `<div id="loginFields">
            <b>AdvisingHelper</b> <div style="float: right;"> Log in as a faculty member: 
            <input type="text" id="UID" name="UID" placeholder="University ID">  </input>
            <input type="email" name="email" id="email" placeholder="email">  </input>
            <button id="facultyLogin" > log in </button>
            <br><span style="color:rebeccapurple" id="logStatus">${message}</span></div>
            </div>`;
        document.getElementById("facultyLogin").addEventListener("click", facultyLoginPrep);
    }
}

// #2 if found go to #3 if not create form and process #3.n
function checkLocalStorage(){
    console.log('checking local storage');
    let facultyUser = localStorage.getItem("advisingHelperFacultyUserInfo");
    console.log('facultyUser value:', facultyUser);
    if (facultyUser) {
        let facultyUserObject = JSON.parse(facultyUser);
        let uNUID = facultyUserObject.UID;
        let uEmail = facultyUserObject.email;
        if (uNUID != null) {
            return {"UID": uNUID, "email": uEmail, "inLocalStorage": 1};
        } else {
            return {"inLocalStorage": 0};
        }
    } else {
        // build / show login form elements
        return {"inLocalStorage": 0};
    }
}

// #? set storage
function setLocalStorage(fLocalStorageObject){
    console.log('setLocalStorage running', fLocalStorageObject);
    facultyLocalStorageObject = fLocalStorageObject;
    let fLocalStorageObjectStringified = JSON.stringify(fLocalStorageObject);
    localStorage.setItem("advisingHelperFacultyUserInfo", fLocalStorageObjectStringified);
}

// #? clear item from localStorage
function clearLocalStorage(){
    localStorage.removeItem("advisingHelperFacultyUserInfo");
    loggedInCheck('You are logged out');
}

// #3
async function loginDBattempt(localStorageObject){
    // return mongoDB find request that matches NUID and email
    console.log('loginDBattempt passed param', localStorageObject);
    let theDBresults = await facultyLoginMongoDB(localStorageObject);
    console.log('loginDBattempt theDBresults', theDBresults);
    if (theDBresults.payload.facultyObject.length > 0){
        facultyObject = theDBresults.payload.facultyObject[0];
        let advisorIDqueryInStudent = `?field=advisor&value=${facultyObject._id}`;
        console.log("facultyObject", facultyObject, "_id", facultyObject._id, "query", advisorIDqueryInStudent);
        facultyAdviseesArray = await fetchStudentGETmongoDB(advisorIDqueryInStudent);
        console.log('facultyAdviseesArray length is:', facultyAdviseesArray.length);
        if (facultyAdviseesArray.length > 0){
            displayAdvisor(facultyAdviseesArray);
        } else {
            console.log('you have no advisees, either add some or go enjoy a coffee');
        }
        if (facultyLocalStorageObject.inLocalStorage == 0 && facultyObject.NUID != null && facultyObject.Email != null){
            let storageObject = {"UID": facultyObject.NUID, "email": facultyObject.Email, "inLocalStorage": 1};
            await setLocalStorage(storageObject);
        }
    } else {
        loggedInCheck("your login credentials do not match the database please try again or register")
    }
}

// #3.n
function facultyLoginPrep(){
    let UID = document.getElementById("UID").value;
    let email = document.getElementById("email").value;
    if (UID.length > 3 && email.length > 5) {
        loginDBattempt({"UID": UID, "email": email, "inLocalStorage": 0});
    }
}

// #4
function displayAdvisor (){
    document.getElementById("advisor").innerHTML = `<div id="adviseeDashboard" class="grid-container"> 
          <div id="topLeft" class="grid-item">topLeft</div>
          <div id="topBanner" class="grid-item">topBanner</div>
          <div id="topRight" class="grid-item">
            <img id="botFace" src="images/botface.fw.png">
            <p id="transcript">- </p>
            <input type="text" id="chatInput" name="chatInput" onfocus="this.value=''" />
            <input type="button" id='buttonChat' class="buttonChat" value="Chat Button" onclick="getChatResponse()" />
          </div>
          <div id="middleLeft" class="grid-item"> <b>Click on a profile image to update student info > </b><br><br>
            <div id="compositeReport"></div>
          </div>
          <div id="middleMiddle" class="grid-item">
          <table id="tableOfAdvisees">
          <thead class="thead-dark">
          <tr>
            <th scope="col">Image</th>
            <th scope="col">Name</th>
            <th scope="col">Email <br>
            <input type="button" id='buttonEmailAll' class="buttonChat" value="email all" onclick="emailAll()" />
            </th>
            <th scope="col">Program & Interests</th>
            <th scope="col">Funding</th>
            <th scope="col">Admitted</th>
            <th scope="col">Committee</th>
            <th scope="col">Plan of Study</th>
            <th scope="col">Cr hrs taken</th>
            <th scope="col">Pilot Study</th>
            <th scope="col">Comps</th>
            <th scope="col">Candidacy</th>
            <th scope="col">Proposal</th>
            <th scope="col">Dissertation</th>
            <th scope="col">Graduation</th>
            </tr>
            </thead>
            <tbody id="tableBody">
            
            </tbody>
            </table>
          </div>
          <div id="middleRight" class="grid-item">
            <input type="button" id="showInviteStudentForm" class="buttonChat" value="Invite Multiple Advisees to Add Themselves" onclick="buildInviteStudents()" />
            <input type="button" id="showAddStudentForm" class="buttonChat" value="Add New Advisee Yourself" onclick="buildAddStudent()" /><br> 
            <div id="middleRightFormDiv"></div>
          </div>
      </div>`;
    document.getElementById("topLeft").innerHTML = `AdvisingHelper<br><br><div id="logout" > <button id="facultyLogout" > log out </button></div>`;
    document.getElementById("facultyLogout").addEventListener("click", clearLocalStorage);
    //let adviseesArray = processAdvisees(facultyAdviseesArray); //array from studentJSON.js
    buildAdviseeTable(adviseesArray);
}

// displayAdvisor();

loggedInCheck();
