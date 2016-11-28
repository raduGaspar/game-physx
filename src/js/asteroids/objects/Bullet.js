import { Scene, Particle } from '../../engine';

export default class Bullet extends Particle {
  constructor(model) {
    super(3, '#ff0');
    this.x = model.x;
    this.y = model.y;
    this.angle = model.angle + Math.PI*0.5;
    this.speed = 5;
    this.created = Date.now();
    this.lifeTime = 3000;
    this.removeBullet = this.removeBullet.bind(this);
  }

  removeBullet() {
    this.scene.remove(this);
  }

  update() {
    if (Date.now() - this.created >= this.lifeTime) {
      this.removeBullet();
    }
    this.x += Math.sin(this.angle) * this.speed;
    this.y -= Math.cos(this.angle) * this.speed;

    Scene.wrap(this);
  }
}