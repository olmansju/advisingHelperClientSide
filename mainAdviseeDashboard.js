//dashboard for Advisee

function displayAdvisee (adviseeObject){
    let inProgress = getInProgress(adviseeObject.status);
    document.getElementById("advisee").innerHTML = `<div id="adviseeDashboard" class="grid-container"> 
          <div id="event" class="grid-item">event</div>
          <div id="timeline" class="grid-item"></div>
          <div id="adviseeAccount" class="grid-item">
          <img src="./images/${adviseeObject.imageFile}"> <br>${adviseeObject.fName} ${adviseeObject.lName}<br>
          </div>
          <div id="adviseeInfo" class="grid-item"> 
          <input type="button" id="showEditStudentForm" class="buttonChat" value="Update Your Info" onclick="buildStudentSelfEditInfo()" />
          <div id="adviseeInfoDIV"></div>
          <b>First Name:</b> ${adviseeObject.fName} <br><br>
          <b>Email:</b> ${adviseeObject.email} <br><br>
          <b>Program:</b> ${adviseeObject.program} <br><br>
          <b>Funding:</b><br> ${adviseeObject.funding} <br><br>
          <b>Research Interests:</b><br> ${adviseeObject.researchInterests.join(', ')} <br><br>
          <b>Committee:</b><br> ${adviseeObject.committee.join(', ')} <br><br>
          <b>Working on:</b><br> ${adviseeObject.currentGoals}<br><br>
          <a target="_blank" rel="noopener noreferrer" href=${adviseeObject.portfolioURL}>Portfolio</a>
          </div>
          <div id="notes" class="grid-item"></div>
          <div id="mentorMentee" class="grid-item"></div>
          <div id="bot" class="grid-item">AdviseeHelperBot <br><br>
            <img id="botFace" src="images/botface.fw.png">
            <p id="transcript">- </p>
            <input type="text" id="chatInput" name="chatInput" onfocus="this.value=''" /><br>
            <input type="button" id='buttonChat' class="buttonChat" value="Chat Button" onclick="getChatResponse()" />
          </div>
          <div id="committee" class="grid-item">Your team: <div id="committeeCards"></div></div>
          <div id="gradChair" class="grid-item"></div>
      </div>`;

    let facultyArray = processFaculty(facultyJSONarray);

    addGradChair(facultyArray[facultyArray.length - 1]);
    //addMenteeMentor(mentorOne, menteeOne);
    addTeam(facultyArray[0], facultyArray[1], facultyArray[2], facultyArray[3], newArray[2], newArray[3]);
    addTimeline(randomStudent);
    buildBot();
}

function addTimeline(timelineObject){
    buildTimelineCards('timeline', timelineObject); //timeline card
}

function addGradChair(chairObject){
    chairObject.role = "Grad Chair";
    chairObject.class = "card";
    buildWebCards('gradChair', [chairObject]); //advisor card
}

function addMenteeMentor(mentorObject, menteeObject){
    menteeObject.role = "Mentee";
    menteeObject.class = "card";
    mentorObject.role = "Mentor";
    menteeObject.class = "card";
    buildWebCards('mentorMentee', [menteeObject, mentorObject]); //mentorMentee cards
}

function addTeam(advisorObjectOne, advisorObjectTwo, advisorObjectThree, advisorObjectFour, mentorObject, menteeObject){
    advisorObjectOne.role = "Chair";
    advisorObjectOne.class = "column";
    advisorObjectTwo.role = "Member";
    advisorObjectTwo.class = "column";
    advisorObjectThree.role = "Member";
    advisorObjectThree.class = "column";
    advisorObjectFour.role = "Member";
    advisorObjectFour.class = "column";
    mentorObject.role = "Mentor";
    menteeObject.class = "column";
    menteeObject.role = "Mentee";
    menteeObject.class = "column";
    buildWebCards('committeeCards', [advisorObjectOne, advisorObjectTwo, advisorObjectThree, advisorObjectFour, mentorObject, menteeObject]); //committee cards
}

function getInProgress(statusObject){
    for (item in statusObject){
        console.log('getInProgressFunction', statusObject[item]);
        if (statusObject[item] == "in progress") {
            return item;
        }
    }
}

//get random student
let adviseesArray = processAdvisees(adviseesJustinJSONarray); //array from studentJSON.js
let randomStudent = adviseesArray[Math.floor(Math.random()*adviseesArray.length)];
displayAdvisee(randomStudent);
