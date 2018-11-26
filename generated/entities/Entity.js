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
var Acceleration_1 = require("../concepts/Acceleration");
var Entity = /** @class */ (function (_super) {
    __extends(Entity, _super);
    function Entity(pos) {
        var _this = _super.call(this) || this;
        _this.pos = pos;
        _this.position = pos;
        _this.acceleration = Acceleration_1.Acceleration.NONE;
        return _this;
    }
    return Entity;
}(Concept_1.Concept));
exports.Entity = Entity;
//# sourceMappingURL=Entity.js.map