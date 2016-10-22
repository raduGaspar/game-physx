export default class Utils {
  constructor() {
    let e = new Error('is a static class, no need to instantiate!');
    e.name = 'Utils';

    throw e.toString();
  }

  static toCamelCase(str) {
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(letter, index) {
      return index == 0 ? letter.toLowerCase() : letter.toUpperCase();
    }).replace(/(\s|-|_)+/g, '');
  }
};
