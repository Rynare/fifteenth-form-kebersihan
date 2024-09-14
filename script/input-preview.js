const inputPreviewWrapper = `
  <input hidden type="text" name="&&input-b64-name&&"/>
  <input
    type="file"
    capture="environment"
    accept="image/*"
    is="image-form"
    hidden
    name="&&input-file-name&&"
    id="&&input-file-id&&"
  />
  <label for="&&input-file-id&&" class="flex items-center gap-2">
    <div class="rounded-full take-pict aspect-square w-[44px] flex justify-center items-center">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera" viewBox="0 0 16 16">
        <path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4z"/>
        <path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5m0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7M3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"/>
      </svg>
    </div>
  </label>
`;
class InputPreview extends HTMLElement {
  constructor() {
    super();
    this.previewContainer = document.createElement("div");
    this.strHtmlTemplate = inputPreviewWrapper;
  }
  connectedCallback() {
    this.preparingTemplate();
    this.renderPreviewContainer();
    this.renderInputWrapper();
  }
  preparingTemplate() {
    this.previewContainer.innerHTML = `
      <p class="text-red-500 text-xs text-center w-full">Klik gambar untuk menghapus!</p>
      <div class="preview-wrapper"> </div>
    `;
    this.strHtmlTemplate = this.strHtmlTemplate.replace(
      "&&input-b64-name&&",
      `b64_${this.getAttribute("name")}[]`
    );
    this.strHtmlTemplate = this.strHtmlTemplate.replace(
      "&&input-file-name&&",
      `file_${this.getAttribute("name")}[]`
    );
    this.strHtmlTemplate = this.strHtmlTemplate.replaceAll(
      "&&input-file-id&&",
      `file_${this.getAttribute("name")}[]`
    );
  }
  renderPreviewContainer() {
    this.previewContainer.classList.add("image-preview-container");
    this.appendChild(this.previewContainer);
  }
  renderInputWrapper() {
    const ipWrapper = this;
    const template = document.createElement("div");
    const previewContainer = this.previewContainer;

    template.classList.add("input-wrapper");
    template.innerHTML = this.strHtmlTemplate;
    this.appendChild(template);
    template
      .querySelector(".input-wrapper input[is=image-form]")
      .addEventListener("change", (event) => {
        const input = event.target;
        const file = input.files[0];

        if (file) {
          const img = document.createElement("img");
          const reader = new FileReader();
          reader.onload = function (e) {
            template.querySelector("input[hidden]").value = e.target.result;

            img.src = e.target.result;
            previewContainer.querySelector(".preview-wrapper").appendChild(img);
            template.querySelector("label").remove();

            img.addEventListener("click", () => {
              if (confirm("Ingin menghapus foto ini?")) {
                img.remove();
                template.remove();
              }
            });

            input.removeAttribute("id");
            input.hidden = true;

            ipWrapper.renderInputWrapper();
          };
          reader.readAsDataURL(file);
        }
      });
  }
}
customElements.define("input-preview", InputPreview);
