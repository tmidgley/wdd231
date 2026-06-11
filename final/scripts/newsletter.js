const timestamp = document.querySelector('#timestamp');

if (timestamp) {
    timestamp.value = new Date().toISOString();
}

const activity = document.querySelector('#activity');

if (activity) {
    const savedActivity = localStorage.getItem('favoriteActivity');


if (savedActivity) {
    activity.value = savedActivity;
}

activity.addEventListener('change', () => {
    localStorage.setItem('favoriteActivity', activity.value);
});


}
