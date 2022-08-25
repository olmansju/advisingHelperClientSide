//bring back all the records

async function getTestCollectionFromMongoDB(){
    const sentResponse = await fetch('/advisorHelper/test');
    console.log('sentResponse', sentResponse);
    const returnedData = await sentResponse.json();
    displayResults(returnedData);
}

function displayResults(theReturnedJSON){
    document.getElementById("testDBresults").innerHTML = `<PRE><CODE> ${theReturnedJSON} </CODE></PRE>`;
}

getTestCollectionFromMongoDB();