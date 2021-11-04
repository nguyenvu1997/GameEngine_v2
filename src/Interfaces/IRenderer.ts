import { CanvasRenderer } from "../GameEngine/CanvasRenderer.js";
import { WebGLRenderer } from "../GameEngine/WebGLRenderer.js";

interface IRenderer {
    renderer: CanvasRenderer | WebGLRenderer;
}

export { IRenderer }