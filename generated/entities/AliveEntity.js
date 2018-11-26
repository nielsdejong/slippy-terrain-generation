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
var Entity_1 = require("./Entity");
var Health_1 = require("../concepts/Health");
var AliveEntity = /** @class */ (function (_super) {
    __extends(AliveEntity, _super);
    function AliveEntity(pos, maxHealthValue) {
        var _this = _super.call(this, pos) || this;
        _this.pos = pos;
        _this.maxHealthValue = maxHealthValue;
        _this.health = new Health_1.Health(maxHealthValue);
        return _this;
    }
    return AliveEntity;
}(Entity_1.Entity));
exports.AliveEntity = AliveEntity;
//# sourceMappingURL=AliveEntity.js.map