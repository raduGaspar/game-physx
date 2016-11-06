import { SquareModel, SquareCtrl, SquareView } from './square';
import { Game, Scene } from '../engine';

require('../../scss/styles.scss');

const scene = new Scene(20, 33, 400, 200);
const game = new Game(scene);

const squareModel = new SquareModel();
const squareCtrl = new SquareCtrl(squareModel);
const squareView = new SquareView(squareModel, squareCtrl);

scene.add([
  squareView,
]);
