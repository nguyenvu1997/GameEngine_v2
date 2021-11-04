import { ImageObject } from "../../GameEngine/ImageObject.js";
import { Scene } from "../../GameEngine/Scene.js";
import { TextObject } from "../../GameEngine/TextObject.js";
import { Control } from "../../GameEngine/Control.js";
import { GameControl } from "../GameControl.js";
import { Score } from "../Objects/Score.js";
import { GamePlay } from "./GamePlay.js";

export class GameOver extends Scene {
    imgUrl: string = "./img/200-offline-sprite.png";
    objectList = [];
    gameOver: ImageObject;
    ground: ImageObject;
    die: ImageObject;
    textGO: TextObject;
    gameScore: Score;
    highScore: Score;
    score = 0;
    high = 0;

    constructor(params?) {
        super();

        if (params) {
            this.score = params['score']
            this.high = params['high']
        }

        this.gameOver = new ImageObject(this.imgUrl, 0, 0, 75, 100, GameControl.width / 2, GameControl.height / 2, 99, 100)
        this.textGO = new TextObject("GAME OVER", GameControl.width / 2 + 45, GameControl.height / 2 - 20, 'center', 'black', '30')
        this.ground = new ImageObject(this.imgUrl, 0, 100, 2300, 500, 0, 568, 2000, 500)
        this.die = new ImageObject(this.imgUrl, 2115, 0, 90, 100, 50, 500, 99, 100);
        this.gameScore = new Score("Score: " + this.score, 25, 25, "left", "black", "20")
        this.highScore = new Score("High Score: " + this.high, GameControl.width, 25, "right", "black", "20")

        this.objectList.push(this.gameOver)
        this.objectList.push(this.textGO)
        this.objectList.push(this.ground)
        this.objectList.push(this.die)
        this.objectList.push(this.gameScore)
        this.objectList.push(this.highScore)
    }

    update(time: number, delta: number) {
        GameControl.ctx.clearRect(0, 0, GameControl.width, GameControl.height);

        if (Control.keys['Space']) {
            GameControl.run(new GamePlay({
                'high': this.high
            }));
        }
    }
}