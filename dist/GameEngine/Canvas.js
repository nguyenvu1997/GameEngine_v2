export class Canvas {
    constructor() {
        this.width = 1500;
        this.height = 600;
    }
    init(el) {
        el.height = this.height;
        el.width = this.width;
        this.ctx = el.getContext("2d");
    }
}
