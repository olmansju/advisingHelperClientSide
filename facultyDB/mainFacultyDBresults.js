// references mongoDBtraffic.js function

function displayResults(theReturnedJSON){
    console.log('displayResults', theReturnedJSON.payload);
    document.getElementById("facultyDBresults").innerHTML = `<PRE><CODE> ${theReturnedJSON.payload} </CODE></PRE>`;
}

fetchFacultyGETmongoDB();