import { IImageObject } from "../Interfaces/IImageObject.js";

export class ImageObject implements IImageObject {
    imageUrl: string;
    sx: number;
    sy: number;
    sw: number;
    sh: number;
    x: number;
    y: number;
    width: number;
    height: number;
    image = new Image();

    constructor(imageUrl: string, sx: number, sy: number, sw: number, sh: number, x: number, y: number, width: number, height: number) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height
        this.imageUrl = imageUrl;
        this.sx = sx;
        this.sy = sy;
        this.sw = sw;
        this.sh = sh;
        this.image.src = imageUrl
    }
}