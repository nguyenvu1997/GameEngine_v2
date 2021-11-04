import { Canvas } from "./Canvas.js";
import { CanvasRenderer } from "./CanvasRenderer.js";
import { SceneManager } from "./SceneManager.js";
export class GameEngine {
    constructor() {
        this.canvas = new Canvas();
        this.canvas.init(document.querySelector("canvas"));
        this.renderer = new CanvasRenderer(this.canvas.ctx);
        this.sceneManager = new SceneManager();
    }
    addScene(scene) {
        this.sceneManager.addScene(scene);
    }
}
