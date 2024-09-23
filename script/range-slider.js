const rawTemplate = `
    <div id="debt-amount-slider">
        <input type="radio" name="__name-slider__" id="id-__name-slider__-1" value="1" required>
        <label for="id-__name-slider__-1" data-debt-amount="1"></label>
        <input type="radio" name="__name-slider__" id="id-__name-slider__-2" value="2" required>
        <label for="id-__name-slider__-2" data-debt-amount="2"></label>
        <input type="radio" name="__name-slider__" id="id-__name-slider__-3" value="3" required>
        <label for="id-__name-slider__-3" data-debt-amount="3"></label>
        <input type="radio" name="__name-slider__" id="id-__name-slider__-4" value="4" required>
        <label for="id-__name-slider__-4" data-debt-amount="4"></label>
        <input type="radio" name="__name-slider__" id="id-__name-slider__-5" value="5" required>
        <label for="id-__name-slider__-5" data-debt-amount="5"></label>
        <div id="debt-amount-pos"></div>
    </div>
`

class RangeSlider extends HTMLElement {
    constructor() {
        super()
        this.template = rawTemplate
    }
    connectedCallback() {
        this.template = this.template.replaceAll("__name-slider__", this.getAttribute("name"))
        this.innerHTML = this.template
    }
}

customElements.define("range-slider", RangeSlider)