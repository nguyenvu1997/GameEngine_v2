import { ImageObject } from "../../GameEngine/ImageObject.js";
import { Scene } from "../../GameEngine/Scene.js";
import { TextObject } from "../../GameEngine/TextObject.js";
import { Control } from "../../GameEngine/Control.js";
import { GameControl } from "../GameControl.js";
import { GamePlay } from "./GamePlay.js";
export class GameOpen extends Scene {
    constructor() {
        super();
        this.objectList = [];
        this.imageUrl = "./img/200-offline-sprite.png";
        this.image = new Image();
        this.textStart = new TextObject("PRESS SPACE TO START GAME", 1500 / 2 + 45, 600 / 2 - 20, 'center', 'black', '30');
        this.ground = new ImageObject(this.imageUrl, 0, 100, 2300, 500, 0, 568, 2000, 500);
        this.start = new ImageObject(this.imageUrl, 75, 0, 90, 100, 50, 500, 99, 100);
        this.objectList.push(this.textStart);
        this.objectList.push(this.ground);
        this.objectList.push(this.start);
    }
    update(time, delta) {
        if (Control.keys['Space']) {
            GameControl.run(new GamePlay());
        }
    }
}
