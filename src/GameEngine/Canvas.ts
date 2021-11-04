import { ICanvasInit } from "../Interfaces/ICanvasInit.js";

export class Canvas implements ICanvasInit {
    width: number = 1500;
    height: number = 600;
    ctx: CanvasRenderingContext2D;

    init(el: HTMLCanvasElement) {
        el.height = this.height;
        el.width = this.width;
        this.ctx = el.getContext("2d");
    }
}