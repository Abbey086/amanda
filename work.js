const projects = {
  web: [
    {
      id: "kisaasi-college",
      title: "Kisaasi College School Website",
      client: "Kisaasi College School",
      year: 2026,
      url: "https://kisaasicollegeschool.com",
      urlLabel: "Visit kisaasicollegeschool.com",
      image: "props/kisaasi.png",
      description:
        "A fully responsive school website for Kisaasi College, featuring an admissions portal, academic events calendar, gallery feed, and staff directory. Built with modern web standards to ensure fast load times and accessibility across all devices.",
      tags: ["School", "Admission"],
    },
    {
      id: "hope",
      title: "Hope Worldwide Uganda website",
      client: "Hope Worldwide Uganda",
      year: 2024,
      url: "https://hopeworldwideuganda.org",
      urlLabel: "Visit hopeworldwideuganda.org",
      image: "props/hope.png",
      description:"A comprehensive platform for Hope Worldwide Uganda featuring application forms, event management, and a donation system, alongside a leaadership board, donation checkout, and an integrated management dashboard.",
           tags: ['NGO', 'Organisation', 'Charity'],
    },
    {
      id: "aleph",
      title: "Aleph Junior School Website",
      client: "Aleph Junior school",
      year: 2023,
      url: "https://alephjuniorschool.com",
      urlLabel: "Visit alephjuniorschool.com",
      image: "props/aleph.png",
      description:
        "An interactive educational platform for Aleph Junior School, featuring a streamlined online admission portal for easy enrollment and a vibrant gallery section to showcase student activities and school events.",
          tags: ["Nursery", "School", "Admission"],
    },
    {
      id: "alephc",
      title: "Aleph Charity Foundation Website",
      client: "Aleph Charity Foundation",
      year: 2023,
      url: "https://alephcharityfoundation.org",
      urlLabel: "Visit alephcharityfoundation.org",
      image: "props/alephc.png",
      description: `A dynamic digital hub for Aleph Charity Foundation featuring comprehensive program listings, a "Get Involved" volunteer portal, and a donation section to support local community development and youth empowerment.`,
      tags: ["NGO", "Foundation", "Charity"],
    },
    {
      id: "tsi",
      title: "Talent Search Initiative Website",
      client: "talent search intiative",
      year: 2023,
      url: "https://talentsearchinitiative.click",
      urlLabel: "Visit talentsearchinitiative.click",
      image: "props/tsi.png",
      description: "A robust digital home for Talent Search Initiative, featuring comprehensive program listings, integrated event management, and a streamlined membership sign-up portal to identify and empower the next generation of leaders."
      ,tags: ["Entertainment", "Talent"],
    },
    
  ],

  graphics: [
    {
      id: "savanna-brand",
      title: "Savanna Coffee Brand Identity",
      client: "Savanna Coffee Roasters",
      year: 2024,
      url: "",
      urlLabel: "",
      image: "project.png",
      description:
        "Complete brand identity design for an artisan Ugandan coffee brand — logo, colour palette, typography system, packaging design, and brand guidelines document.",
      tags: ["Branding", "Packaging", "Illustrator", "InDesign"],
    },
    {
      id: "kampala-marathon",
      title: "Kampala Marathon 2024 Campaign",
      client: "Kampala Road Runners",
      year: 2024,
      url: "",
      urlLabel: "",
      image: "project.png",
      description:
        "Full visual campaign for the annual Kampala Marathon: poster series, social-media asset kit (200+ templates), race-day signage, finisher medal design, and official T-shirt artwork.",
      tags: ["Print", "Social Media", "Illustrator", "Photoshop"],
    },
    {
      id: "ministry-report",
      title: "Ministry Annual Report 2023",
      client: "Ministry of ICT",
      year: 2023,
      url: "",
      urlLabel: "",
      image: "project.png",
      description:
        "Design and layout of the 80-page Ministry of ICT annual report. Included infographic creation, data visualisation, photo editing, and print-ready PDF export.",
      tags: ["Editorial Design", "InDesign", "Data Viz"],
    },
    {
      id: "boda-app-ui",
      title: "BodaLink App UI Concept",
      client: "BodaLink Startup",
      year: 2023,
      url: "",
      urlLabel: "",
      image: "project.png",
      description:
        "High-fidelity UI/UX concept for a boda-boda ride-hailing app. Delivered wireframes, interactive prototype, and a full component library in Figma.",
      tags: ["UI/UX", "Figma", "Prototyping"],
    },
  ],

  software: [
   {
      id: "inovi",
      title: "Inovi Ecommerce Platform",
      client: "Amanda technologies",
      year: 2023,
      url: "https://inovi.store",
      urlLabel: "Visit www.inovi.store",
      image: "props/inovi.png",
      description: 'A powerful e-commerce SaaS platform featuring automated store creation, professional product listings, and advanced analytics, empowering small businesses to launch and manage high-conversion online stores with seamless inventory control.'
      ,tags: ["Ecommerce", "Saas"]
    },
    {
      id: "tta",
      title: "Travel Time Africa, Digital Workspace",
      client: "TTA",
      year: 2024,
      url: "",
      urlLabel: "",
      image: "props/tta.png",
      description: "A secure management system for employees and operations which enables role based access, financial snapshots, resources sharing, trip and tour logging and location based attendance based logging.",
      tags: ["Management system", "Tours and Travel","Internal Tools"],
    },
    {
      id: "managify",
      title: "Managify",
      client: "Several SMEs",
      year: 2023,
      url: "",
      urlLabel: "",
      image: "props/mangify.png",
      description:
        "A cloud HR platform handling payroll (including NSSF/PAYE calculations), leave management, performance appraisals, and digital contracts for Ugandan SMEs.",
      tags: ["System", "EMS", "Managify"],
    },
    {
      id: "ttai",
      title: "TTA AI trip planner",
      client: "TTA",
      year: 2023,
      url: "",
      urlLabel: "",
      image: "props/ttai.png",
      description: "An AI style trip planner and booking form",
      tags: ["AI", "Tour and Travel", "Firebase", "Africa's Talking"],
    },
  ],
};

// ─── 2. STATE ───────────────────────────────────────────────

let activeCategory = "web";   // current tab
let activeProject  = 0;       // index within the current category list

// ─── 3. HELPERS ─────────────────────────────────────────────

function currentList() {
  return projects[activeCategory];
}

// ─── 4. RENDER PROJECT LIST ─────────────────────────────────

function renderList() {
  const list = currentList();
  const tbody = document.querySelector(".project-list-body");
  if (!tbody) return;

  tbody.innerHTML = "";

  list.forEach((project, i) => {
    const tr = document.createElement("tr");
    tr.className =
      "border *:p-2 flex justify-between items-center cursor-pointer transition-colors";
    if (i === activeProject) {
      tr.classList.add("bg-white", "text-sky-600", "font-semibold");
    }

    tr.innerHTML = `
      <td>${project.title.toUpperCase()}</td>
      <td class="aspect-square bg-white flex items-center justify-center h-12 w-12 text-sky-500">
        <i class="text-sky-500 text-2xl px-2 ri-arrow-right-s-fill"></i>
      </td>`;

    tr.addEventListener("click", () => {
      activeProject = i;
      renderList();
      renderDetail();
    });

    tbody.appendChild(tr);
  });
}

// ─── 5. RENDER PROJECT DETAIL ───────────────────────────────

function renderDetail() {
  const project = currentList()[activeProject];
  if (!project) return;

  const img = document.querySelector(".project-detail-img");
  const title = document.querySelector(".project-detail-title");
  const desc = document.querySelector(".project-detail-desc");
  const link = document.querySelector(".project-detail-link");
  const tags = document.querySelector(".project-detail-tags");

  if (img)   img.src = project.image;
  if (title) title.textContent = project.title;
  if (desc)  desc.textContent  = project.description;

  if (link) {
    if (project.url) {
      link.href        = project.url;
      link.textContent = project.urlLabel;
      link.style.display = "block";
    } else {
      link.style.display = "none";
    }
  }

  if (tags) {
    tags.innerHTML = project.tags
      .map(
        (t) =>
          `<span class="bg-sky-100 text-sky-600 text-xs font-semibold px-3 py-1 rounded-full">${t}</span>`
      )
      .join("");
  }
}

// ─── 6. RENDER CATEGORY TABS ────────────────────────────────

function renderTabs() {
  const tabMap = {
    WEBSITES: "web",
    GRAPHICS: "graphics",
    "CUSTOM SOFTWARE": "software",
  };

  const tabEls = document.querySelectorAll(".category-tab");

  tabEls.forEach((tab) => {
    const key = tabMap[tab.textContent.trim()];
    if (!key) return;

    // active styling
    if (key === activeCategory) {
      tab.classList.add("bg-white", "text-sky-500", "font-extrabold");
      tab.classList.remove("text-white");
    } else {
      tab.classList.remove("bg-white", "text-sky-500", "font-extrabold");
      tab.classList.add("text-white");
    }

    tab.onclick = () => {
      activeCategory = key;
      activeProject  = 0;
      renderTabs();
      renderList();
      renderDetail();
    };
  });
}

// ─── 7. UP / DOWN ARROW NAVIGATION THROUGH PROJECTS ─────────
//  The existing HTML already wires upBtn / downBtn to showSection().
//  We EXTEND those buttons: when the work panel is the active panel
//  we intercept the click and move through the project list instead.

function isWorkPanelActive() {
  // The work panel is the first .panel (index 0 in the panels NodeList).
  // We detect it by checking the global `current` variable exposed by
  // the existing inline script. If it's not available yet we fall back.
  return typeof current !== "undefined" ? current === 0 : true;
}

function navigateProject(direction) {
  // direction: +1 = next, -1 = previous
  const list = currentList();
  const next = activeProject + direction;

  if (next < 0 || next >= list.length) return false; // boundary reached

  activeProject = next;
  renderList();
  renderDetail();
  return true; // consumed the event
}

// ─── 8. PATCH THE EXISTING UP/DOWN BUTTONS ──────────────────
//  We wait for the DOM then wrap the existing onclick handlers.

function patchArrowButtons() {
  const upBtn   = document.getElementById("upBtn");
  const downBtn = document.getElementById("downBtn");
  if (!upBtn || !downBtn) return;

  const origUp   = upBtn.onclick;
  const origDown = downBtn.onclick;

  upBtn.onclick = (e) => {
    if (isWorkPanelActive()) {
      const consumed = navigateProject(-1);
      if (consumed) return; // don't let showSection fire
    }
    if (origUp) origUp(e);
  };

  downBtn.onclick = (e) => {
    if (isWorkPanelActive()) {
      const consumed = navigateProject(+1);
      if (consumed) return;
    }
    if (origDown) origDown(e);
  };

  // Also patch keyboard arrows
  const origKeydown = window.onkeydown;
  window.addEventListener("keydown", (e) => {
    if (!isWorkPanelActive()) return;
    if (e.key === "ArrowDown") {
      const consumed = navigateProject(+1);
      if (consumed) e.stopImmediatePropagation();
    }
    if (e.key === "ArrowUp") {
      const consumed = navigateProject(-1);
      if (consumed) e.stopImmediatePropagation();
    }
  }, true); // capture phase so we run before the existing listener
}

// ─── 9. BOOTSTRAP ───────────────────────────────────────────

// The inline script in work.html uses DOMContentLoaded implicitly
// (the script is at the bottom of <body>), so by the time work.js
// is evaluated the DOM already exists. We guard with a ready-check.

function init() {
  // Add the class the JS will query so we don't touch the HTML
  patchCategoryTabs();
  patchProjectList();
  patchDetailPanel();

  renderTabs();
  renderList();
  renderDetail();
  patchArrowButtons();
}

// ─── 10. NON-INVASIVE DOM PATCHING ──────────────────────────
//  Rather than editing the HTML we locate existing elements and
//  add the query-able classes / structure our rendering needs.

function patchCategoryTabs() {
  // The category <td> elements inside the first <table>
  const tds = document.querySelectorAll(
    "section.panel table:first-of-type td"
  );
  tds.forEach((td) => td.classList.add("category-tab"));
}

function patchProjectList() {
  // The scrollable table already exists. We'll replace its <tbody>
  // (or all its <tr>s) with a container we control.
  // The table is the second <table> inside the panel's left column.
  const tables = document.querySelectorAll("section.panel .overflow-y-scroll table");
  if (!tables.length) return;

  const table = tables[0];
  // Remove all existing static rows
  table.innerHTML = `<tbody class="project-list-body w-full"></tbody>`;
}

function patchDetailPanel() {
  // The right-hand detail column
  const rightCol = document.querySelector("section.panel > div:last-of-type");
  if (!rightCol) return;

  // Locate existing elements and add our query classes
  const img = rightCol.querySelector("img");
  if (img) img.classList.add("project-detail-img");

  const h2 = rightCol.querySelector("h2");
  if (h2) h2.classList.add("project-detail-title");

  const p = rightCol.querySelector("p");
  if (p) p.classList.add("project-detail-desc");

  const a = rightCol.querySelector("a");
  if (a) a.classList.add("project-detail-link");

  // Inject a tags row after the link if it doesn't exist yet
  if (!rightCol.querySelector(".project-detail-tags")) {
    const tagsDiv = document.createElement("div");
    tagsDiv.className = "project-detail-tags flex flex-wrap gap-2 mt-4";
    rightCol.appendChild(tagsDiv);
  }
}

// Run after the inline script has finished (inline script is above us)
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}