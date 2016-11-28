import { VerletModel } from '../../engine';

export default class RockModel extends VerletModel {
  constructor(minRadius=30, maxRadius=40, granularity=25) {
    super();

    let tau = Math.PI*2;
    let increment = tau / granularity;
    let points = [];
    let xMin;
    let xMax;
    let yMin;
    let yMax;
    let radius;
    let x;
    let y;

    for (let ang = 0; ang < tau; ang += increment) {
      radius = this.getRandom(minRadius, maxRadius);
      x = Math.sin(ang) * radius;
      y = -Math.cos(ang) * radius;

      xMin = xMin !== undefined ? Math.min(xMin, x) : x;
      xMax = xMax !== undefined ? Math.max(xMax, x) : x;
      yMin = yMin !== undefined ? Math.min(yMin, y) : y;
      yMax = yMax !== undefined ? Math.max(yMax, y) : y;

      points.push({x, y});
    }

    // close the rock shape by connecting
    // final point to starting point
    points.push(points[0]);

    this.temporaryX = 0;
    this.temporaryY = 0;
    this.angle = 0;
    this.color = '#aaa';
    this.rotateBy = Math.random()*0.03 - 0.015 || 0.01;
    this.vx = Math.random() - 0.5;
    this.vy = Math.random() - 0.5;
    this.width = xMax - xMin;
    this.height = yMax - yMin;
    this.radius = minRadius;
    this.points = points;
    this.xMin = xMin;
    this.xMax = xMax;
    this.yMin = yMin;
    this.yMax = yMax;
  }

  update() {
    this.temporaryX = this.x;
    this.temporaryY = this.y;

    this.x += this.vx;
    this.y += this.vy;
    this.angle += this.rotateBy;

    // set the previous positions to temporary values
    this.previousX = this.temporaryX;
    this.previousY = this.temporaryY;
  }

  getRandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
};
