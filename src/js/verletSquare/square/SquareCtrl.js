import { Keyboard, KeyboardEvents } from '../../engine';

export default class SquareCtrl extends Keyboard {
  constructor(model) {
    super();

    const onKeyUp = () => {
      if(this.UP || this.DOWN) {
        this.model.accelerationY = 0;
        this.model.friction = 0.94;
        this.model.moving = false;
      }
      if(this.RIGHT || this.LEFT) {
        this.model.accelerationX = 0;
        this.model.friction = 0.96;
        this.model.moving = false;
      }
    }

    this.model = model;
    this.on(KeyboardEvents.KEY_UP, onKeyUp.bind(this));
  }

  update() {
    // change the accleration amount based on pressed key
    // apply friction; between 0 and 1 where:
    //   1 = no friction
    //   0 = maximum friction
    //   counter intuitive but fine for now
    // set moving flag to true
    if(this.UP) {
      this.model.accelerationY = -0.5;
      this.model.friction = 1;
      this.model.moving = true;
    }
    if(this.DOWN) {
      this.model.accelerationY = 0.5;
      this.model.friction = 1;
      this.model.moving = true;
    }
    if(this.LEFT) {
      this.model.accelerationX = -0.5;
      this.model.friction = 1;
      this.model.moving = true;
    }
    if(this.RIGHT) {
      this.model.accelerationX = 0.5;
      this.model.friction = 1;
      this.model.moving = true;
    }
  }
};
