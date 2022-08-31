// references mongoDBtraffic.js function

function displayResults(theReturnedJSON){
    console.log('displayResults', theReturnedJSON);
    document.getElementById('facultyDBresults').innerText = '';
    document.getElementById("facultyDBresults").innerHTML += `Faculty data documents are:<br>`;
    theReturnedJSON.forEach(record => {
        document.getElementById("facultyDBresults").innerHTML += `<br> ${JSON.stringify(record)} <br>`;
    })
}

let facultyJSONarray = fetchFacultyGETmongoDB();
displayResults(facultyJSONarray);