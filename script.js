<script>
/* =========================
   PLAY VIDEO + COOKIE POPUP
========================= */
function startVideo(id) {
  const popup = document.getElementById("cookiePopup");
  const thumb = document.getElementById("thumb-" + id);
  const video = document.getElementById("video-" + id);

  if (!thumb || !video) {
    console.error("ID mismatch: thumb-" + id + " or video-" + id + " missing");
    return;
  }

  // Show popup (if exists)
  if (popup) {
    popup.style.display = "block";
  }

  setTimeout(() => {
    if (popup) popup.style.display = "none";
    thumb.style.display = "none";
    video.style.display = "block";
  }, 5000); // 5 seconds
}

/* =========================
   LIKE BUTTON (with storage)
========================= */
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".like-btn").forEach(btn => {
    const id = btn.dataset.id;
    if (!id) return;

    const span = btn.querySelector("span");
    const saved = localStorage.getItem("likes-" + id);
    if (saved && span) {
      span.innerText = saved;
    }
  });
});

function likeVideo(btn) {
  const span = btn.querySelector("span");
  const id = btn.dataset.id;

  if (!span || !id) {
    console.error("Like button missing span or data-id");
    return;
  }

  let count = parseInt(span.innerText, 10) || 0;
  count++;

  span.innerText = count;
  localStorage.setItem("likes-" + id, count);
}

/* =========================
   WATCH AD → UNLOCK DOWNLOAD
========================= */
function watchAdForDownload(button) {
  const card = button.closest(".video-card");

  if (!card) {
    console.error("video-card not found");
    return;
  }

  const adPopup = card.querySelector("#adPopup");
  const unlockPopup = card.querySelector("#unlockPopup");
  const downloadLink = card.querySelector(".download-link");

  button.disabled = true;

  // 1️⃣ Show first popup
  if (adPopup) adPopup.style.display = "block";

  // Hide first popup after 5 seconds
  setTimeout(() => {
    if (adPopup) adPopup.style.display = "none";

    // 2️⃣ Wait 15 seconds (watch ad time)
    setTimeout(() => {
      if (unlockPopup) unlockPopup.style.display = "block";

      // Hide unlock popup after 3 seconds
      setTimeout(() => {
        if (unlockPopup) unlockPopup.style.display = "none";
        if (downloadLink) downloadLink.style.display = "block";
      }, 3000);

    }, 15000);

  }, 5000);
}
</script>