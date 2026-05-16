const courses = [
    { code: "CSE 110", name: "Intro to Programming", credits: 2 },
    { code: "WDD 130", name: "Web Fundamentals", credits: 2 },
    { code: "CSE 111", name: "Programming with Functions", credits: 2 },
    { code: "CSE 210", name: "Programming with Classes", credits: 2 },
    { code: "WDD 131", name: "Dynamic Web Fundamentals", credits: 2 },
    { code: "WDD 231", name: "Web Frontend Development I", credits: 2 }
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