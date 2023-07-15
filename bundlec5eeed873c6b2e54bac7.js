/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/UI.js":
/*!**********************!*\
  !*** ./src/js/UI.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UI: () => (/* binding */ UI)
/* harmony export */ });
/* harmony import */ var _assets_img_playerShips_shipsLeft_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../assets/img/playerShips/shipsLeft.png */ "./src/assets/img/playerShips/shipsLeft.png");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var UI = /*#__PURE__*/function () {
  function UI(game) {
    _classCallCheck(this, UI);
    this.game = game;
    this.fontSize = 20;
    this.fontFamily = 'sarif';
    this.shipsLeftImage = document.getElementById('shipsLeft');
    this.shipsLeftImage.src = _assets_img_playerShips_shipsLeft_png__WEBPACK_IMPORTED_MODULE_0__;
    this.game = game;
    this.spriteWidth = 150;
    this.spriteHeight = 54;
    this.sizeModifier = .15;
    this.width = this.spriteWidth * this.sizeModifier;
    this.height = this.spriteHeight * this.sizeModifier;
  }
  _createClass(UI, [{
    key: "draw",
    value: function draw(context) {
      context.save();
      context.font = this.fontSize + 'px ' + this.fontFamily;
      context.fillStyle = 'red';
      context.textAlign = 'center';
      context.fillText('Score: ' + this.game.score, .5 * this.game.width, 30);

      //timer
      context.font = this.fontSize + 'px ' + this.fontFamily;
      context.fillText('Time: ' + (this.game.time * .001).toFixed(1), .5 * this.game.width, 60);
      //lives
      for (var i = 0; i < this.game.lives; i++) {
        context.drawImage(this.shipsLeftImage, .54 * (this.game.width - this.width * 2 * i), 80, this.width, this.height);
      }
      context.restore();
    }
  }]);
  return UI;
}();

/***/ }),

/***/ "./src/js/asteroid.js":
/*!****************************!*\
  !*** ./src/js/asteroid.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Asteroid: () => (/* binding */ Asteroid)
/* harmony export */ });
/* harmony import */ var _assets_img_asteroid_asteroid_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../assets/img/asteroid/asteroid.png */ "./src/assets/img/asteroid/asteroid.png");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var Asteroid = /*#__PURE__*/function () {
  function Asteroid(game) {
    _classCallCheck(this, Asteroid);
    this.game = game;
    this.spriteWidth = 150;
    this.spriteHeight = 155;
    this.sizeModifier = Math.random() * 0.5 + .03;
    this.width = this.spriteWidth * this.sizeModifier;
    this.height = this.spriteHeight * this.sizeModifier;
    this.radius = this.width * .5;
    this.x = -this.radius;
    this.y = Math.random() * this.game.height;
    this.asteroidImage = document.getElementById('asteroid');
    this.asteroidImage.src = _assets_img_asteroid_asteroid_png__WEBPACK_IMPORTED_MODULE_0__;
    this.dX = Math.random() * .01 + .01;
    this.free = true;
    this.angle = 0;
    this.angularVelocity = Math.random() * 0.02 - 0.01;
  }
  _createClass(Asteroid, [{
    key: "update",
    value: function update(deltaTime) {
      if (!this.free) {
        this.angle += this.angularVelocity;
        this.x += this.dX * deltaTime;
        if (this.x > this.game.width + this.radius) this.reset();
      }
    }
  }, {
    key: "draw",
    value: function draw(context) {
      if (!this.free) {
        context.save();
        context.translate(this.x, this.y);
        context.rotate(this.angle);
        context.drawImage(this.asteroidImage, -this.width * .5, -this.height * 0.5, this.width, this.height);
        context.restore();
      }
    }
  }, {
    key: "reset",
    value: function reset() {
      this.free = true;
    }
  }, {
    key: "start",
    value: function start() {
      this.free = false;
      this.x = -this.radius;
      this.y = Math.random() * this.game.height;
    }
  }]);
  return Asteroid;
}();

/***/ }),

/***/ "./src/js/background.js":
/*!******************************!*\
  !*** ./src/js/background.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Background: () => (/* binding */ Background)
/* harmony export */ });
/* harmony import */ var _assets_img_background_layer_1b_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../assets/img/background/layer-1b.png */ "./src/assets/img/background/layer-1b.png");
/* harmony import */ var _assets_img_background_layer_2_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../assets/img/background/layer-2.png */ "./src/assets/img/background/layer-2.png");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


var Layer = /*#__PURE__*/function () {
  function Layer(game, width, height, speedModifier, image) {
    _classCallCheck(this, Layer);
    this.game = game;
    this.width = width;
    this.height = height;
    this.speedModifier = speedModifier;
    this.image = image;
    this.x = 0;
    this.y = 0;
  }
  _createClass(Layer, [{
    key: "update",
    value: function update() {
      if (this.x < -this.width) this.x = 0;else this.x -= this.game.speed + this.game.speed * this.speedModifier;
    }
  }, {
    key: "draw",
    value: function draw(context) {
      context.drawImage(this.image, this.x, this.y, this.width, this.height);
      context.drawImage(this.image, this.x + this.width, this.y, this.width, this.height);
    }
  }]);
  return Layer;
}();
var Background = /*#__PURE__*/function () {
  function Background(game) {
    _classCallCheck(this, Background);
    this.game = game;
    this.width = 3072;
    this.height = 1536;
    this.layerImage1 = document.getElementById('layer1');
    this.layerImage1.src = _assets_img_background_layer_1b_png__WEBPACK_IMPORTED_MODULE_0__;
    this.layerImage2 = document.getElementById('layer2');
    this.layerImage2.src = _assets_img_background_layer_2_png__WEBPACK_IMPORTED_MODULE_1__;
    this.layer1 = new Layer(this.game, this.width, this.height, .01, this.layerImage1);
    this.layer2 = new Layer(this.game, this.width, this.height, .04, this.layerImage2);
    this.backgroundLayers = [this.layer1, this.layer2];
  }
  _createClass(Background, [{
    key: "update",
    value: function update() {
      this.backgroundLayers.forEach(function (layer) {
        layer.update();
      });
    }
  }, {
    key: "draw",
    value: function draw(context) {
      this.backgroundLayers.forEach(function (layer) {
        layer.draw(context);
      });
    }
  }]);
  return Background;
}();

/***/ }),

/***/ "./src/js/enemies.js":
/*!***************************!*\
  !*** ./src/js/enemies.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Destroyer: () => (/* binding */ Destroyer),
/* harmony export */   DragonCannon: () => (/* binding */ DragonCannon)
/* harmony export */ });
/* harmony import */ var _assets_img_enemyShips_destroyer_15_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../assets/img/enemyShips/destroyer/15.png */ "./src/assets/img/enemyShips/destroyer/15.png");
/* harmony import */ var _assets_img_enemyShips_Biomech_Dragon_Cannon_sans_handle_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../assets/img/enemyShips/Biomech Dragon Cannon - sans handle.png */ "./src/assets/img/enemyShips/Biomech Dragon Cannon - sans handle.png");
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/** @type { HTMLCanvasElement } */


var Enemy = /*#__PURE__*/function () {
  function Enemy() {
    _classCallCheck(this, Enemy);
    this.frameX = 0;
    this.frameY = 0;
    this.fps = 20;
    this.frameInterval = 1000 / this.fps;
    this.frameTimer = 0;
    this.free = true;
  }
  _createClass(Enemy, [{
    key: "update",
    value: function update(deltaTime) {
      //movement
      if (!this.free) {
        this.x -= this.dx * deltaTime + this.game.speed;
        this.y += this.dy;
        if (this.frameTimer > this.frameInterval) {
          this.frameTimer = 0;
          if (this.frameX < this.maxFrame) this.frameX++;else this.frameX = 0;
        } else {
          this.frameTimer += deltaTime;
        }
        //check if off screen, then reset.
        if (this.x < -this.width) this.reset();
      }
    }
  }, {
    key: "draw",
    value: function draw(context) {
      if (!this.free) {
        context.drawImage(this.image, this.frameX * this.width, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height);
      }
    }
  }, {
    key: "reset",
    value: function reset() {
      this.free = true;
    }
  }, {
    key: "start",
    value: function start() {
      this.free = false;
      this.x = this.game.width + Math.random() * this.game.width * 0.5;
      this.y = Math.random() * this.game.height * 0.5;
    }
  }]);
  return Enemy;
}();
var Destroyer = /*#__PURE__*/function (_Enemy) {
  _inherits(Destroyer, _Enemy);
  var _super = _createSuper(Destroyer);
  function Destroyer(game) {
    var _this;
    _classCallCheck(this, Destroyer);
    _this = _super.call(this);
    _this.game = game;
    _this.image = document.getElementById('destroyer');
    _this.image.src = _assets_img_enemyShips_destroyer_15_png__WEBPACK_IMPORTED_MODULE_0__;
    _this.spriteWidth = 256;
    _this.spriteHeight = 256;
    _this.sizeModifier = Math.random() * 2.25 + .02;
    _this.width = _this.spriteWidth * _this.sizeModifier;
    _this.height = _this.spriteHeight * _this.sizeModifier;
    _this.x = _this.game.width + Math.random() * _this.game.width * 0.5;
    _this.y = Math.random() * _this.game.height * 0.5;
    _this.dx = Math.random() * 0.05 + .01;
    _this.dy = 0;
    _this.hitBox = {
      x: _this.x + _this.width * .10,
      y: _this.y + _this.height * .38,
      width: _this.width * .75,
      height: _this.height * .20
    };
    _this.MaxFrame = 0;
    _this.angle = Math.random() * 100;
    _this.angleSpeed = Math.random() * 2 + .05;
    return _this;
  }
  _createClass(Destroyer, [{
    key: "draw",
    value: function draw(context) {
      if (!this.free) {
        if (this.game.debug) {
          context.strokeStyle = 'red';
          context.strokeRect(this.x + this.width * .10, this.y + this.height * .38, this.width * .75, this.height * .20);
        }
        _get(_getPrototypeOf(Destroyer.prototype), "draw", this).call(this, context);
      }
    }
  }, {
    key: "update",
    value: function update(deltaTime) {
      if (!this.free) {
        this.x -= this.dx * deltaTime + this.game.speed;
        this.y = this.game.height * .5 * Math.cos(this.angle * Math.PI * .00009) + (this.game.height * .5 - this.height);
        this.angle += this.angleSpeed;
        this.hitBox.x = this.x;
        this.hitBox.y = this.y;
        this.hitBox.width = this.width * .80;
        this.hitBox.height = this.height * .45;

        //check if off screen, then reset.
        if (this.x < -this.width) this.reset();
      }
    }
  }]);
  return Destroyer;
}(Enemy);
var DragonCannon = /*#__PURE__*/function (_Enemy2) {
  _inherits(DragonCannon, _Enemy2);
  var _super2 = _createSuper(DragonCannon);
  function DragonCannon(game) {
    var _this2;
    _classCallCheck(this, DragonCannon);
    _this2 = _super2.call(this);
    _this2.game = game;
    _this2.image = document.getElementById('dragonCannon');
    _this2.image.src = _assets_img_enemyShips_Biomech_Dragon_Cannon_sans_handle_png__WEBPACK_IMPORTED_MODULE_1__;
    _this2.spriteWidth = 228;
    _this2.spriteHeight = 139;
    _this2.sizeModifier = Math.random() * .50 + .05;
    _this2.width = _this2.spriteWidth * _this2.sizeModifier;
    _this2.height = _this2.spriteHeight * _this2.sizeModifier;
    _this2.x = _this2.game.width + Math.random() * _this2.game.width * 0.5;
    _this2.y = Math.random() * _this2.game.height * 0.5;
    _this2.dx = Math.random() * .08 + .02;
    _this2.dy = 0;
    _this2.hitBox = {
      x: _this2.x,
      y: _this2.y + _this2.height * .45,
      width: _this2.width * .85,
      height: _this2.height * .40
    };
    _this2.angle = Math.random() * 100;
    _this2.angleSpeed = Math.random() * 2 + .05;
    _this2.MaxFrame = 0;
    return _this2;
  }
  _createClass(DragonCannon, [{
    key: "draw",
    value: function draw(context) {
      if (!this.free) {
        if (this.game.debug) {
          context.strokeStyle = 'red';
          context.strokeRect(this.x, this.y + this.height * .25, this.width * .95, this.height * .6);
        }
        _get(_getPrototypeOf(DragonCannon.prototype), "draw", this).call(this, context);
      }
    }
  }, {
    key: "update",
    value: function update(deltaTime) {
      if (!this.free) {
        this.x -= this.dx * deltaTime + this.game.speed;
        this.y = this.game.height * .5 * Math.sin(this.angle * Math.PI * .00009) + (this.game.height * .5 - this.height);
        this.hitBox.x = this.x;
        this.hitBox.y = this.y + this.height * .25;
        this.hitBox.width = this.width * .95;
        this.hitBox.height = this.height * .6;
        this.angle += this.angleSpeed;

        //check if off screen, then reset.
        if (this.x < -this.width) this.reset();
      }
    }
  }]);
  return DragonCannon;
}(Enemy);

/***/ }),

/***/ "./src/js/explosion.js":
/*!*****************************!*\
  !*** ./src/js/explosion.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Explosion: () => (/* binding */ Explosion)
/* harmony export */ });
/* harmony import */ var _sounds__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sounds */ "./src/js/sounds.js");
/* harmony import */ var _assets_img_explosion_explosions_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/img/explosion/explosions.png */ "./src/assets/img/explosion/explosions.png");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


var Explosion = /*#__PURE__*/function () {
  function Explosion(game) {
    _classCallCheck(this, Explosion);
    this.game = game;
    this.free = true;
    this.x = 0;
    this.y = 0;
    this.dx = 0;
    this.image = document.getElementById('explosions');
    this.image.src = _assets_img_explosion_explosions_png__WEBPACK_IMPORTED_MODULE_1__;
    this.spriteWidth = 300;
    this.spriteHeight = 300;
    this.frameX = 0;
    this.frameY = Math.floor(Math.random() * 3);
    this.maxFrame = 22;
    this.animationTimer = 0;
    this.fpsInverse = .10;
    this.animationInterval = 1000 * this.fpsInverse;
    this.explosionSound = new _sounds__WEBPACK_IMPORTED_MODULE_0__.ExplosionSound();
  }
  _createClass(Explosion, [{
    key: "draw",
    value: function draw(context) {
      if (!this.free) {
        context.drawImage(this.image, this.frameX * this.spriteWidth, this.frameY * this.spriteHeight, this.spriteWidth, this.spriteHeight, this.x - this.spriteWidth * .5, this.y - this.spriteHeight * .5, this.spriteWidth, this.spriteHeight);
      }
    }
  }, {
    key: "update",
    value: function update(deltaTime) {
      this.x += this.dx * (deltaTime + this.game.speed);
      if (this.animationTimer > this.animationInterval) {
        this.frameX++;
        if (this.frameX > this.maxFrame) this.reset();
        this.animationTimer = 0;
      } else {
        this.animationTimer += deltaTime;
      }
    }
  }, {
    key: "reset",
    value: function reset() {
      this.free = true;
    }
  }, {
    key: "start",
    value: function start(x, y, dx) {
      this.free = false;
      this.x = x;
      this.y = y;
      this.frameX = 0;
      this.dx = dx;
    }
  }]);
  return Explosion;
}();

/***/ }),

/***/ "./src/js/game.js":
/*!************************!*\
  !*** ./src/js/game.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Game: () => (/* binding */ Game)
/* harmony export */ });
/* harmony import */ var _background_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./background.js */ "./src/js/background.js");
/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player.js */ "./src/js/player.js");
/* harmony import */ var _input_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./input.js */ "./src/js/input.js");
/* harmony import */ var _asteroid_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./asteroid.js */ "./src/js/asteroid.js");
/* harmony import */ var _enemies_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./enemies.js */ "./src/js/enemies.js");
/* harmony import */ var _particles_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./particles.js */ "./src/js/particles.js");
/* harmony import */ var _projectile_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./projectile.js */ "./src/js/projectile.js");
/* harmony import */ var _explosion_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./explosion.js */ "./src/js/explosion.js");
/* harmony import */ var _gameMessages_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./gameMessages.js */ "./src/js/gameMessages.js");
/* harmony import */ var _UI_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./UI.js */ "./src/js/UI.js");
/* harmony import */ var _sounds_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sounds.js */ "./src/js/sounds.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/** @type { HTMLCanvasElement } */











var Game = /*#__PURE__*/function () {
  function Game(width, height) {
    _classCallCheck(this, Game);
    this.width = width;
    this.height = height;
    this.bottomMargin = 200;
    this.speed = .2;
    this.maxSpeed = .3;
    this.asteroidPool = [];
    this.maxAsteroid = 18;
    this.asteroidTimer = 0;
    this.asteroidInterval = 1500;
    this.dragonCannonPool = [];
    this.maxDragonCannon = 7;
    this.dragonCannonTimer = 0;
    this.dragonCannonInterval = 2500;
    this.destroyerPool = [];
    this.maxDestroyer = 25;
    this.destroyerTimer = 0;
    this.destroyerInterval = 3100;
    this.forwardThrusterParticlePool = [];
    this.maxForwardThrusterParticles = 5;
    this.reverseThrusterParticlePool = [];
    this.maxReverseThrusterParticles = 5;
    this.projectilePool = [];
    this.maxProjectiles = 15;
    this.explosionPool = [];
    this.maxExplosions = 100;
    this.background = new _background_js__WEBPACK_IMPORTED_MODULE_0__.Background(this);
    this.player = new _player_js__WEBPACK_IMPORTED_MODULE_1__.Player(this);
    this.input = new _input_js__WEBPACK_IMPORTED_MODULE_2__.InputHandler(this);
    this.debug = false;
    this.UI = new _UI_js__WEBPACK_IMPORTED_MODULE_9__.UI(this);
    this.gameMessages = [];
    this.score = 0;
    this.winningScore = 100;
    this.fontColor = 'white';
    this.time = 0;
    this.maxTime = 60000;
    this.gameOver = false;
    this.lives = 5;
    this.music = new _sounds_js__WEBPACK_IMPORTED_MODULE_10__.BackgroundMusic();
    this.player.currentState = this.player.states[0];
    this.player.currentState.enter();
    this.createAsteroidPool();
    this.createDestroyerPool();
    this.createDragonCannonPool();
    this.createForwardThrusterParticlePool();
    this.createReverseThrusterParticlePool();
    this.createExplosionPool();
    this.createProjectilePool();
  }
  _createClass(Game, [{
    key: "setGameDimensions",
    value: function setGameDimensions(width, height) {
      this.width = width;
      this.height = height;
    }
  }, {
    key: "createAsteroidPool",
    value: function createAsteroidPool() {
      for (var i = 0; i < this.maxAsteroid; i++) {
        this.asteroidPool.push(new _asteroid_js__WEBPACK_IMPORTED_MODULE_3__.Asteroid(this));
      }
    }
  }, {
    key: "getAsteroid",
    value: function getAsteroid() {
      for (var i = 0; i < this.asteroidPool.length; i++) {
        if (this.asteroidPool[i].free) {
          return this.asteroidPool[i];
        }
      }
    }
  }, {
    key: "createDragonCannonPool",
    value: function createDragonCannonPool() {
      for (var i = 0; i < this.maxDragonCannon; i++) {
        this.dragonCannonPool.push(new _enemies_js__WEBPACK_IMPORTED_MODULE_4__.DragonCannon(this));
      }
      this.dragonCannonPool.sort(function (a, b) {
        return a.width - b.width;
      });
    }
  }, {
    key: "getDragonCannon",
    value: function getDragonCannon() {
      for (var i = 0; i < this.dragonCannonPool.length; i++) {
        if (this.dragonCannonPool[i].free) return this.dragonCannonPool[i];
      }
    }
  }, {
    key: "createDestroyerPool",
    value: function createDestroyerPool() {
      for (var i = 0; i < this.maxDestroyer; i++) {
        this.destroyerPool.push(new _enemies_js__WEBPACK_IMPORTED_MODULE_4__.Destroyer(this));
      }
      this.destroyerPool.sort(function (a, b) {
        return a.width - b.width;
      });
    }
  }, {
    key: "getDestroyer",
    value: function getDestroyer() {
      for (var i = 0; i < this.destroyerPool.length; i++) {
        if (this.destroyerPool[i].free) return this.destroyerPool[i];
      }
    }
  }, {
    key: "createForwardThrusterParticlePool",
    value: function createForwardThrusterParticlePool() {
      for (var i = 0; i < this.maxForwardThrusterParticles; i++) {
        this.forwardThrusterParticlePool.push(new _particles_js__WEBPACK_IMPORTED_MODULE_5__.ForwardThrusterParticle(this));
      }
    }
  }, {
    key: "getForwardThrusterParticle",
    value: function getForwardThrusterParticle() {
      for (var i = 0; i < this.forwardThrusterParticlePool.length; i++) {
        if (this.forwardThrusterParticlePool[i].free) {
          return this.forwardThrusterParticlePool[i];
        }
      }
    }
  }, {
    key: "createReverseThrusterParticlePool",
    value: function createReverseThrusterParticlePool() {
      for (var i = 0; i < this.maxReverseThrusterParticles; i++) {
        this.reverseThrusterParticlePool.push(new _particles_js__WEBPACK_IMPORTED_MODULE_5__.ReverseThrusterParticle(this));
      }
    }
  }, {
    key: "getReverseThrusterParticle",
    value: function getReverseThrusterParticle() {
      for (var i = 0; i < this.reverseThrusterParticlePool.length; i++) {
        if (this.reverseThrusterParticlePool[i].free) {
          return this.reverseThrusterParticlePool[i];
        }
      }
    }
  }, {
    key: "createProjectilePool",
    value: function createProjectilePool() {
      for (var i = 0; i < this.maxProjectiles; i++) {
        this.projectilePool.push(new _projectile_js__WEBPACK_IMPORTED_MODULE_6__.Projectile(this));
      }
    }
  }, {
    key: "getProjectile",
    value: function getProjectile() {
      for (var i = 0; i < this.projectilePool.length; i++) {
        if (this.projectilePool[i].free) {
          return this.projectilePool[i];
        }
      }
    }
  }, {
    key: "createExplosionPool",
    value: function createExplosionPool() {
      for (var i = 0; i < this.maxExplosions; i++) {
        this.explosionPool.push(new _explosion_js__WEBPACK_IMPORTED_MODULE_7__.Explosion(this));
      }
    }
  }, {
    key: "getExplosion",
    value: function getExplosion() {
      for (var i = 0; i < this.explosionPool.length; i++) {
        if (this.explosionPool[i].free) {
          return this.explosionPool[i];
        }
      }
    }
  }, {
    key: "checkCollision",
    value: function checkCollision(a, b) {
      if (a.hitBox.x > b.hitBox.x + b.hitBox.width || a.hitBox.x + a.hitBox.width < b.hitBox.x || a.hitBox.y > b.hitBox.y + b.hitBox.height || a.hitBox.y + a.hitBox.height < b.hitBox.y) {
        return false;
      } else {
        return true;
      }
    }
  }, {
    key: "render",
    value: function render(context, deltaTime) {
      var _this = this;
      this.time += deltaTime;
      this.background.draw(context);
      this.background.update();
      if (this.time > this.maxTime) {
        this.gameOver = true;
      }

      // Periodically creates asteroids
      if (this.asteroidTimer > this.asteroidInterval) {
        var asteroid = this.getAsteroid();
        if (asteroid) asteroid.start();
        this.asteroidTimer = 0;
      } else {
        this.asteroidTimer += deltaTime;
      }
      this.asteroidPool.forEach(function (asteroid) {
        asteroid.draw(context);
        asteroid.update(deltaTime);
      });

      // Periodically creates destroyers
      if (this.destroyerTimer > this.destroyerInterval) {
        var destroyer = this.getDestroyer();
        if (destroyer) destroyer.start();
        this.destroyerTimer = 0;
      } else {
        this.destroyerTimer += deltaTime;
      }
      this.destroyerPool.forEach(function (destroyer) {
        destroyer.draw(context);
        destroyer.update(deltaTime);
      });

      // Periodically creates dragonCannon ships
      if (this.dragonCannonTimer > this.dragonCannonInterval) {
        var dragonCannon = this.getDragonCannon();
        if (dragonCannon) dragonCannon.start();
        this.dragonCannonTimer = 0;
      } else {
        this.dragonCannonTimer += deltaTime;
      }
      this.dragonCannonPool.forEach(function (dragonCannon) {
        dragonCannon.draw(context);
        dragonCannon.update(deltaTime);
      });

      //explosions
      var explosion = this.getExplosion();
      if (explosion) explosion.start(this.x, this.y, 0);
      this.explosionPool.forEach(function (explosion) {
        explosion.draw(context);
        explosion.update(deltaTime);
      });

      // front projectile
      if (this.player.shoot) {
        var projectile = this.getProjectile();
        if (projectile) {
          projectile.start();
        }
      }
      this.projectilePool.forEach(function (projectile) {
        projectile.draw(context);
        projectile.update(deltaTime);
      });
      this.player.update(this.input.keys, deltaTime);
      this.player.draw(context);

      // creates thruster particles
      var forwardThrusterParticle = this.getForwardThrusterParticle();
      if (forwardThrusterParticle) forwardThrusterParticle.start();
      var reverseThrusterParticle = this.getReverseThrusterParticle();
      if (reverseThrusterParticle) reverseThrusterParticle.start();

      //Logic for when to render the front and rear thrusters particle effects and for resetting
      if (this.input.keys.includes('ArrowRight')) {
        this.forwardThrusterParticlePool.forEach(function (forwardThrusterParticle) {
          forwardThrusterParticle.draw(context);
          forwardThrusterParticle.updateForwardThruster(_this.input.keys);
        });
      } else if (this.input.keys.includes('ArrowLeft')) {
        this.reverseThrusterParticlePool.forEach(function (reverseThrusterParticle) {
          reverseThrusterParticle.draw(context);
          reverseThrusterParticle.updateReverseThruster();
        });
      } else if (this.input.keys.includes('ArrowUp') || this.input.keys.includes('ArrowDown') && this.input.keys.length <= 1) {
        this.forwardThrusterParticlePool.forEach(function (forwardThrusterParticle) {
          forwardThrusterParticle.draw(context);
          forwardThrusterParticle.updateForwardThruster(_this.input.keys);
        });
      } else {
        this.forwardThrusterParticlePool.forEach(function (forwardThrusterParticle) {
          forwardThrusterParticle.reset();
        });
        this.reverseThrusterParticlePool.forEach(function (reverseThrusterParticle) {
          reverseThrusterParticle.reset();
        });
      }

      //handle collision - weapon vs Enemy
      this.dragonCannonPool.forEach(function (dragonCannon) {
        _this.projectilePool.forEach(function (projectile) {
          if (!dragonCannon.free && !projectile.free) {
            if (_this.checkCollision(dragonCannon, projectile)) {
              var _explosion = _this.getExplosion();
              if (_explosion) {
                _explosion.start(dragonCannon.x, dragonCannon.y, dragonCannon.dx * -.90);
                _explosion.explosionSound.play();
                _this.score += 100;
                _this.gameMessages.push(new _gameMessages_js__WEBPACK_IMPORTED_MODULE_8__.GameMessage('KA-BAM! NEUTRALIIIZED!! +EZ100', dragonCannon.x, dragonCannon.y, _this.width * .5 + 20, 50));
                dragonCannon.reset();
                projectile.reset();
              }
            }
          }
        });
      });
      this.destroyerPool.forEach(function (destroyer) {
        _this.projectilePool.forEach(function (projectile) {
          if (!destroyer.free && !projectile.free) {
            if (_this.checkCollision(destroyer, projectile)) {
              var _explosion2 = _this.getExplosion();
              if (_explosion2) {
                _explosion2.explosionSound.play();
                _this.score += 50;
                _explosion2.start(destroyer.x, destroyer.y, destroyer.dx * -.90);
                _this.gameMessages.push(new _gameMessages_js__WEBPACK_IMPORTED_MODULE_8__.GameMessage('KA-BOOM! +50', destroyer.x, destroyer.y, _this.width * .5 + 20, 50));
                destroyer.reset();
                projectile.reset();
              }
            }
          }
        });
      });
      //handle messages
      this.gameMessages.forEach(function (message) {
        message.update();
        message.draw(context);
      });
      this.UI.draw(context);
      this.gameMessages = this.gameMessages.filter(function (message) {
        return !message.markedForDeletion;
      });
    }
  }]);
  return Game;
}();

/***/ }),

/***/ "./src/js/gameMessages.js":
/*!********************************!*\
  !*** ./src/js/gameMessages.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GameMessage: () => (/* binding */ GameMessage)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var GameMessage = /*#__PURE__*/function () {
  function GameMessage(value, x, y, destinationX, destinationY) {
    _classCallCheck(this, GameMessage);
    this.value = value;
    this.x = x;
    this.y = y;
    this.destinationX = destinationX;
    this.destinationY = destinationY;
    this.markedForDeletion = false;
    this.timer = 0;
  }
  _createClass(GameMessage, [{
    key: "update",
    value: function update() {
      this.x += (this.destinationX - this.x) * 0.005;
      this.y += (this.destinationY - this.y) * 0.005;
      this.timer++;
      if (this.timer > 400) this.markedForDeletion = true;
    }
  }, {
    key: "draw",
    value: function draw(context) {
      context.font = '20' + 'px ' + 'Bangers';
      context.fillStyle = 'red';
      context.fillText(this.value, this.x, this.y);
      context.fillStyle = 'white';
      context.fillText(this.value, this.x - 1, this.y - 1);
    }
  }]);
  return GameMessage;
}();

/***/ }),

/***/ "./src/js/input.js":
/*!*************************!*\
  !*** ./src/js/input.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InputHandler: () => (/* binding */ InputHandler)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
var InputHandler = /*#__PURE__*/_createClass(function InputHandler(game) {
  var _this = this;
  _classCallCheck(this, InputHandler);
  this.game = game;
  this.keys = [];
  window.addEventListener('keydown', function (e) {
    if ((e.key === 'ArrowDown' || e.key === 'ArrowUp' || e.key === 'ArrowLeft' || e.key === 'ArrowRight' || e.key === 'Enter') && _this.keys.indexOf(e.key) === -1) {
      if (e.key === 'ArrowLeft') {
        if (_this.keys.indexOf('ArrowRight') !== -1) {
          _this.keys.splice(_this.keys.indexOf('ArrowRight'), 1);
        }
      }
      if (e.key === 'ArrowRight') {
        if (_this.keys.indexOf('ArrowLeft') !== -1) {
          _this.keys.splice(_this.keys.indexOf('ArrowLeft'), 1);
        }
      }
      if (e.key === 'ArrowDown') {
        if (_this.keys.indexOf('ArrowUp') !== -1) {
          _this.keys.splice(_this.keys.indexOf('ArrowUp'), 1);
        }
      }
      if (e.key === 'ArrowUp') {
        if (_this.keys.indexOf('ArrowDown') !== -1) {
          _this.keys.splice(_this.keys.indexOf('ArrowDown'), 1);
        }
      }
      _this.game.player.thrusterSound.play();
      _this.keys.push(e.key);
    } else if (e.key === 'd' || e.key === ' ') {
      if (e.key === 'd') _this.game.debug = !_this.game.debug;else {
        _this.game.player.shoot = true;
        _this.game.player.frontWeaponSound.play();
      }
    }
  });
  window.addEventListener('keyup', function (e) {
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp' || e.key === 'ArrowLeft' || e.key === 'ArrowRight' || e.key === 'Enter') {
      _this.game.player.thrusterSound.stop();
      _this.keys.splice(_this.keys.indexOf(e.key), 1);
    } else if (e.key === ' ') {
      _this.game.player.shoot = false;
      _this.game.player.frontWeaponSound.stop();
    }
  });
});

/***/ }),

/***/ "./src/js/particles.js":
/*!*****************************!*\
  !*** ./src/js/particles.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ForwardThrusterParticle: () => (/* binding */ ForwardThrusterParticle),
/* harmony export */   ReverseThrusterParticle: () => (/* binding */ ReverseThrusterParticle)
/* harmony export */ });
/* harmony import */ var _assets_img_engineVisualEffects_fire_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../assets/img/engineVisualEffects/fire.png */ "./src/assets/img/engineVisualEffects/fire.png");
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var Particle = /*#__PURE__*/function () {
  function Particle(game) {
    _classCallCheck(this, Particle);
    this.game = game;
    this.free = true;
  }
  _createClass(Particle, [{
    key: "reset",
    value: function reset() {
      this.free = true;
    }
  }]);
  return Particle;
}();
var ForwardThrusterParticle = /*#__PURE__*/function (_Particle) {
  _inherits(ForwardThrusterParticle, _Particle);
  var _super = _createSuper(ForwardThrusterParticle);
  function ForwardThrusterParticle(game, x, y) {
    var _this;
    _classCallCheck(this, ForwardThrusterParticle);
    _this = _super.call(this, game);
    _this.image = document.getElementById('fire');
    _this.image.src = _assets_img_engineVisualEffects_fire_png__WEBPACK_IMPORTED_MODULE_0__;
    _this.size = Math.random() * 70 + 3;
    _this.x = x;
    _this.y = y - 8;
    _this.dx = 8;
    _this.dy = 0;
    _this.angle = 0;
    _this.angularVelocity = Math.random() * 0.2 - 0.1;
    return _this;
  }
  _createClass(ForwardThrusterParticle, [{
    key: "updateForwardThruster",
    value: function updateForwardThruster(input) {
      if (!this.free && !input.includes('ArrowLeft')) {
        this.x -= this.dx + this.game.speed;
        this.y -= this.dy;
        this.angle += this.angularVelocity;
        this.x += Math.sin(this.angle * 10);
        if (this.x < this.game.player.x - 15) _get(_getPrototypeOf(ForwardThrusterParticle.prototype), "reset", this).call(this);
      }
    }
  }, {
    key: "draw",
    value: function draw(context) {
      if (!this.free) {
        context.save();
        context.translate(this.x, this.y);
        context.rotate(this.angle);
        context.drawImage(this.image, -this.size * 0.5, -this.size * 0.5, this.size, this.size);
        context.restore();
      }
    }
  }, {
    key: "start",
    value: function start() {
      this.free = false;
      this.x = this.game.player.x + this.game.player.width * .16;
      this.y = this.game.player.y + this.game.player.height * 0.5;
    }
  }]);
  return ForwardThrusterParticle;
}(Particle);
var ReverseThrusterParticle = /*#__PURE__*/function (_Particle2) {
  _inherits(ReverseThrusterParticle, _Particle2);
  var _super2 = _createSuper(ReverseThrusterParticle);
  function ReverseThrusterParticle(game, x, y) {
    var _this2;
    _classCallCheck(this, ReverseThrusterParticle);
    _this2 = _super2.call(this, game);
    _this2.image = document.getElementById('fire');
    _this2.image.src = _assets_img_engineVisualEffects_fire_png__WEBPACK_IMPORTED_MODULE_0__;
    _this2.size = Math.random() * 70 + 3;
    _this2.x = x;
    _this2.y = y - 8;
    _this2.dx = 8;
    _this2.dy = 0;
    _this2.angle = 0;
    _this2.angularVelocity = Math.random() * 0.2 - 0.1;
    return _this2;
  }
  _createClass(ReverseThrusterParticle, [{
    key: "updateReverseThruster",
    value: function updateReverseThruster() {
      if (!this.free) {
        this.x += this.dx + this.game.speed;
        this.y += this.dy;
        this.angle += this.angularVelocity;
        this.x += Math.sin(this.angle * 10);
        if (this.x > this.game.player.x + this.game.player.width * 1.2) _get(_getPrototypeOf(ReverseThrusterParticle.prototype), "reset", this).call(this);
      }
    }
  }, {
    key: "draw",
    value: function draw(context) {
      if (!this.free) {
        context.save();
        context.translate(this.x, this.y);
        context.rotate(this.angle);
        context.drawImage(this.image, -this.size * 0.5, -this.size * 0.5, this.size, this.size);
        context.restore();
      }
    }
  }, {
    key: "start",
    value: function start() {
      this.free = false;
      this.x = this.game.player.x + this.game.player.width * 0.8;
      this.y = this.game.player.y + this.game.player.height * 0.8;
    }
  }]);
  return ReverseThrusterParticle;
}(Particle);

/***/ }),

/***/ "./src/js/player.js":
/*!**************************!*\
  !*** ./src/js/player.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Player: () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _playerStates__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./playerStates */ "./src/js/playerStates.js");
/* harmony import */ var _sounds__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sounds */ "./src/js/sounds.js");
/* harmony import */ var _assets_img_playerShips_TM_1_Aerodynamics_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../assets/img/playerShips/TM_1_Aerodynamics.png */ "./src/assets/img/playerShips/TM_1_Aerodynamics.png");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }




var Player = /*#__PURE__*/function () {
  function Player(game) {
    _classCallCheck(this, Player);
    this.game = game;
    this.spriteWidth = 477;
    this.spriteHeight = 181;
    this.sizeModifier = .12;
    this.width = this.spriteWidth * this.sizeModifier;
    this.height = this.spriteHeight * this.sizeModifier;
    this.x = 0;
    this.y = this.game.height - this.height - this.game.bottomMargin;
    this.image = document.getElementById('player_ship');
    this.image.src = _assets_img_playerShips_TM_1_Aerodynamics_png__WEBPACK_IMPORTED_MODULE_2__;
    this.frameX = 0;
    this.frameY = 0;
    this.maxFrame;
    this.fps = 20;
    this.frameInterval = 1000 / this.fps;
    this.frameTime = 0;
    this.dx = 0;
    this.dy = 0;
    this.maxDx = 4.5;
    this.maxDy = 4.5;
    this.states = [new _playerStates__WEBPACK_IMPORTED_MODULE_0__.Floating(this.game), new _playerStates__WEBPACK_IMPORTED_MODULE_0__.ForwardTravel(this.game), new _playerStates__WEBPACK_IMPORTED_MODULE_0__.ReverseTravel(this.game), new _playerStates__WEBPACK_IMPORTED_MODULE_0__.UpwardTravel(this.game), new _playerStates__WEBPACK_IMPORTED_MODULE_0__.DownwardTravel(this.game), new _playerStates__WEBPACK_IMPORTED_MODULE_0__.UpwardForwardTravel(this.game), new _playerStates__WEBPACK_IMPORTED_MODULE_0__.UpwardBackTravel(this.game), new _playerStates__WEBPACK_IMPORTED_MODULE_0__.DownwardForwardTravel(this.game), new _playerStates__WEBPACK_IMPORTED_MODULE_0__.DownwardBackTravel(this.game)];
    this.currentState = null;
    this.thrusterSound = new _sounds__WEBPACK_IMPORTED_MODULE_1__.ThrusterSound();
    this.frontWeaponSound = new _sounds__WEBPACK_IMPORTED_MODULE_1__.FrontWeaponSound();
    this.shoot = false;
  }
  _createClass(Player, [{
    key: "update",
    value: function update(input, deltaTime) {
      this.currentState.handleInput(input);

      //horizontal movement
      this.x += this.dx;
      if (input.includes('ArrowLeft')) {
        this.dx = -this.maxDx;
      } else if (input.includes('ArrowRight')) {
        this.dx = this.maxDx;
      } else {
        this.dx = 0;
      }

      // horizontal boundaries
      if (this.x < 0) this.x = 0;
      if (this.x > this.game.width - this.width) this.x = this.game.width - this.width;

      // vertical movement
      this.y += this.dy;
      if (input.includes('ArrowUp')) {
        this.dy = -this.maxDy;
      } else if (input.includes('ArrowDown')) {
        this.dy = this.maxDy;
      } else this.dy = 0;

      // vertical boundaries
      if (this.y < 0) this.y = 0;
      if (this.y > this.game.height - this.height) this.y = this.game.height - this.height;

      //sprite animation
      if (this.frameTimer > this.frameInterval) {
        this.frameTimer = 0;
        if (this.frameX < this.maxFrame) this.frameX++;else {
          this.frameX = 0;
        }
      } else {
        this.frameTimer += deltaTime;
      }
    }
  }, {
    key: "draw",
    value: function draw(context) {
      if (this.game.debug) context.strokeRect(this.x, this.y, this.width, this.height);
      context.drawImage(this.image, this.frameX * this.spriteWidth, this.frameY * this.spriteHeight, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height);
    }
  }, {
    key: "setState",
    value: function setState(state, dx) {
      this.currentState = this.states[state];
      this.game.speed = this.game.maxSpeed * dx;
      this.currentState.enter();
    }
  }]);
  return Player;
}();

/***/ }),

/***/ "./src/js/playerStates.js":
/*!********************************!*\
  !*** ./src/js/playerStates.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DownwardBackTravel: () => (/* binding */ DownwardBackTravel),
/* harmony export */   DownwardForwardTravel: () => (/* binding */ DownwardForwardTravel),
/* harmony export */   DownwardTravel: () => (/* binding */ DownwardTravel),
/* harmony export */   Floating: () => (/* binding */ Floating),
/* harmony export */   ForwardTravel: () => (/* binding */ ForwardTravel),
/* harmony export */   ReverseTravel: () => (/* binding */ ReverseTravel),
/* harmony export */   UpwardBackTravel: () => (/* binding */ UpwardBackTravel),
/* harmony export */   UpwardForwardTravel: () => (/* binding */ UpwardForwardTravel),
/* harmony export */   UpwardTravel: () => (/* binding */ UpwardTravel)
/* harmony export */ });
/* harmony import */ var _particles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./particles.js */ "./src/js/particles.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var states = {
  FLOATING: 0,
  FORWARD_TRAVEL: 1,
  REVERSE_TRAVEL: 2,
  UPWARD_TRAVEL: 3,
  DOWNWARD_TRAVEL: 4,
  UPWARD_FORWARD: 5,
  UPWARD_BACK: 6,
  DOWNWARD_FORWARD: 7,
  DOWNWARD_BACK: 8
};
var State = /*#__PURE__*/_createClass(function State(state, game) {
  _classCallCheck(this, State);
  this.state = state;
  this.game = game;
});
var Floating = /*#__PURE__*/function (_State) {
  _inherits(Floating, _State);
  var _super = _createSuper(Floating);
  function Floating(game) {
    _classCallCheck(this, Floating);
    return _super.call(this, 'FLOATING', game);
  }
  _createClass(Floating, [{
    key: "enter",
    value: function enter() {
      this.game.player.frameX = 0;
      this.game.player.maxFrame = 0;
      this.game.player.frameY = 0;
    }
  }, {
    key: "handleInput",
    value: function handleInput(input) {
      if (input.includes('ArrowRight') && input.includes('ArrowUp')) {
        this.game.player.setState(states.UPWARD_FORWARD, 1);
      } else if (input.includes('ArrowRight') && input.includes('ArrowDown')) {
        this.game.player.setState(states.DOWNWARD_FORWARD, 1);
      } else if (input.includes('ArrowLeft') && input.includes('ArrowUp')) {
        this.game.player.setState(states.UPWARD_BACK, 1);
      } else if (input.includes('ArrowLeft') && input.includes('ArrowDown')) {
        this.game.player.setState(states.DOWNWARD_BACK, 1);
      } else if (input.includes('ArrowRight') && input.length === 1) {
        this.game.player.setState(states.FORWARD_TRAVEL, 1);
      } else if (input.includes('ArrowLeft') && input.length === 1) {
        this.game.player.setState(states.REVERSE_TRAVEL, 1);
      } else if (input.includes('ArrowUp') && input.length === 1) {
        this.game.player.setState(states.UPWARD_TRAVEL, 1);
      } else if (input.includes('ArrowDown') && input.length === 1) {
        this.game.player.setState(states.DOWNWARD_TRAVEL, 1);
      } else {
        this.game.player.setState(states.FLOATING, 1);
      }
    }
  }]);
  return Floating;
}(State);
var ForwardTravel = /*#__PURE__*/function (_State2) {
  _inherits(ForwardTravel, _State2);
  var _super2 = _createSuper(ForwardTravel);
  function ForwardTravel(game) {
    _classCallCheck(this, ForwardTravel);
    return _super2.call(this, 'FORWARD_TRAVEL', game);
  }
  _createClass(ForwardTravel, [{
    key: "enter",
    value: function enter() {
      this.game.player.frameX = 0;
      this.game.player.maxFrame = 0;
      this.game.player.frameY = 0;
    }
  }, {
    key: "handleInput",
    value: function handleInput(input) {
      this.game.forwardThrusterParticlePool.unshift(new _particles_js__WEBPACK_IMPORTED_MODULE_0__.ForwardThrusterParticle(this.game, this.game.player.x + this.game.player.width * .16, this.game.player.y + this.game.player.height * 0.5));
      if (input.includes('ArrowRight') && input.includes('ArrowUp')) {
        this.game.player.setState(states.UPWARD_FORWARD, 1);
      } else if (input.includes('ArrowRight') && input.includes('ArrowDown')) {
        this.game.player.setState(states.DOWNWARD_FORWARD, 1);
      } else if (input.includes('ArrowLeft') && input.includes('ArrowUp')) {
        this.game.player.setState(states.UPWARD_BACK, 1);
      } else if (input.includes('ArrowLeft') && input.includes('ArrowDown')) {
        this.game.player.setState(states.DOWNWARD_BACK, 1);
      } else if (input.includes('ArrowLeft') && input.length === 1) {
        this.game.player.setState(states.REVERSE_TRAVEL, 1);
      } else if (input.includes('ArrowUp') && input.length == 1) {
        this.game.player.setState(states.UPWARD_TRAVEL, 1);
      } else if (input.includes('ArrowDown') && input.length == 1) {
        this.game.player.setState(states.DOWNWARD_TRAVEL, 1);
      } else {
        this.game.player.setState(states.FORWARD_TRAVEL, 1);
      }
    }
  }]);
  return ForwardTravel;
}(State);
var UpwardForwardTravel = /*#__PURE__*/function (_State3) {
  _inherits(UpwardForwardTravel, _State3);
  var _super3 = _createSuper(UpwardForwardTravel);
  function UpwardForwardTravel(game) {
    _classCallCheck(this, UpwardForwardTravel);
    return _super3.call(this, 'UPWARD_FORWARD', game);
  }
  _createClass(UpwardForwardTravel, [{
    key: "enter",
    value: function enter() {
      this.game.player.frameX = 0;
      this.game.player.maxFrame = 0;
      this.game.player.frameY = 0;
    }
  }, {
    key: "handleInput",
    value: function handleInput(input) {
      this.game.forwardThrusterParticlePool.unshift(new _particles_js__WEBPACK_IMPORTED_MODULE_0__.ForwardThrusterParticle(this.game, this.game.player.x + this.game.player.width * .16, this.game.player.y + this.game.player.height * 0.5));
      if (input.includes('ArrowRight') && input.includes('ArrowDown')) {
        this.game.player.setState(states.DOWNWARD_FORWARD, 1);
      } else if (input.includes('ArrowLeft') && input.includes('ArrowUp')) {
        this.game.player.setState(states.UPWARD_BACK, 1);
      } else if (input.includes('ArrowLeft') && input.includes('ArrowDown')) {
        this.game.player.setState(states.DOWNWARD_BACK, 1);
      } else if (input.includes('ArrowLeft') && input.length === 1) {
        this.game.player.setState(states.REVERSE_TRAVEL, 1);
      } else if (input.includes('ArrowUp') && input.length == 1) {
        this.game.player.setState(states.UPWARD_TRAVEL, 1);
      } else if (input.includes('ArrowDown') && input.length == 1) {
        this.game.player.setState(states.DOWNWARD_TRAVEL, 1);
      } else {
        this.game.player.setState(states.UPWARD_FORWARD, 1);
      }
    }
  }]);
  return UpwardForwardTravel;
}(State);
var DownwardForwardTravel = /*#__PURE__*/function (_State4) {
  _inherits(DownwardForwardTravel, _State4);
  var _super4 = _createSuper(DownwardForwardTravel);
  function DownwardForwardTravel(game) {
    _classCallCheck(this, DownwardForwardTravel);
    return _super4.call(this, 'DOWNWARD_FORWARD', game);
  }
  _createClass(DownwardForwardTravel, [{
    key: "enter",
    value: function enter() {
      this.game.player.frameX = 0;
      this.game.player.maxFrame = 0;
      this.game.player.frameY = 0;
    }
  }, {
    key: "handleInput",
    value: function handleInput(input) {
      this.game.forwardThrusterParticlePool.unshift(new _particles_js__WEBPACK_IMPORTED_MODULE_0__.ForwardThrusterParticle(this.game, this.game.player.x + this.game.player.width * .16, this.game.player.y + this.game.player.height * 0.5));
      if (input.includes('ArrowRight') && input.includes('ArrowUp')) {
        this.game.player.setState(states.UPWARD_FORWARD, 1);
      } else if (input.includes('ArrowLeft') && input.includes('ArrowUp')) {
        this.game.player.setState(states.UPWARD_BACK, 1);
      } else if (input.includes('ArrowLeft') && input.includes('ArrowDown')) {
        this.game.player.setState(states.DOWNWARD_BACK, 1);
      } else if (input.includes('ArrowLeft') && input.length === 1) {
        this.game.player.setState(states.REVERSE_TRAVEL, 1);
      } else if (input.includes('ArrowUp') && input.length == 1) {
        this.game.player.setState(states.UPWARD_TRAVEL, 1);
      } else if (input.includes('ArrowDown') && input.length == 1) {
        this.game.player.setState(states.DOWNWARD_TRAVEL, 1);
      } else {
        this.game.player.setState(states.DOWNWARD_FORWARD, 1);
      }
    }
  }]);
  return DownwardForwardTravel;
}(State);
var ReverseTravel = /*#__PURE__*/function (_State5) {
  _inherits(ReverseTravel, _State5);
  var _super5 = _createSuper(ReverseTravel);
  function ReverseTravel(game) {
    _classCallCheck(this, ReverseTravel);
    return _super5.call(this, 'REVERSE_TRAVEL', game);
  }
  _createClass(ReverseTravel, [{
    key: "enter",
    value: function enter() {
      this.game.player.frameX = 0;
      this.game.player.maxFrame = 0;
      this.game.player.frameY = 0;
    }
  }, {
    key: "handleInput",
    value: function handleInput(input) {
      this.game.reverseThrusterParticlePool.unshift(new _particles_js__WEBPACK_IMPORTED_MODULE_0__.ReverseThrusterParticle(this.game, this.game.player.x + this.game.player.width * 0.8, this.game.player.y + this.game.player.height * 0.8));
      if (input.includes('ArrowRight') && input.includes('ArrowUp')) {
        this.game.player.setState(states.UPWARD_FORWARD, 1);
      } else if (input.includes('ArrowRight') && input.includes('ArrowDown')) {
        this.game.player.setState(states.DOWNWARD_FORWARD, 1);
      } else if (input.includes('ArrowLeft') && input.includes('ArrowUp')) {
        this.game.player.setState(states.UPWARD_BACK, 1);
      } else if (input.includes('ArrowLeft') && input.includes('ArrowDown')) {
        this.game.player.setState(states.DOWNWARD_BACK, 1);
      } else if (input.includes('ArrowRight') && input.length == 1) {
        this.game.player.setState(states.FORWARD_TRAVEL, 1);
      } else if (input.includes('ArrowUp') && input.length == 1) {
        this.game.player.setState(states.UPWARD_TRAVEL, 1);
      } else if (input.includes('ArrowDown') && input.length == 1) {
        this.game.player.setState(states.DOWNWARD_TRAVEL, 1);
      } else {
        this.game.player.setState(states.REVERSE_TRAVEL, 1);
      }
    }
  }]);
  return ReverseTravel;
}(State);
var UpwardBackTravel = /*#__PURE__*/function (_State6) {
  _inherits(UpwardBackTravel, _State6);
  var _super6 = _createSuper(UpwardBackTravel);
  function UpwardBackTravel(game) {
    _classCallCheck(this, UpwardBackTravel);
    return _super6.call(this, 'UPWARD_BACK', game);
  }
  _createClass(UpwardBackTravel, [{
    key: "enter",
    value: function enter() {
      this.game.player.frameX = 0;
      this.game.player.maxFrame = 0;
      this.game.player.frameY = 0;
    }
  }, {
    key: "handleInput",
    value: function handleInput(input) {
      this.game.reverseThrusterParticlePool.unshift(new _particles_js__WEBPACK_IMPORTED_MODULE_0__.ReverseThrusterParticle(this.game, this.game.player.x + this.game.player.width * 0.8, this.game.player.y + this.game.player.height * 0.8));
      if (input.includes('ArrowRight') && input.includes('ArrowUp')) {
        this.game.player.setState(states.UPWARD_FORWARD, 1);
      } else if (input.includes('ArrowRight') && input.includes('ArrowDown')) {
        this.game.player.setState(states.DOWNWARD_FORWARD, 1);
      } else if (input.includes('ArrowLeft') && input.includes('ArrowDown')) {
        this.game.player.setState(states.DOWNWARD_BACK, 1);
      } else if (input.includes('ArrowRight') && input.length == 1) {
        this.game.player.setState(states.FORWARD_TRAVEL, 1);
      } else if (input.includes('ArrowUp') && input.length == 1) {
        this.game.player.setState(states.UPWARD_TRAVEL, 1);
      } else if (input.includes('ArrowDown') && input.length == 1) {
        this.game.player.setState(states.DOWNWARD_TRAVEL, 1);
      } else {
        this.game.player.setState(states.UPWARD_BACK, 1);
      }
    }
  }]);
  return UpwardBackTravel;
}(State);
var DownwardBackTravel = /*#__PURE__*/function (_State7) {
  _inherits(DownwardBackTravel, _State7);
  var _super7 = _createSuper(DownwardBackTravel);
  function DownwardBackTravel(game) {
    _classCallCheck(this, DownwardBackTravel);
    return _super7.call(this, 'DOWNWARD_BACK', game);
  }
  _createClass(DownwardBackTravel, [{
    key: "enter",
    value: function enter() {
      this.game.player.frameX = 0;
      this.game.player.maxFrame = 0;
      this.game.player.frameY = 0;
    }
  }, {
    key: "handleInput",
    value: function handleInput(input) {
      this.game.reverseThrusterParticlePool.unshift(new _particles_js__WEBPACK_IMPORTED_MODULE_0__.ReverseThrusterParticle(this.game, this.game.player.x + this.game.player.width * 0.8, this.game.player.y + this.game.player.height * 0.8));
      if (input.includes('ArrowRight') && input.includes('ArrowUp')) {
        this.game.player.setState(states.UPWARD_FORWARD, 1);
      } else if (input.includes('ArrowRight') && input.includes('ArrowDown')) {
        this.game.player.setState(states.DOWNWARD_FORWARD, 1);
      } else if (input.includes('ArrowLeft') && input.includes('ArrowUp')) {
        this.game.player.setState(states.UPWARD_BACK, 1);
      } else if (input.includes('ArrowRight') && input.length == 1) {
        this.game.player.setState(states.FORWARD_TRAVEL, 1);
      } else if (input.includes('ArrowUp') && input.length == 1) {
        this.game.player.setState(states.UPWARD_TRAVEL, 1);
      } else if (input.includes('ArrowDown') && input.length == 1) {
        this.game.player.setState(states.DOWNWARD_TRAVEL, 1);
      } else {
        this.game.player.setState(states.DOWNWARD_BACK, 1);
      }
    }
  }]);
  return DownwardBackTravel;
}(State);
var UpwardTravel = /*#__PURE__*/function (_State8) {
  _inherits(UpwardTravel, _State8);
  var _super8 = _createSuper(UpwardTravel);
  function UpwardTravel(game) {
    _classCallCheck(this, UpwardTravel);
    return _super8.call(this, 'UPWARD_TRAVEL', game);
  }
  _createClass(UpwardTravel, [{
    key: "enter",
    value: function enter() {
      this.game.player.frameX = 0;
      this.game.player.maxFrame = 0;
      this.game.player.frameY = 0;
    }
  }, {
    key: "handleInput",
    value: function handleInput(input) {
      this.game.forwardThrusterParticlePool.unshift(new _particles_js__WEBPACK_IMPORTED_MODULE_0__.ForwardThrusterParticle(this.game, this.game.player.x + this.game.player.width * .16, this.game.player.y + this.game.player.height * 0.5));
      if (input.includes('ArrowRight') && input.includes('ArrowUp')) {
        this.game.player.setState(states.UPWARD_FORWARD, 1);
      } else if (input.includes('ArrowRight') && input.includes('ArrowDown')) {
        this.game.player.setState(states.DOWNWARD_FORWARD, 1);
      } else if (input.includes('ArrowLeft') && input.includes('ArrowUp')) {
        this.game.player.setState(states.UPWARD_BACK, 1);
      } else if (input.includes('ArrowLeft') && input.includes('ArrowDown')) {
        this.game.player.setState(states.DOWNWARD_BACK, 1);
      } else if (input.includes('ArrowRight') && input.length == 1) {
        this.game.player.setState(states.FORWARD_TRAVEL, 1);
      } else if (input.includes('ArrowLeft') && input.length == 1) {
        this.game.player.setState(states.REVERSE_TRAVEL, 1);
      } else if (input.includes('ArrowDown') && input.length == 1) {
        this.game.player.setState(states.DOWNWARD_TRAVEL, 1);
      } else {
        this.game.player.setState(states.UPWARD_TRAVEL, 1);
      }
    }
  }]);
  return UpwardTravel;
}(State);
var DownwardTravel = /*#__PURE__*/function (_State9) {
  _inherits(DownwardTravel, _State9);
  var _super9 = _createSuper(DownwardTravel);
  function DownwardTravel(game) {
    _classCallCheck(this, DownwardTravel);
    return _super9.call(this, 'DOWNWARD_TRAVEL', game);
  }
  _createClass(DownwardTravel, [{
    key: "enter",
    value: function enter() {
      this.game.player.frameX = 0;
      this.game.player.maxFrame = 0;
      this.game.player.frameY = 0;
    }
  }, {
    key: "handleInput",
    value: function handleInput(input) {
      this.game.forwardThrusterParticlePool.unshift(new _particles_js__WEBPACK_IMPORTED_MODULE_0__.ForwardThrusterParticle(this.game, this.game.player.x + this.game.player.width * .16, this.game.player.y + this.game.player.height * 0.5));
      if (input.includes('ArrowRight') && input.includes('ArrowUp')) {
        this.game.player.setState(states.UPWARD_FORWARD, 1);
      } else if (input.includes('ArrowRight') && input.includes('ArrowDown')) {
        this.game.player.setState(states.DOWNWARD_FORWARD, 1);
      } else if (input.includes('ArrowLeft') && input.includes('ArrowUp')) {
        this.game.player.setState(states.UPWARD_BACK, 1);
      } else if (input.includes('ArrowLeft') && input.includes('ArrowDown')) {
        this.game.player.setState(states.DOWNWARD_BACK, 1);
      } else if (input.includes('ArrowRight') && input.length == 1) {
        this.game.player.setState(states.FORWARD_TRAVEL, 1);
      } else if (input.includes('ArrowLeft') && input.length == 1) {
        this.game.player.setState(states.REVERSE_TRAVEL, 1);
      } else if (input.includes('ArrowUp') && input.length == 1) {
        this.game.player.setState(states.UPWARD_TRAVEL, 1);
      } else {
        this.game.player.setState(states.DOWNWARD_TRAVEL, 1);
      }
    }
  }]);
  return DownwardTravel;
}(State);

/***/ }),

/***/ "./src/js/projectile.js":
/*!******************************!*\
  !*** ./src/js/projectile.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Projectile: () => (/* binding */ Projectile)
/* harmony export */ });
/* harmony import */ var _assets_img_projectiles_ArcaneEffectSpriteSheet_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../assets/img/projectiles/ArcaneEffectSpriteSheet.png */ "./src/assets/img/projectiles/ArcaneEffectSpriteSheet.png");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var Projectile = /*#__PURE__*/function () {
  function Projectile(game) {
    _classCallCheck(this, Projectile);
    this.game = game;
    this.free = true;
    this.image = document.getElementById('projectile');
    this.image.src = _assets_img_projectiles_ArcaneEffectSpriteSheet_png__WEBPACK_IMPORTED_MODULE_0__;
    this.spriteWidth = 124;
    this.spriteHeight = 108;
    this.sizeModifier = .35;
    this.width = this.spriteWidth * this.sizeModifier;
    this.height = this.spriteHeight * this.sizeModifier;
    this.x = this.game.player.x + this.game.player.width * 0.8;
    this.y = this.game.player.y - this.game.player.height * .220;
    this.dx = 2;
    this.dy = 0;
    this.hitBox = {
      x: this.x,
      y: this.y,
      width: this.width,
      height: this.height
    };
    this.angle = 0;
    this.angularVelocity = Math.random() * 0.2 - 0.1;
    this.frameX = 0;
    this.frameY = 0;
    this.maxFrame = 5;
    this.animationTimer = 0;
    this.fpsInverse = .143;
    this.animationInterval = 1000 * this.fpsInverse;
  }
  _createClass(Projectile, [{
    key: "draw",
    value: function draw(context) {
      if (!this.free) {
        if (this.game.debug) {
          context.strokeStyle = 'red';
          context.strokeRect(this.x, this.y, this.width, this.height);
        }
        context.drawImage(this.image, this.frameX * this.spriteWidth, this.frameY, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height);
      }
    }
  }, {
    key: "update",
    value: function update(deltaTime) {
      if (!this.free) {
        //horizontal movement
        this.x += this.dx * deltaTime + this.game.speed;
        this.angle += this.angularVelocity;
        this.x += Math.sin(this.angle * 1);
        this.hitBox.x = this.x;
        this.hitBox.y = this.y;
        if (this.x > this.game.width || this.x > this.game.player.x + this.game.width * .5) {
          this.reset();
        }

        //sprite animation
        if (this.animationTimer > this.animationInterval) {
          this.frameX++;
          if (this.frameX > this.maxFrame) this.reset();
          this.animationTimer = 0;
        } else {
          this.animationTimer += deltaTime;
        }
      }
    }
  }, {
    key: "reset",
    value: function reset() {
      this.free = true;
    }
  }, {
    key: "start",
    value: function start() {
      this.free = false;
      this.x = this.game.player.x + this.game.player.width * 0.8;
      this.y = this.game.player.y - this.game.player.height * .35;
      this.frameX = 0;
    }
  }]);
  return Projectile;
}();

/***/ }),

/***/ "./src/js/sounds.js":
/*!**************************!*\
  !*** ./src/js/sounds.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BackgroundMusic: () => (/* binding */ BackgroundMusic),
/* harmony export */   ExplosionSound: () => (/* binding */ ExplosionSound),
/* harmony export */   FrontWeaponSound: () => (/* binding */ FrontWeaponSound),
/* harmony export */   ThrusterSound: () => (/* binding */ ThrusterSound)
/* harmony export */ });
/* harmony import */ var _assets_audioEffects_ScatterNoise1_mp3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../assets/audioEffects/ScatterNoise1.mp3 */ "./src/assets/audioEffects/ScatterNoise1.mp3");
/* harmony import */ var _assets_audioEffects_explosionAudio_explosion1_wav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../assets/audioEffects/explosionAudio/explosion1.wav */ "./src/assets/audioEffects/explosionAudio/explosion1.wav");
/* harmony import */ var _assets_audioEffects_impactAudio_explosion2_wav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../assets/audioEffects/impactAudio/explosion2.wav */ "./src/assets/audioEffects/impactAudio/explosion2.wav");
/* harmony import */ var _assets_audioEffects_impactAudio_explosion3_wav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../assets/audioEffects/impactAudio/explosion3.wav */ "./src/assets/audioEffects/impactAudio/explosion3.wav");
/* harmony import */ var _assets_audioEffects_impactAudio_explosion4_wav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../assets/audioEffects/impactAudio/explosion4.wav */ "./src/assets/audioEffects/impactAudio/explosion4.wav");
/* harmony import */ var _assets_audioEffects_impactAudio_hjm_big_explosion_3_wav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../assets/audioEffects/impactAudio/hjm-big_explosion_3.wav */ "./src/assets/audioEffects/impactAudio/hjm-big_explosion_3.wav");
/* harmony import */ var _assets_audioEffects_impactAudio_NenadSimic_Muffled_Distant_Explosion_wav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../assets/audioEffects/impactAudio/NenadSimic - Muffled Distant Explosion.wav */ "./src/assets/audioEffects/impactAudio/NenadSimic - Muffled Distant Explosion.wav");
/* harmony import */ var _assets_music_floatingState_throughSpace_ogg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../assets/music/floatingState/throughSpace.ogg */ "./src/assets/music/floatingState/throughSpace.ogg");
/* harmony import */ var _assets_music_floatingState_enchantedTiki86_mp3__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../assets/music/floatingState/enchantedTiki86.mp3 */ "./src/assets/music/floatingState/enchantedTiki86.mp3");
/* harmony import */ var howler__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! howler */ "./node_modules/howler/dist/howler.js");
/* harmony import */ var howler__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(howler__WEBPACK_IMPORTED_MODULE_9__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }










var ThrusterSound = /*#__PURE__*/function () {
  function ThrusterSound() {
    _classCallCheck(this, ThrusterSound);
    this.thrusterSound = new howler__WEBPACK_IMPORTED_MODULE_9__.Howl({
      src: [_assets_audioEffects_ScatterNoise1_mp3__WEBPACK_IMPORTED_MODULE_0__],
      volume: 1.0
    });
  }
  _createClass(ThrusterSound, [{
    key: "play",
    value: function play() {
      this.thrusterSound.play();
    }
  }, {
    key: "stop",
    value: function stop() {
      this.thrusterSound.stop();
    }
  }]);
  return ThrusterSound;
}();
var FrontWeaponSound = /*#__PURE__*/function () {
  function FrontWeaponSound() {
    _classCallCheck(this, FrontWeaponSound);
    this.frontWeaponSound = new howler__WEBPACK_IMPORTED_MODULE_9__.Howl({
      src: [_assets_audioEffects_explosionAudio_explosion1_wav__WEBPACK_IMPORTED_MODULE_1__],
      volume: 0.30
    });
  }
  _createClass(FrontWeaponSound, [{
    key: "play",
    value: function play() {
      this.frontWeaponSound.play();
    }
  }, {
    key: "stop",
    value: function stop() {
      this.frontWeaponSound.stop();
    }
  }]);
  return FrontWeaponSound;
}();
var ExplosionSound = /*#__PURE__*/function () {
  function ExplosionSound() {
    _classCallCheck(this, ExplosionSound);
    this.explosionSoundsOptions = [_assets_audioEffects_impactAudio_explosion2_wav__WEBPACK_IMPORTED_MODULE_2__, _assets_audioEffects_impactAudio_explosion3_wav__WEBPACK_IMPORTED_MODULE_3__, _assets_audioEffects_impactAudio_explosion4_wav__WEBPACK_IMPORTED_MODULE_4__, _assets_audioEffects_impactAudio_hjm_big_explosion_3_wav__WEBPACK_IMPORTED_MODULE_5__, _assets_audioEffects_impactAudio_NenadSimic_Muffled_Distant_Explosion_wav__WEBPACK_IMPORTED_MODULE_6__];
    this.chosenExplosionSound = this.explosionSoundsOptions[Math.floor(Math.random() * (this.explosionSoundsOptions.length - 1))];
    this.explosionSound = new howler__WEBPACK_IMPORTED_MODULE_9__.Howl({
      src: [this.chosenExplosionSound],
      volume: 1.0
    });
  }
  _createClass(ExplosionSound, [{
    key: "play",
    value: function play() {
      this.explosionSound.play();
    }
  }, {
    key: "stop",
    value: function stop() {
      this.explosionSound.stop();
    }
  }]);
  return ExplosionSound;
}();
var BackgroundMusic = /*#__PURE__*/function () {
  function BackgroundMusic() {
    _classCallCheck(this, BackgroundMusic);
    this.backgroundMusicOptions = [_assets_music_floatingState_throughSpace_ogg__WEBPACK_IMPORTED_MODULE_7__, _assets_music_floatingState_enchantedTiki86_mp3__WEBPACK_IMPORTED_MODULE_8__];
    this.chosenBackgroundMusic = this.backgroundMusicOptions[Math.floor(Math.random() * (this.backgroundMusicOptions.length - 1))];
    this.backgroundMusic = new howler__WEBPACK_IMPORTED_MODULE_9__.Howl({
      src: [this.chosenBackgroundMusic],
      loop: true,
      volume: 0.45
    });
  }
  _createClass(BackgroundMusic, [{
    key: "play",
    value: function play() {
      this.backgroundMusic.play();
    }
  }, {
    key: "stop",
    value: function stop() {
      this.backgroundMusic.stop();
    }
  }]);
  return BackgroundMusic;
}();

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/styles.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/styles.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Bangers&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,body {
  background: black;
  width: 100%;
  height: 100%;
  margin: 0; 
  padding: 0; 
  border: solid #FFFFFF;
  border-width: thin;
  overflow:hidden;
  display:block;
  box-sizing: border-box;
}

#gameName, #gameOver {
  font-family:'Bangers';
  font-size: 3.5em;
  color: white;
  padding: 20px;
  position: fixed;
  top: 50%;
  left: 50%;
  margin-top: -250px;
  margin-left: -120px;
  height: 200px;
  width: 250px;
  text-align: center;
  text-shadow: 2px 2px #FF0000;
}

#startButton,#playAgainButton {
  font-family:'Bangers';
  color: white;
  position:fixed;
  top: 50%;
  left: 50%;
  margin-top: -100px;
  margin-left: -100px;
  border: 3px solid #f01d0a;
  color: #f01d0a;
  text-decoration: none;
  padding: 10px;
  border-radius: 15px;
  cursor: pointer;
  display: block;
  width: 200px;
  text-align: center;
  font-size: 2em;
  display: inline-block;
}

#startButton:hover, #playAgainButton:hover {
  background-color: #f01d0a; 
  color:#141211;
}

#canvas1 {
  position: absolute;
  top: 50%;
  left:50%;
  transform: translate(-50%, -50%);
  border: 5px solid red;
  max-width: 100%;
  max-height: 100%;
  font-family: 'Bangers';
}

.hidden {
  display: none;
}

span {
  font-family: 'Bangers';
  color: white;
  padding: 10px;
  margin-top: 10px;
  margin-left: 10px;
  font-weight: 500;
  font-size: 1.5em;
  text-align: left;
  text-shadow: 2px 2px #FF0000;
  display: inline-block;
}
`, "",{"version":3,"sources":["webpack://./src/css/styles.css"],"names":[],"mappings":"AAEA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,iBAAiB;EACjB,WAAW;EACX,YAAY;EACZ,SAAS;EACT,UAAU;EACV,qBAAqB;EACrB,kBAAkB;EAClB,eAAe;EACf,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,qBAAqB;EACrB,gBAAgB;EAChB,YAAY;EACZ,aAAa;EACb,eAAe;EACf,QAAQ;EACR,SAAS;EACT,kBAAkB;EAClB,mBAAmB;EACnB,aAAa;EACb,YAAY;EACZ,kBAAkB;EAClB,4BAA4B;AAC9B;;AAEA;EACE,qBAAqB;EACrB,YAAY;EACZ,cAAc;EACd,QAAQ;EACR,SAAS;EACT,kBAAkB;EAClB,mBAAmB;EACnB,yBAAyB;EACzB,cAAc;EACd,qBAAqB;EACrB,aAAa;EACb,mBAAmB;EACnB,eAAe;EACf,cAAc;EACd,YAAY;EACZ,kBAAkB;EAClB,cAAc;EACd,qBAAqB;AACvB;;AAEA;EACE,yBAAyB;EACzB,aAAa;AACf;;AAEA;EACE,kBAAkB;EAClB,QAAQ;EACR,QAAQ;EACR,gCAAgC;EAChC,qBAAqB;EACrB,eAAe;EACf,gBAAgB;EAChB,sBAAsB;AACxB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,sBAAsB;EACtB,YAAY;EACZ,aAAa;EACb,gBAAgB;EAChB,iBAAiB;EACjB,gBAAgB;EAChB,gBAAgB;EAChB,gBAAgB;EAChB,4BAA4B;EAC5B,qBAAqB;AACvB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Bangers&display=swap');\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nhtml,body {\n  background: black;\n  width: 100%;\n  height: 100%;\n  margin: 0; \n  padding: 0; \n  border: solid #FFFFFF;\n  border-width: thin;\n  overflow:hidden;\n  display:block;\n  box-sizing: border-box;\n}\n\n#gameName, #gameOver {\n  font-family:'Bangers';\n  font-size: 3.5em;\n  color: white;\n  padding: 20px;\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  margin-top: -250px;\n  margin-left: -120px;\n  height: 200px;\n  width: 250px;\n  text-align: center;\n  text-shadow: 2px 2px #FF0000;\n}\n\n#startButton,#playAgainButton {\n  font-family:'Bangers';\n  color: white;\n  position:fixed;\n  top: 50%;\n  left: 50%;\n  margin-top: -100px;\n  margin-left: -100px;\n  border: 3px solid #f01d0a;\n  color: #f01d0a;\n  text-decoration: none;\n  padding: 10px;\n  border-radius: 15px;\n  cursor: pointer;\n  display: block;\n  width: 200px;\n  text-align: center;\n  font-size: 2em;\n  display: inline-block;\n}\n\n#startButton:hover, #playAgainButton:hover {\n  background-color: #f01d0a; \n  color:#141211;\n}\n\n#canvas1 {\n  position: absolute;\n  top: 50%;\n  left:50%;\n  transform: translate(-50%, -50%);\n  border: 5px solid red;\n  max-width: 100%;\n  max-height: 100%;\n  font-family: 'Bangers';\n}\n\n.hidden {\n  display: none;\n}\n\nspan {\n  font-family: 'Bangers';\n  color: white;\n  padding: 10px;\n  margin-top: 10px;\n  margin-left: 10px;\n  font-weight: 500;\n  font-size: 1.5em;\n  text-align: left;\n  text-shadow: 2px 2px #FF0000;\n  display: inline-block;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/howler/dist/howler.js":
/*!********************************************!*\
  !*** ./node_modules/howler/dist/howler.js ***!
  \********************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 *  howler.js v2.2.3
 *  howlerjs.com
 *
 *  (c) 2013-2020, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */

(function() {

  'use strict';

  /** Global Methods **/
  /***************************************************************************/

  /**
   * Create the global controller. All contained methods and properties apply
   * to all sounds that are currently playing or will be in the future.
   */
  var HowlerGlobal = function() {
    this.init();
  };
  HowlerGlobal.prototype = {
    /**
     * Initialize the global Howler object.
     * @return {Howler}
     */
    init: function() {
      var self = this || Howler;

      // Create a global ID counter.
      self._counter = 1000;

      // Pool of unlocked HTML5 Audio objects.
      self._html5AudioPool = [];
      self.html5PoolSize = 10;

      // Internal properties.
      self._codecs = {};
      self._howls = [];
      self._muted = false;
      self._volume = 1;
      self._canPlayEvent = 'canplaythrough';
      self._navigator = (typeof window !== 'undefined' && window.navigator) ? window.navigator : null;

      // Public properties.
      self.masterGain = null;
      self.noAudio = false;
      self.usingWebAudio = true;
      self.autoSuspend = true;
      self.ctx = null;

      // Set to false to disable the auto audio unlocker.
      self.autoUnlock = true;

      // Setup the various state values for global tracking.
      self._setup();

      return self;
    },

    /**
     * Get/set the global volume for all sounds.
     * @param  {Float} vol Volume from 0.0 to 1.0.
     * @return {Howler/Float}     Returns self or current volume.
     */
    volume: function(vol) {
      var self = this || Howler;
      vol = parseFloat(vol);

      // If we don't have an AudioContext created yet, run the setup.
      if (!self.ctx) {
        setupAudioContext();
      }

      if (typeof vol !== 'undefined' && vol >= 0 && vol <= 1) {
        self._volume = vol;

        // Don't update any of the nodes if we are muted.
        if (self._muted) {
          return self;
        }

        // When using Web Audio, we just need to adjust the master gain.
        if (self.usingWebAudio) {
          self.masterGain.gain.setValueAtTime(vol, Howler.ctx.currentTime);
        }

        // Loop through and change volume for all HTML5 audio nodes.
        for (var i=0; i<self._howls.length; i++) {
          if (!self._howls[i]._webAudio) {
            // Get all of the sounds in this Howl group.
            var ids = self._howls[i]._getSoundIds();

            // Loop through all sounds and change the volumes.
            for (var j=0; j<ids.length; j++) {
              var sound = self._howls[i]._soundById(ids[j]);

              if (sound && sound._node) {
                sound._node.volume = sound._volume * vol;
              }
            }
          }
        }

        return self;
      }

      return self._volume;
    },

    /**
     * Handle muting and unmuting globally.
     * @param  {Boolean} muted Is muted or not.
     */
    mute: function(muted) {
      var self = this || Howler;

      // If we don't have an AudioContext created yet, run the setup.
      if (!self.ctx) {
        setupAudioContext();
      }

      self._muted = muted;

      // With Web Audio, we just need to mute the master gain.
      if (self.usingWebAudio) {
        self.masterGain.gain.setValueAtTime(muted ? 0 : self._volume, Howler.ctx.currentTime);
      }

      // Loop through and mute all HTML5 Audio nodes.
      for (var i=0; i<self._howls.length; i++) {
        if (!self._howls[i]._webAudio) {
          // Get all of the sounds in this Howl group.
          var ids = self._howls[i]._getSoundIds();

          // Loop through all sounds and mark the audio node as muted.
          for (var j=0; j<ids.length; j++) {
            var sound = self._howls[i]._soundById(ids[j]);

            if (sound && sound._node) {
              sound._node.muted = (muted) ? true : sound._muted;
            }
          }
        }
      }

      return self;
    },

    /**
     * Handle stopping all sounds globally.
     */
    stop: function() {
      var self = this || Howler;

      // Loop through all Howls and stop them.
      for (var i=0; i<self._howls.length; i++) {
        self._howls[i].stop();
      }

      return self;
    },

    /**
     * Unload and destroy all currently loaded Howl objects.
     * @return {Howler}
     */
    unload: function() {
      var self = this || Howler;

      for (var i=self._howls.length-1; i>=0; i--) {
        self._howls[i].unload();
      }

      // Create a new AudioContext to make sure it is fully reset.
      if (self.usingWebAudio && self.ctx && typeof self.ctx.close !== 'undefined') {
        self.ctx.close();
        self.ctx = null;
        setupAudioContext();
      }

      return self;
    },

    /**
     * Check for codec support of specific extension.
     * @param  {String} ext Audio file extention.
     * @return {Boolean}
     */
    codecs: function(ext) {
      return (this || Howler)._codecs[ext.replace(/^x-/, '')];
    },

    /**
     * Setup various state values for global tracking.
     * @return {Howler}
     */
    _setup: function() {
      var self = this || Howler;

      // Keeps track of the suspend/resume state of the AudioContext.
      self.state = self.ctx ? self.ctx.state || 'suspended' : 'suspended';

      // Automatically begin the 30-second suspend process
      self._autoSuspend();

      // Check if audio is available.
      if (!self.usingWebAudio) {
        // No audio is available on this system if noAudio is set to true.
        if (typeof Audio !== 'undefined') {
          try {
            var test = new Audio();

            // Check if the canplaythrough event is available.
            if (typeof test.oncanplaythrough === 'undefined') {
              self._canPlayEvent = 'canplay';
            }
          } catch(e) {
            self.noAudio = true;
          }
        } else {
          self.noAudio = true;
        }
      }

      // Test to make sure audio isn't disabled in Internet Explorer.
      try {
        var test = new Audio();
        if (test.muted) {
          self.noAudio = true;
        }
      } catch (e) {}

      // Check for supported codecs.
      if (!self.noAudio) {
        self._setupCodecs();
      }

      return self;
    },

    /**
     * Check for browser support for various codecs and cache the results.
     * @return {Howler}
     */
    _setupCodecs: function() {
      var self = this || Howler;
      var audioTest = null;

      // Must wrap in a try/catch because IE11 in server mode throws an error.
      try {
        audioTest = (typeof Audio !== 'undefined') ? new Audio() : null;
      } catch (err) {
        return self;
      }

      if (!audioTest || typeof audioTest.canPlayType !== 'function') {
        return self;
      }

      var mpegTest = audioTest.canPlayType('audio/mpeg;').replace(/^no$/, '');

      // Opera version <33 has mixed MP3 support, so we need to check for and block it.
      var ua = self._navigator ? self._navigator.userAgent : '';
      var checkOpera = ua.match(/OPR\/([0-6].)/g);
      var isOldOpera = (checkOpera && parseInt(checkOpera[0].split('/')[1], 10) < 33);
      var checkSafari = ua.indexOf('Safari') !== -1 && ua.indexOf('Chrome') === -1;
      var safariVersion = ua.match(/Version\/(.*?) /);
      var isOldSafari = (checkSafari && safariVersion && parseInt(safariVersion[1], 10) < 15);

      self._codecs = {
        mp3: !!(!isOldOpera && (mpegTest || audioTest.canPlayType('audio/mp3;').replace(/^no$/, ''))),
        mpeg: !!mpegTest,
        opus: !!audioTest.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ''),
        ogg: !!audioTest.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ''),
        oga: !!audioTest.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ''),
        wav: !!(audioTest.canPlayType('audio/wav; codecs="1"') || audioTest.canPlayType('audio/wav')).replace(/^no$/, ''),
        aac: !!audioTest.canPlayType('audio/aac;').replace(/^no$/, ''),
        caf: !!audioTest.canPlayType('audio/x-caf;').replace(/^no$/, ''),
        m4a: !!(audioTest.canPlayType('audio/x-m4a;') || audioTest.canPlayType('audio/m4a;') || audioTest.canPlayType('audio/aac;')).replace(/^no$/, ''),
        m4b: !!(audioTest.canPlayType('audio/x-m4b;') || audioTest.canPlayType('audio/m4b;') || audioTest.canPlayType('audio/aac;')).replace(/^no$/, ''),
        mp4: !!(audioTest.canPlayType('audio/x-mp4;') || audioTest.canPlayType('audio/mp4;') || audioTest.canPlayType('audio/aac;')).replace(/^no$/, ''),
        weba: !!(!isOldSafari && audioTest.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, '')),
        webm: !!(!isOldSafari && audioTest.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, '')),
        dolby: !!audioTest.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/, ''),
        flac: !!(audioTest.canPlayType('audio/x-flac;') || audioTest.canPlayType('audio/flac;')).replace(/^no$/, '')
      };

      return self;
    },

    /**
     * Some browsers/devices will only allow audio to be played after a user interaction.
     * Attempt to automatically unlock audio on the first user interaction.
     * Concept from: http://paulbakaus.com/tutorials/html5/web-audio-on-ios/
     * @return {Howler}
     */
    _unlockAudio: function() {
      var self = this || Howler;

      // Only run this if Web Audio is supported and it hasn't already been unlocked.
      if (self._audioUnlocked || !self.ctx) {
        return;
      }

      self._audioUnlocked = false;
      self.autoUnlock = false;

      // Some mobile devices/platforms have distortion issues when opening/closing tabs and/or web views.
      // Bugs in the browser (especially Mobile Safari) can cause the sampleRate to change from 44100 to 48000.
      // By calling Howler.unload(), we create a new AudioContext with the correct sampleRate.
      if (!self._mobileUnloaded && self.ctx.sampleRate !== 44100) {
        self._mobileUnloaded = true;
        self.unload();
      }

      // Scratch buffer for enabling iOS to dispose of web audio buffers correctly, as per:
      // http://stackoverflow.com/questions/24119684
      self._scratchBuffer = self.ctx.createBuffer(1, 1, 22050);

      // Call this method on touch start to create and play a buffer,
      // then check if the audio actually played to determine if
      // audio has now been unlocked on iOS, Android, etc.
      var unlock = function(e) {
        // Create a pool of unlocked HTML5 Audio objects that can
        // be used for playing sounds without user interaction. HTML5
        // Audio objects must be individually unlocked, as opposed
        // to the WebAudio API which only needs a single activation.
        // This must occur before WebAudio setup or the source.onended
        // event will not fire.
        while (self._html5AudioPool.length < self.html5PoolSize) {
          try {
            var audioNode = new Audio();

            // Mark this Audio object as unlocked to ensure it can get returned
            // to the unlocked pool when released.
            audioNode._unlocked = true;

            // Add the audio node to the pool.
            self._releaseHtml5Audio(audioNode);
          } catch (e) {
            self.noAudio = true;
            break;
          }
        }

        // Loop through any assigned audio nodes and unlock them.
        for (var i=0; i<self._howls.length; i++) {
          if (!self._howls[i]._webAudio) {
            // Get all of the sounds in this Howl group.
            var ids = self._howls[i]._getSoundIds();

            // Loop through all sounds and unlock the audio nodes.
            for (var j=0; j<ids.length; j++) {
              var sound = self._howls[i]._soundById(ids[j]);

              if (sound && sound._node && !sound._node._unlocked) {
                sound._node._unlocked = true;
                sound._node.load();
              }
            }
          }
        }

        // Fix Android can not play in suspend state.
        self._autoResume();

        // Create an empty buffer.
        var source = self.ctx.createBufferSource();
        source.buffer = self._scratchBuffer;
        source.connect(self.ctx.destination);

        // Play the empty buffer.
        if (typeof source.start === 'undefined') {
          source.noteOn(0);
        } else {
          source.start(0);
        }

        // Calling resume() on a stack initiated by user gesture is what actually unlocks the audio on Android Chrome >= 55.
        if (typeof self.ctx.resume === 'function') {
          self.ctx.resume();
        }

        // Setup a timeout to check that we are unlocked on the next event loop.
        source.onended = function() {
          source.disconnect(0);

          // Update the unlocked state and prevent this check from happening again.
          self._audioUnlocked = true;

          // Remove the touch start listener.
          document.removeEventListener('touchstart', unlock, true);
          document.removeEventListener('touchend', unlock, true);
          document.removeEventListener('click', unlock, true);
          document.removeEventListener('keydown', unlock, true);

          // Let all sounds know that audio has been unlocked.
          for (var i=0; i<self._howls.length; i++) {
            self._howls[i]._emit('unlock');
          }
        };
      };

      // Setup a touch start listener to attempt an unlock in.
      document.addEventListener('touchstart', unlock, true);
      document.addEventListener('touchend', unlock, true);
      document.addEventListener('click', unlock, true);
      document.addEventListener('keydown', unlock, true);

      return self;
    },

    /**
     * Get an unlocked HTML5 Audio object from the pool. If none are left,
     * return a new Audio object and throw a warning.
     * @return {Audio} HTML5 Audio object.
     */
    _obtainHtml5Audio: function() {
      var self = this || Howler;

      // Return the next object from the pool if one exists.
      if (self._html5AudioPool.length) {
        return self._html5AudioPool.pop();
      }

      //.Check if the audio is locked and throw a warning.
      var testPlay = new Audio().play();
      if (testPlay && typeof Promise !== 'undefined' && (testPlay instanceof Promise || typeof testPlay.then === 'function')) {
        testPlay.catch(function() {
          console.warn('HTML5 Audio pool exhausted, returning potentially locked audio object.');
        });
      }

      return new Audio();
    },

    /**
     * Return an activated HTML5 Audio object to the pool.
     * @return {Howler}
     */
    _releaseHtml5Audio: function(audio) {
      var self = this || Howler;

      // Don't add audio to the pool if we don't know if it has been unlocked.
      if (audio._unlocked) {
        self._html5AudioPool.push(audio);
      }

      return self;
    },

    /**
     * Automatically suspend the Web Audio AudioContext after no sound has played for 30 seconds.
     * This saves processing/energy and fixes various browser-specific bugs with audio getting stuck.
     * @return {Howler}
     */
    _autoSuspend: function() {
      var self = this;

      if (!self.autoSuspend || !self.ctx || typeof self.ctx.suspend === 'undefined' || !Howler.usingWebAudio) {
        return;
      }

      // Check if any sounds are playing.
      for (var i=0; i<self._howls.length; i++) {
        if (self._howls[i]._webAudio) {
          for (var j=0; j<self._howls[i]._sounds.length; j++) {
            if (!self._howls[i]._sounds[j]._paused) {
              return self;
            }
          }
        }
      }

      if (self._suspendTimer) {
        clearTimeout(self._suspendTimer);
      }

      // If no sound has played after 30 seconds, suspend the context.
      self._suspendTimer = setTimeout(function() {
        if (!self.autoSuspend) {
          return;
        }

        self._suspendTimer = null;
        self.state = 'suspending';

        // Handle updating the state of the audio context after suspending.
        var handleSuspension = function() {
          self.state = 'suspended';

          if (self._resumeAfterSuspend) {
            delete self._resumeAfterSuspend;
            self._autoResume();
          }
        };

        // Either the state gets suspended or it is interrupted.
        // Either way, we need to update the state to suspended.
        self.ctx.suspend().then(handleSuspension, handleSuspension);
      }, 30000);

      return self;
    },

    /**
     * Automatically resume the Web Audio AudioContext when a new sound is played.
     * @return {Howler}
     */
    _autoResume: function() {
      var self = this;

      if (!self.ctx || typeof self.ctx.resume === 'undefined' || !Howler.usingWebAudio) {
        return;
      }

      if (self.state === 'running' && self.ctx.state !== 'interrupted' && self._suspendTimer) {
        clearTimeout(self._suspendTimer);
        self._suspendTimer = null;
      } else if (self.state === 'suspended' || self.state === 'running' && self.ctx.state === 'interrupted') {
        self.ctx.resume().then(function() {
          self.state = 'running';

          // Emit to all Howls that the audio has resumed.
          for (var i=0; i<self._howls.length; i++) {
            self._howls[i]._emit('resume');
          }
        });

        if (self._suspendTimer) {
          clearTimeout(self._suspendTimer);
          self._suspendTimer = null;
        }
      } else if (self.state === 'suspending') {
        self._resumeAfterSuspend = true;
      }

      return self;
    }
  };

  // Setup the global audio controller.
  var Howler = new HowlerGlobal();

  /** Group Methods **/
  /***************************************************************************/

  /**
   * Create an audio group controller.
   * @param {Object} o Passed in properties for this group.
   */
  var Howl = function(o) {
    var self = this;

    // Throw an error if no source is provided.
    if (!o.src || o.src.length === 0) {
      console.error('An array of source files must be passed with any new Howl.');
      return;
    }

    self.init(o);
  };
  Howl.prototype = {
    /**
     * Initialize a new Howl group object.
     * @param  {Object} o Passed in properties for this group.
     * @return {Howl}
     */
    init: function(o) {
      var self = this;

      // If we don't have an AudioContext created yet, run the setup.
      if (!Howler.ctx) {
        setupAudioContext();
      }

      // Setup user-defined default properties.
      self._autoplay = o.autoplay || false;
      self._format = (typeof o.format !== 'string') ? o.format : [o.format];
      self._html5 = o.html5 || false;
      self._muted = o.mute || false;
      self._loop = o.loop || false;
      self._pool = o.pool || 5;
      self._preload = (typeof o.preload === 'boolean' || o.preload === 'metadata') ? o.preload : true;
      self._rate = o.rate || 1;
      self._sprite = o.sprite || {};
      self._src = (typeof o.src !== 'string') ? o.src : [o.src];
      self._volume = o.volume !== undefined ? o.volume : 1;
      self._xhr = {
        method: o.xhr && o.xhr.method ? o.xhr.method : 'GET',
        headers: o.xhr && o.xhr.headers ? o.xhr.headers : null,
        withCredentials: o.xhr && o.xhr.withCredentials ? o.xhr.withCredentials : false,
      };

      // Setup all other default properties.
      self._duration = 0;
      self._state = 'unloaded';
      self._sounds = [];
      self._endTimers = {};
      self._queue = [];
      self._playLock = false;

      // Setup event listeners.
      self._onend = o.onend ? [{fn: o.onend}] : [];
      self._onfade = o.onfade ? [{fn: o.onfade}] : [];
      self._onload = o.onload ? [{fn: o.onload}] : [];
      self._onloaderror = o.onloaderror ? [{fn: o.onloaderror}] : [];
      self._onplayerror = o.onplayerror ? [{fn: o.onplayerror}] : [];
      self._onpause = o.onpause ? [{fn: o.onpause}] : [];
      self._onplay = o.onplay ? [{fn: o.onplay}] : [];
      self._onstop = o.onstop ? [{fn: o.onstop}] : [];
      self._onmute = o.onmute ? [{fn: o.onmute}] : [];
      self._onvolume = o.onvolume ? [{fn: o.onvolume}] : [];
      self._onrate = o.onrate ? [{fn: o.onrate}] : [];
      self._onseek = o.onseek ? [{fn: o.onseek}] : [];
      self._onunlock = o.onunlock ? [{fn: o.onunlock}] : [];
      self._onresume = [];

      // Web Audio or HTML5 Audio?
      self._webAudio = Howler.usingWebAudio && !self._html5;

      // Automatically try to enable audio.
      if (typeof Howler.ctx !== 'undefined' && Howler.ctx && Howler.autoUnlock) {
        Howler._unlockAudio();
      }

      // Keep track of this Howl group in the global controller.
      Howler._howls.push(self);

      // If they selected autoplay, add a play event to the load queue.
      if (self._autoplay) {
        self._queue.push({
          event: 'play',
          action: function() {
            self.play();
          }
        });
      }

      // Load the source file unless otherwise specified.
      if (self._preload && self._preload !== 'none') {
        self.load();
      }

      return self;
    },

    /**
     * Load the audio file.
     * @return {Howler}
     */
    load: function() {
      var self = this;
      var url = null;

      // If no audio is available, quit immediately.
      if (Howler.noAudio) {
        self._emit('loaderror', null, 'No audio support.');
        return;
      }

      // Make sure our source is in an array.
      if (typeof self._src === 'string') {
        self._src = [self._src];
      }

      // Loop through the sources and pick the first one that is compatible.
      for (var i=0; i<self._src.length; i++) {
        var ext, str;

        if (self._format && self._format[i]) {
          // If an extension was specified, use that instead.
          ext = self._format[i];
        } else {
          // Make sure the source is a string.
          str = self._src[i];
          if (typeof str !== 'string') {
            self._emit('loaderror', null, 'Non-string found in selected audio sources - ignoring.');
            continue;
          }

          // Extract the file extension from the URL or base64 data URI.
          ext = /^data:audio\/([^;,]+);/i.exec(str);
          if (!ext) {
            ext = /\.([^.]+)$/.exec(str.split('?', 1)[0]);
          }

          if (ext) {
            ext = ext[1].toLowerCase();
          }
        }

        // Log a warning if no extension was found.
        if (!ext) {
          console.warn('No file extension was found. Consider using the "format" property or specify an extension.');
        }

        // Check if this extension is available.
        if (ext && Howler.codecs(ext)) {
          url = self._src[i];
          break;
        }
      }

      if (!url) {
        self._emit('loaderror', null, 'No codec support for selected audio sources.');
        return;
      }

      self._src = url;
      self._state = 'loading';

      // If the hosting page is HTTPS and the source isn't,
      // drop down to HTML5 Audio to avoid Mixed Content errors.
      if (window.location.protocol === 'https:' && url.slice(0, 5) === 'http:') {
        self._html5 = true;
        self._webAudio = false;
      }

      // Create a new sound object and add it to the pool.
      new Sound(self);

      // Load and decode the audio data for playback.
      if (self._webAudio) {
        loadBuffer(self);
      }

      return self;
    },

    /**
     * Play a sound or resume previous playback.
     * @param  {String/Number} sprite   Sprite name for sprite playback or sound id to continue previous.
     * @param  {Boolean} internal Internal Use: true prevents event firing.
     * @return {Number}          Sound ID.
     */
    play: function(sprite, internal) {
      var self = this;
      var id = null;

      // Determine if a sprite, sound id or nothing was passed
      if (typeof sprite === 'number') {
        id = sprite;
        sprite = null;
      } else if (typeof sprite === 'string' && self._state === 'loaded' && !self._sprite[sprite]) {
        // If the passed sprite doesn't exist, do nothing.
        return null;
      } else if (typeof sprite === 'undefined') {
        // Use the default sound sprite (plays the full audio length).
        sprite = '__default';

        // Check if there is a single paused sound that isn't ended.
        // If there is, play that sound. If not, continue as usual.
        if (!self._playLock) {
          var num = 0;
          for (var i=0; i<self._sounds.length; i++) {
            if (self._sounds[i]._paused && !self._sounds[i]._ended) {
              num++;
              id = self._sounds[i]._id;
            }
          }

          if (num === 1) {
            sprite = null;
          } else {
            id = null;
          }
        }
      }

      // Get the selected node, or get one from the pool.
      var sound = id ? self._soundById(id) : self._inactiveSound();

      // If the sound doesn't exist, do nothing.
      if (!sound) {
        return null;
      }

      // Select the sprite definition.
      if (id && !sprite) {
        sprite = sound._sprite || '__default';
      }

      // If the sound hasn't loaded, we must wait to get the audio's duration.
      // We also need to wait to make sure we don't run into race conditions with
      // the order of function calls.
      if (self._state !== 'loaded') {
        // Set the sprite value on this sound.
        sound._sprite = sprite;

        // Mark this sound as not ended in case another sound is played before this one loads.
        sound._ended = false;

        // Add the sound to the queue to be played on load.
        var soundId = sound._id;
        self._queue.push({
          event: 'play',
          action: function() {
            self.play(soundId);
          }
        });

        return soundId;
      }

      // Don't play the sound if an id was passed and it is already playing.
      if (id && !sound._paused) {
        // Trigger the play event, in order to keep iterating through queue.
        if (!internal) {
          self._loadQueue('play');
        }

        return sound._id;
      }

      // Make sure the AudioContext isn't suspended, and resume it if it is.
      if (self._webAudio) {
        Howler._autoResume();
      }

      // Determine how long to play for and where to start playing.
      var seek = Math.max(0, sound._seek > 0 ? sound._seek : self._sprite[sprite][0] / 1000);
      var duration = Math.max(0, ((self._sprite[sprite][0] + self._sprite[sprite][1]) / 1000) - seek);
      var timeout = (duration * 1000) / Math.abs(sound._rate);
      var start = self._sprite[sprite][0] / 1000;
      var stop = (self._sprite[sprite][0] + self._sprite[sprite][1]) / 1000;
      sound._sprite = sprite;

      // Mark the sound as ended instantly so that this async playback
      // doesn't get grabbed by another call to play while this one waits to start.
      sound._ended = false;

      // Update the parameters of the sound.
      var setParams = function() {
        sound._paused = false;
        sound._seek = seek;
        sound._start = start;
        sound._stop = stop;
        sound._loop = !!(sound._loop || self._sprite[sprite][2]);
      };

      // End the sound instantly if seek is at the end.
      if (seek >= stop) {
        self._ended(sound);
        return;
      }

      // Begin the actual playback.
      var node = sound._node;
      if (self._webAudio) {
        // Fire this when the sound is ready to play to begin Web Audio playback.
        var playWebAudio = function() {
          self._playLock = false;
          setParams();
          self._refreshBuffer(sound);

          // Setup the playback params.
          var vol = (sound._muted || self._muted) ? 0 : sound._volume;
          node.gain.setValueAtTime(vol, Howler.ctx.currentTime);
          sound._playStart = Howler.ctx.currentTime;

          // Play the sound using the supported method.
          if (typeof node.bufferSource.start === 'undefined') {
            sound._loop ? node.bufferSource.noteGrainOn(0, seek, 86400) : node.bufferSource.noteGrainOn(0, seek, duration);
          } else {
            sound._loop ? node.bufferSource.start(0, seek, 86400) : node.bufferSource.start(0, seek, duration);
          }

          // Start a new timer if none is present.
          if (timeout !== Infinity) {
            self._endTimers[sound._id] = setTimeout(self._ended.bind(self, sound), timeout);
          }

          if (!internal) {
            setTimeout(function() {
              self._emit('play', sound._id);
              self._loadQueue();
            }, 0);
          }
        };

        if (Howler.state === 'running' && Howler.ctx.state !== 'interrupted') {
          playWebAudio();
        } else {
          self._playLock = true;

          // Wait for the audio context to resume before playing.
          self.once('resume', playWebAudio);

          // Cancel the end timer.
          self._clearTimer(sound._id);
        }
      } else {
        // Fire this when the sound is ready to play to begin HTML5 Audio playback.
        var playHtml5 = function() {
          node.currentTime = seek;
          node.muted = sound._muted || self._muted || Howler._muted || node.muted;
          node.volume = sound._volume * Howler.volume();
          node.playbackRate = sound._rate;

          // Some browsers will throw an error if this is called without user interaction.
          try {
            var play = node.play();

            // Support older browsers that don't support promises, and thus don't have this issue.
            if (play && typeof Promise !== 'undefined' && (play instanceof Promise || typeof play.then === 'function')) {
              // Implements a lock to prevent DOMException: The play() request was interrupted by a call to pause().
              self._playLock = true;

              // Set param values immediately.
              setParams();

              // Releases the lock and executes queued actions.
              play
                .then(function() {
                  self._playLock = false;
                  node._unlocked = true;
                  if (!internal) {
                    self._emit('play', sound._id);
                  } else {
                    self._loadQueue();
                  }
                })
                .catch(function() {
                  self._playLock = false;
                  self._emit('playerror', sound._id, 'Playback was unable to start. This is most commonly an issue ' +
                    'on mobile devices and Chrome where playback was not within a user interaction.');

                  // Reset the ended and paused values.
                  sound._ended = true;
                  sound._paused = true;
                });
            } else if (!internal) {
              self._playLock = false;
              setParams();
              self._emit('play', sound._id);
            }

            // Setting rate before playing won't work in IE, so we set it again here.
            node.playbackRate = sound._rate;

            // If the node is still paused, then we can assume there was a playback issue.
            if (node.paused) {
              self._emit('playerror', sound._id, 'Playback was unable to start. This is most commonly an issue ' +
                'on mobile devices and Chrome where playback was not within a user interaction.');
              return;
            }

            // Setup the end timer on sprites or listen for the ended event.
            if (sprite !== '__default' || sound._loop) {
              self._endTimers[sound._id] = setTimeout(self._ended.bind(self, sound), timeout);
            } else {
              self._endTimers[sound._id] = function() {
                // Fire ended on this audio node.
                self._ended(sound);

                // Clear this listener.
                node.removeEventListener('ended', self._endTimers[sound._id], false);
              };
              node.addEventListener('ended', self._endTimers[sound._id], false);
            }
          } catch (err) {
            self._emit('playerror', sound._id, err);
          }
        };

        // If this is streaming audio, make sure the src is set and load again.
        if (node.src === 'data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA') {
          node.src = self._src;
          node.load();
        }

        // Play immediately if ready, or wait for the 'canplaythrough'e vent.
        var loadedNoReadyState = (window && window.ejecta) || (!node.readyState && Howler._navigator.isCocoonJS);
        if (node.readyState >= 3 || loadedNoReadyState) {
          playHtml5();
        } else {
          self._playLock = true;
          self._state = 'loading';

          var listener = function() {
            self._state = 'loaded';
            
            // Begin playback.
            playHtml5();

            // Clear this listener.
            node.removeEventListener(Howler._canPlayEvent, listener, false);
          };
          node.addEventListener(Howler._canPlayEvent, listener, false);

          // Cancel the end timer.
          self._clearTimer(sound._id);
        }
      }

      return sound._id;
    },

    /**
     * Pause playback and save current position.
     * @param  {Number} id The sound ID (empty to pause all in group).
     * @return {Howl}
     */
    pause: function(id) {
      var self = this;

      // If the sound hasn't loaded or a play() promise is pending, add it to the load queue to pause when capable.
      if (self._state !== 'loaded' || self._playLock) {
        self._queue.push({
          event: 'pause',
          action: function() {
            self.pause(id);
          }
        });

        return self;
      }

      // If no id is passed, get all ID's to be paused.
      var ids = self._getSoundIds(id);

      for (var i=0; i<ids.length; i++) {
        // Clear the end timer.
        self._clearTimer(ids[i]);

        // Get the sound.
        var sound = self._soundById(ids[i]);

        if (sound && !sound._paused) {
          // Reset the seek position.
          sound._seek = self.seek(ids[i]);
          sound._rateSeek = 0;
          sound._paused = true;

          // Stop currently running fades.
          self._stopFade(ids[i]);

          if (sound._node) {
            if (self._webAudio) {
              // Make sure the sound has been created.
              if (!sound._node.bufferSource) {
                continue;
              }

              if (typeof sound._node.bufferSource.stop === 'undefined') {
                sound._node.bufferSource.noteOff(0);
              } else {
                sound._node.bufferSource.stop(0);
              }

              // Clean up the buffer source.
              self._cleanBuffer(sound._node);
            } else if (!isNaN(sound._node.duration) || sound._node.duration === Infinity) {
              sound._node.pause();
            }
          }
        }

        // Fire the pause event, unless `true` is passed as the 2nd argument.
        if (!arguments[1]) {
          self._emit('pause', sound ? sound._id : null);
        }
      }

      return self;
    },

    /**
     * Stop playback and reset to start.
     * @param  {Number} id The sound ID (empty to stop all in group).
     * @param  {Boolean} internal Internal Use: true prevents event firing.
     * @return {Howl}
     */
    stop: function(id, internal) {
      var self = this;

      // If the sound hasn't loaded, add it to the load queue to stop when capable.
      if (self._state !== 'loaded' || self._playLock) {
        self._queue.push({
          event: 'stop',
          action: function() {
            self.stop(id);
          }
        });

        return self;
      }

      // If no id is passed, get all ID's to be stopped.
      var ids = self._getSoundIds(id);

      for (var i=0; i<ids.length; i++) {
        // Clear the end timer.
        self._clearTimer(ids[i]);

        // Get the sound.
        var sound = self._soundById(ids[i]);

        if (sound) {
          // Reset the seek position.
          sound._seek = sound._start || 0;
          sound._rateSeek = 0;
          sound._paused = true;
          sound._ended = true;

          // Stop currently running fades.
          self._stopFade(ids[i]);

          if (sound._node) {
            if (self._webAudio) {
              // Make sure the sound's AudioBufferSourceNode has been created.
              if (sound._node.bufferSource) {
                if (typeof sound._node.bufferSource.stop === 'undefined') {
                  sound._node.bufferSource.noteOff(0);
                } else {
                  sound._node.bufferSource.stop(0);
                }

                // Clean up the buffer source.
                self._cleanBuffer(sound._node);
              }
            } else if (!isNaN(sound._node.duration) || sound._node.duration === Infinity) {
              sound._node.currentTime = sound._start || 0;
              sound._node.pause();

              // If this is a live stream, stop download once the audio is stopped.
              if (sound._node.duration === Infinity) {
                self._clearSound(sound._node);
              }
            }
          }

          if (!internal) {
            self._emit('stop', sound._id);
          }
        }
      }

      return self;
    },

    /**
     * Mute/unmute a single sound or all sounds in this Howl group.
     * @param  {Boolean} muted Set to true to mute and false to unmute.
     * @param  {Number} id    The sound ID to update (omit to mute/unmute all).
     * @return {Howl}
     */
    mute: function(muted, id) {
      var self = this;

      // If the sound hasn't loaded, add it to the load queue to mute when capable.
      if (self._state !== 'loaded'|| self._playLock) {
        self._queue.push({
          event: 'mute',
          action: function() {
            self.mute(muted, id);
          }
        });

        return self;
      }

      // If applying mute/unmute to all sounds, update the group's value.
      if (typeof id === 'undefined') {
        if (typeof muted === 'boolean') {
          self._muted = muted;
        } else {
          return self._muted;
        }
      }

      // If no id is passed, get all ID's to be muted.
      var ids = self._getSoundIds(id);

      for (var i=0; i<ids.length; i++) {
        // Get the sound.
        var sound = self._soundById(ids[i]);

        if (sound) {
          sound._muted = muted;

          // Cancel active fade and set the volume to the end value.
          if (sound._interval) {
            self._stopFade(sound._id);
          }

          if (self._webAudio && sound._node) {
            sound._node.gain.setValueAtTime(muted ? 0 : sound._volume, Howler.ctx.currentTime);
          } else if (sound._node) {
            sound._node.muted = Howler._muted ? true : muted;
          }

          self._emit('mute', sound._id);
        }
      }

      return self;
    },

    /**
     * Get/set the volume of this sound or of the Howl group. This method can optionally take 0, 1 or 2 arguments.
     *   volume() -> Returns the group's volume value.
     *   volume(id) -> Returns the sound id's current volume.
     *   volume(vol) -> Sets the volume of all sounds in this Howl group.
     *   volume(vol, id) -> Sets the volume of passed sound id.
     * @return {Howl/Number} Returns self or current volume.
     */
    volume: function() {
      var self = this;
      var args = arguments;
      var vol, id;

      // Determine the values based on arguments.
      if (args.length === 0) {
        // Return the value of the groups' volume.
        return self._volume;
      } else if (args.length === 1 || args.length === 2 && typeof args[1] === 'undefined') {
        // First check if this is an ID, and if not, assume it is a new volume.
        var ids = self._getSoundIds();
        var index = ids.indexOf(args[0]);
        if (index >= 0) {
          id = parseInt(args[0], 10);
        } else {
          vol = parseFloat(args[0]);
        }
      } else if (args.length >= 2) {
        vol = parseFloat(args[0]);
        id = parseInt(args[1], 10);
      }

      // Update the volume or return the current volume.
      var sound;
      if (typeof vol !== 'undefined' && vol >= 0 && vol <= 1) {
        // If the sound hasn't loaded, add it to the load queue to change volume when capable.
        if (self._state !== 'loaded'|| self._playLock) {
          self._queue.push({
            event: 'volume',
            action: function() {
              self.volume.apply(self, args);
            }
          });

          return self;
        }

        // Set the group volume.
        if (typeof id === 'undefined') {
          self._volume = vol;
        }

        // Update one or all volumes.
        id = self._getSoundIds(id);
        for (var i=0; i<id.length; i++) {
          // Get the sound.
          sound = self._soundById(id[i]);

          if (sound) {
            sound._volume = vol;

            // Stop currently running fades.
            if (!args[2]) {
              self._stopFade(id[i]);
            }

            if (self._webAudio && sound._node && !sound._muted) {
              sound._node.gain.setValueAtTime(vol, Howler.ctx.currentTime);
            } else if (sound._node && !sound._muted) {
              sound._node.volume = vol * Howler.volume();
            }

            self._emit('volume', sound._id);
          }
        }
      } else {
        sound = id ? self._soundById(id) : self._sounds[0];
        return sound ? sound._volume : 0;
      }

      return self;
    },

    /**
     * Fade a currently playing sound between two volumes (if no id is passed, all sounds will fade).
     * @param  {Number} from The value to fade from (0.0 to 1.0).
     * @param  {Number} to   The volume to fade to (0.0 to 1.0).
     * @param  {Number} len  Time in milliseconds to fade.
     * @param  {Number} id   The sound id (omit to fade all sounds).
     * @return {Howl}
     */
    fade: function(from, to, len, id) {
      var self = this;

      // If the sound hasn't loaded, add it to the load queue to fade when capable.
      if (self._state !== 'loaded' || self._playLock) {
        self._queue.push({
          event: 'fade',
          action: function() {
            self.fade(from, to, len, id);
          }
        });

        return self;
      }

      // Make sure the to/from/len values are numbers.
      from = Math.min(Math.max(0, parseFloat(from)), 1);
      to = Math.min(Math.max(0, parseFloat(to)), 1);
      len = parseFloat(len);

      // Set the volume to the start position.
      self.volume(from, id);

      // Fade the volume of one or all sounds.
      var ids = self._getSoundIds(id);
      for (var i=0; i<ids.length; i++) {
        // Get the sound.
        var sound = self._soundById(ids[i]);

        // Create a linear fade or fall back to timeouts with HTML5 Audio.
        if (sound) {
          // Stop the previous fade if no sprite is being used (otherwise, volume handles this).
          if (!id) {
            self._stopFade(ids[i]);
          }

          // If we are using Web Audio, let the native methods do the actual fade.
          if (self._webAudio && !sound._muted) {
            var currentTime = Howler.ctx.currentTime;
            var end = currentTime + (len / 1000);
            sound._volume = from;
            sound._node.gain.setValueAtTime(from, currentTime);
            sound._node.gain.linearRampToValueAtTime(to, end);
          }

          self._startFadeInterval(sound, from, to, len, ids[i], typeof id === 'undefined');
        }
      }

      return self;
    },

    /**
     * Starts the internal interval to fade a sound.
     * @param  {Object} sound Reference to sound to fade.
     * @param  {Number} from The value to fade from (0.0 to 1.0).
     * @param  {Number} to   The volume to fade to (0.0 to 1.0).
     * @param  {Number} len  Time in milliseconds to fade.
     * @param  {Number} id   The sound id to fade.
     * @param  {Boolean} isGroup   If true, set the volume on the group.
     */
    _startFadeInterval: function(sound, from, to, len, id, isGroup) {
      var self = this;
      var vol = from;
      var diff = to - from;
      var steps = Math.abs(diff / 0.01);
      var stepLen = Math.max(4, (steps > 0) ? len / steps : len);
      var lastTick = Date.now();

      // Store the value being faded to.
      sound._fadeTo = to;

      // Update the volume value on each interval tick.
      sound._interval = setInterval(function() {
        // Update the volume based on the time since the last tick.
        var tick = (Date.now() - lastTick) / len;
        lastTick = Date.now();
        vol += diff * tick;

        // Round to within 2 decimal points.
        vol = Math.round(vol * 100) / 100;

        // Make sure the volume is in the right bounds.
        if (diff < 0) {
          vol = Math.max(to, vol);
        } else {
          vol = Math.min(to, vol);
        }

        // Change the volume.
        if (self._webAudio) {
          sound._volume = vol;
        } else {
          self.volume(vol, sound._id, true);
        }

        // Set the group's volume.
        if (isGroup) {
          self._volume = vol;
        }

        // When the fade is complete, stop it and fire event.
        if ((to < from && vol <= to) || (to > from && vol >= to)) {
          clearInterval(sound._interval);
          sound._interval = null;
          sound._fadeTo = null;
          self.volume(to, sound._id);
          self._emit('fade', sound._id);
        }
      }, stepLen);
    },

    /**
     * Internal method that stops the currently playing fade when
     * a new fade starts, volume is changed or the sound is stopped.
     * @param  {Number} id The sound id.
     * @return {Howl}
     */
    _stopFade: function(id) {
      var self = this;
      var sound = self._soundById(id);

      if (sound && sound._interval) {
        if (self._webAudio) {
          sound._node.gain.cancelScheduledValues(Howler.ctx.currentTime);
        }

        clearInterval(sound._interval);
        sound._interval = null;
        self.volume(sound._fadeTo, id);
        sound._fadeTo = null;
        self._emit('fade', id);
      }

      return self;
    },

    /**
     * Get/set the loop parameter on a sound. This method can optionally take 0, 1 or 2 arguments.
     *   loop() -> Returns the group's loop value.
     *   loop(id) -> Returns the sound id's loop value.
     *   loop(loop) -> Sets the loop value for all sounds in this Howl group.
     *   loop(loop, id) -> Sets the loop value of passed sound id.
     * @return {Howl/Boolean} Returns self or current loop value.
     */
    loop: function() {
      var self = this;
      var args = arguments;
      var loop, id, sound;

      // Determine the values for loop and id.
      if (args.length === 0) {
        // Return the grou's loop value.
        return self._loop;
      } else if (args.length === 1) {
        if (typeof args[0] === 'boolean') {
          loop = args[0];
          self._loop = loop;
        } else {
          // Return this sound's loop value.
          sound = self._soundById(parseInt(args[0], 10));
          return sound ? sound._loop : false;
        }
      } else if (args.length === 2) {
        loop = args[0];
        id = parseInt(args[1], 10);
      }

      // If no id is passed, get all ID's to be looped.
      var ids = self._getSoundIds(id);
      for (var i=0; i<ids.length; i++) {
        sound = self._soundById(ids[i]);

        if (sound) {
          sound._loop = loop;
          if (self._webAudio && sound._node && sound._node.bufferSource) {
            sound._node.bufferSource.loop = loop;
            if (loop) {
              sound._node.bufferSource.loopStart = sound._start || 0;
              sound._node.bufferSource.loopEnd = sound._stop;

              // If playing, restart playback to ensure looping updates.
              if (self.playing(ids[i])) {
                self.pause(ids[i], true);
                self.play(ids[i], true);
              }
            }
          }
        }
      }

      return self;
    },

    /**
     * Get/set the playback rate of a sound. This method can optionally take 0, 1 or 2 arguments.
     *   rate() -> Returns the first sound node's current playback rate.
     *   rate(id) -> Returns the sound id's current playback rate.
     *   rate(rate) -> Sets the playback rate of all sounds in this Howl group.
     *   rate(rate, id) -> Sets the playback rate of passed sound id.
     * @return {Howl/Number} Returns self or the current playback rate.
     */
    rate: function() {
      var self = this;
      var args = arguments;
      var rate, id;

      // Determine the values based on arguments.
      if (args.length === 0) {
        // We will simply return the current rate of the first node.
        id = self._sounds[0]._id;
      } else if (args.length === 1) {
        // First check if this is an ID, and if not, assume it is a new rate value.
        var ids = self._getSoundIds();
        var index = ids.indexOf(args[0]);
        if (index >= 0) {
          id = parseInt(args[0], 10);
        } else {
          rate = parseFloat(args[0]);
        }
      } else if (args.length === 2) {
        rate = parseFloat(args[0]);
        id = parseInt(args[1], 10);
      }

      // Update the playback rate or return the current value.
      var sound;
      if (typeof rate === 'number') {
        // If the sound hasn't loaded, add it to the load queue to change playback rate when capable.
        if (self._state !== 'loaded' || self._playLock) {
          self._queue.push({
            event: 'rate',
            action: function() {
              self.rate.apply(self, args);
            }
          });

          return self;
        }

        // Set the group rate.
        if (typeof id === 'undefined') {
          self._rate = rate;
        }

        // Update one or all volumes.
        id = self._getSoundIds(id);
        for (var i=0; i<id.length; i++) {
          // Get the sound.
          sound = self._soundById(id[i]);

          if (sound) {
            // Keep track of our position when the rate changed and update the playback
            // start position so we can properly adjust the seek position for time elapsed.
            if (self.playing(id[i])) {
              sound._rateSeek = self.seek(id[i]);
              sound._playStart = self._webAudio ? Howler.ctx.currentTime : sound._playStart;
            }
            sound._rate = rate;

            // Change the playback rate.
            if (self._webAudio && sound._node && sound._node.bufferSource) {
              sound._node.bufferSource.playbackRate.setValueAtTime(rate, Howler.ctx.currentTime);
            } else if (sound._node) {
              sound._node.playbackRate = rate;
            }

            // Reset the timers.
            var seek = self.seek(id[i]);
            var duration = ((self._sprite[sound._sprite][0] + self._sprite[sound._sprite][1]) / 1000) - seek;
            var timeout = (duration * 1000) / Math.abs(sound._rate);

            // Start a new end timer if sound is already playing.
            if (self._endTimers[id[i]] || !sound._paused) {
              self._clearTimer(id[i]);
              self._endTimers[id[i]] = setTimeout(self._ended.bind(self, sound), timeout);
            }

            self._emit('rate', sound._id);
          }
        }
      } else {
        sound = self._soundById(id);
        return sound ? sound._rate : self._rate;
      }

      return self;
    },

    /**
     * Get/set the seek position of a sound. This method can optionally take 0, 1 or 2 arguments.
     *   seek() -> Returns the first sound node's current seek position.
     *   seek(id) -> Returns the sound id's current seek position.
     *   seek(seek) -> Sets the seek position of the first sound node.
     *   seek(seek, id) -> Sets the seek position of passed sound id.
     * @return {Howl/Number} Returns self or the current seek position.
     */
    seek: function() {
      var self = this;
      var args = arguments;
      var seek, id;

      // Determine the values based on arguments.
      if (args.length === 0) {
        // We will simply return the current position of the first node.
        if (self._sounds.length) {
          id = self._sounds[0]._id;
        }
      } else if (args.length === 1) {
        // First check if this is an ID, and if not, assume it is a new seek position.
        var ids = self._getSoundIds();
        var index = ids.indexOf(args[0]);
        if (index >= 0) {
          id = parseInt(args[0], 10);
        } else if (self._sounds.length) {
          id = self._sounds[0]._id;
          seek = parseFloat(args[0]);
        }
      } else if (args.length === 2) {
        seek = parseFloat(args[0]);
        id = parseInt(args[1], 10);
      }

      // If there is no ID, bail out.
      if (typeof id === 'undefined') {
        return 0;
      }

      // If the sound hasn't loaded, add it to the load queue to seek when capable.
      if (typeof seek === 'number' && (self._state !== 'loaded' || self._playLock)) {
        self._queue.push({
          event: 'seek',
          action: function() {
            self.seek.apply(self, args);
          }
        });

        return self;
      }

      // Get the sound.
      var sound = self._soundById(id);

      if (sound) {
        if (typeof seek === 'number' && seek >= 0) {
          // Pause the sound and update position for restarting playback.
          var playing = self.playing(id);
          if (playing) {
            self.pause(id, true);
          }

          // Move the position of the track and cancel timer.
          sound._seek = seek;
          sound._ended = false;
          self._clearTimer(id);

          // Update the seek position for HTML5 Audio.
          if (!self._webAudio && sound._node && !isNaN(sound._node.duration)) {
            sound._node.currentTime = seek;
          }

          // Seek and emit when ready.
          var seekAndEmit = function() {
            // Restart the playback if the sound was playing.
            if (playing) {
              self.play(id, true);
            }

            self._emit('seek', id);
          };

          // Wait for the play lock to be unset before emitting (HTML5 Audio).
          if (playing && !self._webAudio) {
            var emitSeek = function() {
              if (!self._playLock) {
                seekAndEmit();
              } else {
                setTimeout(emitSeek, 0);
              }
            };
            setTimeout(emitSeek, 0);
          } else {
            seekAndEmit();
          }
        } else {
          if (self._webAudio) {
            var realTime = self.playing(id) ? Howler.ctx.currentTime - sound._playStart : 0;
            var rateSeek = sound._rateSeek ? sound._rateSeek - sound._seek : 0;
            return sound._seek + (rateSeek + realTime * Math.abs(sound._rate));
          } else {
            return sound._node.currentTime;
          }
        }
      }

      return self;
    },

    /**
     * Check if a specific sound is currently playing or not (if id is provided), or check if at least one of the sounds in the group is playing or not.
     * @param  {Number}  id The sound id to check. If none is passed, the whole sound group is checked.
     * @return {Boolean} True if playing and false if not.
     */
    playing: function(id) {
      var self = this;

      // Check the passed sound ID (if any).
      if (typeof id === 'number') {
        var sound = self._soundById(id);
        return sound ? !sound._paused : false;
      }

      // Otherwise, loop through all sounds and check if any are playing.
      for (var i=0; i<self._sounds.length; i++) {
        if (!self._sounds[i]._paused) {
          return true;
        }
      }

      return false;
    },

    /**
     * Get the duration of this sound. Passing a sound id will return the sprite duration.
     * @param  {Number} id The sound id to check. If none is passed, return full source duration.
     * @return {Number} Audio duration in seconds.
     */
    duration: function(id) {
      var self = this;
      var duration = self._duration;

      // If we pass an ID, get the sound and return the sprite length.
      var sound = self._soundById(id);
      if (sound) {
        duration = self._sprite[sound._sprite][1] / 1000;
      }

      return duration;
    },

    /**
     * Returns the current loaded state of this Howl.
     * @return {String} 'unloaded', 'loading', 'loaded'
     */
    state: function() {
      return this._state;
    },

    /**
     * Unload and destroy the current Howl object.
     * This will immediately stop all sound instances attached to this group.
     */
    unload: function() {
      var self = this;

      // Stop playing any active sounds.
      var sounds = self._sounds;
      for (var i=0; i<sounds.length; i++) {
        // Stop the sound if it is currently playing.
        if (!sounds[i]._paused) {
          self.stop(sounds[i]._id);
        }

        // Remove the source or disconnect.
        if (!self._webAudio) {
          // Set the source to 0-second silence to stop any downloading (except in IE).
          self._clearSound(sounds[i]._node);

          // Remove any event listeners.
          sounds[i]._node.removeEventListener('error', sounds[i]._errorFn, false);
          sounds[i]._node.removeEventListener(Howler._canPlayEvent, sounds[i]._loadFn, false);
          sounds[i]._node.removeEventListener('ended', sounds[i]._endFn, false);

          // Release the Audio object back to the pool.
          Howler._releaseHtml5Audio(sounds[i]._node);
        }

        // Empty out all of the nodes.
        delete sounds[i]._node;

        // Make sure all timers are cleared out.
        self._clearTimer(sounds[i]._id);
      }

      // Remove the references in the global Howler object.
      var index = Howler._howls.indexOf(self);
      if (index >= 0) {
        Howler._howls.splice(index, 1);
      }

      // Delete this sound from the cache (if no other Howl is using it).
      var remCache = true;
      for (i=0; i<Howler._howls.length; i++) {
        if (Howler._howls[i]._src === self._src || self._src.indexOf(Howler._howls[i]._src) >= 0) {
          remCache = false;
          break;
        }
      }

      if (cache && remCache) {
        delete cache[self._src];
      }

      // Clear global errors.
      Howler.noAudio = false;

      // Clear out `self`.
      self._state = 'unloaded';
      self._sounds = [];
      self = null;

      return null;
    },

    /**
     * Listen to a custom event.
     * @param  {String}   event Event name.
     * @param  {Function} fn    Listener to call.
     * @param  {Number}   id    (optional) Only listen to events for this sound.
     * @param  {Number}   once  (INTERNAL) Marks event to fire only once.
     * @return {Howl}
     */
    on: function(event, fn, id, once) {
      var self = this;
      var events = self['_on' + event];

      if (typeof fn === 'function') {
        events.push(once ? {id: id, fn: fn, once: once} : {id: id, fn: fn});
      }

      return self;
    },

    /**
     * Remove a custom event. Call without parameters to remove all events.
     * @param  {String}   event Event name.
     * @param  {Function} fn    Listener to remove. Leave empty to remove all.
     * @param  {Number}   id    (optional) Only remove events for this sound.
     * @return {Howl}
     */
    off: function(event, fn, id) {
      var self = this;
      var events = self['_on' + event];
      var i = 0;

      // Allow passing just an event and ID.
      if (typeof fn === 'number') {
        id = fn;
        fn = null;
      }

      if (fn || id) {
        // Loop through event store and remove the passed function.
        for (i=0; i<events.length; i++) {
          var isId = (id === events[i].id);
          if (fn === events[i].fn && isId || !fn && isId) {
            events.splice(i, 1);
            break;
          }
        }
      } else if (event) {
        // Clear out all events of this type.
        self['_on' + event] = [];
      } else {
        // Clear out all events of every type.
        var keys = Object.keys(self);
        for (i=0; i<keys.length; i++) {
          if ((keys[i].indexOf('_on') === 0) && Array.isArray(self[keys[i]])) {
            self[keys[i]] = [];
          }
        }
      }

      return self;
    },

    /**
     * Listen to a custom event and remove it once fired.
     * @param  {String}   event Event name.
     * @param  {Function} fn    Listener to call.
     * @param  {Number}   id    (optional) Only listen to events for this sound.
     * @return {Howl}
     */
    once: function(event, fn, id) {
      var self = this;

      // Setup the event listener.
      self.on(event, fn, id, 1);

      return self;
    },

    /**
     * Emit all events of a specific type and pass the sound id.
     * @param  {String} event Event name.
     * @param  {Number} id    Sound ID.
     * @param  {Number} msg   Message to go with event.
     * @return {Howl}
     */
    _emit: function(event, id, msg) {
      var self = this;
      var events = self['_on' + event];

      // Loop through event store and fire all functions.
      for (var i=events.length-1; i>=0; i--) {
        // Only fire the listener if the correct ID is used.
        if (!events[i].id || events[i].id === id || event === 'load') {
          setTimeout(function(fn) {
            fn.call(this, id, msg);
          }.bind(self, events[i].fn), 0);

          // If this event was setup with `once`, remove it.
          if (events[i].once) {
            self.off(event, events[i].fn, events[i].id);
          }
        }
      }

      // Pass the event type into load queue so that it can continue stepping.
      self._loadQueue(event);

      return self;
    },

    /**
     * Queue of actions initiated before the sound has loaded.
     * These will be called in sequence, with the next only firing
     * after the previous has finished executing (even if async like play).
     * @return {Howl}
     */
    _loadQueue: function(event) {
      var self = this;

      if (self._queue.length > 0) {
        var task = self._queue[0];

        // Remove this task if a matching event was passed.
        if (task.event === event) {
          self._queue.shift();
          self._loadQueue();
        }

        // Run the task if no event type is passed.
        if (!event) {
          task.action();
        }
      }

      return self;
    },

    /**
     * Fired when playback ends at the end of the duration.
     * @param  {Sound} sound The sound object to work with.
     * @return {Howl}
     */
    _ended: function(sound) {
      var self = this;
      var sprite = sound._sprite;

      // If we are using IE and there was network latency we may be clipping
      // audio before it completes playing. Lets check the node to make sure it
      // believes it has completed, before ending the playback.
      if (!self._webAudio && sound._node && !sound._node.paused && !sound._node.ended && sound._node.currentTime < sound._stop) {
        setTimeout(self._ended.bind(self, sound), 100);
        return self;
      }

      // Should this sound loop?
      var loop = !!(sound._loop || self._sprite[sprite][2]);

      // Fire the ended event.
      self._emit('end', sound._id);

      // Restart the playback for HTML5 Audio loop.
      if (!self._webAudio && loop) {
        self.stop(sound._id, true).play(sound._id);
      }

      // Restart this timer if on a Web Audio loop.
      if (self._webAudio && loop) {
        self._emit('play', sound._id);
        sound._seek = sound._start || 0;
        sound._rateSeek = 0;
        sound._playStart = Howler.ctx.currentTime;

        var timeout = ((sound._stop - sound._start) * 1000) / Math.abs(sound._rate);
        self._endTimers[sound._id] = setTimeout(self._ended.bind(self, sound), timeout);
      }

      // Mark the node as paused.
      if (self._webAudio && !loop) {
        sound._paused = true;
        sound._ended = true;
        sound._seek = sound._start || 0;
        sound._rateSeek = 0;
        self._clearTimer(sound._id);

        // Clean up the buffer source.
        self._cleanBuffer(sound._node);

        // Attempt to auto-suspend AudioContext if no sounds are still playing.
        Howler._autoSuspend();
      }

      // When using a sprite, end the track.
      if (!self._webAudio && !loop) {
        self.stop(sound._id, true);
      }

      return self;
    },

    /**
     * Clear the end timer for a sound playback.
     * @param  {Number} id The sound ID.
     * @return {Howl}
     */
    _clearTimer: function(id) {
      var self = this;

      if (self._endTimers[id]) {
        // Clear the timeout or remove the ended listener.
        if (typeof self._endTimers[id] !== 'function') {
          clearTimeout(self._endTimers[id]);
        } else {
          var sound = self._soundById(id);
          if (sound && sound._node) {
            sound._node.removeEventListener('ended', self._endTimers[id], false);
          }
        }

        delete self._endTimers[id];
      }

      return self;
    },

    /**
     * Return the sound identified by this ID, or return null.
     * @param  {Number} id Sound ID
     * @return {Object}    Sound object or null.
     */
    _soundById: function(id) {
      var self = this;

      // Loop through all sounds and find the one with this ID.
      for (var i=0; i<self._sounds.length; i++) {
        if (id === self._sounds[i]._id) {
          return self._sounds[i];
        }
      }

      return null;
    },

    /**
     * Return an inactive sound from the pool or create a new one.
     * @return {Sound} Sound playback object.
     */
    _inactiveSound: function() {
      var self = this;

      self._drain();

      // Find the first inactive node to recycle.
      for (var i=0; i<self._sounds.length; i++) {
        if (self._sounds[i]._ended) {
          return self._sounds[i].reset();
        }
      }

      // If no inactive node was found, create a new one.
      return new Sound(self);
    },

    /**
     * Drain excess inactive sounds from the pool.
     */
    _drain: function() {
      var self = this;
      var limit = self._pool;
      var cnt = 0;
      var i = 0;

      // If there are less sounds than the max pool size, we are done.
      if (self._sounds.length < limit) {
        return;
      }

      // Count the number of inactive sounds.
      for (i=0; i<self._sounds.length; i++) {
        if (self._sounds[i]._ended) {
          cnt++;
        }
      }

      // Remove excess inactive sounds, going in reverse order.
      for (i=self._sounds.length - 1; i>=0; i--) {
        if (cnt <= limit) {
          return;
        }

        if (self._sounds[i]._ended) {
          // Disconnect the audio source when using Web Audio.
          if (self._webAudio && self._sounds[i]._node) {
            self._sounds[i]._node.disconnect(0);
          }

          // Remove sounds until we have the pool size.
          self._sounds.splice(i, 1);
          cnt--;
        }
      }
    },

    /**
     * Get all ID's from the sounds pool.
     * @param  {Number} id Only return one ID if one is passed.
     * @return {Array}    Array of IDs.
     */
    _getSoundIds: function(id) {
      var self = this;

      if (typeof id === 'undefined') {
        var ids = [];
        for (var i=0; i<self._sounds.length; i++) {
          ids.push(self._sounds[i]._id);
        }

        return ids;
      } else {
        return [id];
      }
    },

    /**
     * Load the sound back into the buffer source.
     * @param  {Sound} sound The sound object to work with.
     * @return {Howl}
     */
    _refreshBuffer: function(sound) {
      var self = this;

      // Setup the buffer source for playback.
      sound._node.bufferSource = Howler.ctx.createBufferSource();
      sound._node.bufferSource.buffer = cache[self._src];

      // Connect to the correct node.
      if (sound._panner) {
        sound._node.bufferSource.connect(sound._panner);
      } else {
        sound._node.bufferSource.connect(sound._node);
      }

      // Setup looping and playback rate.
      sound._node.bufferSource.loop = sound._loop;
      if (sound._loop) {
        sound._node.bufferSource.loopStart = sound._start || 0;
        sound._node.bufferSource.loopEnd = sound._stop || 0;
      }
      sound._node.bufferSource.playbackRate.setValueAtTime(sound._rate, Howler.ctx.currentTime);

      return self;
    },

    /**
     * Prevent memory leaks by cleaning up the buffer source after playback.
     * @param  {Object} node Sound's audio node containing the buffer source.
     * @return {Howl}
     */
    _cleanBuffer: function(node) {
      var self = this;
      var isIOS = Howler._navigator && Howler._navigator.vendor.indexOf('Apple') >= 0;

      if (Howler._scratchBuffer && node.bufferSource) {
        node.bufferSource.onended = null;
        node.bufferSource.disconnect(0);
        if (isIOS) {
          try { node.bufferSource.buffer = Howler._scratchBuffer; } catch(e) {}
        }
      }
      node.bufferSource = null;

      return self;
    },

    /**
     * Set the source to a 0-second silence to stop any downloading (except in IE).
     * @param  {Object} node Audio node to clear.
     */
    _clearSound: function(node) {
      var checkIE = /MSIE |Trident\//.test(Howler._navigator && Howler._navigator.userAgent);
      if (!checkIE) {
        node.src = 'data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA';
      }
    }
  };

  /** Single Sound Methods **/
  /***************************************************************************/

  /**
   * Setup the sound object, which each node attached to a Howl group is contained in.
   * @param {Object} howl The Howl parent group.
   */
  var Sound = function(howl) {
    this._parent = howl;
    this.init();
  };
  Sound.prototype = {
    /**
     * Initialize a new Sound object.
     * @return {Sound}
     */
    init: function() {
      var self = this;
      var parent = self._parent;

      // Setup the default parameters.
      self._muted = parent._muted;
      self._loop = parent._loop;
      self._volume = parent._volume;
      self._rate = parent._rate;
      self._seek = 0;
      self._paused = true;
      self._ended = true;
      self._sprite = '__default';

      // Generate a unique ID for this sound.
      self._id = ++Howler._counter;

      // Add itself to the parent's pool.
      parent._sounds.push(self);

      // Create the new node.
      self.create();

      return self;
    },

    /**
     * Create and setup a new sound object, whether HTML5 Audio or Web Audio.
     * @return {Sound}
     */
    create: function() {
      var self = this;
      var parent = self._parent;
      var volume = (Howler._muted || self._muted || self._parent._muted) ? 0 : self._volume;

      if (parent._webAudio) {
        // Create the gain node for controlling volume (the source will connect to this).
        self._node = (typeof Howler.ctx.createGain === 'undefined') ? Howler.ctx.createGainNode() : Howler.ctx.createGain();
        self._node.gain.setValueAtTime(volume, Howler.ctx.currentTime);
        self._node.paused = true;
        self._node.connect(Howler.masterGain);
      } else if (!Howler.noAudio) {
        // Get an unlocked Audio object from the pool.
        self._node = Howler._obtainHtml5Audio();

        // Listen for errors (http://dev.w3.org/html5/spec-author-view/spec.html#mediaerror).
        self._errorFn = self._errorListener.bind(self);
        self._node.addEventListener('error', self._errorFn, false);

        // Listen for 'canplaythrough' event to let us know the sound is ready.
        self._loadFn = self._loadListener.bind(self);
        self._node.addEventListener(Howler._canPlayEvent, self._loadFn, false);

        // Listen for the 'ended' event on the sound to account for edge-case where
        // a finite sound has a duration of Infinity.
        self._endFn = self._endListener.bind(self);
        self._node.addEventListener('ended', self._endFn, false);

        // Setup the new audio node.
        self._node.src = parent._src;
        self._node.preload = parent._preload === true ? 'auto' : parent._preload;
        self._node.volume = volume * Howler.volume();

        // Begin loading the source.
        self._node.load();
      }

      return self;
    },

    /**
     * Reset the parameters of this sound to the original state (for recycle).
     * @return {Sound}
     */
    reset: function() {
      var self = this;
      var parent = self._parent;

      // Reset all of the parameters of this sound.
      self._muted = parent._muted;
      self._loop = parent._loop;
      self._volume = parent._volume;
      self._rate = parent._rate;
      self._seek = 0;
      self._rateSeek = 0;
      self._paused = true;
      self._ended = true;
      self._sprite = '__default';

      // Generate a new ID so that it isn't confused with the previous sound.
      self._id = ++Howler._counter;

      return self;
    },

    /**
     * HTML5 Audio error listener callback.
     */
    _errorListener: function() {
      var self = this;

      // Fire an error event and pass back the code.
      self._parent._emit('loaderror', self._id, self._node.error ? self._node.error.code : 0);

      // Clear the event listener.
      self._node.removeEventListener('error', self._errorFn, false);
    },

    /**
     * HTML5 Audio canplaythrough listener callback.
     */
    _loadListener: function() {
      var self = this;
      var parent = self._parent;

      // Round up the duration to account for the lower precision in HTML5 Audio.
      parent._duration = Math.ceil(self._node.duration * 10) / 10;

      // Setup a sprite if none is defined.
      if (Object.keys(parent._sprite).length === 0) {
        parent._sprite = {__default: [0, parent._duration * 1000]};
      }

      if (parent._state !== 'loaded') {
        parent._state = 'loaded';
        parent._emit('load');
        parent._loadQueue();
      }

      // Clear the event listener.
      self._node.removeEventListener(Howler._canPlayEvent, self._loadFn, false);
    },

    /**
     * HTML5 Audio ended listener callback.
     */
    _endListener: function() {
      var self = this;
      var parent = self._parent;

      // Only handle the `ended`` event if the duration is Infinity.
      if (parent._duration === Infinity) {
        // Update the parent duration to match the real audio duration.
        // Round up the duration to account for the lower precision in HTML5 Audio.
        parent._duration = Math.ceil(self._node.duration * 10) / 10;

        // Update the sprite that corresponds to the real duration.
        if (parent._sprite.__default[1] === Infinity) {
          parent._sprite.__default[1] = parent._duration * 1000;
        }

        // Run the regular ended method.
        parent._ended(self);
      }

      // Clear the event listener since the duration is now correct.
      self._node.removeEventListener('ended', self._endFn, false);
    }
  };

  /** Helper Methods **/
  /***************************************************************************/

  var cache = {};

  /**
   * Buffer a sound from URL, Data URI or cache and decode to audio source (Web Audio API).
   * @param  {Howl} self
   */
  var loadBuffer = function(self) {
    var url = self._src;

    // Check if the buffer has already been cached and use it instead.
    if (cache[url]) {
      // Set the duration from the cache.
      self._duration = cache[url].duration;

      // Load the sound into this Howl.
      loadSound(self);

      return;
    }

    if (/^data:[^;]+;base64,/.test(url)) {
      // Decode the base64 data URI without XHR, since some browsers don't support it.
      var data = atob(url.split(',')[1]);
      var dataView = new Uint8Array(data.length);
      for (var i=0; i<data.length; ++i) {
        dataView[i] = data.charCodeAt(i);
      }

      decodeAudioData(dataView.buffer, self);
    } else {
      // Load the buffer from the URL.
      var xhr = new XMLHttpRequest();
      xhr.open(self._xhr.method, url, true);
      xhr.withCredentials = self._xhr.withCredentials;
      xhr.responseType = 'arraybuffer';

      // Apply any custom headers to the request.
      if (self._xhr.headers) {
        Object.keys(self._xhr.headers).forEach(function(key) {
          xhr.setRequestHeader(key, self._xhr.headers[key]);
        });
      }

      xhr.onload = function() {
        // Make sure we get a successful response back.
        var code = (xhr.status + '')[0];
        if (code !== '0' && code !== '2' && code !== '3') {
          self._emit('loaderror', null, 'Failed loading audio file with status: ' + xhr.status + '.');
          return;
        }

        decodeAudioData(xhr.response, self);
      };
      xhr.onerror = function() {
        // If there is an error, switch to HTML5 Audio.
        if (self._webAudio) {
          self._html5 = true;
          self._webAudio = false;
          self._sounds = [];
          delete cache[url];
          self.load();
        }
      };
      safeXhrSend(xhr);
    }
  };

  /**
   * Send the XHR request wrapped in a try/catch.
   * @param  {Object} xhr XHR to send.
   */
  var safeXhrSend = function(xhr) {
    try {
      xhr.send();
    } catch (e) {
      xhr.onerror();
    }
  };

  /**
   * Decode audio data from an array buffer.
   * @param  {ArrayBuffer} arraybuffer The audio data.
   * @param  {Howl}        self
   */
  var decodeAudioData = function(arraybuffer, self) {
    // Fire a load error if something broke.
    var error = function() {
      self._emit('loaderror', null, 'Decoding audio data failed.');
    };

    // Load the sound on success.
    var success = function(buffer) {
      if (buffer && self._sounds.length > 0) {
        cache[self._src] = buffer;
        loadSound(self, buffer);
      } else {
        error();
      }
    };

    // Decode the buffer into an audio source.
    if (typeof Promise !== 'undefined' && Howler.ctx.decodeAudioData.length === 1) {
      Howler.ctx.decodeAudioData(arraybuffer).then(success).catch(error);
    } else {
      Howler.ctx.decodeAudioData(arraybuffer, success, error);
    }
  }

  /**
   * Sound is now loaded, so finish setting everything up and fire the loaded event.
   * @param  {Howl} self
   * @param  {Object} buffer The decoded buffer sound source.
   */
  var loadSound = function(self, buffer) {
    // Set the duration.
    if (buffer && !self._duration) {
      self._duration = buffer.duration;
    }

    // Setup a sprite if none is defined.
    if (Object.keys(self._sprite).length === 0) {
      self._sprite = {__default: [0, self._duration * 1000]};
    }

    // Fire the loaded event.
    if (self._state !== 'loaded') {
      self._state = 'loaded';
      self._emit('load');
      self._loadQueue();
    }
  };

  /**
   * Setup the audio context when available, or switch to HTML5 Audio mode.
   */
  var setupAudioContext = function() {
    // If we have already detected that Web Audio isn't supported, don't run this step again.
    if (!Howler.usingWebAudio) {
      return;
    }

    // Check if we are using Web Audio and setup the AudioContext if we are.
    try {
      if (typeof AudioContext !== 'undefined') {
        Howler.ctx = new AudioContext();
      } else if (typeof webkitAudioContext !== 'undefined') {
        Howler.ctx = new webkitAudioContext();
      } else {
        Howler.usingWebAudio = false;
      }
    } catch(e) {
      Howler.usingWebAudio = false;
    }

    // If the audio context creation still failed, set using web audio to false.
    if (!Howler.ctx) {
      Howler.usingWebAudio = false;
    }

    // Check if a webview is being used on iOS8 or earlier (rather than the browser).
    // If it is, disable Web Audio as it causes crashing.
    var iOS = (/iP(hone|od|ad)/.test(Howler._navigator && Howler._navigator.platform));
    var appVersion = Howler._navigator && Howler._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
    var version = appVersion ? parseInt(appVersion[1], 10) : null;
    if (iOS && version && version < 9) {
      var safari = /safari/.test(Howler._navigator && Howler._navigator.userAgent.toLowerCase());
      if (Howler._navigator && !safari) {
        Howler.usingWebAudio = false;
      }
    }

    // Create and expose the master GainNode when using Web Audio (useful for plugins or advanced usage).
    if (Howler.usingWebAudio) {
      Howler.masterGain = (typeof Howler.ctx.createGain === 'undefined') ? Howler.ctx.createGainNode() : Howler.ctx.createGain();
      Howler.masterGain.gain.setValueAtTime(Howler._muted ? 0 : Howler._volume, Howler.ctx.currentTime);
      Howler.masterGain.connect(Howler.ctx.destination);
    }

    // Re-run the setup on Howler.
    Howler._setup();
  };

  // Add support for AMD (Asynchronous Module Definition) libraries such as require.js.
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
      return {
        Howler: Howler,
        Howl: Howl
      };
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  }

  // Add support for CommonJS libraries such as browserify.
  if (true) {
    exports.Howler = Howler;
    exports.Howl = Howl;
  }

  // Add to global in Node.js (for testing, etc).
  if (typeof __webpack_require__.g !== 'undefined') {
    __webpack_require__.g.HowlerGlobal = HowlerGlobal;
    __webpack_require__.g.Howler = Howler;
    __webpack_require__.g.Howl = Howl;
    __webpack_require__.g.Sound = Sound;
  } else if (typeof window !== 'undefined') {  // Define globally in case AMD is not available or unused.
    window.HowlerGlobal = HowlerGlobal;
    window.Howler = Howler;
    window.Howl = Howl;
    window.Sound = Sound;
  }
})();


/*!
 *  Spatial Plugin - Adds support for stereo and 3D audio where Web Audio is supported.
 *  
 *  howler.js v2.2.3
 *  howlerjs.com
 *
 *  (c) 2013-2020, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */

(function() {

  'use strict';

  // Setup default properties.
  HowlerGlobal.prototype._pos = [0, 0, 0];
  HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0];

  /** Global Methods **/
  /***************************************************************************/

  /**
   * Helper method to update the stereo panning position of all current Howls.
   * Future Howls will not use this value unless explicitly set.
   * @param  {Number} pan A value of -1.0 is all the way left and 1.0 is all the way right.
   * @return {Howler/Number}     Self or current stereo panning value.
   */
  HowlerGlobal.prototype.stereo = function(pan) {
    var self = this;

    // Stop right here if not using Web Audio.
    if (!self.ctx || !self.ctx.listener) {
      return self;
    }

    // Loop through all Howls and update their stereo panning.
    for (var i=self._howls.length-1; i>=0; i--) {
      self._howls[i].stereo(pan);
    }

    return self;
  };

  /**
   * Get/set the position of the listener in 3D cartesian space. Sounds using
   * 3D position will be relative to the listener's position.
   * @param  {Number} x The x-position of the listener.
   * @param  {Number} y The y-position of the listener.
   * @param  {Number} z The z-position of the listener.
   * @return {Howler/Array}   Self or current listener position.
   */
  HowlerGlobal.prototype.pos = function(x, y, z) {
    var self = this;

    // Stop right here if not using Web Audio.
    if (!self.ctx || !self.ctx.listener) {
      return self;
    }

    // Set the defaults for optional 'y' & 'z'.
    y = (typeof y !== 'number') ? self._pos[1] : y;
    z = (typeof z !== 'number') ? self._pos[2] : z;

    if (typeof x === 'number') {
      self._pos = [x, y, z];

      if (typeof self.ctx.listener.positionX !== 'undefined') {
        self.ctx.listener.positionX.setTargetAtTime(self._pos[0], Howler.ctx.currentTime, 0.1);
        self.ctx.listener.positionY.setTargetAtTime(self._pos[1], Howler.ctx.currentTime, 0.1);
        self.ctx.listener.positionZ.setTargetAtTime(self._pos[2], Howler.ctx.currentTime, 0.1);
      } else {
        self.ctx.listener.setPosition(self._pos[0], self._pos[1], self._pos[2]);
      }
    } else {
      return self._pos;
    }

    return self;
  };

  /**
   * Get/set the direction the listener is pointing in the 3D cartesian space.
   * A front and up vector must be provided. The front is the direction the
   * face of the listener is pointing, and up is the direction the top of the
   * listener is pointing. Thus, these values are expected to be at right angles
   * from each other.
   * @param  {Number} x   The x-orientation of the listener.
   * @param  {Number} y   The y-orientation of the listener.
   * @param  {Number} z   The z-orientation of the listener.
   * @param  {Number} xUp The x-orientation of the top of the listener.
   * @param  {Number} yUp The y-orientation of the top of the listener.
   * @param  {Number} zUp The z-orientation of the top of the listener.
   * @return {Howler/Array}     Returns self or the current orientation vectors.
   */
  HowlerGlobal.prototype.orientation = function(x, y, z, xUp, yUp, zUp) {
    var self = this;

    // Stop right here if not using Web Audio.
    if (!self.ctx || !self.ctx.listener) {
      return self;
    }

    // Set the defaults for optional 'y' & 'z'.
    var or = self._orientation;
    y = (typeof y !== 'number') ? or[1] : y;
    z = (typeof z !== 'number') ? or[2] : z;
    xUp = (typeof xUp !== 'number') ? or[3] : xUp;
    yUp = (typeof yUp !== 'number') ? or[4] : yUp;
    zUp = (typeof zUp !== 'number') ? or[5] : zUp;

    if (typeof x === 'number') {
      self._orientation = [x, y, z, xUp, yUp, zUp];

      if (typeof self.ctx.listener.forwardX !== 'undefined') {
        self.ctx.listener.forwardX.setTargetAtTime(x, Howler.ctx.currentTime, 0.1);
        self.ctx.listener.forwardY.setTargetAtTime(y, Howler.ctx.currentTime, 0.1);
        self.ctx.listener.forwardZ.setTargetAtTime(z, Howler.ctx.currentTime, 0.1);
        self.ctx.listener.upX.setTargetAtTime(xUp, Howler.ctx.currentTime, 0.1);
        self.ctx.listener.upY.setTargetAtTime(yUp, Howler.ctx.currentTime, 0.1);
        self.ctx.listener.upZ.setTargetAtTime(zUp, Howler.ctx.currentTime, 0.1);
      } else {
        self.ctx.listener.setOrientation(x, y, z, xUp, yUp, zUp);
      }
    } else {
      return or;
    }

    return self;
  };

  /** Group Methods **/
  /***************************************************************************/

  /**
   * Add new properties to the core init.
   * @param  {Function} _super Core init method.
   * @return {Howl}
   */
  Howl.prototype.init = (function(_super) {
    return function(o) {
      var self = this;

      // Setup user-defined default properties.
      self._orientation = o.orientation || [1, 0, 0];
      self._stereo = o.stereo || null;
      self._pos = o.pos || null;
      self._pannerAttr = {
        coneInnerAngle: typeof o.coneInnerAngle !== 'undefined' ? o.coneInnerAngle : 360,
        coneOuterAngle: typeof o.coneOuterAngle !== 'undefined' ? o.coneOuterAngle : 360,
        coneOuterGain: typeof o.coneOuterGain !== 'undefined' ? o.coneOuterGain : 0,
        distanceModel: typeof o.distanceModel !== 'undefined' ? o.distanceModel : 'inverse',
        maxDistance: typeof o.maxDistance !== 'undefined' ? o.maxDistance : 10000,
        panningModel: typeof o.panningModel !== 'undefined' ? o.panningModel : 'HRTF',
        refDistance: typeof o.refDistance !== 'undefined' ? o.refDistance : 1,
        rolloffFactor: typeof o.rolloffFactor !== 'undefined' ? o.rolloffFactor : 1
      };

      // Setup event listeners.
      self._onstereo = o.onstereo ? [{fn: o.onstereo}] : [];
      self._onpos = o.onpos ? [{fn: o.onpos}] : [];
      self._onorientation = o.onorientation ? [{fn: o.onorientation}] : [];

      // Complete initilization with howler.js core's init function.
      return _super.call(this, o);
    };
  })(Howl.prototype.init);

  /**
   * Get/set the stereo panning of the audio source for this sound or all in the group.
   * @param  {Number} pan  A value of -1.0 is all the way left and 1.0 is all the way right.
   * @param  {Number} id (optional) The sound ID. If none is passed, all in group will be updated.
   * @return {Howl/Number}    Returns self or the current stereo panning value.
   */
  Howl.prototype.stereo = function(pan, id) {
    var self = this;

    // Stop right here if not using Web Audio.
    if (!self._webAudio) {
      return self;
    }

    // If the sound hasn't loaded, add it to the load queue to change stereo pan when capable.
    if (self._state !== 'loaded') {
      self._queue.push({
        event: 'stereo',
        action: function() {
          self.stereo(pan, id);
        }
      });

      return self;
    }

    // Check for PannerStereoNode support and fallback to PannerNode if it doesn't exist.
    var pannerType = (typeof Howler.ctx.createStereoPanner === 'undefined') ? 'spatial' : 'stereo';

    // Setup the group's stereo panning if no ID is passed.
    if (typeof id === 'undefined') {
      // Return the group's stereo panning if no parameters are passed.
      if (typeof pan === 'number') {
        self._stereo = pan;
        self._pos = [pan, 0, 0];
      } else {
        return self._stereo;
      }
    }

    // Change the streo panning of one or all sounds in group.
    var ids = self._getSoundIds(id);
    for (var i=0; i<ids.length; i++) {
      // Get the sound.
      var sound = self._soundById(ids[i]);

      if (sound) {
        if (typeof pan === 'number') {
          sound._stereo = pan;
          sound._pos = [pan, 0, 0];

          if (sound._node) {
            // If we are falling back, make sure the panningModel is equalpower.
            sound._pannerAttr.panningModel = 'equalpower';

            // Check if there is a panner setup and create a new one if not.
            if (!sound._panner || !sound._panner.pan) {
              setupPanner(sound, pannerType);
            }

            if (pannerType === 'spatial') {
              if (typeof sound._panner.positionX !== 'undefined') {
                sound._panner.positionX.setValueAtTime(pan, Howler.ctx.currentTime);
                sound._panner.positionY.setValueAtTime(0, Howler.ctx.currentTime);
                sound._panner.positionZ.setValueAtTime(0, Howler.ctx.currentTime);
              } else {
                sound._panner.setPosition(pan, 0, 0);
              }
            } else {
              sound._panner.pan.setValueAtTime(pan, Howler.ctx.currentTime);
            }
          }

          self._emit('stereo', sound._id);
        } else {
          return sound._stereo;
        }
      }
    }

    return self;
  };

  /**
   * Get/set the 3D spatial position of the audio source for this sound or group relative to the global listener.
   * @param  {Number} x  The x-position of the audio source.
   * @param  {Number} y  The y-position of the audio source.
   * @param  {Number} z  The z-position of the audio source.
   * @param  {Number} id (optional) The sound ID. If none is passed, all in group will be updated.
   * @return {Howl/Array}    Returns self or the current 3D spatial position: [x, y, z].
   */
  Howl.prototype.pos = function(x, y, z, id) {
    var self = this;

    // Stop right here if not using Web Audio.
    if (!self._webAudio) {
      return self;
    }

    // If the sound hasn't loaded, add it to the load queue to change position when capable.
    if (self._state !== 'loaded') {
      self._queue.push({
        event: 'pos',
        action: function() {
          self.pos(x, y, z, id);
        }
      });

      return self;
    }

    // Set the defaults for optional 'y' & 'z'.
    y = (typeof y !== 'number') ? 0 : y;
    z = (typeof z !== 'number') ? -0.5 : z;

    // Setup the group's spatial position if no ID is passed.
    if (typeof id === 'undefined') {
      // Return the group's spatial position if no parameters are passed.
      if (typeof x === 'number') {
        self._pos = [x, y, z];
      } else {
        return self._pos;
      }
    }

    // Change the spatial position of one or all sounds in group.
    var ids = self._getSoundIds(id);
    for (var i=0; i<ids.length; i++) {
      // Get the sound.
      var sound = self._soundById(ids[i]);

      if (sound) {
        if (typeof x === 'number') {
          sound._pos = [x, y, z];

          if (sound._node) {
            // Check if there is a panner setup and create a new one if not.
            if (!sound._panner || sound._panner.pan) {
              setupPanner(sound, 'spatial');
            }

            if (typeof sound._panner.positionX !== 'undefined') {
              sound._panner.positionX.setValueAtTime(x, Howler.ctx.currentTime);
              sound._panner.positionY.setValueAtTime(y, Howler.ctx.currentTime);
              sound._panner.positionZ.setValueAtTime(z, Howler.ctx.currentTime);
            } else {
              sound._panner.setPosition(x, y, z);
            }
          }

          self._emit('pos', sound._id);
        } else {
          return sound._pos;
        }
      }
    }

    return self;
  };

  /**
   * Get/set the direction the audio source is pointing in the 3D cartesian coordinate
   * space. Depending on how direction the sound is, based on the `cone` attributes,
   * a sound pointing away from the listener can be quiet or silent.
   * @param  {Number} x  The x-orientation of the source.
   * @param  {Number} y  The y-orientation of the source.
   * @param  {Number} z  The z-orientation of the source.
   * @param  {Number} id (optional) The sound ID. If none is passed, all in group will be updated.
   * @return {Howl/Array}    Returns self or the current 3D spatial orientation: [x, y, z].
   */
  Howl.prototype.orientation = function(x, y, z, id) {
    var self = this;

    // Stop right here if not using Web Audio.
    if (!self._webAudio) {
      return self;
    }

    // If the sound hasn't loaded, add it to the load queue to change orientation when capable.
    if (self._state !== 'loaded') {
      self._queue.push({
        event: 'orientation',
        action: function() {
          self.orientation(x, y, z, id);
        }
      });

      return self;
    }

    // Set the defaults for optional 'y' & 'z'.
    y = (typeof y !== 'number') ? self._orientation[1] : y;
    z = (typeof z !== 'number') ? self._orientation[2] : z;

    // Setup the group's spatial orientation if no ID is passed.
    if (typeof id === 'undefined') {
      // Return the group's spatial orientation if no parameters are passed.
      if (typeof x === 'number') {
        self._orientation = [x, y, z];
      } else {
        return self._orientation;
      }
    }

    // Change the spatial orientation of one or all sounds in group.
    var ids = self._getSoundIds(id);
    for (var i=0; i<ids.length; i++) {
      // Get the sound.
      var sound = self._soundById(ids[i]);

      if (sound) {
        if (typeof x === 'number') {
          sound._orientation = [x, y, z];

          if (sound._node) {
            // Check if there is a panner setup and create a new one if not.
            if (!sound._panner) {
              // Make sure we have a position to setup the node with.
              if (!sound._pos) {
                sound._pos = self._pos || [0, 0, -0.5];
              }

              setupPanner(sound, 'spatial');
            }

            if (typeof sound._panner.orientationX !== 'undefined') {
              sound._panner.orientationX.setValueAtTime(x, Howler.ctx.currentTime);
              sound._panner.orientationY.setValueAtTime(y, Howler.ctx.currentTime);
              sound._panner.orientationZ.setValueAtTime(z, Howler.ctx.currentTime);
            } else {
              sound._panner.setOrientation(x, y, z);
            }
          }

          self._emit('orientation', sound._id);
        } else {
          return sound._orientation;
        }
      }
    }

    return self;
  };

  /**
   * Get/set the panner node's attributes for a sound or group of sounds.
   * This method can optionall take 0, 1 or 2 arguments.
   *   pannerAttr() -> Returns the group's values.
   *   pannerAttr(id) -> Returns the sound id's values.
   *   pannerAttr(o) -> Set's the values of all sounds in this Howl group.
   *   pannerAttr(o, id) -> Set's the values of passed sound id.
   *
   *   Attributes:
   *     coneInnerAngle - (360 by default) A parameter for directional audio sources, this is an angle, in degrees,
   *                      inside of which there will be no volume reduction.
   *     coneOuterAngle - (360 by default) A parameter for directional audio sources, this is an angle, in degrees,
   *                      outside of which the volume will be reduced to a constant value of `coneOuterGain`.
   *     coneOuterGain - (0 by default) A parameter for directional audio sources, this is the gain outside of the
   *                     `coneOuterAngle`. It is a linear value in the range `[0, 1]`.
   *     distanceModel - ('inverse' by default) Determines algorithm used to reduce volume as audio moves away from
   *                     listener. Can be `linear`, `inverse` or `exponential.
   *     maxDistance - (10000 by default) The maximum distance between source and listener, after which the volume
   *                   will not be reduced any further.
   *     refDistance - (1 by default) A reference distance for reducing volume as source moves further from the listener.
   *                   This is simply a variable of the distance model and has a different effect depending on which model
   *                   is used and the scale of your coordinates. Generally, volume will be equal to 1 at this distance.
   *     rolloffFactor - (1 by default) How quickly the volume reduces as source moves from listener. This is simply a
   *                     variable of the distance model and can be in the range of `[0, 1]` with `linear` and `[0, ∞]`
   *                     with `inverse` and `exponential`.
   *     panningModel - ('HRTF' by default) Determines which spatialization algorithm is used to position audio.
   *                     Can be `HRTF` or `equalpower`.
   *
   * @return {Howl/Object} Returns self or current panner attributes.
   */
  Howl.prototype.pannerAttr = function() {
    var self = this;
    var args = arguments;
    var o, id, sound;

    // Stop right here if not using Web Audio.
    if (!self._webAudio) {
      return self;
    }

    // Determine the values based on arguments.
    if (args.length === 0) {
      // Return the group's panner attribute values.
      return self._pannerAttr;
    } else if (args.length === 1) {
      if (typeof args[0] === 'object') {
        o = args[0];

        // Set the grou's panner attribute values.
        if (typeof id === 'undefined') {
          if (!o.pannerAttr) {
            o.pannerAttr = {
              coneInnerAngle: o.coneInnerAngle,
              coneOuterAngle: o.coneOuterAngle,
              coneOuterGain: o.coneOuterGain,
              distanceModel: o.distanceModel,
              maxDistance: o.maxDistance,
              refDistance: o.refDistance,
              rolloffFactor: o.rolloffFactor,
              panningModel: o.panningModel
            };
          }

          self._pannerAttr = {
            coneInnerAngle: typeof o.pannerAttr.coneInnerAngle !== 'undefined' ? o.pannerAttr.coneInnerAngle : self._coneInnerAngle,
            coneOuterAngle: typeof o.pannerAttr.coneOuterAngle !== 'undefined' ? o.pannerAttr.coneOuterAngle : self._coneOuterAngle,
            coneOuterGain: typeof o.pannerAttr.coneOuterGain !== 'undefined' ? o.pannerAttr.coneOuterGain : self._coneOuterGain,
            distanceModel: typeof o.pannerAttr.distanceModel !== 'undefined' ? o.pannerAttr.distanceModel : self._distanceModel,
            maxDistance: typeof o.pannerAttr.maxDistance !== 'undefined' ? o.pannerAttr.maxDistance : self._maxDistance,
            refDistance: typeof o.pannerAttr.refDistance !== 'undefined' ? o.pannerAttr.refDistance : self._refDistance,
            rolloffFactor: typeof o.pannerAttr.rolloffFactor !== 'undefined' ? o.pannerAttr.rolloffFactor : self._rolloffFactor,
            panningModel: typeof o.pannerAttr.panningModel !== 'undefined' ? o.pannerAttr.panningModel : self._panningModel
          };
        }
      } else {
        // Return this sound's panner attribute values.
        sound = self._soundById(parseInt(args[0], 10));
        return sound ? sound._pannerAttr : self._pannerAttr;
      }
    } else if (args.length === 2) {
      o = args[0];
      id = parseInt(args[1], 10);
    }

    // Update the values of the specified sounds.
    var ids = self._getSoundIds(id);
    for (var i=0; i<ids.length; i++) {
      sound = self._soundById(ids[i]);

      if (sound) {
        // Merge the new values into the sound.
        var pa = sound._pannerAttr;
        pa = {
          coneInnerAngle: typeof o.coneInnerAngle !== 'undefined' ? o.coneInnerAngle : pa.coneInnerAngle,
          coneOuterAngle: typeof o.coneOuterAngle !== 'undefined' ? o.coneOuterAngle : pa.coneOuterAngle,
          coneOuterGain: typeof o.coneOuterGain !== 'undefined' ? o.coneOuterGain : pa.coneOuterGain,
          distanceModel: typeof o.distanceModel !== 'undefined' ? o.distanceModel : pa.distanceModel,
          maxDistance: typeof o.maxDistance !== 'undefined' ? o.maxDistance : pa.maxDistance,
          refDistance: typeof o.refDistance !== 'undefined' ? o.refDistance : pa.refDistance,
          rolloffFactor: typeof o.rolloffFactor !== 'undefined' ? o.rolloffFactor : pa.rolloffFactor,
          panningModel: typeof o.panningModel !== 'undefined' ? o.panningModel : pa.panningModel
        };

        // Update the panner values or create a new panner if none exists.
        var panner = sound._panner;
        if (panner) {
          panner.coneInnerAngle = pa.coneInnerAngle;
          panner.coneOuterAngle = pa.coneOuterAngle;
          panner.coneOuterGain = pa.coneOuterGain;
          panner.distanceModel = pa.distanceModel;
          panner.maxDistance = pa.maxDistance;
          panner.refDistance = pa.refDistance;
          panner.rolloffFactor = pa.rolloffFactor;
          panner.panningModel = pa.panningModel;
        } else {
          // Make sure we have a position to setup the node with.
          if (!sound._pos) {
            sound._pos = self._pos || [0, 0, -0.5];
          }

          // Create a new panner node.
          setupPanner(sound, 'spatial');
        }
      }
    }

    return self;
  };

  /** Single Sound Methods **/
  /***************************************************************************/

  /**
   * Add new properties to the core Sound init.
   * @param  {Function} _super Core Sound init method.
   * @return {Sound}
   */
  Sound.prototype.init = (function(_super) {
    return function() {
      var self = this;
      var parent = self._parent;

      // Setup user-defined default properties.
      self._orientation = parent._orientation;
      self._stereo = parent._stereo;
      self._pos = parent._pos;
      self._pannerAttr = parent._pannerAttr;

      // Complete initilization with howler.js core Sound's init function.
      _super.call(this);

      // If a stereo or position was specified, set it up.
      if (self._stereo) {
        parent.stereo(self._stereo);
      } else if (self._pos) {
        parent.pos(self._pos[0], self._pos[1], self._pos[2], self._id);
      }
    };
  })(Sound.prototype.init);

  /**
   * Override the Sound.reset method to clean up properties from the spatial plugin.
   * @param  {Function} _super Sound reset method.
   * @return {Sound}
   */
  Sound.prototype.reset = (function(_super) {
    return function() {
      var self = this;
      var parent = self._parent;

      // Reset all spatial plugin properties on this sound.
      self._orientation = parent._orientation;
      self._stereo = parent._stereo;
      self._pos = parent._pos;
      self._pannerAttr = parent._pannerAttr;

      // If a stereo or position was specified, set it up.
      if (self._stereo) {
        parent.stereo(self._stereo);
      } else if (self._pos) {
        parent.pos(self._pos[0], self._pos[1], self._pos[2], self._id);
      } else if (self._panner) {
        // Disconnect the panner.
        self._panner.disconnect(0);
        self._panner = undefined;
        parent._refreshBuffer(self);
      }

      // Complete resetting of the sound.
      return _super.call(this);
    };
  })(Sound.prototype.reset);

  /** Helper Methods **/
  /***************************************************************************/

  /**
   * Create a new panner node and save it on the sound.
   * @param  {Sound} sound Specific sound to setup panning on.
   * @param {String} type Type of panner to create: 'stereo' or 'spatial'.
   */
  var setupPanner = function(sound, type) {
    type = type || 'spatial';

    // Create the new panner node.
    if (type === 'spatial') {
      sound._panner = Howler.ctx.createPanner();
      sound._panner.coneInnerAngle = sound._pannerAttr.coneInnerAngle;
      sound._panner.coneOuterAngle = sound._pannerAttr.coneOuterAngle;
      sound._panner.coneOuterGain = sound._pannerAttr.coneOuterGain;
      sound._panner.distanceModel = sound._pannerAttr.distanceModel;
      sound._panner.maxDistance = sound._pannerAttr.maxDistance;
      sound._panner.refDistance = sound._pannerAttr.refDistance;
      sound._panner.rolloffFactor = sound._pannerAttr.rolloffFactor;
      sound._panner.panningModel = sound._pannerAttr.panningModel;

      if (typeof sound._panner.positionX !== 'undefined') {
        sound._panner.positionX.setValueAtTime(sound._pos[0], Howler.ctx.currentTime);
        sound._panner.positionY.setValueAtTime(sound._pos[1], Howler.ctx.currentTime);
        sound._panner.positionZ.setValueAtTime(sound._pos[2], Howler.ctx.currentTime);
      } else {
        sound._panner.setPosition(sound._pos[0], sound._pos[1], sound._pos[2]);
      }

      if (typeof sound._panner.orientationX !== 'undefined') {
        sound._panner.orientationX.setValueAtTime(sound._orientation[0], Howler.ctx.currentTime);
        sound._panner.orientationY.setValueAtTime(sound._orientation[1], Howler.ctx.currentTime);
        sound._panner.orientationZ.setValueAtTime(sound._orientation[2], Howler.ctx.currentTime);
      } else {
        sound._panner.setOrientation(sound._orientation[0], sound._orientation[1], sound._orientation[2]);
      }
    } else {
      sound._panner = Howler.ctx.createStereoPanner();
      sound._panner.pan.setValueAtTime(sound._stereo, Howler.ctx.currentTime);
    }

    sound._panner.connect(sound._node);

    // Update the connections.
    if (!sound._paused) {
      sound._parent.pause(sound._id, true).play(sound._id, true);
    }
  };
})();


/***/ }),

/***/ "./src/css/styles.css":
/*!****************************!*\
  !*** ./src/css/styles.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/audioEffects/ScatterNoise1.mp3":
/*!***************************************************!*\
  !*** ./src/assets/audioEffects/ScatterNoise1.mp3 ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "ScatterNoise1.mp3";

/***/ }),

/***/ "./src/assets/audioEffects/explosionAudio/explosion1.wav":
/*!***************************************************************!*\
  !*** ./src/assets/audioEffects/explosionAudio/explosion1.wav ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "explosion1.wav";

/***/ }),

/***/ "./src/assets/audioEffects/impactAudio/NenadSimic - Muffled Distant Explosion.wav":
/*!****************************************************************************************!*\
  !*** ./src/assets/audioEffects/impactAudio/NenadSimic - Muffled Distant Explosion.wav ***!
  \****************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "NenadSimic - Muffled Distant Explosion.wav";

/***/ }),

/***/ "./src/assets/audioEffects/impactAudio/explosion2.wav":
/*!************************************************************!*\
  !*** ./src/assets/audioEffects/impactAudio/explosion2.wav ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "explosion2.wav";

/***/ }),

/***/ "./src/assets/audioEffects/impactAudio/explosion3.wav":
/*!************************************************************!*\
  !*** ./src/assets/audioEffects/impactAudio/explosion3.wav ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "explosion3.wav";

/***/ }),

/***/ "./src/assets/audioEffects/impactAudio/explosion4.wav":
/*!************************************************************!*\
  !*** ./src/assets/audioEffects/impactAudio/explosion4.wav ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "explosion4.wav";

/***/ }),

/***/ "./src/assets/audioEffects/impactAudio/hjm-big_explosion_3.wav":
/*!*********************************************************************!*\
  !*** ./src/assets/audioEffects/impactAudio/hjm-big_explosion_3.wav ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "hjm-big_explosion_3.wav";

/***/ }),

/***/ "./src/assets/img/asteroid/asteroid.png":
/*!**********************************************!*\
  !*** ./src/assets/img/asteroid/asteroid.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "asteroid.png";

/***/ }),

/***/ "./src/assets/img/background/layer-1b.png":
/*!************************************************!*\
  !*** ./src/assets/img/background/layer-1b.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "layer-1b.png";

/***/ }),

/***/ "./src/assets/img/background/layer-2.png":
/*!***********************************************!*\
  !*** ./src/assets/img/background/layer-2.png ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "layer-2.png";

/***/ }),

/***/ "./src/assets/img/enemyShips/Biomech Dragon Cannon - sans handle.png":
/*!***************************************************************************!*\
  !*** ./src/assets/img/enemyShips/Biomech Dragon Cannon - sans handle.png ***!
  \***************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "Biomech Dragon Cannon - sans handle.png";

/***/ }),

/***/ "./src/assets/img/enemyShips/destroyer/15.png":
/*!****************************************************!*\
  !*** ./src/assets/img/enemyShips/destroyer/15.png ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "15.png";

/***/ }),

/***/ "./src/assets/img/engineVisualEffects/fire.png":
/*!*****************************************************!*\
  !*** ./src/assets/img/engineVisualEffects/fire.png ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fire.png";

/***/ }),

/***/ "./src/assets/img/explosion/explosions.png":
/*!*************************************************!*\
  !*** ./src/assets/img/explosion/explosions.png ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "explosions.png";

/***/ }),

/***/ "./src/assets/img/playerShips/TM_1_Aerodynamics.png":
/*!**********************************************************!*\
  !*** ./src/assets/img/playerShips/TM_1_Aerodynamics.png ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "TM_1_Aerodynamics.png";

/***/ }),

/***/ "./src/assets/img/playerShips/shipsLeft.png":
/*!**************************************************!*\
  !*** ./src/assets/img/playerShips/shipsLeft.png ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "shipsLeft.png";

/***/ }),

/***/ "./src/assets/img/projectiles/ArcaneEffectSpriteSheet.png":
/*!****************************************************************!*\
  !*** ./src/assets/img/projectiles/ArcaneEffectSpriteSheet.png ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "ArcaneEffectSpriteSheet.png";

/***/ }),

/***/ "./src/assets/music/floatingState/enchantedTiki86.mp3":
/*!************************************************************!*\
  !*** ./src/assets/music/floatingState/enchantedTiki86.mp3 ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "enchantedTiki86.mp3";

/***/ }),

/***/ "./src/assets/music/floatingState/throughSpace.ogg":
/*!*********************************************************!*\
  !*** ./src/assets/music/floatingState/throughSpace.ogg ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "throughSpace.ogg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../css/styles.css */ "./src/css/styles.css");
/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game.js */ "./src/js/game.js");
/** @type { HTMLCanvasElement} */



window.addEventListener('load', function () {
  var canvas = document.getElementById('canvas1');
  var ctx = canvas.getContext('2d', {
    willReadFrequently: true
  });
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  var startGameButton = document.getElementById('startButton');
  var playAgainButton = document.getElementById('playAgainButton');
  var game = new _game_js__WEBPACK_IMPORTED_MODULE_1__.Game(canvas.width, canvas.height);
  var lastTime = 0;
  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    game.setGameDimensions(canvas.width, canvas.height);
  });
  startGameButton.addEventListener('click', function () {
    var gameName = document.getElementById('gameName');
    gameName.style.display = 'none';
    startGameButton.style.display = 'none';
    canvas.removeAttribute('class');
    start();
  });
  playAgainButton.addEventListener('click', function () {
    document.getElementById("finalScore").innerText = null;
    location.reload();
  });
  function start() {
    game.music.play();
    animate(0);
  }
  function gameOver() {
    var gameOver = document.getElementById('gameOver');
    var finalScore = game.score;
    document.getElementById("finalScore").innerText = 'Score: ' + finalScore;
    gameOver.removeAttribute('class');
    canvas.setAttribute('class', 'hidden');
  }
  function animate(timeStamp) {
    var deltaTime = timeStamp - lastTime;
    lastTime = timeStamp;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    game.render(ctx, deltaTime);
    if (!game.gameOver) {
      requestAnimationFrame(animate);
    } else {
      gameOver();
    }
  }
});
})();

/******/ })()
;
//# sourceMappingURL=bundlec5eeed873c6b2e54bac7.js.map