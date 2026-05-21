const spotlightCards = document.querySelector("#spotlight-cards");

async function getSpotlights() {
    try {
        const response = await fetch("data/members.json");

        if (!response.ok) {
            throw new Error("Unable to load members.json");
        }

        const data = await response.json();
        const members = data.members;

        const qualifiedMembers = members.filter(member => member.membershipLevel > 1);

        const selectedMembers = qualifiedMembers
            .sort(() => Math.random() - 0.5)
            .slice(0, 3);

        displaySpotlights(selectedMembers);
    } catch (error) {
        console.error("Spotlight error:", error);

        spotlightCards.innerHTML = `
            <p class="error-message">Unable to load business spotlights.</p>
        `;
    }
}

function displaySpotlights(members) {
    spotlightCards.innerHTML = "";

    members.forEach(member => {
        const card = document.createElement("section");
        card.classList.add("spotlight-card");

        let membership = "Member";

        if (member.membershipLevel === 2) {
            membership = "Silver";
        } else if (member.membershipLevel === 3) {
            membership = "Gold";
        }

        card.innerHTML = `
            <h3>${member.name}</h3>
            <img src="images/${member.image}" alt="${member.name} logo" loading="lazy">
            <p>${member.description}</p>
            <p><strong>Phone:</strong> ${member.phone}</p>
            <p><strong>Address:</strong> ${member.address}</p>
            <p><strong>Website:</strong> <a href="${member.website}" target="_blank" rel="noopener">Visit Website</a></p>
            <p class="membership-level"><strong>Membership Level:</strong> ${membership}</p>
        `;

        spotlightCards.appendChild(card);
    });
}

getSpotlights();