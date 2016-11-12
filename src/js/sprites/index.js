import { Game, Scene, SpriteSheet, AnimatedSprite, AssetsLoader } from '../engine';

require('../../scss/styles.scss');

let assetsLoader = new AssetsLoader();
let scene = new Scene();
let game = new Game(scene);
let sheets = {};
let initGame = () => {
  // create an AnimatedSprite using the Ryu sprite sheet
  let ryuAnim = new AnimatedSprite(50, 50, sheets.ryu, 0, 9, true, 10);

  // add the animated sprite sheet to the scene
  scene.add([
    ryuAnim
  ]);
};

assetsLoader.load([
  './assets/ryu.png',
]).then(function(result) {
  // create a new SpriteSheet with the loaded image
  sheets.ryu = new SpriteSheet(result.ryu, 78, 130);

  // initialize the game
  initGame();
});