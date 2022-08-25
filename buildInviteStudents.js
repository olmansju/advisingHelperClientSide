//builds an invite students form

function buildInviteStudents(){
    console.log('buildInviteStudents function called');
    document.getElementById("middleRightFormDiv").innerHTML = `
    <p id="formDirections"> <b>Invite one or more students to add themselves to the advising platform...</b> </p>
      <form id="inviteStudentsForm">
        
        <label for="emailAddresses"> add email addresses here separate w semicolons ; </label>
        <textarea name="emailAddresses" id="emailAddresses" required></textarea><br><br>
        
        <label for="subject"> Subject: </label>
        <input type="text" name="subject" id="subject" required size="45" maxlength="45" value="Please join my advising portal"><br><br>
        <label for="body"> email body: </label>
        <textarea name="body" id="body" required> Hi, \n
I use an advising platform which I'd like you to join. It will help you know what to expect as you work your way through different degree-related milestones and it will help me see your progress along the way. You will need to know your University ID number (NUID) and you will need to upload a profile image of yourself (you can right-click on your LinkedIn profile image and use that if you like). \n
This process should take you about 5 minutes. Just go to: https://adviseeHelper.online \n 
If you are just entering the program you will leave most of the fields blank (because you have not completed most of the milestones yet). \n 
My best, \n 
        </textarea><br><br>
        
        <button id="inviteStudents">Load Invite Into Email Client</button> 
        <p id="statusUpdate"> </p>
      </form>
    `;
}

function sendInvitesToEmailClient(){
    let emailAddressesField = document.getElementById("emailAddresses").value.split(';');
    let subjectField = document.forms[0].querySelector('input[name="subject"]').value;
    let bodyField = document.getElementById("body").value;
    window.location = `mailto:${emailAddressesField.join(';')}?subject=${subjectField}&body=${encodeURIComponent(bodyField)}`
}
