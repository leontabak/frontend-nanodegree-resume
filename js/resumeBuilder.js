
var bio = {
    "name": "Leon Tabak",
    "role": "Professor of Computer Science",
    "welcomeMessage":"Guten Tag!",
    "contacts": {
	"email":"l.tabak@ieee.org",
	"voice":"319 895&ndash;4294",
	"mobile":"319 491&ndash;3207",
	"github":"leontabak",
	"location":"Mount Vernon, Iowa"
    },
    "skills": ["software engineering", "teaching", "writing", "public speaking"],
    "photo":"images/leon-june2015.jpg"
}; // bio object

bio.display = function() {
    var myName = HTMLheaderName.replace("%data%",bio.name);
    var myRole = HTMLheaderRole.replace("%data%",bio.role);
    var myContent = "";
    var headerName = "";
    var formattedSkill = "";

    $("#header").prepend(myRole);
    $("#header").prepend(myName);
    //    $("#main").append(internationalizeButton);

    for( contactKey in bio.contacts ) {
	switch( contactKey ) {
	    case "voice": 
		myContent = HTMLcontactGeneric.replace("%contact%", "office");
		myContent = myContent.replace("%data%",bio.contacts.voice);
		break;
	    case "mobile": 
		myContent = HTMLmobile.replace("%data%", bio.contacts.mobile ); 
		break;
	    case "email": 
		myContent = HTMLemail.replace("%data%", bio.contacts.email ); 
		break;
	    case "github": 
		myContent = HTMLgithub.replace("%data%",bio.contacts.github );
		break;
	} // switch
	$("#topContacts").append(myContent);
    } // for

    if( bio.skills.length > 0 ) {
	headerName = HTMLheaderName.replace( "%data%", "Skills");
	$("#header").append(headerName);

	$("#header").append(HTMLskillsStart);

	formattedSkill = HTMLskills.replace("%data%",bio.skills[0]);
	$("#skills").append(formattedSkill);

	formattedSkill = HTMLskills.replace("%data%",bio.skills[1]);
	$("#skills").append(formattedSkill);

	formattedSkill = HTMLskills.replace("%data%",bio.skills[2]);
	$("#skills").append(formattedSkill);
    } // if

    $("#header").append(HTMLbioPic.replace("%data%",bio.photo));
    $("#header").append(HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage));
}; // bio.display() function

bio.display();

var work = {
    "jobs": [
              {
		  "employer":"Cornell College",
		  "title":"Professor of Computer Science",
		  "location":"Mount Vernon, Iowa",
		  "dates":"1989&ndash;Present",
		  "description":"Develop and teach whole range of undergraduate courses, advise students"
              },
              {
		  "employer":"Cornell College",
		  "title":"Faculty Director, Berry Center for Economics, Business, and Public Policy",
		  "location":"Mount Vernon, Iowa",
		  "dates":"2013&ndash;Present",
		  "description":"Introduce students to opportunities that await them after graduation"
              },
              {
		  "employer":"College Board",
		  "title":"Consultant",
		  "location":"New York, New York",
		  "dates":"2001&ndash;Present",
		  "description":"Develop and lead workshops for high school teachers"
              }
            ]
}; // work object

work.display = function() {
    var employer = "";
    var title = "";
    var location = "";
    var dates = "";
    var description = "";
    for( jobIndex in work.jobs ) {
	$("#workExperience").append(HTMLworkStart);
	employer = work.jobs[jobIndex].employer;
	employer = HTMLworkEmployer.replace("%data%",employer);

	title = work.jobs[jobIndex].title;
	title = HTMLworkTitle.replace("%data%",title);

	location = work.jobs[jobIndex].location;
	location = HTMLworkLocation.replace("%data%",location);

	dates = work.jobs[jobIndex].dates;
	dates = HTMLworkDates.replace("%data%",dates);

	description = work.jobs[jobIndex].description;
	description = HTMLworkDescription.replace("%data%",description);

	$(".work-entry:last").append( employer );
	$(".work-entry:last").append( title );
	$(".work-entry:last").append( location );
	$(".work-entry:last").append( dates );
	$(".work-entry:last").append( description );
    } // for
}; // work.display() function

work.display();

var education = {
    "schools":[
		 {
		     "name": "Worcester Polytechnic Institute",
		     "majors":["computer science"],
		     "degree":"PhD",
		     "year":1989,
		     "city":"Worcester, Massachusetts",
		     "url":"http://www.wpi.edu"
		 },
		 {
		     "name":"Boston University",
		     "majors":["computer science"],
		     "degree":"MS",
		     "year":1986,
		     "city":"Boston, Massachusetts",
		     "url":"http://www.bu.edu"
		 },
		 {
		     "name":"Massachusetts Institute of Technology",
		     "majors":["physics"],
		     "degree":"BS",
		     "year":1980,
		     "city":"Cambridge, Massachusetts",
		     "url":"http://www.mit.edu"
		 }
	       ],
    "onlineCourses": [
                       {
                         "title":"Introduction to Data Science",
			 "school":"Coursera",
			 "university":"University of Washington",
			 "date":"June 29, 2013",
			 "url":"https://www.coursera.org/course/datasci"
		       },
                       {
			   "title":"Startup Engineering",
			   "school":"Coursera",
			   "university":"Stanford University",
			   "date":"September 23, 2013",
			   "url":"https://www.coursera.org/course/startup"
                       },
                       {
			   "title":"Coding the Matrix: Linear Algebra through Computer Science Applications",
			   "school":"Coursera",
			   "university":"Brown University",
			   "date":"October 10, 2013",
			   "url":"https://www.coursera.org/course/matrix"
                       },
                       {
			   "title":"R Programming",
			   "school":"Coursera",
			   "university":"Johns Hopkins University",
			   "date":"September 16, 2014",
			   "url":"https://www.coursera.org/course/rprog"
                       },
                       {
			   "title":"Developing Innovative Ideas for New Companies: The First Step in Entrepreneurship",
			   "school":"Coursera",
			   "university":"University of Maryland",
			   "date":"January 26, 2015",
			   "url":"https://www.coursera.org/course/innovativeideas"
                       }
		      ]
}; // education object

education.display = function() {
    var schoolObject = {};
    var mySchoolName = "";
    var myMajors = "";
    var myDegree = "";
    var myYear = "";
    var myCity = "";
    var myURL = "";

    for( schoolIndex in education.schools ) {
	$("#education").append(HTMLschoolStart);
	schoolObject = education.schools[schoolIndex];

	mySchoolName = HTMLschoolName.replace( "%data%", schoolObject.name );
	$(".education-entry:last").append(mySchoolName);

	myDegree = HTMLschoolDegree.replace("%data%",schoolObject.degree);
	$(".education-entry:last").append(myDegree);

	myYear = HTMLschoolDates.replace("%data%",schoolObject.year);
	$(".education-entry:last").append(myYear);
    } // for
}; // education.display() function

education.display();

var projects = {
    "projects": [
                  {
		      "title":"Archimedean Tilings",
		      "dates":"Ongoing",
		      "description":"computer graphics",
		      "images":["http://www.eonsahead.com/archimedean.html"]
		  },
                  {
		      "title":"Synthetic Landscape",
		      "dates":"Ongoing",
		      "description":"computer graphics",
		      "images":["http://www.eonsahead.com/dynamic/landscape"]
		  }
		 ]
}; // projects object

projects.display = function() {
    var aProject = {};
    var aTitle = "";
    var aDates = "";
    var aDescription = "";
    var aImages = "";
    for( projectIndex in this.projects ) {
	aProject = this.projects[projectIndex];
	$("#projects").append(HTMLprojectStart);

	aTitle = HTMLprojectTitle.replace( "%data%",aProject.title);
	$(".project-entry:last").append(aTitle);

	aDates = HTMLprojectDates.replace("%data%",aProject.dates);
	$(".project-entry:last").append(aDates);

	aDescription = HTMLprojectDescription.replace("%data%",aProject.description);
	$(".project-entry:last").append(aDescription);
    } // for
};

projects.display();

var inName = function( firstAndLastName ) {
    var names = firstAndLastName.trim().split(" ");
    return names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase() + " " + names[1].toUpperCase();
};



$("#mapDiv").append(googleMap);