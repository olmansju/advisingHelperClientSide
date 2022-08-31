// references mongoDBtraffic.js function

function displayResults(theReturnedJSON){
    document.getElementById("facultyDBresults").innerHTML = `<PRE><CODE> ${theReturnedJSON} </CODE></PRE>`;
}

fetchFacultyGETmongoDB();