var bio = {
    "name": "BoYeon Hwang",
    "role": "Web Developer",
    "contacts": {
        "mobile": "000000",
        "email": "boyeon.hwang.h2o@gmail.com",
        "github": "BoYeon-Hwang",
        "location": "Seoul"
    },
    "welcomeMessage": "WELCOME!!",
    "skills": ["HTML", "CSS", "JavaScript", "C", "Python", "Java", "Git", "GitHub"],
    "biopic": "images/17_01_30.jpg"
};

var education = {
    "schools": [{
        "name": "Korea University",
        "location": "Seoul",
        "degree": "BA, BSc",
        "majors": ["Economics", "Computer Science and Engineering"],
        "dates": "in progress",
        "url": "https://www.korea.edu"
    }],
    "onlineCourses": [{
            "title": "Font-End Web Developer",
            "school": "Udacity",
            "dates": "in progress",
            "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
        },
        {
            "title": "Deep Learning Foundations",
            "school": "Udacity",
            "dates": "in progress",
            "url": "https://www.udacity.com/course/deep-learning-nanodegree-foundation--nd101"
        }
    ]
};

var work = {
    "jobs": [{
            "employer": "Hana Financial Investment",
            "title": "Intern",
            "location": "Seoul",
            "dates": "in progress",
            "description": "investment finance department"
        },
        {
            "employer": "Hdfsdfsdfs",
            "title": "Intern",
            "location": "Seoul",
            "dates": "in progress",
            "description": "Hdfsdfsdfs"
        }
    ]
};

var projects = {
    "projects": [{
        "title": "dddd",
        "dates": "in progress",
        "description": "sdfsdfs",
        "images": [
            "images/fry.jpg",
            "images/fry.jpg"
        ]
    }]
};

bio.display = function() {
    $("#header").prepend(HTMLheaderRole.replace('%data%', bio.role));
    $("#header").prepend(HTMLheaderName.replace('%data%', bio.name));

    $("#topContacts, #footerContacts").append(HTMLmobile.replace('%data%', bio.contacts.mobile), HTMLemail.replace('%data%', bio.contacts.email), HTMLgithub.replace('%data%', bio.contacts.github), HTMLlocation.replace('%data%', bio.contacts.location));
    
    $("#topContacts").append(HTMLmobile.replace('%data%', bio.contacts.mobile));

    $("#header").append(HTMLbioPic.replace('%data%', bio.biopic));
    $("#header").append(HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage));

    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);

        bio.skills.forEach(function(element) {
            $("#skills").append(HTMLskills.replace('%data%', element));
        });
    }
};

bio.display();

education.display = function() {
    education.schools.forEach(function(school) {
        $("#education").append(HTMLschoolStart);

        $(".education-entry:last").append(HTMLschoolName.replace('%data%', school.name).replace('%url%', school.url) + HTMLschoolDegree.replace('%data%', school.degree));
        $(".education-entry:last").append(HTMLschoolLocation.replace('%data%', school.location));
        $(".education-entry:last").append(HTMLschoolDates.replace('%data%', school.dates));
        school.majors.forEach(function(major) {
            $(".education-entry:last").append(HTMLschoolMajor.replace('%data%', major));
        });
        $(".education-entry:last").append('<br>');
    });

    if (education.onlineCourses.length > 0) {
        $("#education").append(HTMLonlineClasses);
    }

    education.onlineCourses.forEach(function(course) {
        $("#education").append(HTMLschoolStart);

        $(".education-entry:last").append(HTMLonlineTitle.replace('%data%', course.title).replace('%url%', course.url) + HTMLonlineSchool.replace('%data%', course.school));
        $(".education-entry:last").append(HTMLonlineDates.replace('%data%', course.dates));
        $(".education-entry:last").append('<br>');
    });
};

education.display();

work.display = function() {
    work.jobs.forEach(function(job) {
        $("#workExperience").append(HTMLworkStart);

        $(".work-entry:last").append(HTMLworkEmployer.replace('%data%', job.employer) + HTMLworkTitle.replace('%data%', job.title));
        $(".work-entry:last").append(HTMLworkDates.replace('%data%', job.dates));
        $(".work-entry:last").append(HTMLworkLocation.replace('%data%', job.location));
        $(".work-entry:last").append(HTMLworkDescription.replace('%data%', job.description));
    });
};

work.display();

projects.display = function() {
    projects.projects.forEach(function(project) {
        $("#projects").append(HTMLprojectStart);

        $(".project-entry:last").append(HTMLprojectTitle.replace('%data%', project.title));
        $(".project-entry:last").append(HTMLprojectDates.replace('%data%', project.dates));
        $(".project-entry:last").append(HTMLprojectDescription.replace('%data%', project.description));
        project.images.forEach(function(image) {
            $(".project-entry:last").append(HTMLprojectImage.replace('%data%', image));
        });

    });
};

projects.display();