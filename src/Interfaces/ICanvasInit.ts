interface ICanvasInit {
    width: number;
    height: number
    ctx: CanvasRenderingContext2D | WebGLRenderingContext;
    init(el: HTMLCanvasElement): void;
}

export { ICanvasInit }