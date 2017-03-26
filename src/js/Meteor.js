'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Meteor = function () {
    function Meteor(ctx, x, h) {
        (0, _classCallCheck3.default)(this, Meteor);

        this.ctx = ctx;
        this.x = x;
        this.y = 0;
        this.h = h;
        this.vx = -(4 + Math.random() * 4);
        this.vy = -this.vx;
        this.len = Math.random() * 300 + 500;
    }

    (0, _createClass3.default)(Meteor, [{
        key: 'flow',
        value: function flow() {
            if (this.x < -this.len || this.y > this.h + this.len) {
                return false;
            }
            this.x += this.vx;
            this.y += this.vy;
            return true;
        }
    }, {
        key: 'draw',
        value: function draw() {
            var ctx = this.ctx,
                gra = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.len);

            var PI = Math.PI;
            gra.addColorStop(0, 'rgba(255,255,255,1)');
            gra.addColorStop(1, 'rgba(0,0,0,0)');
            ctx.save();
            ctx.fillStyle = gra;
            ctx.beginPath();

            ctx.arc(this.x, this.y, 1, PI / 4, 5 * PI / 4);

            ctx.lineTo(this.x + this.len, this.y - this.len);
            ctx.closePath();
            ctx.fill();
            ctx.restore();
        }
    }]);
    return Meteor;
}();

exports.default = Meteor;
//# sourceMappingURL=Meteor.js.map