// references mongoDBtraffic.js function
let studentJSONarray;

async function displayStudentResults(){
    studentJSONarray = await fetchStudentGETmongoDB();
    console.log('displayStudentResults', studentJSONarray);
    document.getElementById('studentDBresults').innerText = '';
    document.getElementById("studentDBresults").innerHTML += `Student data documents are:<br>`;
    studentJSONarray.forEach(record => {
        document.getElementById("studentDBresults").innerHTML += `<br> ${JSON.stringify(record)} <br>`;
    })
}

displayStudentResults();