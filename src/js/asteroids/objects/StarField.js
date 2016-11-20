import { Scene, Particle, DisplayObject } from '../../engine';

export default class StarField extends DisplayObject {
  constructor(model, amount=90) {
    super();
    this.model = model;
    this.amount = amount;
    this.starSize = 3;
    this.stars = [];
  }

  generateStars() {
    const { amount, stars, starSize } = this;
    const thirdAmount = parseInt(amount / 3, 10);
    const mStarSize = parseInt(starSize / 1.5, 10);
    const sStarSize = parseInt(starSize / 3, 10);
    let bStar;
    let mStar;
    let sStar;

    for (let i = 0; i < thirdAmount; i++) {
      // stars
      bStar = new Particle(starSize);
      mStar = new Particle(mStarSize, '#aaa');
      sStar = new Particle(sStarSize, '#777');

      // big star
      bStar.x = Math.random() * this.scene.width;
      bStar.y = Math.random() * this.scene.height;
      stars.push(bStar);

      // medium star
      mStar.x = Math.random() * this.scene.width;
      mStar.y = Math.random() * this.scene.height;
      stars.push(mStar);

      // small star
      sStar.x = Math.random() * this.scene.width;
      sStar.y = Math.random() * this.scene.height;
      stars.push(sStar);
    }

    this.add(stars);
  }

  update() {
    // render all children
    super.update();

    const { stars, model, starSize } = this;
    let scale;

    if (!stars.length) {
      this.generateStars();
    }

    for (let i=0; i < stars.length; i++) {
      // scale the speed of the star based on its size
      scale = stars[i].size / starSize;

      // move stars
      stars[i].x -= model.vx * scale;
      stars[i].y -= model.vy * scale;

      // wrap stars
      Scene.wrap(stars[i]);
    }
  }
}