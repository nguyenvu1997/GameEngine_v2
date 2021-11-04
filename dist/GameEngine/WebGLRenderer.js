export class WebGLRenderer {
    constructor(params) {
        this.ctx = params.ctx;
        console.log('WebGLRenderer');
    }
    render(scene) {
        console.log("WebGLRenderer-Render-Scene");
    }
}
