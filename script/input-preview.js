const inputPreviewWrapper = `
    <img src="" alt="" />
    <input hidden type="text"/>
    <input
      type="file"
      id="imageFile"
      capture="environment"
      accept="image/*"
      is="image-form"
    />
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
