const formResults = document.querySelector('#formResults');

if (formResults) {
    const params = new URLSearchParams(window.location.search);

    const firstName = params.get('firstName');
    const email = params.get('email');
    const activity = params.get('activity');
    const updates = params.get('updates');
    const timestamp = params.get('timestamp');

    let formattedDate = 'Not Available';

    if (timestamp) {
        formattedDate = new Date(timestamp).toLocaleString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: '2-digit'
        });
    }

    formResults.innerHTML = `
        <h2>Thank You, ${firstName}!</h2>

        <p>You have successfully signed up for the Full of Hot Air newsletter.</p>

        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Favorite Activity:</strong> ${activity}</p>
        <p><strong>Monthly Updates:</strong> ${updates ? 'Yes' : 'No'}</p>
        <p><strong>Submitted:</strong> ${formattedDate}</p>
    `;
}