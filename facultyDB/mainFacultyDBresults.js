async function getFacultyCollectionFromMongoDB(){
    const sentResponse = await fetch('/facultyDB');
    const returnedData = await sentResponse.json();
    displayResults(returnedData);
}

function displayResults(theReturnedJSON){
    document.getElementById("facultyDBresults").innerHTML = `<PRE><CODE> ${theReturnedJSON} </CODE></PRE>`;
}

function testItt(){
    return 'yikes';
}

getFacultyCollectionFromMongoDB();