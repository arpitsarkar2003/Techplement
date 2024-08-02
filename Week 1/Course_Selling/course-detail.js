document.addEventListener('DOMContentLoaded', function() {
    const courses = [
        { id: 1, title: "HTML & CSS", description: "Learn the basics of web development.", image: "https://via.placeholder.com/300x200?text=HTML+%26+CSS", details: "Comprehensive guide to HTML and CSS with practical examples.", price: "$50" },
    { id: 2, title: "JavaScript", description: "Deep dive into JavaScript programming.", image: "https://via.placeholder.com/300x200?text=JavaScript", details: "Advanced JavaScript concepts and practical coding exercises.", price: "$60" },
    { id: 3, title: "React.js", description: "Master the popular front-end library.", image: "https://via.placeholder.com/300x200?text=React.js", details: "Learn how to build modern web applications using React.js.", price: "$70" },
    { id: 4, title: "Node.js", description: "Learn server-side JavaScript with Node.js.", image: "https://via.placeholder.com/300x200?text=Node.js", details: "Understand backend development with Node.js and build scalable applications.", price: "$80" },
    { id: 5, title: "Python", description: "Get started with Python programming.", image: "https://via.placeholder.com/300x200?text=Python", details: "Beginner-friendly course on Python programming and its applications.", price: "$55" },
    { id: 6, title: "Java", description: "Learn Java for web development.", image: "https://via.placeholder.com/300x200?text=Java", details: "Master Java programming and build robust web applications.", price: "$65" },
    { id: 7, title: "C++", description: "Understand the basics of C++.", image: "https://via.placeholder.com/300x200?text=C++", details: "Learn the fundamental concepts of C++ programming.", price: "$45" },
    { id: 8, title: "PHP", description: "Learn PHP for web development.", image: "https://via.placeholder.com/300x200?text=PHP", details: "Build dynamic websites and applications using PHP.", price: "$50" },
    { id: 9, title: "Ruby on Rails", description: "Master web development with Ruby on Rails.", image: "https://via.placeholder.com/300x200?text=Ruby+on+Rails", details: "Develop full-stack web applications using Ruby on Rails.", price: "$75" },
    { id: 10, title: "Django", description: "Learn web development with Django.", image: "https://via.placeholder.com/300x200?text=Django", details: "Build scalable web applications with Python's Django framework.", price: "$70" },
    { id: 11, title: "Vue.js", description: "Learn Vue.js for reactive interfaces.", image: "https://via.placeholder.com/300x200?text=Vue.js", details: "Create dynamic and reactive web interfaces using Vue.js.", price: "$65" },
    { id: 12, title: "Angular", description: "Get started with Angular.", image: "https://via.placeholder.com/300x200?text=Angular", details: "Develop powerful single-page applications with Angular.", price: "$70" },
    { id: 13, title: "Swift", description: "Learn Swift for iOS development.", image: "https://via.placeholder.com/300x200?text=Swift", details: "Build native iOS applications using Swift programming language.", price: "$80" },
    { id: 14, title: "Kotlin", description: "Learn Kotlin for Android development.", image: "https://via.placeholder.com/300x200?text=Kotlin", details: "Develop modern Android apps using Kotlin.", price: "$75" },
    { id: 15, title: "SQL", description: "Understand SQL for database management.", image: "https://via.placeholder.com/300x200?text=SQL", details: "Learn how to manage and query databases using SQL.", price: "$55" },
    { id: 16, title: "NoSQL", description: "Learn about NoSQL databases.", image: "https://via.placeholder.com/300x200?text=NoSQL", details: "Understand the concepts and applications of NoSQL databases.", price: "$60" },
    { id: 17, title: "Git", description: "Master version control with Git.", image: "https://via.placeholder.com/300x200?text=Git", details: "Learn version control and collaboration using Git.", price: "$40" },
    { id: 18, title: "AWS", description: "Learn cloud computing with AWS.", image: "https://via.placeholder.com/300x200?text=AWS", details: "Get started with cloud computing services provided by AWS.", price: "$90" },
    { id: 19, title: "Azure", description: "Get started with Microsoft Azure.", image: "https://via.placeholder.com/300x200?text=Azure", details: "Explore cloud services and solutions with Microsoft Azure.", price: "$85" },
    { id: 20, title: "Machine Learning", description: "Learn the basics of Machine Learning.", image: "https://via.placeholder.com/300x200?text=Machine+Learning", details: "Introduction to machine learning concepts and techniques.", price: "$100" },
    { id: 21, title: "Data Science", description: "Get started with Data Science.", image: "https://via.placeholder.com/300x200?text=Data+Science", details: "Learn data analysis, visualization, and machine learning with Python.", price: "$110" },
    { id: 22, title: "Cyber Security", description: "Understand the fundamentals of Cyber Security.", image: "https://via.placeholder.com/300x200?text=Cyber+Security", details: "Learn how to protect systems and data from cyber threats.", price: "$95" },
    { id: 23, title: "Blockchain", description: "Learn about Blockchain technology.", image: "https://via.placeholder.com/300x200?text=Blockchain", details: "Understand the principles and applications of blockchain technology.", price: "$85" },
    { id: 24, title: "DevOps", description: "Understand DevOps practices.", image: "https://via.placeholder.com/300x200?text=DevOps", details: "Learn about the tools and practices used in DevOps.", price: "$90" },
    { id: 25, title: "UI/UX Design", description: "Get started with UI/UX design.", image: "https://via.placeholder.com/300x200?text=UI%2FUX+Design", details: "Learn the principles of user interface and user experience design.", price: "$75" },
    { id: 26, title: "Project Management", description: "Learn Project Management principles.", image: "https://via.placeholder.com/300x200?text=Project+Management", details: "Understand project management methodologies and practices.", price: "$80" },
    { id: 27, title: "Agile Methodologies", description: "Understand Agile methodologies.", image: "https://via.placeholder.com/300x200?text=Agile+Methodologies", details: "Learn the principles and practices of Agile development.", price: "$65" },
    { id: 28, title: "Scrum", description: "Learn Scrum for project management.", image: "https://via.placeholder.com/300x200?text=Scrum", details: "Master Scrum methodology for Agile project management.", price: "$70" },
    { id: 29, title: "SEO", description: "Get started with SEO.", image: "https://via.placeholder.com/300x200?text=SEO", details: "Learn search engine optimization techniques and practices.", price: "$60" },
    { id: 30, title: "Digital Marketing", description: "Learn the basics of Digital Marketing.", image: "https://via.placeholder.com/300x200?text=Digital+Marketing", details: "Understand digital marketing strategies and tools.", price: "$80" }
    ];

    function getQueryParam(param) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(param);
    }

    const courseId = getQueryParam('id');
    const course = courses.find(c => c.id == courseId);

    if (course) {
        const courseImage = document.querySelector('.single-course-image');
        courseImage.innerHTML = `
            <img src="${course.image}" alt="${course.title}" style="width: 75%;">
        `;
        const courseInfo = document.querySelector('.course-info');
        courseInfo.innerHTML = `
            <div>
                <h2>${course.title}</h2>
                <p>${course.description}</p>
                <div class="course-details">${course.details}</div>
            </div>
            <div class="course-price">
                <span id="single-course-price">Price: ${course.price}</span>
            </div>
            <div class="buttons">
                <button id="single-course-button" class="add-to-cart">Add to Cart</button>
            </div>
        `;

        document.getElementById('single-course-button').addEventListener('click', function() {
            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            cart.push(course);
            localStorage.setItem('cart', JSON.stringify(cart));
            alert('Course added to cart!');
        });
    } else {
        document.querySelector('.course-info').innerHTML = '<p>Course not found.</p>';
    }
});