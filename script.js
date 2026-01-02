/* =========================
   PLAY VIDEO + COOKIE POPUP
========================= */
function startVideo(id) {
  const popup = document.getElementById("cookiePopup");
  const thumb = document.getElementById("thumb-" + id);
  const video = document.getElementById("video-" + id);

  console.log("PLAY:", popup, thumb, video);

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

/* =========================
   LIKE BUTTON
========================= */
function likeVideo(btn) {
  console.log("LIKE CLICKED");

  const span = btn.querySelector("span");
  const id = btn.dataset.id;

  if (!id) {
    alert("Missing data-id on like button");
    return;
  }

  let count = parseInt(span.innerText, 10) || 0;
  count++;

  span.innerText = count;
  localStorage.setItem("likes-" + id, count);
}

/* Download*/
function watchAdForDownload(button) {
  const section = button.parentElement;
  const adPopup = section.querySelector("#adPopup");
  const unlockPopup = section.querySelector("#unlockPopup");
  const downloadLink = section.querySelector(".download-link");

  button.disabled = true;

  // 1️⃣ Show first popup
  adPopup.style.display = "block";

  // Hide first popup after 5 seconds
  setTimeout(() => {
    adPopup.style.display = "none";

    // 2️⃣ After another 15 seconds show unlock popup
    setTimeout(() => {
      unlockPopup.style.display = "block";

      // Hide unlock popup after 3 seconds
      setTimeout(() => {
        unlockPopup.style.display = "none";
        downloadLink.style.display = "block";
      }, 3000);

    }, 15000);

  }, 5000);
}
