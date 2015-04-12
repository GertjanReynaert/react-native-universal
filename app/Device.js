var Dimensions = require('Dimensions');

class Device {
  constructor() {
    this.width = this._width();
    this.height = this._height();
  }

  isIpad() {
    var iPad = [768, 1024];
    return iPad.indexOf(this.width) > -1 && iPad.indexOf(this.height) > -1;
  }

  isIphone() {
    var iPhone4 = [320, 480];
    var iPhone5 = [320, 568];
    var iPhone6 = [375, 667];
    var iPhone6plus = [414, 736];
    var iPhone = iPhone4.concat(iPhone5).concat(iPhone6).concat(iPhone6plus);
    return iPhone.indexOf(this.width) > -1 && iPhone.indexOf(this.height) > -1;
  }

  _width() {
    return Dimensions.get("window").width;
  }

  _height() {
    return Dimensions.get("window").height;
  }
}

module.exports = new Device();
