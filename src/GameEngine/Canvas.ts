import { ICanvasInit } from "../Interfaces/ICanvasInit.js";

export class Canvas implements ICanvasInit {
    width: number = 1500;
    height: number = 600;
    ctx: CanvasRenderingContext2D | WebGLRenderingContext;

    init(el: HTMLCanvasElement, params?) {
        el.height = this.height;
        el.width = this.width;
        if (params['renderType'] == 'canvas') {
            this.ctx = el.getContext("2d");
        } else if (params['renderType'] == 'webgl') {
            this.ctx = el.getContext("webgl");
        }

    }
}