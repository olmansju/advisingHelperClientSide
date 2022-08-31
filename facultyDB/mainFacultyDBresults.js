// references mongoDBtraffic.js function

function displayResults(theReturnedJSON){
    console.log('displayResults', theReturnedJSON.payload);
    let payload = theReturnedJSON.payload;
    document.getElementById("facultyDBresults").innerHTML += `Faculty data documents are:<br>`;
    payload.forEach(record => {
        document.getElementById("facultyDBresults").innerHTML += `<br> ${JSON.stringify(record)} <br>`;
    })
}

fetchFacultyGETmongoDB();