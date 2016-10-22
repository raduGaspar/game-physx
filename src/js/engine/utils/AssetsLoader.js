import Utils from './Utils';

let assetLoaderInstance;

export default class AssetsLoader {
  constructor() {
    if(!assetLoaderInstance) {
      console.log('AssetsLoader instance created');
      this.assets = {};
      assetLoaderInstance = this;
    }

    return assetLoaderInstance;
  }
  load(assets) {
    let self = this;
    let imageFiles = /jpe?g$|gif$|png$|svg$/;
    let audioFiles = /wav$|mp3$/;
    let files = [];
    let details;
    let ext;
    let name;
    let file;

    for(let asset of assets) {
      details = asset.split('/').pop().split('.');
      ext = details.pop();
      name = details.shift();
      if(ext.match(imageFiles)) {
        // load an image file
        file = new Image();
        file.src = asset;
      } else if(ext.match(audioFiles)) {
        // load an audio file
        file = new Audio(asset)
      }
      files.push(file);

      this.assets[Utils.toCamelCase(name)] = file;
    }

    return Promise.all(files).then(function() {
      return self.assets;
    });
  }
};
