class ImageForm extends HTMLInputElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.addEventListener("change", function (event) {
      const files = event.target.files;

      if (files.length > 5) {
        console.log("You can only upload up to 5 images.");
        event.target.value = "";
      } else {
        console.log("Selected files:", files);
      }
    });
  }
}

customElements.define("image-form", ImageForm);
