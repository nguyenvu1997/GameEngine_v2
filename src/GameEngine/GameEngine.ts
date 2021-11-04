import { Canvas } from "./Canvas.js";
import { Scene } from "./Scene.js";
import { CanvasRenderer } from "./CanvasRenderer.js";
import { SceneManager } from "./SceneManager.js";
import { WebGLRenderer } from "./WebGLRenderer.js";

export class GameEngine {
    canvas: Canvas;
    renderer: CanvasRenderer | WebGLRenderer;
    sceneManager: SceneManager;

    constructor(config?) {
        this.canvas = new Canvas();
        this.canvas.init(<HTMLCanvasElement>document.querySelector("canvas"), config);

        if (config['renderType'] == 'webgl') {
            this.renderer = new WebGLRenderer(this.canvas.ctx);
        } else if (config['renderType'] == 'canvas') {
            this.renderer = new CanvasRenderer(this.canvas.ctx);
        }
        this.sceneManager = new SceneManager();
    }

    addScene(scene: Scene) {
        this.sceneManager.addScene(scene);
    }
}