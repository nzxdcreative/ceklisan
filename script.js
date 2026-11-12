
const inspectionData = [
  {
    category: "TEST INTERIOR",
    items: [
      ["POWER WINDOW", "HIDUP", "ERROR", "custom"],
      ["RETRACK SPION", "HIDUP", "ERROR", "custom"],
      ["SENTRAL LOCK", "HIDUP", "ERROR", "custom"],
      ["WIPER", "HIDUP", "ERROR", "custom"],
      ["SEIN & LAMPU DEPAN", "HIDUP", "ERROR/MATI", "custom"],
      ["AC", "DINGIN", "PANAS", "custom"],
      ["STEERING WHEEL BUTTON", "BERFUNGSI", "ERROR/MATI", "custom"],
      ["STEERING TEST", "NORMAL", "ADA KERUSAKAN", "custom"],
      ["POWER SLIDING DOOR", "HIDUP", "MATI/TIDAK BERFUNGSI", "custom"],
      ["POWER TRUNK", "HIDUP", "MATI/TIDAK ADA", "custom"]
    ]
  },
  {
    category: "EXTERIOR MESIN",
    items: [
      ["AKI", "ADA", "TIDAK ADA", "custom"],
      ["MESIN", "ADA", "TIDAK ADA", "custom"],
      ["TRANSMISI", "ADA", "TIDAK ADA", "custom"],
      ["POWER STEERING", "ADA", "TIDAK ADA", "custom"]
    ]
  },
  {
    category: "PENGECEKAN BODY",
    items: [
      ["DEPAN", "AMAN", "BEKAS KENA/NYUNDUL", "custom"],
      ["KAP MESIN", "AMAN", "BONGKARAN/GANTIAN", "custom"],
      ["BELAKANG", "AMAN", "BEKAS KENA/NYUNDUL", "custom"],
      ["PINTU BAGASI", "AMAN", "BONGKARAN/GANTIAN", "custom"],
      ["SAMPING KIRI", "AMAN", "BEKAS KENA", "custom"],
      ["SAMPING KANAN", "AMAN", "BEKAS KENA", "custom"],
      ["PINTU DEPAN KIRI", "AMAN", "BEKAS REPAIR/GANTIAN", "custom"],
      ["PINTU DEPAN KANAN", "AMAN", "BEKAS REPAIR/GANTIAN", "custom"],
      ["PINTU TENGAH KIRI", "AMAN", "BEKAS REPAIR/GANTIAN", "custom"],
      ["PINTU TENGAH KANAN", "AMAN", "BEKAS REPAIR/GANTIAN", "custom"],
      ["BEKAS BANJIR", "AMAN", "BEKAS BANJIR", "custom"],
      ["BEKAS TERGULING", "AMAN", "BEKAS TERGULING", "custom"],
      ["KACA", "AMAN", "ADA PECAH/RETAK", "custom"],
      ["CAT", "ORI", "BEBERAPA PANEL", "FULL BODY"]
    ]
  },
  {
    category: "KARAT",
    items: [
      ["NOMOR RANGKA", "AMAN", "ADA KARAT", "custom"],
      ["NOMOR MESIN", "AMAN", "ADA KARAT", "custom"],
      ["RANGKA BAWAH", "AMAN", "ADA KARAT", "custom"],
      ["BODY", "AMAN", "ADA KARAT", "custom"]
    ]
  }
];

const answers = {};

const checklistContainer = document.getElementById("checklistContainer");
const progressElement = document.getElementById("progress");
const notification = document.getElementById("notification");

const totalItems = inspectionData.reduce(
  (total, category) => total + category.items.length,
  0
);

// Tanggal hari ini menggunakan zona waktu lokal browser
function getToday() {
  const now = new Date();
  const offset = now.getTimezoneOffset();
  return new Date(now.getTime() - offset * 60000)
    .toISOString()
    .slice(0, 10);
}

document.getElementById("tanggalMasuk").value = getToday();

// Membuat checklist
function renderChecklist() {
  checklistContainer.innerHTML = "";

  inspectionData.forEach((category, categoryIndex) => {
    const categoryElement = document.createElement("div");
    categoryElement.className = "category";

    const title = document.createElement("div");
    title.className = "category-title";
    title.textContent = category.category;

    categoryElement.appendChild(title);

    category.items.forEach((item, itemIndex) => {
      const key = `${categoryIndex}-${itemIndex}`;

      const row = document.createElement("div");
      row.className = "check-item";

      const name = document.createElement("div");
      name.className = "item-name";
      name.textContent = item[0];

      row.appendChild(name);

      item.slice(1).forEach((option, optionIndex) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "answer-button";
        button.textContent = option === "custom" ? "ISI SENDIRI" : option;

        button.dataset.key = key;
        button.dataset.choice = optionIndex;

        if (
          answers[key] &&
          answers[key].choice === optionIndex
        ) {
          button.classList.add("selected");
        }

        row.appendChild(button);
      });

      // Input tambahan hanya untuk pilihan ISI SENDIRI
      if (
        answers[key] &&
        answers[key].choice === 2 &&
        item[3] === "custom"
      ) {
        const customInput = document.createElement("input");
        customInput.type = "text";
        customInput.className = "custom-input";
        customInput.placeholder = "Tuliskan kondisi kendaraan...";
        customInput.value = answers[key].custom || "";
        customInput.dataset.customKey = key;
        row.appendChild(customInput);
      }

      categoryElement.appendChild(row);
    });

    checklistContainer.appendChild(categoryElement);
  });

  updateProgress();
}

// Menghitung progres pemeriksaan
function updateProgress() {
  const completed = Object.keys(answers).filter(
    key => answers[key].value
  ).length;

  progressElement.textContent = `${completed} / ${totalItems}`;
}

// Memilih jawaban
checklistContainer.addEventListener("click", function(event) {
  const button = event.target.closest(".answer-button");

  if (!button) return;

  const key = button.dataset.key;
  const choice = Number(button.dataset.choice);

  const [categoryIndex, itemIndex] = key.split("-").map(Number);
  const item = inspectionData[categoryIndex].items[itemIndex];
  const selectedOption = item[choice + 1];

  if (selectedOption === "custom") {
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

  renderChecklist();
});

// Menyimpan teks pilihan ISI SENDIRI
checklistContainer.addEventListener("input", function(event) {
  const input = event.target;

  if (!input.dataset.customKey) return;

  const key = input.dataset.customKey;

  if (answers[key]) {
    answers[key].custom = input.value.trim();
    answers[key].value = input.value.trim();
  }

  updateProgress();
});

// Mengambil identitas kendaraan
function getVehicleData() {
  return {
    tanggal: document.getElementById("tanggalMasuk").value,
    vendor: document.getElementById("namaVendor").value.trim(),
    nopol: document.getElementById("nopol").value.trim(),
    merk: document.getElementById("merkJenis").value.trim(),
    warna: document.getElementById("warna").value.trim(),
    tahun: document.getElementById("tahun").value.trim()
  };
}

// Validasi sebelum membuat laporan
function validateForm() {
  const vehicle = getVehicleData();

  for (const [key, value] of Object.entries(vehicle)) {
    if (!value) {
      showNotification("Mohon lengkapi seluruh identitas kendaraan.", "error");
      document.getElementById(
        {
          tanggal: "tanggalMasuk",
          vendor: "namaVendor",
          nopol: "nopol",
          merk: "merkJenis",
          warna: "warna",
          tahun: "tahun"
        }[key]
      ).focus();

      return false;
    }
  }

  for (let c = 0; c < inspectionData.length; c++) {
    for (let i = 0; i < inspectionData[c].items.length; i++) {
      const key = `${c}-${i}`;

      if (!answers[key] || !answers[key].value) {
        showNotification(
          `Masih ada item yang belum diperiksa: ${inspectionData[c].items[i][0]}`,
          "error"
        );

        return false;
      }
    }
  }

  return true;
}

// Mengamankan teks agar tidak menjadi HTML
function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, character => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  })[character]);
}

// Format tanggal untuk laporan
function formatDate(dateString) {
  const date = new Date(dateString + "T00:00:00");

  return date.toLocaleDateString("id-ID", {
    day: "2-digit",
    month: "long",
    year: "numeric"
  });
}

// Membuat isi laporan
function generateReport() {
  const vehicle = getVehicleData();
  const report = document.getElementById("report");

  let categoriesHTML = "";

  inspectionData.forEach((category, categoryIndex) => {
    let rows = "";

    category.items.forEach((item, itemIndex) => {
      const key = `${categoryIndex}-${itemIndex}`;
      const answer = answers[key];

      const selectedText =
        answer.choice === 2 && item[3] === "custom"
          ? `ISI SENDIRI: ${answer.custom}`
          : answer.value;

      rows += `
        <tr>
          <td>${escapeHTML(item[0])}</td>
          <td>${escapeHTML(selectedText)}</td>
        </tr>
      `;
    });

    categoriesHTML += `
      <section class="report-category">
        <h2>${escapeHTML(category.category)}</h2>

        <table class="report-table">
          <thead>
            <tr>
              <th>ITEM PEMERIKSAAN</th>
              <th>HASIL INSPEKSI</th>
            </tr>
          </thead>
          <tbody>
            ${rows}
          </tbody>
        </table>
      </section>
    `;
  });

  report.innerHTML = `
    <div class="report-header">
      <h1>VEHICLE INSPECTION REPORT</h1>
      <p>LAPORAN HASIL PEMERIKSAAN KENDARAAN</p>
    </div>

    <div class="report-info">
      <div><strong>TANGGAL MASUK</strong>: ${escapeHTML(formatDate(vehicle.tanggal))}</div>
      <div><strong>NAMA VENDOR</strong>: ${escapeHTML(vehicle.vendor)}</div>
      <div><strong>NOPOL</strong>: ${escapeHTML(vehicle.nopol.toUpperCase())}</div>
      <div><strong>MERK / JENIS</strong>: ${escapeHTML(vehicle.merk)}</div>
      <div><strong>WARNA</strong>: ${escapeHTML(vehicle.warna)}</div>
      <div><strong>TAHUN</strong>: ${escapeHTML(vehicle.tahun)}</div>
    </div>

    ${categoriesHTML}

    <div class="report-footer">
      Dokumen dibuat secara digital melalui Inspector Web.
    </div>
  `;

  return report;
}

// Notifikasi
function showNotification(message, type) {
  notification.textContent = message;
  notification.className = `notification ${type}`;

  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: "smooth"
  });
}

// Generate dan download JPG
async function downloadJPG() {
  if (!validateForm()) return;

  if (typeof html2canvas !== "function") {
    showNotification(
      "Library pembuat JPG belum termuat. Periksa koneksi internet lalu muat ulang halaman.",
      "error"
    );
    return;
  }

  const button = document.getElementById("downloadButton");

  try {
    button.disabled = true;
    button.textContent = "Membuat JPG...";

    const report = generateReport();

    // Tunggu browser menyelesaikan layout laporan
    await new Promise(resolve => requestAnimationFrame(resolve));

    const canvas = await html2canvas(report, {
      scale: 3,
      backgroundColor: "#ffffff",
      useCORS: true,
      logging: false,
      windowWidth: 1300
    });

    const blob = await new Promise(resolve => {
      canvas.toBlob(resolve, "image/jpeg", 0.98);
    });

    if (!blob) {
      throw new Error("Gagal membuat file JPG.");
    }

    const vehicle = getVehicleData();

    const safeNopol = vehicle.nopol
      .toUpperCase()
      .replace(/[^A-Z0-9-]/g, "_");

    const fileName = `INSPEKSI_${safeNopol}_${vehicle.tanggal}.jpg`;

    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = url;
    link.download = fileName;

    document.body.appendChild(link);
    link.click();
    link.remove();

    setTimeout(() => URL.revokeObjectURL(url), 3000);

    showNotification("Laporan inspeksi berhasil dibuat dan diunduh!", "success");

  } catch (error) {
    console.error("Gagal membuat JPG:", error);

    showNotification(
      "Gagal membuat JPG. Silakan periksa Console browser untuk detail error.",
      "error"
    );

  } finally {
    button.disabled = false;
    button.textContent = "Generate & Download JPG";
  }
}

// Reset form
function resetForm() {
  if (!confirm("Apakah kamu yakin ingin menghapus seluruh data inspeksi?")) {
    return;
  }

  document.getElementById("tanggalMasuk").value = getToday();

  document.getElementById("namaVendor").value = "";
  document.getElementById("nopol").value = "";
  document.getElementById("merkJenis").value = "";
  document.getElementById("warna").value = "";
  document.getElementById("tahun").value = "";

  Object.keys(answers).forEach(key => delete answers[key]);

  notification.textContent = "";
  notification.className = "notification";

  renderChecklist();

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

// Event tombol
document.getElementById("downloadButton")
  .addEventListener("click", downloadJPG);

document.getElementById("resetButton")
  .addEventListener("click", resetForm);

// Jalankan aplikasi
renderChecklist();
