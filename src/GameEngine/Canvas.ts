import { ICanvasContext } from "../Interfaces/ICanvasContext.js";
import { ICanvasInit } from "../Interfaces/ICanvasInit.js";
import { IRenderer } from "../Interfaces/IRenderer.js";
import { CanvasRenderer } from "./CanvasRenderer.js";
import { WebGLRenderer } from "./WebGLRenderer.js";

export class Canvas implements ICanvasInit {
    width: number = 1500;
    height: number = 600;
    renderer: IRenderer;
    canvasContext: ICanvasContext;

    init(el: HTMLCanvasElement, params?) {
        el.height = this.height;
        el.width = this.width;

        if (params['renderType'] == 'canvas') {
            this.canvasContext = {
                ctx: el.getContext("2d")
            }
            this.renderer = new CanvasRenderer({
                ctx: this.canvasContext.ctx
            });
        } else if (params['renderType'] == 'webgl') {
            this.canvasContext = {
                ctx: el.getContext("webgl")
            }
            this.renderer = new WebGLRenderer({
                ctx: this.canvasContext.ctx
            });
        } else {
            throw ('Not exist render type:' + params['renderType'])
        }
    }
}

