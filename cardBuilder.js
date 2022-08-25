//builds student, mentor, mentee, and faculty cards

function buildWebCards(divName, peopleArray){
    peopleArray.forEach( (person, index) =>  document.getElementById(divName).innerHTML += `<div class=${person.class}><div class="card-header card-image"> <img src=${checkImage(person)}> </div> 
  <div class="card-body"><b>${person.role}</b>: ${person.fName} <br> ${person.researchInterests.join(", ")}</div>
  <div class="card-footer"><button class="btn" onclick=" window.open('${person.website}','_blank')">Info</button><button class="btn btn-outline" onclick="window.location.href='mailto:${person.email}';">Contact</button></div></div>`
    );
}

function checkImage(personObject){
    if (personObject.imageURL.length > 4){
        return personObject.imageURL;
    } else {
        return `images/${personObject.imageFile}`;
    }
}
