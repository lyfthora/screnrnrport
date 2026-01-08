document.addEventListener("DOMContentLoaded", () => {
  initPageTransitions();
  initProjectTabs();
  initModelViewers();
});

function initPageTransitions() {
  const body = document.body;

  setTimeout(() => {
    body.classList.add("fade-in");
  }, 50);

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      body.classList.remove("fade-in");
      body.classList.add("fade-out");

      setTimeout(() => {
        window.location.reload();
      }, 500);
    }
  });
}

function initProjectTabs() {
  const tabButtons = document.querySelectorAll(".tab-button");
  const projectCards = document.querySelectorAll(".project-card");

  if (!tabButtons.length || !projectCards.length) return;

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      tabButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      const selectedTab = button.dataset.tab;
      projectCards.forEach((card) => {
        const shouldShow =
          selectedTab === "all" || card.dataset.category === selectedTab;
        card.classList.toggle("hidden", !shouldShow);
      });
    });
  });
}

function initModelViewers() {
  const modelViewers = document.querySelectorAll("model-viewer");
  modelViewers.forEach((viewer) => {
    viewer.setAttribute("camera-orbit", "0deg 75deg 105%");
  });
}
