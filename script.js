

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

// VIEW FILE (WITH AD)
function viewFile(fileUrl) {
  alert("Watch ad to view this file");

  // 🔁 Replace with your ad link (Adsterra)
  window.open("https://www.adsterra.com/", "_blank");

  setTimeout(() => {
    document.getElementById("fileViewer").style.display = "block";
    document.getElementById("fileFrame").src = fileUrl;
  }, 5000);
}

// DOWNLOAD FILE (WITH AD)
function downloadFile(fileUrl) {
  alert("Watch ad to download");

  // 🔁 Replace with your ad link
  window.open("https://www.adsterra.com/", "_blank");

  setTimeout(() => {
    window.location.href = fileUrl;
  }, 5000);
}

function closeViewer() {
  document.getElementById("fileViewer").style.display = "none";
  document.getElementById("fileFrame").src = "";
}

/* VIDEO UNLOCK (WATCH AD TO PLAY) */
function unlockVideo(btn) {
  const card = btn.closest(".card");
  const overlay = card.querySelector(".ad-overlay");
  const video = card.querySelector("video");

  // Insert ad script dynamically
  overlay.insertAdjacentHTML(
    "afterbegin",
    `
    <!-- 🔽 AD SCRIPT GOES HERE 🔽 -->
    `
  );

  btn.disabled = true;
  btn.innerText = "Ad Playing...";

  setTimeout(() => {
    overlay.style.display = "none";
    video.muted = false;
    video.play();
  }, 8000);
}

/* DOWNLOAD UNLOCK (WATCH AD TO DOWNLOAD) */
function unlockDownload(btn) {
  const card = btn.closest(".card");
  const downloadLink = card.querySelector(".download-link");

  // Create ad container dynamically
  const adBox = document.createElement("div");
  adBox.className = "download-ad";
  adBox.innerHTML = `
    <!-- 🔽 PASTE YOUR DOWNLOAD AD SCRIPT HERE 🔽 -->
  `;

  // Insert ad above the button
  btn.parentNode.insertBefore(adBox, btn);

  btn.disabled = true;
  btn.innerText = "Ad Playing...";

  setTimeout(() => {
    adBox.remove();              // remove ad
    downloadLink.style.display = "inline-block";
    btn.style.display = "none";
  }, 8000); // adjust time if needed
}
