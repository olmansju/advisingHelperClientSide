// references mongoDBtraffic.js function
let facultyJSONarray;

async function displayResults(){
    facultyJSONarray = await fetchFacultyGETmongoDB();
    console.log('displayResults', facultyJSONarray);
    document.getElementById('facultyDBresults').innerText = '';
    document.getElementById("facultyDBresults").innerHTML += `Faculty data documents are:<br>`;
    facultyJSONarray.forEach(record => {
        document.getElementById("facultyDBresults").innerHTML += `<br> ${JSON.stringify(record)} <br>`;
    })
}


displayResults();