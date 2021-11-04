import { CanvasImage } from "../GameEngine/CanvasImage.js";
function renderImage(object, ctx) {
    const { imageUrl, sx, sy, sw, sh, x, y, width, height } = object;
    this.canvasImage = new CanvasImage(imageUrl);
    ctx.beginPath();
    ctx.drawImage(this.canvasImage.image, sx, sy, sw, sh, x, y, width, height);
    ctx.closePath();
}
function renderText(object, ctx) {
    const { text, x, y, align, color, size } = object;
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.font = size + "px sans-serif";
    ctx.textAlign = align;
    ctx.fillText(text, x, y);
    ctx.closePath();
}
export { renderImage, renderText };
