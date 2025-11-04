// esc para restaurar el contenido original
document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;

  // Fade in al cargar la página
  setTimeout(() => {
    body.classList.add("fade-in");
  }, 50);

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      body.classList.remove("fade-in");
      body.classList.add("fade-out");

      setTimeout(() => {
        // Recargar la página después del fade out
        window.location.reload();
      }, 500);
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const modelViewer1 = document.getElementById("model-viewer-1");
  const modelViewer2 = document.getElementById("model-viewer-2");
  const prevButton = document.getElementById("prev-model");
  const nextButton = document.getElementById("next-model");
  const setNumberSpan = document.getElementById("model-set-number");

  // modelos aqui
  const modelSets = [
    {
      left: "./client/public/models/katana.glb",
      right: "./client/public/models/katananotexturing.glb",
    },
    {
      left: "./client/public/models/katananotexturing.glb",
      right: "./client/public/models/katana.glb",
    },
    {
      left: "./client/public/models/gravehound.glb",
      right: "./client/public/models/mejiro.glb",
    },
  ];

  let currentSetIndex = 0;

  function updateModels() {
    const currentSet = modelSets[currentSetIndex];
    modelViewer1.src = currentSet.left;
    modelViewer2.src = currentSet.right;
    setNumberSpan.textContent = currentSetIndex + 1;

    prevButton.disabled = currentSetIndex === 0;
    nextButton.disabled = currentSetIndex === modelSets.length - 1;
  }

  if (prevButton && nextButton) {
    nextButton.addEventListener("click", () => {
      if (currentSetIndex < modelSets.length - 1) {
        currentSetIndex++;
        updateModels();
      }
    });

    prevButton.addEventListener("click", () => {
      if (currentSetIndex > 0) {
        currentSetIndex--;
        updateModels();
      }
    });
  }
  if (modelViewer1 && modelViewer2 && setNumberSpan) {
    updateModels();
  }
});
