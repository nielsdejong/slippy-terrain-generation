(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Concept = /** @class */ (function () {
    function Concept() {
    }
    return Concept;
}());
exports.Concept = Concept;

},{}],2:[function(require,module,exports){
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

},{"./Vector":6}],3:[function(require,module,exports){
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

},{"../Concept":1}],4:[function(require,module,exports){
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
var Name = /** @class */ (function (_super) {
    __extends(Name, _super);
    function Name(firstName, lastName) {
        var _this = _super.call(this) || this;
        _this.firstName = firstName;
        _this.lastName = lastName;
        _this.first = firstName;
        _this.last = lastName;
        return _this;
    }
    return Name;
}(Concept_1.Concept));
exports.Name = Name;

},{"../Concept":1}],5:[function(require,module,exports){
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
var Position = /** @class */ (function (_super) {
    __extends(Position, _super);
    function Position() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Position.prototype.toString = function () {
        return "Position(" + _super.prototype.toString.call(this) + ")";
    };
    Position.default = new Position(0, 0, 0);
    return Position;
}(Vector_1.Vector));
exports.Position = Position;

},{"./Vector":6}],6:[function(require,module,exports){
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

},{"../Concept":1}],7:[function(require,module,exports){
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

},{"../concepts/Health":3,"./Entity":8}],8:[function(require,module,exports){
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

},{"../Concept":1,"../concepts/Acceleration":2}],9:[function(require,module,exports){
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

},{"../../concepts/Name":4,"../AliveEntity":7}],10:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Human_1 = require("./generated/entities/alive/Human");
var Position_1 = require("./generated/concepts/Position");
function greeter(person) {
    return "Hello, " + person.name.first + " " + person.name.last + "(" + person.health + ")" + person.pos;
}
var user = new Human_1.Human(Position_1.Position.default).withName("Bob", "Bobson");
document.body.innerHTML = greeter(user);

},{"./generated/concepts/Position":5,"./generated/entities/alive/Human":9}]},{},[10]);
