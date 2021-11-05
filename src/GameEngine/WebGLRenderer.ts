import { ICanvasContext } from "../Interfaces/ICanvasContext";
import { IRenderer } from "../Interfaces/IRenderer";
import { Scene } from "./Scene";

export class WebGLRenderer implements IRenderer {
    ctx;

    constructor(params: ICanvasContext) {
        this.ctx = params.ctx;
        console.log('WebGLRenderer');
    }

    render(scene: Scene): void {
        console.log("WebGLRenderer-Render-Scene")
    }
}