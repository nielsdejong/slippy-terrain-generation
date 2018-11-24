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
var Health = /** @class */ (function (_super) {
    __extends(Health, _super);
    function Health(maxHealth) {
        var _this = _super.call(this) || this;
        _this.maxHealth = maxHealth;
        _this.max = maxHealth;
        _this.value = maxHealth;
        return _this;
    }
    Health.prototype.toString = function () {
        return "Health(" + this.value + "/" + this.max + ")";
    };
    return Health;
}(Concept_1.Concept));
exports.Health = Health;
//# sourceMappingURL=Health.js.map