import { ICanvasContext } from "../Interfaces/ICanvasContext";
import { Scene } from "./Scene";

export class WebGLRenderer {
    ctx;
    constructor(params: ICanvasContext) {
        this.ctx = params.ctx;
        console.log('WebGLRenderer');
    }

    render(scene: Scene) {
        console.log("WebGLRenderer-Render-Scene")
    }
}