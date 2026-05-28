const courses = [
    {
        code: "CSE 110",
        name: "Introduction to Programming",
        credits: 2,
        certificate: "CSE",
        description: "This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems."
    },
    {
        code: "WDD 130",
        name: "Web Fundamentals",
        credits: 2,
        certificate: "WDD",
        description: "This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major."
    },
    {
        code: "CSE 111",
        name: "Programming with Functions",
        credits: 2,
        certificate: "CSE",
        description: "CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities."
    },
    {
        code: "CSE 210",
        name: "Programming with Classes",
        credits: 2,
        certificate: "CSE",
        description: "This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism."
    },
    {
        code: "WDD 131",
        name: "Dynamic Web Fundamentals",
        credits: 2,
        certificate: "WDD",
        description: "This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences."
    },
    {
        code: "WDD 231",
        name: "Web Frontend Development I",
        credits: 2,
        certificate: "WDD",
        description: "This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage."
    }
];

const courseContainer = document.querySelector("#courseContainer");
courseContainer.classList.add("empty");
    
const totalCredits = document.querySelector("#totalCredits");
const creditsText = document.querySelector("#creditsText");

function displayCourses(courseList) {
    courseContainer.innerHTML = "";
    courseContainer.classList.remove("empty");

    courseList.forEach(course => {
        const courseButton = document.createElement("button");

        courseButton.textContent = `${course.code}: ${course.name}`;
        courseButton.classList.add("course-card");

        courseButton.addEventListener("click", () => {
            document.querySelector("#modalTitle").textContent = `${course.code}: ${course.name}`;
            document.querySelector("#modalDescription").textContent = course.description;
            document.querySelector("#modalCredits").textContent = course.credits;
            document.querySelector("#modalCertificate").textContent = course.certificate;

            document.querySelector("#courseModal").showModal();
        });

        courseContainer.appendChild(courseButton);
    });

    const credits = courseList.reduce((sum, course) => sum + course.credits, 0);

    totalCredits.textContent = credits;
    creditsText.style.display = "block";
}

document.querySelector("#all").addEventListener("click", () => {
    displayCourses(courses);
});

document.querySelector("#cse").addEventListener("click", () => {
    displayCourses(
        courses.filter(course => course.code.startsWith("CSE"))
    );
});

document.querySelector("#wdd").addEventListener("click", () => {
    displayCourses(
        courses.filter(course => course.code.startsWith("WDD"))
    );
});

document.querySelector("#none").addEventListener("click", () => {
    courseContainer.innerHTML = "";
    totalCredits.textContent = "";
    creditsText.style.display = "none";

    courseContainer.classList.add("empty");
});

document.querySelector("#closeModal").addEventListener("click", () => {
    document.querySelector("#courseModal").close();
});