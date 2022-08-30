//bring back all the records

async function getStudentCollectionFromMongoDB(){
    const sentResponse = await fetch('/studentDB');
    const returnedData = await sentResponse.json();
    displayResults(returnedData);
}

function displayResults(theReturnedJSON){
    document.getElementById("studentDBresults").innerHTML = `<PRE><CODE> ${theReturnedJSON} </CODE></PRE>`;
}

function testIt(){
    return 'wow';
}

getStudentCollectionFromMongoDB();