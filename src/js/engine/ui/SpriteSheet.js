export default class SpriteSheet {
  constructor(img, spriteWidth=16, spriteHeight=spriteWidth) {
    let i;
    let j;
    let blocksW = img.width / spriteWidth;
    let blocksH = img.height / spriteHeight;
    let sprites = [];

    this.img = img;
    this.spriteWidth = spriteWidth;
    this.spriteHeight = spriteHeight;
    this.sprites = sprites;

    for(i=0; i<blocksH; i++) {
      for(j=0; j<blocksW; j++) {
        sprites.push([
          j * spriteWidth,
          i * spriteHeight,
          spriteWidth,
          spriteHeight
        ]);
      }
    }
  }

  getTile(row, col) {
    return [
      row * this.spriteWidth,
      col * this.spriteHeight,
      this.spriteWidth,
      this.spriteHeight
    ];
  }
};
