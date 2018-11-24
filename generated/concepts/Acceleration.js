"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Vector_1 = require("./Vector");
var Acceleration = /** @class */ (function (_super) {
    __extends(Acceleration, _super);
    function Acceleration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Acceleration.NONE = new Acceleration(0, 0, 0);
    return Acceleration;
}(Vector_1.Vector));
exports.Acceleration = Acceleration;
//# sourceMappingURL=Acceleration.js.map