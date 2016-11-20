import { VerletModel } from '../../engine';

export default class PlayerModel extends VerletModel {
  constructor() {
    super();
    this.temporaryX = 0;
    this.temporaryY = 0;
    this.friction = 0;
    this.frictionX = 0;
    this.frictionY = 0;
    this.acceleration = 0;
    this.rotationSpeed = 0;
    this.thrusterOn = false;
    this.rotationValue = -90;
    this.size = 40;
    this.halfSize = this.size * 0.5;
    this.thirdSize = this.size * 0.33;
    this.fivePerc = this.size * 0.05;
    this.color = '#590';
    this.ang = 0;
    this.accX = 0;
    this.accY = 0;
  }

  update() {
    this.temporaryX = this.x;
    this.temporaryY = this.y;

    // calculate the rotationValue
    this.rotationValue += this.rotationSpeed;

    // calculate the angle and acceleration
    this.ang = this.rotationValue * (Math.PI / 180);
    this.accX = Math.cos(this.ang) * this.acceleration;
    this.accY = Math.sin(this.ang) * this.acceleration;

    this.frictionX = this.vx * this.friction;
    this.frictionY = this.vy * this.friction;

    if(!this.thrusterOn) {
      if((Math.abs(this.vx) < 0.1) && (Math.abs(this.vy) < 0.1)) {
        this.accX = 0;
        this.accY = 0;
        this.frictionX = 0;
        this.frictionY = 0;
      }
    }

    this.x += this.accX + this.frictionX;
    this.y += this.accY + this.frictionY;

    // set the previous positions to temporary values
    this.previousX = this.temporaryX;
    this.previousY = this.temporaryY;
  }

  get angle() {
    this.ang = this.rotationValue * (Math.PI / 180);
    return this.ang
  }

  get accelerationX() {
    this.accX = Math.cos(this.ang) * acceleration;
    return this.accX;
  }

  get accelerationY() {
    this.accY = Math.sin(this.ang) * acceleration;
    return this.accY;
  }
};
