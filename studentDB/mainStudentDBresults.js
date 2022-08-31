// references mongoDBtraffic.js function

function displayStudentResults(theReturnedJSON){
    console.log('displayStudentResults', theReturnedJSON.payload);
    let payload = theReturnedJSON.payload;
    document.getElementById("studentDBresults").innerHTML += `Student data documents are:<br>`;
    payload.forEach(record => {
        document.getElementById("studentDBresults").innerHTML += `<br> ${JSON.stringify(record)} <br>`;
    })
}

fetchStudentGETmongoDB();