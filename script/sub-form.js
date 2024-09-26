const theTemplate = `
    <div class="sub-form">
        <div class="relative">
            <div class="rounded-md task-text flex flex-col justify-between min-h-[166px]">
                <div class="flex gap-1">
                    <p class="px-5 pt-5 grow">__task-text__</p>
                </div>
                <div
                    class="flex items-center justify-center gap-2  text-white bg-black rounded-md ">
                    <div
                        class="img-wrapper w-[120px] aspect-square relative shrink-0 left-[-30px] bottom-[-5px]">
                    
                        <input type="text" name="b64___input-name__" hidden required>
                        <input type="file" name="file___input-name__" hidden id="id___input-name__"
                            required type="file" accept="image/*" multiple>
                            <img src="" alt="" class="w-[120px] aspect-square">
                        <label for="id___input-name__"
                            class="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center rounded-2xl">
                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"
                                viewBox="0 0 56 56" fill="white">
                                <path
                                    d="M 47.6171 21.4023 C 48.8591 21.4023 49.5157 20.7227 49.5157 19.4805 L 49.5157 13.7383 C 49.5157 8.9102 47.0780 6.4961 42.1562 6.4961 L 36.4374 6.4961 C 35.1952 6.4961 34.5155 7.1758 34.5155 8.3711 C 34.5155 9.5898 35.1952 10.2696 36.4374 10.2696 L 42.1093 10.2696 C 44.4062 10.2696 45.7421 11.5118 45.7421 13.9492 L 45.7421 19.4805 C 45.7421 20.7227 46.4218 21.4023 47.6171 21.4023 Z M 8.3827 21.4023 C 9.6015 21.4023 10.2577 20.7227 10.2577 19.4805 L 10.2577 13.9492 C 10.2577 11.5118 11.5702 10.2696 13.9140 10.2696 L 19.5858 10.2696 C 20.8046 10.2696 21.4843 9.5898 21.4843 8.3711 C 21.4843 7.1758 20.8046 6.4961 19.5858 6.4961 L 13.8436 6.4961 C 8.9687 6.4961 6.4843 8.9102 6.4843 13.7383 L 6.4843 19.4805 C 6.4843 20.7227 7.1640 21.4023 8.3827 21.4023 Z M 17.8280 37.3867 L 37.6562 37.3867 C 39.2030 37.3867 40.3280 36.3086 40.3280 34.8086 L 40.3280 22.9023 C 40.3280 21.4023 39.2030 20.3242 37.6562 20.3242 L 34.0936 20.3242 C 33.5077 20.3242 33.2030 20.1602 32.7108 19.5742 L 32.2187 18.9649 C 31.6796 18.2852 31.0233 17.9805 30.2265 17.9805 L 25.3046 17.9805 C 24.4608 17.9805 23.8046 18.2852 23.2655 18.9649 L 22.7733 19.5742 C 22.2811 20.1602 21.9999 20.3242 21.4608 20.3242 L 17.8280 20.3242 C 16.2811 20.3242 15.2030 21.4023 15.2030 22.9023 L 15.2030 34.8086 C 15.2030 36.3086 16.2811 37.3867 17.8280 37.3867 Z M 27.7655 33.9414 C 24.6484 33.9414 22.1171 31.3867 22.1171 28.2696 C 22.1171 25.1055 24.6484 22.5742 27.7655 22.5742 C 30.9296 22.5742 33.4374 25.1055 33.4374 28.2696 C 33.4374 31.3867 30.9296 33.9414 27.7655 33.9414 Z M 27.7655 32.2774 C 29.9921 32.2774 31.7968 30.4961 31.7968 28.2696 C 31.7968 25.9961 29.9921 24.2149 27.7655 24.2149 C 25.5389 24.2149 23.7577 25.9961 23.7577 28.2696 C 23.7577 30.4961 25.5389 32.2774 27.7655 32.2774 Z M 13.8436 49.5039 L 19.5858 49.5039 C 20.8046 49.5039 21.4843 48.8242 21.4843 47.6289 C 21.4843 46.4102 20.8046 45.7305 19.5858 45.7305 L 13.9140 45.7305 C 11.5702 45.7305 10.2577 44.4883 10.2577 42.0508 L 10.2577 36.5196 C 10.2577 35.2774 9.5780 34.5977 8.3827 34.5977 C 7.1405 34.5977 6.4843 35.2774 6.4843 36.5196 L 6.4843 42.2383 C 6.4843 47.0898 8.9687 49.5039 13.8436 49.5039 Z M 36.4374 49.5039 L 42.1562 49.5039 C 47.0780 49.5039 49.5157 47.0664 49.5157 42.2383 L 49.5157 36.5196 C 49.5157 35.2774 48.8360 34.5977 47.6171 34.5977 C 46.3984 34.5977 45.7421 35.2774 45.7421 36.5196 L 45.7421 42.0508 C 45.7421 44.4883 44.4062 45.7305 42.1093 45.7305 L 36.4374 45.7305 C 35.1952 45.7305 34.5155 46.4102 34.5155 47.6289 C 34.5155 48.8242 35.1952 49.5039 36.4374 49.5039 Z" />
                            </svg>
                            <span
                                class="items-center justify-center gap-1 px-2 py-1 font-bold text-white rounded-md">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                    fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                    <path
                                        d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                    <path fill-rule="evenodd"
                                        d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z" />
                                </svg>
                                <span>Ganti File</span>
                            </span>
                        </label>
                    </div>
                    <div class="w-full mt-[12px] pb-2 ms-[-30px] me-[10px]">
                        <p class="px-3 text-white text-[10px]">Berikan angka penilaian untuk point berikut
                            ini.
                        </p>
                        <range-slider name="score___input-name__" class="w-full">
                        </range-slider>
                                <p
                    class="z-10 py-1 mt-9 text-center border-2 border-white rounded-md task-footer">
                    Ukuran Image maks 2mb
                </p>
                                <div class="flex">
                                    <p
                    class="z-10 text-black bg-white mt-2 justify-center w-[100px] text-center border-2 border-white rounded-md count-item-title">
                Jumlah File 
                </p>
                    <p
                    class="ms-2 z-10 mt-2 justify-center w-[100px] text-center border-2 border-white rounded-md count-item">
            0
                </p>
                </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
`;
class SubForm extends HTMLElement {
  constructor() {
    super();
    this.template = theTemplate;
  }
  connectedCallback() {
    this.setAttribute("id", this.getAttribute("name"));
    this.template = this.template.replaceAll(
      "__input-name__",
      this.getAttribute("name")
    );
    this.template = this.template.replace(
      "__task-text__",
      this.getAttribute("task-text")
    );
    this.render();
  }
  render() {
    this.innerHTML = this.template;
    this.addEvent();
  }
  addEvent() {
    const subForm = this;
    const img = this.querySelector(".img-wrapper img");
    const inputFile = this.querySelector(
      `input[name=file_${this.getAttribute("name")}]`
    );
    const inputB64 = this.querySelector(
      `input[name=b64_${this.getAttribute("name")}]`
    );
    const countItem = this.querySelector(".count-item");
    const event = new CustomEvent("img-filled");

    inputFile.addEventListener("change", () => {
      const files = inputFile.files;
      inputB64.value = "";
      img.src = "";
      img.classList.remove("is-filled");

      if (files.length > 0) {
        const reader = new FileReader();
        const file = files[0];
        reader.onload = function (e) {
          img.src = e.target.result;
          img.classList.add("is-filled");
          inputB64.value = e.target.result;
          document.querySelector("form").dispatchEvent(event);
        };
        reader.readAsDataURL(file);
      }
      countItem.textContent = files.length;
      document.querySelector("form").dispatchEvent(event);
    });
  }
}

customElements.define("sub-form", SubForm);
