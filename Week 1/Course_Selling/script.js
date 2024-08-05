document.addEventListener('DOMContentLoaded', function() {
    const courses = [
        { id: 1, title: "HTML & CSS", description: "Learn the basics of web development.", image: "../Course_Selling/course_photos/HTML&CSS.png", details: "Comprehensive guide to HTML and CSS with practical examples.", price: "$50" },
        { id: 2, title: "JavaScript", description: "Deep dive into JavaScript programming.", image: "../Course_Selling/course_photos/JavaScript_in_Web_Development.jpg", details: "Advanced JavaScript concepts and practical coding exercises.", price: "$60" },
        { id: 3, title: "React.js", description: "Master the popular front-end library.", image: "../Course_Selling/course_photos/react.png", details: "Learn how to build modern web applications using React.js.", price: "$70" },
        { id: 4, title: "Node.js", description: "Learn server-side JavaScript with Node.js.", image: "../Course_Selling/course_photos/Node.webp", details: "Understand backend development with Node.js and build scalable applications.", price: "$80" },
        { id: 5, title: "Python", description: "Get started with Python programming.", image: "../Course_Selling/course_photos/Python.webp", details: "Beginner-friendly course on Python programming and its applications.", price: "$55" },
        { id: 6, title: "Java", description: "Learn Java for web development.", image: "../Course_Selling/course_photos/Java.png", details: "Master Java programming and build robust web applications.", price: "$65" },
        { id: 7, title: "C++", description: "Understand the basics of C++.", image: "../Course_Selling/course_photos/C++.webp", details: "Learn the fundamental concepts of C++ programming.", price: "$45" },
        { id: 8, title: "PHP", description: "Learn PHP for web development.", image: "../Course_Selling/course_photos/PHP.webp", details: "Build dynamic websites and applications using PHP.", price: "$50" },
        { id: 9, title: "Ruby on Rails", description: "Master web development with Ruby on Rails.", image: "../Course_Selling/course_photos/Ruby on Rails.png", details: "Develop full-stack web applications using Ruby on Rails.", price: "$75" },
        { id: 10, title: "Django", description: "Learn web development with Django.", image: "../Course_Selling/course_photos/Django.jpg", details: "Build scalable web applications with Python's Django framework.", price: "$70" },
        { id: 11, title: "Vue.js", description: "Learn Vue.js for reactive interfaces.", image: "../Course_Selling/course_photos/Vue.jpeg", details: "Create dynamic and reactive web interfaces using Vue.js.", price: "$65" },
        { id: 12, title: "Angular", description: "Get started with Angular.", image: "../Course_Selling/course_photos/Angular.jpg", details: "Develop powerful single-page applications with Angular.", price: "$70" },
        { id: 13, title: "Swift", description: "Learn Swift for iOS development.", image: "../Course_Selling/course_photos/Swift.jpg", details: "Build native iOS applications using Swift programming language.", price: "$80" },
        { id: 14, title: "Kotlin", description: "Learn Kotlin for Android development.", image: "../Course_Selling/course_photos/Kotlin.webp", details: "Develop modern Android apps using Kotlin.", price: "$75" },
        { id: 15, title: "SQL", description: "Understand SQL for database management.", image: "../Course_Selling/course_photos/SQL.jpg", details: "Learn how to manage and query databases using SQL.", price: "$55" },
        { id: 16, title: "NoSQL", description: "Learn about NoSQL databases.", image: "../Course_Selling/course_photos/NoSQL.jpg", details: "Understand the concepts and applications of NoSQL databases.", price: "$60" },
        { id: 17, title: "Git", description: "Master version control with Git.", image: "../Course_Selling/course_photos/Git.png", details: "Learn version control and collaboration using Git.", price: "$40" },
        { id: 18, title: "AWS", description: "Learn cloud computing with AWS.", image: "../Course_Selling/course_photos/AWS.png", details: "Get started with cloud computing services provided by AWS.", price: "$90" },
        { id: 19, title: "Azure", description: "Get started with Microsoft Azure.", image: "../Course_Selling/course_photos/Azure.jpg", details: "Explore cloud services and solutions with Microsoft Azure.", price: "$85" },
        { id: 20, title: "Machine Learning", description: "Learn the basics of Machine Learning.", image: "../Course_Selling/course_photos/Machine Learning.png", details: "Introduction to machine learning concepts and techniques.", price: "$100" },
        { id: 21, title: "Data Science", description: "Get started with Data Science.", image: "../Course_Selling/course_photos/Data Science.jpg", details: "Learn data analysis, visualization, and machine learning with Python.", price: "$110" },
        { id: 22, title: "Cyber Security", description: "Understand the fundamentals of Cyber Security.", image: "../Course_Selling/course_photos/Cyber Security.jpg", details: "Learn how to protect systems and data from cyber threats.", price: "$95" },
        { id: 23, title: "Blockchain", description: "Learn about Blockchain technology.", image: "../Course_Selling/course_photos/Blockchain.jpg", details: "Understand the principles and applications of blockchain technology.", price: "$85" },
        { id: 24, title: "DevOps", description: "Understand DevOps practices.", image: "../Course_Selling/course_photos/DevOps.webp", details: "Learn about the tools and practices used in DevOps.", price: "$90" },
        { id: 25, title: "UI/UX Design", description: "Get started with UI/UX design.", image: "../Course_Selling/course_photos/UI UX Design.png", details: "Learn the principles of user interface and user experience design.", price: "$75" },
        ];
    

    if (document.querySelector('.slides')) {
        const slides = document.querySelector('.slides');
        const homeCourses = courses.slice(0, 5);
        homeCourses.forEach(course => {
            const courseDiv = document.createElement('div');
            courseDiv.className = 'course';
            courseDiv.innerHTML = `
                <img src="${course.image}" alt="${course.title}" class="course-image" style="width: 100%; height: auto; border: 1px solid #ccc;">
                <h3>${course.title}</h3>
                <p>${course.description}</p>
            `;
            slides.appendChild(courseDiv);
        });

        let currentIndex = 0;
        const slideWidth = 100; 
        const slideInterval = setInterval(() => {
            currentIndex = (currentIndex + 1) % homeCourses.length;
            slides.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
        }, 2000);
    }

    if (document.querySelector('#search')) {
        const searchInput = document.querySelector('#search');
        const courseList = document.querySelector('.course-list');

        function displayCourses(courses) {
            courseList.innerHTML = '';
            courses.forEach(course => {
                const courseDiv = document.createElement('div');
                courseDiv.className = 'course';
                courseDiv.innerHTML = `
                    <a href="course-detail.html?id=${course.id}" class="course-link">
                    <img src="${course.image}" alt="${course.title}" class="course-image" style="width: 100%; height: auto; border: 1px solid #ccc;">
                    <div style="text-align: center; display: flex; justify-content: space-between; padding-inline: 2em;">
                     <h3>${course.title}</h3>
                        <span class="course-price" style="color: #007bff; font-weight: bold; font-size: 1.2em;">${course.price}</span>
                    </div>
                       
                        <p>${course.description}</p>
                    </a>
                `;
                courseList.appendChild(courseDiv);
            });
        }

        displayCourses(courses);

        searchInput.addEventListener('input', function() {
            const searchTerm = searchInput.value.toLowerCase();
            const filteredCourses = courses.filter(course => 
                course.title.toLowerCase().includes(searchTerm) ||
                course.description.toLowerCase().includes(searchTerm)
            );
            displayCourses(filteredCourses);
        });
    }

    emailjs.init("Y_rghtirDLYBWz0JC"); 

    const form = document.getElementById('contact-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const formData = new FormData(form);

        emailjs.sendForm('service_0bgfyuo', 'YOUR_TEMPLATE_ID', formData)
            .then(function(response) {
                alert('Message sent successfully!');
                form.reset();
            }, function(error) {
                alert('Failed to send message. Please try again.');
            });
    });
});
