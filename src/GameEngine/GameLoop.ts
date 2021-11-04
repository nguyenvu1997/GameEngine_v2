import { GameControl } from "../TRexRunner_v2/GameControl.js";
import { GameEngine } from "./GameEngine.js";

export class GameLoop {
    lastTime: number;

    constructor() {
        this.lastTime = window.performance.now();
    }

    loop(gameEngine: GameEngine) {
        const time = window.performance.now();
        const delta = window.performance.now() - this.lastTime;
        this.lastTime = time;

        let scene = GameControl.currentScene;
        scene.update(time, delta);
        gameEngine.renderer.render(scene)

        requestAnimationFrame(() => {
            this.loop(gameEngine);
        });
    }
}