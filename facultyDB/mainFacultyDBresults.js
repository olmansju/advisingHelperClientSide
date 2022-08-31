// references mongoDBtraffic.js function

function displayResults(theReturnedJSON){
    console.log('displayResults', theReturnedJSON.payload);
    let theHTMLoutput = JSON.stringify(theReturnedJSON.payload);
    document.getElementById("facultyDBresults").innerHTML = `<PRE><CODE> ${theHTMLoutput} </CODE></PRE>`;
}

fetchFacultyGETmongoDB();