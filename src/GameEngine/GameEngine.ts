import { Canvas } from "./Canvas.js";
import { Scene } from "./Scene.js";
import { SceneManager } from "./SceneManager.js";
import { IRenderer } from "../Interfaces/IRenderer.js";

export class GameEngine {
    canvas: Canvas;
    renderer: IRenderer;
    sceneManager: SceneManager;

    constructor(config?) {
        this.canvas = new Canvas();
        this.canvas.init(<HTMLCanvasElement>document.querySelector("canvas"), config);
        this.sceneManager = new SceneManager();
        this.renderer = this.canvas.renderer;
    }

    addScene(scene: Scene) {
        this.sceneManager.addScene(scene);
    }
}