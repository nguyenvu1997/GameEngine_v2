import { Scene } from "../GameEngine/Scene.js";

interface IRenderer {
    render(scene: Scene): void;
}

export { IRenderer }

