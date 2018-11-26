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
var Name_1 = require("../../concepts/Name");
var AliveEntity_1 = require("../AliveEntity");
var Human = /** @class */ (function (_super) {
    __extends(Human, _super);
    function Human(pos) {
        var _this = _super.call(this, pos, Human.DEFAULT_MAX_HEALTH) || this;
        _this.pos = pos;
        return _this;
    }
    Human.prototype.withName = function (first, last) {
        this.name = new Name_1.Name(first, last);
        return this;
    };
    Human.DEFAULT_MAX_HEALTH = 100;
    return Human;
}(AliveEntity_1.AliveEntity));
exports.Human = Human;
//# sourceMappingURL=Human.js.map