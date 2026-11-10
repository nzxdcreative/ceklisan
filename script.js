
// ==========================================
// INSPECTOR WEB - MAIN JAVASCRIPT
// ==========================================

// GANTI DENGAN URL WEB APP GOOGLE APPS SCRIPT
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxzGxu-i1kdaZJGeLWP8-K0nC29dcuJSmqyRA0_9EIWEwmtxXhMTEfvF0JxCQvDI3-VCQ/exec";

// ==========================================
// CHECKLIST DATA
// ==========================================

const inspectionData = [
    {
        title: "TEST INTERIOR",
        items: [
            ["POWER WINDOW", "HIDUP", "ERROR"],
            ["RETRACK SPION", "HIDUP", "ERROR"],
            ["SENTRAL LOCK", "HIDUP", "ERROR"],
            ["WIPER", "HIDUP", "ERROR"],
            ["SEIN & LAMPU DEPAN", "HIDUP", "ERROR/MATI"],
            ["AC", "DINGIN", "PANAS"],
            ["STEERING WHEEL BUTTON", "BERFUNGSI", "ERROR/MATI"],
            ["STEERING TEST", "NORMAL", "ADA KERUSAKAN"],
            ["POWER SLIDING DOOR", "HIDUP", "MATI/TIDAK BERFUNGSI"],
            ["POWER TRUNK", "HIDUP", "MATI/TIDAK ADA"]
        ]
    },
    {
        title: "EXTERIOR MESIN",
        items: [
            ["AKI", "ADA", "TIDAK ADA"],
            ["MESIN", "ADA", "TIDAK ADA"],
            ["TRANSMISI", "ADA", "TIDAK ADA"],
            ["POWER STEERING", "ADA", "TIDAK ADA"]
        ]
    },
    {
        title: "PENGECEKAN BODY",
        items: [
            ["DEPAN", "AMAN", "BEKAS KENA/NYUNDUL"],
            ["KAP MESIN", "AMAN", "BONGKARAN/GANTIAN"],
            ["BELAKANG", "AMAN", "BEKAS KENA/NYUNDUL"],
            ["PINTU BAGASI", "AMAN", "BEKAS KENA/NYUNDUL"],
            ["SAMPING KIRI", "AMAN", "BEKAS KENA"],
            ["SAMPING KANAN", "AMAN", "BEKAS KENA"],
            ["PINTU DEPAN KIRI", "AMAN", "BEKAS REPAIR/GANTIAN"],
            ["PINTU DEPAN KANAN", "AMAN", "BEKAS REPAIR/GANTIAN"],
            ["PINTU TENGAH KIRI", "AMAN", "BEKAS REPAIR/GANTIAN"],
            ["PINTU TENGAH KANAN", "AMAN", "BEKAS REPAIR/GANTIAN"]
        ]
    }
];

// ==========================================
// OPENING PAGE
// ==========================================

function newInspection() {
    document.getElementById("openingPage").classList.add("hidden");
    document.getElementById("inspectionPage").classList.remove("hidden");

    document.getElementById("tanggalMasuk").value =
        new Date().toLocaleDateString("en-CA");

    window.scrollTo(0, 0);
}

function backToHome() {
    document.getElementById("inspectionPage").classList.add("hidden");
    document.getElementById("openingPage").classList.remove("hidden");

    window.scrollTo(0, 0);
}

// ==========================================
// RENDER CHECKLIST
// ==========================================

function renderChecklist() {
    const container = document.getElementById("checklistContainer");

    container.innerHTML = "";

    inspectionData.forEach((category, categoryIndex) => {

        const categoryElement = document.createElement("div");

        categoryElement.className = "inspection-category";

        categoryElement.innerHTML = `
            <div class="category-title">
                ${category.title}
            </div>
        `;

        category.items.forEach((item, itemIndex) => {

            const itemId = `item-${categoryIndex}-${itemIndex}`;

            const row = document.createElement("div");

            row.className = "check-item";

            row.innerHTML = `
                <div class="item-name">
                    ${item[0]}
                </div>

                <div class="answer-area">

                    <div class="answer-buttons">

                        <button
                            type="button"
                            class="answer-btn"
                            id="${itemId}-good"
                            onclick="selectAnswer(
                                '${itemId}',
                                'good'
                            )">
                            ${item[1]}
                        </button>

                        <button
                            type="button"
                            class="answer-btn"
                            id="${itemId}-bad"
                            onclick="selectAnswer(
                                '${itemId}',
                                'bad'
                            )">
                            ${item[2]}
                        </button>

                    </div>

                    <input
                        type="text"
                        class="additional-input hidden"
                        id="${itemId}-note"
                        placeholder="Masukkan keterangan tambahan..."
                    >

                </div>
            `;

            categoryElement.appendChild(row);
        });

        container.appendChild(categoryElement);
    });
}

// ==========================================
// ANSWER SELECTION
// ==========================================

const inspectionAnswers = {};

function selectAnswer(itemId, answer) {

    const goodButton = document.getElementById(`${itemId}-good`);
    const badButton = document.getElementById(`${itemId}-bad`);
    const noteInput = document.getElementById(`${itemId}-note`);

    goodButton.classList.remove("selected-good");
    badButton.classList.remove("selected-bad");

    if (answer === "good") {

        goodButton.classList.add("selected-good");

        noteInput.classList.add("hidden");
        noteInput.value = "";

        inspectionAnswers[itemId] = {
            choice: "good",
            note: ""
        };

    } else {

        badButton.classList.add("selected-bad");

        noteInput.classList.remove("hidden");

        inspectionAnswers[itemId] = {
            choice: "bad",
            note: noteInput.value
        };

        noteInput.focus();
    }

    noteInput.oninput = function () {
        if (inspectionAnswers[itemId]) {
            inspectionAnswers[itemId].note = this.value;
        }
    };
}

// ==========================================
// RESET FORM
// ==========================================

function resetInspection() {

    const confirmation = confirm(
        "Apakah kamu yakin ingin menghapus semua data inspeksi ini?"
    );

    if (!confirmation) return;

    document.querySelectorAll(".form-group input").forEach(input => {
        input.value = "";
    });

    document.getElementById("tanggalMasuk").value =
        new Date().toLocaleDateString("en-CA");

    Object.keys(inspectionAnswers).forEach(key => {
        delete inspectionAnswers[key];
    });

    renderChecklist();

    showNotification("Form berhasil direset.");
}

// ==========================================
// NOTIFICATION
// ==========================================

function showNotification(message) {

    const notification = document.getElementById("notification");

    notification.textContent = message;
    notification.style.display = "block";

    setTimeout(() => {
        notification.style.display = "none";
    }, 3500);
}

// ==========================================
// COLLECT INSPECTION DATA
// ==========================================

function collectInspectionData() {

    const vehicle = {
        tanggalMasuk: document.getElementById("tanggalMasuk").value,
        vendor: document.getElementById("vendor").value.trim(),
        nopol: document.getElementById("nopol").value.trim().toUpperCase(),
        merk: document.getElementById("merk").value.trim(),
        warna: document.getElementById("warna").value.trim(),
        tahun: document.getElementById("tahun").value
    };

    const checklist = [];

    inspectionData.forEach((category, categoryIndex) => {

        category.items.forEach((item, itemIndex) => {

            const itemId = `item-${categoryIndex}-${itemIndex}`;
            const answer = inspectionAnswers[itemId];

            checklist.push({
                category: category.title,
                item: item[0],
                answer: answer
                    ? (answer.choice === "good" ? item[1] : item[2])
                    : "",
                note: answer ? answer.note : ""
            });
        });
    });

    return {
        tanggalMasuk: vehicle.tanggalMasuk,
        vendor: vehicle.vendor,
        nopol: vehicle.nopol,
        merk: vehicle.merk,
        warna: vehicle.warna,
        tahun: vehicle.tahun,
        status: "Draft",
        createdAt: new Date().toISOString(),
        checklist: checklist
    };
}

// ==========================================
// SAVE TO GOOGLE SHEETS
// ==========================================

async function saveInspection() {

    const button = document.getElementById("saveBtn");

    const data = collectInspectionData();

    if (!data.tanggalMasuk || !data.nopol || !data.merk) {
        showNotification("Tanggal, Nopol, dan Merk wajib diisi.");
        return;
    }

    const unanswered = data.checklist.filter(item => !item.answer);

    if (unanswered.length > 0) {
        showNotification(
            `Masih ada ${unanswered.length} item yang belum diperiksa.`
        );
        return;
    }

    if (
        !GOOGLE_SCRIPT_URL ||
        GOOGLE_SCRIPT_URL.includes("MASUKKAN_URL")
    ) {
        showNotification("URL Google Apps Script belum diatur.");
        return;
    }

    button.disabled = true;
    button.textContent = "Mengirim data...";

    try {

        await fetch(GOOGLE_SCRIPT_URL, {
            method: "POST",
            mode: "no-cors",
            headers: {
                "Content-Type": "text/plain;charset=utf-8"
            },
            body: JSON.stringify(data)
        });

        showNotification(
            "Permintaan penyimpanan dikirim. Periksa Google Sheets."
        );

    } catch (error) {

        console.error(error);

        showNotification("Gagal mengirim data. Periksa koneksi.");

    } finally {

        button.disabled = false;
        button.textContent = "Simpan Inspeksi";
    }
}

// ==========================================
// INITIALIZATION
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
    renderChecklist();
});
