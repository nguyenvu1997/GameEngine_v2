export class ImageObject {
    constructor(imageUrl, sx, sy, sw, sh, x, y, width, height) {
        this.image = new Image();
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.imageUrl = imageUrl;
        this.sx = sx;
        this.sy = sy;
        this.sw = sw;
        this.sh = sh;
        this.image.src = imageUrl;
    }
}
