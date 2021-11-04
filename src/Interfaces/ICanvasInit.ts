interface ICanvasInit {
    width: number;
    height: number
    ctx: CanvasRenderingContext2D;
    init(el: HTMLCanvasElement): void;
}

export { ICanvasInit }