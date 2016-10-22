import { KeyboardEvents, EventDispatcher } from '../'

let keyboardInstance;
let keysMap = {};

class KeyboardSingleton {
  constructor() {
    if(!keyboardInstance) {
      console.log('Keyboard instance created');
      keyboardInstance = this;
    }

    return keyboardInstance;
  }
  handleKeys(e) {
    if(e.type === KeyboardEvents.KEY_DOWN) {
      keysMap[e.keyCode] = true;
      this.trigger(KeyboardEvents.KEY_DOWN, e);
    }

    if(e.type === KeyboardEvents.KEY_UP) {
      this.trigger(KeyboardEvents.KEY_UP, e);
      keysMap[e.keyCode] = false;
    }
  }
};

export default class Keyboard extends EventDispatcher {
  constructor() {
    super();
    keyboardInstance = new KeyboardSingleton();
    onkeydown = onkeyup = onkeypress = keyboardInstance.handleKeys.bind(this);
  }

  get A() {
    return !!keysMap[65];
  }
  get B() {
    return !!keysMap[66];
  }
  get C() {
    return !!keysMap[67];
  }
  get D() {
    return !!keysMap[68];
  }
  get E() {
    return !!keysMap[69];
  }
  get F() {
    return !!keysMap[70];
  }
  get G() {
    return !!keysMap[71];
  }
  get H() {
    return !!keysMap[72];
  }
  get I() {
    return !!keysMap[73];
  }
  get J() {
    return !!keysMap[74];
  }
  get K() {
    return !!keysMap[75];
  }
  get L() {
    return !!keysMap[76];
  }
  get M() {
    return !!keysMap[77];
  }
  get N() {
    return !!keysMap[78];
  }
  get O() {
    return !!keysMap[79];
  }
  get P() {
    return !!keysMap[80];
  }
  get Q() {
    return !!keysMap[81];
  }
  get R() {
    return !!keysMap[82];
  }
  get S() {
    return !!keysMap[83];
  }
  get T() {
    return !!keysMap[84];
  }
  get U() {
    return !!keysMap[85];
  }
  get V() {
    return !!keysMap[86];
  }
  get W() {
    return !!keysMap[87];
  }
  get X() {
    return !!keysMap[88];
  }
  get Y() {
    return !!keysMap[89];
  }
  get Z() {
    return !!keysMap[90];
  }
  get SPACE() {
    return !!keysMap[32];
  }
  get UP() {
    return !!keysMap[38];
  }
  get DOWN() {
    return !!keysMap[40];
  }
  get LEFT() {
    return !!keysMap[37];
  }
  get RIGHT() {
    return !!keysMap[39];
  }
  get TAB() {
    return !!keysMap[9];
  }
  get ENTER() {
    return !!keysMap[13];
  }
  get SHIFT() {
    return !!keysMap[16];
  }
  get CTRL() {
    return !!keysMap[17];
  }
  get ALT() {
    return !!keysMap[18];
  }
  get ESC() {
    return !!keysMap[27];
  }
  get F1() {
    return !!keysMap[112];
  }
  get F2() {
    return !!keysMap[113];
  }
  get F3() {
    return !!keysMap[114];
  }
  get F4() {
    return !!keysMap[115];
  }
  get F5() {
    return !!keysMap[116];
  }
  get F6() {
    return !!keysMap[117];
  }
  get F7() {
    return !!keysMap[118];
  }
  get F8() {
    return !!keysMap[119];
  }
  get F9() {
    return !!keysMap[120];
  }
  get F10() {
    return !!keysMap[121];
  }
  get F11() {
    return !!keysMap[122];
  }
  get F12() {
    return !!keysMap[123];
  }
};
