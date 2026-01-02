<script>
function startVideo() {
  // Show cookie popup
  document.getElementById("cookiePopup").style.display = "block";

  // Wait 5 seconds
  setTimeout(() => {
    // Hide popup
    document.getElementById("cookiePopup").style.display = "none";

    // Remove thumbnail
    document.getElementById("thumbBox").style.display = "none";

    // Show iframe video
    document.getElementById("videoBox").style.display = "block";
  }, 5000);
}
</script>

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
function watchAd(btn) {
  const box = btn.closest('.video-box');
  const iframe = box.querySelector('iframe');
  const thumbnail = box.querySelector('.thumbnail');
  const overlay = box.querySelector('.ad-overlay');

  const popupAd = document.getElementById('popup-ad');
  const popupUnlock = document.getElementById('popup-unlock');

  // POPUP 1 – show for 5 sec
  popupAd.style.display = 'block';

  setTimeout(() => {
    popupAd.style.display = 'none';
  }, 5000);

  // POPUP 2 – after 15 sec
  setTimeout(() => {
    popupUnlock.style.display = 'block';

    // unlock video
    iframe.src = iframe.dataset.src + '?autoplay=1';
    thumbnail.classList.add('hide');
    overlay.style.display = 'none';

    setTimeout(() => {
      popupUnlock.style.display = 'none';
    }, 3000);

  }, 15000);
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

<script src="https://pl28378222.effectivegatecpm.com/6d/42/db/6d42db23e1b279eacdeb73b3c3d0060e.js"></script>


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



<script>
function watchAd(btn) {
  const videoBox = btn.closest('.video-box');
  const thumbnail = videoBox.querySelector('.thumbnail');
  const overlay = videoBox.querySelector('.ad-overlay');
  const iframe = videoBox.querySelector('iframe');

  // Simulate ad watch (your existing logic)
  setTimeout(() => {
    // Hide overlay
    overlay.style.display = 'none';

    // Hide thumbnail
    thumbnail.classList.add('hide');

    // Auto play video
    iframe.src += (iframe.src.includes('?') ? '&' : '?') + 'autoplay=1';

  }, 5000); // example: 5 sec ad
}
</script>