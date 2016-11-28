import { Scene, DisplayObject } from '../../engine';
import Rock from './Rock';
import RockModel from '../models/RockModel';

export default class RockField extends DisplayObject {
  constructor(model, amount=10) {
    super();
    this.model = model;
    this.amount = amount;
    this.rocks = [];
  }

  generateRocks() {
    const { amount, rocks } = this;
    for (let i = 0; i < amount; i++) {
      const rockModel = new RockModel();
      const rock = new Rock(rockModel);
      rocks.push(rock);
    }

    this.add(rocks);
  }

  update() {
    // render all children
    super.update();

    const { rocks, model } = this;

    if (!rocks.length) {
      this.generateRocks();
    }

    for (let i=0; i < rocks.length; i++) {
      // move rocks based on model velocity
      rocks[i].model.x -= model.vx;
      rocks[i].model.y -= model.vy;
    }
  }
}