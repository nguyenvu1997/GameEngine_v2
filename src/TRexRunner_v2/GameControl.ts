import { GameEngine } from "../GameEngine/GameEngine.js";
import { Scene } from "../GameEngine/Scene.js";
import { Control } from "../GameEngine/Control.js";
import { ICanvasContext } from "../Interfaces/ICanvasContext.js";

export class GameControl {
    static scenes: Scene[];
    static gameEngine: GameEngine;
    static canvasContext: ICanvasContext;
    static currentScene: Scene;
    static width: number;
    static height: number;
    static ctx;

    constructor(gameEngine: GameEngine) {
        Control.handleInput();
        GameControl.gameEngine = gameEngine;
        GameControl.canvasContext = gameEngine.canvas.canvasContext;
        GameControl.ctx = gameEngine.canvas.canvasContext.ctx;
        GameControl.currentScene = gameEngine.sceneManager.currentScene;
        GameControl.scenes = gameEngine.sceneManager.scenes;
        GameControl.width = gameEngine.canvas.width;
        GameControl.height = gameEngine.canvas.height;
    }

    static run(scene: Scene) {
        GameControl.currentScene = scene;
    }
}