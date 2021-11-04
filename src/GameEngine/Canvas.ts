import { ICanvasContext } from "../Interfaces/ICanvasContext.js";
import { ICanvasInit } from "../Interfaces/ICanvasInit.js";
import { IRenderer } from "../Interfaces/IRenderer.js";
import { CanvasRenderer } from "./CanvasRenderer.js";
import { WebGLRenderer } from "./WebGLRenderer.js";

export class Canvas implements ICanvasInit, ICanvasContext, IRenderer {
    width: number = 1500;
    height: number = 600;
    ctx: CanvasRenderingContext2D | WebGLRenderingContext;
    renderer: CanvasRenderer | WebGLRenderer;

    init(el: HTMLCanvasElement, params?) {
        el.height = this.height;
        el.width = this.width;

        if (params['renderType'] == 'canvas') {
            this.ctx = el.getContext("2d");
            this.renderer = new CanvasRenderer({
                ctx: this.ctx
            });
        } else if (params['renderType'] == 'webgl') {
            this.ctx = el.getContext("webgl");
            this.renderer = new WebGLRenderer({
                ctx: this.ctx
            });
        } else {
            throw ('Not exist render type:' + params['renderType'])
        }
    }
}