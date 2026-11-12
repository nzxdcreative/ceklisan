
// ======================================================
// CHECKLISTWEB - VEHICLE INSPECTION SYSTEM
// Create by Ryhh & GPT
// ======================================================

const row = (name, a, b, c = "ISI SENDIRI") => ({
  name,
  options: [a, b, c]
});

const indicators = [
  row("CHECK ENGINE", "MATI", "HIDUP"),
  row("ABS", "MATI", "HIDUP"),
  row("TRACKTION CONTROL", "MATI", "HIDUP")
];

const engine = [
  row("AKI", "ADA", "TIDAK ADA"),
  row("MESIN", "ADA", "TIDAK ADA"),
  row("TRANSMISI", "ADA", "TIDAK ADA"),
  row("POWER STEERING", "ADA", "TIDAK ADA")
];

const rust = [
  row("NOMOR RANGKA", "AMAN", "ADA KARAT"),
  row("NOMOR MESIN", "AMAN", "ADA KARAT"),
  row("RANGKA BAWAH", "AMAN", "ADA KARAT"),
  row("BODY", "AMAN", "ADA KARAT")
];

const passengerInterior = [
  row("POWER WINDOW", "HIDUP", "ERROR"),
  row("RETRACK SPION", "HIDUP", "ERROR"),
  row("SENTRAL LOCK", "HIDUP", "ERROR"),
  row("WIPER", "HIDUP", "ERROR"),
  row("SEIN & LAMPU DEPAN", "HIDUP", "ERROR/MATI"),
  row("AC", "DINGIN", "PANAS"),
  row("STEERING WHEEL BUTTON", "BERFUNGSI", "ERROR/MATI"),
  row("STEERING TEST", "NORMAL", "ADA KERUSAKAN")
];

const commercialInterior = [
  row("HANDLE JENDELA", "ADA & BERFUNGSI", "TIDAK ADA"),
  row("HEAD UNIT", "ADA", "TIDAK ADA"),
  row("SENTRAL LOCK", "HIDUP", "ERROR"),
  row("WIPER", "HIDUP", "ERROR"),
  row("SEIN & LAMPU DEPAN", "HIDUP", "ERROR/MATI"),
  row("AC", "DINGIN", "PANAS"),
  row("STEERING TEST", "NORMAL", "ADA KERUSAKAN")
];

const passengerBody = [
  row("DEPAN", "AMAN", "BEKAS KENA/NYUNDUL"),
  row("KAP MESIN", "AMAN", "BONGKARAN/GANTAIN"),
  row("BELAKANG", "AMAN", "BEKAS KENA/NYUNDUL"),
  row("PINTU BAGASI", "AMAN", "BEKAS KENA/NYUNDUL"),
  row("SAMPING KIRI", "AMAN", "BEKAS KENA"),
  row("SAMPING KANAN", "AMAN", "BEKAS KENA"),
  row("PINTU DEPAN KIRI", "AMAN", "BEKAS REPAIR/GANTIAN"),
  row("PINTU DEPAN KANAN", "AMAN", "BEKAS REPAIR/GANTIAN"),
  row("PINTU TENGAH KIRI", "AMAN", "BEKAS REPAIR/GANTIAN"),
  row("PINTU TENGAH KANAN", "AMAN", "BEKAS REPAIR/GANTIAN"),
  row("BEKAS BANJIR", "AMAN", "BEKAS BANJIR"),
  row("BEKAS TERGULING", "AMAN", "BEKAS TERGULING"),
  row("KACA", "AMAN", "ADA PECAH/RETAK"),
  row("CAT", "ORI", "BEBERAPA PANEL", "FULL BODY")
];

const pickupBody = [
  row("DEPAN", "AMAN", "BEKAS KENA/NYUNDUL"),
  row("KAP MESIN", "AMAN", "BONGKARAN/GANTAIN"),
  row("BELAKANG", "AMAN", "BEKAS KENA/NYUNDUL"),
  row("PINTU BELAKANG BAK", "AMAN", "BEKAS KENA/NYUNDUL"),
  row("SAMPING KIRI", "AMAN", "BEKAS KENA"),
  row("SAMPING KANAN", "AMAN", "BEKAS KENA"),
  row("PINTU DEPAN KIRI", "AMAN", "BEKAS REPAIR/GANTIAN"),
  row("PINTU DEPAN KANAN", "AMAN", "BEKAS REPAIR/GANTIAN"),
  row("LANTAI BAK", "AMAN", "BERGELOMBANG"),
  row("BEKAS BANJIR", "AMAN", "BEKAS BANJIR"),
  row("BEKAS TERGULING", "AMAN", "BEKAS TERGULING"),
  row("KACA", "AMAN", "ADA PECAH/RETAK"),
  row("CAT", "ORI", "BEBERAPA PANEL", "FULL BODY")
];

const blindvanBody = [
  row("DEPAN", "AMAN", "BEKAS KENA/NYUNDUL"),
  row("KAP MESIN", "AMAN", "BONGKARAN/GANTAIN"),
  row("BELAKANG", "AMAN", "BEKAS KENA/NYUNDUL"),
  row("PINTU BAGASI", "AMAN", "BEKAS KENA/NYUNDUL"),
  row("SAMPING KIRI", "AMAN", "BEKAS KENA"),
  row("SAMPING KANAN", "AMAN", "BEKAS KENA"),
  row("PINTU DEPAN KIRI", "AMAN", "BEKAS REPAIR/GANTIAN"),
  row("PINTU DEPAN KANAN", "AMAN", "BEKAS REPAIR/GANTIAN"),
  row("SLIDING DOOR KIRI", "AMAN", "BEKAS REPAIR/GANTIAN"),
  row("SLIDING DOOR KANAN", "AMAN", "BEKAS REPAIR/GANTIAN"),
  row("BEKAS BANJIR", "AMAN", "BEKAS BANJIR"),
  row("BEKAS TERGULING", "AMAN", "BEKAS TERGULING"),
  row("KACA", "AMAN", "ADA PECAH/RETAK"),
  row("CAT", "ORI", "BEBERAPA PANEL", "FULL BODY")
];

const truckBody = [
  row("DEPAN", "AMAN", "BEKAS KENA/NYUNDUL"),
  row("KAP MESIN", "AMAN", "BONGKARAN/GANTAIN"),
  row("BELAKANG", "AMAN", "BEKAS KENA/NYUNDUL"),
  row("PINTU BELAKANG BAK/BOX", "AMAN", "BEKAS KENA/NYUNDUL"),
  row("SAMPING KIRI", "AMAN", "BEKAS KENA"),
  row("SAMPING KANAN", "AMAN", "BEKAS KENA"),
  row("PINTU DEPAN KIRI", "AMAN", "BEKAS REPAIR/GANTIAN"),
  row("PINTU DEPAN KANAN", "AMAN", "BEKAS REPAIR/GANTIAN"),
  row("LANTAI BAK/BOX", "AMAN", "BERGELOMBANG"),
  row("BEKAS BANJIR", "AMAN", "BEKAS BANJIR"),
  row("BEKAS TERGULING", "AMAN", "BEKAS TERGULING"),
  row("KACA", "AMAN", "ADA PECAH/RETAK"),
  row("CAT", "ORI", "BEBERAPA PANEL", "FULL BODY")
];

const lampCovers = [
  row("MIKA LAMPU DEPAN KIRI", "AMAN", "RETAK", "PECAH"),
  row("MIKA LAMPU DEPAN KANAN", "AMAN", "RETAK", "PECAH"),
  row("MIKA LAMPU BELAKANG KIRI", "AMAN", "RETAK", "PECAH"),
  row("MIKA LAMPU BELAKANG KANAN", "AMAN", "RETAK", "PECAH")
];

const mirrorLampCovers = [
  row("MIKA SEIN SPION KIRI", "AMAN", "RETAK", "PECAH"),
  row("MIKA SEIN SPION KANAN", "AMAN", "RETAK", "PECAH")
];

const makeCategories = (interior, body, includeMirror = true) => ({
  "TEST INTERIOR": interior,
  "INDIKATOR": indicators,
  "EXTERIOR MESIN": engine,
  "PENGECEKAN BODY": [
    ...body,
    ...lampCovers,
    ...(includeMirror ? mirrorLampCovers : [])
  ],
  "KARAT": rust
});

// Data checklist sesuai sheet PONDASI.xlsx
const VEHICLE_DATA = {
  "MINIBUS": {
    categories: makeCategories(
      [
        ...passengerInterior,
        row("POWER SLIDING DOOR", "HIDUP", "MATI/TIDAK BERFUNGSI"),
        row("POWER TRUNK", "HIDUP", "MATI/TIDAK ADA")
      ],
      passengerBody
    )
  },

  "SEDAN": {
    categories: makeCategories(
      [
        ...passengerInterior,
        row("SUNROOF", "HIDUP", "MATI/TIDAK ADA"),
        row("POWER TRUNK", "HIDUP", "MATI/TIDAK ADA")
      ],
      passengerBody
    )
  },

  "PICK UP": {
    categories: makeCategories(
      commercialInterior,
      pickupBody
    )
  },

  "BLINDVAN": {
    categories: makeCategories(
      commercialInterior,
      blindvanBody
    )
  },

  "TRUCK": {
    categories: makeCategories(
      commercialInterior,
      truckBody,
      false
    )
  },


"ELECTRIC": {
  categories: {
    ...makeCategories(
      [
        ...passengerInterior,
        row("POWER TRUNK", "HIDUP", "MATI/TIDAK ADA")
      ],
      passengerBody
    ),

    "KELENGKAPAN TAMBAHAN": [
      row("TRAVEL CHARGER", "ADA", "TIDAK ADA"),
      row("ADAPTOR CHARGER", "ADA", "TIDAK ADA"),
      row("POMPA BAN", "ADA", "TIDAK ADA")
    ]
  }
}


// ======================================================
// ILUSTRASI KENDARAAN VECTOR 3D CARTOON
// ======================================================


function vehicleSVG(type) {
  const id = type.replace(/[^a-z0-9]/gi, "");

  const definitions = `
    <defs>
      <linearGradient id="paint-${id}" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#ffffff"/>
        <stop offset="35%" stop-color="#e8edf4"/>
        <stop offset="75%" stop-color="#b9c7d5"/>
        <stop offset="100%" stop-color="#8495a8"/>
      </linearGradient>

      <linearGradient id="glass-${id}" x1="0" y1="0" x2="0.8" y2="1">
        <stop offset="0%" stop-color="#b9d9ed"/>
        <stop offset="45%" stop-color="#52738c"/>
        <stop offset="100%" stop-color="#263b50"/>
      </linearGradient>

      <linearGradient id="wheel-${id}" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#414b57"/>
        <stop offset="100%" stop-color="#101820"/>
      </linearGradient>

      <linearGradient id="rim-${id}" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#ffffff"/>
        <stop offset="45%" stop-color="#b9c5d0"/>
        <stop offset="100%" stop-color="#657589"/>
      </linearGradient>

      <filter id="shadow-${id}" x="-30%" y="-100%" width="160%" height="300%">
        <feGaussianBlur stdDeviation="5"/>
      </filter>
    </defs>
  `;

  const shadow = `
    <ellipse cx="170" cy="143" rx="133" ry="9"
      fill="#536477" opacity=".22"
      filter="url(#shadow-${id})"/>
  `;

  // RODA
  const wheel = (x) => `
    <g>
      <circle cx="${x}" cy="126" r="21"
        fill="url(#wheel-${id})"
        stroke="#273442" stroke-width="2"/>

      <circle cx="${x}" cy="126" r="13"
        fill="url(#rim-${id})"
        stroke="#64748b" stroke-width="1.5"/>

      <circle cx="${x}" cy="126" r="7"
        fill="#7c8997"/>

      <circle cx="${x}" cy="126" r="3"
        fill="#e9eef4"/>

      <path d="M${x-8} 117 L${x+7} 135 M${x+8} 117 L${x-7} 135"
        stroke="#eef2f6" stroke-width="2" opacity=".7"/>
    </g>
  `;

  let body = "";
  let windows = "";
  let details = "";

  // MINIBUS
  if (type === "MINIBUS") {
    body = `
      <path d="M35 115 L42 75 Q44 63 60 58
        L103 39 Q111 35 124 35
        L245 35 Q263 35 273 56
        L294 100 L301 115 L295 128
        L39 128 Z"
        fill="url(#paint-${id})"
        stroke="#7f91a5" stroke-width="2"/>

      <path d="M44 74 L104 43 L116 43 L116 86 L43 86 Z"
        fill="url(#glass-${id})"
        stroke="#8295a8" stroke-width="2"/>

      <path d="M123 43 L172 43 L172 86 L123 86 Z"
        fill="url(#glass-${id})"
        stroke="#8295a8" stroke-width="2"/>

      <path d="M179 43 L238 43 Q252 43 260 60
        L272 86 L179 86 Z"
        fill="url(#glass-${id})"
        stroke="#8295a8" stroke-width="2"/>
    `;

    details = `
      <path d="M117 42 L117 113 M176 42 L176 113"
        stroke="#899aab" stroke-width="2"/>
      <path d="M42 110 L294 110"
        stroke="#ffffff" stroke-width="3" opacity=".8"/>
    `;
  }

  // SEDAN
  else if (type === "SEDAN" || type === "ELECTRIC") {
    body = `
      <path d="M32 115 L43 99 L63 88
        L91 83 L119 54
        Q130 43 153 43
        L203 43 Q224 43 239 61
        L260 85 L287 97
        L300 115 L294 128
        L39 128 Z"
        fill="url(#paint-${id})"
        stroke="#7f91a5" stroke-width="2"/>

      <path d="M101 81 L126 56
        Q135 48 154 48
        L169 48 L169 82 Z"
        fill="url(#glass-${id})"
        stroke="#8295a8" stroke-width="2"/>

      <path d="M177 48 L201 48
        Q219 48 232 65
        L245 82 L177 82 Z"
        fill="url(#glass-${id})"
        stroke="#8295a8" stroke-width="2"/>
    `;

    details = `
      <path d="M173 47 L173 111"
        stroke="#899aab" stroke-width="2"/>
      <path d="M41 108 L291 108"
        stroke="#ffffff" stroke-width="3" opacity=".8"/>
      <path d="M74 89 L89 89"
        stroke="#718398" stroke-width="2"/>
    `;

    if (type === "ELECTRIC") {
      details += `
        <path d="M48 119 L282 119"
          stroke="#38a9e8" stroke-width="3"/>
        <path d="M151 51 L161 51"
          stroke="#38a9e8" stroke-width="3"/>
      `;
    }
  }

  // PICK UP
  else if (type === "PICK UP") {
    body = `
      <path d="M32 113 L43 78
        Q47 65 65 62
        L119 62 L147 92
        L177 92 L177 60
        L276 60 L286 96
        L299 113 L294 128
        L39 128 Z"
        fill="url(#paint-${id})"
        stroke="#7f91a5" stroke-width="2"/>

      <path d="M54 78 L69 68 L116 68
        L136 91 L53 91 Z"
        fill="url(#glass-${id})"
        stroke="#8295a8" stroke-width="2"/>

      <path d="M183 67 L270 67 L278 91
        L183 91 Z"
        fill="#dce5ed"
        stroke="#8798aa" stroke-width="2"/>
    `;

    details = `
      <path d="M145 61 L145 112 M179 61 L179 112"
        stroke="#899aab" stroke-width="2"/>
      <path d="M184 72 L270 72"
        stroke="#ffffff" stroke-width="2" opacity=".7"/>
      <path d="M183 96 L282 96"
        stroke="#718398" stroke-width="2"/>
    `;
  }

  // BLINDVAN
  else if (type === "BLINDVAN") {
    body = `
      <path d="M35 115 L43 73
        Q46 58 64 53
        L105 37 L252 37
        Q271 37 278 59
        L295 103 L301 115
        L294 128 L39 128 Z"
        fill="url(#paint-${id})"
        stroke="#7f91a5" stroke-width="2"/>

      <path d="M47 73 L108 43 L121 43
        L121 87 L43 87 Z"
        fill="url(#glass-${id})"
        stroke="#8295a8" stroke-width="2"/>

      <path d="M128 43 L244 43
        Q259 43 266 64 L276 87 L128 87 Z"
        fill="#c7d2df"
        stroke="#8295a8" stroke-width="2"/>
    `;

    details = `
      <path d="M122 43 L122 112"
        stroke="#899aab" stroke-width="2"/>
      <path d="M48 110 L290 110"
        stroke="#ffffff" stroke-width="3" opacity=".8"/>
      <path d="M230 43 L230 109"
        stroke="#899aab" stroke-width="1.5"/>
    `;
  }

  // TRUCK ENGKEL
  else if (type === "TRUCK") {
    body = `
      <path d="M28 112 L35 53
        Q37 44 48 44
        L211 44 L211 112
        L294 112 L301 123
        L295 132 L33 132 Z"
        fill="url(#paint-${id})"
        stroke="#7f91a5" stroke-width="2"/>

      <path d="M221 73 L254 73
        Q268 73 276 91
        L285 112 L221 112 Z"
        fill="url(#paint-${id})"
        stroke="#7f91a5" stroke-width="2"/>

      <path d="M230 79 L254 79
        Q264 79 270 94 L276 103 L230 103 Z"
        fill="url(#glass-${id})"
        stroke="#8295a8" stroke-width="2"/>

      <path d="M42 51 L204 51 L204 105 L42 105 Z"
        fill="#dce5ed"
        stroke="#899aab" stroke-width="1.5"/>
    `;
    
    details = `
      <path d="M212 45 L212 112"
        stroke="#899aab" stroke-width="3"/>
      <path d="M42 108 L285 108"
        stroke="#ffffff" stroke-width="3" opacity=".8"/>
      <path d="M45 57 L201 57"
        stroke="#ffffff" stroke-width="2" opacity=".7"/>
    `;
  }

  // AKSESORIS UMUM
  const frontDetails = `
    <rect x="292" y="104" width="8" height="10"
      rx="3" fill="#fff1bd"/>
    <rect x="36" y="103" width="7" height="13"
      rx="2" fill="#d95c5c"/>
    <path d="M48 128 L291 128"
      stroke="#65778b" stroke-width="2"/>
  `;

  const wheels = `
    ${wheel(91)}
    ${wheel(253)}
  `;

  return `
    <svg class="vehicle-art"
      viewBox="0 0 330 165"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Ilustrasi ${type} tampak samping">

      ${definitions}
      ${shadow}
      ${body}
      ${windows}
      ${details}
      ${frontDetails}
      ${wheels}

    </svg>
  `;
}


// ======================================================
// STATE APLIKASI
// ======================================================

let currentVehicle = "";
let answers = {};

const homePage = document.getElementById("homePage");
const inspectionPage = document.getElementById("inspectionPage");
const vehicleMenu = document.getElementById("vehicleMenu");
const checklistContainer = document.getElementById("checklistContainer");
const progressElement = document.getElementById("progress");
const notification = document.getElementById("notification");

const vehicleLabels = {
  "MINIBUS": "MINIBUS",
  "SEDAN": "SEDAN",
  "PICK UP": "PICK UP",
  "BLINDVAN": "BLINDVAN",
  "TRUCK": "TRUCK",
  "ELECTRIC": "ELECTRIC"
};

function getTotalItems() {
  const categories = VEHICLE_DATA[currentVehicle].categories;

  return Object.values(categories).reduce(
    (total, items) => total + items.length, 0
  );
}

// ======================================================
// HOME PAGE
// ======================================================

function renderHome() {
  vehicleMenu.innerHTML = Object.keys(VEHICLE_DATA).map(type => `
    <button class="vehicle-card" type="button"
      data-vehicle="${type}">
      ${vehicleSVG(type)}
      <span>${vehicleLabels[type]}</span>
    </button>
  `).join("");
}

vehicleMenu.addEventListener("click", event => {
  const card = event.target.closest("[data-vehicle]");
  if (!card) return;

  openInspection(card.dataset.vehicle);
});

function openInspection(type) {
  currentVehicle = type;
  answers = {};

  homePage.classList.add("hidden");
  inspectionPage.classList.remove("hidden");

  document.getElementById("inspectionTitle").textContent =
    `INSPEKSI ${vehicleLabels[type]}`;

  document.getElementById("tanggalMasuk").value = getToday();

  renderChecklist();

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function backToHome() {
  if (Object.keys(answers).length > 0) {
    const confirmed = confirm(
      "Kembali ke menu utama? Data inspeksi yang belum diunduh akan hilang."
    );

    if (!confirmed) return;
  }

  currentVehicle = "";
  answers = {};

  inspectionPage.classList.add("hidden");
  homePage.classList.remove("hidden");

  clearNotification();

  window.scrollTo({ top: 0, behavior: "smooth" });
}

document.getElementById("backButton")
  .addEventListener("click", backToHome);

// ======================================================
// TANGGAL
// ======================================================

function getToday() {
  const now = new Date();
  const offset = now.getTimezoneOffset();

  return new Date(now.getTime() - offset * 60000)
    .toISOString()
    .slice(0, 10);
}

function formatDate(value) {
  return new Date(value + "T00:00:00").toLocaleDateString("id-ID", {
    day: "2-digit",
    month: "long",
    year: "numeric"
  });
}

// ======================================================
// CHECKLIST RENDER
// ======================================================

function renderChecklist() {
  const categories = VEHICLE_DATA[currentVehicle].categories;
  let html = "";

  Object.entries(categories).forEach(([category, items], categoryIndex) => {
    html += `
      <section class="category">
        <div class="category-title">${category}</div>
    `;

    items.forEach((item, itemIndex) => {
      const key = `${categoryIndex}-${itemIndex}`;
      const selected = answers[key];

      html += `
        <div class="check-item">
          <div class="item-name">${item.name}</div>
      `;

      item.options.forEach((option, optionIndex) => {
        const isSelected = selected && selected.choice === optionIndex;

        html += `
          <button type="button"
            class="answer-button ${isSelected ? "selected" : ""}"
            data-key="${key}"
            data-choice="${optionIndex}">
            ${option}
          </button>
        `;
      });

      if (
        selected &&
        item.options[selected.choice] === "ISI SENDIRI"
      ) {
        html += `
          <input
            class="custom-input"
            type="text"
            placeholder="Tuliskan kondisi kendaraan..."
            value="${escapeHTML(selected.custom || "")}"
            data-custom-key="${key}">
        `;
      }

      html += `</div>`;
    });

    html += `</section>`;

    if (category === "INDIKATOR") {
      html += `
        <div class="note-section">
          <label for="keteranganTambahan">
            KETERANGAN TAMBAHAN
          </label>
          <textarea id="keteranganTambahan"
            class="note-input"
            placeholder="Tuliskan keterangan tambahan..."></textarea>
        </div>
      `;
    }
  });

  html += `
    <div class="note-section">
      <label for="catatanTambahan">CATATAN TAMBAHAN</label>
      <textarea id="catatanTambahan"
        class="note-input"
        placeholder="Tuliskan catatan tambahan..."></textarea>
    </div>
  `;

  checklistContainer.innerHTML = html;

  updateProgress();
}

checklistContainer.addEventListener("click", event => {
  const button = event.target.closest(".answer-button");
  if (!button) return;

  const key = button.dataset.key;
  const choice = Number(button.dataset.choice);

  const [categoryIndex, itemIndex] = key.split("-").map(Number);

  const categoryItems = Object.values(
    VEHICLE_DATA[currentVehicle].categories
  )[categoryIndex];

  const item = categoryItems[itemIndex];
  const selectedOption = item.options[choice];

  if (selectedOption === "ISI SENDIRI") {
    answers[key] = {
      choice,
      value: "",
      custom: ""
    };
  } else {
    answers[key] = {
      choice,
      value: selectedOption,
      custom: ""
    };
  }

  const previousNotes = getNotes();

  renderChecklist();

  document.getElementById("keteranganTambahan").value =
    previousNotes.keterangan;

  document.getElementById("catatanTambahan").value =
    previousNotes.catatan;
});

checklistContainer.addEventListener("input", event => {
  const input = event.target;

  if (!input.dataset.customKey) return;

  const key = input.dataset.customKey;

  if (answers[key]) {
    answers[key].custom = input.value;
    answers[key].value = input.value.trim();
  }

  updateProgress();
});

function getNotes() {
  return {
    keterangan:
      document.getElementById("keteranganTambahan")?.value || "",
    catatan:
      document.getElementById("catatanTambahan")?.value || ""
  };
}

// ======================================================
// PROGRESS
// ======================================================

function updateProgress() {
  const completed = Object.values(answers).filter(
    answer => String(answer.value || "").trim() !== ""
  ).length;

  progressElement.textContent =
    `${completed} / ${getTotalItems()}`;
}

// ======================================================
// IDENTITAS KENDARAAN
// ======================================================

function getVehicleInfo() {
  return {
    tanggal: document.getElementById("tanggalMasuk").value,
    vendor: document.getElementById("namaVendor").value.trim(),
    nopol: document.getElementById("nopol").value.trim(),
    merk: document.getElementById("merkJenis").value.trim(),
    warna: document.getElementById("warna").value.trim(),
    tahun: document.getElementById("tahun").value.trim()
  };
}

function validateForm() {
  const info = getVehicleInfo();

  for (const [key, value] of Object.entries(info)) {
    if (!value) {
      showNotification(
        "Mohon lengkapi seluruh identitas kendaraan.",
        "error"
      );

      const fields = {
        tanggal: "tanggalMasuk",
        vendor: "namaVendor",
        nopol: "nopol",
        merk: "merkJenis",
        warna: "warna",
        tahun: "tahun"
      };

      document.getElementById(fields[key]).focus();
      return false;
    }
  }

  const categories = VEHICLE_DATA[currentVehicle].categories;

  for (const [categoryIndex, items] of Object.values(categories).entries()) {
    for (const [itemIndex, item] of items.entries()) {
      const key = `${categoryIndex}-${itemIndex}`;
      const answer = answers[key];

      if (!answer || !String(answer.value || "").trim()) {
        showNotification(
          `Belum diisi: ${item.name} (${Object.keys(categories)[categoryIndex]})`,
          "error"
        );
        return false;
      }
    }
  }

  return true;
}

// ======================================================
// REPORT JPG
// ======================================================

function escapeHTML(value) {
  return String(value ?? "").replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  })[char]);
}

function generateReport() {
  const info = getVehicleInfo();
  const notes = getNotes();
  const categories = VEHICLE_DATA[currentVehicle].categories;

  let categoryHTML = "";

  Object.entries(categories).forEach(
    ([category, items], categoryIndex) => {
      let rows = "";

      items.forEach((item, itemIndex) => {
        const key = `${categoryIndex}-${itemIndex}`;
        const answer = answers[key];

        rows += `
          <tr>
            <td>${escapeHTML(item.name)}</td>
            <td>${escapeHTML(answer.value)}</td>
          </tr>
        `;
      });

      categoryHTML += `
        <section class="report-category">
          <h2>${escapeHTML(category)}</h2>
          <table class="report-table">
            <thead>
              <tr>
                <th>ITEM PEMERIKSAAN</th>
                <th>HASIL INSPEKSI</th>
              </tr>
            </thead>
            <tbody>${rows}</tbody>
          </table>
        </section>
      `;
    }
  );

  const report = document.getElementById("report");

  report.innerHTML = `
    <header class="report-header">
      <h1>VEHICLE INSPECTION REPORT</h1>
      <p>LAPORAN HASIL PEMERIKSAAN KENDARAAN</p>
      <span class="report-vehicle-type">
        ${escapeHTML(currentVehicle)}
      </span>
    </header>

    <section class="report-info">
      <div><strong>TANGGAL MASUK</strong>: ${escapeHTML(formatDate(info.tanggal))}</div>
      <div><strong>NAMA VENDOR</strong>: ${escapeHTML(info.vendor)}</div>
      <div><strong>NOPOL</strong>: ${escapeHTML(info.nopol.toUpperCase())}</div>
      <div><strong>MERK / JENIS</strong>: ${escapeHTML(info.merk)}</div>
      <div><strong>WARNA</strong>: ${escapeHTML(info.warna)}</div>
      <div><strong>TAHUN</strong>: ${escapeHTML(info.tahun)}</div>
    </section>

    ${categoryHTML}

    <section class="report-notes">
      <h3>KETERANGAN TAMBAHAN</h3>
      <p>${escapeHTML(notes.keterangan || "-")}</p>
    </section>

    <section class="report-notes">
      <h3>CATATAN TAMBAHAN</h3>
      <p>${escapeHTML(notes.catatan || "-")}</p>
    </section>

    <footer class="report-footer">
      Create by <strong>Ryhh & GPT</strong>
    </footer>
  `;

  return report;
}

// ======================================================
// DOWNLOAD JPG
// ======================================================

async function downloadJPG() {
  if (!validateForm()) return;

  if (typeof html2canvas !== "function") {
    showNotification(
      "Library JPG belum termuat. Periksa koneksi internet.",
      "error"
    );
    return;
  }

  const button = document.getElementById("downloadButton");

  try {
    button.disabled = true;
    button.textContent = "MEMBUAT JPG...";

    const report = generateReport();

    await new Promise(resolve => requestAnimationFrame(resolve));

    const canvas = await html2canvas(report, {
      scale: 2,
      backgroundColor: "#ffffff",
      logging: false,
      width: 1200,
      windowWidth: 1200,
      useCORS: true
    });

    const blob = await new Promise(resolve => {
      canvas.toBlob(resolve, "image/jpeg", 0.96);
    });

    if (!blob) {
      throw new Error("Gagal membuat gambar JPG.");
    }

    const info = getVehicleInfo();

    const safeNopol = info.nopol
      .toUpperCase()
      .replace(/[^A-Z0-9-]/g, "_");

    const fileName =
      `CHECKLIST_${currentVehicle.replace(/\s+/g, "_")}_${safeNopol}_${info.tanggal}.jpg`;

    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = url;
    link.download = fileName;

    document.body.appendChild(link);
    link.click();
    link.remove();

    setTimeout(() => URL.revokeObjectURL(url), 5000);

    showNotification(
      "Laporan JPG berhasil dibuat dan diunduh!",
      "success"
    );

  } catch (error) {
    console.error("JPG Error:", error);

    showNotification(
      "Gagal membuat JPG. Silakan periksa Console browser.",
      "error"
    );

  } finally {
    button.disabled = false;
    button.textContent = "Generate & Download JPG";
  }
}

// ======================================================
// RESET
// ======================================================

function resetInspection() {
  if (!confirm("Hapus seluruh data pemeriksaan ini?")) return;

  answers = {};

  document.getElementById("tanggalMasuk").value = getToday();

  [
    "namaVendor",
    "nopol",
    "merkJenis",
    "warna",
    "tahun"
  ].forEach(id => {
    document.getElementById(id).value = "";
  });

  renderChecklist();
  clearNotification();

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showNotification(message, type) {
  notification.textContent = message;
  notification.className = type;
}

function clearNotification() {
  notification.textContent = "";
  notification.className = "";
}

document.getElementById("downloadButton")
  .addEventListener("click", downloadJPG);

document.getElementById("resetButton")
  .addEventListener("click", resetInspection);

// Mulai aplikasi
renderHome();
