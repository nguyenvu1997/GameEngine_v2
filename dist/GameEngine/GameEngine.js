import { Canvas } from "./Canvas.js";
import { CanvasRenderer } from "./CanvasRenderer.js";
import { SceneManager } from "./SceneManager.js";
import { WebGLRenderer } from "./WebGLRenderer.js";
export class GameEngine {
    constructor(config) {
        this.canvas = new Canvas();
        this.canvas.init(document.querySelector("canvas"), config);
        if (config['renderType'] == 'webgl') {
            this.renderer = new WebGLRenderer(this.canvas.ctx);
        }
        else if (config['renderType'] == 'canvas') {
            this.renderer = new CanvasRenderer(this.canvas.ctx);
        }
        this.sceneManager = new SceneManager();
    }
    addScene(scene) {
        this.sceneManager.addScene(scene);
    }
}
