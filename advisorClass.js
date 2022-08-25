//this class holds the advisor objects

class Advisor {
    constructor(fName, lName, NUID, email, program, department, researchInterests, institution, website, projects, title, imageFile, imageURL) {
        this.fName = fName;
        this.lName = lName;
        this.NUID = NUID;
        this.email = email;
        this.program = program;
        this.department = department;
        this.researchInterests = researchInterests;
        this.institution = institution;
        this.website = website;
        this.projects = projects;
        this.title = title;
        this.imageFile = imageFile;
        this.imageURL = imageURL;
    }
}

function processFaculty(passedFacultyJSONarray){
    let newFacultyArray = [];
    passedFacultyJSONarray.forEach(obj => {
        let thisObj = new Advisor(obj.fName,
            obj.lName,
            obj.NUID,
            obj.Email,
            obj.program,
            obj.department,
            obj.researchInterests,
            obj.institution,
            obj.website,
            obj.projects,
            obj.title,
            obj.imageFile,
            obj.imageURL
            );
        newFacultyArray.push(thisObj);
        console.log('processing faculty', thisObj);
    })
    console.log('newFacultyArray', newFacultyArray);
    sendOnceToMongoDb(newFacultyArray);
    //mongoDBtest();
    return newFacultyArray;
}

async function sendOnceToMongoDb(theFacultyArray){
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'text/plain'
        },
        body: JSON.stringify(theFacultyArray),
        info: 'facultySendOnce'
    };
    console.log('sendOnceToMongoDb', options);
    const response = await fetch('/justin/advisorHelper', options);
    console.log('post fetch response', response.type);
    console.log('post fetch data', response.body);
}
