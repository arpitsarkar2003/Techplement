document.addEventListener('DOMContentLoaded', function () {
    const courses = [
        { 
            id: 1, 
            title: "HTML & CSS", 
            description: "Learn the basics of web development.", 
            image: "../Course_Selling/course_photos/HTML&CSS.png", 
            details: "Comprehensive guide to HTML and CSS with practical examples.", 
            price: "$50",
            chapters: [
                { title: "Introduction", content: "Introductory content with practical examples.", image: "https://via.placeholder.com/300x200?text=HTML+%26+CSS" },
                { title: "Conclusion", content: "Conclusion content with further reading.", image: "https://via.placeholder.com/300x200?text=HTML+%26+CSS" }
            ]
        },
        { 
            id: 2, 
            title: "JavaScript", 
            description: "Deep dive into JavaScript programming.", 
            image: "../Course_Selling/course_photos/JavaScript_in_Web_Development.jpg", 
            details: "Advanced JavaScript concepts and practical coding exercises.", 
            price: "$60",
            chapters: [
                { title: "Introduction", content: "Introduction to JavaScript.", image: "../Course_Selling/course_photos/JavaScript_intro.jpg" },
                { title: "Intermediate", content: "Intermediate JavaScript concepts.", image: "../Course_Selling/course_photos/JavaScript_intermediate.jpg" },
                { title: "Advanced", content: "Advanced JavaScript techniques.", image: "../Course_Selling/course_photos/JavaScript_advanced.jpg" }
            ]
        },
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

    function getQueryParam(param) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(param);
    }

    const courseId = getQueryParam('id');
    const course = courses.find(c => c.id == courseId);

    if (course) {
        const courseImage = document.querySelector('.single-course-image');
        const courseInfo = document.querySelector('.course-info');
        const chaptersList = document.getElementById('chapters-list');
        let currentChapterIndex = 0; // Track current chapter index

        // Set course image and info
        courseImage.innerHTML = `<img src="${course.image}" alt="${course.title}">`;
        courseInfo.innerHTML = `
            <h2>${course.title}</h2>
            <p>${course.description}</p>
            <div class="course-details">${course.details}</div>
            <div class="course-price"><span id="single-course-price">Price: ${course.price}</span></div>
            <div class="buttons"><button id="single-course-button" class="add-to-cart">Add to Cart</button></div>
        `;

        // Add chapter buttons
        course.chapters.forEach((chapter, index) => {
            const button = document.createElement('button');
            button.textContent = `Chapter ${index + 1}: ${chapter.title}`;
            button.setAttribute('data-index', index);
            chaptersList.appendChild(button);
        });

        function displayChapter(index) {
            if (index >= 0 && index < course.chapters.length) {
                const chapter = course.chapters[index];
                courseImage.innerHTML = `<img src="${chapter.image}" alt="${chapter.title}">`;
                courseInfo.innerHTML = `
                    <h2>${chapter.title}</h2>
                    <div class="course-details">${chapter.content}</div>
                    <div class="buttons">
                        ${index < course.chapters.length - 1
                            ? '<button id="single-course-button" class="next-chapter">Next Chapter</button>'
                            : '<p>End of Chapters</p>'}
                    </div>
                `;
                currentChapterIndex = index; // Update current chapter index
            }
        }

        // Handle chapter button clicks
        chaptersList.addEventListener('click', function (event) {
            if (event.target.tagName === 'BUTTON') {
                const chapterIndex = event.target.getAttribute('data-index');
                displayChapter(chapterIndex);
            }
        });

        // Handle next chapter button clicks
        document.addEventListener('click', function (event) {
            if (event.target.classList.contains('next-chapter')) {
                const nextChapterIndex = currentChapterIndex + 1;
                if (nextChapterIndex < course.chapters.length) {
                    displayChapter(nextChapterIndex);
                } else {
                    document.querySelector('.course-info').innerHTML += '<p>No more chapters.</p>';
                }
            }
        });

        // Handle add to cart button
        document.querySelector('.add-to-cart').addEventListener('click', () => {
            console.log('Add to Cart button clicked');
            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            const courseExists = cart.some(item => item.id === course.id);
            if (!courseExists) {
                cart.push(course);
                localStorage.setItem('cart', JSON.stringify(cart));
            } else {
                alert('Course is already in the cart!');
            }
        });

    } else {
        document.querySelector('.course-info').innerHTML = '<p>Course not found.</p>';
    }
});