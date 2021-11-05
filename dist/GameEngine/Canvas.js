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
            this.canvasContext = {
                ctx: el.getContext("2d")
            };
            this.renderer = new CanvasRenderer({
                ctx: this.canvasContext.ctx
            });
        }
        else if (params['renderType'] == 'webgl') {
            this.canvasContext = {
                ctx: el.getContext("webgl")
            };
            this.renderer = new WebGLRenderer({
                ctx: this.canvasContext.ctx
            });
        }
        else {
            throw ('Not exist render type:' + params['renderType']);
        }
    }
}
