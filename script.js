document.getElementById("surprise-btn").addEventListener("click", function() {
    const surprise = document.getElementById("surprise");
    surprise.classList.toggle("hidden");
});

document.getElementById("play-music").addEventListener("click", function() {
    const audio = document.getElementById("birthday-song");
    audio.play();
});
