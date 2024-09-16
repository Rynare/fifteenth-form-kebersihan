document.addEventListener("DOMContentLoaded", () => {
  const tanggalSekarang = new Date();

  document.querySelector(".current-date").textContent =
    `${["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"][
    tanggalSekarang.getDay()
    ]
    }, ` +
    `${tanggalSekarang.getDate()} ` +
    `${[
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "Mei",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Okt",
      "Nov",
      "Des",
    ][tanggalSekarang.getMonth()]
    } ` +
    `${tanggalSekarang.getFullYear()}`;
  document.querySelector("input[type=date]").value = new Date()
    .toISOString()
    .split("T")[0];
});
