function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div\n    class=\"main-wrapper\">\n    <h1>Auto-editing abbreviation</h1>\n    <span>Service for editing lists with acronyms</span>\n    <app-form></app-form>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/form-fields/field-textarea/field-textarea.component.html":
  /*!***************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/form-fields/field-textarea/field-textarea.component.html ***!
    \***************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsFormFieldsFieldTextareaFieldTextareaComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<textarea\n    class=\"field-textarea\"\n    [formControl]=\"control\"\n    [placeholder]=\"placeholder\"\n    (blur)=\"onTouched()\"\n></textarea>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/form/form.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/form/form.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsFormFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form\n    class=\"form\"\n    [formGroup]=\"form\">\n    <app-field-textarea\n        formControlName=\"textareaEditing\"\n        placeholder=\"Enter a list of abbreviations\"\n        [control]=\"form.controls.textareaEditing\"\n    ></app-field-textarea>\n    <app-field-textarea\n        formControlName=\"textareaResult\"\n        placeholder=\"Edited the list\"\n        [control]=\"form.controls.textareaResult\"\n    ></app-field-textarea>\n</form>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_form_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/form/form.component */
    "./src/app/components/form/form.component.ts");
    /* harmony import */


    var _components_form_fields_field_textarea_field_textarea_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/form-fields/field-textarea/field-textarea.component */
    "./src/app/components/form-fields/field-textarea/field-textarea.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _components_form_form_component__WEBPACK_IMPORTED_MODULE_5__["FormComponent"], _components_form_fields_field_textarea_field_textarea_component__WEBPACK_IMPORTED_MODULE_6__["FieldTextareaComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/components/form-fields/field-textarea/field-textarea.component.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/components/form-fields/field-textarea/field-textarea.component.ts ***!
    \***********************************************************************************/

  /*! exports provided: FieldTextareaComponent */

  /***/
  function srcAppComponentsFormFieldsFieldTextareaFieldTextareaComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FieldTextareaComponent", function () {
      return FieldTextareaComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _models_DefaultValueAccessor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../models/DefaultValueAccessor */
    "./src/app/models/DefaultValueAccessor.ts");

    var FieldTextareaComponent_1;

    var FieldTextareaComponent = FieldTextareaComponent_1 = /*#__PURE__*/function (_models_DefaultValueA) {
      _inherits(FieldTextareaComponent, _models_DefaultValueA);

      var _super = _createSuper(FieldTextareaComponent);

      function FieldTextareaComponent() {
        _classCallCheck(this, FieldTextareaComponent);

        return _super.call(this);
      }

      return FieldTextareaComponent;
    }(_models_DefaultValueAccessor__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"]);

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], FieldTextareaComponent.prototype, "placeholder", void 0);
    FieldTextareaComponent = FieldTextareaComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-field-textarea',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./field-textarea.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/form-fields/field-textarea/field-textarea.component.html"))["default"],
      providers: [{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
        useExisting: FieldTextareaComponent_1,
        multi: true
      }]
    })], FieldTextareaComponent);
    /***/
  },

  /***/
  "./src/app/components/form/form.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/form/form.component.ts ***!
    \***************************************************/

  /*! exports provided: FormComponent */

  /***/
  function srcAppComponentsFormFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormComponent", function () {
      return FormComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _services_changing_data_field_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/changing-data-field.service */
    "./src/app/services/changing-data-field.service.ts");
    /* harmony import */


    var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/local-storage.service */
    "./src/app/services/local-storage.service.ts");

    var FormComponent = /*#__PURE__*/function () {
      function FormComponent(changingDataFieldService, localStorageService) {
        _classCallCheck(this, FormComponent);

        this.changingDataFieldService = changingDataFieldService;
        this.localStorageService = localStorageService;
        this.subscrition$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"]();
      }

      _createClass(FormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.createForm();
          this.subscrition$.add(this.form.get('textareaEditing').valueChanges.subscribe(function (res) {
            _this.onChange(String(res));
          }));
          this.subscrition$.add(this.form.get('textareaResult').valueChanges.subscribe(function (res) {
            _this.localStorageService.set('valueTextareaResult', res);
          }));
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscrition$.unsubscribe();
        }
      }, {
        key: "onChange",
        value: function onChange(value) {
          var newValue = value.trim();
          this.form.controls.textareaResult.disable();
          var resultValue = newValue ? this.changingDataFieldService.changeValue(newValue) : '';
          this.form.controls.textareaResult.enable();
          this.form.controls.textareaResult.patchValue(resultValue);
          this.saveValueForm(value, resultValue);
        }
      }, {
        key: "createForm",
        value: function createForm() {
          var valueTextareaEditing = this.localStorageService.get('valueTextareaEditing') || '';
          var valueTextareaResult = this.localStorageService.get('valueTextareaResult') || '';
          this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            textareaEditing: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](valueTextareaEditing),
            textareaResult: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](valueTextareaResult)
          });
        }
      }, {
        key: "saveValueForm",
        value: function saveValueForm(value, resultValue) {
          this.localStorageService.set('valueTextareaEditing', value);
          this.localStorageService.set('valueTextareaResult', resultValue);
        }
      }]);

      return FormComponent;
    }();

    FormComponent.ctorParameters = function () {
      return [{
        type: _services_changing_data_field_service__WEBPACK_IMPORTED_MODULE_4__["ChangingDataFieldService"]
      }, {
        type: _services_local_storage_service__WEBPACK_IMPORTED_MODULE_5__["LocalStorageService"]
      }];
    };

    FormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-form',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./form.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/form/form.component.html"))["default"]
    })], FormComponent);
    /***/
  },

  /***/
  "./src/app/models/DefaultValueAccessor.ts":
  /*!************************************************!*\
    !*** ./src/app/models/DefaultValueAccessor.ts ***!
    \************************************************/

  /*! exports provided: DefaultValueAccessor */

  /***/
  function srcAppModelsDefaultValueAccessorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DefaultValueAccessor", function () {
      return DefaultValueAccessor;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var DefaultValueAccessor = /*#__PURE__*/function () {
      function DefaultValueAccessor() {
        _classCallCheck(this, DefaultValueAccessor);

        this.onChange = function () {};

        this.onTouched = function () {};
      }

      _createClass(DefaultValueAccessor, [{
        key: "writeValue",
        value: function writeValue(value) {
          this.value = value;
        }
      }, {
        key: "registerOnChange",
        value: function registerOnChange(fn) {
          this.onChange = fn;
        }
      }, {
        key: "registerOnTouched",
        value: function registerOnTouched(fn) {
          this.onTouched = fn;
        }
      }, {
        key: "updateValue",
        value: function updateValue() {
          var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
          this.value = value;
          this.onChange(value);
          this.onTouched();
        }
      }, {
        key: "setDisabledState",
        value: function setDisabledState(isDisabled) {
          this.disabled = isDisabled;
        }
      }]);

      return DefaultValueAccessor;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DefaultValueAccessor.prototype, "control", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DefaultValueAccessor.prototype, "writeValue", null);
    /***/
  },

  /***/
  "./src/app/services/changing-data-field.service.ts":
  /*!*********************************************************!*\
    !*** ./src/app/services/changing-data-field.service.ts ***!
    \*********************************************************/

  /*! exports provided: ChangingDataFieldService */

  /***/
  function srcAppServicesChangingDataFieldServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChangingDataFieldService", function () {
      return ChangingDataFieldService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _regexp_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./regexp.service */
    "./src/app/services/regexp.service.ts");
    /* harmony import */


    var _tools_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./tools.service */
    "./src/app/services/tools.service.ts");

    var ChangingDataFieldService = /*#__PURE__*/function () {
      function ChangingDataFieldService(regexpService, toolsService) {
        _classCallCheck(this, ChangingDataFieldService);

        this.regexpService = regexpService;
        this.toolsService = toolsService;
      }

      _createClass(ChangingDataFieldService, [{
        key: "changeValue",
        value: function changeValue(value) {
          var newValue = this.regexpService.makeCapitalLetters(this.removeSymbolAfterProcessing(this.workWithAcronyms(this.removeSymbolBeforeProcessing(value))));
          return newValue;
        }
      }, {
        key: "workWithAcronyms",
        value: function workWithAcronyms(value) {
          var _this2 = this;

          var arrStrings = value.split('\n');
          var newString = '';
          arrStrings.forEach(function (itemString, index) {
            newString = _this2.determineLocationAcronym(itemString, newString, arrStrings[index + 1] || '');
          });
          return newString;
        }
      }, {
        key: "determineLocationAcronym",
        value: function determineLocationAcronym(value, string, nextValue) {
          var newValue = value.trim().replace(/\s/g, ' ');
          var isOneWord = !newValue.includes(' ');
          var isAcronymBegin = this.checkAcronymInTheBegin(newValue);
          var isAcronymEnd = this.checkAcronymInTheEnd(newValue);
          var isDescriptionAcronym = !isAcronymBegin && !isAcronymEnd;
          var isAcronymOnPreviousLine = this.checkAcronymOnPreviousLine(string, newValue, isDescriptionAcronym);
          var isAcronymOnNextLine = this.checkAcronymOnNextLine(nextValue, newValue, isDescriptionAcronym);

          if (/[0-9]/.test(newValue)) {
            // console.log('аббревиатура с цифрами')
            return string;
          }

          if (isOneWord) {
            // console.log('только акроним');
            if (string) {
              return nextValue ? "".concat(string, "\n").concat(newValue) : string;
            } else {
              return newValue;
            }
          }

          if (isAcronymOnPreviousLine) {
            // console.log('описание акронима после акронима');
            var indent = string ? '\t' : '';
            return "".concat(string).concat(indent).concat(this.toolsService.letterLowerCase(isAcronymBegin || isAcronymEnd ? this.getCroppedDescription(newValue, isAcronymBegin) : newValue));
          }

          if (isAcronymOnNextLine) {
            // console.log('описание акронима перед акронимом');
            var _indent = string ? '\n' : '';

            return "".concat(string).concat(_indent).concat(nextValue, "\t").concat(this.toolsService.letterLowerCase(newValue));
          }

          if (isAcronymBegin && isAcronymEnd || isAcronymBegin) {
            // console.log('акроним в начале строки');
            var _indent2 = string ? '\n' : '';

            var acronym = this.regexpService.split(newValue, /\s/)[0];
            var remainderString = newValue.split(acronym)[1].trim();
            return "".concat(string).concat(_indent2).concat(acronym, "\t").concat(this.toolsService.letterLowerCase(remainderString));
          }

          if (isAcronymEnd) {
            // console.log('акроним в конце строки');
            var _indent3 = string ? '\n' : '';

            return "".concat(string).concat(_indent3).concat(this.moveToBegin(newValue));
          }

          if (isDescriptionAcronym) {
            // console.log('только описание акронима');
            var _indent4 = string ? isAcronymOnPreviousLine ? '\n' : '' : '';

            return "".concat(string).concat(_indent4);
          } // console.log('акронима нет');


          return string;
        }
      }, {
        key: "checkAcronymInTheBegin",
        value: function checkAcronymInTheBegin(value) {
          var arrValues = this.regexpService.split(value, /\s/);
          var firstValue = arrValues[0];
          return value.length > 0 ? this.checkAcronym(firstValue) : false;
        }
      }, {
        key: "checkAcronymInTheEnd",
        value: function checkAcronymInTheEnd(value) {
          var arrString = this.regexpService.split(value, /\s/);
          var findString = arrString[arrString.length - 1];
          return value.length > 0 ? this.checkAcronym(findString) : false;
        }
      }, {
        key: "checkAcronymOnPreviousLine",
        value: function checkAcronymOnPreviousLine(value, newValue, isDescriptionAcronym) {
          var arrString = value.split('\n');
          var lastString = arrString[arrString.length - 1];
          var arrValue = this.regexpService.split(lastString, /\s/);
          var lastValue = arrValue[arrValue.length - 1];
          var isBelongsAcronymDescription = this.checkBelongsAcronymDescription(lastValue, newValue);
          return this.checkAcronym(lastValue) && arrValue.length === 1 && isBelongsAcronymDescription;
        }
      }, {
        key: "checkAcronymOnNextLine",
        value: function checkAcronymOnNextLine(value, newValue, isDescriptionAcronym) {
          var arrValue = this.regexpService.split(value, /\s/);
          var lastValue = arrValue[arrValue.length - 1];
          var isBelongsAcronymDescription = this.checkBelongsAcronymDescription(lastValue, newValue);
          return this.checkAcronym(lastValue) && arrValue.length === 1 && isBelongsAcronymDescription;
        }
      }, {
        key: "moveToBegin",
        value: function moveToBegin(value) {
          var arrString = this.regexpService.split(value, /\s/);
          var findString = arrString[arrString.length - 1];
          var trimString = value.split(findString)[0].trim();
          return "".concat(this.regexpService.removeBrackets(findString), "\t").concat(this.toolsService.letterLowerCase(trimString));
        }
      }, {
        key: "checkAcronym",
        value: function checkAcronym(value) {
          var newValue = this.regexpService.removeBrackets(value);
          return !!newValue && newValue.length < 6 && newValue.length > 2 && newValue.toUpperCase() === newValue;
        }
      }, {
        key: "removeSymbolBeforeProcessing",
        value: function removeSymbolBeforeProcessing(value) {
          return this.regexpService.removeSeveralSpaces(this.regexpService.removeBlankLines(this.regexpService.removeSpecialSymbol(value)));
        }
      }, {
        key: "removeSymbolAfterProcessing",
        value: function removeSymbolAfterProcessing(value) {
          return this.regexpService.removeBrackets(this.regexpService.removeSpecialSymbolAndTextFollowing(this.regexpService.removeSpecialSymbolFromContent(value)));
        }
      }, {
        key: "checkBelongsAcronymDescription",
        value: function checkBelongsAcronymDescription(acronym, description) {
          return acronym && typeof acronym[0] === 'string' && typeof description[0] === 'string' && acronym[0].toUpperCase() === description[0].toUpperCase();
        }
      }, {
        key: "getCroppedDescription",
        value: function getCroppedDescription(description, isAcronymBegin) {
          var arrValues = this.regexpService.split(description, /\s/);
          return isAcronymBegin ? description.split(arrValues[0])[1].trim() : description.split(arrValues[arrValues.length - 1])[0].trim();
        }
      }]);

      return ChangingDataFieldService;
    }();

    ChangingDataFieldService.ctorParameters = function () {
      return [{
        type: _regexp_service__WEBPACK_IMPORTED_MODULE_2__["RegexpService"]
      }, {
        type: _tools_service__WEBPACK_IMPORTED_MODULE_3__["ToolsService"]
      }];
    };

    ChangingDataFieldService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ChangingDataFieldService);
    /***/
  },

  /***/
  "./src/app/services/local-storage.service.ts":
  /*!***************************************************!*\
    !*** ./src/app/services/local-storage.service.ts ***!
    \***************************************************/

  /*! exports provided: LocalStorageService */

  /***/
  function srcAppServicesLocalStorageServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LocalStorageService", function () {
      return LocalStorageService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var LocalStorageService = /*#__PURE__*/function () {
      function LocalStorageService() {
        _classCallCheck(this, LocalStorageService);
      }

      _createClass(LocalStorageService, [{
        key: "get",
        value: function get(name) {
          return JSON.parse(localStorage.getItem(name));
        }
      }, {
        key: "set",
        value: function set(name, data) {
          localStorage.setItem(name, JSON.stringify(data));
        }
      }]);

      return LocalStorageService;
    }();

    LocalStorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], LocalStorageService);
    /***/
  },

  /***/
  "./src/app/services/regexp.service.ts":
  /*!********************************************!*\
    !*** ./src/app/services/regexp.service.ts ***!
    \********************************************/

  /*! exports provided: RegexpService */

  /***/
  function srcAppServicesRegexpServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegexpService", function () {
      return RegexpService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _tools_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./tools.service */
    "./src/app/services/tools.service.ts");

    var RegexpService = /*#__PURE__*/function () {
      function RegexpService(toolsService) {
        _classCallCheck(this, RegexpService);

        this.toolsService = toolsService;
      }

      _createClass(RegexpService, [{
        key: "removeSpecialSymbolFromContent",
        value: function removeSpecialSymbolFromContent(value) {
          return value.replace(/\(.*?\)|\[.*?\]/g, '');
        }
      }, {
        key: "removeSpecialSymbolAndTextFollowing",
        value: function removeSpecialSymbolAndTextFollowing(value) {
          return value.replace(/[;|].*/g, '');
        }
      }, {
        key: "makeCapitalLetters",
        value: function makeCapitalLetters(value) {
          return value.replace(/\b[a-z](?=[a-z]{1})/gi, this.toolsService.letterUpperCase);
        }
      }, {
        key: "removeBrackets",
        value: function removeBrackets(value) {
          return value.replace(/\[|\]|\(|\)/g, '');
        }
      }, {
        key: "removeSeveralSpaces",
        value: function removeSeveralSpaces(value) {
          return value.replace(/ +/g, ' ');
        }
      }, {
        key: "removeSpecialSymbol",
        value: function removeSpecialSymbol(value) {
          return value.replace(/[^\w\s\;\[\]\|\(\)]+/g, '');
        }
      }, {
        key: "removeBlankLines",
        value: function removeBlankLines(value) {
          return value.replace(/^\n/gm, '');
        }
      }, {
        key: "split",
        value: function split(value, regexp) {
          return value.split(regexp);
        }
      }]);

      return RegexpService;
    }();

    RegexpService.ctorParameters = function () {
      return [{
        type: _tools_service__WEBPACK_IMPORTED_MODULE_2__["ToolsService"]
      }];
    };

    RegexpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], RegexpService);
    /***/
  },

  /***/
  "./src/app/services/tools.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/tools.service.ts ***!
    \*******************************************/

  /*! exports provided: ToolsService */

  /***/
  function srcAppServicesToolsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToolsService", function () {
      return ToolsService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ToolsService = /*#__PURE__*/function () {
      function ToolsService() {
        _classCallCheck(this, ToolsService);
      }

      _createClass(ToolsService, [{
        key: "letterUpperCase",
        value: function letterUpperCase(letter) {
          return letter.toUpperCase();
        }
      }, {
        key: "letterLowerCase",
        value: function letterLowerCase(letter) {
          return letter.toLowerCase();
        }
      }]);

      return ToolsService;
    }();

    ToolsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ToolsService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/fanatico/Documents/domins/angular/actual/auto-editing-abbreviation/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map