<script>
/* ================= PLAY VIDEO ================= */
function startVideo(id) {
  const thumb = document.getElementById("thumb-" + id);
  const video = document.getElementById("video-" + id);
  const popup = document.getElementById("cookiePopup");

  if (!thumb || !video) {
    alert("thumb or video ID missing");
    return;
  }

  popup.style.display = "block";

  setTimeout(() => {
    popup.style.display = "none";
    thumb.style.display = "none";
    video.style.display = "block";
  }, 2000);
}

/* ================= LIKE ================= */
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".like-btn").forEach(btn => {
    const id = btn.dataset.id;
    const saved = localStorage.getItem("likes-" + id);
    if (saved) btn.querySelector("span").innerText = saved;
  });
});

function likeVideo(btn) {
  const span = btn.querySelector("span");
  const id = btn.dataset.id;

  let count = parseInt(span.innerText) || 0;
  count++;

  span.innerText = count;
  localStorage.setItem("likes-" + id, count);
}

/* ================= DOWNLOAD ================= */
function watchAdForDownload(btn) {
  const card = btn.closest(".video-card");
  const adPopup = card.querySelector("#adPopup");
  const unlockPopup = card.querySelector("#unlockPopup");
  const link = card.querySelector(".download-link");

  adPopup.style.display = "block";

  setTimeout(() => {
    adPopup.style.display = "none";
    unlockPopup.style.display = "block";

    setTimeout(() => {
      unlockPopup.style.display = "none";
      link.style.display = "block";
    }, 2000);

  }, 5000);
}
</script>