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
                { title: "Intermediate", content: "Intermediate content with practical examples.", image: "https://via.placeholder.com/300x200?text=HTML+%26+CSS" },
                { title: "Advanced", content: "Advanced content with practical examples.", image: "https://via.placeholder.com/300x200?text=HTML+%26+CSS" },
                { title: "Conclusion", content: "Conclusion content with further reading.", image: "https://via.placeholder.com/300x200?text=HTML+%26+CSS" },
                { title: "Advanced", content: "Advanced JavaScript techniques.", image: "https://via.placeholder.com/300x200?text=JavaScript" }
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
                { title: "Introduction", content: "Introduction to JavaScript.", image: "https://via.placeholder.com/300x200?text=JavaScript" },
                { title: "Intermediate", content: "Intermediate JavaScript concepts.", image: "https://via.placeholder.com/300x200?text=JavaScript" },
                { title: "Advanced", content: "Advanced JavaScript techniques.", image: "https://via.placeholder.com/300x200?text=JavaScript" },
                { title: "Advanced", content: "Advanced JavaScript techniques.", image: "https://via.placeholder.com/300x200?text=JavaScript" },
                { title: "Advanced", content: "Advanced JavaScript techniques.", image: "https://via.placeholder.com/300x200?text=JavaScript" }
            ]
        },
        {
            id: 3, title: "React.js", description: "Master the popular front-end library.", image: "../Course_Selling/course_photos/react.png", details: "Learn how to build modern web applications using React.js.", price: "$70", chapters: [
                { title: "Introduction", content: "Introduction to React.js.", image: "https://via.placeholder.com/300x200?text=React.js" },
                { title: "Components", content: "Understanding React components.", image: "https://via.placeholder.com/300x200?text=React.js" },
                { title: "State and Props", content: "Managing state and props in React.", image: "https://via.placeholder.com/300x200?text=React.js" },
                { title: "Advanced Concepts", content: "Advanced React.js concepts.", image: "https://via.placeholder.com/300x200?text=React.js" },

                { title: "Advanced", content: "Advanced JavaScript techniques.", image: "https://via.placeholder.com/300x200?text=JavaScript" },
                { title: "Advanced", content: "Advanced JavaScript techniques.", image: "https://via.placeholder.com/300x200?text=JavaScript" },
                { title: "Advanced", content: "Advanced JavaScript techniques.", image: "https://via.placeholder.com/300x200?text=JavaScript" }
            ]
        },
        {
            id: 4, title: "Node.js", description: "Learn server-side JavaScript with Node.js.", image: "../Course_Selling/course_photos/Node.webp", details: "Understand backend development with Node.js and build scalable applications.", price: "$80", chapters: [
                { title: "Introduction", content: "Introduction to Node.js.", image: "https://via.placeholder.com/300x200?text=Node.js" },
                { title: "Modules", content: "Understanding Node.js modules.", image: "https://via.placeholder.com/300x200?text=Node.js" },
                { title: "Express.js", content: "Building web applications with Express.js.", image: "https://via.placeholder.com/300x200?text=Node.js" }
            ]
        },
        {
            id: 5, title: "Python", description: "Get started with Python programming.", image: "../Course_Selling/course_photos/Python.webp", details: "Beginner-friendly course on Python programming and its applications.", price: "$55", chapters: [
                { title: "Introduction", content: "Introduction to Python.", image: "https://via.placeholder.com/300x200?text=Python" },
                { title: "Data Structures", content: "Understanding Python data structures.", image: "https://via.placeholder.com/300x200?text=Python" },
                { title: "Advanced Topics", content: "Advanced Python topics.", image: "https://via.placeholder.com/300x200?text=Python" },
                { title: "Advanced", content: "Advanced JavaScript techniques.", image: "https://via.placeholder.com/300x200?text=JavaScript" }, ,
                { title: "Advanced", content: "Advanced JavaScript techniques.", image: "https://via.placeholder.com/300x200?text=JavaScript" }, ,
                { title: "Advanced", content: "Advanced JavaScript techniques.", image: "https://via.placeholder.com/300x200?text=JavaScript" },
            ]
        },
        {
            id: 6, title: "Java", description: "Learn Java for web development.", image: "../Course_Selling/course_photos/Java.png", details: "Master Java programming and build robust web applications.", price: "$65", chapters: [
                { title: "Introduction", content: "Introduction to Java.", image: "https://via.placeholder.com/300x200?text=Java" },
                { title: "OOP Concepts", content: "Understanding Object-Oriented Programming in Java.", image: "https://via.placeholder.com/300x200?text=Java" },
                { title: "Advanced Java", content: "Advanced Java programming techniques.", image: "https://via.placeholder.com/300x200?text=Java" },
                { title: "Advanced", content: "Advanced JavaScript techniques.", image: "https://via.placeholder.com/300x200?text=JavaScript" }, ,
                { title: "Advanced", content: "Advanced JavaScript techniques.", image: "https://via.placeholder.com/300x200?text=JavaScript" }, ,
                { title: "Advanced", content: "Advanced JavaScript techniques.", image: "https://via.placeholder.com/300x200?text=JavaScript" }, ,
                { title: "Advanced", content: "Advanced JavaScript techniques.", image: "https://via.placeholder.com/300x200?text=JavaScript" }, ,
                { title: "Advanced", content: "Advanced JavaScript techniques.", image: "https://via.placeholder.com/300x200?text=JavaScript" }, ,
                { title: "Advanced", content: "Advanced JavaScript techniques.", image: "https://via.placeholder.com/300x200?text=JavaScript" },
            ]
        },
        {
            id: 7, title: "C++", description: "Understand the basics of C++.", image: "../Course_Selling/course_photos/C++.webp", details: "Learn the fundamental concepts of C++ programming.", price: "$45", chapters: [
                { title: "Introduction", content: "Introduction to C++.", image: "https://via.placeholder.com/300x200?text=C++" },
                { title: "OOP Concepts", content: "Understanding Object-Oriented Programming in C++.", image: "https://via.placeholder.com/300x200?text=C++" },
                { title: "Advanced", content: "Advanced JavaScript techniques.", image: "https://via.placeholder.com/300x200?text=JavaScript" }, ,
                { title: "Advanced", content: "Advanced JavaScript techniques.", image: "https://via.placeholder.com/300x200?text=JavaScript" }, ,
                { title: "Advanced", content: "Advanced JavaScript techniques.", image: "https://via.placeholder.com/300x200?text=JavaScript" }, ,
                { title: "Advanced", content: "Advanced JavaScript techniques.", image: "https://via.placeholder.com/300x200?text=JavaScript" }, ,
                { title: "Advanced", content: "Advanced JavaScript techniques.", image: "https://via.placeholder.com/300x200?text=JavaScript" }, ,
                { title: "Advanced", content: "Advanced JavaScript techniques.", image: "https://via.placeholder.com/300x200?text=JavaScript" },
            ]
        },
        {
            id: 8, title: "PHP", description: "Learn PHP for web development.", image: "../Course_Selling/course_photos/PHP.webp", details: "Build dynamic websites and applications using PHP.", price: "$50", chapters: [
                { title: "Introduction", content: "Introduction to PHP.", image: "https://via.placeholder.com/300x200?text=PHP" },
                { title: "Working with Forms", content: "Handling forms in PHP.", image: "https://via.placeholder.com/300x200?text=PHP" },
                { title: "Advanced Topics", content: "Advanced PHP topics.", image: "https://via.placeholder.com/300x200?text=PHP" },
                { title: "Advanced", content: "Advanced JavaScript techniques.", image: "https://via.placeholder.com/300x200?text=JavaScript" }, ,
                { title: "Advanced", content: "Advanced JavaScript techniques.", image: "https://via.placeholder.com/300x200?text=JavaScript" }, ,
                { title: "Advanced", content: "Advanced JavaScript techniques.", image: "https://via.placeholder.com/300x200?text=JavaScript" }, ,
                { title: "Advanced", content: "Advanced JavaScript techniques.", image: "https://via.placeholder.com/300x200?text=JavaScript" },
            ]
        },
        {
            id: 9, title: "Ruby on Rails", description: "Master web development with Ruby on Rails.", image: "../Course_Selling/course_photos/Ruby on Rails.png", details: "Develop full-stack web applications using Ruby on Rails.", price: "$75", chapters: [
                { title: "Introduction", content: "Introduction to Ruby on Rails.", image: "https://via.placeholder.com/300x200?text=Ruby+on+Rails" },
                { title: "MVC Architecture", content: "Understanding MVC architecture.", image: "https://via.placeholder.com/300x200?text=Ruby+on+Rails" },
                { title: "Advanced Concepts", content: "Advanced Ruby on Rails concepts.", image: "https://via.placeholder.com/300x200?text=Ruby+on+Rails" },
                { title: "Advanced", content: "Advanced JavaScript techniques.", image: "https://via.placeholder.com/300x200?text=JavaScript" }, ,
                { title: "Advanced", content: "Advanced JavaScript techniques.", image: "https://via.placeholder.com/300x200?text=JavaScript" }, ,
                { title: "Advanced", content: "Advanced JavaScript techniques.", image: "https://via.placeholder.com/300x200?text=JavaScript" }, ,
                { title: "Advanced", content: "Advanced JavaScript techniques.", image: "https://via.placeholder.com/300x200?text=JavaScript" }, ,
                { title: "Advanced", content: "Advanced JavaScript techniques.", image: "https://via.placeholder.com/300x200?text=JavaScript" },
            ]
        },
        {
            id: 10, title: "SQL", description: "Learn database management with SQL.", image: "../Course_Selling/course_photos/SQL.jpg", details: "Understand SQL and manage relational databases effectively.", price: "$40", chapters: [
                { title: "Introduction", content: "Introduction to SQL.", image: "https://via.placeholder.com/300x200?text=Django" },
                { title: "Queries", content: "Writing SQL queries.", image: "https://via.placeholder.com/300x200?text=Django" },
                { title: "Advanced Topics", content: "Advanced SQL topics.", image: "https://via.placeholder.com/300x200?text=Django" },
                { title: "Advanced", content: "Advanced JavaScript techniques.", image: "https://via.placeholder.com/300x200?text=JavaScript" }, ,
                { title: "Advanced", content: "Advanced JavaScript techniques.", image: "https://via.placeholder.com/300x200?text=JavaScript" }, ,
                { title: "Advanced", content: "Advanced JavaScript techniques.", image: "https://via.placeholder.com/300x200?text=JavaScript" }, ,
                { title: "Advanced", content: "Advanced JavaScript techniques.", image: "https://via.placeholder.com/300x200?text=JavaScript" }, ,
                { title: "Advanced", content: "Advanced JavaScript techniques.", image: "https://via.placeholder.com/300x200?text=JavaScript" }, ,
                { title: "Advanced", content: "Advanced JavaScript techniques.", image: "https://via.placeholder.com/300x200?text=JavaScript" }, ,
                { title: "Advanced", content: "Advanced JavaScript techniques.", image: "https://via.placeholder.com/300x200?text=JavaScript" },
            ]
        },
        {
            id: 11, title: "Swift", description: "Learn Swift for iOS development.", image: "../Course_Selling/course_photos/Swift.jpg", details: "Master Swift programming language to build iOS applications.", price: "$80", chapters: [
                { title: "Introduction", content: "Introduction to Swift.", image: "https://via.placeholder.com/300x200?text=Swift" },
                { title: "Core Concepts", content: "Understanding core concepts in Swift.", image: "https://via.placeholder.com/300x200?text=Swift" },
                { title: "iOS Development", content: "Building iOS applications.", image: "https://via.placeholder.com/300x200?text=Swift" },
                { title: "Advanced", content: "Advanced JavaScript techniques.", image: "https://via.placeholder.com/300x200?text=JavaScript" }, ,
                { title: "Advanced", content: "Advanced JavaScript techniques.", image: "https://via.placeholder.com/300x200?text=JavaScript" }, ,
                { title: "Advanced", content: "Advanced JavaScript techniques.", image: "https://via.placeholder.com/300x200?text=JavaScript" }, ,
                { title: "Advanced", content: "Advanced JavaScript techniques.", image: "https://via.placeholder.com/300x200?text=JavaScript" }, ,
                { title: "Advanced", content: "Advanced JavaScript techniques.", image: "https://via.placeholder.com/300x200?text=JavaScript" }, ,
                { title: "Advanced", content: "Advanced JavaScript techniques.", image: "https://via.placeholder.com/300x200?text=JavaScript" },
            ]
        },
        {
            id: 12, title: "Kotlin", description: "Learn Kotlin for Android development.", image: "../Course_Selling/course_photos/Kotlin.webp", details: "Develop Android applications using Kotlin.", price: "$70", chapters: [
                { title: "Introduction", content: "Introduction to Kotlin.", image: "https://via.placeholder.com/300x200?text=Kotlin" },
                { title: "Core Concepts", content: "Understanding core concepts in Kotlin.", image: "https://via.placeholder.com/300x200?text=Kotlin" },
                { title: "Android Development", content: "Building Android applications.", image: "https://via.placeholder.com/300x200?text=Kotlin" },
                { title: "Advanced", content: "Advanced JavaScript techniques.", image: "https://via.placeholder.com/300x200?text=JavaScript" }, ,
                { title: "Advanced", content: "Advanced JavaScript techniques.", image: "https://via.placeholder.com/300x200?text=JavaScript" }, ,
                { title: "Advanced", content: "Advanced JavaScript techniques.", image: "https://via.placeholder.com/300x200?text=JavaScript" }, ,
                { title: "Advanced", content: "Advanced JavaScript techniques.", image: "https://via.placeholder.com/300x200?text=JavaScript" }, ,
                { title: "Advanced", content: "Advanced JavaScript techniques.", image: "https://via.placeholder.com/300x200?text=JavaScript" },
            ]
        },
        {
            id: 13, title: "Angular", description: "Master Angular for front-end development.", image: "../Course_Selling/course_photos/Angular.jpg", details: "Build dynamic web applications using Angular.", price: "$65", chapters: [
                { title: "Introduction", content: "Introduction to Angular.", image: "https://via.placeholder.com/300x200?text=Angular" },
                { title: "Components", content: "Understanding Angular components.", image: "https://via.placeholder.com/300x200?text=Angular" },
                { title: "Services and DI", content: "Services and Dependency Injection in Angular.", image: "https://via.placeholder.com/300x200?text=Angular" },
                { title: "Advanced", content: "Advanced JavaScript techniques.", image: "https://via.placeholder.com/300x200?text=JavaScript" },
                { title: "Advanced", content: "Advanced JavaScript techniques.", image: "https://via.placeholder.com/300x200?text=JavaScript" },
                { title: "Advanced", content: "Advanced JavaScript techniques.", image: "https://via.placeholder.com/300x200?text=JavaScript" },
                { title: "Advanced", content: "Advanced JavaScript techniques.", image: "https://via.placeholder.com/300x200?text=JavaScript" },
                { title: "Advanced", content: "Advanced JavaScript techniques.", image: "https://via.placeholder.com/300x200?text=JavaScript" },
                { title: "Advanced", content: "Advanced JavaScript techniques.", image: "https://via.placeholder.com/300x200?text=JavaScript" },
                { title: "Advanced", content: "Advanced JavaScript techniques.", image: "https://via.placeholder.com/300x200?text=JavaScript" },
            ]
        },
        {
            id: 14, title: "Vue.js", description: "Learn Vue.js for modern web development.", image: "../Course_Selling/course_photos/Vue.jpeg", details: "Build interactive web applications using Vue.js.", price: "$60", chapters: [
                { title: "Introduction", content: "Introduction to Vue.js.", image: "https://via.placeholder.com/300x200?text=Vue.js" },
                { title: "Components", content: "Understanding Vue.js components.", image: "https://via.placeholder.com/300x200?text=Vue.js" },
                { title: "Vue Router", content: "Routing in Vue.js applications.", image: "https://via.placeholder.com/300x200?text=Vue.js" },
                { title: "Advanced", content: "Advanced JavaScript techniques.", image: "https://via.placeholder.com/300x200?text=JavaScript" },
                { title: "Advanced", content: "Advanced JavaScript techniques.", image: "https://via.placeholder.com/300x200?text=JavaScript" },
                { title: "Advanced", content: "Advanced JavaScript techniques.", image: "https://via.placeholder.com/300x200?text=JavaScript" },
                { title: "Advanced", content: "Advanced JavaScript techniques.", image: "https://via.placeholder.com/300x200?text=JavaScript" },
                { title: "Advanced", content: "Advanced JavaScript techniques.", image: "https://via.placeholder.com/300x200?text=JavaScript" },
                { title: "Advanced", content: "Advanced JavaScript techniques.", image: "https://via.placeholder.com/300x200?text=JavaScript" },
            ]
        },
        {
            id: 17, title: "AWS", description: "Learn AWS for cloud computing.", image: "../Course_Selling/course_photos/AWS.png", details: "Master AWS and cloud computing concepts.", price: "$100", chapters: [
                { title: "Introduction", content: "Introduction to AWS.", image: "https://via.placeholder.com/300x200?text=AWS" },
                { title: "EC2", content: "Understanding EC2 services.", image: "https://via.placeholder.com/300x200?text=AWS" },
                { title: "S3", content: "Using S3 for storage.", image: "https://via.placeholder.com/300x200?text=AWS" },
                { title: "Advanced", content: "Advanced JavaScript techniques.", image: "https://via.placeholder.com/300x200?text=JavaScript" },

                { title: "Advanced", content: "Advanced JavaScript techniques.", image: "https://via.placeholder.com/300x200?text=JavaScript" },

                { title: "Advanced", content: "Advanced JavaScript techniques.", image: "https://via.placeholder.com/300x200?text=JavaScript" },

                { title: "Advanced", content: "Advanced JavaScript techniques.", image: "https://via.placeholder.com/300x200?text=JavaScript" },
            ]
        },
        {
            id: 18, title: "Azure", description: "Learn Azure for cloud solutions.", image: "../Course_Selling/course_photos/Azure.jpg", details: "Understand Microsoft Azure and its services.", price: "$90", chapters: [
                { title: "Introduction", content: "Introduction to Azure.", image: "https://via.placeholder.com/300x200?text=Azure" },
                { title: "Azure VMs", content: "Understanding Azure VMs.", image: "https://via.placeholder.com/300x200?text=Azure" },
                { title: "Azure Storage", content: "Using Azure Storage.", image: "https://via.placeholder.com/300x200?text=Azure" },
                { title: "Advanced", content: "Advanced JavaScript techniques.", image: "https://via.placeholder.com/300x200?text=JavaScript" },
                { title: "Advanced", content: "Advanced JavaScript techniques.", image: "https://via.placeholder.com/300x200?text=JavaScript" },
                { title: "Advanced", content: "Advanced JavaScript techniques.", image: "https://via.placeholder.com/300x200?text=JavaScript" },
                { title: "Advanced", content: "Advanced JavaScript techniques.", image: "https://via.placeholder.com/300x200?text=JavaScript" },
                { title: "Advanced", content: "Advanced JavaScript techniques.", image: "https://via.placeholder.com/300x200?text=JavaScript" },
                { title: "Advanced", content: "Advanced JavaScript techniques.", image: "https://via.placeholder.com/300x200?text=JavaScript" },
                { title: "Advanced", content: "Advanced JavaScript techniques.", image: "https://via.placeholder.com/300x200?text=JavaScript" },
                { title: "Advanced", content: "Advanced JavaScript techniques.", image: "https://via.placeholder.com/300x200?text=JavaScript" },
                { title: "Advanced", content: "Advanced JavaScript techniques.", image: "https://via.placeholder.com/300x200?text=JavaScript" },
                { title: "Advanced", content: "Advanced JavaScript techniques.", image: "https://via.placeholder.com/300x200?text=JavaScript" },
                { title: "Advanced", content: "Advanced JavaScript techniques.", image: "https://via.placeholder.com/300x200?text=JavaScript" },
                { title: "Advanced", content: "Advanced JavaScript techniques.", image: "https://via.placeholder.com/300x200?text=JavaScript" },
                { title: "Advanced", content: "Advanced JavaScript techniques.", image: "https://via.placeholder.com/300x200?text=JavaScript" },
            ]
        },
        {
            id: 20, title: "Machine Learning", description: "Learn machine learning concepts.", image: "../Course_Selling/course_photos/Machine Learning.png", details: "Master machine learning with practical examples.", price: "$120", chapters: [
                { title: "Introduction", content: "Introduction to Machine Learning.", image: "https://via.placeholder.com/300x200?text=Machine+Learning" },
                { title: "Supervised Learning", content: "Understanding supervised learning.", image: "https://via.placeholder.com/300x200?text=Machine+Learning" },
                { title: "Unsupervised Learning", content: "Understanding unsupervised learning.", image: "https://via.placeholder.com/300x200?text=Machine+Learning" },
                { title: "Advanced", content: "Advanced JavaScript techniques.", image: "https://via.placeholder.com/300x200?text=JavaScript" },
                { title: "Advanced", content: "Advanced JavaScript techniques.", image: "https://via.placeholder.com/300x200?text=JavaScript" },
                { title: "Advanced", content: "Advanced JavaScript techniques.", image: "https://via.placeholder.com/300x200?text=JavaScript" },
                { title: "Advanced", content: "Advanced JavaScript techniques.", image: "https://via.placeholder.com/300x200?text=JavaScript" },
                { title: "Advanced", content: "Advanced JavaScript techniques.", image: "https://via.placeholder.com/300x200?text=JavaScript" },
                { title: "Advanced", content: "Advanced JavaScript techniques.", image: "https://via.placeholder.com/300x200?text=JavaScript" },
                { title: "Advanced", content: "Advanced JavaScript techniques.", image: "https://via.placeholder.com/300x200?text=JavaScript" },
                { title: "Advanced", content: "Advanced JavaScript techniques.", image: "https://via.placeholder.com/300x200?text=JavaScript" },
                { title: "Advanced", content: "Advanced JavaScript techniques.", image: "https://via.placeholder.com/300x200?text=JavaScript" },
                { title: "Advanced", content: "Advanced JavaScript techniques.", image: "https://via.placeholder.com/300x200?text=JavaScript" },
                { title: "Advanced", content: "Advanced JavaScript techniques.", image: "https://via.placeholder.com/300x200?text=JavaScript" },
                { title: "Advanced", content: "Advanced JavaScript techniques.", image: "https://via.placeholder.com/300x200?text=JavaScript" },
                { title: "Advanced", content: "Advanced JavaScript techniques.", image: "https://via.placeholder.com/300x200?text=JavaScript" },
                { title: "Advanced", content: "Advanced JavaScript techniques.", image: "https://via.placeholder.com/300x200?text=JavaScript" },
                { title: "Advanced", content: "Advanced JavaScript techniques.", image: "https://via.placeholder.com/300x200?text=JavaScript" },
                { title: "Advanced", content: "Advanced JavaScript techniques.", image: "https://via.placeholder.com/300x200?text=JavaScript" },
                { title: "Advanced", content: "Advanced JavaScript techniques.", image: "https://via.placeholder.com/300x200?text=JavaScript" },
            ]
        },
        {
            id: 21, title: "Data Science", description: "Learn data science techniques.", image: "../Course_Selling/course_photos/Data Science.jpg", details: "Understand data science and its applications.", price: "$110", chapters: [
                { title: "Introduction", content: "Introduction to Data Science.", image: "https://via.placeholder.com/300x200?text=Data+Science" },
                { title: "Data Analysis", content: "Performing data analysis.", image: "https://via.placeholder.com/300x200?text=Data+Science" },
                { title: "Machine Learning", content: "Applying machine learning in data science.", image: "https://via.placeholder.com/300x200?text=Data+Science" },
                { title: "Advanced", content: "Advanced JavaScript techniques.", image: "https://via.placeholder.com/300x200?text=JavaScript" },
                { title: "Advanced", content: "Advanced JavaScript techniques.", image: "https://via.placeholder.com/300x200?text=JavaScript" },
                { title: "Advanced", content: "Advanced JavaScript techniques.", image: "https://via.placeholder.com/300x200?text=JavaScript" },
                { title: "Advanced", content: "Advanced JavaScript techniques.", image: "https://via.placeholder.com/300x200?text=JavaScript" },
                { title: "Advanced", content: "Advanced JavaScript techniques.", image: "https://via.placeholder.com/300x200?text=JavaScript" },
                { title: "Advanced", content: "Advanced JavaScript techniques.", image: "https://via.placeholder.com/300x200?text=JavaScript" },
                { title: "Advanced", content: "Advanced JavaScript techniques.", image: "https://via.placeholder.com/300x200?text=JavaScript" },
                { title: "Advanced", content: "Advanced JavaScript techniques.", image: "https://via.placeholder.com/300x200?text=JavaScript" },
                { title: "Advanced", content: "Advanced JavaScript techniques.", image: "https://via.placeholder.com/300x200?text=JavaScript" },
                { title: "Advanced", content: "Advanced JavaScript techniques.", image: "https://via.placeholder.com/300x200?text=JavaScript" },
                { title: "Advanced", content: "Advanced JavaScript techniques.", image: "https://via.placeholder.com/300x200?text=JavaScript" },
                { title: "Advanced", content: "Advanced JavaScript techniques.", image: "https://via.placeholder.com/300x200?text=JavaScript" },
                { title: "Advanced", content: "Advanced JavaScript techniques.", image: "https://via.placeholder.com/300x200?text=JavaScript" },
                { title: "Advanced", content: "Advanced JavaScript techniques.", image: "https://via.placeholder.com/300x200?text=JavaScript" },
                { title: "Advanced", content: "Advanced JavaScript techniques.", image: "https://via.placeholder.com/300x200?text=JavaScript" },
            ]
        },
        {
            id: 23, title: "DevOps", description: "Learn DevOps practices.", image: "../Course_Selling/course_photos/DevOps.webp", details: "Understand DevOps and its tools.", price: "$90", chapters: [
                { title: "Introduction", content: "Introduction to DevOps.", image: "https://via.placeholder.com/300x200?text=DevOps" },
                { title: "CI/CD", content: "Implementing CI/CD pipelines.", image: "https://via.placeholder.com/300x200?text=DevOps" },
                { title: "Monitoring", content: "Monitoring applications and infrastructure.", image: "https://via.placeholder.com/300x200?text=DevOps" },
                { title: "Advanced", content: "Advanced JavaScript techniques.", image: "https://via.placeholder.com/300x200?text=JavaScript" },
                { title: "Advanced", content: "Advanced JavaScript techniques.", image: "https://via.placeholder.com/300x200?text=JavaScript" },
                { title: "Advanced", content: "Advanced JavaScript techniques.", image: "https://via.placeholder.com/300x200?text=JavaScript" },
                { title: "Advanced", content: "Advanced JavaScript techniques.", image: "https://via.placeholder.com/300x200?text=JavaScript" },
                { title: "Advanced", content: "Advanced JavaScript techniques.", image: "https://via.placeholder.com/300x200?text=JavaScript" },
                { title: "Advanced", content: "Advanced JavaScript techniques.", image: "https://via.placeholder.com/300x200?text=JavaScript" },
                { title: "Advanced", content: "Advanced JavaScript techniques.", image: "https://via.placeholder.com/300x200?text=JavaScript" },
                { title: "Advanced", content: "Advanced JavaScript techniques.", image: "https://via.placeholder.com/300x200?text=JavaScript" },
                { title: "Advanced", content: "Advanced JavaScript techniques.", image: "https://via.placeholder.com/300x200?text=JavaScript" },
                { title: "Advanced", content: "Advanced JavaScript techniques.", image: "https://via.placeholder.com/300x200?text=JavaScript" },
                { title: "Advanced", content: "Advanced JavaScript techniques.", image: "https://via.placeholder.com/300x200?text=JavaScript" },
                { title: "Advanced", content: "Advanced JavaScript techniques.", image: "https://via.placeholder.com/300x200?text=JavaScript" },
                { title: "Advanced", content: "Advanced JavaScript techniques.", image: "https://via.placeholder.com/300x200?text=JavaScript" },
                { title: "Advanced", content: "Advanced JavaScript techniques.", image: "https://via.placeholder.com/300x200?text=JavaScript" },
                { title: "Advanced", content: "Advanced JavaScript techniques.", image: "https://via.placeholder.com/300x200?text=JavaScript" },
                { title: "Advanced", content: "Advanced JavaScript techniques.", image: "https://via.placeholder.com/300x200?text=JavaScript" },
                { title: "Advanced", content: "Advanced JavaScript techniques.", image: "https://via.placeholder.com/300x200?text=JavaScript" },
                { title: "Advanced", content: "Advanced JavaScript techniques.", image: "https://via.placeholder.com/300x200?text=JavaScript" },
                { title: "Advanced", content: "Advanced JavaScript techniques.", image: "https://via.placeholder.com/300x200?text=JavaScript" },
                { title: "Advanced", content: "Advanced JavaScript techniques.", image: "https://via.placeholder.com/300x200?text=JavaScript" },
                { title: "Advanced", content: "Advanced JavaScript techniques.", image: "https://via.placeholder.com/300x200?text=JavaScript" },
            ]
        },
        {
            id: 24, title: "Cyber Security", description: "Learn cyber security concepts.", image: "../Course_Selling/course_photos/Cyber Security.jpg", details: "Master cyber security and protect your applications.", price: "$100", chapters: [
                { title: "Introduction", content: "Introduction to Cyber Security.", image: "https://via.placeholder.com/300x200?text=Cyber+Security" },
                { title: "Network Security", content: "Understanding network security.", image: "https://via.placeholder.com/300x200?text=Cyber+Security" },
                { title: "Application Security", content: "Securing applications.", image: "https://via.placeholder.com/300x200?text=Cyber+Security" },
                { title: "Advanced", content: "Advanced JavaScript techniques.", image: "https://via.placeholder.com/300x200?text=JavaScript" },
                { title: "Advanced", content: "Advanced JavaScript techniques.", image: "https://via.placeholder.com/300x200?text=JavaScript" },
                { title: "Advanced", content: "Advanced JavaScript techniques.", image: "https://via.placeholder.com/300x200?text=JavaScript" },
                { title: "Advanced", content: "Advanced JavaScript techniques.", image: "https://via.placeholder.com/300x200?text=JavaScript" },
                { title: "Advanced", content: "Advanced JavaScript techniques.", image: "https://via.placeholder.com/300x200?text=JavaScript" },
                { title: "Advanced", content: "Advanced JavaScript techniques.", image: "https://via.placeholder.com/300x200?text=JavaScript" },
                { title: "Advanced", content: "Advanced JavaScript techniques.", image: "https://via.placeholder.com/300x200?text=JavaScript" },
                { title: "Advanced", content: "Advanced JavaScript techniques.", image: "https://via.placeholder.com/300x200?text=JavaScript" },
                { title: "Advanced", content: "Advanced JavaScript techniques.", image: "https://via.placeholder.com/300x200?text=JavaScript" },
                { title: "Advanced", content: "Advanced JavaScript techniques.", image: "https://via.placeholder.com/300x200?text=JavaScript" },
            ]
        },
        {
            id: 25, title: "Blockchain", description: "Learn blockchain technology.", image: "../Course_Selling/course_photos/Blockchain.jpg", details: "Understand blockchain and its applications.", price: "$115", chapters: [
                { title: "Introduction", content: "Introduction to Blockchain.", image: "https://via.placeholder.com/300x200?text=Blockchain" },
                { title: "Smart Contracts", content: "Understanding smart contracts.", image: "https://via.placeholder.com/300x200?text=Blockchain" },
                { title: "Blockchain Development", content: "Developing on the blockchain.", image: "https://via.placeholder.com/300x200?text=Blockchain" },
                { title: "Advanced", content: "Advanced JavaScript techniques.", image: "https://via.placeholder.com/300x200?text=JavaScript" },
                { title: "Advanced", content: "Advanced JavaScript techniques.", image: "https://via.placeholder.com/300x200?text=JavaScript" },
                { title: "Advanced", content: "Advanced JavaScript techniques.", image: "https://via.placeholder.com/300x200?text=JavaScript" },
                { title: "Advanced", content: "Advanced JavaScript techniques.", image: "https://via.placeholder.com/300x200?text=JavaScript" },
                { title: "Advanced", content: "Advanced JavaScript techniques.", image: "https://via.placeholder.com/300x200?text=JavaScript" },
                { title: "Advanced", content: "Advanced JavaScript techniques.", image: "https://via.placeholder.com/300x200?text=JavaScript" },
                { title: "Advanced", content: "Advanced JavaScript techniques.", image: "https://via.placeholder.com/300x200?text=JavaScript" },
            ]
        },
        {
            id: 26, title: "UI/UX Design", description: "Get started with UI/UX design.", image: "../Course_Selling/course_photos/UI UX Design.png", details: "Learn the principles of user interface and user experience design.", price: "$75", chapters: [
                { title: "Introduction", content: "Introduction to Blockchain.", image: "https://via.placeholder.com/300x200?text=UI&UX" },
                { title: "Smart Contracts", content: "Understanding smart contracts.", image: "https://via.placeholder.com/300x200?text=UI&UX" },
                { title: "UI&UX Development", content: "Developing on the UI&UX.", image: "https://via.placeholder.com/300x200?text=UI&UX" },
                { title: "Advanced", content: "Advanced JavaScript techniques.", image: "https://via.placeholder.com/300x200?text=JavaScript" },
                { title: "Advanced", content: "Advanced JavaScript techniques.", image: "https://via.placeholder.com/300x200?text=JavaScript" },
                { title: "Advanced", content: "Advanced JavaScript techniques.", image: "https://via.placeholder.com/300x200?text=JavaScript" },
                { title: "Advanced", content: "Advanced JavaScript techniques.", image: "https://via.placeholder.com/300x200?text=JavaScript" },
                { title: "Advanced", content: "Advanced JavaScript techniques.", image: "https://via.placeholder.com/300x200?text=JavaScript" },
                { title: "Advanced", content: "Advanced JavaScript techniques.", image: "https://via.placeholder.com/300x200?text=JavaScript" },
                { title: "Advanced", content: "Advanced JavaScript techniques.", image: "https://via.placeholder.com/300x200?text=JavaScript" },
            ]
        },
    ];

    // home sliders

    if (document.querySelector('.slides')) {
        const slides = document.querySelector('.slides');
        const homeCourses = courses.slice(0, 5);
        homeCourses.forEach(course => {
            const courseDiv = document.createElement('div');
            courseDiv.className = 'course';
            courseDiv.innerHTML = `
                <a href="course-detail.html?id=${course.id}" class="course-link">
                <img src="${course.image}" alt="${course.title}" class="course-image" style="width: 100%; height: auto; border: 1px solid #ccc;">
                <h3>${course.title}</h3>
                <p>${course.description}</p>
            </a>
            `;
            slides.appendChild(courseDiv);
        });

        let currentIndex = 0;
        const slideWidth = 150;
        const slideInterval = setInterval(() => {
            currentIndex = (currentIndex + 1) % homeCourses.length;
            slides.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
        }, 2000);
    }

    // course page


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
                        <p class="course-length" style="text-align: center; font-weight: bold; color: #555;">Chapters: ${course.chapters.length}</p>
                    </a>
                `;
                courseList.appendChild(courseDiv);
            });
        }

        displayCourses(courses);

        searchInput.addEventListener('input', function () {
            const searchTerm = searchInput.value.toLowerCase();
            const filteredCourses = courses.filter(course =>
                course.title.toLowerCase().includes(searchTerm) ||
                course.description.toLowerCase().includes(searchTerm)
            );
            displayCourses(filteredCourses);
        });
    }

    // cart update

    function updateCartCount() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const cartCount = cart.length;
        const cartButton = document.querySelector('#cart-button');
        if (cartButton) {
            cartButton.textContent = `Cart (${cartCount})`;
        }
    }

    updateCartCount();

    function updateCartButton() {
        const cartButton = document.getElementById('cart-button');
        if (cartButton) {
            const cartItemsCount = getCartItemsCount();
            cartButton.textContent = `Cart (${cartItemsCount})`;
        }
    }

    function getCartItemsCount() {

        const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        return cartItems.length;
    }

    // emailjs

    emailjs.init("Y_rghtirDLYBWz0JC");

    const form = document.getElementById('contact-form');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const formData = new FormData(form);

        emailjs.sendForm('service_0bgfyuo', 'YOUR_TEMPLATE_ID', formData)
            .then(function (response) {
                alert('Message sent successfully!');
                form.reset();
            }, function (error) {
                alert('Failed to send message. Please try again.');
            });
    });

    


    const username = localStorage.getItem('username');

    if (username) {
        const signInLink = document.querySelector('nav a[href="sign-in.html"]');
        if (signInLink) {
            signInLink.textContent = `Hello, ${username}`;
            signInLink.href = '';
        }
        updateCartButton();
    }
});



// authentication

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('sign-in-form');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username && password) {
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
            alert('Sign in successful!');
            window.location.href = 'index.html';
        } else {
            alert('Please fill in both fields.');
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const authButton = document.getElementById('auth-button');
    const isLoggedIn = localStorage.getItem('userLoggedIn');

    if (isLoggedIn) {
        authButton.textContent = 'Sign Out';
        authButton.classList.add('sign-out');
        authButton.addEventListener('click', signOut);
    } else {
        authButton.textContent = 'Sign In';
        authButton.classList.remove('sign-out');
        authButton.addEventListener('click', signIn);
    }
});

function signIn() {
    localStorage.setItem('userLoggedIn', 'true');
    location.reload();
}

function signOut() {
    localStorage.removeItem('userLoggedIn');
    location.reload();
}
