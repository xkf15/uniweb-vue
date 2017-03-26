'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Moon = function () {
    function Moon(ctx, width, height) {
        (0, _classCallCheck3.default)(this, Moon);

        this.ctx = ctx;
        this.width = width;
        this.height = height;
    }

    (0, _createClass3.default)(Moon, [{
        key: 'draw',
        value: function draw() {
            var ctx = this.ctx,
                gradient = ctx.createRadialGradient(100, 650, 80, 300, 650, 800);

            gradient.addColorStop(0, 'rgb(46, 11, 29)');

            gradient.addColorStop(1, 'rgb(10,0,10)');
            ctx.save();
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, this.width, this.height);
            ctx.restore();
        }
    }]);
    return Moon;
}();

exports.default = Moon;
//# sourceMappingURL=Moon.js.map