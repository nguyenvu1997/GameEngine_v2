import { CanvasRenderer } from "./CanvasRenderer.js";
import { WebGLRenderer } from "./WebGLRenderer.js";
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
            this.renderer = new CanvasRenderer({
                ctx: this.ctx
            });
        }
        else if (params['renderType'] == 'webgl') {
            this.ctx = el.getContext("webgl");
            this.renderer = new WebGLRenderer({
                ctx: this.ctx
            });
        }
        else {
            throw ('Not exist render type:' + params['renderType']);
        }
    }
}
