// Show the YouTube video modal
document.getElementById("showForm").onclick = function() {
    var videoUrl = "https://www.youtube.com/embed/2z9Yi129LsA?si=eKbAZ00Movk_t32H";
    document.getElementById("youtubeVideo").src = videoUrl;
    document.getElementById("formContainer").style.display = "block"; // Show the container
}

// Hide the modal and stop the video
document.getElementById("close").onclick = function() {
    document.getElementById("formContainer").style.display = "none"; // Hide the container
    document.getElementById("youtubeVideo").src = ""; // Clear the video URL to stop playback
}


//background bubbles
