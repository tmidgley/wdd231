const membersContainer = document.querySelector("#members");
const gridButton = document.querySelector("#grid-view");
const listButton = document.querySelector("#list-view");

const membersURL = "data/members.json";

async function getMembers() {
    try {
        const response = await fetch(membersURL);

        if (!response.ok) {
            throw new Error("Unable to load members.json");
        }

        const data = await response.json();
        displayMembers(data.members);
    } catch (error) {
        membersContainer.innerHTML = `
            <p class="error-message">
                Member information could not be loaded. Please check your data/members.json file.
            </p>
        `;
        console.error(error);
    }
}

function displayMembers(members) {
    membersContainer.innerHTML = "";

    members.forEach((member) => {
        const card = document.createElement("section");
        card.classList.add("member-card");

        const membershipLabel = getMembershipLabel(member.membershipLevel);

        card.innerHTML = `
            <img src="images/${member.image}" alt="${member.name} logo" width="120" height="80" loading="lazy">
            <h3>${member.name}</h3>
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <a href="${member.website}" target="_blank" rel="noopener">Visit Website</a>
            <p class="membership-level">${membershipLabel}</p>
            <p>${member.description}</p>
        `;

        membersContainer.appendChild(card);
    });
}

function getMembershipLabel(level) {
    if (level === 3) {
        return "Gold Member";
    } else if (level === 2) {
        return "Silver Member";
    } else {
        return "Member";
    }
}

gridButton.addEventListener("click", () => {
    membersContainer.classList.add("grid");
    membersContainer.classList.remove("list");

    gridButton.classList.add("active-view");
    listButton.classList.remove("active-view");
});

listButton.addEventListener("click", () => {
    membersContainer.classList.add("list");
    membersContainer.classList.remove("grid");

    listButton.classList.add("active-view");
    gridButton.classList.remove("active-view");
});

getMembers();