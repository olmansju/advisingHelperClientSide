// references mongoDBtraffic.js function

function displayResults(theReturnedJSON){
    document.getElementById("facultyDBresults").innerHTML = `<PRE><CODE> ${theReturnedJSON.payload} </CODE></PRE>`;
}

fetchFacultyGETmongoDB();