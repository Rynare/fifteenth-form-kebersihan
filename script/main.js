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

  window.prevTask = () => {
    document.querySelector(".splide__arrow.splide__arrow--prev").click();
  };

  window.nextTask = () => {
    document.querySelector(".splide__arrow.splide__arrow--next").click();
  };
});
