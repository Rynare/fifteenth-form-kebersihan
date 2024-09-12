const inputPreviewWrapper = `
  <img src="" alt="" />
  <input hidden type="text" />
  <input
    type="file"
    id="imageFile"
    capture="environment"
    accept="image/*"
    is="image-form"
    hidden
  />
  <label for="" class="flex items-center gap-2">
    <span><svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      class="bi bi-upload"
      viewBox="0 0 16 16"
    >
      <path
        d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"
      />
      <path
        d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708z"
      />
    </svg></span>
    <span>Tambahkan Gambar</span>
  </label>
`;
class InputPreview extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.render();
  }
  render() {
    const ipWrapper = this;
    const template = document.createElement("div");
    template.classList.add("ip-wrapper");
    template.innerHTML = inputPreviewWrapper;
    this.appendChild(template);
    template
      .querySelector("input[hidden]")
      .setAttribute("name", `b64_${this.getAttribute("name")}[]`);
    template
      .querySelector("input[is=image-form]")
      .setAttribute("name", `file_${this.getAttribute("name")}[]`);
    template
      .querySelector("input[is=image-form]")
      .setAttribute("id", `id_${this.getAttribute("name")}`);
    template
      .querySelector("label")
      .setAttribute("for", `id_${this.getAttribute("name")}`);
    template
      .querySelector(".ip-wrapper input[is=image-form]")
      .addEventListener("change", (event) => {
        const input = event.target;
        const file = input.files[0];

        if (file) {
          const img = template.querySelector(".ip-wrapper img");
          const reader = new FileReader();

          reader.onload = function (e) {
            img.src = e.target.result;
            img.classList.remove("hidden");
            template.querySelector("input[hidden]").value = e.target.result;
            template
              .querySelector("input[hidden]")
              .setAttribute("required", true);
            input.setAttribute("required", true);
            input.removeAttribute("id");
            input.hidden = true;
            ipWrapper.render();
          };
          reader.readAsDataURL(file);
          img.addEventListener("click", () => {
            if (confirm("Ingin menghapus foto ini?")) {
              template.remove();
            }
          });
        }
      });
  }
}
customElements.define("input-preview", InputPreview);
