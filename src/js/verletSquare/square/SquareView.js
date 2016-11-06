import { Scene } from '../../engine';

export default class SquareView extends Scene {
  constructor(model, ctrl) {
    super();
    this.model = model;
    this.ctrl = ctrl;
  }

  update() {
    // store a reference to this scene on the model
    this.model.scene = this.scene;

    // update the model and controller
    this.model.update();
    this.ctrl.update();

    // wrap the square to the scene bounds
    Scene.wrap(this.model);
  }

  render() {
    const halfSize = this.model.size * 0.5;

    // draw a green square
    this.ctx.save();
    this.ctx.beginPath();
    this.ctx.fillStyle = '#090';
    this.ctx.fillRect(
      this.model.x,
      this.model.y,
      this.model.size,
      this.model.size
    );
    this.ctx.closePath();
    this.ctx.restore();

    // draw an orange circle inside the square, when it's moving
    if(this.model.moving) {
      this.ctx.save();
      this.ctx.beginPath();
      this.ctx.fillStyle = '#f90';
      this.ctx.arc(
        this.model.x + halfSize,
        this.model.y + halfSize,
        7,
        0,
        2*Math.PI
      );
      this.ctx.fill();
      this.ctx.closePath();
      this.ctx.restore();
    }
  }
};
