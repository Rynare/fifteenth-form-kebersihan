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

  const form = document.querySelector("form");
  form.addEventListener("img-filled", event => {
    const validity = form.checkValidity()
    if (validity) {
      form.querySelector(".form-footer button").classList.remove("hidden")
    } else {
      form.querySelector(".form-footer button").classList.add("hidden")
    }
  })
});