import { ICanvasImage } from "../Interfaces/ICanvasImage.js";

export class CanvasImage implements ICanvasImage {
    image = new Image();

    constructor(imageUrl: string) {
        this.image.src = imageUrl
    }
}