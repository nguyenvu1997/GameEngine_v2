import { ICanvasContext } from "../Interfaces/ICanvasContext.js";
import { IRenderer } from "../Interfaces/IRenderer.js";
import { renderImage, renderText } from "../Utils/RenderCanvas.js";
import { ImageObject } from "./ImageObject.js";
import { Scene } from "./Scene.js";
import { TextObject } from "./TextObject.js";

export class CanvasRenderer {
    ctx;

    constructor(params: ICanvasContext) {
        this.ctx = params.ctx;
    }

    render(scene: Scene) {
        scene.objectList.forEach(obj => {
            if (obj instanceof ImageObject) {
                renderImage(obj, this.ctx)
            } else if (obj instanceof TextObject) {
                renderText(obj, this.ctx)
            } else {
                throw ('Cannot Rendering')
            }
        });
    }
}