import { Scene } from "../../GameEngine/Scene.js";
import { randomIntInRange } from "../../Utils/RandomInt.js";
import { renderImage } from "../../Utils/RenderCanvas.js";
import { GameControl } from "../GameControl.js";
import { Bird } from "../Objects/Bird.js";
import { Castus } from "../Objects/Castus.js";
import { Cloud } from "../Objects/Cloud.js";
import { Ground } from "../Objects/Ground.js";
import { Player } from "../Objects/Player.js";
import { Score } from "../Objects/Score.js";
import { GameOver } from "./GameOver.js";

export class GamePlay extends Scene {
    objectList = [];
    score: number;
    gameScore: Score;
    high: number;
    highScore: Score;
    initialSpawnTimer: number = 200;
    spawnTimer: number = this.initialSpawnTimer;
    cloud: Cloud;
    clouds = [];
    bird: Bird;
    castus: Castus;
    obstacles = [];
    ground: Ground;
    player: Player;
    isAlive = true;

    readonly imgUrl: string = "./img/200-offline-sprite.png";

    constructor(params?) {
        super();

        this.score = 0;
        this.high = 0;

        if (params) {
            this.high = params['high']
        }

        this.gameScore = new Score("Score: " + this.score, 25, 25, "left", "black", "20");
        this.highScore = new Score("High Score: " + this.high, 1500, 25, "right", "black", "20");

        this.ground = new Ground(this.imgUrl, 0, 100, 2300, 500, 0, 568, 2000, 500);
        this.player = new Player(this.imgUrl, 75, 0, 85, 100, 30, 200, 85, 100);

        this.objectList.push(this.gameScore, this.highScore, this.ground, this.player)
    }

    spawnCloud() {
        this.cloud = new Cloud(this.imgUrl, 175, 0, 85, 100, 1500, 400, 85, 100);
        this.clouds.push(this.cloud);
    }

    spawnObstacle() {
        let type = randomIntInRange(0, 2);

        this.castus = new Castus(this.imgUrl, 850, 0, 53, 100, 1500, 500, 52, 100)
        this.bird = new Bird(this.imgUrl, 260, 0, 90, 100, 1500, 500, 90, 100)

        if (type == 1) {
            this.obstacles.push(this.castus);
        } else {
            this.obstacles.push(this.bird);
        }
    }

    update(time: number, delta: number) {
        GameControl.ctx.clearRect(0, 0, 1500, 600);

        // Score
        this.score++;
        this.gameScore.text = "Score: " + this.score;

        if (this.isAlive) {
            if (this.score > this.high) {
                this.high = this.score;
                this.highScore.text = "High Score: " + this.high;
            }
        } else {
            this.isAlive = true;
            this.score = 0;
        }

        this.objectList.forEach(element => {
            element.update();
        });

        // Spawn clouds and obstacles
        this.spawnTimer--;
        if (this.spawnTimer <= 0) {
            this.spawnCloud();
            this.spawnObstacle();
            this.spawnTimer = this.initialSpawnTimer - 12;

            if (this.spawnTimer < 60) {
                this.spawnTimer = 60;
            }
        }

        for (let i = 0; i < this.clouds.length; i++) {
            let c = this.clouds[i];
            c.update(time, delta);
            renderImage(c, GameControl.ctx);
        }

        for (let i = 0; i < this.obstacles.length; i++) {
            let o = this.obstacles[i];
            if (Player.position.x < o.x + o.width && Player.position.x + Player.position.width > o.x &&
                Player.position.y < o.y + o.height && Player.position.y + Player.position.height > o.y) {
                this.obstacles = []
                this.isAlive = false;
                GameControl.run(new GameOver({
                    'score': this.score,
                    'high': this.high
                }));
            }
            o.update(time, delta);
            renderImage(o, GameControl.ctx);
        }
    }
}