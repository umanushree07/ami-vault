<script>
/* PLAY VIDEO */
function startVideo(id) {
  const popup = document.getElementById("cookiePopup");
  const thumb = document.getElementById("thumb-" + id);
  const video = document.getElementById("video-" + id);

  console.log(popup, thumb, video); // DEBUG LINE

  if (!popup || !thumb || !video) {
    alert("ID mismatch – check thumb/video IDs");
    return;
  }

  popup.style.display = "block";

  setTimeout(() => {
    popup.style.display = "none";
    thumb.style.display = "none";
    video.style.display = "block";
  }, 5000);
}

/* LOAD LIKES */
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".like-btn").forEach(btn => {
    const id = btn.dataset.id;
    if (!id) return;

    const saved = localStorage.getItem("likes-" + id);
    if (saved) {
      btn.querySelector("span").innerText = saved;
    }
  });
});

/* LIKE BUTTON */
function likeVideo(btn) {
  const span = btn.querySelector("span");
  const id = btn.dataset.id;

  let count = parseInt(span.innerText) || 0;
  count++;

  span.innerText = count;
  localStorage.setItem("likes-" + id, count);
}
</script>