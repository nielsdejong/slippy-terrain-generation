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
var Concept_1 = require("../Concept");
var Vector = /** @class */ (function (_super) {
    __extends(Vector, _super);
    function Vector(xNew, yNew, zNew) {
        var _this = _super.call(this) || this;
        _this.xNew = xNew;
        _this.yNew = yNew;
        _this.zNew = zNew;
        _this.x = xNew;
        _this.y = yNew;
        _this.z = zNew;
        return _this;
    }
    Vector.prototype.toString = function () {
        return "(" + this.x + ", " + this.y + ", " + this.z + ")";
    };
    return Vector;
}(Concept_1.Concept));
exports.Vector = Vector;
//# sourceMappingURL=Vector.js.map