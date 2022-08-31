//functions for accessing database

let facultyGETendpoint = "https://us-east-1.aws.data.mongodb-api.com/app/advisorhelperapp-aurna/endpoint/facultyGET";
let studentGETendpoint = "https://us-east-1.aws.data.mongodb-api.com/app/advisorhelperapp-aurna/endpoint/studentGET";
let facultyPOSTendpoint = "https://us-east-1.aws.data.mongodb-api.com/app/advisorhelperapp-aurna/endpoint/studentPOST";
let studentPOSTendpoint = "https://us-east-1.aws.data.mongodb-api.com/app/advisorhelperapp-aurna/endpoint/studentPOST";

async function fetchFacultyGETmongoDB(){
    console.log('fetchFacultyGETmongoDB called');
    document.getElementById('facultyDBresults').innerText = '';
    const response = await fetch(facultyGETendpoint);
    if (!response.ok){ console.log('Fetch error: ', response.status);}
    const facultyGETinJSONformat = await response.json();
    console.log(response, facultyGETinJSONformat);
    displayResults(facultyGETinJSONformat); //references function in mainFacultyDBresults.js
}

async function fetchStudentGETmongoDB(){
    console.log('fetchStudentGETmongoDB called');
    document.getElementById('studentDBresults').innerText = '';
    const response = await fetch(studentGETendpoint);
    if (!response.ok){ console.log('Fetch error: ', response.status);}
    const studentGETinJSONformat = await response.json();
    console.log(response, studentGETinJSONformat);
    displayStudentResults(studentGETinJSONformat); //references function in mainStudentDBresults.js
}

async function fetchFacultyPOSTmongoDB(){
    console.log('fetchFacultyPOSTmongoDB called');
}

async function fetchStudentPOSTmongoDB(){
    console.log('fetchStudentPOSTmongoDB called');
}
