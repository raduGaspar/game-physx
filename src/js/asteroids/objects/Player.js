import { Scene, DisplayObject, AssetsLoader, KeyboardEvents } from '../../engine';
import Bullet from './Bullet';

export default class Player extends DisplayObject {
  constructor(model) {
    super();
    let assets = new AssetsLoader().assets;
    this.model = model;
    this.assets = assets;

    let onKeyUp = (e) => {
      if(this.LEFT || this.RIGHT || this.A || this.D) {
        model.rotationSpeed = 0;
      }

      if(this.UP || this.W) {
        model.acceleration = 0;
        model.friction = 0.96;
        model.thrusterOn = false;
      }

      if(this.SPACE) {
        model.fire = false;
        assets.laserThum.pause();
        assets.laserThum.currentTime = 0;
      }
    }

    this.on(KeyboardEvents.KEY_UP, onKeyUp);
  }

  update() {
    this.model.scene = this.scene;

    // update the model
    this.model.update();

    if(this.LEFT || this.A) {
      this.model.rotationSpeed = -10;
    }

    if(this.RIGHT || this.D) {
      this.model.rotationSpeed = 10;
    }

    if(this.UP || this.W) {
      this.model.acceleration = 0.2;
      this.model.friction = 1;
      this.model.thrusterOn = true;
    }

    if(this.SPACE) {
      this.model.fire = true;
      this.assets.laserThum.play();
      this.scene.add(new Bullet(this.model));
    }

    // wrap the square to the scene bounds
    Scene.wrap(this.model);
  }

  render() {
    const { x, y, angle, fivePerc, halfSize, thirdSize, color } = this.model;
    this.ctx.save();
    this.ctx.beginPath();
    this.ctx.translate(x, y);
    // rotate the ship based on the angle, and offset it by pi/2
    this.ctx.rotate(angle + Math.PI*0.5);
    this.ctx.fillStyle = color;
    this.ctx.moveTo(-halfSize, halfSize);
    this.ctx.lineTo(0, -halfSize);
    this.ctx.lineTo(halfSize, halfSize);
    this.ctx.lineTo(0, halfSize-thirdSize);
    this.ctx.fill();
    this.ctx.closePath();
    this.ctx.restore();

    if(this.model.thrusterOn) {
      this.ctx.save();
      this.ctx.beginPath();
      this.ctx.translate(x, y);
      this.ctx.rotate(angle + Math.PI*0.5);
      this.ctx.fillStyle = '#A30';

      this.ctx.moveTo(halfSize - fivePerc, halfSize);
      this.ctx.lineTo(-halfSize + fivePerc, halfSize);
      this.ctx.lineTo(0, halfSize - thirdSize + fivePerc);
      this.ctx.fill();
      this.ctx.closePath();
      this.ctx.restore();
    }
  }
}