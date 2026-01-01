function showAd() {

  alert("Watch ad to unlock download (Adsterra here)");

  setTimeout(() => {

    alert("Download Started!");

  }, 5000);

}
document.querySelectorAll(".video-box").forEach(box => {

  box.addEventListener("click", () => {

    box.classList.add("active");

    const video = box.querySelector("video");

    video.play();

  });

});

function watchAd(btn) {

  alert("Watch ad to unlock video (Adsterra here)");

  setTimeout(() => {

    const videoBox = btn.closest(".video-box");

    const video = videoBox.querySelector("video");

    videoBox.classList.add("unlocked");

    video.play();

    alert("Video Unlocked! Enjoy watching 🎬");

  }, 5000);

}

// Load saved likes when page opens
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".like-btn").forEach(btn => {
    const id = btn.dataset.id;
    const savedLikes = localStorage.getItem(id);
    if (savedLikes) {
      btn.querySelector("span").innerText = savedLikes;
    }
  });
});

// Like function
function likeVideo(btn) {
  const span = btn.querySelector("span");
  const id = btn.dataset.id;

  let count = parseInt(span.innerText);
  count++;

  span.innerText = count;
  localStorage.setItem(id, count);
}
