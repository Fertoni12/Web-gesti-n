const APP_DATA = {
  widgets: [
    { label: "DUI", value: "05541627-2" },
    { label: "NIT", value: "0817-050597-101-0" },
    { label: "Teléfono", value: "7552-4118" }
  ],
  categories: [
    {
      name: "Finanzas",
      items: [
        { label: "Davivienda", value: "055416272" },
        { label: "Agrícola", value: "cruzfernando97" },
        { label: "AFP Crecer", value: "fernandomontoya963@gmail.com" },
        { label: "Binance", value: "fernandomontoya963@gmail.com" },
        { label: "Coinbase", value: "fernandomontoya963@gmail.com" },
        { label: "TransUnion", value: "05541627-2" },
        { label: "Hacienda", value: "05541627-2" }
      ]
    },
    {
      name: "Correos",
      items: [
        { label: "Principal", value: "fernandomontoya963@gmail.com" },
        { label: "Trabajo", value: "fernandocruz.designs@gmail.com" },
        { label: "Secundario", value: "fernandomontoya953@gmail.com" },
        { label: "Secundario", value: "fernandomontoya983@gmail.com" },
        { label: "Secundario", value: "fernanditacruz0822@gmail.com" },
        { label: "Secundario", value: "fertoniytindia@gmail.com" },
        { label: "Secundario", value: "fertoniytindonesia@gmail.com" }
      ]
    },
    {
      name: "Plataformas",
      items: [
        { label: "Samsung", value: "fernandomontoya963@gmail.com" },
        { label: "GitHub", value: "fernandocruz.designs@gmail.com" },
        { label: "Identidad", value: "05541627-2" },
        { label: "Cisco", value: "fernandomontoya983@gmail.com" },
        { label: "Sertracen", value: "05541627-2" }
      ]
    },
    {
      name: "Entretenimiento",
      items: [
        { label: "Genshin", value: "fernandomontoya983@gmail.com" },
        { label: "Spotify", value: "fernandomontoya963@gmail.com" },
        { label: "TikTok", value: "fernandomontoya963@gmail.com" },
        { label: "Facebook", value: "fernandomontoya963@gmail.com" }
      ]
    },
    {
      name: "Fátima",
      items: [
        { label: "Gmail", value: "alvarezmorena402@gmail.com" },
        { label: "Gmail", value: "cruzalvarezfatima@gmail.com" },
        { label: "AFP", value: "FCRUZ1982" },
        { label: "Hacienda", value: "correo" },
        { label: "Hacienda", value: "06067943-7" }
      ]
    },
    {
      name: "Hermano",
      items: [
        { label: "BAC", value: "marioal1999" },
        { label: "Identidad", value: "05940175-8" },
        { label: "Correo", value: "cmarioalberto10.09@gmail.com" }
      ]
    },
    {
      name: "Familia",
      items: [
        { label: "06213659-0", value: "romeroyolandagabriela@gmail.com" },
        { label: "06450868-8", value: "floresromero.9karlita@gmail.com" }
      ]
    },
    {
      name: "Mamá",
      items: [
        { label: "Gmail", value: "montoyaroxana186@gmail.com" },
        { label: "Gmail", value: "roxanaivethmontoya@gmail.com" },
        { label: "Facebook", value: "roxanaivethmontoya@gmail.com" }
      ]
    },
    {
      name: "Otros",
      items: [
        { label: "Renta", value: "isa14minero@gmail.com" },
        { label: "Amigo - Gmail", value: "rivasroquejoseluis@gmail.com" },
        { label: "Amigo - DUI", value: "05617469-5" },
        { label: "Amigo - NIT", value: "0817-131197-101-6" }
      ]
    }
  ]
};

const ICONS = {
  wallet: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5"></path><path d="M3 10h18"></path><path d="M17 14h.01"></path></svg>',
  mail: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"></rect><path d="m3 7 9 6 9-6"></path></svg>',
  shield: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path></svg>',
  user: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>',
  layout: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"></rect><rect x="14" y="3" width="7" height="7" rx="1"></rect><rect x="14" y="14" width="7" height="7" rx="1"></rect><rect x="3" y="14" width="7" height="7" rx="1"></rect></svg>'
};

const CATEGORY_ICONS = {
  Finanzas: "wallet",
  Correos: "mail",
  Plataformas: "layout",
  Entretenimiento: "layout",
  Fátima: "user",
  Hermano: "user",
  Familia: "user",
  Mamá: "user",
  Otros: "shield"
};

const App = (() => {
  const state = {
    toastTimeout: null,
    categoryNodes: []
  };

  const elements = {
    widgetsSection: document.getElementById("widgetsSection"),
    dashboard: document.getElementById("dashboard"),
    emptyState: document.getElementById("emptyState"),
    toast: document.getElementById("toast"),
    searchInput: document.getElementById("searchInput"),
    widgetTemplate: document.getElementById("widgetTemplate"),
    categoryTemplate: document.getElementById("categoryTemplate"),
    itemTemplate: document.getElementById("itemTemplate")
  };

  function init() {
    renderWidgets();
    renderCategories();
    bindEvents();
  }

  function bindEvents() {
    elements.searchInput.addEventListener("input", ({ target }) => {
      applySearch(target.value);
    });
  }

  function renderWidgets() {
    const fragment = document.createDocumentFragment();

    APP_DATA.widgets.forEach((widget) => {
      const node = elements.widgetTemplate.content.firstElementChild.cloneNode(true);
      node.querySelector(".widget-label").textContent = widget.label;
      node.querySelector(".widget-value").textContent = widget.value;
      node.querySelector(".copy-btn").addEventListener("click", (event) => {
        copyText(widget.value, widget.label, event.currentTarget);
      });
      fragment.appendChild(node);
    });

    elements.widgetsSection.appendChild(fragment);
  }

  function renderCategories() {
    const fragment = document.createDocumentFragment();

    APP_DATA.categories.forEach((category) => {
      const card = elements.categoryTemplate.content.firstElementChild.cloneNode(true);
      const list = card.querySelector(".category-list");
      const headerIcon = card.querySelector(".category-icon");
      const iconKey = CATEGORY_ICONS[category.name] || "shield";

      card.querySelector("h3").textContent = category.name;
      headerIcon.innerHTML = ICONS[iconKey];

      const entryNodes = category.items.map((item) => {
        const itemNode = elements.itemTemplate.content.firstElementChild.cloneNode(true);
        const entryIcon = itemNode.querySelector(".entry-icon");
        const button = itemNode.querySelector(".copy-btn");

        itemNode.querySelector(".entry-title").textContent = item.label;
        itemNode.querySelector(".entry-value").textContent = item.value;
        entryIcon.innerHTML = ICONS[getEntryIcon(item.label, category.name)];

        button.addEventListener("click", (event) => {
          copyText(item.value, item.label, event.currentTarget);
        });

        list.appendChild(itemNode);
        return itemNode;
      });

      card.querySelector(".category-count").textContent = `${category.items.length} registros`;

      state.categoryNodes.push({
        element: card,
        entries: entryNodes,
        counter: card.querySelector(".category-count"),
        total: category.items.length
      });

      fragment.appendChild(card);
    });

    elements.dashboard.appendChild(fragment);
  }

  function getEntryIcon(label, categoryName) {
    const term = `${label} ${categoryName}`.toLowerCase();

    if (term.includes("dui") || term.includes("nit") || term.includes("identidad")) {
      return "shield";
    }

    if (term.includes("gmail") || term.includes("correo") || term.includes("mail")) {
      return "mail";
    }

    if (term.includes("binance") || term.includes("coinbase") || term.includes("afp") || term.includes("bac") || term.includes("hacienda")) {
      return "wallet";
    }

    if (term.includes("facebook") || term.includes("tiktok") || term.includes("spotify") || term.includes("github") || term.includes("samsung")) {
      return "layout";
    }

    return "user";
  }

  function applySearch(term) {
    const query = term.trim().toLowerCase();
    let visibleCategories = 0;

    state.categoryNodes.forEach((category) => {
      let visibleEntries = 0;

      category.entries.forEach((entry) => {
        const matches = entry.textContent.toLowerCase().includes(query);
        entry.classList.toggle("hidden", !matches);
        if (matches) {
          visibleEntries += 1;
        }
      });

      const hasMatches = visibleEntries > 0;
      category.element.classList.toggle("hidden", !hasMatches);
      category.counter.textContent = query ? `${visibleEntries}/${category.total} resultados` : `${category.total} registros`;

      if (hasMatches) {
        visibleCategories += 1;
      }
    });

    elements.emptyState.classList.toggle("hidden", visibleCategories > 0);
  }

  async function copyText(text, label, button) {
    try {
      await navigator.clipboard.writeText(text);
      showToast(`${label} copiado`);
      flashButton(button);
    } catch {
      showToast("No se pudo copiar");
    }
  }

  function flashButton(button) {
    if (!button) {
      return;
    }

    const original = button.textContent;
    button.classList.add("copied");
    button.textContent = "Copiado";

    setTimeout(() => {
      button.classList.remove("copied");
      button.textContent = original;
    }, 900);
  }

  function showToast(message) {
    elements.toast.textContent = message;
    elements.toast.classList.add("show");

    clearTimeout(state.toastTimeout);
    state.toastTimeout = setTimeout(() => {
      elements.toast.classList.remove("show");
    }, 1500);
  }

  return { init };
})();

App.init();
