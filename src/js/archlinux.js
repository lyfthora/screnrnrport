document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  initPageTransitions();
  initProjectTabs();
  initModelViewers();
});

const projectsData = [
  // Katana - Texturizado
  {
    category: "texturing",
    type: "model",
    src: "./client/public/models/siTextura/katana.glb",
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
    src: "./client/public/models/noTextura/katananotexturing.glb",
    alt: "Katana wireframe 3D model",
    title: "Katana - Wireframe/Lowpoly",
    description:
      "Versión lowpoly optimizada para juegos móviles con menos de 5000 polígonos.",
    role: "Modelado 3D, Retopología, Optimización",
    tools: ["Blender", "Maya"],
  },
  // Great Sword - Texturizado
  {
    category: "texturing",
    type: "model",
    src: "./client/public/models/siTextura/Gsword_Textura.glb",
    alt: "Great Sword 3D model",
    title: "Great Sword - Texturizado",
    description:
      "Espadón pesado con texturas PBR detalladas y desgaste de batalla.",
    role: "Texturizado, Shading",
    tools: ["Substance Painter"],
  },
  // Great Sword - Modelo
  {
    category: "3d-modeling",
    type: "model",
    src: "./client/public/models/noTextura/Gsword_NoTextura.glb",
    alt: "Great Sword Wireframe",
    title: "Great Sword - Modelo",
    description:
      "Modelo 3D de espadón enfocado en la silueta y topología limpia.",
    role: "Modelado 3D",
    tools: ["Blender"],
  },
  // Gunlance - Texturizado
  {
    category: "texturing",
    type: "model",
    src: "./client/public/models/siTextura/Gunlance1.glb",
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
    alt: "Gunlance Wireframe",
    title: "Gunlance - Modelo",
    description: "Modelo base de la lanza pistola listo para texturizar.",
    role: "Modelado 3D",
    tools: ["Blender"],
  },
  // Alabarda
  {
    category: "3d-modeling",
    type: "model",
    src: "./client/public/models/noTextura/Alabarda_model.glb",
    alt: "Alabarda 3D model",
    title: "Alabarda - Modelo",
    description: "Modelo 3D de alabarda medieval con topología optimizada.",
    role: "Modelado 3D",
    tools: ["Blender"],
  },
  // Armor
  {
    category: "3d-modeling",
    type: "model",
    src: "./client/public/models/noTextura/Armor_model.glb",
    alt: "Armor 3D model",
    title: "Armadura - Modelo",
    description:
      "Armadura completa modelada con atención al detalle anatómico.",
    role: "Modelado 3D",
    tools: ["Blender"],
  },
  // Bsword
  {
    category: "3d-modeling",
    type: "model",
    src: "./client/public/models/noTextura/Bsword.glb",
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
    src: "./client/public/models/noTextura/Cuadro.glb",
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
    src: "./client/public/models/noTextura/Model_axe.glb",
    alt: "Axe 3D model",
    title: "Hacha - Modelo",
    description: "Hacha de combate con geometría limpia y eficiente.",
    role: "Modelado 3D",
    tools: ["Blender"],
  },
  // Saxe
  {
    category: "3d-modeling",
    type: "model",
    src: "./client/public/models/noTextura/Saxe.glb",
    alt: "Saxe 3D model",
    title: "Saxe - Modelo",
    description: "Cuchillo saxón tradicional modelado para juegos históricos.",
    role: "Modelado 3D",
    tools: ["Blender"],
  },
  // Gunlance Variante
  {
    category: "3d-modeling",
    type: "model",
    src: "./client/public/models/noTextura/Gunlance.glb",
    alt: "Gunlance variant 3D model",
    title: "Gunlance Variante - Modelo",
    description:
      "Variante alternativa de la lanza pistola con diferente silueta.",
    role: "Modelado 3D",
    tools: ["Blender"],
  },
  // Animation - Patada
  {
    category: "animation-3d",
    type: "video",
    src: "./client/public/vids/Video-Patada.mp4",
    title: "Animación de Combate - Patada",
    description:
      "Ciclo de animación de patada para personaje de acción en videojuego de lucha.",
    role: "Rigging, Animación, Timing",
    tools: ["Blender", "Mixamo"],
  },
  // Animation - Death
  {
    category: "animation-3d",
    type: "video",
    src: "./client/public/vids/Video-Death.mp4",
    title: "Animación de Muerte",
    description: "Animación de muerte dramática para NPC en juego de rol.",
    role: "Animación, Física de ragdoll",
    tools: ["Maya", "Unity"],
  },
];

function renderProjects() {
  const container = document.querySelector(".projects-gallery");
  if (!container) return;

  container.innerHTML = projectsData
    .map((project) => {
      const mediaHtml =
        project.type === "model"
          ? `<model-viewer src="${project.src}" alt="${project.alt}" camera-controls auto-rotate loading="lazy"></model-viewer>`
          : `<video controls class="project-video"><source src="${project.src}" type="video/mp4" /></video>`;

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
