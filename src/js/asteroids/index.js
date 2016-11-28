import { Game, Scene, AssetsLoader } from '../engine';
import Player from './objects/Player';
import StarField from './objects/StarField';
import RockField from './objects/RockField';
import Map from './objects/Map';
import PlayerModel from './models/PlayerModel';

require('../../scss/styles.scss');

let assetsLoader = new AssetsLoader();
let scene = new Scene();
let game = new Game(scene);
let playerModel = new PlayerModel();
let player = new Player(playerModel);

// generate a starfield with 300 stars
let starField = new StarField(playerModel, 300);

// generate a rockfield
let rockField = new RockField(playerModel);

// create the game map
let map = new Map();

// track the game objects
map.add([
  player,
  rockField,
]);

let initGame = () => {
  // center player
  playerModel.x = (scene.width - playerModel.size) * 0.5;
  playerModel.y = (scene.height - playerModel.size) * 0.5;

  // render starfield, player and map
  scene.add([
    starField,
    rockField,
    player,
    map
  ]);
};

// load the laser sound
assetsLoader.load([
  './assets/laser-thum.mp3'
]).then(initGame);
