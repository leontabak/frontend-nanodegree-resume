
var bio = {
    "name": "Leon Tabak",
    "role": "Professor of Computer Science",
    "welcomeMessage":"Guten Tag!",
    "contacts": {
	"email":"l.tabak@ieee.org",
	"voice":"319 895&ndash;4294",
	"mobile":"319 491&ndash;3207",
	"github":"leontabak"
    },
    "skills": ["software engineering", "teaching", "writing", "public speaking"]
};

var work = {
    "jobs": [
              {
		  "employer":"Cornell College",
		  "title":"Professor of Computer Science",
		  "where":"Mount Vernon, Iowa",
		  "dates":"1989&ndash;Present",
		  "description":"Develop and teach whole range of undergraduate courses, advise students"
              },
              {
		  "employer":"Cornell College",
		  "title":"Faculty Director, Berry Center for Economics, Business, and Public Policy",
		  "where":"Mount Vernon, Iowa",
		  "dates":"2013&ndash;Present",
		  "description":"Introduce students to opportunities that await them after graduation"
              },
              {
		  "employer":"College Board",
		  "title":"Consultant",
		  "where":"New York, New York",
		  "dates":"2001&ndash;Present",
		  "description":"Develop and lead workshops for high school teachers"
              }
            ]
};

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
};


var projects = {
    "projects": [
                  {
		      "title":"Archimedean Tilings",
		      "dates":"Ongoing",
		      "description":"computer graphics",
		      "images":["http://www.eonsahead.com/archimedean.html"]
		  }
                  {
		      "title":"Synthetic Landscape",
		      "dates":"Ongoing",
		      "description":"computer graphics",
		      "images":["http://www.eonsahead.com/dynamic/landscape"]
		  }
		 ]
};

var inName = function( firstAndLastName ) {
    var names = firstAndLastName.trim().split(" ");
    return names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase() + " " + names[1].toUpperCase();
}

var myName = HTMLheaderName.replace("%data%","Leon Tabak");
var myRole = HTMLheaderRole.replace("%data%","Professor of Computer Science");

$("#header").prepend(myRole);
$("#header").prepend(myName);
$("#main").append(internationalizeButton);

if( bio.skills.length > 0 ) {

    var headerName = HTMLheaderName.replace( "%data%", "Skills");
    $("#header").append(headerName);

      $("#header").append(HTMLskillsStart);

      var formattedSkill = HTMLskills.replace("%data%",bio.skills[0]);
      $("#skills").append(formattedSkill);

      formattedSkill = HTMLskills.replace("%data%",bio.skills[1]);
      $("#skills").append(formattedSkill);

      formattedSkill = HTMLskills.replace("%data%",bio.skills[2]);
      $("#skills").append(formattedSkill);

}

for( jobIndex in work.jobs ) {
    $("#workExperience").append(HTMLworkStart);
    var employer = work.jobs[jobIndex].employer;
    employer = HTMLworkEmployer.replace("%data%",employer);

    var title = work.jobs[jobIndex].title;
    title = HTMLworkTitle.replace("%data%",title);

    var where = work.jobs[jobIndex].where;
    where = HTMLworkLocation.replace("%data%",where);

    var dates = work.jobs[jobIndex].dates;
    dates = HTMLworkDates.replace("%data%",dates);

    var description = work.jobs[jobIndex].description;
    description = HTMLworkDescription.replace("%data%",description);

    $(".work-entry:last").append( employer );
    $(".work-entry:last").append( title );
    $(".work-entry:last").append( where );
    $(".work-entry:last").append( dates );
    $(".work-entry:last").append( description );
    
}

