interface ICanvasInit {
    width: number;
    height: number
    init(el: HTMLCanvasElement): void;
}

export { ICanvasInit }