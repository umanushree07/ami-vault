<script>
/* =========================
   VIDEO PLAY (COOKIE FLOW)
========================= */
function startVideo(id) {
  const popup = document.getElementById("cookiePopup");
  const thumb = document.getElementById(`thumb-${id}`);
  const video = document.getElementById(`video-${id}`);

  if (!popup || !thumb || !video) return;

  popup.style.display = "block";

  setTimeout(() => {
    popup.style.display = "none";
    thumb.style.display = "none";
    video.style.display = "block";
  }, 5000);
}

/* =========================
   LIKE SYSTEM (PERSISTENT)
========================= */
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".like-btn").forEach(btn => {
    const id = btn.dataset.id;
    if (!id) return;

    const saved = localStorage.getItem(`likes-${id}`);
    if (saved) {
      btn.querySelector("span").innerText = saved;
    }
  });
});

function likeVideo(btn) {
  const span = btn.querySelector("span");
  const id = btn.dataset.id;
  if (!id) return;

  let count = parseInt(span.innerText, 10) || 0;
  count++;

  span.innerText = count;
  localStorage.setItem(`likes-${id}`, count);
}
</script>