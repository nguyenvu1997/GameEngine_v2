import { GameControl } from "../TRexRunner_v2/GameControl.js";
export class GameLoop {
    constructor() {
        this.lastTime = window.performance.now();
    }
    loop(gameEngine) {
        const time = window.performance.now();
        const delta = window.performance.now() - this.lastTime;
        this.lastTime = time;
        let scene = GameControl.currentScene;
        scene.update(time, delta);
        gameEngine.renderer.render(scene);
        requestAnimationFrame(() => {
            this.loop(gameEngine);
        });
    }
}
