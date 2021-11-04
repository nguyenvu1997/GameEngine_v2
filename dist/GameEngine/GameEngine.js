import { Canvas } from "./Canvas.js";
import { SceneManager } from "./SceneManager.js";
export class GameEngine {
    constructor(config) {
        this.canvas = new Canvas();
        this.canvas.init(document.querySelector("canvas"), config);
        this.sceneManager = new SceneManager();
        this.renderer = this.canvas.renderer;
    }
    addScene(scene) {
        this.sceneManager.addScene(scene);
    }
}
