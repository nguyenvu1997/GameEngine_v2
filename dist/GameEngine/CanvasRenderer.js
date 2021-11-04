import { renderImage, renderText } from "../Utils/RenderCanvas.js";
import { ImageObject } from "./ImageObject.js";
import { TextObject } from "./TextObject.js";
export class CanvasRenderer {
    constructor(ctx) {
        this.ctx = ctx;
    }
    render(scene) {
        scene.objectList.forEach(obj => {
            if (obj instanceof ImageObject) {
                renderImage(obj, this.ctx);
            }
            else if (obj instanceof TextObject) {
                renderText(obj, this.ctx);
            }
            else {
                throw ('Cannot Rendering');
            }
        });
    }
}
