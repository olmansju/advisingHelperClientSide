//this class holds the student objects

class Advisee {
    constructor(fName, lName, adviseeID, email, portfolioURL, funding, researchInterests, currentGoals, uponGraduation, committee, advisor, mentor, mentee, program, status, imageFile, imageURL) {
        this.fName = fName; //string
        this.lName = lName;  //string
        this.adviseeID = adviseeID; //integer
        this.email = email;  //email string
        this.portfolioURL = portfolioURL;  //url string
        this.funding = funding;  //string
        this.researchInterests = researchInterests;  //list
        this.currentGoals = currentGoals;  //list
        this.uponGraduation = uponGraduation; //list
        this.committee = committee; //list
        this.advisor = advisor;
        this.mentor = mentor;
        this.mentee = mentee;
        this.program = program;
        this.status = status;
        this.imageFile = imageFile;
        this.imageURL = imageURL;
    }
}
