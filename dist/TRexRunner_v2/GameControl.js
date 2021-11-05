import { Control } from "../GameEngine/Control.js";
export class GameControl {
    constructor(gameEngine) {
        Control.handleInput();
        GameControl.gameEngine = gameEngine;
        GameControl.canvasContext = gameEngine.canvas.canvasContext;
        GameControl.ctx = gameEngine.canvas.canvasContext.ctx;
        GameControl.currentScene = gameEngine.sceneManager.currentScene;
        GameControl.scenes = gameEngine.sceneManager.scenes;
        GameControl.width = gameEngine.canvas.width;
        GameControl.height = gameEngine.canvas.height;
    }
    static run(scene) {
        GameControl.currentScene = scene;
    }
}
