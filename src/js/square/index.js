import { Game, Scene } from '../engine';

require('../../scss/styles.scss');

let movementMultiplier = 1;

class Square extends Scene {
  constructor(x=0, y=0, size=40, color='#900') {
    super();
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = color;
  }
  update() {
    this.x += 1 * movementMultiplier;
    this.y += 1.5 * movementMultiplier;
    if(this.SHIFT) {
      movementMultiplier = 2;
    } else {
      movementMultiplier = 1;
    }
    Scene.wrap(this);
  }
  render() {
    this.ctx.save();
    this.ctx.beginPath();
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x, this.y, this.size, this.size);
    this.ctx.closePath();
    this.ctx.restore();
  }
};

// create scenes
const sceneA = new Scene(20, 33, 400, 200);
const sceneB = new Scene(sceneA.x+sceneA.width+10, 33, 400, 200);

// create squares
const squareA = new Square();
const squareB = new Square(130, 100, 20, '#090');

// add scenes to game
const game = new Game([
  sceneA,
  sceneB
]);

// add squares to scene
sceneA.add(squareA);
sceneB.add(squareB);
