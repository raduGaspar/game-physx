export default class VerletModel {
  constructor(x=0, y=0) {
    this.previousX = x;
    this.previousY = y;
    this.xPos = x;
    this.yPos = y;
  }

  get vx() {
    return this.xPos - this.previousX;
  }

  set vx(value) {
    this.previousX = this.xPos - value;
  }

  get vy() {
    return this.yPos - this.previousY;
  }

  set vy(value) {
    this.previousY = this.yPos - value;
  }

  set x(value) {
    this.previousX = value - this.vx;
    this.xPos = value;
  }

  get x() {
    return this.xPos;
  }

  set y(value) {
    this.previousY = value - this.vy;
    this.yPos = value;
  }

  get y() {
    return this.yPos;
  }
};
