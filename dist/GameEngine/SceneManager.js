export class SceneManager {
    constructor() {
        this.scenes = [];
    }
    addScene(scene) {
        this.scenes.push(scene);
        if (this.scenes.length == 1) {
            this.currentScene = scene;
        }
    }
}
