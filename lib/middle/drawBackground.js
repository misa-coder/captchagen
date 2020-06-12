var getColors = require('../getColors');

module.exports = function(canvas, opt) {
  var ctx = canvas.getContext('2d');

  var colors = getColors(2);

  var gradient = ctx.createLinearGradient(0, 0, opt.width, 0);
  gradient.addColorStop(0, colors[0].css);
  gradient.addColorStop(1, colors[1].css);
  
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, opt.width, opt.height);
  return canvas;
};

/*var getFontSize = require('../getFontSize');
var getFontRotation = require('../getFontRotation');

module.exports = function(canvas, opt) {
  var ctx = canvas.getContext('2d');

  var colors = getColors(opt.text.length);

  var x = 3;

  opt.text.split('').forEach(function(letter, idx) {
    var color = colors[idx];

    // set font
    var size = getFontSize(opt.height, opt.width, opt.font);
    ctx.font = '' + size + 'px ' + opt.font;
    ctx.textBaseline = 'top';
    var te = ctx.measureText(letter);
    var y = Math.floor(((Math.random() * opt.height - size) / 100) + size / 3);
    
    // set color
    ctx.fillStyle = color.css;
    
    // set font rotation
    var rot = getFontRotation();
    ctx.rotate(rot);

    // draw text
    ctx.fillText(letter, x, y);

    // unset rotation for next letter
    ctx.rotate(-rot);

    // space the x-axis for the next letter
    x += te.width+1;
  });
  return canvas;
};*/
