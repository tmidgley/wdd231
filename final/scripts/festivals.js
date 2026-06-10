const festivalContainer = document.querySelector('#festivalCards');
const modal = document.querySelector('#festivalModal');
const modalContent = document.querySelector('#modalContent');
const closeModal = document.querySelector('#closeModal');

async function loadFestivals() {
    try {
        const response = await fetch('data/balloons.json');

        if (!response.ok) {
            throw new Error('Festival data could not be loaded.');
        }

        const festivals = await response.json();

        displayFestivals(festivals);
    } catch (error) {
        console.error(error);

        if (festivalContainer) {
            festivalContainer.innerHTML = `
                <p>Unable to load festival information at this time.</p>
            `;
        }
    }
}

function displayFestivals(festivals) {
    festivals.forEach(festival => {
        const card = document.createElement('article');

        card.classList.add('festival-card');

        card.innerHTML = `
            <h3>${festival.name}</h3>
            <p><strong>Location:</strong> ${festival.location}</p>
            <p><strong>Month:</strong> ${festival.month}</p>
            <p><strong>Highlight:</strong> ${festival.highlight}</p>
            <button class="details-btn" type="button">
                View Details
            </button>
        `;

        const button = card.querySelector('.details-btn');

        button.addEventListener('click', () => {
            showFestivalDetails(festival);
        });

        festivalContainer.appendChild(card);
    });
}

function showFestivalDetails(festival) {
    modalContent.innerHTML = `
        <img src="${festival.image}" alt="${festival.name}" loading="lazy">
        <h2>${festival.name}</h2>
        <p><strong>Attendance:</strong> ${festival.attendance}</p>
        <p><strong>Best For:</strong> ${festival.bestFor}</p>
        <p>${festival.details}</p>
        <p>
            <a href="${festival.website}" target="_blank" rel="noopener">
                Visit Official Website
            </a>
        </p>
    `;

    modal.showModal();
}

closeModal.addEventListener('click', () => {
    modal.close();
});

loadFestivals();