export class WebGLRenderer {
    constructor(ctx) {
        this.ctx = ctx;
        console.log('WebGLRenderer');
    }
    render(scene) {
        console.log("WebGLRenderer-Render-Scene");
    }
}
