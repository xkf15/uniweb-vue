'use strict';

var _Stars = require('./Stars');

var _Stars2 = _interopRequireDefault(_Stars);

var _Moon = require('./Moon');

var _Moon2 = _interopRequireDefault(_Moon);

var _Meteor = require('./Meteor');

var _Meteor2 = _interopRequireDefault(_Meteor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var canvas = document.getElementById('canvas'),
    ctx = canvas.getContext('2d'),
    width = window.innerWidth,
    height = window.innerHeight,
    moon = new _Moon2.default(ctx, width, height),
    stars = new _Stars2.default(ctx, width, height, 200),
    meteors = [],
    count = 0;

canvas.width = width;
canvas.height = height;

var meteorGenerator = function meteorGenerator() {
    var x = Math.random() * width + 800;
    meteors.push(new _Meteor2.default(ctx, x, height));

    setTimeout(function () {
        meteorGenerator();
    }, Math.random() * 2000);
};

var frame = function frame() {
    count++;
    count % 10 === 0 && stars.blink();

    moon.draw();
    stars.draw();

    meteors.forEach(function (meteor, index, arr) {
        if (meteor.flow()) {
            meteor.draw();
        } else {
            arr.splice(index, 1);
        }
    });
    requestAnimationFrame(frame);
};

meteorGenerator();
frame();
//# sourceMappingURL=main.js.map