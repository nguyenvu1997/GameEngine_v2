import { Scene } from "./Scene.js";

export class SceneManager {
    scenes: Scene[] = [];
    currentScene: Scene;

    addScene(scene: Scene) {
        this.scenes.push(scene)
        if (this.scenes.length == 1) {
            this.currentScene = scene;
        }
    }
}