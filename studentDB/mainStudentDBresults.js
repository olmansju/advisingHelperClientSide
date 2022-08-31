// references mongoDBtraffic.js function

function displayStudentResults(theReturnedJSON){
    console.log('displayStudentResults', theReturnedJSON);
    document.getElementById('studentDBresults').innerText = '';
    document.getElementById("studentDBresults").innerHTML += `Student data documents are:<br>`;
    theReturnedJSON.forEach(record => {
        document.getElementById("studentDBresults").innerHTML += `<br> ${JSON.stringify(record)} <br>`;
    })
}

let adviseesJustinJSONarray = fetchStudentGETmongoDB();
displayStudentResults(adviseesJustinJSONarray);