//dashboard for Advisee

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
    let adviseesArray = processAdvisees(adviseesJustinJSONarray); //array from studentJSON.js
    buildAdviseeTable(adviseesArray);
    sendOnceToMongoDbfac(adviseesArray);

}

function sendOnceToMongoDbfac(theStudentArray){
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(theStudentArray),
        info: 'studentSendOnce'
    };
    fetch('/justin/advisorHelper', options).then(response => response.json()).then(returnedJSON => {
        console.log('the return from student sendOnce', returnedJSON);
    });
}

displayAdvisor();
