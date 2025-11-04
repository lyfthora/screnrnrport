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
