import DisplayObject from './DisplayObject';

export default class AnimatedSprite extends DisplayObject {
  constructor(x, y, sheet, startFrame=0, endFrame=startFrame+1, loop=true, fps=30) {
    super(x, y);
    this.sheet = sheet;
    this.sprites = sheet.sprites.slice(startFrame, endFrame);
    this.loop = loop;
    this.frameIdx = 0;
    this.period = 1000 / fps;
    this.now;
    this.then = Date.now();
    this.elapsed;
  }

  updateFrameCounter() {
    if(this.frameIdx < this.sprites.length - 1) {
      this.frameIdx++;
    } else {
      if (this.loop) {
        this.frameIdx = 0;
      }
    }
  }

  update() {
    this.now = Date.now();
    this.elapsed = this.now - this.then;

    // if enough time has elapsed, draw the next frame
    if (this.elapsed > this.period) {
      this.then = this.now - (this.elapsed % this.period);
      this.updateFrameCounter();
    }
  }

  render() {
    // draw frame logic
    this.ctx.drawImage(
      this.sheet.img,
      ...this.sprites[this.frameIdx],
      this.x,
      this.y,
      this.sheet.spriteWidth,
      this.sheet.spriteHeight
    );
  }
}
