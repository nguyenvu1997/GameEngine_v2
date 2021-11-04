export class Canvas {
    constructor() {
        this.width = 1500;
        this.height = 600;
    }
    init(el, params) {
        el.height = this.height;
        el.width = this.width;
        if (params['renderType'] == 'canvas') {
            this.ctx = el.getContext("2d");
        }
        else if (params['renderType'] == 'webgl') {
            this.ctx = el.getContext("webgl");
        }
    }
}
