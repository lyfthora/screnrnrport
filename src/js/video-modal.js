
document.addEventListener('DOMContentLoaded', () => {
  const showreelTrigger = document.getElementById('showreel-trigger');
  const videoOverlay = document.getElementById('video-overlay');
  const neofetchGifs = document.querySelector('.neofetch-gifs');

  if (showreelTrigger && videoOverlay && neofetchGifs) {
    showreelTrigger.addEventListener('click', () => {
      videoOverlay.classList.add('active');
      neofetchGifs.classList.add('active');
    });

    videoOverlay.addEventListener('click', () => {
      videoOverlay.classList.remove('active');
      neofetchGifs.classList.remove('active');
    });
  }
});
