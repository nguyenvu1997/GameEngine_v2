import { Canvas } from "./Canvas.js";
import { Scene } from "./Scene.js";
import { CanvasRenderer } from "./CanvasRenderer.js";
import { SceneManager } from "./SceneManager.js";

export class GameEngine {
    canvas: Canvas;
    renderer: CanvasRenderer;
    sceneManager: SceneManager;

    constructor() {
        this.canvas = new Canvas();
        this.canvas.init(<HTMLCanvasElement>document.querySelector("canvas"));
        this.renderer = new CanvasRenderer(this.canvas.ctx);
        this.sceneManager = new SceneManager();
    }

    addScene(scene: Scene) {
        this.sceneManager.addScene(scene);
    }
}