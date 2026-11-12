
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
      ).categories,
      "KELENGKAPAN TAMBAHAN": [
        row("TRAVEL CHARGER", "ADA", "TIDAK ADA"),
        row("ADAPTOR CHARGER", "ADA", "TIDAK ADA"),
        row("POMPA BAN", "ADA", "TIDAK ADA")
      ]
    }
  }
};

// ======================================================
// ILUSTRASI KENDARAAN VECTOR 3D CARTOON
// ======================================================

function vehicleSVG(type) {
  const common = `
    <defs>
      <linearGradient id="bodyPaint" x1="0" y1="0" x2="0.2" y2="1">
        <stop offset="0%" stop-color="#ffffff"/>
        <stop offset="48%" stop-color="#dce5ef"/>
        <stop offset="100%" stop-color="#8295aa"/>
      </linearGradient>
      <linearGradient id="glass" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#8faec5"/>
        <stop offset="45%" stop-color="#344c62"/>
        <stop offset="100%" stop-color="#142333"/>
      </linearGradient>
      <linearGradient id="metal" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#f9fbff"/>
        <stop offset="100%" stop-color="#8798aa"/>
      </linearGradient>
      <filter id="shadow" x="-30%" y="-50%" width="160%" height="200%">
        <feGaussianBlur stdDeviation="5"/>
      </filter>
    </defs>
    <ellipse cx="180" cy="148" rx="128" ry="10"
      fill="#52657a" opacity=".18" filter="url(#shadow)"/>
  `;

  const wheels = `
    <g>
      <circle cx="92" cy="129" r="20" fill="#1d2732"/>
      <circle cx="92" cy="129" r="12" fill="url(#metal)"/>
      <circle cx="92" cy="129" r="5" fill="#566779"/>
      <circle cx="257" cy="129" r="20" fill="#1d2732"/>
      <circle cx="257" cy="129" r="12" fill="url(#metal)"/>
      <circle cx="257" cy="129" r="5" fill="#566779"/>
    </g>
  `;

  let body = "";

  if (type === "MINIBUS" || type === "BLINDVAN") {
    body = `
      <path d="M35 112 L43 77 Q47 62 66 59 L111 38
        L227 38 Q244 39 253 58 L280 94
        L291 111 L285 124 L45 124 Z"
        fill="url(#bodyPaint)" stroke="#718398" stroke-width="2"/>
      <path d="M58 76 L72 53 L111 47 L111 88 L56 88 Z"
        fill="url(#glass)" stroke="#7d8fa0" stroke-width="2"/>
      <path d="M118 47 L222 47 Q236 48 245 68 L257 89 L118 89 Z"
        fill="url(#glass)" stroke="#7d8fa0" stroke-width="2"/>
      <path d="M35 112 L289 112 L282 126 L46 126 Z"
        fill="#8294a7"/>
      <rect x="260" y="94" width="18" height="7" rx="3" fill="#fff3c5"/>
      <rect x="43" y="96" width="8" height="14" rx="2" fill="#d94e4e"/>
      <path d="M117 47 L117 112" stroke="#8191a2" stroke-width="2"/>
      <path d="M182 47 L182 112" stroke="#8191a2" stroke-width="2"/>
      <path d="M47 116 L280 116" stroke="#ffffff" stroke-width="2" opacity=".8"/>
    `;
  } else if (type === "PICK UP") {
    body = `
      <path d="M36 111 L45 77 Q49 62 70 60 L129 60
        L149 92 L178 92 L178 65 L273 65 L283 106
        L294 111 L288 126 L45 126 Z"
        fill="url(#bodyPaint)" stroke="#718398" stroke-width="2"/>
      <path d="M61 78 L74 65 L119 65 L139 91 L59 91 Z"
        fill="url(#glass)" stroke="#7d8fa0" stroke-width="2"/>
      <path d="M149 94 L175 94 L175 64 L269 64 L274 94 Z"
        fill="#e8eef4" stroke="#718398" stroke-width="2"/>
      <path d="M185 70 L268 70" stroke="#a5b3c2" stroke-width="2"/>
      <path d="M179 96 L275 96" stroke="#718398" stroke-width="2"/>
      <rect x="270" y="101" width="15" height="7" rx="3" fill="#fff3c5"/>
      <rect x="42" y="99" width="8" height="12" rx="2" fill="#d94e4e"/>
    `;
  } else if (type === "TRUCK") {
    body = `
      <path d="M24 107 L31 54 Q34 44 45 44 L217 44
        Q224 44 224 54 L224 111 L285 111
        L299 122 L294 132 L29 132 Z"
        fill="url(#bodyPaint)" stroke="#718398" stroke-width="2"/>
      <path d="M35 55 L215 55 L215 108 L35 108 Z"
        fill="#e7edf3" stroke="#8b9bab" stroke-width="2"/>
      <path d="M223 77 L258 77 Q270 77 277 92
        L285 111 L223 111 Z"
        fill="url(#bodyPaint)" stroke="#718398" stroke-width="2"/>
      <path d="M232 82 L258 82 Q266 82 272 95
        L276 101 L232 101 Z"
        fill="url(#glass)" stroke="#718398" stroke-width="2"/>
      <path d="M226 107 L286 107" stroke="#718398" stroke-width="3"/>
      <rect x="284" y="111" width="9" height="7" rx="2" fill="#fff3c5"/>
      <rect x="27" y="112" width="8" height="13" rx="2" fill="#d94e4e"/>
    `;
  } else {
    body = `
      <path d="M34 112 L48 89 Q63 69 94 66
        L142 51 Q167 45 192 57 L242 79
        Q260 87 276 108 L282 119
        L270 127 L43 127 Z"
        fill="url(#bodyPaint)" stroke="#718398" stroke-width="2"/>
      <path d="M94 68 L139 55 Q161 50 181 60
        L215 79 L100 82 Z"
        fill="url(#glass)" stroke="#7d8fa0" stroke-width="2"/>
      <path d="M188 62 L215 79 L247 91 L232 82
        Q223 70 205 65 Z"
        fill="url(#glass)" stroke="#7d8fa0" stroke-width="2"/>
      <path d="M105 83 L247 83" stroke="#718398" stroke-width="2"/>
      <path d="M40 109 L60 109" stroke="#fff3c5" stroke-width="6"/>
      <rect x="268" y="103" width="9" height="13" rx="3" fill="#d94e4e"/>
      ${type === "ELECTRIC" ? `
        <path d="M55 121 L267 121" stroke="#39a9e9" stroke-width="4"/>
        <path d="M160 54 L170 54" stroke="#39a9e9" stroke-width="3"/>
      ` : ""}
    `;
  }

  return `
    <svg class="vehicle-art" viewBox="0 0 330 165"
      xmlns="http://www.w3.org/2000/svg" role="img"
      aria-label="Ilustrasi ${type}">
      ${common}
      ${wheels}
      ${body}
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
