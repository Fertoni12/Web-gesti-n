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

const App = (() => {
  const state = {
    toastTimeout: null,
    categoryElements: []
  };

  const elements = {
    widgetsSection: document.getElementById("widgetsSection"),
    dashboard: document.getElementById("dashboard"),
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
    elements.searchInput.addEventListener("input", (event) => {
      applySearch(event.target.value);
    });
  }

  function renderWidgets() {
    const fragment = document.createDocumentFragment();

    APP_DATA.widgets.forEach((widget) => {
      const node = elements.widgetTemplate.content.firstElementChild.cloneNode(true);
      node.querySelector(".widget-label").textContent = widget.label;
      node.querySelector(".widget-value").textContent = widget.value;
      node.querySelector(".copy-btn").addEventListener("click", () => copyText(widget.value, widget.label));
      fragment.appendChild(node);
    });

    elements.widgetsSection.appendChild(fragment);
  }

  function renderCategories() {
    const fragment = document.createDocumentFragment();

    APP_DATA.categories.forEach((category) => {
      const card = elements.categoryTemplate.content.firstElementChild.cloneNode(true);
      const list = card.querySelector(".category-list");

      card.querySelector("h3").textContent = category.name;
      card.querySelector(".category-count").textContent = `${category.items.length} registros`;

      category.items.forEach((item) => {
        const itemNode = elements.itemTemplate.content.firstElementChild.cloneNode(true);
        itemNode.querySelector(".entry-title").textContent = item.label;
        itemNode.querySelector(".entry-value").textContent = item.value;
        itemNode.querySelector(".copy-btn").addEventListener("click", () => copyText(item.value, item.label));
        list.appendChild(itemNode);
      });

      state.categoryElements.push(card);
      fragment.appendChild(card);
    });

    elements.dashboard.appendChild(fragment);
  }

  function applySearch(term) {
    const query = term.trim().toLowerCase();

    state.categoryElements.forEach((category) => {
      const matchesCategory = category.textContent.toLowerCase().includes(query);
      category.classList.toggle("hidden", !matchesCategory);
    });
  }

  async function copyText(text, label) {
    try {
      await navigator.clipboard.writeText(text);
      showToast(`${label} copiado`);
    } catch {
      showToast("No se pudo copiar");
    }
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
