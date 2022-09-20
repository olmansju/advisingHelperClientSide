//this file takes an array of advisees and inserts missing data and gets it ready for tableBuilding
let newArray = [];

function processAdvisees(arrayOfAdvisees){
    arrayOfAdvisees.forEach(obj => {
        let thisObj = new Advisee(obj.fName,
                                  obj.lName,
                                  obj.NUID,
                                  obj.Email,
                                  obj.portfolioURL,
                                  obj.dept_funding,
                     ["technology", "learning"], obj.current,
                     [],
                                  obj.committee_members_doc.split(','),
                                  obj.advisor,
                            "mentor",
                            "mentee",
                                   obj.primary_plan,
                             {admitted: obj.admitted,
                                    courses_taken: obj.courses_taken.split(','),
                                    PoS: obj.PoS,
                                    cr_hrs_taken: obj.cr_hrs_taken,
                                    pilot_study: "",
                                    comps: obj.examForm,
                                    candidacy: obj.candidacy,
                                    proposal: "",
                                    dissertation: obj.diss_deposited,
                                    graduation: obj.diss_deposited,
                                    job_market: "",
                                    expiration: obj.expiration},
                                   obj.imageFile,
                                   obj.imageURL);
        newArray.push(thisObj);
        console.log('processing advisee', obj.fName, 'imageFile value', obj.imageFile, 'imageURL value', thisObj.imageURL);
    })
    return newArray;
}
