import { VerletModel } from '../../engine';

export default class SquareModel extends VerletModel {
  constructor() {
    super();
    this.temporaryX = 0;
    this.temporaryY = 0;
    this.frictionX = 0;
    this.frictionY = 0;
    this.friction = 0;
    this.accelerationX = 0;
    this.accelerationY = 0;
    this.moving = false;
    this.size = 50; // size of square
  }

  update() {
    // store the current x and y positions
    this.temporaryX = this.x;
    this.temporaryY = this.y;

    // apply friction on the x and y axes
    this.frictionX = this.vx * this.friction;
    this.frictionY = this.vy * this.friction;

    // stop movement if vx or vy dip bellow 0.1
    if(!this.moving) {
      if(Math.abs(this.vx) < 0.1 && Math.abs(this.vy) < 0.1) {
        this.accelerationX = 0;
        this.accelerationY = 0;
        this.frictionX = 0;
        this.frictionY = 0;
      }
    }

    // change x and y positions based on acceleration and friction
    this.x += this.accelerationX + this.frictionX;
    this.y += this.accelerationY + this.frictionY;

    // set the previous x and y position to the temporary x and y values
    this.previousX = this.temporaryX;
    this.previousY = this.temporaryY;
  }
};
