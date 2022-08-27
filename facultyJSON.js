// faculty array
let facultyJSONarray = [
    {
        "lName": "Olmanson",
        "fName": "Justin",
        "NUID": 1234,
        "Email": "jolmanson2@unl.edu",
        "program": "INLT",
        "department": "TLTE",
        "researchInterests": ["Design", "Writing", "Mathematics", "ML"],
        "institution": "University of Nebraska Lincoln",
        "website": "https://olmansju.tumblr.com/",
        "projects": ["DaZiBao", "AdvisorHelper", "Linear Algebra Conrad Wolfram"],
        "Title": "Associate Professor",
        "imageFile": "justin.jpg",
        "imageURL": "",
        "advisingNotes": {
            "admitted": {
                "intro": "welcome to the ILT program in TLTE at UNL! I'm your advisor, Justin. I will take my queue from you in terms of how often and in what ways we interact. We can check in each semester, every other week, or somewhere in between. You will also have a student mentor and at some point, a student mentee. If for some reason you feel more comfortable going to them than me about some things or if you want additional perspectives this can be a good person to contact.",
                "timing": "You have a certain number of semesters to complete your degree. If you have funding you have up to 8 semesters of priority funding by the department (this is not a promise of funding but rather an assertion of intent to endeavor to allocate funding for you during your first 8 full semesters. After that, your funding may be given to incoming students. Thus it is important to make good progress.",
                "tips": ["start reading the research of your advisor", "ask your advisor what you should read to get a head start", "if you want to be a professor someday know that you will not get to select where you live", "if you are new to education consider taking TEAC 800 and TEAC 801"]
            },
            "PoS": {
                "intro": "the Program of Study is a general plan of what courses you plan to take. courses that will best serve you on your way to completing your degree and your research",
                "to_do": "identify four faculty members whose research align or could be helpful with your coursework and research, ask them to be a part of your PoS committee, look through the list of courses to be taught and start adding them to the PoS. You can come and talk with me or email me about any questions about this process.",
                "timing": "the PoS should be completed and the meeting held during your second semester. This meeting should happen during the early or middle part of your second semester. This and other committee meetings should not take place in the summer as faculty are supposed to have that time to themselves. This does not mean that you cannot send an email but you should not count on their availibility to meet individually or as a group during the summer.",
                "tips": ["ask around to see what courses other students have taken", "read the bios and CVs of each professor in the department to see who might be a good fit", "read the faculty bios of those in other depts related to your research interests"]
            },
            "courses_taken": {
                "intro": "You will need to take 90-96 credits of coursework to complete your degree. If you have taken graduate courses prior to entering this program you may apply up to 45 credit hours of them to your degree. It is important for your funding and status in your program to do well and finish your courses on time and in good standing.",
                "readings_and_effort": "There will be many times when skipping the readings or skimming the readings will feel tempting. There may also be weeks where you feel like doing the minimum in one or several of your courses feels like the better option. The effort you put in each week to your readings and projects will be paid back to you at the end of each semester, during your comps, and during your dissertation proposal. Budget 9 hours per week per class for readings, projects, and course-themed explorations.",
                "tips": ["use Zotero and keep your articles and article-related notes in there", "take courses that push you", "focus on the intersection between your research and the course themes"]
            },
            "pilot_study": {
                "intro": "nothing gets you ready to do your dissertation better than doing research. coursework gives you a base and multiple opportunities to identify gaps and opportunities in the literature. Taking coursework on research methods is vital but insufficient to conduct research. Courses, textbooks, lectures, and articles can explain how to collect data, they can describe how to analyze data, and they can show how data can be written up. But reading those things or writing up a little data for a class is not enough to get you ready to design and realize your dissertation.",
                "process": "Start by joining a research group or research project. Ask your advisor or other faculty members about their projects. If something sounds interesting ask if you can read any papers they have published in this area and if you could sit in on a few of their meetings. If you like what they are doing you might ask if you can join their research group (funded or unfunded). After working in a research group (make sure you participate in the data collection and analysis) you will have more of an idea about how that group does research. This process will give you a sense of how you might conduct a small pilot study.",
                "IRB": "before you can do research with people you need to take several hours of research training (this is done online). Then you will need to submit your research idea and design to the IRB (via NUgrant). They will give you permission to carry out your research. This permission is good for several years and can be ammended to accomodate your dissertation research.",
                "tips": ["doing research starts with reading research", "who are your participants, volunteer where they work", "read as much as you can about the research methods you like", "don't worry about if you will find anything, just gather your data"]
            },
            "comps": {
                "intro": "When you are completely or nearly finished with coursework you will take your comprehensive exams. Each faculty member does these differently so brace yourself for very different descriptions of this process. For my students, you will have 8 weeks to answer three questions and produce a portfolio. You may do this work over winter break or over the summer but we will not meet as a committee during those times.",
                "organization": "Three separate google documents. Note that they are also three separate genres (#1 you are making a case / arguing why what you want to study is a thing, why it is important) (#2 you are reviewing and synthesizing the literature as it intersects with the overlapping sub-fields of your research question/s) (#3 you are constructing a research design document, explaining that no one else has done it your way or with your people and that the methods you propose to use are the correct ones given you question and have been used by others who have had similar questions).",
                "process": "The semester before you want to take your comps, you send your advisor an email explaining that you want to take your comps and when you'd like to do it. You create a google doc of your questions and share with me. I send you feedback and we go back and forth until we are both satisfied. Then you send them to your committee for their feedback. Once everyone is on board you are given the green light to write them.",
                "resources": "this google doc has a number of examples of the questions other students have answered. You will notice that question one is basically, 1) -what is your research topic? why should we care? why is it important? what would it mean if this research was accomplished?- 2) what are the fields and subfields that intersect with your question and conduct a synthetic literature review of these fields and subfields, 3) what are the ways others have designed studies to address similar research questions? how would you design your study? 4) an online web portfolio of the projects you have undertaken during your coursework.",
                "url": "https://docs.google.com/document/d/1prfZtVxBoTOc9V2uRkbaIloRuFjoLOmplt2x19OL4VM/edit?usp=sharing",
                "tips": ["read 2-3 dissertations, focus on the form of each of the first three chapters, it will parallel your three questions", "you can get help on your comps organization and writing at the writing center", "if you feel stuck during the writing, email your advisor", "you can start work on your web portfolio early"]
            },
            "candidacy": {
                "description": "once you have finished your coursework and passed your comps you have passed into candidacy. This means that you can call yourself a PhD Candidate. More importantly, it means you should start working on your Dissertation Proposal",
                "tips": ["have a conversation with your advisor about what you want to do after graduation", "establish a writing group, meet twice a month and exchange ideas and writing", "this stage makes it easy to take a break, you need to be your own motivator"]
            },
            "proposal": {
                "intro": "What form your proposal takes may vary based who your advisor is and how well you did on your comps. Most of my students take their first three questions from the comps and turn then into their first three chapters of their dissertation.",
                "timing": "Many students complete their dissertation proposal during the summer. However the final committee proposal review meeting should not take place in the summer as faculty are supposed to have that time to themselves. This does not mean that you cannot send an email but you should not count on their availibility to meet individually or as a group during the summer.",
                "tips": ["start with your comps responses and expand them out", "best advice I ever got was, -don't be lazy-", "turn in drafts of your proposal multiple times to your writing group", "submit sections of your proposal to the writing center"]
            },
            "job_market": {
                "intro": "If you intend to apply for academic - faculty positions when you graduate you must start early to prepare your job matierials and learning about how to succeed within the process. If you want to meet about other career trajectories please do let me know your plans.",
                "timing": "Two years before you plan to graduate you need to start getting ready for the job market. Send me an email and let me know you want to start this process.",
                "tips": ["schedule one afternoon per week to work on your application materials and look for positions", "You will need a CV, cover letter, research statement, teaching statement, diversity statement, and writing samples", "if you want to be a professor someday know that you will not get to select where you live", "landing an academic position is difficult, have a plan B"]
            },
            "dissertation": {
                "intro": "What form your dissertation takes may vary based who your advisor is and the views of your committee.",
                "timing": "Many students complete their dissertation data collection, analysis, and write-up during the summer. However the final committee dissertation defense meeting should not take place in the summer as faculty are supposed to have that time to themselves. This does not mean that you cannot send an email but you should not count on their availibility to meet individually or as a group during the summer.",
                "tips": ["read 2-3 dissertations from start to finish make notes about the organization and writing", "email your advisor every other week with your progress", "meet with your writing group twice a month, read their work, have them read yours", "use the writing center at every turn"]
            },
            "graduation": {
                "intro": "You must apply to graduate one semester early.",
                "hooding": "If you plan to -walk- and have your advisor be a part of the PhD graduation ritual you must let him know and remind him one week and one day before the event.",
                "tips": ["congratulations, you will be asked to support future grad students", "make sure to celebrate your accomplishment", "if you are taking an academic job your dissertation will be your first, best source of data"]
            }
        }
    },
    {
        "lName": "Trainin",
        "fName": "Guy",
        "NUID": 1234,
        "Email": "gtrainin2@unl.edu",
        "program": "TEAC",
        "department": "TLTE",
        "researchInterests": ["Literacy", "STEAM"],
        "institution": "University of Nebraska Lincoln",
        "website": "https://cehs.unl.edu/tlte/faculty/guy-trainin/",
        "projects": ["Code.org", "Art TEAMS"],
        "Title": "Professor",
        "imageFile": "guy.jpg",
        "imageURL": "https://cehs.unl.edu/images/faculty/portraits/190514_Trainin_107RT810.jpg",
        "advisingNotes": {}
    },
    {
        "lName": "Kiramba",
        "fName": "Lydiah",
        "NUID": 1234,
        "Email": "lkiramba2@unl.edu",
        "program": "TEAC",
        "department": "TLTE",
        "researchInterests": ["Literacy", "Bilingualism"],
        "institution": "University of Nebraska Lincoln",
        "website": "https://cehs.unl.edu/tlte/faculty/lydiah-kiramba/",
        "projects": ["Literacy International"],
        "Title": "Associate Professor",
        "imageFile": "lydiah.jpg",
        "imageURL": "https://cehs.unl.edu/images/faculty/portraits/160809_Kiramba%20Lydiah_004_3x4_72dpi.jpg",
        "advisingNotes": {}
    },
    {
        "lName": "Twomey",
        "fName": "Robert",
        "NUID": 1234,
        "Email": "rtwomey@unl.edu",
        "program": "CEMA",
        "department": "CEMA",
        "researchInterests": ["Sims", "Art", "Exp Media"],
        "institution": "University of Nebraska Lincoln",
        "website": "https://roberttwomey.com/",
        "projects": ["Human Computer Perception"],
        "Title": "Assistant Professor",
        "imageFile": "robert.jpg",
        "imageURL": "https://arts.unl.edu/images/faculty/twomey-robert.jpg",
        "advisingNotes": {}
    },
    {
        "lName": "Reeves",
        "fName": "Jenelle",
        "NUID": 1234,
        "Email": "jreeves2@unl.edu",
        "program": "TEAC",
        "department": "TLTE",
        "researchInterests": ["ELL", "TESOL"],
        "institution": "University of Nebraska Lincoln",
        "website": "https://cehs.unl.edu/tlte/faculty/jenelle-reeves/",
        "projects": ["Teacher Learning"],
        "Title": "Professor",
        "imageFile": "jenelle.jpg",
        "imageURL": "https://cehs.unl.edu/images/faculty/portraits/Jenelle%20Reeves%202019_10_11_182056001829_9940%20MUG.jpg",
        "advisingNotes": {}
    }
]
