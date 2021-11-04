import { Scene } from "./Scene";

export class WebGLRenderer {
    ctx: CanvasRenderingContext2D | WebGLRenderingContext;
    constructor(ctx: CanvasRenderingContext2D | WebGLRenderingContext) {
        this.ctx = ctx;
        console.log('WebGLRenderer');
    }

    render(scene: Scene) {
        console.log("WebGLRenderer-Render-Scene")
    }
}