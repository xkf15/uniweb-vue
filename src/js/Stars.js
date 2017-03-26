'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Stars = function () {
    function Stars(ctx, width, height, amount) {
        (0, _classCallCheck3.default)(this, Stars);

        this.ctx = ctx;
        this.width = width;
        this.height = height;
        this.stars = this.getStars(amount);
    }

    (0, _createClass3.default)(Stars, [{
        key: 'getStars',
        value: function getStars(amount) {
            var stars = [];
            while (amount--) {
                stars.push({
                    x: Math.random() * this.width,
                    y: Math.random() * this.height,
                    r: Math.random() + 0.2
                });
            }
            return stars;
        }
    }, {
        key: 'draw',
        value: function draw() {
            var ctx = this.ctx;
            ctx.save();
            ctx.fillStyle = 'white';
            this.stars.forEach(function (star) {
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.r, 0, 2 * Math.PI);
                ctx.fill();
            });
            ctx.restore();
        }
    }, {
        key: 'blink',
        value: function blink() {
            this.stars = this.stars.map(function (star) {
                var sign = Math.random() > 0.5 ? 1 : -1;
                star.r += sign * 0.2;
                if (star.r < 0) {
                    star.r = -star.r;
                } else if (star.r > 1) {
                    star.r -= 0.2;
                }
                return star;
            });
        }
    }]);
    return Stars;
}();

exports.default = Stars;
//# sourceMappingURL=Stars.js.map