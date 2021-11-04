import { GameEngine } from "../GameEngine/GameEngine.js";
import { Scene } from "../GameEngine/Scene.js";
import { Control } from "../GameEngine/Control.js";

export class GameControl {
    static scenes: Scene[];
    static gameEngine: GameEngine;
    static ctx: CanvasRenderingContext2D;
    static currentScene: Scene;
    static width: number;
    static height: number;

    constructor(gameEngine: GameEngine) {
        Control.handleInput();
        GameControl.gameEngine = gameEngine;
        GameControl.ctx = gameEngine.canvas.ctx;
        GameControl.currentScene = gameEngine.sceneManager.currentScene;
        GameControl.scenes = gameEngine.sceneManager.scenes;
        GameControl.width = gameEngine.canvas.width;
        GameControl.height = gameEngine.canvas.height;
    }

    static run(scene: Scene) {
        GameControl.currentScene = scene;
    }
}