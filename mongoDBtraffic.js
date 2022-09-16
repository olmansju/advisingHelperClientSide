//functions for accessing database

let facultyGETendpoint = "https://us-east-1.aws.data.mongodb-api.com/app/advisorhelperapp-aurna/endpoint/facultyGET";
let studentGETendpoint = "https://us-east-1.aws.data.mongodb-api.com/app/advisorhelperapp-aurna/endpoint/studentGET";
let studentPOSTendpoint = "https://us-east-1.aws.data.mongodb-api.com/app/advisorhelperapp-aurna/endpoint/studentPOST";

async function fetchFacultyGETmongoDB(){
    console.log('fetchFacultyGETmongoDB called');
    const response = await fetch(facultyGETendpoint);
    if (!response.ok){ console.log('Fetch error: ', response.status);}
    const facultyGETinJSONformat = await response.json();
    console.log(response, facultyGETinJSONformat);
    return facultyGETinJSONformat.payload;
}

async function fetchStudentGETmongoDB(searchParams = null){
    console.log('fetchStudentGETmongoDB called');
    let URLplusQuery;
    if (searchParams){
        URLplusQuery = '/student' + searchParams;
    } else {
        URLplusQuery = '/student';
    }
    const response = await fetch(URLplusQuery);
    if (!response.ok){ console.log('Fetch error: ', response.status);}
    let studentGETinJSONformat = await response.json();
    console.log('response', studentGETinJSONformat);
    return studentGETinJSONformat;
}

async function facultyLoginMongoDB(lStorageObject){
    console.log('facultyLoginMongoDB called', lStorageObject);
    let theReturn;
        try {
            const response = await fetch('/faculty', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    // your expected POST request payload goes here
                    qField: "Email",
                    qValue: lStorageObject.email,
                    qField2: "NUID",
                    qValue2: lStorageObject.UID
                })
            });
            const data = await response.json();
            // enter you logic when the fetch is successful
            console.log("the response.json is:", data);
            theReturn = data;
        } catch(error) {
            // enter your logic for when there is an error (ex. error toast)
            console.log(error)
            theReturn =  '';
    }
    return theReturn;
}

async function fetchStudentPOSTmongoDB(){
    console.log('fetchStudentPOSTmongoDB called');
}
