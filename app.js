// Set the movie release date for 11 July 2025 (USA time zone)
const releaseDate = new Date('2025-07-11T00:00:00-05:00'); // Midnight, USA Eastern Time (UTC -5)

// Function to update countdown for a given time zone
function updateCountdown(elementId, timeZoneOffset) {
    const countdownElement = document.getElementById(elementId);

    // Calculate the time difference based on the provided time zone offset
    const localReleaseDate = new Date(releaseDate.getTime() + timeZoneOffset * 60 * 60 * 1000);

    // Calculate remaining time
    const now = new Date();
    const timeRemaining = localReleaseDate - now;

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    // Display the countdown
    countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    // Update the countdown every second
    setTimeout(() => updateCountdown(elementId, timeZoneOffset), 1000);
}

// Update countdowns for USA, UK, and Japan
updateCountdown('countdown-usa', -5); // USA Eastern Time (UTC -5)
updateCountdown('countdown-uk', 0);   // UK Time (UTC 0)
updateCountdown('countdown-japan', 9); // Japan Standard Time (UTC +9)

// Ensure the video plays after user interaction
document.getElementById('play-video').addEventListener('click', () => {
    const video = document.getElementById('background-video');
    video.muted = false; // Unmute the video
    video.play()
        .then(() => {
            console.log('Video playback started with sound.');
        })
        .catch(error => {
            console.error('Video playback failed:', error);
        });

    // Optionally hide the button after interaction
    document.getElementById('play-video').style.display = 'none';
});


// Function to autoplay video
function autoplayVideo() {
    const video = document.querySelector('.video-background video');
    video.play().catch((error) => {
        console.error('Video playback failed:', error);
    });
}

// Call autoplay functions on page load
window.onload = () => {
    autoplayVideo();
};

