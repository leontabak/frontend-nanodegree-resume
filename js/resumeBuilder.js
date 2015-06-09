
var bio = {
    "name": "Leon Tabak",
    "role": "Professor of Computer Science",
    "welcomeMessage":"Good day! Guten Tag! Dzie&#324; dobry!",
    "contacts": {
	"email":"l.tabak@ieee.org",
	"voice":"319 895&ndash;4294",
	"mobile":"319 491&ndash;3207",
	"github":"leontabak",
	"location":"Mount Vernon, Iowa"
    },
    "skills": ["teaching", "software engineering", "project development", "writing"],
    "biopic":"images/leon-june2015.jpg"
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
	    case "location":
	        myContent = HTMLlocation.replace("%data%",bio.contacts.location);
	        break;
	} // switch
	$("#topContacts").append(myContent);
    } // for

    $("#header").append(HTMLbioPic.replace("%data%",bio.biopic));
    $("#header").append(HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage));

    $("#header").append(HTMLskillsStart);
    for( skillIndex in bio.skills ) {
	//headerName = HTMLheaderName.replace( "%data%", "Skills");
	//$("#header").append(headerName);

	formattedSkill = HTMLskills.replace("%data%",bio.skills[skillIndex]);
	$("#skills").append(formattedSkill);
    } // for
}; // bio.display() function

bio.display();

var footer = {
    "display":function() {
	var myContent;
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
	    case "location":
	        myContent = HTMLlocation.replace("%data%",bio.contacts.location);
	        break;
	    } // switch
	    $("#footerContacts").append(myContent);
	} // for
    } // footer.display() function
};

footer.display();

var work = {
    "jobs": [
              {
		  "employer":"Cornell College",
		  "title":"Professor and Chairman of the Department of Computer Science",
		  "location":"Mount Vernon, Iowa",
		  "dates":"1989&ndash;Present",
		  "description":"Develop and teach whole range of undergraduate courses, advise students"
              },
              {
		  "employer":"Cornell College",
		  "title":"Faculty Director of the Berry Center for Economics, Business, and Public Policy",
		  "location":"Mount Vernon, Iowa",
		  "dates":"2013&ndash;Present",
		  "description":"Develop and execute programs that introduce students to opportunities that await them after graduation"
              },
              {
		  "employer":"College Board",
		  "title":"Consultant",
		  "location":"New York, New York",
		  "dates":"2001&ndash;Present",
		  "description":"Develop and lead workshops for high school teachers of Advanced Placement courses"
              },
              {
		  "employer":"Educational Policy Improvement Center",
		  "title":"Senior Reviewer/Curriculum Advisor",
		  "location":"Eugene,Oregon",
		  "dates":"2010&ndash;Present",
		  "description":"Guide teachers in their efforts to conform to College Board's standards for Advanced Placement courses"
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

	$(".work-entry:last").append( employer + title );
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
		     "degree":"Doctor of Philosophy",
		     "dates":1989,
		     "location":"Worcester, Massachusetts",
		     "url":"http://www.wpi.edu"
		 },
		 {
		     "name":"Boston University",
		     "majors":["computer science"],
		     "degree":"Master of Science",
		     "dates":1986,
		     "location":"Boston, Massachusetts",
		     "url":"http://www.bu.edu"
		 },
		 {
		     "name":"Massachusetts Institute of Technology",
		     "majors":["physics"],
		     "degree":"Bachelor of Science",
		     "dates":1980,
		     "location":"Cambridge, Massachusetts",
		     "url":"http://www.mit.edu"
		 }
	       ],
    "onlineCourses": [
                       {
                         "title":"Introduction to Data Science",
			 "school":"Coursera",
			 "university":"University of Washington",
			 "date":"June 29, 2013",
			 "url":"https://www.coursera.org/course/datasci",
			 "universityURL":"http://www.washington.edu"
		       },
                       {
			   "title":"Startup Engineering",
			   "school":"Coursera",
			   "university":"Stanford University",
			   "date":"September 23, 2013",
			   "url":"https://www.coursera.org/course/startup",
			   "universityURL":"https://www.stanford.edu"
                       },
                       {
			   "title":"Coding the Matrix: Linear Algebra through Computer Science Applications",
			   "school":"Coursera",
			   "university":"Brown University",
			   "date":"October 10, 2013",
			   "url":"https://www.coursera.org/course/matrix",
			   "universityURL":"http://www.brown.edu"
                       },
                       {
			   "title":"R Programming",
			   "school":"Coursera",
			   "university":"Johns Hopkins University",
			   "date":"September 16, 2014",
			   "url":"https://www.coursera.org/course/rprog",
			   "universityURL":"https://www.jhu.edu"
                       },
                       {
			   "title":"Developing Innovative Ideas for New Companies: The First Step in Entrepreneurship",
			   "school":"Coursera",
			   "university":"University of Maryland",
			   "date":"January 26, 2015",
			   "url":"https://www.coursera.org/course/innovativeideas",
			   "universityURL":"http://www.maryland.edu"
                       }
		      ]
}; // education object

education.display = function() {
    var schoolObject = {};
    var mySchoolName = "";
    var myMajors = "";
    var myDegree = "";
    var myYear = "";
    var myLocation = "";
    var myCollegeURL = "";

    var onlineObject = {};
    var myTitle = "";
    var myOnlineSchool = "";
    var myOnlineUniversity = "";
    var myDate = "";
    var myOnlineURL = "";

    for( schoolIndex in education.schools ) {
	$("#education").append(HTMLschoolStart);
	schoolObject = education.schools[schoolIndex];

	mySchoolName = HTMLschoolName.replace( "%data%", schoolObject.name );
	myDegree = HTMLschoolDegree.replace("%data%",schoolObject.degree);
	$(".education-entry:last").append(mySchoolName + myDegree);

	myYear = HTMLschoolDates.replace("%data%",schoolObject.dates);
	$(".education-entry:last").append(myYear);

	myLocation = HTMLschoolLocation.replace("%data%",schoolObject.location);
	$(".education-entry:last").append(myLocation);

	for( majorIndex in schoolObject.majors ) {
	    myMajors = HTMLschoolMajor.replace("%data%",schoolObject.majors[majorIndex]);
	    $(".education-entry:last").append(myMajors);
	} // for

	//myCollegeURL = HTMLonlineURL.replace("%data%",schoolObject.url);
	//$(".education-entry:last").append(myCollegeURL);
    } // for

    $("#education").append(HTMLonlineClasses);

    for( onlineIndex in education.onlineCourses ) {
	onlineCourse = education.onlineCourses[onlineIndex];

	$("#education").append(HTMLonlineStart);

	myTitle = HTMLonlineTitle.replace("%url%",onlineCourse.url);
	myTitle = myTitle.replace("%data%",onlineCourse.title);

	myOnlineSchool = HTMLonlineSchool.replace("%data%",onlineCourse.school);
	$(".online-entry:last").append(myTitle + myOnlineSchool);

	myOnlineUniversity = HTMLonlineUniversity.replace("%univ%",onlineCourse.universityURL);
	myOnlineUniversity = myOnlineUniversity.replace("%data%",onlineCourse.university);
	$(".online-entry:last").append(myOnlineUniversity);

	myDate = HTMLonlineDates.replace("%data%",onlineCourse.date);
	$(".online-entry:last").append(myDate);
    } // for
}; // education.display() function

education.display();

var projects = {
    "projects": [
                  {
		      "title":"Archimedean Tilings",
		      "dates":"Ongoing",
		      "description":"computer graphics",
		      "images":["images/archimedean/image008.jpg",
				"images/archimedean/image018.jpg",
				"images/archimedean/image019.jpg",
				"images/archimedean/image030.jpg"]
		  },
                  {
		      "title":"Synthetic Landscape",
		      "dates":"Ongoing",
		      "description":"computer graphics",
		      "images":["images/landscapes/landscape00.jpg",
				"images/landscapes/landscape01.jpg",
				"images/landscapes/landscape02.jpg",
				"images/landscapes/landscape03.jpg"]
		  }
		 ]
}; // projects object

projects.display = function() {
    var aProject = {};
    var aTitle = "";
    var aDates = "";
    var aDescription = "";
    var anImage = "";
    for( projectIndex in this.projects ) {
	aProject = this.projects[projectIndex];
	$("#projects").append(HTMLprojectStart);

	aTitle = HTMLprojectTitle.replace( "%data%",aProject.title);
	$(".project-entry:last").append(aTitle);

	aDates = HTMLprojectDates.replace("%data%",aProject.dates);
	$(".project-entry:last").append(aDates);

	aDescription = HTMLprojectDescription.replace("%data%",aProject.description);
	$(".project-entry:last").append(aDescription);

	$(".project-entry:last").append(HTMLprojectImageCollection);
	for( imageIndex in aProject.images ) {
	    anImage = HTMLprojectImage.replace("%data%",aProject.images[imageIndex]);
	    $(".imageCollection:last").append(anImage);
	} // for
    } // for
};

projects.display();

var inName = function( firstAndLastName ) {
    var names = firstAndLastName.trim().split(" ");
    return names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase() + " " + names[1].toUpperCase();
};



$("#mapDiv").append(googleMap);