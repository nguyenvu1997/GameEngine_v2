import { CanvasRenderer } from "../GameEngine/CanvasRenderer.js";
import { Scene } from "../GameEngine/Scene.js";
import { WebGLRenderer } from "../GameEngine/WebGLRenderer.js";

interface IRenderer {
    render(scene: Scene): void;
}

export { IRenderer }

