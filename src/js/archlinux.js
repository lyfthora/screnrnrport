document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  initPageTransitions();
  initProjectTabs();
  initModelClickLoading();
  initYouTubeClickToPlay();
});

const projectsData = [
  // Katana - Texturizado
  {
    category: "texturing",
    type: "model",
    src: "./client/public/models/siTextura/Katana_Textura.glb",
    poster: "./client/public/images/preview/textura/katanatext.png",
    alt: "Katana 3D model",
    title: "Katana - Prop para RPG",
    description:
      "Modelado y texturizado de una katana japonesa tradicional para uso en videojuegos RPG.",
    role: "Texturizado PBR",
    tools: ["Blender", "Substance Painter"],
  },
  // Katana - Modelo
  {
    category: "3d-modeling",
    type: "model",
    src: "./client/public/models/noTextura/Katana_noTextura.glb",
    poster: "./client/public/images/preview/notextura/katananotext.png",
    alt: "Katana wireframe 3D model",
    title: "Katana - Wireframe/Lowpoly",
    description:
      "Versión lowpoly optimizada para juegos móviles con menos de 5000 polígonos.",
    role: "Modelado 3D, Retopología, Optimización",
    tools: ["Blender", "Maya"],
  },
  // Gunlance - Texturizado
  {
    category: "texturing",
    type: "model",
    src: "./client/public/models/siTextura/Gunlance_Textura.glb",
    poster: "./client/public/images/preview/textura/gunlancetext.png",
    alt: "Gunlance 3D model",
    title: "Gunlance - Texturizado",
    description: "Lanza pistola con texturas realistas de metal y madera.",
    role: "Texturizado",
    tools: ["Substance Painter"],
  },
  // Gunlance - Modelo
  {
    category: "3d-modeling",
    type: "model",
    src: "./client/public/models/noTextura/Gunlance_NoTextura.glb",
    poster: "./client/public/images/preview/notextura/gunlancenotext.png",
    alt: "Gunlance Wireframe",
    title: "Gunlance - Modelo",
    description: "Modelo base de la lanza pistola listo para texturizar.",
    role: "Modelado 3D",
    tools: ["Blender"],
  },
  // Alabarda Texturizada
  {
    category: "texturing",
    type: "model",
    src: "./client/public/models/siTextura/Alabarda_Textura.glb",
    poster: "./client/public/images/preview/textura/alabardatext.png",
    alt: "Alabarda 3D model",
    title: "Alabarda - Texturizado",
    description: "Alabarda medieval con texturas realistas de metal y madera.",
    role: "Texturizado",
    tools: ["Substance Painter"],
  },
  // Alabarda
  {
    category: "3d-modeling",
    type: "model",
    src: "./client/public/models/noTextura/Alabarda_noTextura.glb",
    poster: "./client/public/images/preview/notextura/alabardanotext.png",
    alt: "Alabarda 3D model",
    title: "Alabarda - Modelo",
    description: "Modelo 3D de alabarda medieval con topología optimizada.",
    role: "Modelado 3D",
    tools: ["Blender"],
  },
  // Armor Texturizado
  {
    category: "texturing",
    type: "model",
    src: "./client/public/models/siTextura/Armor_Textura.glb",
    poster: "./client/public/images/preview/textura/armaduratext.png",
    alt: "Armor 3D model",
    title: "Armadura - Texturizado",
    description:
      "Armadura completa modelada con atención al detalle anatómico.",
    role: "Texturizado",
    tools: ["Substance Painter"],
  },
  // Armor
  {
    category: "3d-modeling",
    type: "model",
    src: "./client/public/models/noTextura/Armor_noTextura.glb",
    poster: "./client/public/images/preview/notextura/armaduranotext.png",
    alt: "Armor 3D model",
    title: "Armadura - Modelo",
    description:
      "Armadura completa modelada con atención al detalle anatómico.",
    role: "Modelado 3D",
    tools: ["Blender"],
  },

  // Bsword Texturizado
  {
    category: "texturing",
    type: "model",
    src: "./client/public/models/siTextura/Bsword_Textura.glb",
    poster: "./client/public/images/preview/textura/espadatext.png",
    alt: "Broadsword 3D model",
    title: "Espada Ancha - Texturizado",
    description: "Espada ancha con diseño clásico para juegos de fantasía.",
    role: "Texturizado",
    tools: ["Substance Painter"],
  },
  // Bsword
  {
    category: "3d-modeling",
    type: "model",
    src: "./client/public/models/noTextura/Bsword_noTextura.glb",
    poster: "./client/public/images/preview/notextura/espadanotext.png",
    alt: "Broadsword 3D model",
    title: "Espada Ancha - Modelo",
    description: "Espada ancha con diseño clásico para juegos de fantasía.",
    role: "Modelado 3D",
    tools: ["Blender"],
  },

  // Cuadro
  {
    category: "3d-modeling",
    type: "model",
    src: "./client/public/models/noTextura/Cuadro_noTextura.glb",
    poster: "./client/public/images/preview/notextura/cuadronotext.png",
    alt: "Cuadro 3D model",
    title: "Cuadro - Modelo",
    description: "Modelo 3D de cuadro decorativo para escenas de interiores.",
    role: "Modelado 3D",
    tools: ["Blender"],
  },
  // Model Axe
  {
    category: "3d-modeling",
    type: "model",
    src: "./client/public/models/noTextura/Axe_noTextura.glb",
    poster: "./client/public/images/preview/notextura/hachanotext.png",
    alt: "Axe 3D model",
    title: "Hacha - Modelo",
    description: "Hacha de combate con geometría limpia y eficiente.",
    role: "Modelado 3D",
    tools: ["Blender"],
  },
  // Video Patada cámara 1
  {
    category: "animation-3d",
    type: "youtube",
    iframe: `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/pIFpKxifJ4w" title="Video Patada cámara 1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
    title: "Video Patada cámara 1",
    description:
      "Ciclo de animación de patada para personaje de acción en videojuego de lucha (Cámara 1).",
    role: "Rigging, Animación, Timing",
    tools: ["Blender", "Mixamo"],
  },
  // Video Patada lateral
  {
    category: "animation-3d",
    type: "youtube",
    iframe: `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/LQdtgHhqZng" title="Video Patada lateral" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
    title: "Video Patada lateral",
    description:
      "Ciclo de animación de patada para personaje de acción en videojuego de lucha (Vista Lateral).",
    role: "Rigging, Animación, Timing",
    tools: ["Blender", "Mixamo"],
  },
  // Video idle
  {
    category: "animation-3d",
    type: "youtube",
    iframe: `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/eEsh293wgsc" title="Video idle" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
    title: "Video idle",
    description: "Animación de estado de reposo (Idle) para personaje.",
    role: "Rigging, Animación",
    tools: ["Blender", "Mixamo"],
  },
  // Video Jump
  {
    category: "animation-3d",
    type: "youtube",
    iframe: `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/zJhmSwMnXkI" title="Video Jump" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
    title: "Video Jump",
    description: "Animación de salto para personaje de videojuego.",
    role: "Rigging, Animación",
    tools: ["Blender", "Mixamo"],
  },
  // Video Jump 2 lateral
  {
    category: "animation-3d",
    type: "youtube",
    iframe: `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/C96a7OkfXjI" title="Video Jump 2 lateral" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
    title: "Video Jump 2 lateral",
    description: "Animación de salto (Vista Lateral).",
    role: "Rigging, Animación",
    tools: ["Blender", "Mixamo"],
  },
  // Video Death
  {
    category: "animation-3d",
    type: "youtube",
    iframe: `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/wHbr3LvaIpA" title="Video Death" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
    title: "Video Death",
    description: "Animación de muerte del personaje.",
    role: "Rigging, Animación",
    tools: ["Blender", "Mixamo"],
  },
  // Video Walk
  {
    category: "animation-3d",
    type: "youtube",
    iframe: `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/PIfy2R8K5no" title="Video Walk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
    title: "Video Walk",
    description: "Ciclo de caminata (Walk Cycle).",
    role: "Rigging, Animación",
    tools: ["Blender", "Mixamo"],
  },
  // rigeo armadura cartoon
  {
    category: "rigging",
    type: "youtube",
    iframe: `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/XGrmCcLsAbg" title="Rigging Armadura Cartoon" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
    title: "Rigging Armadura Cartoon",
    description: "Rigging de armadura cartoon.",
    role: "Rigging",
    tools: ["Blender"],
  },
  // rigeo araña
  {
    category: "rigging",
    type: "youtube",
    iframe: `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/rFQsUkVWmrs" title="Rigging Araña" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
    title: "Rigging Araña",
    description: "Rigging de araña.",
    role: "Rigging",
    tools: ["Blender"],
  },
  // rigeo personaje
  {
    category: "rigging",
    type: "youtube",
    iframe: `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/iUyqg-9YUBY" title="Rigging Personaje" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
    title: "Rigging Personaje",
    description: "Rigging de personaje.",
    role: "Rigging",
    tools: ["Blender"],
  },
  // rigeo nergigante
  {
    category: "rigging",
    type: "youtube",
    iframe: `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/HrgxsE9tq2g" title="Rigging Nergigante" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
    title: "Rigging Nergigante",
    description: "Rigging de Nergigante.",
    role: "Rigging",
    tools: ["Blender"],
  },
];
let ytIndex = 0;
function renderProjects() {
  const container = document.querySelector(".projects-gallery");
  if (!container) return;

  container.innerHTML = projectsData
    .map((project) => {
      let mediaHtml = "";
      if (project.type === "model") {
        const posterHtml = project.poster
          ? `<img src="${project.poster}" alt="${project.alt}" class="placeholder-poster" />`
          : `<span class="placeholder-icon">🎮</span>`;

        mediaHtml = `
    <div class="model-placeholder" data-src="${project.src}" data-alt="${project.alt}">
      <div class="placeholder-content">
        ${posterHtml}
        <span class="placeholder-text">Click para ver en 3D</span>
      </div>
    </div>`;
      } else if (project.type === "video") {
        mediaHtml = `<video controls class="project-video"><source src="${project.src}" type="video/mp4" /></video>`;
      } else if (project.type === "youtube") {
        const videoIdMatch = project.iframe.match(/embed\/([a-zA-Z0-9_-]+)/);
        const videoId = videoIdMatch ? videoIdMatch[1] : "";
        const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
        mediaHtml = `
      <div class="yt-thumbnail" data-iframe='${project.iframe.replace(/'/g, "&#39;")}'>
        <img src="${thumbnailUrl}" alt="${project.title}" class="yt-thumbnail-img" />
        <div class="yt-play-btn">▶</div>
      </div>`;
      }
      const toolsHtml = project.tools
        .map((tool) => `<span class="tool-tag">${tool}</span>`)
        .join("");

      return `
      <article class="project-card" data-category="${project.category}">
        <div class="project-media">
          ${mediaHtml}
        </div>
        <div class="project-info">
          <h3 class="project-title">${project.title}</h3>
          <p class="project-description">${project.description}</p>
          <div class="project-role">
            <span class="label">Mi rol:</span>
            <span>${project.role}</span>
          </div>
          <div class="project-tools">
            ${toolsHtml}
          </div>
        </div>
      </article>
    `;
    })
    .join("");
}

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
function initModelClickLoading() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const viewer = entry.target;
        if (entry.isIntersecting) {
          viewer.play();
        } else {
          viewer.pause();
        }
      });
    },
    { threshold: 0.1 },
  );
  document.addEventListener("click", (e) => {
    const placeholder = e.target.closest(".model-placeholder");
    if (!placeholder) return;
    const src = placeholder.dataset.src;
    const alt = placeholder.dataset.alt;
    const modelViewer = document.createElement("model-viewer");
    modelViewer.setAttribute("src", src);
    modelViewer.setAttribute("alt", alt);
    modelViewer.setAttribute("camera-controls", "");
    modelViewer.setAttribute("auto-rotate", "");
    modelViewer.setAttribute("camera-orbit", "0deg 75deg 105%");
    placeholder.replaceWith(modelViewer);
    observer.observe(modelViewer);
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
function initYouTubeClickToPlay() {
  document.addEventListener("click", (e) => {
    const thumbnail = e.target.closest(".yt-thumbnail");
    if (thumbnail) {
      const card = thumbnail.closest(".project-card");
      const iframeHtml = thumbnail.dataset.iframe;
      const mediaContainer = thumbnail.closest(".project-media");
      mediaContainer.innerHTML = `
        <div class="yt-player-wrapper">
          <div class="ratio ratio-16x9">${iframeHtml}</div>
          <button class="yt-close-btn" title="Cerrar video">✕</button>
        </div>`;
      card.classList.add("video-expanded");
      return;
    }
    const closeBtn = e.target.closest(".yt-close-btn");
    if (closeBtn) {
      const card = closeBtn.closest(".project-card");
      const mediaContainer = closeBtn.closest(".project-media");
      const iframe = mediaContainer.querySelector("iframe");
      const src = iframe ? iframe.getAttribute("src") : "";
      const videoIdMatch = src.match(/embed\/([a-zA-Z0-9_-]+)/);
      const videoId = videoIdMatch ? videoIdMatch[1] : "";
      const title = card.querySelector(".project-title")?.textContent || "";
      const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
      mediaContainer.innerHTML = `
        <div class="yt-thumbnail" data-iframe='${iframe.outerHTML.replace(/'/g, "&#39;")}'>
          <img src="${thumbnailUrl}" alt="${title}" class="yt-thumbnail-img" />
          <div class="yt-play-btn">▶</div>
        </div>`;
      card.classList.remove("video-expanded");
    }
  });
}

window.onYouTubeIframeAPIReady = function () {
  if (projectsRendered) {
    initYouTubePlayers();
  }
};
