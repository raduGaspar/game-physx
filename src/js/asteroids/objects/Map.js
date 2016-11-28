import { DisplayObject } from '../../engine';

export default class Map extends DisplayObject {
  constructor(markerSize=4, mapScaleFactor=0.2) {
    super();
    this.markerSize = markerSize;
    this.mapScaleFactor = mapScaleFactor;
  }

  update() {
    this.mapW = this.scene.width * this.mapScaleFactor;
    this.mapH = this.scene.height * this.mapScaleFactor;
  }

  renderMarker(set) {
    for(let child of set) {
      if (child.children.length) {
        this.renderMarker(child.children);
      } else {
        this.ctx.save();
        this.ctx.beginPath();
        this.ctx.fillStyle = child.model.color;
        this.ctx.rect(...this.getSize(child.model));
        this.ctx.fill();
        this.ctx.closePath();
        this.ctx.restore();
      }
    }
  }

  render() {
    // draw map container
    this.ctx.save();
    this.ctx.beginPath();
    this.ctx.globalAlpha = 0.1;
    this.ctx.fillStyle = '#fff';
    this.ctx.rect(0, 0, this.mapW, this.mapH);

    this.ctx.fill();
    this.ctx.globalAlpha = 1;
    this.ctx.closePath();
    this.ctx.restore();

    this.renderMarker(this.children);

  }
  getSize(target) {
    const { mapW, mapH, mapScaleFactor, markerSize } = this;
    let tx = target.x * mapScaleFactor;
    let ty = target.y * mapScaleFactor;
    let markerW = mapW - tx < markerSize ? mapW - tx : markerSize;
    let markerH = mapH - ty < markerSize ? mapH - ty : markerSize;
    markerW = markerW < 0 ? 0 : markerW;
    markerH = markerH < 0 ? 0 : markerH;

    return [
      tx,
      ty,
      markerW,
      markerH
    ];
  }
};
