import { GameEngine } from "../GameEngine/GameEngine.js";
import { GameLoop } from "../GameEngine/GameLoop.js";
import { GameControl } from "./GameControl.js";
import { GameOpen } from "./Scenes/GameOpen.js";
import { GameOver } from "./Scenes/GameOver.js";
import { GamePlay } from "./Scenes/GamePlay.js";
const config = {
    'renderType': 'canvas' // webgl or canvas
};
let gameLoop = new GameLoop();
let tRexGame = new GameEngine(config);
tRexGame.addScene(new GameOpen());
tRexGame.addScene(new GamePlay());
tRexGame.addScene(new GameOver());
const gameControl = new GameControl(tRexGame);
gameLoop.loop(tRexGame);
