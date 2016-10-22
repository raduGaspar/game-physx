export default class Game {
  constructor(scenes) {
    if(!(typeof requestAnimationFrame)) {
      throw new Error('Your browser doesn\'t support requestAnimationFrame :(');
    }

    this.scenes = [];
    this.addScenes(scenes);
    this.play();
    this.loop();
  }
  addScenes(elem) {
    if(elem.constructor === Array) {
      this.scenes = this.scenes.concat(elem);
    } else {
      this.scenes.push(elem);
    }
  }
  removeScene(elem) {
    let idx = this.scenes.indexOf(elem);
    if(idx > -1) {
      this.scenes.splice(idx, 1);
    }
  }
  pause() {
    this.running = false;
  }
  play() {
    this.running = true;
  }
  togglePause() {
    this.running = !this.running;
  }
  loop() {
    if(this.running) {
      for(let scene of this.scenes) {
        scene.update();
      }
    }

    requestAnimationFrame(this.loop.bind(this));
  }
};
