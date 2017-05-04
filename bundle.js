/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _foundation = __webpack_require__(6);

Object.defineProperty(exports, 'MDCFoundation', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_foundation).default;
  }
});

var _component = __webpack_require__(13);

Object.defineProperty(exports, 'MDCComponent', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_component).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MDCRipple = exports.MDCRippleFoundation = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _base = __webpack_require__(0);

var _foundation = __webpack_require__(46);

var _foundation2 = _interopRequireDefault(_foundation);

var _util = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2016 Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var MATCHES = (0, _util.getMatchesProperty)(HTMLElement.prototype);

exports.MDCRippleFoundation = _foundation2.default;

var MDCRipple = exports.MDCRipple = function (_MDCComponent) {
  _inherits(MDCRipple, _MDCComponent);

  function MDCRipple() {
    _classCallCheck(this, MDCRipple);

    return _possibleConstructorReturn(this, (MDCRipple.__proto__ || Object.getPrototypeOf(MDCRipple)).apply(this, arguments));
  }

  _createClass(MDCRipple, [{
    key: 'activate',
    value: function activate() {
      this.foundation_.activate();
    }
  }, {
    key: 'deactivate',
    value: function deactivate() {
      this.foundation_.deactivate();
    }
  }, {
    key: 'getDefaultFoundation',
    value: function getDefaultFoundation() {
      return new _foundation2.default(MDCRipple.createAdapter(this));
    }
  }, {
    key: 'initialSyncWithDOM',
    value: function initialSyncWithDOM() {
      this.unbounded = 'mdcRippleIsUnbounded' in this.root_.dataset;
    }
  }, {
    key: 'unbounded',
    get: function get() {
      return this.unbounded_;
    },
    set: function set(unbounded) {
      var UNBOUNDED = _foundation2.default.cssClasses.UNBOUNDED;

      this.unbounded_ = Boolean(unbounded);
      if (this.unbounded_) {
        this.root_.classList.add(UNBOUNDED);
      } else {
        this.root_.classList.remove(UNBOUNDED);
      }
    }
  }], [{
    key: 'attachTo',
    value: function attachTo(root) {
      var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref$isUnbounded = _ref.isUnbounded,
          isUnbounded = _ref$isUnbounded === undefined ? undefined : _ref$isUnbounded;

      var ripple = new MDCRipple(root);
      // Only override unbounded behavior if option is explicitly specified
      if (isUnbounded !== undefined) {
        ripple.unbounded = isUnbounded;
      }
      return ripple;
    }
  }, {
    key: 'createAdapter',
    value: function createAdapter(instance) {
      return {
        browserSupportsCssVars: function browserSupportsCssVars() {
          return (0, _util.supportsCssVariables)(window);
        },
        isUnbounded: function isUnbounded() {
          return instance.unbounded;
        },
        isSurfaceActive: function isSurfaceActive() {
          return instance.root_[MATCHES](':active');
        },
        addClass: function addClass(className) {
          return instance.root_.classList.add(className);
        },
        removeClass: function removeClass(className) {
          return instance.root_.classList.remove(className);
        },
        registerInteractionHandler: function registerInteractionHandler(evtType, handler) {
          return instance.root_.addEventListener(evtType, handler);
        },
        deregisterInteractionHandler: function deregisterInteractionHandler(evtType, handler) {
          return instance.root_.removeEventListener(evtType, handler);
        },
        registerResizeHandler: function registerResizeHandler(handler) {
          return window.addEventListener('resize', handler);
        },
        deregisterResizeHandler: function deregisterResizeHandler(handler) {
          return window.removeEventListener('resize', handler);
        },
        updateCssVariable: function updateCssVariable(varName, value) {
          return instance.root_.style.setProperty(varName, value);
        },
        computeBoundingRect: function computeBoundingRect() {
          return instance.root_.getBoundingClientRect();
        },
        getWindowPageOffset: function getWindowPageOffset() {
          return { x: window.pageXOffset, y: window.pageYOffset };
        }
      };
    }
  }]);

  return MDCRipple;
}(_base.MDCComponent);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _constants = __webpack_require__(25);

Object.defineProperty(exports, 'FOCUSABLE_ELEMENTS', {
  enumerable: true,
  get: function get() {
    return _constants.FOCUSABLE_ELEMENTS;
  }
});

var _foundation = __webpack_require__(26);

Object.defineProperty(exports, 'MDCSlidableDrawerFoundation', {
  enumerable: true,
  get: function get() {
    return _foundation.MDCSlidableDrawerFoundation;
  }
});

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.remapEvent = remapEvent;
exports.getTransformPropertyName = getTransformPropertyName;
exports.supportsCssCustomProperties = supportsCssCustomProperties;
exports.applyPassive = applyPassive;
exports.saveElementTabState = saveElementTabState;
exports.restoreElementTabState = restoreElementTabState;
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var TAB_DATA = 'data-mdc-tabindex';
var TAB_DATA_HANDLED = 'data-mdc-tabindex-handled';

var storedTransformPropertyName_ = void 0;
var supportsPassive_ = void 0;

// Remap touch events to pointer events, if the browser doesn't support touch events.
function remapEvent(eventName) {
  var globalObj = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : window;

  if (!('ontouchstart' in globalObj.document)) {
    switch (eventName) {
      case 'touchstart':
        return 'pointerdown';
      case 'touchmove':
        return 'pointermove';
      case 'touchend':
        return 'pointerup';
      default:
        return eventName;
    }
  }

  return eventName;
}

// Choose the correct transform property to use on the current browser.
function getTransformPropertyName() {
  var globalObj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;
  var forceRefresh = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (storedTransformPropertyName_ === undefined || forceRefresh) {
    var el = globalObj.document.createElement('div');
    var transformPropertyName = 'transform' in el.style ? 'transform' : '-webkit-transform';
    storedTransformPropertyName_ = transformPropertyName;
  }

  return storedTransformPropertyName_;
}

// Determine whether the current browser supports CSS properties.
function supportsCssCustomProperties() {
  var globalObj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;

  if ('CSS' in globalObj) {
    return globalObj.CSS.supports('(--color: red)');
  }
  return false;
}

// Determine whether the current browser supports passive event listeners, and if so, use them.
function applyPassive() {
  var globalObj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;
  var forceRefresh = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (supportsPassive_ === undefined || forceRefresh) {
    var isSupported = false;
    try {
      globalObj.document.addEventListener('test', null, { get passive() {
          isSupported = true;
        } });
    } catch (e) {}

    supportsPassive_ = isSupported;
  }

  return supportsPassive_ ? { passive: true } : false;
}

// Save the tab state for an element.
function saveElementTabState(el) {
  if (el.hasAttribute('tabindex')) {
    el.setAttribute(TAB_DATA, el.getAttribute('tabindex'));
  }
  el.setAttribute(TAB_DATA_HANDLED, true);
}

// Restore the tab state for an element, if it was saved.
function restoreElementTabState(el) {
  // Only modify elements we've already handled, in case anything was dynamically added since we saved state.
  if (el.hasAttribute(TAB_DATA_HANDLED)) {
    if (el.hasAttribute(TAB_DATA)) {
      el.setAttribute('tabindex', el.getAttribute(TAB_DATA));
      el.removeAttribute(TAB_DATA);
    } else {
      el.removeAttribute('tabindex');
    }
    el.removeAttribute(TAB_DATA_HANDLED);
  }
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.supportsCssVariables = supportsCssVariables;
exports.getMatchesProperty = getMatchesProperty;
exports.getNormalizedEventCoords = getNormalizedEventCoords;
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

function supportsCssVariables(windowObj) {
  var supportsFunctionPresent = windowObj.CSS && typeof windowObj.CSS.supports === 'function';
  if (!supportsFunctionPresent) {
    return;
  }

  var explicitlySupportsCssVars = windowObj.CSS.supports('--css-vars', 'yes');
  // See: https://bugs.webkit.org/show_bug.cgi?id=154669
  // See: README section on Safari
  var weAreFeatureDetectingSafari10plus = windowObj.CSS.supports('(--css-vars: yes)') && windowObj.CSS.supports('color', '#00000000');
  return explicitlySupportsCssVars || weAreFeatureDetectingSafari10plus;
}

function getMatchesProperty(HTMLElementPrototype) {
  return ['webkitMatchesSelector', 'msMatchesSelector', 'matches'].filter(function (p) {
    return p in HTMLElementPrototype;
  }).pop();
}

function getNormalizedEventCoords(ev, pageOffset, clientRect) {
  var x = pageOffset.x,
      y = pageOffset.y;

  var documentX = x + clientRect.left;
  var documentY = y + clientRect.top;

  var normalizedX = void 0;
  var normalizedY = void 0;
  // Determine touch point relative to the ripple container.
  if (ev.type === 'touchstart') {
    normalizedX = ev.changedTouches[0].pageX - documentX;
    normalizedY = ev.changedTouches[0].pageY - documentY;
  } else {
    normalizedX = ev.pageX - documentX;
    normalizedY = ev.pageY - documentY;
  }

  return { x: normalizedX, y: normalizedY };
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCorrectEventName = getCorrectEventName;
exports.getCorrectPropertyName = getCorrectPropertyName;
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var eventTypeMap = {
  animationstart: {
    noPrefix: 'animationstart',
    webkitPrefix: 'webkitAnimationStart'
  },
  animationend: {
    noPrefix: 'animationend',
    webkitPrefix: 'webkitAnimationEnd'
  },
  animationiteration: {
    noPrefix: 'animationiteration',
    webkitPrefix: 'webkitAnimationIteration'
  },
  transitionend: {
    noPrefix: 'transitionend',
    webkitPrefix: 'webkitTransitionEnd'
  }
};

var cssPropertyMap = {
  animation: {
    noPrefix: 'animation',
    webkitPrefix: '-webkit-animation'
  },
  transform: {
    noPrefix: 'transform',
    webkitPrefix: '-webkit-transform'
  },
  transition: {
    noPrefix: 'transition',
    webkitPrefix: '-webkit-transition'
  }
};

function hasProperShape(windowObj) {
  return windowObj.document !== undefined && typeof windowObj.document.createElement === 'function';
}

function eventFoundInMaps(eventType) {
  return eventType in eventTypeMap || eventType in cssPropertyMap;
}

// If 'animation' or 'transition' exist as style property, webkit prefix isn't necessary. Since we are unable to
// see the event types on the element, we must rely on the corresponding style properties.
function getJavaScriptEventName(eventType, map, el) {
  switch (eventType) {
    case 'animationstart':
    case 'animationend':
    case 'animationiteration':
      return 'animation' in el.style ? map[eventType].noPrefix : map[eventType].webkitPrefix;
    case 'transitionend':
      return 'transition' in el.style ? map[eventType].noPrefix : map[eventType].webkitPrefix;
    default:
      return map[eventType].noPrefix;
  }
}

// Helper function to determine browser prefix for CSS3 animation events
// and property names
//
// Parameters:
// windowObject: Object -- Contains Document with a `createElement()` method
// eventType: string -- The type of animation
//
// returns the value of the event as a string, prefixed if necessary.
// If proper arguments are not supplied, this function will return
// the property or event type without webkit prefix.
//
function getAnimationName(windowObj, eventType) {
  if (!hasProperShape(windowObj) || !eventFoundInMaps(eventType)) {
    return eventType;
  }

  var map = eventType in eventTypeMap ? eventTypeMap : cssPropertyMap;
  var el = windowObj.document.createElement('div');
  var eventName = '';

  if (map === eventTypeMap) {
    eventName = getJavaScriptEventName(eventType, map, el);
  } else {
    eventName = map[eventType].noPrefix in el.style ? map[eventType].noPrefix : map[eventType].webkitPrefix;
  }

  return eventName;
}

// Public functions to access getAnimationName() for JavaScript events or CSS
// property names.
//
// Parameters:
// windowObject: Object -- Contains Document with a `createElement()` method
// eventType: string -- The type of animation
//
// returns the value of the event as a string, prefixed if necessary.
// If proper arguments are not supplied, this function will return
// the property or event type without webkit prefix.
//
function getCorrectEventName(windowObj, eventType) {
  return getAnimationName(windowObj, eventType);
}

function getCorrectPropertyName(windowObj, eventType) {
  return getAnimationName(windowObj, eventType);
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Copyright 2016 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var MDCFoundation = function () {
  _createClass(MDCFoundation, null, [{
    key: "cssClasses",
    get: function get() {
      // Classes extending MDCFoundation should implement this method to return an object which exports every
      // CSS class the foundation class needs as a property. e.g. {ACTIVE: 'mdc-component--active'}
      return {};
    }
  }, {
    key: "strings",
    get: function get() {
      // Classes extending MDCFoundation should implement this method to return an object which exports all
      // semantic strings as constants. e.g. {ARIA_ROLE: 'tablist'}
      return {};
    }
  }, {
    key: "numbers",
    get: function get() {
      // Classes extending MDCFoundation should implement this method to return an object which exports all
      // of its semantic numbers as constants. e.g. {ANIMATION_DELAY_MS: 350}
      return {};
    }
  }, {
    key: "defaultAdapter",
    get: function get() {
      // Classes extending MDCFoundation may choose to implement this getter in order to provide a convenient
      // way of viewing the necessary methods of an adapter. In the future, this could also be used for adapter
      // validation.
      return {};
    }
  }]);

  function MDCFoundation() {
    var adapter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, MDCFoundation);

    this.adapter_ = adapter;
  }

  _createClass(MDCFoundation, [{
    key: "init",
    value: function init() {
      // Subclasses should override this method to perform initialization routines (registering events, etc.)
    }
  }, {
    key: "destroy",
    value: function destroy() {
      // Subclasses should override this method to perform de-initialization routines (de-registering events, etc.)
    }
  }]);

  return MDCFoundation;
}();

exports.default = MDCFoundation;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _simple = __webpack_require__(41);

Object.defineProperty(exports, 'MDCSimpleMenu', {
  enumerable: true,
  get: function get() {
    return _simple.MDCSimpleMenu;
  }
});
Object.defineProperty(exports, 'MDCSimpleMenuFoundation', {
  enumerable: true,
  get: function get() {
    return _simple.MDCSimpleMenuFoundation;
  }
});

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTransformPropertyName = getTransformPropertyName;
exports.clamp = clamp;
exports.bezierProgress = bezierProgress;
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var storedTransformPropertyName_ = void 0;

// Returns the name of the correct transform property to use on the current browser.
function getTransformPropertyName(globalObj) {
  var forceRefresh = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (storedTransformPropertyName_ === undefined || forceRefresh) {
    var el = globalObj.document.createElement('div');
    var transformPropertyName = 'transform' in el.style ? 'transform' : 'webkitTransform';
    storedTransformPropertyName_ = transformPropertyName;
  }

  return storedTransformPropertyName_;
}

// Clamps a value between the minimum and the maximum, returning the clamped value.
function clamp(value) {
  var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var max = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

  return Math.min(max, Math.max(min, value));
}

// Returns the easing value to apply at time t, for a given cubic bezier curve.
// Control points P0 and P3 are assumed to be (0,0) and (1,1), respectively.
// Paramters are as follows:
// - time: The current time in the animation, scaled between 0 and 1.
// - x1: The x value of control point P1.
// - y1: The y value of control point P1.
// - x2: The x value of control point P2.
// - y2: The y value of control point P2.
function bezierProgress(time, x1, y1, x2, y2) {
  return getBezierCoordinate_(solvePositionFromXValue_(time, x1, x2), y1, y2);
}

// Compute a single coordinate at a position point between 0 and 1.
// c1 and c2 are the matching coordinate on control points P1 and P2, respectively.
// Control points P0 and P3 are assumed to be (0,0) and (1,1), respectively.
// Adapted from https://github.com/google/closure-library/blob/master/closure/goog/math/bezier.js.
function getBezierCoordinate_(t, c1, c2) {
  // Special case start and end.
  if (t === 0 || t === 1) {
    return t;
  }

  // Step one - from 4 points to 3
  var ic0 = t * c1;
  var ic1 = c1 + t * (c2 - c1);
  var ic2 = c2 + t * (1 - c2);

  // Step two - from 3 points to 2
  ic0 += t * (ic1 - ic0);
  ic1 += t * (ic2 - ic1);

  // Final step - last point
  return ic0 + t * (ic1 - ic0);
}

// Project a point onto the Bezier curve, from a given X. Calculates the position t along the curve.
// Adapted from https://github.com/google/closure-library/blob/master/closure/goog/math/bezier.js.
function solvePositionFromXValue_(xVal, x1, x2) {
  var EPSILON = 1e-6;
  var MAX_ITERATIONS = 8;

  if (xVal <= 0) {
    return 0;
  } else if (xVal >= 1) {
    return 1;
  }

  // Initial estimate of t using linear interpolation.
  var t = xVal;

  // Try gradient descent to solve for t. If it works, it is very fast.
  var tMin = 0;
  var tMax = 1;
  var value = 0;
  for (var i = 0; i < MAX_ITERATIONS; i++) {
    value = getBezierCoordinate_(t, x1, x2);
    var derivative = (getBezierCoordinate_(t + EPSILON, x1, x2) - value) / EPSILON;
    if (Math.abs(value - xVal) < EPSILON) {
      return t;
    } else if (Math.abs(derivative) < EPSILON) {
      break;
    } else {
      if (value < xVal) {
        tMin = t;
      } else {
        tMax = t;
      }
      t -= (value - xVal) / derivative;
    }
  }

  // If the gradient descent got stuck in a local minimum, e.g. because
  // the derivative was close to 0, use a Dichotomy refinement instead.
  // We limit the number of interations to 8.
  for (var _i = 0; Math.abs(value - xVal) > EPSILON && _i < MAX_ITERATIONS; _i++) {
    if (value < xVal) {
      tMin = t;
      t = (t + tMax) / 2;
    } else {
      tMax = t;
      t = (t + tMin) / 2;
    }
    value = getBezierCoordinate_(t, x1, x2);
  }
  return t;
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.autoInit = exports.select = exports.menu = exports.textfield = exports.drawer = exports.dialog = exports.snackbar = exports.ripple = exports.radio = exports.iconToggle = exports.gridList = exports.formField = exports.checkbox = exports.base = undefined;

var _base = __webpack_require__(0);

var base = _interopRequireWildcard(_base);

var _checkbox = __webpack_require__(16);

var checkbox = _interopRequireWildcard(_checkbox);

var _formField = __webpack_require__(32);

var formField = _interopRequireWildcard(_formField);

var _gridList = __webpack_require__(35);

var gridList = _interopRequireWildcard(_gridList);

var _iconToggle = __webpack_require__(38);

var iconToggle = _interopRequireWildcard(_iconToggle);

var _radio = __webpack_require__(44);

var radio = _interopRequireWildcard(_radio);

var _ripple = __webpack_require__(1);

var ripple = _interopRequireWildcard(_ripple);

var _dialog = __webpack_require__(19);

var dialog = _interopRequireWildcard(_dialog);

var _drawer = __webpack_require__(21);

var drawer = _interopRequireWildcard(_drawer);

var _textfield = __webpack_require__(55);

var textfield = _interopRequireWildcard(_textfield);

var _snackbar = __webpack_require__(52);

var snackbar = _interopRequireWildcard(_snackbar);

var _menu = __webpack_require__(7);

var menu = _interopRequireWildcard(_menu);

var _select = __webpack_require__(49);

var select = _interopRequireWildcard(_select);

var _autoInit = __webpack_require__(12);

var _autoInit2 = _interopRequireDefault(_autoInit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// Register all components
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

_autoInit2.default.register('MDCCheckbox', checkbox.MDCCheckbox);
_autoInit2.default.register('MDCDialog', dialog.MDCDialog);
_autoInit2.default.register('MDCPersistentDrawer', drawer.MDCPersistentDrawer);
_autoInit2.default.register('MDCTemporaryDrawer', drawer.MDCTemporaryDrawer);
_autoInit2.default.register('MDCRipple', ripple.MDCRipple);
_autoInit2.default.register('MDCGridList', gridList.MDCGridList);
_autoInit2.default.register('MDCIconToggle', iconToggle.MDCIconToggle);
_autoInit2.default.register('MDCRadio', radio.MDCRadio);
_autoInit2.default.register('MDCSnackbar', snackbar.MDCSnackbar);
_autoInit2.default.register('MDCTextfield', textfield.MDCTextfield);
_autoInit2.default.register('MDCSimpleMenu', menu.MDCSimpleMenu);
_autoInit2.default.register('MDCSelect', select.MDCSelect);

// Export all components.
exports.base = base;
exports.checkbox = checkbox;
exports.formField = formField;
exports.gridList = gridList;
exports.iconToggle = iconToggle;
exports.radio = radio;
exports.ripple = ripple;
exports.snackbar = snackbar;
exports.dialog = dialog;
exports.drawer = drawer;
exports.textfield = textfield;
exports.menu = menu;
exports.select = select;
exports.autoInit = _autoInit2.default;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(65);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(66)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../css-loader/index.js!../sass-loader/lib/loader.js??ref--1-2!./material-components-web.scss", function() {
			var newContent = require("!!../css-loader/index.js!../sass-loader/lib/loader.js??ref--1-2!./material-components-web.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _materialComponentsWeb = __webpack_require__(9);

var mdc = _interopRequireWildcard(_materialComponentsWeb);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

__webpack_require__(10);

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = mdcAutoInit;
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var registry = Object.create(null);

var CONSOLE_WARN = console.warn.bind(console);

/**
 * Auto-initializes all mdc components on a page.
 */
function mdcAutoInit() {
  var root = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;
  var warn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : CONSOLE_WARN;

  var nodes = root.querySelectorAll('[data-mdc-auto-init]');
  for (var i = 0, node; node = nodes[i]; i++) {
    var ctorName = node.dataset.mdcAutoInit;
    if (!ctorName) {
      throw new Error('(mdc-auto-init) Constructor name must be given.');
    }

    var Ctor = registry[ctorName];
    if (typeof Ctor !== 'function') {
      throw new Error('(mdc-auto-init) Could not find constructor in registry for ' + ctorName);
    }

    if (node[ctorName]) {
      warn('(mdc-auto-init) Component already initialized for ' + node + '. Skipping...');
      continue;
    }

    // TODO: Should we make an eslint rule for an attachTo() static method?
    var component = Ctor.attachTo(node);
    Object.defineProperty(node, ctorName, {
      value: component,
      writable: false,
      enumerable: false,
      configurable: true
    });
  }
}

mdcAutoInit.register = function (componentName, Ctor) {
  var warn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : CONSOLE_WARN;

  if (typeof Ctor !== 'function') {
    throw new Error('(mdc-auto-init) Invalid Ctor value ' + Ctor + '. Expected function');
  }
  if (registry[componentName]) {
    warn('(mdc-auto-init) Overriding registration for ' + componentName + ' with ' + Ctor + '. ' + ('Was: ' + registry[componentName]));
  }
  registry[componentName] = Ctor;
};

mdcAutoInit.deregister = function (componentName) {
  delete registry[componentName];
};

mdcAutoInit.deregisterAll = function () {
  Object.keys(registry).forEach(this.deregister, this);
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Copyright 2016 Google Inc.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *   http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _foundation = __webpack_require__(6);

var _foundation2 = _interopRequireDefault(_foundation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MDCComponent = function () {
  _createClass(MDCComponent, null, [{
    key: 'attachTo',
    value: function attachTo(root) {
      // Subclasses which extend MDCBase should provide an attachTo() method that takes a root element and
      // returns an instantiated component with its root set to that element. Also note that in the cases of
      // subclasses, an explicit foundation class will not have to be passed in; it will simply be initialized
      // from getDefaultFoundation().
      return new MDCComponent(root, new _foundation2.default());
    }
  }]);

  function MDCComponent(root) {
    var foundation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

    _classCallCheck(this, MDCComponent);

    this.root_ = root;

    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    this.initialize.apply(this, args);
    // Note that we initialize foundation here and not within the constructor's default param so that
    // this.root_ is defined and can be used within the foundation class.
    this.foundation_ = foundation === undefined ? this.getDefaultFoundation() : foundation;
    this.foundation_.init();
    this.initialSyncWithDOM();
  }

  _createClass(MDCComponent, [{
    key: 'initialize',
    value: function initialize() /* ...args */{
      // Subclasses can override this to do any additional setup work that would be considered part of a
      // "constructor". Essentially, it is a hook into the parent constructor before the foundation is
      // initialized. Any additional arguments besides root and foundation will be passed in here.
    }
  }, {
    key: 'getDefaultFoundation',
    value: function getDefaultFoundation() {
      // Subclasses must override this method to return a properly configured foundation class for the
      // component.
      throw new Error('Subclasses must override getDefaultFoundation to return a properly configured ' + 'foundation class');
    }
  }, {
    key: 'initialSyncWithDOM',
    value: function initialSyncWithDOM() {
      // Subclasses should override this method if they need to perform work to synchronize with a host DOM
      // object. An example of this would be a form control wrapper that needs to synchronize its internal state
      // to some property or attribute of the host DOM. Please note: this is *not* the place to perform DOM
      // reads/writes that would cause layout / paint, as this is called synchronously from within the constructor.
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      // Subclasses may implement this method to release any resources / deregister any listeners they have
      // attached. An example of this might be deregistering a resize event from the window object.
      this.foundation_.destroy();
    }

    // Wrapper method to add an event listener to the component's root element. This is most useful when
    // listening for custom events.

  }, {
    key: 'listen',
    value: function listen(evtType, handler) {
      this.root_.addEventListener(evtType, handler);
    }

    // Wrapper method to remove an event listener to the component's root element. This is most useful when
    // unlistening for custom events.

  }, {
    key: 'unlisten',
    value: function unlisten(evtType, handler) {
      this.root_.removeEventListener(evtType, handler);
    }

    // Fires a cross-browser-compatible custom event from the component root of the given type,
    // with the given data.

  }, {
    key: 'emit',
    value: function emit(evtType, evtData) {
      var evt = void 0;
      if (typeof CustomEvent === 'function') {
        evt = new CustomEvent(evtType, { detail: evtData });
      } else {
        evt = document.createEvent('CustomEvent');
        evt.initCustomEvent(evtType, false, false, evtData);
      }

      this.root_.dispatchEvent(evt);
    }
  }]);

  return MDCComponent;
}();

exports.default = MDCComponent;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var ROOT = 'mdc-checkbox';

var cssClasses = exports.cssClasses = {
  ROOT: 'mdc-checkbox',
  UPGRADED: 'mdc-checkbox--upgraded',
  CHECKED: 'mdc-checkbox--checked',
  INDETERMINATE: 'mdc-checkbox--indeterminate',
  ANIM_UNCHECKED_CHECKED: 'mdc-checkbox--anim-unchecked-checked',
  ANIM_UNCHECKED_INDETERMINATE: 'mdc-checkbox--anim-unchecked-indeterminate',
  ANIM_CHECKED_UNCHECKED: 'mdc-checkbox--anim-checked-unchecked',
  ANIM_CHECKED_INDETERMINATE: 'mdc-checkbox--anim-checked-indeterminate',
  ANIM_INDETERMINATE_CHECKED: 'mdc-checkbox--anim-indeterminate-checked',
  ANIM_INDETERMINATE_UNCHECKED: 'mdc-checkbox--anim-indeterminate-unchecked'
};

var strings = exports.strings = {
  NATIVE_CONTROL_SELECTOR: '.' + ROOT + '__native-control',
  TRANSITION_STATE_INIT: 'init',
  TRANSITION_STATE_CHECKED: 'checked',
  TRANSITION_STATE_UNCHECKED: 'unchecked',
  TRANSITION_STATE_INDETERMINATE: 'indeterminate'
};

var numbers = exports.numbers = {
  ANIM_END_LATCH_MS: 100
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _base = __webpack_require__(0);

var _constants = __webpack_require__(14);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2016 Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var CB_PROTO_PROPS = ['checked', 'indeterminate'];

var MDCCheckboxFoundation = function (_MDCFoundation) {
  _inherits(MDCCheckboxFoundation, _MDCFoundation);

  _createClass(MDCCheckboxFoundation, null, [{
    key: 'cssClasses',
    get: function get() {
      return _constants.cssClasses;
    }
  }, {
    key: 'strings',
    get: function get() {
      return _constants.strings;
    }
  }, {
    key: 'numbers',
    get: function get() {
      return _constants.numbers;
    }
  }, {
    key: 'defaultAdapter',
    get: function get() {
      return {
        addClass: function addClass() /* className: string */{},
        removeClass: function removeClass() /* className: string */{},
        registerAnimationEndHandler: function registerAnimationEndHandler() /* handler: EventListener */{},
        deregisterAnimationEndHandler: function deregisterAnimationEndHandler() /* handler: EventListener */{},
        registerChangeHandler: function registerChangeHandler() /* handler: EventListener */{},
        deregisterChangeHandler: function deregisterChangeHandler() /* handler: EventListener */{},
        getNativeControl: function getNativeControl() /* HTMLInputElement */{},
        forceLayout: function forceLayout() {},
        isAttachedToDOM: function isAttachedToDOM() /* boolean */{}
      };
    }
  }]);

  function MDCCheckboxFoundation(adapter) {
    _classCallCheck(this, MDCCheckboxFoundation);

    var _this = _possibleConstructorReturn(this, (MDCCheckboxFoundation.__proto__ || Object.getPrototypeOf(MDCCheckboxFoundation)).call(this, Object.assign(MDCCheckboxFoundation.defaultAdapter, adapter)));

    _this.currentCheckState_ = _constants.strings.TRANSITION_STATE_INIT;
    _this.currentAnimationClass_ = '';
    _this.animEndLatchTimer_ = 0;
    _this.animEndHandler_ = function () {
      clearTimeout(_this.animEndLatchTimer_);
      _this.animEndLatchTimer_ = setTimeout(function () {
        _this.adapter_.removeClass(_this.currentAnimationClass_);
        _this.adapter_.deregisterAnimationEndHandler(_this.animEndHandler_);
      }, _constants.numbers.ANIM_END_LATCH_MS);
    };
    _this.changeHandler_ = function () {
      return _this.transitionCheckState_();
    };
    return _this;
  }

  _createClass(MDCCheckboxFoundation, [{
    key: 'init',
    value: function init() {
      this.adapter_.addClass(_constants.cssClasses.UPGRADED);
      this.adapter_.registerChangeHandler(this.changeHandler_);
      this.installPropertyChangeHooks_();
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      this.adapter_.deregisterChangeHandler(this.changeHandler_);
      this.uninstallPropertyChangeHooks_();
    }
  }, {
    key: 'isChecked',
    value: function isChecked() {
      return this.getNativeControl_().checked;
    }
  }, {
    key: 'setChecked',
    value: function setChecked(checked) {
      this.getNativeControl_().checked = checked;
    }
  }, {
    key: 'isIndeterminate',
    value: function isIndeterminate() {
      return this.getNativeControl_().indeterminate;
    }
  }, {
    key: 'setIndeterminate',
    value: function setIndeterminate(indeterminate) {
      this.getNativeControl_().indeterminate = indeterminate;
    }
  }, {
    key: 'isDisabled',
    value: function isDisabled() {
      return this.getNativeControl_().disabled;
    }
  }, {
    key: 'setDisabled',
    value: function setDisabled(disabled) {
      this.getNativeControl_().disabled = disabled;
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      return this.getNativeControl_().value;
    }
  }, {
    key: 'setValue',
    value: function setValue(value) {
      this.getNativeControl_().value = value;
    }
  }, {
    key: 'installPropertyChangeHooks_',
    value: function installPropertyChangeHooks_() {
      var _this2 = this;

      var nativeCb = this.getNativeControl_();
      var cbProto = Object.getPrototypeOf(nativeCb);

      CB_PROTO_PROPS.forEach(function (controlState) {
        var desc = Object.getOwnPropertyDescriptor(cbProto, controlState);
        // We have to check for this descriptor, since some browsers (Safari) don't support its return.
        // See: https://bugs.webkit.org/show_bug.cgi?id=49739
        if (validDescriptor(desc)) {
          Object.defineProperty(nativeCb, controlState, {
            get: desc.get,
            set: function set(state) {
              desc.set.call(nativeCb, state);
              _this2.transitionCheckState_();
            },
            configurable: desc.configurable,
            enumerable: desc.enumerable
          });
        }
      });
    }
  }, {
    key: 'uninstallPropertyChangeHooks_',
    value: function uninstallPropertyChangeHooks_() {
      var nativeCb = this.getNativeControl_();
      var cbProto = Object.getPrototypeOf(nativeCb);

      CB_PROTO_PROPS.forEach(function (controlState) {
        var desc = Object.getOwnPropertyDescriptor(cbProto, controlState);
        if (validDescriptor(desc)) {
          Object.defineProperty(nativeCb, controlState, desc);
        }
      });
    }
  }, {
    key: 'transitionCheckState_',
    value: function transitionCheckState_() {
      var nativeCb = this.adapter_.getNativeControl();
      if (!nativeCb) {
        return;
      }
      var oldState = this.currentCheckState_;
      var newState = this.determineCheckState_(nativeCb);
      if (oldState === newState) {
        return;
      }

      // Check to ensure that there isn't a previously existing animation class, in case for example
      // the user interacted with the checkbox before the animation was finished.
      if (this.currentAnimationClass_.length > 0) {
        clearTimeout(this.animEndLatchTimer_);
        this.adapter_.forceLayout();
        this.adapter_.removeClass(this.currentAnimationClass_);
      }

      this.currentAnimationClass_ = this.getTransitionAnimationClass_(oldState, newState);
      this.currentCheckState_ = newState;

      // Check for parentNode so that animations are only run when the element is attached
      // to the DOM.
      if (this.adapter_.isAttachedToDOM() && this.currentAnimationClass_.length > 0) {
        this.adapter_.addClass(this.currentAnimationClass_);
        this.adapter_.registerAnimationEndHandler(this.animEndHandler_);
      }
    }
  }, {
    key: 'determineCheckState_',
    value: function determineCheckState_(nativeCb) {
      var TRANSITION_STATE_INDETERMINATE = _constants.strings.TRANSITION_STATE_INDETERMINATE,
          TRANSITION_STATE_CHECKED = _constants.strings.TRANSITION_STATE_CHECKED,
          TRANSITION_STATE_UNCHECKED = _constants.strings.TRANSITION_STATE_UNCHECKED;


      if (nativeCb.indeterminate) {
        return TRANSITION_STATE_INDETERMINATE;
      }
      return nativeCb.checked ? TRANSITION_STATE_CHECKED : TRANSITION_STATE_UNCHECKED;
    }
  }, {
    key: 'getTransitionAnimationClass_',
    value: function getTransitionAnimationClass_(oldState, newState) {
      var TRANSITION_STATE_INIT = _constants.strings.TRANSITION_STATE_INIT,
          TRANSITION_STATE_CHECKED = _constants.strings.TRANSITION_STATE_CHECKED,
          TRANSITION_STATE_UNCHECKED = _constants.strings.TRANSITION_STATE_UNCHECKED;
      var _MDCCheckboxFoundatio = MDCCheckboxFoundation.cssClasses,
          ANIM_UNCHECKED_CHECKED = _MDCCheckboxFoundatio.ANIM_UNCHECKED_CHECKED,
          ANIM_UNCHECKED_INDETERMINATE = _MDCCheckboxFoundatio.ANIM_UNCHECKED_INDETERMINATE,
          ANIM_CHECKED_UNCHECKED = _MDCCheckboxFoundatio.ANIM_CHECKED_UNCHECKED,
          ANIM_CHECKED_INDETERMINATE = _MDCCheckboxFoundatio.ANIM_CHECKED_INDETERMINATE,
          ANIM_INDETERMINATE_CHECKED = _MDCCheckboxFoundatio.ANIM_INDETERMINATE_CHECKED,
          ANIM_INDETERMINATE_UNCHECKED = _MDCCheckboxFoundatio.ANIM_INDETERMINATE_UNCHECKED;


      switch (oldState) {
        case TRANSITION_STATE_INIT:
          if (newState === TRANSITION_STATE_UNCHECKED) {
            return '';
          }
        // fallthrough
        case TRANSITION_STATE_UNCHECKED:
          return newState === TRANSITION_STATE_CHECKED ? ANIM_UNCHECKED_CHECKED : ANIM_UNCHECKED_INDETERMINATE;
        case TRANSITION_STATE_CHECKED:
          return newState === TRANSITION_STATE_UNCHECKED ? ANIM_CHECKED_UNCHECKED : ANIM_CHECKED_INDETERMINATE;
        // TRANSITION_STATE_INDETERMINATE
        default:
          return newState === TRANSITION_STATE_CHECKED ? ANIM_INDETERMINATE_CHECKED : ANIM_INDETERMINATE_UNCHECKED;
      }
    }
  }, {
    key: 'getNativeControl_',
    value: function getNativeControl_() {
      return this.adapter_.getNativeControl() || {
        checked: false,
        indeterminate: false,
        disabled: false,
        value: null
      };
    }
  }]);

  return MDCCheckboxFoundation;
}(_base.MDCFoundation);

exports.default = MDCCheckboxFoundation;


function validDescriptor(inputPropDesc) {
  return inputPropDesc && typeof inputPropDesc.set === 'function';
}

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MDCCheckbox = exports.MDCCheckboxFoundation = undefined;

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _base = __webpack_require__(0);

var _ripple = __webpack_require__(1);

var _util = __webpack_require__(4);

var _animation = __webpack_require__(5);

var _foundation = __webpack_require__(15);

var _foundation2 = _interopRequireDefault(_foundation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2016 Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

exports.MDCCheckboxFoundation = _foundation2.default;

var MDCCheckbox = exports.MDCCheckbox = function (_MDCComponent) {
  _inherits(MDCCheckbox, _MDCComponent);

  _createClass(MDCCheckbox, [{
    key: 'nativeCb_',
    get: function get() {
      var NATIVE_CONTROL_SELECTOR = _foundation2.default.strings.NATIVE_CONTROL_SELECTOR;

      return this.root_.querySelector(NATIVE_CONTROL_SELECTOR);
    }
  }], [{
    key: 'attachTo',
    value: function attachTo(root) {
      return new MDCCheckbox(root);
    }
  }]);

  function MDCCheckbox() {
    var _ref;

    _classCallCheck(this, MDCCheckbox);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = MDCCheckbox.__proto__ || Object.getPrototypeOf(MDCCheckbox)).call.apply(_ref, [this].concat(args)));

    _this.ripple_ = _this.initRipple_();
    return _this;
  }

  _createClass(MDCCheckbox, [{
    key: 'initRipple_',
    value: function initRipple_() {
      var _this2 = this;

      var MATCHES = (0, _util.getMatchesProperty)(HTMLElement.prototype);
      var adapter = Object.assign(_ripple.MDCRipple.createAdapter(this), {
        isUnbounded: function isUnbounded() {
          return true;
        },
        isSurfaceActive: function isSurfaceActive() {
          return _this2.nativeCb_[MATCHES](':active');
        },
        registerInteractionHandler: function registerInteractionHandler(type, handler) {
          return _this2.nativeCb_.addEventListener(type, handler);
        },
        deregisterInteractionHandler: function deregisterInteractionHandler(type, handler) {
          return _this2.nativeCb_.removeEventListener(type, handler);
        },
        computeBoundingRect: function computeBoundingRect() {
          var _root_$getBoundingCli = _this2.root_.getBoundingClientRect(),
              left = _root_$getBoundingCli.left,
              top = _root_$getBoundingCli.top;

          var DIM = 40;
          return {
            top: top,
            left: left,
            right: left + DIM,
            bottom: top + DIM,
            width: DIM,
            height: DIM
          };
        }
      });
      var foundation = new _ripple.MDCRippleFoundation(adapter);
      return new _ripple.MDCRipple(this.root_, foundation);
    }
  }, {
    key: 'getDefaultFoundation',
    value: function getDefaultFoundation() {
      var _this3 = this;

      return new _foundation2.default({
        addClass: function addClass(className) {
          return _this3.root_.classList.add(className);
        },
        removeClass: function removeClass(className) {
          return _this3.root_.classList.remove(className);
        },
        registerAnimationEndHandler: function registerAnimationEndHandler(handler) {
          return _this3.root_.addEventListener((0, _animation.getCorrectEventName)(window, 'animationend'), handler);
        },
        deregisterAnimationEndHandler: function deregisterAnimationEndHandler(handler) {
          return _this3.root_.removeEventListener((0, _animation.getCorrectEventName)(window, 'animationend'), handler);
        },
        registerChangeHandler: function registerChangeHandler(handler) {
          return _this3.nativeCb_.addEventListener('change', handler);
        },
        deregisterChangeHandler: function deregisterChangeHandler(handler) {
          return _this3.nativeCb_.removeEventListener('change', handler);
        },
        getNativeControl: function getNativeControl() {
          return _this3.nativeCb_;
        },
        forceLayout: function forceLayout() {
          return _this3.root_.offsetWidth;
        },
        isAttachedToDOM: function isAttachedToDOM() {
          return Boolean(_this3.root_.parentNode);
        }
      });
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      this.ripple_.destroy();
      _get(MDCCheckbox.prototype.__proto__ || Object.getPrototypeOf(MDCCheckbox.prototype), 'destroy', this).call(this);
    }
  }, {
    key: 'ripple',
    get: function get() {
      return this.ripple_;
    }
  }, {
    key: 'checked',
    get: function get() {
      return this.foundation_.isChecked();
    },
    set: function set(checked) {
      this.foundation_.setChecked(checked);
    }
  }, {
    key: 'indeterminate',
    get: function get() {
      return this.foundation_.isIndeterminate();
    },
    set: function set(indeterminate) {
      this.foundation_.setIndeterminate(indeterminate);
    }
  }, {
    key: 'disabled',
    get: function get() {
      return this.foundation_.isDisabled();
    },
    set: function set(disabled) {
      this.foundation_.setDisabled(disabled);
    }
  }, {
    key: 'value',
    get: function get() {
      return this.foundation_.getValue();
    },
    set: function set(value) {
      this.foundation_.setValue(value);
    }
  }]);

  return MDCCheckbox;
}(_base.MDCComponent);

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var cssClasses = exports.cssClasses = {
  ROOT: 'mdc-dialog',
  OPEN: 'mdc-dialog--open',
  BACKDROP: 'mdc-dialog__backdrop',
  SCROLL_LOCK: 'mdc-dialog-scroll-lock',
  ACCEPT_BTN: 'mdc-dialog__footer__button--accept',
  CANCEL_BTN: 'mdc-dialog__footer__button--cancel'
};

var strings = exports.strings = {
  OPEN_DIALOG_SELECTOR: '.mdc-dialog--open',
  DIALOG_SURFACE_SELECTOR: '.mdc-dialog__surface',
  ACCEPT_SELECTOR: '.mdc-dialog__footer__button--accept'
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _base = __webpack_require__(0);

var _constants = __webpack_require__(17);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2017 Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var MDCDialogFoundation = function (_MDCFoundation) {
  _inherits(MDCDialogFoundation, _MDCFoundation);

  _createClass(MDCDialogFoundation, null, [{
    key: 'cssClasses',
    get: function get() {
      return _constants.cssClasses;
    }
  }, {
    key: 'strings',
    get: function get() {
      return _constants.strings;
    }
  }, {
    key: 'defaultAdapter',
    get: function get() {
      return {
        addClass: function addClass() /* className: string */{},
        removeClass: function removeClass() /* className: string */{},
        setStyle: function setStyle() /* propertyName: string, value: string */{},
        addBodyClass: function addBodyClass() /* className: string */{},
        removeBodyClass: function removeBodyClass() /* className: string */{},
        eventTargetHasClass: function eventTargetHasClass() {
          return (/* target: EventTarget, className: string */ /* boolean */false
          );
        },
        registerInteractionHandler: function registerInteractionHandler() /* evt: string, handler: EventListener */{},
        deregisterInteractionHandler: function deregisterInteractionHandler() /* evt: string, handler: EventListener */{},
        registerSurfaceInteractionHandler: function registerSurfaceInteractionHandler() /* evt: string, handler: EventListener */{},
        deregisterSurfaceInteractionHandler: function deregisterSurfaceInteractionHandler() /* evt: string, handler: EventListener */{},
        registerDocumentKeydownHandler: function registerDocumentKeydownHandler() /* handler: EventListener */{},
        deregisterDocumentKeydownHandler: function deregisterDocumentKeydownHandler() /* handler: EventListener */{},
        notifyAccept: function notifyAccept() {},
        notifyCancel: function notifyCancel() {},
        trapFocusOnSurface: function trapFocusOnSurface() {},
        untrapFocusOnSurface: function untrapFocusOnSurface() {}
      };
    }
  }]);

  function MDCDialogFoundation(adapter) {
    _classCallCheck(this, MDCDialogFoundation);

    var _this = _possibleConstructorReturn(this, (MDCDialogFoundation.__proto__ || Object.getPrototypeOf(MDCDialogFoundation)).call(this, Object.assign(MDCDialogFoundation.defaultAdapter, adapter)));

    _this.isOpen_ = false;
    _this.componentClickHandler_ = function () {
      return _this.cancel(true);
    };
    _this.dialogClickHandler_ = function (evt) {
      return _this.handleDialogClick_(evt);
    };
    _this.documentKeydownHandler_ = function (evt) {
      if (evt.key && evt.key === 'Escape' || evt.keyCode === 27) {
        _this.cancel(true);
      }
    };
    return _this;
  }

  _createClass(MDCDialogFoundation, [{
    key: 'destroy',
    value: function destroy() {
      this.close();
    }
  }, {
    key: 'open',
    value: function open() {
      this.isOpen_ = true;
      this.disableScroll_();
      this.adapter_.setStyle('visibility', 'visible');
      this.adapter_.addClass(MDCDialogFoundation.cssClasses.OPEN);
      this.adapter_.trapFocusOnSurface();

      this.adapter_.registerDocumentKeydownHandler(this.documentKeydownHandler_);
      this.adapter_.registerSurfaceInteractionHandler('click', this.dialogClickHandler_);
      this.adapter_.registerInteractionHandler('click', this.componentClickHandler_);
    }
  }, {
    key: 'close',
    value: function close() {
      this.isOpen_ = false;
      this.adapter_.untrapFocusOnSurface();
      this.adapter_.removeClass(MDCDialogFoundation.cssClasses.OPEN);
      this.adapter_.setStyle('visibility', 'hidden');
      this.enableScroll_();

      this.adapter_.deregisterSurfaceInteractionHandler('click', this.dialogClickHandler_);
      this.adapter_.deregisterDocumentKeydownHandler(this.documentKeydownHandler_);
      this.adapter_.deregisterInteractionHandler('click', this.componentClickHandler_);
    }
  }, {
    key: 'isOpen',
    value: function isOpen() {
      return this.isOpen_;
    }
  }, {
    key: 'accept',
    value: function accept(shouldNotify) {
      if (shouldNotify) {
        this.adapter_.notifyAccept();
      }

      this.close();
    }
  }, {
    key: 'cancel',
    value: function cancel(shouldNotify) {
      if (shouldNotify) {
        this.adapter_.notifyCancel();
      }

      this.close();
    }
  }, {
    key: 'handleDialogClick_',
    value: function handleDialogClick_(evt) {
      evt.stopPropagation();
      var target = evt.target;

      if (this.adapter_.eventTargetHasClass(target, _constants.cssClasses.ACCEPT_BTN)) {
        this.accept(true);
      } else if (this.adapter_.eventTargetHasClass(target, _constants.cssClasses.CANCEL_BTN)) {
        this.cancel(true);
      }
    }
  }, {
    key: 'disableScroll_',
    value: function disableScroll_() {
      this.adapter_.addBodyClass(_constants.cssClasses.SCROLL_LOCK);
    }
  }, {
    key: 'enableScroll_',
    value: function enableScroll_() {
      this.adapter_.removeBodyClass(_constants.cssClasses.SCROLL_LOCK);
    }
  }]);

  return MDCDialogFoundation;
}(_base.MDCFoundation);

exports.default = MDCDialogFoundation;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MDCDialog = exports.util = exports.MDCDialogFoundation = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _base = __webpack_require__(0);

var _ripple = __webpack_require__(1);

var _foundation = __webpack_require__(18);

var _foundation2 = _interopRequireDefault(_foundation);

var _util = __webpack_require__(20);

var util = _interopRequireWildcard(_util);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2017 Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

exports.MDCDialogFoundation = _foundation2.default;
exports.util = util;

var MDCDialog = exports.MDCDialog = function (_MDCComponent) {
  _inherits(MDCDialog, _MDCComponent);

  function MDCDialog() {
    _classCallCheck(this, MDCDialog);

    return _possibleConstructorReturn(this, (MDCDialog.__proto__ || Object.getPrototypeOf(MDCDialog)).apply(this, arguments));
  }

  _createClass(MDCDialog, [{
    key: 'initialize',
    value: function initialize() {
      this.focusTrap_ = util.createFocusTrapInstance(this.dialogSurface_, this.acceptButton_);
      this.footerBtnRipples_ = [];

      var footerBtns = this.root_.querySelectorAll('.mdc-dialog__footer__button');
      for (var i = 0, footerBtn; footerBtn = footerBtns[i]; i++) {
        this.footerBtnRipples_.push(new _ripple.MDCRipple(footerBtn));
      }
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      this.footerBtnRipples_.forEach(function (ripple) {
        return ripple.destroy();
      });
      _get(MDCDialog.prototype.__proto__ || Object.getPrototypeOf(MDCDialog.prototype), 'destroy', this).call(this);
    }
  }, {
    key: 'show',
    value: function show() {
      this.foundation_.open();
    }
  }, {
    key: 'close',
    value: function close() {
      this.foundation_.close();
    }
  }, {
    key: 'getDefaultFoundation',
    value: function getDefaultFoundation() {
      var _this2 = this;

      return new _foundation2.default({
        addClass: function addClass(className) {
          return _this2.root_.classList.add(className);
        },
        removeClass: function removeClass(className) {
          return _this2.root_.classList.remove(className);
        },
        setStyle: function setStyle(prop, val) {
          return _this2.root_.style.setProperty(prop, val);
        },
        addBodyClass: function addBodyClass(className) {
          return document.body.classList.add(className);
        },
        removeBodyClass: function removeBodyClass(className) {
          return document.body.classList.remove(className);
        },
        eventTargetHasClass: function eventTargetHasClass(target, className) {
          return target.classList.contains(className);
        },
        registerInteractionHandler: function registerInteractionHandler(evt, handler) {
          return _this2.root_.addEventListener(evt, handler);
        },
        deregisterInteractionHandler: function deregisterInteractionHandler(evt, handler) {
          return _this2.root_.removeEventListener(evt, handler);
        },
        registerSurfaceInteractionHandler: function registerSurfaceInteractionHandler(evt, handler) {
          return _this2.dialogSurface_.addEventListener(evt, handler);
        },
        deregisterSurfaceInteractionHandler: function deregisterSurfaceInteractionHandler(evt, handler) {
          return _this2.dialogSurface_.removeEventListener(evt, handler);
        },
        registerDocumentKeydownHandler: function registerDocumentKeydownHandler(handler) {
          return document.addEventListener('keydown', handler);
        },
        deregisterDocumentKeydownHandler: function deregisterDocumentKeydownHandler(handler) {
          return document.removeEventListener('keydown', handler);
        },
        notifyAccept: function notifyAccept() {
          return _this2.emit('MDCDialog:accept');
        },
        notifyCancel: function notifyCancel() {
          return _this2.emit('MDCDialog:cancel');
        },
        trapFocusOnSurface: function trapFocusOnSurface() {
          return _this2.focusTrap_.activate();
        },
        untrapFocusOnSurface: function untrapFocusOnSurface() {
          return _this2.focusTrap_.deactivate();
        }
      });
    }
  }, {
    key: 'open',
    get: function get() {
      return this.foundation_.isOpen();
    }
  }, {
    key: 'acceptButton_',
    get: function get() {
      return this.root_.querySelector(_foundation2.default.strings.ACCEPT_SELECTOR);
    }
  }, {
    key: 'dialogSurface_',
    get: function get() {
      return this.root_.querySelector(_foundation2.default.strings.DIALOG_SURFACE_SELECTOR);
    }
  }], [{
    key: 'attachTo',
    value: function attachTo(root) {
      return new MDCDialog(root);
    }
  }]);

  return MDCDialog;
}(_base.MDCComponent);

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createFocusTrapInstance = createFocusTrapInstance;

var _focusTrap = __webpack_require__(59);

var _focusTrap2 = _interopRequireDefault(_focusTrap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createFocusTrapInstance(surfaceEl, acceptButtonEl) {
  var focusTrapFactory = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _focusTrap2.default;

  return focusTrapFactory(surfaceEl, {
    initialFocus: acceptButtonEl,
    clickOutsideDeactivates: true
  });
} /**
   * Copyright 2016 Google Inc. All Rights Reserved.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.util = exports.MDCPersistentDrawerFoundation = exports.MDCPersistentDrawer = exports.MDCTemporaryDrawerFoundation = exports.MDCTemporaryDrawer = undefined;

var _temporary = __webpack_require__(29);

Object.defineProperty(exports, 'MDCTemporaryDrawer', {
  enumerable: true,
  get: function get() {
    return _temporary.MDCTemporaryDrawer;
  }
});
Object.defineProperty(exports, 'MDCTemporaryDrawerFoundation', {
  enumerable: true,
  get: function get() {
    return _temporary.MDCTemporaryDrawerFoundation;
  }
});

var _persistent = __webpack_require__(24);

Object.defineProperty(exports, 'MDCPersistentDrawer', {
  enumerable: true,
  get: function get() {
    return _persistent.MDCPersistentDrawer;
  }
});
Object.defineProperty(exports, 'MDCPersistentDrawerFoundation', {
  enumerable: true,
  get: function get() {
    return _persistent.MDCPersistentDrawerFoundation;
  }
});

var _util = __webpack_require__(3);

var util = _interopRequireWildcard(_util);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.util = util;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.strings = exports.cssClasses = undefined;

var _slidable = __webpack_require__(2);

var cssClasses = exports.cssClasses = {
  ROOT: 'mdc-persistent-drawer',
  OPEN: 'mdc-persistent-drawer--open',
  ANIMATING: 'mdc-persistent-drawer--animating'
}; /**
    * Copyright 2016 Google Inc. All Rights Reserved.
    *
    * Licensed under the Apache License, Version 2.0 (the "License");
    * you may not use this file except in compliance with the License.
    * You may obtain a copy of the License at
    *
    *      http://www.apache.org/licenses/LICENSE-2.0
    *
    * Unless required by applicable law or agreed to in writing, software
    * distributed under the License is distributed on an "AS IS" BASIS,
    * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    * See the License for the specific language governing permissions and
    * limitations under the License.
    */

var strings = exports.strings = {
  DRAWER_SELECTOR: '.mdc-persistent-drawer__drawer',
  FOCUSABLE_ELEMENTS: _slidable.FOCUSABLE_ELEMENTS
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _slidable = __webpack_require__(2);

var _constants = __webpack_require__(22);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2016 Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var MDCPersistentDrawerFoundation = function (_MDCSlidableDrawerFou) {
  _inherits(MDCPersistentDrawerFoundation, _MDCSlidableDrawerFou);

  _createClass(MDCPersistentDrawerFoundation, null, [{
    key: 'cssClasses',
    get: function get() {
      return _constants.cssClasses;
    }
  }, {
    key: 'strings',
    get: function get() {
      return _constants.strings;
    }
  }, {
    key: 'defaultAdapter',
    get: function get() {
      return Object.assign(_slidable.MDCSlidableDrawerFoundation.defaultAdapter, {
        isDrawer: function isDrawer() {
          return false;
        }
      });
    }
  }]);

  function MDCPersistentDrawerFoundation(adapter) {
    _classCallCheck(this, MDCPersistentDrawerFoundation);

    return _possibleConstructorReturn(this, (MDCPersistentDrawerFoundation.__proto__ || Object.getPrototypeOf(MDCPersistentDrawerFoundation)).call(this, Object.assign(MDCPersistentDrawerFoundation.defaultAdapter, adapter), MDCPersistentDrawerFoundation.cssClasses.ROOT, MDCPersistentDrawerFoundation.cssClasses.ANIMATING, MDCPersistentDrawerFoundation.cssClasses.OPEN));
  }

  _createClass(MDCPersistentDrawerFoundation, [{
    key: 'isRootTransitioningEventTarget_',
    value: function isRootTransitioningEventTarget_(el) {
      return this.adapter_.isDrawer(el);
    }
  }]);

  return MDCPersistentDrawerFoundation;
}(_slidable.MDCSlidableDrawerFoundation);

exports.default = MDCPersistentDrawerFoundation;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MDCPersistentDrawer = exports.util = exports.MDCPersistentDrawerFoundation = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _base = __webpack_require__(0);

var _foundation = __webpack_require__(23);

var _foundation2 = _interopRequireDefault(_foundation);

var _util = __webpack_require__(3);

var util = _interopRequireWildcard(_util);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2016 Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

exports.MDCPersistentDrawerFoundation = _foundation2.default;
exports.util = util;

var MDCPersistentDrawer = exports.MDCPersistentDrawer = function (_MDCComponent) {
  _inherits(MDCPersistentDrawer, _MDCComponent);

  function MDCPersistentDrawer() {
    _classCallCheck(this, MDCPersistentDrawer);

    return _possibleConstructorReturn(this, (MDCPersistentDrawer.__proto__ || Object.getPrototypeOf(MDCPersistentDrawer)).apply(this, arguments));
  }

  _createClass(MDCPersistentDrawer, [{
    key: 'getDefaultFoundation',
    value: function getDefaultFoundation() {
      var _this2 = this;

      var FOCUSABLE_ELEMENTS = _foundation2.default.strings.FOCUSABLE_ELEMENTS;


      return new _foundation2.default({
        addClass: function addClass(className) {
          return _this2.root_.classList.add(className);
        },
        removeClass: function removeClass(className) {
          return _this2.root_.classList.remove(className);
        },
        hasClass: function hasClass(className) {
          return _this2.root_.classList.contains(className);
        },
        hasNecessaryDom: function hasNecessaryDom() {
          return Boolean(_this2.drawer);
        },
        registerInteractionHandler: function registerInteractionHandler(evt, handler) {
          return _this2.root_.addEventListener(util.remapEvent(evt), handler, util.applyPassive());
        },
        deregisterInteractionHandler: function deregisterInteractionHandler(evt, handler) {
          return _this2.root_.removeEventListener(util.remapEvent(evt), handler, util.applyPassive());
        },
        registerDrawerInteractionHandler: function registerDrawerInteractionHandler(evt, handler) {
          return _this2.drawer.addEventListener(util.remapEvent(evt), handler);
        },
        deregisterDrawerInteractionHandler: function deregisterDrawerInteractionHandler(evt, handler) {
          return _this2.drawer.removeEventListener(util.remapEvent(evt), handler);
        },
        registerTransitionEndHandler: function registerTransitionEndHandler(handler) {
          return _this2.root_.addEventListener('transitionend', handler);
        },
        deregisterTransitionEndHandler: function deregisterTransitionEndHandler(handler) {
          return _this2.root_.removeEventListener('transitionend', handler);
        },
        registerDocumentKeydownHandler: function registerDocumentKeydownHandler(handler) {
          return document.addEventListener('keydown', handler);
        },
        deregisterDocumentKeydownHandler: function deregisterDocumentKeydownHandler(handler) {
          return document.removeEventListener('keydown', handler);
        },
        getDrawerWidth: function getDrawerWidth() {
          return _this2.drawer.offsetWidth;
        },
        setTranslateX: function setTranslateX(value) {
          return _this2.drawer.style.setProperty(util.getTransformPropertyName(), value === null ? null : 'translateX(' + value + 'px)');
        },
        getFocusableElements: function getFocusableElements() {
          return _this2.drawer.querySelectorAll(FOCUSABLE_ELEMENTS);
        },
        saveElementTabState: function saveElementTabState(el) {
          return util.saveElementTabState(el);
        },
        restoreElementTabState: function restoreElementTabState(el) {
          return util.restoreElementTabState(el);
        },
        makeElementUntabbable: function makeElementUntabbable(el) {
          return el.setAttribute('tabindex', -1);
        },
        isRtl: function isRtl() {
          return getComputedStyle(_this2.root_).getPropertyValue('direction') === 'rtl';
        },
        isDrawer: function isDrawer(el) {
          return el === _this2.drawer;
        }
      });
    }
  }, {
    key: 'open',
    get: function get() {
      return this.foundation_.isOpen();
    },
    set: function set(value) {
      if (value) {
        this.foundation_.open();
      } else {
        this.foundation_.close();
      }
    }

    /* Return the drawer element inside the component. */

  }, {
    key: 'drawer',
    get: function get() {
      return this.root_.querySelector(_foundation2.default.strings.DRAWER_SELECTOR);
    }
  }], [{
    key: 'attachTo',
    value: function attachTo(root) {
      return new MDCPersistentDrawer(root);
    }
  }]);

  return MDCPersistentDrawer;
}(_base.MDCComponent);

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var FOCUSABLE_ELEMENTS = exports.FOCUSABLE_ELEMENTS = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), ' + 'button:not([disabled]), iframe, object, embed, [tabindex], [contenteditable]';

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MDCSlidableDrawerFoundation = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _base = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2016 Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var MDCSlidableDrawerFoundation = exports.MDCSlidableDrawerFoundation = function (_MDCFoundation) {
  _inherits(MDCSlidableDrawerFoundation, _MDCFoundation);

  _createClass(MDCSlidableDrawerFoundation, null, [{
    key: 'defaultAdapter',
    get: function get() {
      return {
        addClass: function addClass() /* className: string */{},
        removeClass: function removeClass() /* className: string */{},
        hasClass: function hasClass() /* className: string */{},
        hasNecessaryDom: function hasNecessaryDom() {
          return (/* boolean */false
          );
        },
        registerInteractionHandler: function registerInteractionHandler() /* evt: string, handler: EventListener */{},
        deregisterInteractionHandler: function deregisterInteractionHandler() /* evt: string, handler: EventListener */{},
        registerDrawerInteractionHandler: function registerDrawerInteractionHandler() /* evt: string, handler: EventListener */{},
        deregisterDrawerInteractionHandler: function deregisterDrawerInteractionHandler() /* evt: string, handler: EventListener */{},
        registerTransitionEndHandler: function registerTransitionEndHandler() /* handler: EventListener */{},
        deregisterTransitionEndHandler: function deregisterTransitionEndHandler() /* handler: EventListener */{},
        registerDocumentKeydownHandler: function registerDocumentKeydownHandler() /* handler: EventListener */{},
        deregisterDocumentKeydownHandler: function deregisterDocumentKeydownHandler() /* handler: EventListener */{},
        setTranslateX: function setTranslateX() /* value: number | null */{},
        getFocusableElements: function getFocusableElements() /* NodeList */{},
        saveElementTabState: function saveElementTabState() /* el: Element */{},
        restoreElementTabState: function restoreElementTabState() /* el: Element */{},
        makeElementUntabbable: function makeElementUntabbable() /* el: Element */{},
        isRtl: function isRtl() {
          return (/* boolean */false
          );
        },
        getDrawerWidth: function getDrawerWidth() {
          return (/* number */0
          );
        }
      };
    }
  }]);

  function MDCSlidableDrawerFoundation(adapter, rootCssClass, animatingCssClass, openCssClass) {
    _classCallCheck(this, MDCSlidableDrawerFoundation);

    var _this = _possibleConstructorReturn(this, (MDCSlidableDrawerFoundation.__proto__ || Object.getPrototypeOf(MDCSlidableDrawerFoundation)).call(this, Object.assign(MDCSlidableDrawerFoundation.defaultAdapter, adapter)));

    _this.rootCssClass_ = rootCssClass;
    _this.animatingCssClass_ = animatingCssClass;
    _this.openCssClass_ = openCssClass;

    _this.transitionEndHandler_ = function (ev) {
      if (_this.isRootTransitioningEventTarget_(ev.target)) {
        _this.adapter_.removeClass(_this.animatingCssClass_);
        _this.adapter_.deregisterTransitionEndHandler(_this.transitionEndHandler_);
      }
    };

    _this.inert_ = false;

    _this.drawerClickHandler_ = function (evt) {
      return evt.stopPropagation();
    };
    _this.componentTouchStartHandler_ = function (evt) {
      return _this.handleTouchStart_(evt);
    };
    _this.componentTouchMoveHandler_ = function (evt) {
      return _this.handleTouchMove_(evt);
    };
    _this.componentTouchEndHandler_ = function (evt) {
      return _this.handleTouchEnd_(evt);
    };
    _this.documentKeydownHandler_ = function (evt) {
      if (evt.key && evt.key === 'Escape' || evt.keyCode === 27) {
        _this.close();
      }
    };
    return _this;
  }

  _createClass(MDCSlidableDrawerFoundation, [{
    key: 'init',
    value: function init() {
      var ROOT = this.rootCssClass_;
      var OPEN = this.openCssClass_;

      if (!this.adapter_.hasClass(ROOT)) {
        throw new Error(ROOT + ' class required in root element.');
      }

      if (!this.adapter_.hasNecessaryDom()) {
        throw new Error('Required DOM nodes missing in ' + ROOT + ' component.');
      }

      if (this.adapter_.hasClass(OPEN)) {
        this.isOpen_ = true;
      } else {
        this.detabinate_();
        this.isOpen_ = false;
      }

      this.adapter_.registerDrawerInteractionHandler('click', this.drawerClickHandler_);
      this.adapter_.registerDrawerInteractionHandler('touchstart', this.componentTouchStartHandler_);
      this.adapter_.registerInteractionHandler('touchmove', this.componentTouchMoveHandler_);
      this.adapter_.registerInteractionHandler('touchend', this.componentTouchEndHandler_);
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      this.adapter_.deregisterDrawerInteractionHandler('click', this.drawerClickHandler_);
      this.adapter_.deregisterDrawerInteractionHandler('touchstart', this.componentTouchStartHandler_);
      this.adapter_.deregisterInteractionHandler('touchmove', this.componentTouchMoveHandler_);
      this.adapter_.deregisterInteractionHandler('touchend', this.componentTouchEndHandler_);
      // Deregister the document keydown handler just in case the component is destroyed while the menu is open.
      this.adapter_.deregisterDocumentKeydownHandler(this.documentKeydownHandler_);
    }
  }, {
    key: 'open',
    value: function open() {
      this.adapter_.registerTransitionEndHandler(this.transitionEndHandler_);
      this.adapter_.registerDocumentKeydownHandler(this.documentKeydownHandler_);
      this.adapter_.addClass(this.animatingCssClass_);
      this.adapter_.addClass(this.openCssClass_);
      this.retabinate_();
      this.isOpen_ = true;
    }
  }, {
    key: 'close',
    value: function close() {
      this.adapter_.deregisterDocumentKeydownHandler(this.documentKeydownHandler_);
      this.adapter_.registerTransitionEndHandler(this.transitionEndHandler_);
      this.adapter_.addClass(this.animatingCssClass_);
      this.adapter_.removeClass(this.openCssClass_);
      this.detabinate_();
      this.isOpen_ = false;
    }
  }, {
    key: 'isOpen',
    value: function isOpen() {
      return this.isOpen_;
    }

    /**
     *  Render all children of the drawer inert when it's closed.
     */

  }, {
    key: 'detabinate_',
    value: function detabinate_() {
      if (this.inert_) {
        return;
      }

      var elements = this.adapter_.getFocusableElements();
      if (elements) {
        for (var i = 0; i < elements.length; i++) {
          this.adapter_.saveElementTabState(elements[i]);
          this.adapter_.makeElementUntabbable(elements[i]);
        }
      }

      this.inert_ = true;
    }

    /**
     *  Make all children of the drawer tabbable again when it's open.
     */

  }, {
    key: 'retabinate_',
    value: function retabinate_() {
      if (!this.inert_) {
        return;
      }

      var elements = this.adapter_.getFocusableElements();
      if (elements) {
        for (var i = 0; i < elements.length; i++) {
          this.adapter_.restoreElementTabState(elements[i]);
        }
      }

      this.inert_ = false;
    }
  }, {
    key: 'handleTouchStart_',
    value: function handleTouchStart_(evt) {
      if (!this.adapter_.hasClass(this.openCssClass_)) {
        return;
      }
      if (evt.pointerType && evt.pointerType !== 'touch') {
        return;
      }

      this.direction_ = this.adapter_.isRtl() ? -1 : 1;
      this.drawerWidth_ = this.adapter_.getDrawerWidth();
      this.startX_ = evt.touches ? evt.touches[0].pageX : evt.pageX;
      this.currentX_ = this.startX_;
      this.touchingSideNav_ = true;

      requestAnimationFrame(this.updateDrawer_.bind(this));
    }
  }, {
    key: 'handleTouchMove_',
    value: function handleTouchMove_(evt) {
      if (evt.pointerType && evt.pointerType !== 'touch') {
        return;
      }

      this.currentX_ = evt.touches ? evt.touches[0].pageX : evt.pageX;
    }
  }, {
    key: 'handleTouchEnd_',
    value: function handleTouchEnd_(evt) {
      if (evt.pointerType && evt.pointerType !== 'touch') {
        return;
      }

      this.prepareForTouchEnd_();

      // Did the user close the drawer by more than 50%?
      if (Math.abs(this.newPosition_ / this.drawerWidth_) >= 0.5) {
        this.close();
      } else {
        // Triggering an open here means we'll get a nice animation back to the fully open state.
        this.open();
      }
    }
  }, {
    key: 'prepareForTouchEnd_',
    value: function prepareForTouchEnd_() {
      this.touchingSideNav_ = false;
      this.adapter_.setTranslateX(null);
    }
  }, {
    key: 'updateDrawer_',
    value: function updateDrawer_() {
      if (!this.touchingSideNav_) {
        return;
      }

      requestAnimationFrame(this.updateDrawer_.bind(this));
      this.adapter_.setTranslateX(this.newPosition_);
    }
  }, {
    key: 'isRootTransitioningEventTarget_',
    value: function isRootTransitioningEventTarget_(el) {
      // Classes extending MDCSlidableDrawerFoundation should implement this method to return true or false
      // if the event target is the root event target currently transitioning.
      return false;
    }
  }, {
    key: 'newPosition_',
    get: function get() {
      var newPos = null;

      if (this.direction_ === 1) {
        newPos = Math.min(0, this.currentX_ - this.startX_);
      } else {
        newPos = Math.max(0, this.currentX_ - this.startX_);
      }

      return newPos;
    }
  }]);

  return MDCSlidableDrawerFoundation;
}(_base.MDCFoundation);

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.strings = exports.cssClasses = undefined;

var _slidable = __webpack_require__(2);

var cssClasses = exports.cssClasses = {
  ROOT: 'mdc-temporary-drawer',
  OPEN: 'mdc-temporary-drawer--open',
  ANIMATING: 'mdc-temporary-drawer--animating'
}; /**
    * Copyright 2016 Google Inc. All Rights Reserved.
    *
    * Licensed under the Apache License, Version 2.0 (the "License");
    * you may not use this file except in compliance with the License.
    * You may obtain a copy of the License at
    *
    *      http://www.apache.org/licenses/LICENSE-2.0
    *
    * Unless required by applicable law or agreed to in writing, software
    * distributed under the License is distributed on an "AS IS" BASIS,
    * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    * See the License for the specific language governing permissions and
    * limitations under the License.
    */

var strings = exports.strings = {
  DRAWER_SELECTOR: '.mdc-temporary-drawer__drawer',
  OPACITY_VAR_NAME: '--mdc-temporary-drawer-opacity',
  FOCUSABLE_ELEMENTS: _slidable.FOCUSABLE_ELEMENTS
};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _slidable = __webpack_require__(2);

var _constants = __webpack_require__(27);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2016 Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var MDCTemporaryDrawerFoundation = function (_MDCSlidableDrawerFou) {
  _inherits(MDCTemporaryDrawerFoundation, _MDCSlidableDrawerFou);

  _createClass(MDCTemporaryDrawerFoundation, null, [{
    key: 'cssClasses',
    get: function get() {
      return _constants.cssClasses;
    }
  }, {
    key: 'strings',
    get: function get() {
      return _constants.strings;
    }
  }, {
    key: 'defaultAdapter',
    get: function get() {
      return Object.assign(_slidable.MDCSlidableDrawerFoundation.defaultAdapter, {
        isDrawer: function isDrawer() {
          return false;
        },
        updateCssVariable: function updateCssVariable() /* value: string */{}
      });
    }
  }]);

  function MDCTemporaryDrawerFoundation(adapter) {
    _classCallCheck(this, MDCTemporaryDrawerFoundation);

    var _this = _possibleConstructorReturn(this, (MDCTemporaryDrawerFoundation.__proto__ || Object.getPrototypeOf(MDCTemporaryDrawerFoundation)).call(this, Object.assign(MDCTemporaryDrawerFoundation.defaultAdapter, adapter), MDCTemporaryDrawerFoundation.cssClasses.ROOT, MDCTemporaryDrawerFoundation.cssClasses.ANIMATING, MDCTemporaryDrawerFoundation.cssClasses.OPEN));

    _this.componentClickHandler_ = function () {
      return _this.close();
    };
    return _this;
  }

  _createClass(MDCTemporaryDrawerFoundation, [{
    key: 'init',
    value: function init() {
      _get(MDCTemporaryDrawerFoundation.prototype.__proto__ || Object.getPrototypeOf(MDCTemporaryDrawerFoundation.prototype), 'init', this).call(this);

      // Make browser aware of custom property being used in this element.
      // Workaround for certain types of hard-to-reproduce heisenbugs.
      this.adapter_.updateCssVariable(0);
      this.adapter_.registerInteractionHandler('click', this.componentClickHandler_);
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      _get(MDCTemporaryDrawerFoundation.prototype.__proto__ || Object.getPrototypeOf(MDCTemporaryDrawerFoundation.prototype), 'destroy', this).call(this);

      this.adapter_.deregisterInteractionHandler('click', this.componentClickHandler_);
    }
  }, {
    key: 'open',
    value: function open() {
      // Make sure custom property values are cleared before starting.
      this.adapter_.updateCssVariable('');

      _get(MDCTemporaryDrawerFoundation.prototype.__proto__ || Object.getPrototypeOf(MDCTemporaryDrawerFoundation.prototype), 'open', this).call(this);
    }
  }, {
    key: 'close',
    value: function close() {
      // Make sure custom property values are cleared before making any changes.
      this.adapter_.updateCssVariable('');

      _get(MDCTemporaryDrawerFoundation.prototype.__proto__ || Object.getPrototypeOf(MDCTemporaryDrawerFoundation.prototype), 'close', this).call(this);
    }
  }, {
    key: 'prepareForTouchEnd_',
    value: function prepareForTouchEnd_() {
      _get(MDCTemporaryDrawerFoundation.prototype.__proto__ || Object.getPrototypeOf(MDCTemporaryDrawerFoundation.prototype), 'prepareForTouchEnd_', this).call(this);

      this.adapter_.updateCssVariable('');
    }
  }, {
    key: 'updateDrawer_',
    value: function updateDrawer_() {
      _get(MDCTemporaryDrawerFoundation.prototype.__proto__ || Object.getPrototypeOf(MDCTemporaryDrawerFoundation.prototype), 'updateDrawer_', this).call(this);

      var newOpacity = Math.max(0, 1 + this.direction_ * (this.newPosition_ / this.drawerWidth_));
      this.adapter_.updateCssVariable(newOpacity);
    }
  }, {
    key: 'isRootTransitioningEventTarget_',
    value: function isRootTransitioningEventTarget_(el) {
      return this.adapter_.isDrawer(el);
    }
  }]);

  return MDCTemporaryDrawerFoundation;
}(_slidable.MDCSlidableDrawerFoundation);

exports.default = MDCTemporaryDrawerFoundation;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MDCTemporaryDrawer = exports.util = exports.MDCTemporaryDrawerFoundation = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _base = __webpack_require__(0);

var _foundation = __webpack_require__(28);

var _foundation2 = _interopRequireDefault(_foundation);

var _util = __webpack_require__(3);

var util = _interopRequireWildcard(_util);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2016 Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

exports.MDCTemporaryDrawerFoundation = _foundation2.default;
exports.util = util;

var MDCTemporaryDrawer = exports.MDCTemporaryDrawer = function (_MDCComponent) {
  _inherits(MDCTemporaryDrawer, _MDCComponent);

  function MDCTemporaryDrawer() {
    _classCallCheck(this, MDCTemporaryDrawer);

    return _possibleConstructorReturn(this, (MDCTemporaryDrawer.__proto__ || Object.getPrototypeOf(MDCTemporaryDrawer)).apply(this, arguments));
  }

  _createClass(MDCTemporaryDrawer, [{
    key: 'getDefaultFoundation',
    value: function getDefaultFoundation() {
      var _this2 = this;

      var _MDCTemporaryDrawerFo = _foundation2.default.strings,
          FOCUSABLE_ELEMENTS = _MDCTemporaryDrawerFo.FOCUSABLE_ELEMENTS,
          OPACITY_VAR_NAME = _MDCTemporaryDrawerFo.OPACITY_VAR_NAME;


      return new _foundation2.default({
        addClass: function addClass(className) {
          return _this2.root_.classList.add(className);
        },
        removeClass: function removeClass(className) {
          return _this2.root_.classList.remove(className);
        },
        hasClass: function hasClass(className) {
          return _this2.root_.classList.contains(className);
        },
        hasNecessaryDom: function hasNecessaryDom() {
          return Boolean(_this2.drawer);
        },
        registerInteractionHandler: function registerInteractionHandler(evt, handler) {
          return _this2.root_.addEventListener(util.remapEvent(evt), handler, util.applyPassive());
        },
        deregisterInteractionHandler: function deregisterInteractionHandler(evt, handler) {
          return _this2.root_.removeEventListener(util.remapEvent(evt), handler, util.applyPassive());
        },
        registerDrawerInteractionHandler: function registerDrawerInteractionHandler(evt, handler) {
          return _this2.drawer.addEventListener(util.remapEvent(evt), handler);
        },
        deregisterDrawerInteractionHandler: function deregisterDrawerInteractionHandler(evt, handler) {
          return _this2.drawer.removeEventListener(util.remapEvent(evt), handler);
        },
        registerTransitionEndHandler: function registerTransitionEndHandler(handler) {
          return _this2.drawer.addEventListener('transitionend', handler);
        },
        deregisterTransitionEndHandler: function deregisterTransitionEndHandler(handler) {
          return _this2.drawer.removeEventListener('transitionend', handler);
        },
        registerDocumentKeydownHandler: function registerDocumentKeydownHandler(handler) {
          return document.addEventListener('keydown', handler);
        },
        deregisterDocumentKeydownHandler: function deregisterDocumentKeydownHandler(handler) {
          return document.removeEventListener('keydown', handler);
        },
        getDrawerWidth: function getDrawerWidth() {
          return _this2.drawer.offsetWidth;
        },
        setTranslateX: function setTranslateX(value) {
          return _this2.drawer.style.setProperty(util.getTransformPropertyName(), value === null ? null : 'translateX(' + value + 'px)');
        },
        updateCssVariable: function updateCssVariable(value) {
          if (util.supportsCssCustomProperties()) {
            _this2.root_.style.setProperty(OPACITY_VAR_NAME, value);
          }
        },
        getFocusableElements: function getFocusableElements() {
          return _this2.drawer.querySelectorAll(FOCUSABLE_ELEMENTS);
        },
        saveElementTabState: function saveElementTabState(el) {
          return util.saveElementTabState(el);
        },
        restoreElementTabState: function restoreElementTabState(el) {
          return util.restoreElementTabState(el);
        },
        makeElementUntabbable: function makeElementUntabbable(el) {
          return el.setAttribute('tabindex', -1);
        },
        isRtl: function isRtl() {
          return getComputedStyle(_this2.root_).getPropertyValue('direction') === 'rtl';
        },
        isDrawer: function isDrawer(el) {
          return el === _this2.drawer;
        }
      });
    }
  }, {
    key: 'open',
    get: function get() {
      return this.foundation_.isOpen();
    },
    set: function set(value) {
      if (value) {
        this.foundation_.open();
      } else {
        this.foundation_.close();
      }
    }

    /* Return the drawer element inside the component. */

  }, {
    key: 'drawer',
    get: function get() {
      return this.root_.querySelector(_foundation2.default.strings.DRAWER_SELECTOR);
    }
  }], [{
    key: 'attachTo',
    value: function attachTo(root) {
      return new MDCTemporaryDrawer(root);
    }
  }]);

  return MDCTemporaryDrawer;
}(_base.MDCComponent);

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var cssClasses = exports.cssClasses = {
  ROOT: 'mdc-form-field'
};

var strings = exports.strings = {
  LABEL_SELECTOR: '.mdc-form-field > label'
};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _base = __webpack_require__(0);

var _constants = __webpack_require__(30);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2017 Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var MDCFormFieldFoundation = function (_MDCFoundation) {
  _inherits(MDCFormFieldFoundation, _MDCFoundation);

  _createClass(MDCFormFieldFoundation, null, [{
    key: 'cssClasses',
    get: function get() {
      return _constants.cssClasses;
    }
  }, {
    key: 'strings',
    get: function get() {
      return _constants.strings;
    }
  }, {
    key: 'defaultAdapter',
    get: function get() {
      return {
        registerInteractionHandler: function registerInteractionHandler() /* type: string, handler: EventListener */{},
        deregisterInteractionHandler: function deregisterInteractionHandler() /* type: string, handler: EventListener */{},
        activateInputRipple: function activateInputRipple() {},
        deactivateInputRipple: function deactivateInputRipple() {}
      };
    }
  }]);

  function MDCFormFieldFoundation(adapter) {
    _classCallCheck(this, MDCFormFieldFoundation);

    var _this = _possibleConstructorReturn(this, (MDCFormFieldFoundation.__proto__ || Object.getPrototypeOf(MDCFormFieldFoundation)).call(this, Object.assign(MDCFormFieldFoundation.defaultAdapter, adapter)));

    _this.clickHandler_ = function (evt) {
      return _this.handleClick_(evt);
    };
    return _this;
  }

  _createClass(MDCFormFieldFoundation, [{
    key: 'init',
    value: function init() {
      this.adapter_.registerInteractionHandler('click', this.clickHandler_);
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      this.adapter_.deregisterInteractionHandler('click', this.clickHandler_);
    }
  }, {
    key: 'handleClick_',
    value: function handleClick_(evt) {
      var _this2 = this;

      this.adapter_.activateInputRipple();
      requestAnimationFrame(function () {
        return _this2.adapter_.deactivateInputRipple();
      });
    }
  }]);

  return MDCFormFieldFoundation;
}(_base.MDCFoundation);

exports.default = MDCFormFieldFoundation;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MDCFormField = exports.MDCFormFieldFoundation = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _base = __webpack_require__(0);

var _foundation = __webpack_require__(31);

var _foundation2 = _interopRequireDefault(_foundation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2017 Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

exports.MDCFormFieldFoundation = _foundation2.default;

var MDCFormField = exports.MDCFormField = function (_MDCComponent) {
  _inherits(MDCFormField, _MDCComponent);

  function MDCFormField() {
    _classCallCheck(this, MDCFormField);

    return _possibleConstructorReturn(this, (MDCFormField.__proto__ || Object.getPrototypeOf(MDCFormField)).apply(this, arguments));
  }

  _createClass(MDCFormField, [{
    key: 'getDefaultFoundation',
    value: function getDefaultFoundation() {
      var _this2 = this;

      return new _foundation2.default({
        registerInteractionHandler: function registerInteractionHandler(type, handler) {
          return _this2.label_.addEventListener(type, handler);
        },
        deregisterInteractionHandler: function deregisterInteractionHandler(type, handler) {
          return _this2.label_.removeEventListener(type, handler);
        },
        activateInputRipple: function activateInputRipple() {
          if (_this2.input_ && _this2.input_.ripple) {
            _this2.input_.ripple.activate();
          }
        },
        deactivateInputRipple: function deactivateInputRipple() {
          if (_this2.input_ && _this2.input_.ripple) {
            _this2.input_.ripple.deactivate();
          }
        }
      });
    }
  }, {
    key: 'input',
    set: function set(input) {
      this.input_ = input;
    },
    get: function get() {
      return this.input_;
    }
  }, {
    key: 'label_',
    get: function get() {
      return this.root_.querySelector(_foundation2.default.strings.LABEL_SELECTOR);
    }
  }], [{
    key: 'attachTo',
    value: function attachTo(root) {
      return new MDCFormField(root);
    }
  }]);

  return MDCFormField;
}(_base.MDCComponent);

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var strings = exports.strings = {
  TILES_SELECTOR: '.mdc-grid-list__tiles',
  TILE_SELECTOR: '.mdc-grid-tile'
};

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _base = __webpack_require__(0);

var _constants = __webpack_require__(33);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2016 Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var MDCGridListFoundation = function (_MDCFoundation) {
  _inherits(MDCGridListFoundation, _MDCFoundation);

  _createClass(MDCGridListFoundation, null, [{
    key: 'strings',
    get: function get() {
      return _constants.strings;
    }
  }, {
    key: 'defaultAdapter',
    get: function get() {
      return {
        getOffsetWidth: function getOffsetWidth() {
          return (/* number */0
          );
        },
        getNumberOfTiles: function getNumberOfTiles() {
          return (/* number */0
          );
        },
        getOffsetWidthForTileAtIndex: function getOffsetWidthForTileAtIndex() {
          return (/* index: number */ /* number */0
          );
        },
        setStyleForTilesElement: function setStyleForTilesElement() /* property: string, value: string */{},
        registerResizeHandler: function registerResizeHandler() /* handler: EventListener */{},
        deregisterResizeHandler: function deregisterResizeHandler() /* handler: EventListener */{}
      };
    }
  }]);

  function MDCGridListFoundation(adapter) {
    _classCallCheck(this, MDCGridListFoundation);

    var _this = _possibleConstructorReturn(this, (MDCGridListFoundation.__proto__ || Object.getPrototypeOf(MDCGridListFoundation)).call(this, Object.assign(MDCGridListFoundation.defaultAdapter, adapter)));

    _this.resizeHandler_ = function () {
      return _this.alignCenter();
    };
    _this.resizeFrame_ = 0;
    return _this;
  }

  _createClass(MDCGridListFoundation, [{
    key: 'init',
    value: function init() {
      this.alignCenter();
      this.adapter_.registerResizeHandler(this.resizeHandler_);
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      this.adapter_.deregisterResizeHandler(this.resizeHandler_);
    }
  }, {
    key: 'alignCenter',
    value: function alignCenter() {
      var _this2 = this;

      if (this.resizeFrame_ !== 0) {
        cancelAnimationFrame(this.resizeFrame_);
      }
      this.resizeFrame_ = requestAnimationFrame(function () {
        _this2.alignCenter_();
        _this2.resizeFrame_ = 0;
      });
    }
  }, {
    key: 'alignCenter_',
    value: function alignCenter_() {
      if (this.adapter_.getNumberOfTiles() == 0) {
        return;
      }
      var gridWidth = this.adapter_.getOffsetWidth();
      var itemWidth = this.adapter_.getOffsetWidthForTileAtIndex(0);
      var tilesWidth = itemWidth * Math.floor(gridWidth / itemWidth);
      this.adapter_.setStyleForTilesElement('width', tilesWidth + 'px');
    }
  }]);

  return MDCGridListFoundation;
}(_base.MDCFoundation);

exports.default = MDCGridListFoundation;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MDCGridList = exports.MDCGridListFoundation = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _base = __webpack_require__(0);

var _foundation = __webpack_require__(34);

var _foundation2 = _interopRequireDefault(_foundation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2016 Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

exports.MDCGridListFoundation = _foundation2.default;

var MDCGridList = exports.MDCGridList = function (_MDCComponent) {
  _inherits(MDCGridList, _MDCComponent);

  function MDCGridList() {
    _classCallCheck(this, MDCGridList);

    return _possibleConstructorReturn(this, (MDCGridList.__proto__ || Object.getPrototypeOf(MDCGridList)).apply(this, arguments));
  }

  _createClass(MDCGridList, [{
    key: 'getDefaultFoundation',
    value: function getDefaultFoundation() {
      var _this2 = this;

      return new _foundation2.default({
        getOffsetWidth: function getOffsetWidth() {
          return _this2.root_.offsetWidth;
        },
        getNumberOfTiles: function getNumberOfTiles() {
          return _this2.root_.querySelectorAll(_foundation2.default.strings.TILE_SELECTOR).length;
        },
        getOffsetWidthForTileAtIndex: function getOffsetWidthForTileAtIndex(index) {
          return _this2.root_.querySelectorAll(_foundation2.default.strings.TILE_SELECTOR)[index].offsetWidth;
        },
        setStyleForTilesElement: function setStyleForTilesElement(property, value) {
          _this2.root_.querySelector(_foundation2.default.strings.TILES_SELECTOR).style[property] = value;
        },
        registerResizeHandler: function registerResizeHandler(handler) {
          return window.addEventListener('resize', handler);
        },
        deregisterResizeHandler: function deregisterResizeHandler(handler) {
          return window.removeEventListener('resize', handler);
        }
      });
    }
  }], [{
    key: 'attachTo',
    value: function attachTo(root) {
      return new MDCGridList(root);
    }
  }]);

  return MDCGridList;
}(_base.MDCComponent);

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var strings = exports.strings = {
  DATA_TOGGLE_ON: 'data-toggle-on',
  DATA_TOGGLE_OFF: 'data-toggle-off',
  ARIA_PRESSED: 'aria-pressed',
  ARIA_DISABLED: 'aria-disabled',
  ARIA_LABEL: 'aria-label'
};

var cssClasses = exports.cssClasses = {
  ROOT: 'mdc-icon-toggle',
  DISABLED: 'mdc-icon-toggle--disabled'
};

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _base = __webpack_require__(0);

var _constants = __webpack_require__(36);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2016 Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var MDCIconToggleFoundation = function (_MDCFoundation) {
  _inherits(MDCIconToggleFoundation, _MDCFoundation);

  _createClass(MDCIconToggleFoundation, null, [{
    key: 'cssClasses',
    get: function get() {
      return _constants.cssClasses;
    }
  }, {
    key: 'strings',
    get: function get() {
      return _constants.strings;
    }
  }, {
    key: 'defaultAdapter',
    get: function get() {
      return {
        addClass: function addClass() /* className: string */{},
        removeClass: function removeClass() /* className: string */{},
        registerInteractionHandler: function registerInteractionHandler() /* type: string, handler: EventListener */{},
        deregisterInteractionHandler: function deregisterInteractionHandler() /* type: string, handler: EventListener */{},
        setText: function setText() /* text: string */{},
        getTabIndex: function getTabIndex() {
          return (/* number */0
          );
        },
        setTabIndex: function setTabIndex() /* tabIndex: number */{},
        getAttr: function getAttr() {
          return (/* name: string */ /* string */''
          );
        },
        setAttr: function setAttr() /* name: string, value: string */{},
        rmAttr: function rmAttr() /* name: string */{},
        notifyChange: function notifyChange() /* evtData: {isOn: boolean} */{}
      };
    }
  }]);

  function MDCIconToggleFoundation(adapter) {
    _classCallCheck(this, MDCIconToggleFoundation);

    var _this = _possibleConstructorReturn(this, (MDCIconToggleFoundation.__proto__ || Object.getPrototypeOf(MDCIconToggleFoundation)).call(this, Object.assign(MDCIconToggleFoundation.defaultAdapter, adapter)));

    _this.on_ = false;
    _this.disabled_ = false;
    _this.savedTabIndex_ = -1;
    _this.toggleOnData_ = null;
    _this.toggleOffData_ = null;
    _this.clickHandler_ = function () {
      return _this.toggleFromEvt_();
    };
    _this.isHandlingKeydown_ = false;
    _this.keydownHandler_ = function (evt) {
      if (isSpace(evt)) {
        _this.isHandlingKeydown_ = true;
        return evt.preventDefault();
      }
    };
    _this.keyupHandler_ = function (evt) {
      if (isSpace(evt)) {
        _this.isHandlingKeydown_ = false;
        _this.toggleFromEvt_();
      }
    };
    return _this;
  }

  _createClass(MDCIconToggleFoundation, [{
    key: 'init',
    value: function init() {
      this.refreshToggleData();
      this.adapter_.registerInteractionHandler('click', this.clickHandler_);
      this.adapter_.registerInteractionHandler('keydown', this.keydownHandler_);
      this.adapter_.registerInteractionHandler('keyup', this.keyupHandler_);
    }
  }, {
    key: 'refreshToggleData',
    value: function refreshToggleData() {
      var _MDCIconToggleFoundat = MDCIconToggleFoundation.strings,
          DATA_TOGGLE_ON = _MDCIconToggleFoundat.DATA_TOGGLE_ON,
          DATA_TOGGLE_OFF = _MDCIconToggleFoundat.DATA_TOGGLE_OFF;

      this.toggleOnData_ = this.parseJsonDataAttr_(DATA_TOGGLE_ON);
      this.toggleOffData_ = this.parseJsonDataAttr_(DATA_TOGGLE_OFF);
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      this.adapter_.deregisterInteractionHandler('click', this.clickHandler_);
      this.adapter_.deregisterInteractionHandler('keydown', this.keydownHandler_);
      this.adapter_.deregisterInteractionHandler('keyup', this.keyupHandler_);
    }
  }, {
    key: 'toggleFromEvt_',
    value: function toggleFromEvt_() {
      this.toggle();
      var isOn = this.on_;

      this.adapter_.notifyChange({ isOn: isOn });
    }
  }, {
    key: 'isOn',
    value: function isOn() {
      return this.on_;
    }
  }, {
    key: 'toggle',
    value: function toggle() {
      var isOn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !this.on_;

      this.on_ = isOn;

      var _MDCIconToggleFoundat2 = MDCIconToggleFoundation.strings,
          ARIA_LABEL = _MDCIconToggleFoundat2.ARIA_LABEL,
          ARIA_PRESSED = _MDCIconToggleFoundat2.ARIA_PRESSED;

      var _ref = this.on_ ? this.toggleOnData_ : this.toggleOffData_,
          content = _ref.content,
          label = _ref.label,
          cssClass = _ref.cssClass;

      var _ref2 = this.on_ ? this.toggleOffData_ : this.toggleOnData_,
          classToRemove = _ref2.cssClass;

      if (this.on_) {
        this.adapter_.setAttr(ARIA_PRESSED, 'true');
      } else {
        this.adapter_.setAttr(ARIA_PRESSED, 'false');
      }

      if (classToRemove) {
        this.adapter_.removeClass(classToRemove);
      }
      if (cssClass) {
        this.adapter_.addClass(cssClass);
      }
      if (content) {
        this.adapter_.setText(content);
      }
      if (label) {
        this.adapter_.setAttr(ARIA_LABEL, label);
      }
    }
  }, {
    key: 'parseJsonDataAttr_',
    value: function parseJsonDataAttr_(dataAttr) {
      var val = this.adapter_.getAttr(dataAttr);
      if (!val) {
        return {};
      }
      return JSON.parse(val);
    }
  }, {
    key: 'isDisabled',
    value: function isDisabled() {
      return this.disabled_;
    }
  }, {
    key: 'setDisabled',
    value: function setDisabled(isDisabled) {
      this.disabled_ = isDisabled;

      var DISABLED = MDCIconToggleFoundation.cssClasses.DISABLED;
      var ARIA_DISABLED = MDCIconToggleFoundation.strings.ARIA_DISABLED;


      if (this.disabled_) {
        this.savedTabIndex = this.adapter_.getTabIndex();
        this.adapter_.setTabIndex(-1);
        this.adapter_.setAttr(ARIA_DISABLED, 'true');
        this.adapter_.addClass(DISABLED);
      } else {
        this.adapter_.setTabIndex(this.savedTabIndex);
        this.adapter_.rmAttr(ARIA_DISABLED);
        this.adapter_.removeClass(DISABLED);
      }
    }
  }, {
    key: 'isKeyboardActivated',
    value: function isKeyboardActivated() {
      return this.isHandlingKeydown_;
    }
  }]);

  return MDCIconToggleFoundation;
}(_base.MDCFoundation);

exports.default = MDCIconToggleFoundation;


function isSpace(_ref3) {
  var key = _ref3.key,
      keyCode = _ref3.keyCode;

  return key && key === 'Space' || keyCode === 32;
}

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MDCIconToggle = exports.MDCIconToggleFoundation = undefined;

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _base = __webpack_require__(0);

var _ripple = __webpack_require__(1);

var _foundation = __webpack_require__(37);

var _foundation2 = _interopRequireDefault(_foundation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2016 Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

exports.MDCIconToggleFoundation = _foundation2.default;

var MDCIconToggle = exports.MDCIconToggle = function (_MDCComponent) {
  _inherits(MDCIconToggle, _MDCComponent);

  _createClass(MDCIconToggle, null, [{
    key: 'attachTo',
    value: function attachTo(root) {
      return new MDCIconToggle(root);
    }
  }]);

  function MDCIconToggle() {
    var _ref;

    _classCallCheck(this, MDCIconToggle);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = MDCIconToggle.__proto__ || Object.getPrototypeOf(MDCIconToggle)).call.apply(_ref, [this].concat(args)));

    _this.ripple_ = _this.initRipple_();
    return _this;
  }

  _createClass(MDCIconToggle, [{
    key: 'initRipple_',
    value: function initRipple_() {
      var _this2 = this;

      var adapter = Object.assign(_ripple.MDCRipple.createAdapter(this), {
        isUnbounded: function isUnbounded() {
          return true;
        },
        isSurfaceActive: function isSurfaceActive() {
          return _this2.foundation_.isKeyboardActivated();
        },
        computeBoundingRect: function computeBoundingRect() {
          var dim = 48;

          var _root_$getBoundingCli = _this2.root_.getBoundingClientRect(),
              left = _root_$getBoundingCli.left,
              top = _root_$getBoundingCli.top;

          return {
            left: left,
            top: top,
            width: dim,
            height: dim,
            right: left + dim,
            bottom: left + dim
          };
        }
      });
      var foundation = new _ripple.MDCRippleFoundation(adapter);
      return new _ripple.MDCRipple(this.root_, foundation);
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      this.ripple_.destroy();
      _get(MDCIconToggle.prototype.__proto__ || Object.getPrototypeOf(MDCIconToggle.prototype), 'destroy', this).call(this);
    }
  }, {
    key: 'getDefaultFoundation',
    value: function getDefaultFoundation() {
      var _this3 = this;

      return new _foundation2.default({
        addClass: function addClass(className) {
          return _this3.iconEl_.classList.add(className);
        },
        removeClass: function removeClass(className) {
          return _this3.iconEl_.classList.remove(className);
        },
        registerInteractionHandler: function registerInteractionHandler(type, handler) {
          return _this3.root_.addEventListener(type, handler);
        },
        deregisterInteractionHandler: function deregisterInteractionHandler(type, handler) {
          return _this3.root_.removeEventListener(type, handler);
        },
        setText: function setText(text) {
          _this3.iconEl_.textContent = text;
        },
        getTabIndex: function getTabIndex() {
          return (/* number */_this3.root_.tabIndex
          );
        },
        setTabIndex: function setTabIndex(tabIndex) {
          _this3.root_.tabIndex = tabIndex;
        },
        getAttr: function getAttr(name, value) {
          return _this3.root_.getAttribute(name, value);
        },
        setAttr: function setAttr(name, value) {
          return _this3.root_.setAttribute(name, value);
        },
        rmAttr: function rmAttr(name) {
          return _this3.root_.removeAttribute(name);
        },
        notifyChange: function notifyChange(evtData) {
          return _this3.emit('MDCIconToggle:change', evtData);
        }
      });
    }
  }, {
    key: 'initialSyncWithDOM',
    value: function initialSyncWithDOM() {
      this.on = this.root_.getAttribute(_foundation2.default.strings.ARIA_PRESSED) === 'true';
      this.disabled = this.root_.getAttribute(_foundation2.default.strings.ARIA_DISABLED) === 'true';
    }
  }, {
    key: 'refreshToggleData',
    value: function refreshToggleData() {
      this.foundation_.refreshToggleData();
    }
  }, {
    key: 'iconEl_',
    get: function get() {
      var sel = this.root_.dataset.iconInnerSelector;

      return sel ? this.root_.querySelector(sel) : this.root_;
    }
  }, {
    key: 'on',
    get: function get() {
      return this.foundation_.isOn();
    },
    set: function set(isOn) {
      this.foundation_.toggle(isOn);
    }
  }, {
    key: 'disabled',
    get: function get() {
      return this.foundation_.isDisabled();
    },
    set: function set(isDisabled) {
      this.foundation_.setDisabled(isDisabled);
    }
  }]);

  return MDCIconToggle;
}(_base.MDCComponent);

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var cssClasses = exports.cssClasses = {
  ROOT: 'mdc-simple-menu',
  OPEN: 'mdc-simple-menu--open',
  ANIMATING: 'mdc-simple-menu--animating',
  TOP_RIGHT: 'mdc-simple-menu--open-from-top-right',
  BOTTOM_LEFT: 'mdc-simple-menu--open-from-bottom-left',
  BOTTOM_RIGHT: 'mdc-simple-menu--open-from-bottom-right'
};

var strings = exports.strings = {
  ITEMS_SELECTOR: '.mdc-simple-menu__items'
};

var numbers = exports.numbers = {
  // Amount of time to wait before triggering a selected event on the menu. Note that this time
  // will most likely be bumped up once interactive lists are supported to allow for the ripple to
  // animate before closing the menu
  SELECTED_TRIGGER_DELAY: 50,
  // Total duration of the menu animation.
  TRANSITION_DURATION_MS: 300,
  // The menu starts its open animation with the X axis at this time value (0 - 1).
  TRANSITION_SCALE_ADJUSTMENT_X: 0.5,
  // The time value the menu waits until the animation starts on the Y axis (0 - 1).
  TRANSITION_SCALE_ADJUSTMENT_Y: 0.2,
  // The cubic bezier control points for the animation (cubic-bezier(0, 0, 0.2, 1)).
  TRANSITION_X1: 0,
  TRANSITION_Y1: 0,
  TRANSITION_X2: 0.2,
  TRANSITION_Y2: 1
};

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _base = __webpack_require__(0);

var _constants = __webpack_require__(39);

var _util = __webpack_require__(8);

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2016 Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var MDCSimpleMenuFoundation = function (_MDCFoundation) {
  _inherits(MDCSimpleMenuFoundation, _MDCFoundation);

  _createClass(MDCSimpleMenuFoundation, null, [{
    key: 'cssClasses',
    get: function get() {
      return _constants.cssClasses;
    }
  }, {
    key: 'strings',
    get: function get() {
      return _constants.strings;
    }
  }, {
    key: 'numbers',
    get: function get() {
      return _constants.numbers;
    }
  }, {
    key: 'defaultAdapter',
    get: function get() {
      return {
        addClass: function addClass() /* className: string */{},
        removeClass: function removeClass() /* className: string */{},
        hasClass: function hasClass() /* className: string */{},
        hasNecessaryDom: function hasNecessaryDom() {
          return (/* boolean */false
          );
        },
        getInnerDimensions: function getInnerDimensions() {
          return (/* { width: number, height: number } */{}
          );
        },
        hasAnchor: function hasAnchor() {
          return (/* boolean */false
          );
        },
        getAnchorDimensions: function getAnchorDimensions() {
          return (
            /* { width: number, height: number, top: number, right: number, bottom: number, left: number } */{}
          );
        },
        getWindowDimensions: function getWindowDimensions() {
          return (/* { width: number, height: number } */{}
          );
        },
        setScale: function setScale() /* x: number, y: number */{},
        setInnerScale: function setInnerScale() /* x: number, y: number */{},
        getNumberOfItems: function getNumberOfItems() {
          return (/* number */0
          );
        },
        registerInteractionHandler: function registerInteractionHandler() /* type: string, handler: EventListener */{},
        deregisterInteractionHandler: function deregisterInteractionHandler() /* type: string, handler: EventListener */{},
        registerDocumentClickHandler: function registerDocumentClickHandler() /* handler: EventListener */{},
        deregisterDocumentClickHandler: function deregisterDocumentClickHandler() /* handler: EventListener */{},
        getYParamsForItemAtIndex: function getYParamsForItemAtIndex() {
          return (/* index: number */ /* {top: number, height: number} */{}
          );
        },
        setTransitionDelayForItemAtIndex: function setTransitionDelayForItemAtIndex() /* index: number, value: string */{},
        getIndexForEventTarget: function getIndexForEventTarget() {
          return (/* target: EventTarget */ /* number */0
          );
        },
        notifySelected: function notifySelected() /* evtData: {index: number} */{},
        notifyCancel: function notifyCancel() {},
        saveFocus: function saveFocus() {},
        restoreFocus: function restoreFocus() {},
        isFocused: function isFocused() {
          return (/* boolean */false
          );
        },
        focus: function focus() {},
        getFocusedItemIndex: function getFocusedItemIndex() {
          return (/* number */-1
          );
        },
        focusItemAtIndex: function focusItemAtIndex() /* index: number */{},
        isRtl: function isRtl() {
          return (/* boolean */false
          );
        },
        setTransformOrigin: function setTransformOrigin() /* origin: string */{},
        setPosition: function setPosition() /* position: { top: string, right: string, bottom: string, left: string } */{},
        getAccurateTime: function getAccurateTime() {
          return (/* number */0
          );
        }
      };
    }
  }]);

  function MDCSimpleMenuFoundation(adapter) {
    _classCallCheck(this, MDCSimpleMenuFoundation);

    var _this = _possibleConstructorReturn(this, (MDCSimpleMenuFoundation.__proto__ || Object.getPrototypeOf(MDCSimpleMenuFoundation)).call(this, Object.assign(MDCSimpleMenuFoundation.defaultAdapter, adapter)));

    _this.clickHandler_ = function (evt) {
      return _this.handlePossibleSelected_(evt);
    };
    _this.keydownHandler_ = function (evt) {
      return _this.handleKeyboardDown_(evt);
    };
    _this.keyupHandler_ = function (evt) {
      return _this.handleKeyboardUp_(evt);
    };
    _this.documentClickHandler_ = function (evt) {
      _this.adapter_.notifyCancel();
      _this.close();
    };
    _this.isOpen_ = false;
    _this.startScaleX_ = 0;
    _this.startScaleY_ = 0;
    _this.targetScale_ = 1;
    _this.scaleX_ = 0;
    _this.scaleY_ = 0;
    _this.running_ = false;
    _this.selectedTriggerTimerId_ = 0;
    _this.animationRequestId_ = 0;
    return _this;
  }

  _createClass(MDCSimpleMenuFoundation, [{
    key: 'init',
    value: function init() {
      var _MDCSimpleMenuFoundat = MDCSimpleMenuFoundation.cssClasses,
          ROOT = _MDCSimpleMenuFoundat.ROOT,
          OPEN = _MDCSimpleMenuFoundat.OPEN;


      if (!this.adapter_.hasClass(ROOT)) {
        throw new Error(ROOT + ' class required in root element.');
      }

      if (!this.adapter_.hasNecessaryDom()) {
        throw new Error('Required DOM nodes missing in ' + ROOT + ' component.');
      }

      if (this.adapter_.hasClass(OPEN)) {
        this.isOpen_ = true;
      }

      this.adapter_.registerInteractionHandler('click', this.clickHandler_);
      this.adapter_.registerInteractionHandler('keyup', this.keyupHandler_);
      this.adapter_.registerInteractionHandler('keydown', this.keydownHandler_);
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      clearTimeout(this.selectedTriggerTimerId_);
      // Cancel any currently running animations.
      cancelAnimationFrame(this.animationRequestId_);
      this.adapter_.deregisterInteractionHandler('click', this.clickHandler_);
      this.adapter_.deregisterInteractionHandler('keyup', this.keyupHandler_);
      this.adapter_.deregisterInteractionHandler('keydown', this.keydownHandler_);
      this.adapter_.deregisterDocumentClickHandler(this.documentClickHandler_);
    }

    // Calculate transition delays for individual menu items, so that they fade in one at a time.

  }, {
    key: 'applyTransitionDelays_',
    value: function applyTransitionDelays_() {
      var _MDCSimpleMenuFoundat2 = MDCSimpleMenuFoundation.cssClasses,
          BOTTOM_LEFT = _MDCSimpleMenuFoundat2.BOTTOM_LEFT,
          BOTTOM_RIGHT = _MDCSimpleMenuFoundat2.BOTTOM_RIGHT;

      var numItems = this.adapter_.getNumberOfItems();
      var height = this.dimensions_.height;

      var transitionDuration = MDCSimpleMenuFoundation.numbers.TRANSITION_DURATION_MS / 1000;
      var start = MDCSimpleMenuFoundation.numbers.TRANSITION_SCALE_ADJUSTMENT_Y;

      for (var index = 0; index < numItems; index++) {
        var _adapter_$getYParamsF = this.adapter_.getYParamsForItemAtIndex(index),
            itemTop = _adapter_$getYParamsF.top,
            itemHeight = _adapter_$getYParamsF.height;

        this.itemHeight_ = itemHeight;
        var itemDelayFraction = itemTop / height;
        if (this.adapter_.hasClass(BOTTOM_LEFT) || this.adapter_.hasClass(BOTTOM_RIGHT)) {
          itemDelayFraction = (height - itemTop - itemHeight) / height;
        }
        var itemDelay = (start + itemDelayFraction * (1 - start)) * transitionDuration;
        // Use toFixed() here to normalize CSS unit precision across browsers
        this.adapter_.setTransitionDelayForItemAtIndex(index, itemDelay.toFixed(3) + 's');
      }
    }

    // Remove transition delays from menu items.

  }, {
    key: 'removeTransitionDelays_',
    value: function removeTransitionDelays_() {
      var numItems = this.adapter_.getNumberOfItems();
      for (var i = 0; i < numItems; i++) {
        this.adapter_.setTransitionDelayForItemAtIndex(i, null);
      }
    }

    // Animate menu opening or closing.

  }, {
    key: 'animationLoop_',
    value: function animationLoop_() {
      var _this2 = this;

      var time = this.adapter_.getAccurateTime();
      var _MDCSimpleMenuFoundat3 = MDCSimpleMenuFoundation.numbers,
          TRANSITION_DURATION_MS = _MDCSimpleMenuFoundat3.TRANSITION_DURATION_MS,
          TRANSITION_X1 = _MDCSimpleMenuFoundat3.TRANSITION_X1,
          TRANSITION_Y1 = _MDCSimpleMenuFoundat3.TRANSITION_Y1,
          TRANSITION_X2 = _MDCSimpleMenuFoundat3.TRANSITION_X2,
          TRANSITION_Y2 = _MDCSimpleMenuFoundat3.TRANSITION_Y2,
          TRANSITION_SCALE_ADJUSTMENT_X = _MDCSimpleMenuFoundat3.TRANSITION_SCALE_ADJUSTMENT_X,
          TRANSITION_SCALE_ADJUSTMENT_Y = _MDCSimpleMenuFoundat3.TRANSITION_SCALE_ADJUSTMENT_Y;

      var currentTime = (0, _util.clamp)((time - this.startTime_) / TRANSITION_DURATION_MS);

      // Animate X axis very slowly, so that only the Y axis animation is visible during fade-out.
      var currentTimeX = (0, _util.clamp)((currentTime - TRANSITION_SCALE_ADJUSTMENT_X) / (1 - TRANSITION_SCALE_ADJUSTMENT_X));
      // No time-shifting on the Y axis when closing.
      var currentTimeY = currentTime;

      var startScaleY = this.startScaleY_;
      if (this.targetScale_ === 1) {
        // Start with the menu at the height of a single item.
        if (this.itemHeight_) {
          startScaleY = Math.max(this.itemHeight_ / this.dimensions_.height, startScaleY);
        }
        // X axis moves faster, so time-shift forward.
        currentTimeX = (0, _util.clamp)(currentTime + TRANSITION_SCALE_ADJUSTMENT_X);
        // Y axis moves slower, so time-shift backwards and adjust speed by the difference.
        currentTimeY = (0, _util.clamp)((currentTime - TRANSITION_SCALE_ADJUSTMENT_Y) / (1 - TRANSITION_SCALE_ADJUSTMENT_Y));
      }

      // Apply cubic bezier easing independently to each axis.
      var easeX = (0, _util.bezierProgress)(currentTimeX, TRANSITION_X1, TRANSITION_Y1, TRANSITION_X2, TRANSITION_Y2);
      var easeY = (0, _util.bezierProgress)(currentTimeY, TRANSITION_X1, TRANSITION_Y1, TRANSITION_X2, TRANSITION_Y2);

      // Calculate the scales to apply to the outer container and inner container.
      this.scaleX_ = this.startScaleX_ + (this.targetScale_ - this.startScaleX_) * easeX;
      var invScaleX = 1 / (this.scaleX_ === 0 ? 1 : this.scaleX_);
      this.scaleY_ = startScaleY + (this.targetScale_ - startScaleY) * easeY;
      var invScaleY = 1 / (this.scaleY_ === 0 ? 1 : this.scaleY_);

      // Apply scales.
      this.adapter_.setScale(this.scaleX_, this.scaleY_);
      this.adapter_.setInnerScale(invScaleX, invScaleY);

      // Stop animation when we've covered the entire 0 - 1 range of time.
      if (currentTime < 1) {
        this.animationRequestId_ = requestAnimationFrame(function () {
          return _this2.animationLoop_();
        });
      } else {
        this.animationRequestId_ = 0;
        this.running_ = false;
        this.adapter_.removeClass(MDCSimpleMenuFoundation.cssClasses.ANIMATING);
      }
    }

    // Starts the open or close animation.

  }, {
    key: 'animateMenu_',
    value: function animateMenu_() {
      var _this3 = this;

      this.startTime_ = this.adapter_.getAccurateTime();
      this.startScaleX_ = this.scaleX_;
      this.startScaleY_ = this.scaleY_;

      this.targetScale_ = this.isOpen_ ? 1 : 0;

      if (!this.running_) {
        this.running_ = true;
        this.animationRequestId_ = requestAnimationFrame(function () {
          return _this3.animationLoop_();
        });
      }
    }
  }, {
    key: 'focusOnOpen_',
    value: function focusOnOpen_(focusIndex) {
      if (focusIndex === null) {
        // First, try focusing the menu.
        this.adapter_.focus();
        // If that doesn't work, focus first item instead.
        if (!this.adapter_.isFocused()) {
          this.adapter_.focusItemAtIndex(0);
        }
      } else {
        this.adapter_.focusItemAtIndex(focusIndex);
      }
    }

    // Handle keys that we want to repeat on hold (tab and arrows).

  }, {
    key: 'handleKeyboardDown_',
    value: function handleKeyboardDown_(evt) {
      // Do nothing if Alt, Ctrl or Meta are pressed.
      if (evt.altKey || evt.ctrlKey || evt.metaKey) {
        return true;
      }

      var keyCode = evt.keyCode,
          key = evt.key,
          shiftKey = evt.shiftKey;

      var isTab = key === 'Tab' || keyCode === 9;
      var isArrowUp = key === 'ArrowUp' || keyCode === 38;
      var isArrowDown = key === 'ArrowDown' || keyCode === 40;
      var isSpace = key === 'Space' || keyCode === 32;

      var focusedItemIndex = this.adapter_.getFocusedItemIndex();
      var lastItemIndex = this.adapter_.getNumberOfItems() - 1;

      if (shiftKey && isTab && focusedItemIndex === 0) {
        this.adapter_.focusItemAtIndex(lastItemIndex);
        evt.preventDefault();
        return false;
      }

      if (!shiftKey && isTab && focusedItemIndex === lastItemIndex) {
        this.adapter_.focusItemAtIndex(0);
        evt.preventDefault();
        return false;
      }

      // Ensure Arrow{Up,Down} and space do not cause inadvertent scrolling
      if (isArrowUp || isArrowDown || isSpace) {
        evt.preventDefault();
      }

      if (isArrowUp) {
        if (focusedItemIndex === 0 || this.adapter_.isFocused()) {
          this.adapter_.focusItemAtIndex(lastItemIndex);
        } else {
          this.adapter_.focusItemAtIndex(focusedItemIndex - 1);
        }
      } else if (isArrowDown) {
        if (focusedItemIndex === lastItemIndex || this.adapter_.isFocused()) {
          this.adapter_.focusItemAtIndex(0);
        } else {
          this.adapter_.focusItemAtIndex(focusedItemIndex + 1);
        }
      }

      return true;
    }

    // Handle keys that we don't want to repeat on hold (Enter, Space, Escape).

  }, {
    key: 'handleKeyboardUp_',
    value: function handleKeyboardUp_(evt) {
      // Do nothing if Alt, Ctrl or Meta are pressed.
      if (evt.altKey || evt.ctrlKey || evt.metaKey) {
        return true;
      }

      var keyCode = evt.keyCode,
          key = evt.key;

      var isEnter = key === 'Enter' || keyCode === 13;
      var isSpace = key === 'Space' || keyCode === 32;
      var isEscape = key === 'Escape' || keyCode === 27;

      if (isEnter || isSpace) {
        this.handlePossibleSelected_(evt);
      }

      if (isEscape) {
        this.adapter_.notifyCancel();
        this.close();
      }

      return true;
    }
  }, {
    key: 'handlePossibleSelected_',
    value: function handlePossibleSelected_(evt) {
      var _this4 = this;

      var targetIndex = this.adapter_.getIndexForEventTarget(evt.target);
      if (targetIndex < 0) {
        return;
      }
      // Debounce multiple selections
      if (this.selectedTriggerTimerId_) {
        return;
      }
      this.selectedTriggerTimerId_ = setTimeout(function () {
        _this4.selectedTriggerTimerId_ = 0;
        _this4.close();
        _this4.adapter_.notifySelected({ index: targetIndex });
      }, _constants.numbers.SELECTED_TRIGGER_DELAY);
    }
  }, {
    key: 'autoPosition_',
    value: function autoPosition_() {
      var _position;

      if (!this.adapter_.hasAnchor()) {
        return;
      }

      // Defaults: open from the top left.
      var vertical = 'top';
      var horizontal = 'left';

      var anchor = this.adapter_.getAnchorDimensions();
      var windowDimensions = this.adapter_.getWindowDimensions();

      var topOverflow = anchor.top + this.dimensions_.height - windowDimensions.height;
      var bottomOverflow = this.dimensions_.height - anchor.bottom;
      var extendsBeyondTopBounds = topOverflow > 0;

      if (extendsBeyondTopBounds) {
        if (bottomOverflow < topOverflow) {
          vertical = 'bottom';
        }
      }

      var leftOverflow = anchor.left + this.dimensions_.width - windowDimensions.width;
      var rightOverflow = this.dimensions_.width - anchor.right;
      var extendsBeyondLeftBounds = leftOverflow > 0;
      var extendsBeyondRightBounds = rightOverflow > 0;

      if (this.adapter_.isRtl()) {
        // In RTL, we prefer to open from the right.
        horizontal = 'right';
        if (extendsBeyondRightBounds && leftOverflow < rightOverflow) {
          horizontal = 'left';
        }
      } else if (extendsBeyondLeftBounds && rightOverflow < leftOverflow) {
        horizontal = 'right';
      }

      var position = (_position = {}, _defineProperty(_position, horizontal, '0'), _defineProperty(_position, vertical, '0'), _position);

      this.adapter_.setTransformOrigin(vertical + ' ' + horizontal);
      this.adapter_.setPosition(position);
    }

    // Open the menu.

  }, {
    key: 'open',
    value: function open() {
      var _this5 = this;

      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref$focusIndex = _ref.focusIndex,
          focusIndex = _ref$focusIndex === undefined ? null : _ref$focusIndex;

      this.adapter_.saveFocus();
      this.adapter_.addClass(MDCSimpleMenuFoundation.cssClasses.ANIMATING);
      this.animationRequestId_ = requestAnimationFrame(function () {
        _this5.dimensions_ = _this5.adapter_.getInnerDimensions();
        _this5.applyTransitionDelays_();
        _this5.autoPosition_();
        _this5.animateMenu_();
        _this5.adapter_.addClass(MDCSimpleMenuFoundation.cssClasses.OPEN);
        _this5.focusOnOpen_(focusIndex);
        _this5.adapter_.registerDocumentClickHandler(_this5.documentClickHandler_);
      });
      this.isOpen_ = true;
    }

    // Close the menu.

  }, {
    key: 'close',
    value: function close() {
      var _this6 = this;

      this.adapter_.deregisterDocumentClickHandler(this.documentClickHandler_);
      this.adapter_.addClass(MDCSimpleMenuFoundation.cssClasses.ANIMATING);
      requestAnimationFrame(function () {
        _this6.removeTransitionDelays_();
        _this6.animateMenu_();
        _this6.adapter_.removeClass(MDCSimpleMenuFoundation.cssClasses.OPEN);
      });
      this.isOpen_ = false;
      this.adapter_.restoreFocus();
    }
  }, {
    key: 'isOpen',
    value: function isOpen() {
      return this.isOpen_;
    }
  }]);

  return MDCSimpleMenuFoundation;
}(_base.MDCFoundation);

exports.default = MDCSimpleMenuFoundation;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MDCSimpleMenu = exports.MDCSimpleMenuFoundation = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _base = __webpack_require__(0);

var _foundation = __webpack_require__(40);

var _foundation2 = _interopRequireDefault(_foundation);

var _util = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2016 Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

exports.MDCSimpleMenuFoundation = _foundation2.default;

var MDCSimpleMenu = exports.MDCSimpleMenu = function (_MDCComponent) {
  _inherits(MDCSimpleMenu, _MDCComponent);

  function MDCSimpleMenu() {
    _classCallCheck(this, MDCSimpleMenu);

    return _possibleConstructorReturn(this, (MDCSimpleMenu.__proto__ || Object.getPrototypeOf(MDCSimpleMenu)).apply(this, arguments));
  }

  _createClass(MDCSimpleMenu, [{
    key: 'show',
    value: function show() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref$focusIndex = _ref.focusIndex,
          focusIndex = _ref$focusIndex === undefined ? null : _ref$focusIndex;

      this.foundation_.open({ focusIndex: focusIndex });
    }
  }, {
    key: 'hide',
    value: function hide() {
      this.foundation_.close();
    }

    /* Return the item container element inside the component. */

  }, {
    key: 'getDefaultFoundation',
    value: function getDefaultFoundation() {
      var _this2 = this;

      return new _foundation2.default({
        addClass: function addClass(className) {
          return _this2.root_.classList.add(className);
        },
        removeClass: function removeClass(className) {
          return _this2.root_.classList.remove(className);
        },
        hasClass: function hasClass(className) {
          return _this2.root_.classList.contains(className);
        },
        hasNecessaryDom: function hasNecessaryDom() {
          return Boolean(_this2.itemsContainer_);
        },
        getInnerDimensions: function getInnerDimensions() {
          var itemsContainer = _this2.itemsContainer_;

          return { width: itemsContainer.offsetWidth, height: itemsContainer.offsetHeight };
        },
        hasAnchor: function hasAnchor() {
          return _this2.root_.parentElement && _this2.root_.parentElement.classList.contains('mdc-menu-anchor');
        },
        getAnchorDimensions: function getAnchorDimensions() {
          return _this2.root_.parentElement.getBoundingClientRect();
        },
        getWindowDimensions: function getWindowDimensions() {
          return { width: window.innerWidth, height: window.innerHeight };
        },
        setScale: function setScale(x, y) {
          _this2.root_.style[(0, _util.getTransformPropertyName)(window)] = 'scale(' + x + ', ' + y + ')';
        },
        setInnerScale: function setInnerScale(x, y) {
          _this2.itemsContainer_.style[(0, _util.getTransformPropertyName)(window)] = 'scale(' + x + ', ' + y + ')';
        },
        getNumberOfItems: function getNumberOfItems() {
          return _this2.items.length;
        },
        registerInteractionHandler: function registerInteractionHandler(type, handler) {
          return _this2.root_.addEventListener(type, handler);
        },
        deregisterInteractionHandler: function deregisterInteractionHandler(type, handler) {
          return _this2.root_.removeEventListener(type, handler);
        },
        registerDocumentClickHandler: function registerDocumentClickHandler(handler) {
          return document.addEventListener('click', handler);
        },
        deregisterDocumentClickHandler: function deregisterDocumentClickHandler(handler) {
          return document.removeEventListener('click', handler);
        },
        getYParamsForItemAtIndex: function getYParamsForItemAtIndex(index) {
          var _items$index = _this2.items[index],
              top = _items$index.offsetTop,
              height = _items$index.offsetHeight;

          return { top: top, height: height };
        },
        setTransitionDelayForItemAtIndex: function setTransitionDelayForItemAtIndex(index, value) {
          return _this2.items[index].style.setProperty('transition-delay', value);
        },
        getIndexForEventTarget: function getIndexForEventTarget(target) {
          return _this2.items.indexOf(target);
        },
        notifySelected: function notifySelected(evtData) {
          return _this2.emit('MDCSimpleMenu:selected', {
            index: evtData.index,
            item: _this2.items[evtData.index]
          });
        },
        notifyCancel: function notifyCancel() {
          return _this2.emit('MDCSimpleMenu:cancel');
        },
        saveFocus: function saveFocus() {
          _this2.previousFocus_ = document.activeElement;
        },
        restoreFocus: function restoreFocus() {
          if (_this2.previousFocus_) {
            _this2.previousFocus_.focus();
          }
        },
        isFocused: function isFocused() {
          return document.activeElement === _this2.root_;
        },
        focus: function focus() {
          return _this2.root_.focus();
        },
        getFocusedItemIndex: function getFocusedItemIndex() {
          return _this2.items.indexOf(document.activeElement);
        },
        focusItemAtIndex: function focusItemAtIndex(index) {
          return _this2.items[index].focus();
        },
        isRtl: function isRtl() {
          return getComputedStyle(_this2.root_).getPropertyValue('direction') === 'rtl';
        },
        setTransformOrigin: function setTransformOrigin(origin) {
          _this2.root_.style[(0, _util.getTransformPropertyName)(window) + '-origin'] = origin;
        },
        setPosition: function setPosition(position) {
          _this2.root_.style.left = 'left' in position ? position.left : null;
          _this2.root_.style.right = 'right' in position ? position.right : null;
          _this2.root_.style.top = 'top' in position ? position.top : null;
          _this2.root_.style.bottom = 'bottom' in position ? position.bottom : null;
        },
        getAccurateTime: function getAccurateTime() {
          return window.performance.now();
        }
      });
    }
  }, {
    key: 'open',
    get: function get() {
      return this.foundation_.isOpen();
    },
    set: function set(value) {
      if (value) {
        this.foundation_.open();
      } else {
        this.foundation_.close();
      }
    }
  }, {
    key: 'itemsContainer_',
    get: function get() {
      return this.root_.querySelector(_foundation2.default.strings.ITEMS_SELECTOR);
    }

    /* Return the items within the menu. Note that this only contains the set of elements within
     * the items container that are proper list items, and not supplemental / presentational DOM
     * elements.
     */

  }, {
    key: 'items',
    get: function get() {
      var itemsContainer = this.itemsContainer_;

      return [].slice.call(itemsContainer.querySelectorAll('.mdc-list-item[role]'));
    }
  }], [{
    key: 'attachTo',
    value: function attachTo(root) {
      return new MDCSimpleMenu(root);
    }
  }]);

  return MDCSimpleMenu;
}(_base.MDCComponent);

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var strings = exports.strings = {
  NATIVE_CONTROL_SELECTOR: '.mdc-radio__native-control'
};

var cssClasses = exports.cssClasses = {
  ROOT: 'mdc-radio',
  DISABLED: 'mdc-radio--disabled'
};

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _base = __webpack_require__(0);

var _constants = __webpack_require__(42);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2016 Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var MDCRadioFoundation = function (_MDCFoundation) {
  _inherits(MDCRadioFoundation, _MDCFoundation);

  function MDCRadioFoundation() {
    _classCallCheck(this, MDCRadioFoundation);

    return _possibleConstructorReturn(this, (MDCRadioFoundation.__proto__ || Object.getPrototypeOf(MDCRadioFoundation)).apply(this, arguments));
  }

  _createClass(MDCRadioFoundation, [{
    key: 'isChecked',
    value: function isChecked() {
      return this.getNativeControl_().checked;
    }
  }, {
    key: 'setChecked',
    value: function setChecked(checked) {
      this.getNativeControl_().checked = checked;
    }
  }, {
    key: 'isDisabled',
    value: function isDisabled() {
      return this.getNativeControl_().disabled;
    }
  }, {
    key: 'setDisabled',
    value: function setDisabled(disabled) {
      var DISABLED = MDCRadioFoundation.cssClasses.DISABLED;

      this.getNativeControl_().disabled = disabled;
      if (disabled) {
        this.adapter_.addClass(DISABLED);
      } else {
        this.adapter_.removeClass(DISABLED);
      }
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      return this.getNativeControl_().value;
    }
  }, {
    key: 'setValue',
    value: function setValue(value) {
      this.getNativeControl_().value = value;
    }
  }, {
    key: 'getNativeControl_',
    value: function getNativeControl_() {
      return this.adapter_.getNativeControl() || {
        checked: false,
        disabled: false,
        value: null
      };
    }
  }], [{
    key: 'cssClasses',
    get: function get() {
      return _constants.cssClasses;
    }
  }, {
    key: 'strings',
    get: function get() {
      return _constants.strings;
    }
  }, {
    key: 'defaultAdapter',
    get: function get() {
      return {
        addClass: function addClass() /* className: string */{},
        removeClass: function removeClass() /* className: string */{},
        getNativeControl: function getNativeControl() /* HTMLInputElement */{}
      };
    }
  }]);

  return MDCRadioFoundation;
}(_base.MDCFoundation);

exports.default = MDCRadioFoundation;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MDCRadio = exports.MDCRadioFoundation = undefined;

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _base = __webpack_require__(0);

var _ripple = __webpack_require__(1);

var _foundation = __webpack_require__(43);

var _foundation2 = _interopRequireDefault(_foundation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2016 Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

exports.MDCRadioFoundation = _foundation2.default;

var MDCRadio = exports.MDCRadio = function (_MDCComponent) {
  _inherits(MDCRadio, _MDCComponent);

  _createClass(MDCRadio, [{
    key: 'checked',
    get: function get() {
      return this.foundation_.isChecked();
    },
    set: function set(checked) {
      this.foundation_.setChecked(checked);
    }
  }, {
    key: 'disabled',
    get: function get() {
      return this.foundation_.isDisabled();
    },
    set: function set(disabled) {
      this.foundation_.setDisabled(disabled);
    }
  }, {
    key: 'value',
    get: function get() {
      return this.foundation_.getValue();
    },
    set: function set(value) {
      this.foundation_.setValue(value);
    }
  }, {
    key: 'ripple',
    get: function get() {
      return this.ripple_;
    }
  }], [{
    key: 'attachTo',
    value: function attachTo(root) {
      return new MDCRadio(root);
    }
  }]);

  function MDCRadio() {
    var _ref;

    _classCallCheck(this, MDCRadio);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = MDCRadio.__proto__ || Object.getPrototypeOf(MDCRadio)).call.apply(_ref, [this].concat(args)));

    _this.ripple_ = _this.initRipple_();
    return _this;
  }

  _createClass(MDCRadio, [{
    key: 'initRipple_',
    value: function initRipple_() {
      var _this2 = this;

      var adapter = Object.assign(_ripple.MDCRipple.createAdapter(this), {
        isUnbounded: function isUnbounded() {
          return true;
        },
        // Radio buttons technically go "active" whenever there is *any* keyboard interaction. This is not the
        // UI we desire.
        isSurfaceActive: function isSurfaceActive() {
          return false;
        },
        registerInteractionHandler: function registerInteractionHandler(type, handler) {
          return _this2.nativeControl_.addEventListener(type, handler);
        },
        deregisterInteractionHandler: function deregisterInteractionHandler(type, handler) {
          return _this2.nativeControl_.removeEventListener(type, handler);
        },
        computeBoundingRect: function computeBoundingRect() {
          var _root_$getBoundingCli = _this2.root_.getBoundingClientRect(),
              left = _root_$getBoundingCli.left,
              top = _root_$getBoundingCli.top;

          var DIM = 40;
          return {
            top: top,
            left: left,
            right: left + DIM,
            bottom: top + DIM,
            width: DIM,
            height: DIM
          };
        }
      });
      var foundation = new _ripple.MDCRippleFoundation(adapter);
      return new _ripple.MDCRipple(this.root_, foundation);
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      this.ripple_.destroy();
      _get(MDCRadio.prototype.__proto__ || Object.getPrototypeOf(MDCRadio.prototype), 'destroy', this).call(this);
    }
  }, {
    key: 'getDefaultFoundation',
    value: function getDefaultFoundation() {
      var _this3 = this;

      return new _foundation2.default({
        addClass: function addClass(className) {
          return _this3.root_.classList.add(className);
        },
        removeClass: function removeClass(className) {
          return _this3.root_.classList.remove(className);
        },
        getNativeControl: function getNativeControl() {
          return _this3.root_.querySelector(_foundation2.default.strings.NATIVE_CONTROL_SELECTOR);
        }
      });
    }
  }, {
    key: 'nativeControl_',
    get: function get() {
      return this.root_.querySelector(_foundation2.default.strings.NATIVE_CONTROL_SELECTOR);
    }
  }]);

  return MDCRadio;
}(_base.MDCComponent);

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var cssClasses = exports.cssClasses = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  ROOT: 'mdc-ripple-upgraded',
  UNBOUNDED: 'mdc-ripple-upgraded--unbounded',
  BG_FOCUSED: 'mdc-ripple-upgraded--background-focused',
  BG_ACTIVE_FILL: 'mdc-ripple-upgraded--background-active-fill',
  FG_ACTIVATION: 'mdc-ripple-upgraded--foreground-activation',
  FG_DEACTIVATION: 'mdc-ripple-upgraded--foreground-deactivation'
};

var strings = exports.strings = {
  VAR_SURFACE_WIDTH: '--mdc-ripple-surface-width',
  VAR_SURFACE_HEIGHT: '--mdc-ripple-surface-height',
  VAR_FG_SIZE: '--mdc-ripple-fg-size',
  VAR_LEFT: '--mdc-ripple-left',
  VAR_TOP: '--mdc-ripple-top',
  VAR_FG_SCALE: '--mdc-ripple-fg-scale',
  VAR_FG_TRANSLATE_START: '--mdc-ripple-fg-translate-start',
  VAR_FG_TRANSLATE_END: '--mdc-ripple-fg-translate-end'
};

var numbers = exports.numbers = {
  PADDING: 10,
  INITIAL_ORIGIN_SCALE: 0.6,
  DEACTIVATION_TIMEOUT_MS: 300
};

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _base = __webpack_require__(0);

var _constants = __webpack_require__(45);

var _util = __webpack_require__(4);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2016 Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var DEACTIVATION_ACTIVATION_PAIRS = {
  mouseup: 'mousedown',
  pointerup: 'pointerdown',
  touchend: 'touchstart',
  keyup: 'keydown',
  blur: 'focus'
};

var MDCRippleFoundation = function (_MDCFoundation) {
  _inherits(MDCRippleFoundation, _MDCFoundation);

  _createClass(MDCRippleFoundation, [{
    key: 'isSupported_',


    // We compute this property so that we are not querying information about the client
    // until the point in time where the foundation requests it. This prevents scenarios where
    // client-side feature-detection may happen too early, such as when components are rendered on the server
    // and then initialized at mount time on the client.
    get: function get() {
      return this.adapter_.browserSupportsCssVars();
    }
  }], [{
    key: 'cssClasses',
    get: function get() {
      return _constants.cssClasses;
    }
  }, {
    key: 'strings',
    get: function get() {
      return _constants.strings;
    }
  }, {
    key: 'numbers',
    get: function get() {
      return _constants.numbers;
    }
  }, {
    key: 'defaultAdapter',
    get: function get() {
      return {
        browserSupportsCssVars: function browserSupportsCssVars() /* boolean - cached */{},
        isUnbounded: function isUnbounded() /* boolean */{},
        isSurfaceActive: function isSurfaceActive() /* boolean */{},
        addClass: function addClass() /* className: string */{},
        removeClass: function removeClass() /* className: string */{},
        registerInteractionHandler: function registerInteractionHandler() /* evtType: string, handler: EventListener */{},
        deregisterInteractionHandler: function deregisterInteractionHandler() /* evtType: string, handler: EventListener */{},
        registerResizeHandler: function registerResizeHandler() /* handler: EventListener */{},
        deregisterResizeHandler: function deregisterResizeHandler() /* handler: EventListener */{},
        updateCssVariable: function updateCssVariable() /* varName: string, value: string */{},
        computeBoundingRect: function computeBoundingRect() /* ClientRect */{},
        getWindowPageOffset: function getWindowPageOffset() /* {x: number, y: number} */{}
      };
    }
  }]);

  function MDCRippleFoundation(adapter) {
    _classCallCheck(this, MDCRippleFoundation);

    var _this = _possibleConstructorReturn(this, (MDCRippleFoundation.__proto__ || Object.getPrototypeOf(MDCRippleFoundation)).call(this, Object.assign(MDCRippleFoundation.defaultAdapter, adapter)));

    _this.layoutFrame_ = 0;
    _this.frame_ = { width: 0, height: 0 };
    _this.activationState_ = _this.defaultActivationState_();
    _this.xfDuration_ = 0;
    _this.initialSize_ = 0;
    _this.maxRadius_ = 0;
    _this.listenerInfos_ = [{ activate: 'touchstart', deactivate: 'touchend' }, { activate: 'pointerdown', deactivate: 'pointerup' }, { activate: 'mousedown', deactivate: 'mouseup' }, { activate: 'keydown', deactivate: 'keyup' }, { focus: 'focus', blur: 'blur' }];
    _this.listeners_ = {
      activate: function activate(e) {
        return _this.activate_(e);
      },
      deactivate: function deactivate(e) {
        return _this.deactivate_(e);
      },
      focus: function focus() {
        return requestAnimationFrame(function () {
          return _this.adapter_.addClass(MDCRippleFoundation.cssClasses.BG_FOCUSED);
        });
      },
      blur: function blur() {
        return requestAnimationFrame(function () {
          return _this.adapter_.removeClass(MDCRippleFoundation.cssClasses.BG_FOCUSED);
        });
      }
    };
    _this.resizeHandler_ = function () {
      return _this.layout();
    };
    _this.unboundedCoords_ = {
      left: 0,
      top: 0
    };
    _this.fgScale_ = 0;
    _this.activationTimer_ = 0;
    _this.activationAnimationHasEnded_ = false;
    _this.activationTimerCallback_ = function () {
      _this.activationAnimationHasEnded_ = true;
      _this.runDeactivationUXLogicIfReady_();
    };
    return _this;
  }

  _createClass(MDCRippleFoundation, [{
    key: 'defaultActivationState_',
    value: function defaultActivationState_() {
      return {
        isActivated: false,
        hasDeactivationUXRun: false,
        wasActivatedByPointer: false,
        wasElementMadeActive: false,
        activationStartTime: 0,
        activationEvent: null,
        isProgrammatic: false
      };
    }
  }, {
    key: 'init',
    value: function init() {
      var _this2 = this;

      if (!this.isSupported_) {
        return;
      }
      this.addEventListeners_();

      var _MDCRippleFoundation$ = MDCRippleFoundation.cssClasses,
          ROOT = _MDCRippleFoundation$.ROOT,
          UNBOUNDED = _MDCRippleFoundation$.UNBOUNDED;

      requestAnimationFrame(function () {
        _this2.adapter_.addClass(ROOT);
        if (_this2.adapter_.isUnbounded()) {
          _this2.adapter_.addClass(UNBOUNDED);
        }
        _this2.layoutInternal_();
      });
    }
  }, {
    key: 'addEventListeners_',
    value: function addEventListeners_() {
      var _this3 = this;

      this.listenerInfos_.forEach(function (info) {
        Object.keys(info).forEach(function (k) {
          _this3.adapter_.registerInteractionHandler(info[k], _this3.listeners_[k]);
        });
      });
      this.adapter_.registerResizeHandler(this.resizeHandler_);
    }
  }, {
    key: 'activate_',
    value: function activate_(e) {
      var _this4 = this;

      var activationState = this.activationState_;

      if (activationState.isActivated) {
        return;
      }

      activationState.isActivated = true;
      activationState.isProgrammatic = e === null;
      activationState.activationEvent = e;
      activationState.wasActivatedByPointer = activationState.isProgrammatic ? false : e.type === 'mousedown' || e.type === 'touchstart' || e.type === 'pointerdown';
      activationState.activationStartTime = Date.now();

      requestAnimationFrame(function () {
        // This needs to be wrapped in an rAF call b/c web browsers
        // report active states inconsistently when they're called within
        // event handling code:
        // - https://bugs.chromium.org/p/chromium/issues/detail?id=635971
        // - https://bugzilla.mozilla.org/show_bug.cgi?id=1293741
        activationState.wasElementMadeActive = e && e.type === 'keydown' ? _this4.adapter_.isSurfaceActive() : true;
        if (activationState.wasElementMadeActive) {
          _this4.animateActivation_();
        } else {
          // Reset activation state immediately if element was not made active.
          _this4.activationState_ = _this4.defaultActivationState_();
        }
      });
    }
  }, {
    key: 'activate',
    value: function activate() {
      this.activate_(null);
    }
  }, {
    key: 'animateActivation_',
    value: function animateActivation_() {
      var _this5 = this;

      var _MDCRippleFoundation$2 = MDCRippleFoundation.strings,
          VAR_FG_TRANSLATE_START = _MDCRippleFoundation$2.VAR_FG_TRANSLATE_START,
          VAR_FG_TRANSLATE_END = _MDCRippleFoundation$2.VAR_FG_TRANSLATE_END;
      var _MDCRippleFoundation$3 = MDCRippleFoundation.cssClasses,
          BG_ACTIVE_FILL = _MDCRippleFoundation$3.BG_ACTIVE_FILL,
          FG_DEACTIVATION = _MDCRippleFoundation$3.FG_DEACTIVATION,
          FG_ACTIVATION = _MDCRippleFoundation$3.FG_ACTIVATION;
      var DEACTIVATION_TIMEOUT_MS = MDCRippleFoundation.numbers.DEACTIVATION_TIMEOUT_MS;


      var translateStart = '';
      var translateEnd = '';

      if (!this.adapter_.isUnbounded()) {
        var _getFgTranslationCoor = this.getFgTranslationCoordinates_(),
            startPoint = _getFgTranslationCoor.startPoint,
            endPoint = _getFgTranslationCoor.endPoint;

        translateStart = startPoint.x + 'px, ' + startPoint.y + 'px';
        translateEnd = endPoint.x + 'px, ' + endPoint.y + 'px';
      }

      this.adapter_.updateCssVariable(VAR_FG_TRANSLATE_START, translateStart);
      this.adapter_.updateCssVariable(VAR_FG_TRANSLATE_END, translateEnd);
      // Cancel any ongoing activation/deactivation animations
      clearTimeout(this.activationTimer_);
      this.rmBoundedActivationClasses_();
      this.adapter_.removeClass(FG_DEACTIVATION);

      // Force layout in order to re-trigger the animation.
      this.adapter_.computeBoundingRect();
      this.adapter_.addClass(BG_ACTIVE_FILL);
      this.adapter_.addClass(FG_ACTIVATION);
      this.activationTimer_ = setTimeout(function () {
        return _this5.activationTimerCallback_();
      }, DEACTIVATION_TIMEOUT_MS);
    }
  }, {
    key: 'getFgTranslationCoordinates_',
    value: function getFgTranslationCoordinates_() {
      var activationState = this.activationState_;
      var activationEvent = activationState.activationEvent,
          wasActivatedByPointer = activationState.wasActivatedByPointer;


      var startPoint = void 0;
      if (wasActivatedByPointer) {
        startPoint = (0, _util.getNormalizedEventCoords)(activationEvent, this.adapter_.getWindowPageOffset(), this.adapter_.computeBoundingRect());
      } else {
        startPoint = {
          x: this.frame_.width / 2,
          y: this.frame_.height / 2
        };
      }
      // Center the element around the start point.
      startPoint = {
        x: startPoint.x - this.initialSize_ / 2,
        y: startPoint.y - this.initialSize_ / 2
      };

      var endPoint = {
        x: this.frame_.width / 2 - this.initialSize_ / 2,
        y: this.frame_.height / 2 - this.initialSize_ / 2
      };

      return { startPoint: startPoint, endPoint: endPoint };
    }
  }, {
    key: 'runDeactivationUXLogicIfReady_',
    value: function runDeactivationUXLogicIfReady_() {
      var FG_DEACTIVATION = MDCRippleFoundation.cssClasses.FG_DEACTIVATION;
      var _activationState_ = this.activationState_,
          hasDeactivationUXRun = _activationState_.hasDeactivationUXRun,
          isActivated = _activationState_.isActivated;

      var activationHasEnded = hasDeactivationUXRun || !isActivated;
      if (activationHasEnded && this.activationAnimationHasEnded_) {
        this.rmBoundedActivationClasses_();
        // Note that we don't need to remove this here since it's removed on re-activation.
        this.adapter_.addClass(FG_DEACTIVATION);
      }
    }
  }, {
    key: 'rmBoundedActivationClasses_',
    value: function rmBoundedActivationClasses_() {
      var _MDCRippleFoundation$4 = MDCRippleFoundation.cssClasses,
          BG_ACTIVE_FILL = _MDCRippleFoundation$4.BG_ACTIVE_FILL,
          FG_ACTIVATION = _MDCRippleFoundation$4.FG_ACTIVATION;

      this.adapter_.removeClass(BG_ACTIVE_FILL);
      this.adapter_.removeClass(FG_ACTIVATION);
      this.activationAnimationHasEnded_ = false;
      this.adapter_.computeBoundingRect();
    }
  }, {
    key: 'deactivate_',
    value: function deactivate_(e) {
      var _this6 = this;

      var activationState = this.activationState_;
      // This can happen in scenarios such as when you have a keyup event that blurs the element.

      if (!activationState.isActivated) {
        return;
      }
      // Programmatic deactivation.
      if (activationState.isProgrammatic) {
        var evtObject = null;
        requestAnimationFrame(function () {
          return _this6.animateDeactivation_(evtObject, Object.assign({}, activationState));
        });
        this.activationState_ = this.defaultActivationState_();
        return;
      }

      var actualActivationType = DEACTIVATION_ACTIVATION_PAIRS[e.type];
      var expectedActivationType = activationState.activationEvent.type;
      // NOTE: Pointer events are tricky - https://patrickhlauke.github.io/touch/tests/results/
      // Essentially, what we need to do here is decouple the deactivation UX from the actual
      // deactivation state itself. This way, touch/pointer events in sequence do not trample one
      // another.
      var needsDeactivationUX = actualActivationType === expectedActivationType;
      var needsActualDeactivation = needsDeactivationUX;
      if (activationState.wasActivatedByPointer) {
        needsActualDeactivation = e.type === 'mouseup';
      }

      var state = Object.assign({}, activationState);
      requestAnimationFrame(function () {
        if (needsDeactivationUX) {
          _this6.activationState_.hasDeactivationUXRun = true;
          _this6.animateDeactivation_(e, state);
        }

        if (needsActualDeactivation) {
          _this6.activationState_ = _this6.defaultActivationState_();
        }
      });
    }
  }, {
    key: 'deactivate',
    value: function deactivate() {
      this.deactivate_(null);
    }
  }, {
    key: 'animateDeactivation_',
    value: function animateDeactivation_(e, _ref) {
      var wasActivatedByPointer = _ref.wasActivatedByPointer,
          wasElementMadeActive = _ref.wasElementMadeActive;
      var BG_FOCUSED = MDCRippleFoundation.cssClasses.BG_FOCUSED;

      if (wasActivatedByPointer || wasElementMadeActive) {
        // Remove class left over by element being focused
        this.adapter_.removeClass(BG_FOCUSED);
        this.runDeactivationUXLogicIfReady_();
      }
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      var _this7 = this;

      if (!this.isSupported_) {
        return;
      }
      this.removeEventListeners_();

      var _MDCRippleFoundation$5 = MDCRippleFoundation.cssClasses,
          ROOT = _MDCRippleFoundation$5.ROOT,
          UNBOUNDED = _MDCRippleFoundation$5.UNBOUNDED;

      requestAnimationFrame(function () {
        _this7.adapter_.removeClass(ROOT);
        _this7.adapter_.removeClass(UNBOUNDED);
        _this7.removeCssVars_();
      });
    }
  }, {
    key: 'removeEventListeners_',
    value: function removeEventListeners_() {
      var _this8 = this;

      this.listenerInfos_.forEach(function (info) {
        Object.keys(info).forEach(function (k) {
          _this8.adapter_.deregisterInteractionHandler(info[k], _this8.listeners_[k]);
        });
      });
      this.adapter_.deregisterResizeHandler(this.resizeHandler_);
    }
  }, {
    key: 'removeCssVars_',
    value: function removeCssVars_() {
      var _this9 = this;

      var strings = MDCRippleFoundation.strings;

      Object.keys(strings).forEach(function (k) {
        if (k.indexOf('VAR_') === 0) {
          _this9.adapter_.updateCssVariable(strings[k], null);
        }
      });
    }
  }, {
    key: 'layout',
    value: function layout() {
      var _this10 = this;

      if (this.layoutFrame_) {
        cancelAnimationFrame(this.layoutFrame_);
      }
      this.layoutFrame_ = requestAnimationFrame(function () {
        _this10.layoutInternal_();
        _this10.layoutFrame_ = 0;
      });
    }
  }, {
    key: 'layoutInternal_',
    value: function layoutInternal_() {
      this.frame_ = this.adapter_.computeBoundingRect();

      var maxDim = Math.max(this.frame_.height, this.frame_.width);
      var surfaceDiameter = Math.sqrt(Math.pow(this.frame_.width, 2) + Math.pow(this.frame_.height, 2));

      // 60% of the largest dimension of the surface
      this.initialSize_ = maxDim * MDCRippleFoundation.numbers.INITIAL_ORIGIN_SCALE;

      // Diameter of the surface + 10px
      this.maxRadius_ = surfaceDiameter + MDCRippleFoundation.numbers.PADDING;
      this.fgScale_ = this.maxRadius_ / this.initialSize_;
      this.xfDuration_ = 1000 * Math.sqrt(this.maxRadius_ / 1024);
      this.updateLayoutCssVars_();
    }
  }, {
    key: 'updateLayoutCssVars_',
    value: function updateLayoutCssVars_() {
      var _MDCRippleFoundation$6 = MDCRippleFoundation.strings,
          VAR_SURFACE_WIDTH = _MDCRippleFoundation$6.VAR_SURFACE_WIDTH,
          VAR_SURFACE_HEIGHT = _MDCRippleFoundation$6.VAR_SURFACE_HEIGHT,
          VAR_FG_SIZE = _MDCRippleFoundation$6.VAR_FG_SIZE,
          VAR_LEFT = _MDCRippleFoundation$6.VAR_LEFT,
          VAR_TOP = _MDCRippleFoundation$6.VAR_TOP,
          VAR_FG_SCALE = _MDCRippleFoundation$6.VAR_FG_SCALE;


      this.adapter_.updateCssVariable(VAR_SURFACE_WIDTH, this.frame_.width + 'px');
      this.adapter_.updateCssVariable(VAR_SURFACE_HEIGHT, this.frame_.height + 'px');
      this.adapter_.updateCssVariable(VAR_FG_SIZE, this.initialSize_ + 'px');
      this.adapter_.updateCssVariable(VAR_FG_SCALE, this.fgScale_);

      if (this.adapter_.isUnbounded()) {
        this.unboundedCoords_ = {
          left: Math.round(this.frame_.width / 2 - this.initialSize_ / 2),
          top: Math.round(this.frame_.height / 2 - this.initialSize_ / 2)
        };

        this.adapter_.updateCssVariable(VAR_LEFT, this.unboundedCoords_.left + 'px');
        this.adapter_.updateCssVariable(VAR_TOP, this.unboundedCoords_.top + 'px');
      }
    }
  }]);

  return MDCRippleFoundation;
}(_base.MDCFoundation);

exports.default = MDCRippleFoundation;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var cssClasses = exports.cssClasses = {
  ROOT: 'mdc-select',
  OPEN: 'mdc-select--open',
  DISABLED: 'mdc-select--disabled'
};

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _base = __webpack_require__(0);

var _constants = __webpack_require__(47);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2016 Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var OPENER_KEYS = [{ key: 'ArrowUp', keyCode: 38, forType: 'keydown' }, { key: 'ArrowDown', keyCode: 40, forType: 'keydown' }, { key: 'Space', keyCode: 32, forType: 'keyup' }];

var MDCSelectFoundation = function (_MDCFoundation) {
  _inherits(MDCSelectFoundation, _MDCFoundation);

  _createClass(MDCSelectFoundation, null, [{
    key: 'cssClasses',
    get: function get() {
      return _constants.cssClasses;
    }
  }, {
    key: 'defaultAdapter',
    get: function get() {
      return {
        addClass: function addClass() /* className: string */{},
        removeClass: function removeClass() /* className: string */{},
        setAttr: function setAttr() /* attr: string, value: string */{},
        rmAttr: function rmAttr() /* attr: string */{},
        computeBoundingRect: function computeBoundingRect() {
          return (/* {left: number, top: number} */{ left: 0, top: 0 }
          );
        },
        registerInteractionHandler: function registerInteractionHandler() /* type: string, handler: EventListener */{},
        deregisterInteractionHandler: function deregisterInteractionHandler() /* type: string, handler: EventListener */{},
        focus: function focus() {},
        makeTabbable: function makeTabbable() {},
        makeUntabbable: function makeUntabbable() {},
        getComputedStyleValue: function getComputedStyleValue() {
          return (/* propertyName: string */ /* string */''
          );
        },
        setStyle: function setStyle() /* propertyName: string, value: string */{},
        create2dRenderingContext: function create2dRenderingContext() {
          return (/* {font: string, measureText: (string) => {width: number}} */{
              font: '',
              measureText: function measureText() {
                return { width: 0 };
              }
            }
          );
        },
        setMenuElStyle: function setMenuElStyle() /* propertyName: string, value: string */{},
        setMenuElAttr: function setMenuElAttr() /* attr: string, value: string */{},
        rmMenuElAttr: function rmMenuElAttr() /* attr: string */{},
        getMenuElOffsetHeight: function getMenuElOffsetHeight() {
          return (/* number */0
          );
        },
        openMenu: function openMenu() /* focusIndex: number */{},
        isMenuOpen: function isMenuOpen() {
          return (/* boolean */false
          );
        },
        setSelectedTextContent: function setSelectedTextContent() /* textContent: string */{},
        getNumberOfOptions: function getNumberOfOptions() {
          return (/* number */0
          );
        },
        getTextForOptionAtIndex: function getTextForOptionAtIndex() {
          return (/* index: number */ /* string */''
          );
        },
        getValueForOptionAtIndex: function getValueForOptionAtIndex() {
          return (/* index: number */ /* string */''
          );
        },
        setAttrForOptionAtIndex: function setAttrForOptionAtIndex() /* index: number, attr: string, value: string */{},
        rmAttrForOptionAtIndex: function rmAttrForOptionAtIndex() /* index: number, attr: string */{},
        getOffsetTopForOptionAtIndex: function getOffsetTopForOptionAtIndex() {
          return (/* index: number */ /* number */0
          );
        },
        registerMenuInteractionHandler: function registerMenuInteractionHandler() /* type: string, handler: EventListener */{},
        deregisterMenuInteractionHandler: function deregisterMenuInteractionHandler() /* type: string, handler: EventListener */{},
        notifyChange: function notifyChange() {},
        getWindowInnerHeight: function getWindowInnerHeight() {
          return (/* number */0
          );
        }
      };
    }
  }]);

  function MDCSelectFoundation(adapter) {
    _classCallCheck(this, MDCSelectFoundation);

    var _this = _possibleConstructorReturn(this, (MDCSelectFoundation.__proto__ || Object.getPrototypeOf(MDCSelectFoundation)).call(this, Object.assign(MDCSelectFoundation.defaultAdapter, adapter)));

    _this.ctx_ = null;
    _this.selectedIndex_ = -1;
    _this.disabled_ = false;
    _this.displayHandler_ = function (evt) {
      evt.preventDefault();
      if (!_this.adapter_.isMenuOpen()) {
        _this.open_();
      }
    };
    _this.displayViaKeyboardHandler_ = function (evt) {
      return _this.handleDisplayViaKeyboard_(evt);
    };
    _this.selectionHandler_ = function (_ref) {
      var detail = _ref.detail;
      var index = detail.index;

      _this.close_();
      if (index !== _this.selectedIndex_) {
        _this.setSelectedIndex(index);
        _this.adapter_.notifyChange();
      }
    };
    _this.cancelHandler_ = function () {
      _this.close_();
    };
    return _this;
  }

  _createClass(MDCSelectFoundation, [{
    key: 'init',
    value: function init() {
      this.ctx_ = this.adapter_.create2dRenderingContext();
      this.adapter_.registerInteractionHandler('click', this.displayHandler_);
      this.adapter_.registerInteractionHandler('keydown', this.displayViaKeyboardHandler_);
      this.adapter_.registerInteractionHandler('keyup', this.displayViaKeyboardHandler_);
      this.adapter_.registerMenuInteractionHandler('MDCSimpleMenu:selected', this.selectionHandler_);
      this.adapter_.registerMenuInteractionHandler('MDCSimpleMenu:cancel', this.cancelHandler_);
      this.resize();
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      // Drop reference to context object to prevent potential leaks
      this.ctx_ = null;
      this.adapter_.deregisterInteractionHandler('click', this.displayHandler_);
      this.adapter_.deregisterInteractionHandler('keydown', this.displayViaKeyboardHandler_);
      this.adapter_.deregisterInteractionHandler('keyup', this.displayViaKeyboardHandler_);
      this.adapter_.deregisterMenuInteractionHandler('MDCSimpleMenu:selected', this.selectionHandler_);
      this.adapter_.deregisterMenuInteractionHandler('MDCSimpleMenu:cancel', this.cancelHandler_);
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      return this.selectedIndex_ >= 0 ? this.adapter_.getValueForOptionAtIndex(this.selectedIndex_) : '';
    }
  }, {
    key: 'getSelectedIndex',
    value: function getSelectedIndex() {
      return this.selectedIndex_;
    }
  }, {
    key: 'setSelectedIndex',
    value: function setSelectedIndex(index) {
      var prevSelectedIndex = this.selectedIndex_;
      if (prevSelectedIndex >= 0) {
        this.adapter_.rmAttrForOptionAtIndex(this.selectedIndex_, 'aria-selected');
      }

      this.selectedIndex_ = index >= 0 && index < this.adapter_.getNumberOfOptions() ? index : -1;
      var selectedTextContent = '';
      if (this.selectedIndex_ >= 0) {
        selectedTextContent = this.adapter_.getTextForOptionAtIndex(this.selectedIndex_).trim();
        this.adapter_.setAttrForOptionAtIndex(this.selectedIndex_, 'aria-selected', 'true');
      }
      this.adapter_.setSelectedTextContent(selectedTextContent);
    }
  }, {
    key: 'isDisabled',
    value: function isDisabled() {
      return this.disabled_;
    }
  }, {
    key: 'setDisabled',
    value: function setDisabled(disabled) {
      var DISABLED = MDCSelectFoundation.cssClasses.DISABLED;

      this.disabled_ = disabled;
      if (this.disabled_) {
        this.adapter_.addClass(DISABLED);
        this.adapter_.setAttr('aria-disabled', 'true');
        this.adapter_.makeUntabbable();
      } else {
        this.adapter_.removeClass(DISABLED);
        this.adapter_.rmAttr('aria-disabled');
        this.adapter_.makeTabbable();
      }
    }
  }, {
    key: 'resize',
    value: function resize() {
      var font = this.adapter_.getComputedStyleValue('font');
      var letterSpacing = parseFloat(this.adapter_.getComputedStyleValue('letter-spacing'));
      if (font) {
        this.ctx_.font = font;
      } else {
        var primaryFontFamily = this.adapter_.getComputedStyleValue('font-family').split(',')[0];
        var fontSize = this.adapter_.getComputedStyleValue('font-size');
        this.ctx_.font = fontSize + ' ' + primaryFontFamily;
      }

      var maxTextLength = 0;
      for (var i = 0, l = this.adapter_.getNumberOfOptions(); i < l; i++) {
        var txt = this.adapter_.getTextForOptionAtIndex(i).trim();

        var _ctx_$measureText = this.ctx_.measureText(txt),
            width = _ctx_$measureText.width;

        var addedSpace = letterSpacing * txt.length;
        maxTextLength = Math.max(maxTextLength, Math.ceil(width + addedSpace));
      }
      this.adapter_.setStyle('width', maxTextLength + 'px');
    }
  }, {
    key: 'open_',
    value: function open_() {
      var OPEN = MDCSelectFoundation.cssClasses.OPEN;

      var focusIndex = this.selectedIndex_ < 0 ? 0 : this.selectedIndex_;

      var _computeMenuStylesFor = this.computeMenuStylesForOpenAtIndex_(focusIndex),
          left = _computeMenuStylesFor.left,
          top = _computeMenuStylesFor.top,
          transformOrigin = _computeMenuStylesFor.transformOrigin;

      this.adapter_.setMenuElStyle('left', left);
      this.adapter_.setMenuElStyle('top', top);
      this.adapter_.setMenuElStyle('transform-origin', transformOrigin);
      this.adapter_.addClass(OPEN);
      this.adapter_.openMenu(focusIndex);
    }
  }, {
    key: 'computeMenuStylesForOpenAtIndex_',
    value: function computeMenuStylesForOpenAtIndex_(index) {
      var innerHeight = this.adapter_.getWindowInnerHeight();

      var _adapter_$computeBoun = this.adapter_.computeBoundingRect(),
          left = _adapter_$computeBoun.left,
          top = _adapter_$computeBoun.top;

      this.adapter_.setMenuElAttr('aria-hidden', 'true');
      this.adapter_.setMenuElStyle('display', 'block');
      var menuHeight = this.adapter_.getMenuElOffsetHeight();
      var itemOffsetTop = this.adapter_.getOffsetTopForOptionAtIndex(index);
      this.adapter_.setMenuElStyle('display', '');
      this.adapter_.rmMenuElAttr('aria-hidden');

      var adjustedTop = top - itemOffsetTop;
      var adjustedHeight = menuHeight - itemOffsetTop;
      var overflowsTop = adjustedTop < 0;
      var overflowsBottom = adjustedTop + adjustedHeight > innerHeight;
      if (overflowsTop) {
        adjustedTop = 0;
      } else if (overflowsBottom) {
        adjustedTop = Math.max(0, adjustedTop - adjustedHeight);
      }

      return {
        left: left + 'px',
        top: adjustedTop + 'px',
        transformOrigin: 'center ' + itemOffsetTop + 'px'
      };
    }
  }, {
    key: 'close_',
    value: function close_() {
      var OPEN = MDCSelectFoundation.cssClasses.OPEN;

      this.adapter_.removeClass(OPEN);
      this.adapter_.focus();
    }
  }, {
    key: 'handleDisplayViaKeyboard_',
    value: function handleDisplayViaKeyboard_(evt) {
      // We use a hard-coded 2 instead of Event.AT_TARGET to avoid having to reference a browser
      // global.
      var EVENT_PHASE_AT_TARGET = 2;
      if (evt.eventPhase !== EVENT_PHASE_AT_TARGET) {
        return;
      }

      // Prevent pressing space down from scrolling the page
      var isSpaceDown = evt.type === 'keydown' && (evt.key === 'Space' || evt.keyCode === 32);
      if (isSpaceDown) {
        evt.preventDefault();
      }

      var isOpenerKey = OPENER_KEYS.some(function (_ref2) {
        var key = _ref2.key,
            keyCode = _ref2.keyCode,
            forType = _ref2.forType;

        return evt.type === forType && (evt.key === key || evt.keyCode === keyCode);
      });
      if (isOpenerKey) {
        this.displayHandler_(evt);
      }
    }
  }]);

  return MDCSelectFoundation;
}(_base.MDCFoundation);

exports.default = MDCSelectFoundation;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MDCSelect = exports.MDCSelectFoundation = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _base = __webpack_require__(0);

var _menu = __webpack_require__(7);

var _foundation = __webpack_require__(48);

var _foundation2 = _interopRequireDefault(_foundation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2016 Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

exports.MDCSelectFoundation = _foundation2.default;

var MDCSelect = exports.MDCSelect = function (_MDCComponent) {
  _inherits(MDCSelect, _MDCComponent);

  function MDCSelect() {
    _classCallCheck(this, MDCSelect);

    return _possibleConstructorReturn(this, (MDCSelect.__proto__ || Object.getPrototypeOf(MDCSelect)).apply(this, arguments));
  }

  _createClass(MDCSelect, [{
    key: 'item',
    value: function item(index) {
      return this.options[index] || null;
    }
  }, {
    key: 'nameditem',
    value: function nameditem(key) {
      // NOTE: IE11 precludes us from using Array.prototype.find
      for (var i = 0, options = this.options, option; option = options[i]; i++) {
        if (option.id === key || option.getAttribute('name') === key) {
          return option;
        }
      }
      return null;
    }
  }, {
    key: 'initialize',
    value: function initialize() {
      var menuFactory = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (el) {
        return new _menu.MDCSimpleMenu(el);
      };

      this.menuEl_ = this.root_.querySelector('.mdc-select__menu');
      this.menu_ = menuFactory(this.menuEl_);
      this.selectedText_ = this.root_.querySelector('.mdc-select__selected-text');
    }
  }, {
    key: 'getDefaultFoundation',
    value: function getDefaultFoundation() {
      var _this2 = this;

      return new _foundation2.default({
        addClass: function addClass(className) {
          return _this2.root_.classList.add(className);
        },
        removeClass: function removeClass(className) {
          return _this2.root_.classList.remove(className);
        },
        setAttr: function setAttr(attr, value) {
          return _this2.root_.setAttribute(attr, value);
        },
        rmAttr: function rmAttr(attr, value) {
          return _this2.root_.removeAttribute(attr, value);
        },
        computeBoundingRect: function computeBoundingRect() {
          return _this2.root_.getBoundingClientRect();
        },
        registerInteractionHandler: function registerInteractionHandler(type, handler) {
          return _this2.root_.addEventListener(type, handler);
        },
        deregisterInteractionHandler: function deregisterInteractionHandler(type, handler) {
          return _this2.root_.removeEventListener(type, handler);
        },
        focus: function focus() {
          return _this2.root_.focus();
        },
        makeTabbable: function makeTabbable() {
          _this2.root_.tabIndex = 0;
        },
        makeUntabbable: function makeUntabbable() {
          _this2.root_.tabIndex = -1;
        },
        getComputedStyleValue: function getComputedStyleValue(prop) {
          return window.getComputedStyle(_this2.root_).getPropertyValue(prop);
        },
        setStyle: function setStyle(propertyName, value) {
          return _this2.root_.style.setProperty(propertyName, value);
        },
        create2dRenderingContext: function create2dRenderingContext() {
          return document.createElement('canvas').getContext('2d');
        },
        setMenuElStyle: function setMenuElStyle(propertyName, value) {
          return _this2.menuEl_.style.setProperty(propertyName, value);
        },
        setMenuElAttr: function setMenuElAttr(attr, value) {
          return _this2.menuEl_.setAttribute(attr, value);
        },
        rmMenuElAttr: function rmMenuElAttr(attr) {
          return _this2.menuEl_.removeAttribute(attr);
        },
        getMenuElOffsetHeight: function getMenuElOffsetHeight() {
          return _this2.menuEl_.offsetHeight;
        },
        openMenu: function openMenu(focusIndex) {
          return _this2.menu_.show({ focusIndex: focusIndex });
        },
        isMenuOpen: function isMenuOpen() {
          return _this2.menu_.open;
        },
        setSelectedTextContent: function setSelectedTextContent(selectedTextContent) {
          _this2.selectedText_.textContent = selectedTextContent;
        },
        getNumberOfOptions: function getNumberOfOptions() {
          return _this2.options.length;
        },
        getTextForOptionAtIndex: function getTextForOptionAtIndex(index) {
          return _this2.options[index].textContent;
        },
        getValueForOptionAtIndex: function getValueForOptionAtIndex(index) {
          return _this2.options[index].id || _this2.options[index].textContent;
        },
        setAttrForOptionAtIndex: function setAttrForOptionAtIndex(index, attr, value) {
          return _this2.options[index].setAttribute(attr, value);
        },
        rmAttrForOptionAtIndex: function rmAttrForOptionAtIndex(index, attr) {
          return _this2.options[index].removeAttribute(attr);
        },
        getOffsetTopForOptionAtIndex: function getOffsetTopForOptionAtIndex(index) {
          return _this2.options[index].offsetTop;
        },
        registerMenuInteractionHandler: function registerMenuInteractionHandler(type, handler) {
          return _this2.menu_.listen(type, handler);
        },
        deregisterMenuInteractionHandler: function deregisterMenuInteractionHandler(type, handler) {
          return _this2.menu_.unlisten(type, handler);
        },
        notifyChange: function notifyChange() {
          return _this2.emit('MDCSelect:change', _this2);
        },
        getWindowInnerHeight: function getWindowInnerHeight() {
          return window.innerHeight;
        }
      });
    }
  }, {
    key: 'initialSyncWithDOM',
    value: function initialSyncWithDOM() {
      var selectedOption = this.selectedOptions[0];
      var idx = selectedOption ? this.options.indexOf(selectedOption) : -1;
      if (idx >= 0) {
        this.selectedIndex = idx;
      }

      if (this.root_.getAttribute('aria-disabled') === 'true') {
        this.disabled = true;
      }
    }
  }, {
    key: 'value',
    get: function get() {
      return this.foundation_.getValue();
    }
  }, {
    key: 'options',
    get: function get() {
      return this.menu_.items;
    }
  }, {
    key: 'selectedOptions',
    get: function get() {
      return this.root_.querySelectorAll('[aria-selected]');
    }
  }, {
    key: 'selectedIndex',
    get: function get() {
      return this.foundation_.getSelectedIndex();
    },
    set: function set(selectedIndex) {
      this.foundation_.setSelectedIndex(selectedIndex);
    }
  }, {
    key: 'disabled',
    get: function get() {
      return this.foundation_.isDisabled();
    },
    set: function set(disabled) {
      this.foundation_.setDisabled(disabled);
    }
  }], [{
    key: 'attachTo',
    value: function attachTo(root) {
      return new MDCSelect(root);
    }
  }]);

  return MDCSelect;
}(_base.MDCComponent);

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var cssClasses = exports.cssClasses = {
  ROOT: 'mdc-snackbar',
  TEXT: 'mdc-snackbar__text',
  ACTION_WRAPPER: 'mdc-snackbar__action-wrapper',
  ACTION_BUTTON: 'mdc-snackbar__action-button',
  ACTIVE: 'mdc-snackbar--active',
  MULTILINE: 'mdc-snackbar--multiline',
  ACTION_ON_BOTTOM: 'mdc-snackbar--action-on-bottom'
};

var strings = exports.strings = {
  TEXT_SELECTOR: '.mdc-snackbar__text',
  ACTION_WRAPPER_SELECTOR: '.mdc-snackbar__action-wrapper',
  ACTION_BUTTON_SELECTOR: '.mdc-snackbar__action-button'
};

var numbers = exports.numbers = {
  MESSAGE_TIMEOUT: 2750
};

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _base = __webpack_require__(0);

var _constants = __webpack_require__(50);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2016 Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var MDCSnackbarFoundation = function (_MDCFoundation) {
  _inherits(MDCSnackbarFoundation, _MDCFoundation);

  _createClass(MDCSnackbarFoundation, [{
    key: 'active',
    get: function get() {
      return this.active_;
    }
  }], [{
    key: 'cssClasses',
    get: function get() {
      return _constants.cssClasses;
    }
  }, {
    key: 'strings',
    get: function get() {
      return _constants.strings;
    }
  }, {
    key: 'defaultAdapter',
    get: function get() {
      return {
        addClass: function addClass() /* className: string */{},
        removeClass: function removeClass() /* className: string */{},
        setAriaHidden: function setAriaHidden() {},
        unsetAriaHidden: function unsetAriaHidden() {},
        setMessageText: function setMessageText() /* message: string */{},
        setActionText: function setActionText() /* actionText: string */{},
        setActionAriaHidden: function setActionAriaHidden() {},
        unsetActionAriaHidden: function unsetActionAriaHidden() {},
        registerActionClickHandler: function registerActionClickHandler() /* handler: EventListener */{},
        deregisterActionClickHandler: function deregisterActionClickHandler() /* handler: EventListener */{},
        registerTransitionEndHandler: function registerTransitionEndHandler() /* handler: EventListener */{},
        deregisterTransitionEndHandler: function deregisterTransitionEndHandler() /* handler: EventListener */{}
      };
    }
  }]);

  function MDCSnackbarFoundation(adapter) {
    _classCallCheck(this, MDCSnackbarFoundation);

    var _this = _possibleConstructorReturn(this, (MDCSnackbarFoundation.__proto__ || Object.getPrototypeOf(MDCSnackbarFoundation)).call(this, Object.assign(MDCSnackbarFoundation.defaultAdapter, adapter)));

    _this.active_ = false;
    _this.queue_ = [];
    _this.actionClickHandler_ = function () {
      return _this.invokeAction_();
    };
    return _this;
  }

  _createClass(MDCSnackbarFoundation, [{
    key: 'init',
    value: function init() {
      this.adapter_.registerActionClickHandler(this.actionClickHandler_);
      this.adapter_.setAriaHidden();
      this.adapter_.setActionAriaHidden();
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      this.adapter_.deregisterActionClickHandler(this.actionClickHandler_);
    }
  }, {
    key: 'show',
    value: function show(data) {
      if (!data) {
        throw new Error('Please provide a data object with at least a message to display.');
      }
      if (!data.message) {
        throw new Error('Please provide a message to be displayed.');
      }
      if (data.actionHandler && !data.actionText) {
        throw new Error('Please provide action text with the handler.');
      }

      if (this.active) {
        this.queue_.push(data);
        return;
      }

      var ACTIVE = _constants.cssClasses.ACTIVE,
          MULTILINE = _constants.cssClasses.MULTILINE,
          ACTION_ON_BOTTOM = _constants.cssClasses.ACTION_ON_BOTTOM;
      var MESSAGE_TIMEOUT = _constants.numbers.MESSAGE_TIMEOUT;


      this.adapter_.setMessageText(data.message);

      if (data.multiline) {
        this.adapter_.addClass(MULTILINE);
        if (data.actionOnBottom) {
          this.adapter_.addClass(ACTION_ON_BOTTOM);
        }
      }

      if (data.actionHandler) {
        this.adapter_.setActionText(data.actionText);
        this.actionHandler_ = data.actionHandler;
        this.setActionHidden_(false);
      } else {
        this.setActionHidden_(true);
        this.actionHandler_ = null;
        this.adapter_.setActionText(null);
      }

      this.active_ = true;
      this.adapter_.addClass(ACTIVE);
      this.adapter_.unsetAriaHidden();

      setTimeout(this.cleanup_.bind(this), data.timeout || MESSAGE_TIMEOUT);
    }
  }, {
    key: 'invokeAction_',
    value: function invokeAction_() {
      if (!this.actionHandler_) {
        return;
      }

      this.actionHandler_();
    }
  }, {
    key: 'cleanup_',
    value: function cleanup_() {
      var _this2 = this;

      var ACTIVE = _constants.cssClasses.ACTIVE,
          MULTILINE = _constants.cssClasses.MULTILINE,
          ACTION_ON_BOTTOM = _constants.cssClasses.ACTION_ON_BOTTOM;


      this.adapter_.removeClass(ACTIVE);

      var handler = function handler() {
        _this2.adapter_.deregisterTransitionEndHandler(handler);
        _this2.adapter_.removeClass(MULTILINE);
        _this2.adapter_.removeClass(ACTION_ON_BOTTOM);
        _this2.setActionHidden_(true);
        _this2.adapter_.setMessageText(null);
        _this2.adapter_.setActionText(null);
        _this2.adapter_.setAriaHidden();
        _this2.active_ = false;
        _this2.showNext_();
      };

      this.adapter_.registerTransitionEndHandler(handler);
    }
  }, {
    key: 'showNext_',
    value: function showNext_() {
      if (!this.queue_.length) {
        return;
      }

      this.show(this.queue_.shift());
    }
  }, {
    key: 'setActionHidden_',
    value: function setActionHidden_(isHidden) {
      if (isHidden) {
        this.adapter_.setActionAriaHidden();
      } else {
        this.adapter_.unsetActionAriaHidden();
      }
    }
  }]);

  return MDCSnackbarFoundation;
}(_base.MDCFoundation);

exports.default = MDCSnackbarFoundation;

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MDCSnackbar = exports.MDCSnackbarFoundation = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _base = __webpack_require__(0);

var _foundation = __webpack_require__(51);

var _foundation2 = _interopRequireDefault(_foundation);

var _animation = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2016 Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

exports.MDCSnackbarFoundation = _foundation2.default;

var MDCSnackbar = exports.MDCSnackbar = function (_MDCComponent) {
  _inherits(MDCSnackbar, _MDCComponent);

  function MDCSnackbar() {
    _classCallCheck(this, MDCSnackbar);

    return _possibleConstructorReturn(this, (MDCSnackbar.__proto__ || Object.getPrototypeOf(MDCSnackbar)).apply(this, arguments));
  }

  _createClass(MDCSnackbar, [{
    key: 'show',
    value: function show(data) {
      this.foundation_.show(data);
    }
  }, {
    key: 'getDefaultFoundation',
    value: function getDefaultFoundation() {
      var _this2 = this;

      var _MDCSnackbarFoundatio = _foundation2.default.strings,
          TEXT_SELECTOR = _MDCSnackbarFoundatio.TEXT_SELECTOR,
          ACTION_BUTTON_SELECTOR = _MDCSnackbarFoundatio.ACTION_BUTTON_SELECTOR;

      var getText = function getText() {
        return _this2.root_.querySelector(TEXT_SELECTOR);
      };
      var getActionButton = function getActionButton() {
        return _this2.root_.querySelector(ACTION_BUTTON_SELECTOR);
      };

      /* eslint brace-style: "off" */
      return new _foundation2.default({
        addClass: function addClass(className) {
          return _this2.root_.classList.add(className);
        },
        removeClass: function removeClass(className) {
          return _this2.root_.classList.remove(className);
        },
        setAriaHidden: function setAriaHidden() {
          return _this2.root_.setAttribute('aria-hidden', 'true');
        },
        unsetAriaHidden: function unsetAriaHidden() {
          return _this2.root_.removeAttribute('aria-hidden');
        },
        setActionAriaHidden: function setActionAriaHidden() {
          return getActionButton().setAttribute('aria-hidden', 'true');
        },
        unsetActionAriaHidden: function unsetActionAriaHidden() {
          return getActionButton().removeAttribute('aria-hidden');
        },
        setActionText: function setActionText(text) {
          getActionButton().textContent = text;
        },
        setMessageText: function setMessageText(text) {
          getText().textContent = text;
        },
        registerActionClickHandler: function registerActionClickHandler(handler) {
          return getActionButton().addEventListener('click', handler);
        },
        deregisterActionClickHandler: function deregisterActionClickHandler(handler) {
          return getActionButton().removeEventListener('click', handler);
        },
        registerTransitionEndHandler: function registerTransitionEndHandler(handler) {
          return _this2.root_.addEventListener((0, _animation.getCorrectEventName)(window, 'transitionend'), handler);
        },
        deregisterTransitionEndHandler: function deregisterTransitionEndHandler(handler) {
          return _this2.root_.removeEventListener((0, _animation.getCorrectEventName)(window, 'transitionend'), handler);
        }
      });
    }
  }], [{
    key: 'attachTo',
    value: function attachTo(root) {
      return new MDCSnackbar(root);
    }
  }]);

  return MDCSnackbar;
}(_base.MDCComponent);

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var strings = exports.strings = {
  ARIA_HIDDEN: 'aria-hidden',
  ROLE: 'role',
  INPUT_SELECTOR: '.mdc-textfield__input',
  LABEL_SELECTOR: '.mdc-textfield__label'
};

var cssClasses = exports.cssClasses = {
  ROOT: 'mdc-textfield',
  UPGRADED: 'mdc-textfield--upgraded',
  DISABLED: 'mdc-textfield--disabled',
  FOCUSED: 'mdc-textfield--focused',
  INVALID: 'mdc-textfield--invalid',
  HELPTEXT_PERSISTENT: 'mdc-textfield-helptext--persistent',
  HELPTEXT_VALIDATION_MSG: 'mdc-textfield-helptext--validation-msg',
  LABEL_FLOAT_ABOVE: 'mdc-textfield__label--float-above'
};

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _base = __webpack_require__(0);

var _constants = __webpack_require__(53);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2016 Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var MDCTextfieldFoundation = function (_MDCFoundation) {
  _inherits(MDCTextfieldFoundation, _MDCFoundation);

  _createClass(MDCTextfieldFoundation, null, [{
    key: 'cssClasses',
    get: function get() {
      return _constants.cssClasses;
    }
  }, {
    key: 'strings',
    get: function get() {
      return _constants.strings;
    }
  }, {
    key: 'defaultAdapter',
    get: function get() {
      return {
        addClass: function addClass() /* className: string */{},
        removeClass: function removeClass() /* className: string */{},
        addClassToLabel: function addClassToLabel() /* className: string */{},
        removeClassFromLabel: function removeClassFromLabel() /* className: string */{},
        addClassToHelptext: function addClassToHelptext() /* className: string */{},
        removeClassFromHelptext: function removeClassFromHelptext() /* className: string */{},
        helptextHasClass: function helptextHasClass() {
          return (/* className: string */ /* boolean */false
          );
        },
        registerInputFocusHandler: function registerInputFocusHandler() /* handler: EventListener */{},
        deregisterInputFocusHandler: function deregisterInputFocusHandler() /* handler: EventListener */{},
        registerInputBlurHandler: function registerInputBlurHandler() /* handler: EventListener */{},
        deregisterInputBlurHandler: function deregisterInputBlurHandler() /* handler: EventListener */{},
        registerInputInputHandler: function registerInputInputHandler() /* handler: EventListener */{},
        deregisterInputInputHandler: function deregisterInputInputHandler() /* handler: EventListener */{},
        registerInputKeydownHandler: function registerInputKeydownHandler() /* handler: EventListener */{},
        deregisterInputKeydownHandler: function deregisterInputKeydownHandler() /* handler: EventListener */{},
        setHelptextAttr: function setHelptextAttr() /* name: string, value: string */{},
        removeHelptextAttr: function removeHelptextAttr() /* name: string */{},
        getNativeInput: function getNativeInput() {
          return (/* HTMLInputElement */{}
          );
        }
      };
    }
  }]);

  function MDCTextfieldFoundation() {
    var adapter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, MDCTextfieldFoundation);

    var _this = _possibleConstructorReturn(this, (MDCTextfieldFoundation.__proto__ || Object.getPrototypeOf(MDCTextfieldFoundation)).call(this, Object.assign(MDCTextfieldFoundation.defaultAdapter, adapter)));

    _this.receivedUserInput_ = false;
    _this.inputFocusHandler_ = function () {
      return _this.activateFocus_();
    };
    _this.inputBlurHandler_ = function () {
      return _this.deactivateFocus_();
    };
    _this.inputInputHandler_ = function () {
      return _this.autoCompleteFocus_();
    };
    _this.inputKeydownHandler_ = function () {
      return _this.receivedUserInput_ = true;
    };
    return _this;
  }

  _createClass(MDCTextfieldFoundation, [{
    key: 'init',
    value: function init() {
      this.adapter_.addClass(MDCTextfieldFoundation.cssClasses.UPGRADED);
      this.adapter_.registerInputFocusHandler(this.inputFocusHandler_);
      this.adapter_.registerInputBlurHandler(this.inputBlurHandler_);
      this.adapter_.registerInputInputHandler(this.inputInputHandler_);
      this.adapter_.registerInputKeydownHandler(this.inputKeydownHandler_);

      // Ensure label does not collide with any pre-filled value.
      if (this.getNativeInput_().value) {
        this.adapter_.addClassToLabel(MDCTextfieldFoundation.cssClasses.LABEL_FLOAT_ABOVE);
      }
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      this.adapter_.removeClass(MDCTextfieldFoundation.cssClasses.UPGRADED);
      this.adapter_.deregisterInputFocusHandler(this.inputFocusHandler_);
      this.adapter_.deregisterInputBlurHandler(this.inputBlurHandler_);
      this.adapter_.deregisterInputInputHandler(this.inputInputHandler_);
      this.adapter_.deregisterInputKeydownHandler(this.inputKeydownHandler_);
    }
  }, {
    key: 'activateFocus_',
    value: function activateFocus_() {
      var _MDCTextfieldFoundati = MDCTextfieldFoundation.cssClasses,
          FOCUSED = _MDCTextfieldFoundati.FOCUSED,
          LABEL_FLOAT_ABOVE = _MDCTextfieldFoundati.LABEL_FLOAT_ABOVE;

      this.adapter_.addClass(FOCUSED);
      this.adapter_.addClassToLabel(LABEL_FLOAT_ABOVE);
      this.showHelptext_();
    }
  }, {
    key: 'autoCompleteFocus_',
    value: function autoCompleteFocus_() {
      if (!this.receivedUserInput_) {
        this.activateFocus_();
      }
    }
  }, {
    key: 'showHelptext_',
    value: function showHelptext_() {
      var ARIA_HIDDEN = MDCTextfieldFoundation.strings.ARIA_HIDDEN;

      this.adapter_.removeHelptextAttr(ARIA_HIDDEN);
    }
  }, {
    key: 'deactivateFocus_',
    value: function deactivateFocus_() {
      var _MDCTextfieldFoundati2 = MDCTextfieldFoundation.cssClasses,
          FOCUSED = _MDCTextfieldFoundati2.FOCUSED,
          INVALID = _MDCTextfieldFoundati2.INVALID,
          LABEL_FLOAT_ABOVE = _MDCTextfieldFoundati2.LABEL_FLOAT_ABOVE;

      var input = this.getNativeInput_();
      var isValid = input.checkValidity();

      this.adapter_.removeClass(FOCUSED);
      if (!input.value) {
        this.adapter_.removeClassFromLabel(LABEL_FLOAT_ABOVE);
        this.receivedUserInput_ = false;
      }
      if (isValid) {
        this.adapter_.removeClass(INVALID);
      } else {
        this.adapter_.addClass(INVALID);
      }
      this.updateHelptextOnDeactivation_(isValid);
    }
  }, {
    key: 'updateHelptextOnDeactivation_',
    value: function updateHelptextOnDeactivation_(isValid) {
      var _MDCTextfieldFoundati3 = MDCTextfieldFoundation.cssClasses,
          HELPTEXT_PERSISTENT = _MDCTextfieldFoundati3.HELPTEXT_PERSISTENT,
          HELPTEXT_VALIDATION_MSG = _MDCTextfieldFoundati3.HELPTEXT_VALIDATION_MSG;
      var ROLE = MDCTextfieldFoundation.strings.ROLE;

      var helptextIsPersistent = this.adapter_.helptextHasClass(HELPTEXT_PERSISTENT);
      var helptextIsValidationMsg = this.adapter_.helptextHasClass(HELPTEXT_VALIDATION_MSG);
      var validationMsgNeedsDisplay = helptextIsValidationMsg && !isValid;

      if (validationMsgNeedsDisplay) {
        this.adapter_.setHelptextAttr(ROLE, 'alert');
      } else {
        this.adapter_.removeHelptextAttr(ROLE);
      }

      if (helptextIsPersistent || validationMsgNeedsDisplay) {
        return;
      }
      this.hideHelptext_();
    }
  }, {
    key: 'hideHelptext_',
    value: function hideHelptext_() {
      var ARIA_HIDDEN = MDCTextfieldFoundation.strings.ARIA_HIDDEN;

      this.adapter_.setHelptextAttr(ARIA_HIDDEN, 'true');
    }
  }, {
    key: 'isDisabled',
    value: function isDisabled() {
      return this.getNativeInput_().disabled;
    }
  }, {
    key: 'setDisabled',
    value: function setDisabled(disabled) {
      var DISABLED = MDCTextfieldFoundation.cssClasses.DISABLED;

      this.getNativeInput_().disabled = disabled;
      if (disabled) {
        this.adapter_.addClass(DISABLED);
      } else {
        this.adapter_.removeClass(DISABLED);
      }
    }
  }, {
    key: 'getNativeInput_',
    value: function getNativeInput_() {
      return this.adapter_.getNativeInput() || {
        checkValidity: function checkValidity() {
          return true;
        },
        value: '',
        disabled: false
      };
    }
  }]);

  return MDCTextfieldFoundation;
}(_base.MDCFoundation);

exports.default = MDCTextfieldFoundation;

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MDCTextfield = exports.MDCTextfieldFoundation = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _base = __webpack_require__(0);

var _foundation = __webpack_require__(54);

var _foundation2 = _interopRequireDefault(_foundation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2016 Google Inc. All Rights Reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

exports.MDCTextfieldFoundation = _foundation2.default;

var MDCTextfield = exports.MDCTextfield = function (_MDCComponent) {
  _inherits(MDCTextfield, _MDCComponent);

  _createClass(MDCTextfield, null, [{
    key: 'attachTo',
    value: function attachTo(root) {
      return new MDCTextfield(root);
    }
  }]);

  function MDCTextfield() {
    var _ref;

    _classCallCheck(this, MDCTextfield);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = MDCTextfield.__proto__ || Object.getPrototypeOf(MDCTextfield)).call.apply(_ref, [this].concat(args)));

    var input = _this.input_;
    _this.helptextElement = input.hasAttribute('aria-controls') ? document.getElementById(input.getAttribute('aria-controls')) : null;
    return _this;
  }

  _createClass(MDCTextfield, [{
    key: 'initialSyncWithDom',
    value: function initialSyncWithDom() {
      this.disabled = this.input_.disabled;
    }
  }, {
    key: 'getDefaultFoundation',
    value: function getDefaultFoundation() {
      var _this2 = this;

      return new _foundation2.default(Object.assign({
        addClass: function addClass(className) {
          return _this2.root_.classList.add(className);
        },
        removeClass: function removeClass(className) {
          return _this2.root_.classList.remove(className);
        },
        addClassToLabel: function addClassToLabel(className) {
          var label = _this2.label_;
          if (label) {
            label.classList.add(className);
          }
        },
        removeClassFromLabel: function removeClassFromLabel(className) {
          var label = _this2.label_;
          if (label) {
            label.classList.remove(className);
          }
        }
      }, this.getInputAdapterMethods_(), this.getHelptextAdapterMethods_()));
    }
  }, {
    key: 'getInputAdapterMethods_',
    value: function getInputAdapterMethods_() {
      var _this3 = this;

      return {
        registerInputFocusHandler: function registerInputFocusHandler(handler) {
          return _this3.input_.addEventListener('focus', handler);
        },
        registerInputBlurHandler: function registerInputBlurHandler(handler) {
          return _this3.input_.addEventListener('blur', handler);
        },
        registerInputInputHandler: function registerInputInputHandler(handler) {
          return _this3.input_.addEventListener('input', handler);
        },
        registerInputKeydownHandler: function registerInputKeydownHandler(handler) {
          return _this3.input_.addEventListener('keydown', handler);
        },
        deregisterInputFocusHandler: function deregisterInputFocusHandler(handler) {
          return _this3.input_.removeEventListener('focus', handler);
        },
        deregisterInputBlurHandler: function deregisterInputBlurHandler(handler) {
          return _this3.input_.removeEventListener('blur', handler);
        },
        deregisterInputInputHandler: function deregisterInputInputHandler(handler) {
          return _this3.input_.removeEventListener('input', handler);
        },
        deregisterInputKeydownHandler: function deregisterInputKeydownHandler(handler) {
          return _this3.input_.removeEventListener('keydown', handler);
        },
        getNativeInput: function getNativeInput() {
          return _this3.input_;
        }
      };
    }
  }, {
    key: 'getHelptextAdapterMethods_',
    value: function getHelptextAdapterMethods_() {
      var _this4 = this;

      return {
        addClassToHelptext: function addClassToHelptext(className) {
          if (_this4.helptextElement) {
            _this4.helptextElement.classList.add(className);
          }
        },
        removeClassFromHelptext: function removeClassFromHelptext(className) {
          if (_this4.helptextElement) {
            _this4.helptextElement.classList.remove(className);
          }
        },
        helptextHasClass: function helptextHasClass(className) {
          if (!_this4.helptextElement) {
            return false;
          }
          return _this4.helptextElement.classList.contains(className);
        },
        setHelptextAttr: function setHelptextAttr(name, value) {
          if (_this4.helptextElement) {
            _this4.helptextElement.setAttribute(name, value);
          }
        },
        removeHelptextAttr: function removeHelptextAttr(name) {
          if (_this4.helptextElement) {
            _this4.helptextElement.removeAttribute(name);
          }
        }
      };
    }
  }, {
    key: 'disabled',
    get: function get() {
      return this.foundation_.isDisabled();
    },
    set: function set(disabled) {
      this.foundation_.setDisabled(disabled);
    }
  }, {
    key: 'input_',
    get: function get() {
      return this.root_.querySelector(_foundation2.default.strings.INPUT_SELECTOR);
    }
  }, {
    key: 'label_',
    get: function get() {
      return this.root_.querySelector(_foundation2.default.strings.LABEL_SELECTOR);
    }
  }]);

  return MDCTextfield;
}(_base.MDCComponent);

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength;
exports.toByteArray = toByteArray;
exports.fromByteArray = fromByteArray;

var lookup = [];
var revLookup = [];
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i];
  revLookup[code.charCodeAt(i)] = i;
}

revLookup['-'.charCodeAt(0)] = 62;
revLookup['_'.charCodeAt(0)] = 63;

function placeHoldersCount(b64) {
  var len = b64.length;
  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4');
  }

  // the number of equal signs (place holders)
  // if there are two placeholders, than the two characters before it
  // represent one byte
  // if there is only one, then the three characters before it represent 2 bytes
  // this is just a cheap hack to not do indexOf twice
  return b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0;
}

function byteLength(b64) {
  // base64 is 4/3 + up to two characters of the original data
  return b64.length * 3 / 4 - placeHoldersCount(b64);
}

function toByteArray(b64) {
  var i, j, l, tmp, placeHolders, arr;
  var len = b64.length;
  placeHolders = placeHoldersCount(b64);

  arr = new Arr(len * 3 / 4 - placeHolders);

  // if there are placeholders, only get up to the last complete 4 chars
  l = placeHolders > 0 ? len - 4 : len;

  var L = 0;

  for (i = 0, j = 0; i < l; i += 4, j += 3) {
    tmp = revLookup[b64.charCodeAt(i)] << 18 | revLookup[b64.charCodeAt(i + 1)] << 12 | revLookup[b64.charCodeAt(i + 2)] << 6 | revLookup[b64.charCodeAt(i + 3)];
    arr[L++] = tmp >> 16 & 0xFF;
    arr[L++] = tmp >> 8 & 0xFF;
    arr[L++] = tmp & 0xFF;
  }

  if (placeHolders === 2) {
    tmp = revLookup[b64.charCodeAt(i)] << 2 | revLookup[b64.charCodeAt(i + 1)] >> 4;
    arr[L++] = tmp & 0xFF;
  } else if (placeHolders === 1) {
    tmp = revLookup[b64.charCodeAt(i)] << 10 | revLookup[b64.charCodeAt(i + 1)] << 4 | revLookup[b64.charCodeAt(i + 2)] >> 2;
    arr[L++] = tmp >> 8 & 0xFF;
    arr[L++] = tmp & 0xFF;
  }

  return arr;
}

function tripletToBase64(num) {
  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F];
}

function encodeChunk(uint8, start, end) {
  var tmp;
  var output = [];
  for (var i = start; i < end; i += 3) {
    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + uint8[i + 2];
    output.push(tripletToBase64(tmp));
  }
  return output.join('');
}

function fromByteArray(uint8) {
  var tmp;
  var len = uint8.length;
  var extraBytes = len % 3; // if we have 1 byte left, pad 2 bytes
  var output = '';
  var parts = [];
  var maxChunkLength = 16383; // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, i + maxChunkLength > len2 ? len2 : i + maxChunkLength));
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1];
    output += lookup[tmp >> 2];
    output += lookup[tmp << 4 & 0x3F];
    output += '==';
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1];
    output += lookup[tmp >> 10];
    output += lookup[tmp >> 4 & 0x3F];
    output += lookup[tmp << 2 & 0x3F];
    output += '=';
  }

  parts.push(output);

  return parts.join('');
}

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(56);
var ieee754 = __webpack_require__(60);
var isArray = __webpack_require__(61);

exports.Buffer = Buffer;
exports.SlowBuffer = SlowBuffer;
exports.INSPECT_MAX_BYTES = 50;

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined ? global.TYPED_ARRAY_SUPPORT : typedArraySupport();

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength();

function typedArraySupport() {
  try {
    var arr = new Uint8Array(1);
    arr.__proto__ = { __proto__: Uint8Array.prototype, foo: function foo() {
        return 42;
      } };
    return arr.foo() === 42 && // typed array instances can be augmented
    typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
    arr.subarray(1, 1).byteLength === 0; // ie10 has broken `subarray`
  } catch (e) {
    return false;
  }
}

function kMaxLength() {
  return Buffer.TYPED_ARRAY_SUPPORT ? 0x7fffffff : 0x3fffffff;
}

function createBuffer(that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length');
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length);
    that.__proto__ = Buffer.prototype;
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length);
    }
    that.length = length;
  }

  return that;
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer(arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length);
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error('If encoding is specified then the first argument must be a string');
    }
    return allocUnsafe(this, arg);
  }
  return from(this, arg, encodingOrOffset, length);
}

Buffer.poolSize = 8192; // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype;
  return arr;
};

function from(that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number');
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length);
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset);
  }

  return fromObject(that, value);
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length);
};

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype;
  Buffer.__proto__ = Uint8Array;
  if (typeof Symbol !== 'undefined' && Symbol.species && Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    });
  }
}

function assertSize(size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number');
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative');
  }
}

function alloc(that, size, fill, encoding) {
  assertSize(size);
  if (size <= 0) {
    return createBuffer(that, size);
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string' ? createBuffer(that, size).fill(fill, encoding) : createBuffer(that, size).fill(fill);
  }
  return createBuffer(that, size);
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding);
};

function allocUnsafe(that, size) {
  assertSize(size);
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0);
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0;
    }
  }
  return that;
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size);
};
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size);
};

function fromString(that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8';
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding');
  }

  var length = byteLength(string, encoding) | 0;
  that = createBuffer(that, length);

  var actual = that.write(string, encoding);

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual);
  }

  return that;
}

function fromArrayLike(that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0;
  that = createBuffer(that, length);
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255;
  }
  return that;
}

function fromArrayBuffer(that, array, byteOffset, length) {
  array.byteLength; // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds');
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds');
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array);
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset);
  } else {
    array = new Uint8Array(array, byteOffset, length);
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array;
    that.__proto__ = Buffer.prototype;
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array);
  }
  return that;
}

function fromObject(that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0;
    that = createBuffer(that, len);

    if (that.length === 0) {
      return that;
    }

    obj.copy(that, 0, 0, len);
    return that;
  }

  if (obj) {
    if (typeof ArrayBuffer !== 'undefined' && obj.buffer instanceof ArrayBuffer || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0);
      }
      return fromArrayLike(that, obj);
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data);
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.');
}

function checked(length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' + 'size: 0x' + kMaxLength().toString(16) + ' bytes');
  }
  return length | 0;
}

function SlowBuffer(length) {
  if (+length != length) {
    // eslint-disable-line eqeqeq
    length = 0;
  }
  return Buffer.alloc(+length);
}

Buffer.isBuffer = function isBuffer(b) {
  return !!(b != null && b._isBuffer);
};

Buffer.compare = function compare(a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers');
  }

  if (a === b) return 0;

  var x = a.length;
  var y = b.length;

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i];
      y = b[i];
      break;
    }
  }

  if (x < y) return -1;
  if (y < x) return 1;
  return 0;
};

Buffer.isEncoding = function isEncoding(encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true;
    default:
      return false;
  }
};

Buffer.concat = function concat(list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers');
  }

  if (list.length === 0) {
    return Buffer.alloc(0);
  }

  var i;
  if (length === undefined) {
    length = 0;
    for (i = 0; i < list.length; ++i) {
      length += list[i].length;
    }
  }

  var buffer = Buffer.allocUnsafe(length);
  var pos = 0;
  for (i = 0; i < list.length; ++i) {
    var buf = list[i];
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers');
    }
    buf.copy(buffer, pos);
    pos += buf.length;
  }
  return buffer;
};

function byteLength(string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length;
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' && (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength;
  }
  if (typeof string !== 'string') {
    string = '' + string;
  }

  var len = string.length;
  if (len === 0) return 0;

  // Use a for loop to avoid recursion
  var loweredCase = false;
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len;
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length;
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2;
      case 'hex':
        return len >>> 1;
      case 'base64':
        return base64ToBytes(string).length;
      default:
        if (loweredCase) return utf8ToBytes(string).length; // assume utf8
        encoding = ('' + encoding).toLowerCase();
        loweredCase = true;
    }
  }
}
Buffer.byteLength = byteLength;

function slowToString(encoding, start, end) {
  var loweredCase = false;

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0;
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return '';
  }

  if (end === undefined || end > this.length) {
    end = this.length;
  }

  if (end <= 0) {
    return '';
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0;
  start >>>= 0;

  if (end <= start) {
    return '';
  }

  if (!encoding) encoding = 'utf8';

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end);

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end);

      case 'ascii':
        return asciiSlice(this, start, end);

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end);

      case 'base64':
        return base64Slice(this, start, end);

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end);

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
        encoding = (encoding + '').toLowerCase();
        loweredCase = true;
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true;

function swap(b, n, m) {
  var i = b[n];
  b[n] = b[m];
  b[m] = i;
}

Buffer.prototype.swap16 = function swap16() {
  var len = this.length;
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits');
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1);
  }
  return this;
};

Buffer.prototype.swap32 = function swap32() {
  var len = this.length;
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits');
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3);
    swap(this, i + 1, i + 2);
  }
  return this;
};

Buffer.prototype.swap64 = function swap64() {
  var len = this.length;
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits');
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7);
    swap(this, i + 1, i + 6);
    swap(this, i + 2, i + 5);
    swap(this, i + 3, i + 4);
  }
  return this;
};

Buffer.prototype.toString = function toString() {
  var length = this.length | 0;
  if (length === 0) return '';
  if (arguments.length === 0) return utf8Slice(this, 0, length);
  return slowToString.apply(this, arguments);
};

Buffer.prototype.equals = function equals(b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer');
  if (this === b) return true;
  return Buffer.compare(this, b) === 0;
};

Buffer.prototype.inspect = function inspect() {
  var str = '';
  var max = exports.INSPECT_MAX_BYTES;
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ');
    if (this.length > max) str += ' ... ';
  }
  return '<Buffer ' + str + '>';
};

Buffer.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer');
  }

  if (start === undefined) {
    start = 0;
  }
  if (end === undefined) {
    end = target ? target.length : 0;
  }
  if (thisStart === undefined) {
    thisStart = 0;
  }
  if (thisEnd === undefined) {
    thisEnd = this.length;
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index');
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0;
  }
  if (thisStart >= thisEnd) {
    return -1;
  }
  if (start >= end) {
    return 1;
  }

  start >>>= 0;
  end >>>= 0;
  thisStart >>>= 0;
  thisEnd >>>= 0;

  if (this === target) return 0;

  var x = thisEnd - thisStart;
  var y = end - start;
  var len = Math.min(x, y);

  var thisCopy = this.slice(thisStart, thisEnd);
  var targetCopy = target.slice(start, end);

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i];
      y = targetCopy[i];
      break;
    }
  }

  if (x < y) return -1;
  if (y < x) return 1;
  return 0;
};

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1;

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset;
    byteOffset = 0;
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff;
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000;
  }
  byteOffset = +byteOffset; // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : buffer.length - 1;
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
  if (byteOffset >= buffer.length) {
    if (dir) return -1;else byteOffset = buffer.length - 1;
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0;else return -1;
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding);
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1;
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
  } else if (typeof val === 'number') {
    val = val & 0xFF; // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT && typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
      }
    }
    return arrayIndexOf(buffer, [val], byteOffset, encoding, dir);
  }

  throw new TypeError('val must be string, number or Buffer');
}

function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
  var indexSize = 1;
  var arrLength = arr.length;
  var valLength = val.length;

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase();
    if (encoding === 'ucs2' || encoding === 'ucs-2' || encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1;
      }
      indexSize = 2;
      arrLength /= 2;
      valLength /= 2;
      byteOffset /= 2;
    }
  }

  function read(buf, i) {
    if (indexSize === 1) {
      return buf[i];
    } else {
      return buf.readUInt16BE(i * indexSize);
    }
  }

  var i;
  if (dir) {
    var foundIndex = -1;
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i;
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize;
      } else {
        if (foundIndex !== -1) i -= i - foundIndex;
        foundIndex = -1;
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
    for (i = byteOffset; i >= 0; i--) {
      var found = true;
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false;
          break;
        }
      }
      if (found) return i;
    }
  }

  return -1;
}

Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1;
};

Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
};

Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
};

function hexWrite(buf, string, offset, length) {
  offset = Number(offset) || 0;
  var remaining = buf.length - offset;
  if (!length) {
    length = remaining;
  } else {
    length = Number(length);
    if (length > remaining) {
      length = remaining;
    }
  }

  // must be an even number of digits
  var strLen = string.length;
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string');

  if (length > strLen / 2) {
    length = strLen / 2;
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16);
    if (isNaN(parsed)) return i;
    buf[offset + i] = parsed;
  }
  return i;
}

function utf8Write(buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
}

function asciiWrite(buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length);
}

function latin1Write(buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length);
}

function base64Write(buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length);
}

function ucs2Write(buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
}

Buffer.prototype.write = function write(string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8';
    length = this.length;
    offset = 0;
    // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset;
    length = this.length;
    offset = 0;
    // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0;
    if (isFinite(length)) {
      length = length | 0;
      if (encoding === undefined) encoding = 'utf8';
    } else {
      encoding = length;
      length = undefined;
    }
    // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error('Buffer.write(string, encoding, offset[, length]) is no longer supported');
  }

  var remaining = this.length - offset;
  if (length === undefined || length > remaining) length = remaining;

  if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds');
  }

  if (!encoding) encoding = 'utf8';

  var loweredCase = false;
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length);

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length);

      case 'ascii':
        return asciiWrite(this, string, offset, length);

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length);

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length);

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length);

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
        encoding = ('' + encoding).toLowerCase();
        loweredCase = true;
    }
  }
};

Buffer.prototype.toJSON = function toJSON() {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  };
};

function base64Slice(buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf);
  } else {
    return base64.fromByteArray(buf.slice(start, end));
  }
}

function utf8Slice(buf, start, end) {
  end = Math.min(buf.length, end);
  var res = [];

  var i = start;
  while (i < end) {
    var firstByte = buf[i];
    var codePoint = null;
    var bytesPerSequence = firstByte > 0xEF ? 4 : firstByte > 0xDF ? 3 : firstByte > 0xBF ? 2 : 1;

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint;

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte;
          }
          break;
        case 2:
          secondByte = buf[i + 1];
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | secondByte & 0x3F;
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint;
            }
          }
          break;
        case 3:
          secondByte = buf[i + 1];
          thirdByte = buf[i + 2];
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | thirdByte & 0x3F;
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint;
            }
          }
          break;
        case 4:
          secondByte = buf[i + 1];
          thirdByte = buf[i + 2];
          fourthByte = buf[i + 3];
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | fourthByte & 0x3F;
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint;
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD;
      bytesPerSequence = 1;
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000;
      res.push(codePoint >>> 10 & 0x3FF | 0xD800);
      codePoint = 0xDC00 | codePoint & 0x3FF;
    }

    res.push(codePoint);
    i += bytesPerSequence;
  }

  return decodeCodePointsArray(res);
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000;

function decodeCodePointsArray(codePoints) {
  var len = codePoints.length;
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints); // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = '';
  var i = 0;
  while (i < len) {
    res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
  }
  return res;
}

function asciiSlice(buf, start, end) {
  var ret = '';
  end = Math.min(buf.length, end);

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F);
  }
  return ret;
}

function latin1Slice(buf, start, end) {
  var ret = '';
  end = Math.min(buf.length, end);

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i]);
  }
  return ret;
}

function hexSlice(buf, start, end) {
  var len = buf.length;

  if (!start || start < 0) start = 0;
  if (!end || end < 0 || end > len) end = len;

  var out = '';
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i]);
  }
  return out;
}

function utf16leSlice(buf, start, end) {
  var bytes = buf.slice(start, end);
  var res = '';
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
  }
  return res;
}

Buffer.prototype.slice = function slice(start, end) {
  var len = this.length;
  start = ~~start;
  end = end === undefined ? len : ~~end;

  if (start < 0) {
    start += len;
    if (start < 0) start = 0;
  } else if (start > len) {
    start = len;
  }

  if (end < 0) {
    end += len;
    if (end < 0) end = 0;
  } else if (end > len) {
    end = len;
  }

  if (end < start) end = start;

  var newBuf;
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end);
    newBuf.__proto__ = Buffer.prototype;
  } else {
    var sliceLen = end - start;
    newBuf = new Buffer(sliceLen, undefined);
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start];
    }
  }

  return newBuf;
};

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset(offset, ext, length) {
  if (offset % 1 !== 0 || offset < 0) throw new RangeError('offset is not uint');
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length');
}

Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) checkOffset(offset, byteLength, this.length);

  var val = this[offset];
  var mul = 1;
  var i = 0;
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul;
  }

  return val;
};

Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length);
  }

  var val = this[offset + --byteLength];
  var mul = 1;
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul;
  }

  return val;
};

Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length);
  return this[offset];
};

Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  return this[offset] | this[offset + 1] << 8;
};

Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  return this[offset] << 8 | this[offset + 1];
};

Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);

  return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 0x1000000;
};

Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);

  return this[offset] * 0x1000000 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
};

Buffer.prototype.readIntLE = function readIntLE(offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) checkOffset(offset, byteLength, this.length);

  var val = this[offset];
  var mul = 1;
  var i = 0;
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul;
  }
  mul *= 0x80;

  if (val >= mul) val -= Math.pow(2, 8 * byteLength);

  return val;
};

Buffer.prototype.readIntBE = function readIntBE(offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) checkOffset(offset, byteLength, this.length);

  var i = byteLength;
  var mul = 1;
  var val = this[offset + --i];
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul;
  }
  mul *= 0x80;

  if (val >= mul) val -= Math.pow(2, 8 * byteLength);

  return val;
};

Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length);
  if (!(this[offset] & 0x80)) return this[offset];
  return (0xff - this[offset] + 1) * -1;
};

Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  var val = this[offset] | this[offset + 1] << 8;
  return val & 0x8000 ? val | 0xFFFF0000 : val;
};

Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  var val = this[offset + 1] | this[offset] << 8;
  return val & 0x8000 ? val | 0xFFFF0000 : val;
};

Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);

  return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
};

Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);

  return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
};

Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return ieee754.read(this, offset, true, 23, 4);
};

Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return ieee754.read(this, offset, false, 23, 4);
};

Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length);
  return ieee754.read(this, offset, true, 52, 8);
};

Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length);
  return ieee754.read(this, offset, false, 52, 8);
};

function checkInt(buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
  if (offset + ext > buf.length) throw new RangeError('Index out of range');
}

Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1;
    checkInt(this, value, offset, byteLength, maxBytes, 0);
  }

  var mul = 1;
  var i = 0;
  this[offset] = value & 0xFF;
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = value / mul & 0xFF;
  }

  return offset + byteLength;
};

Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1;
    checkInt(this, value, offset, byteLength, maxBytes, 0);
  }

  var i = byteLength - 1;
  var mul = 1;
  this[offset + i] = value & 0xFF;
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = value / mul & 0xFF;
  }

  return offset + byteLength;
};

Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0);
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
  this[offset] = value & 0xff;
  return offset + 1;
};

function objectWriteUInt16(buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1;
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & 0xff << 8 * (littleEndian ? i : 1 - i)) >>> (littleEndian ? i : 1 - i) * 8;
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
  } else {
    objectWriteUInt16(this, value, offset, true);
  }
  return offset + 2;
};

Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value >>> 8;
    this[offset + 1] = value & 0xff;
  } else {
    objectWriteUInt16(this, value, offset, false);
  }
  return offset + 2;
};

function objectWriteUInt32(buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1;
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = value >>> (littleEndian ? i : 3 - i) * 8 & 0xff;
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = value >>> 24;
    this[offset + 2] = value >>> 16;
    this[offset + 1] = value >>> 8;
    this[offset] = value & 0xff;
  } else {
    objectWriteUInt32(this, value, offset, true);
  }
  return offset + 4;
};

Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 0xff;
  } else {
    objectWriteUInt32(this, value, offset, false);
  }
  return offset + 4;
};

Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1);

    checkInt(this, value, offset, byteLength, limit - 1, -limit);
  }

  var i = 0;
  var mul = 1;
  var sub = 0;
  this[offset] = value & 0xFF;
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1;
    }
    this[offset + i] = (value / mul >> 0) - sub & 0xFF;
  }

  return offset + byteLength;
};

Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1);

    checkInt(this, value, offset, byteLength, limit - 1, -limit);
  }

  var i = byteLength - 1;
  var mul = 1;
  var sub = 0;
  this[offset + i] = value & 0xFF;
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1;
    }
    this[offset + i] = (value / mul >> 0) - sub & 0xFF;
  }

  return offset + byteLength;
};

Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80);
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
  if (value < 0) value = 0xff + value + 1;
  this[offset] = value & 0xff;
  return offset + 1;
};

Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
  } else {
    objectWriteUInt16(this, value, offset, true);
  }
  return offset + 2;
};

Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value >>> 8;
    this[offset + 1] = value & 0xff;
  } else {
    objectWriteUInt16(this, value, offset, false);
  }
  return offset + 2;
};

Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    this[offset + 2] = value >>> 16;
    this[offset + 3] = value >>> 24;
  } else {
    objectWriteUInt32(this, value, offset, true);
  }
  return offset + 4;
};

Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
  if (value < 0) value = 0xffffffff + value + 1;
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 0xff;
  } else {
    objectWriteUInt32(this, value, offset, false);
  }
  return offset + 4;
};

function checkIEEE754(buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range');
  if (offset < 0) throw new RangeError('Index out of range');
}

function writeFloat(buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38);
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4);
  return offset + 4;
}

Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert);
};

Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert);
};

function writeDouble(buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308);
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8);
  return offset + 8;
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert);
};

Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert);
};

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy(target, targetStart, start, end) {
  if (!start) start = 0;
  if (!end && end !== 0) end = this.length;
  if (targetStart >= target.length) targetStart = target.length;
  if (!targetStart) targetStart = 0;
  if (end > 0 && end < start) end = start;

  // Copy 0 bytes; we're done
  if (end === start) return 0;
  if (target.length === 0 || this.length === 0) return 0;

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds');
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds');
  if (end < 0) throw new RangeError('sourceEnd out of bounds');

  // Are we oob?
  if (end > this.length) end = this.length;
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start;
  }

  var len = end - start;
  var i;

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start];
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start];
    }
  } else {
    Uint8Array.prototype.set.call(target, this.subarray(start, start + len), targetStart);
  }

  return len;
};

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill(val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start;
      start = 0;
      end = this.length;
    } else if (typeof end === 'string') {
      encoding = end;
      end = this.length;
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0);
      if (code < 256) {
        val = code;
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string');
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding);
    }
  } else if (typeof val === 'number') {
    val = val & 255;
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index');
  }

  if (end <= start) {
    return this;
  }

  start = start >>> 0;
  end = end === undefined ? this.length : end >>> 0;

  if (!val) val = 0;

  var i;
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val;
    }
  } else {
    var bytes = Buffer.isBuffer(val) ? val : utf8ToBytes(new Buffer(val, encoding).toString());
    var len = bytes.length;
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len];
    }
  }

  return this;
};

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g;

function base64clean(str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '');
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return '';
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '=';
  }
  return str;
}

function stringtrim(str) {
  if (str.trim) return str.trim();
  return str.replace(/^\s+|\s+$/g, '');
}

function toHex(n) {
  if (n < 16) return '0' + n.toString(16);
  return n.toString(16);
}

function utf8ToBytes(string, units) {
  units = units || Infinity;
  var codePoint;
  var length = string.length;
  var leadSurrogate = null;
  var bytes = [];

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i);

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
          continue;
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
          continue;
        }

        // valid lead
        leadSurrogate = codePoint;

        continue;
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
        leadSurrogate = codePoint;
        continue;
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
    }

    leadSurrogate = null;

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break;
      bytes.push(codePoint);
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break;
      bytes.push(codePoint >> 0x6 | 0xC0, codePoint & 0x3F | 0x80);
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break;
      bytes.push(codePoint >> 0xC | 0xE0, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break;
      bytes.push(codePoint >> 0x12 | 0xF0, codePoint >> 0xC & 0x3F | 0x80, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
    } else {
      throw new Error('Invalid code point');
    }
  }

  return bytes;
}

function asciiToBytes(str) {
  var byteArray = [];
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF);
  }
  return byteArray;
}

function utf16leToBytes(str, units) {
  var c, hi, lo;
  var byteArray = [];
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break;

    c = str.charCodeAt(i);
    hi = c >> 8;
    lo = c % 256;
    byteArray.push(lo);
    byteArray.push(hi);
  }

  return byteArray;
}

function base64ToBytes(str) {
  return base64.toByteArray(base64clean(str));
}

function blitBuffer(src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if (i + offset >= dst.length || i >= src.length) break;
    dst[i + offset] = src[i];
  }
  return i;
}

function isnan(val) {
  return val !== val; // eslint-disable-line no-self-compare
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(64)))

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if (item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function (modules, mediaQuery) {
		if (typeof modules === "string") modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for (var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if (typeof id === "number") alreadyImportedModules[id] = true;
		}
		for (i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if (mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if (mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap) {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	var base64 = new Buffer(JSON.stringify(sourceMap)).toString('base64');
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(57).Buffer))

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var tabbable = __webpack_require__(63);

var listeningFocusTrap = null;

function focusTrap(element, userOptions) {
  var tabbableNodes = [];
  var nodeFocusedBeforeActivation = null;
  var active = false;
  var paused = false;

  var container = typeof element === 'string' ? document.querySelector(element) : element;

  var config = userOptions || {};
  config.returnFocusOnDeactivate = userOptions && userOptions.returnFocusOnDeactivate !== undefined ? userOptions.returnFocusOnDeactivate : true;
  config.escapeDeactivates = userOptions && userOptions.escapeDeactivates !== undefined ? userOptions.escapeDeactivates : true;

  var trap = {
    activate: activate,
    deactivate: deactivate,
    pause: pause,
    unpause: unpause
  };

  return trap;

  function activate(activateOptions) {
    if (active) return;

    var defaultedActivateOptions = {
      onActivate: activateOptions && activateOptions.onActivate !== undefined ? activateOptions.onActivate : config.onActivate
    };

    active = true;
    paused = false;
    nodeFocusedBeforeActivation = document.activeElement;

    if (defaultedActivateOptions.onActivate) {
      defaultedActivateOptions.onActivate();
    }

    addListeners();
    return trap;
  }

  function deactivate(deactivateOptions) {
    if (!active) return;

    var defaultedDeactivateOptions = {
      returnFocus: deactivateOptions && deactivateOptions.returnFocus !== undefined ? deactivateOptions.returnFocus : config.returnFocusOnDeactivate,
      onDeactivate: deactivateOptions && deactivateOptions.onDeactivate !== undefined ? deactivateOptions.onDeactivate : config.onDeactivate
    };

    removeListeners();

    if (defaultedDeactivateOptions.onDeactivate) {
      defaultedDeactivateOptions.onDeactivate();
    }

    if (defaultedDeactivateOptions.returnFocus) {
      setTimeout(function () {
        tryFocus(nodeFocusedBeforeActivation);
      }, 0);
    }

    active = false;
    paused = false;
    return this;
  }

  function pause() {
    if (paused || !active) return;
    paused = true;
    removeListeners();
  }

  function unpause() {
    if (!paused || !active) return;
    paused = false;
    addListeners();
  }

  function addListeners() {
    if (!active) return;

    // There can be only one listening focus trap at a time
    if (listeningFocusTrap) {
      listeningFocusTrap.pause();
    }
    listeningFocusTrap = trap;

    updateTabbableNodes();
    tryFocus(firstFocusNode());
    document.addEventListener('focus', checkFocus, true);
    document.addEventListener('click', checkClick, true);
    document.addEventListener('mousedown', checkPointerDown, true);
    document.addEventListener('touchstart', checkPointerDown, true);
    document.addEventListener('keydown', checkKey, true);

    return trap;
  }

  function removeListeners() {
    if (!active || listeningFocusTrap !== trap) return;

    document.removeEventListener('focus', checkFocus, true);
    document.removeEventListener('click', checkClick, true);
    document.removeEventListener('mousedown', checkPointerDown, true);
    document.removeEventListener('touchstart', checkPointerDown, true);
    document.removeEventListener('keydown', checkKey, true);

    listeningFocusTrap = null;

    return trap;
  }

  function getNodeForOption(optionName) {
    var optionValue = config[optionName];
    var node = optionValue;
    if (!optionValue) {
      return null;
    }
    if (typeof optionValue === 'string') {
      node = document.querySelector(optionValue);
      if (!node) {
        throw new Error('`' + optionName + '` refers to no known node');
      }
    }
    if (typeof optionValue === 'function') {
      node = optionValue();
      if (!node) {
        throw new Error('`' + optionName + '` did not return a node');
      }
    }
    return node;
  }

  function firstFocusNode() {
    var node;
    if (getNodeForOption('initialFocus') !== null) {
      node = getNodeForOption('initialFocus');
    } else if (container.contains(document.activeElement)) {
      node = document.activeElement;
    } else {
      node = tabbableNodes[0] || getNodeForOption('fallbackFocus');
    }

    if (!node) {
      throw new Error('You can\'t have a focus-trap without at least one focusable element');
    }

    return node;
  }

  // This needs to be done on mousedown and touchstart instead of click
  // so that it precedes the focus event
  function checkPointerDown(e) {
    if (config.clickOutsideDeactivates && !container.contains(e.target)) {
      deactivate({ returnFocus: false });
    }
  }

  function checkClick(e) {
    if (config.clickOutsideDeactivates) return;
    if (container.contains(e.target)) return;
    e.preventDefault();
    e.stopImmediatePropagation();
  }

  function checkFocus(e) {
    if (container.contains(e.target)) return;
    e.preventDefault();
    e.stopImmediatePropagation();
    // Checking for a blur method here resolves a Firefox issue (#15)
    if (typeof e.target.blur === 'function') e.target.blur();
  }

  function checkKey(e) {
    if (e.key === 'Tab' || e.keyCode === 9) {
      handleTab(e);
    }

    if (config.escapeDeactivates !== false && isEscapeEvent(e)) {
      deactivate();
    }
  }

  function handleTab(e) {
    e.preventDefault();
    updateTabbableNodes();
    var currentFocusIndex = tabbableNodes.indexOf(e.target);
    var lastTabbableNode = tabbableNodes[tabbableNodes.length - 1];
    var firstTabbableNode = tabbableNodes[0];

    if (e.shiftKey) {
      if (e.target === firstTabbableNode || tabbableNodes.indexOf(e.target) === -1) {
        return tryFocus(lastTabbableNode);
      }
      return tryFocus(tabbableNodes[currentFocusIndex - 1]);
    }

    if (e.target === lastTabbableNode) return tryFocus(firstTabbableNode);

    tryFocus(tabbableNodes[currentFocusIndex + 1]);
  }

  function updateTabbableNodes() {
    tabbableNodes = tabbable(container);
  }
}

function isEscapeEvent(e) {
  return e.key === 'Escape' || e.key === 'Esc' || e.keyCode === 27;
}

function tryFocus(node) {
  if (!node || !node.focus) return;
  node.focus();
  if (node.tagName.toLowerCase() === 'input') {
    node.select();
  }
}

module.exports = focusTrap;

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m;
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var nBits = -7;
  var i = isLE ? nBytes - 1 : 0;
  var d = isLE ? -1 : 1;
  var s = buffer[offset + i];

  i += d;

  e = s & (1 << -nBits) - 1;
  s >>= -nBits;
  nBits += eLen;
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & (1 << -nBits) - 1;
  e >>= -nBits;
  nBits += mLen;
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias;
  } else if (e === eMax) {
    return m ? NaN : (s ? -1 : 1) * Infinity;
  } else {
    m = m + Math.pow(2, mLen);
    e = e - eBias;
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
};

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c;
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
  var i = isLE ? 0 : nBytes - 1;
  var d = isLE ? 1 : -1;
  var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;

  value = Math.abs(value);

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0;
    e = eMax;
  } else {
    e = Math.floor(Math.log(value) / Math.LN2);
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--;
      c *= 2;
    }
    if (e + eBias >= 1) {
      value += rt / c;
    } else {
      value += rt * Math.pow(2, 1 - eBias);
    }
    if (value * c >= 2) {
      e++;
      c /= 2;
    }

    if (e + eBias >= eMax) {
      m = 0;
      e = eMax;
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen);
      e = e + eBias;
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
      e = 0;
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = e << mLen | m;
  eLen += mLen;
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128;
};

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
	// get current location
	var location = typeof window !== "undefined" && window.location;

	if (!location) {
		throw new Error("fixUrls requires window.location");
	}

	// blank or null?
	if (!css || typeof css !== "string") {
		return css;
	}

	var baseUrl = location.protocol + "//" + location.host;
	var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
 This regular expression is just a way to recursively match brackets within
 a string.
 	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
    (  = Start a capturing group
      (?:  = Start a non-capturing group
          [^)(]  = Match anything that isn't a parentheses
          |  = OR
          \(  = Match a start parentheses
              (?:  = Start another non-capturing groups
                  [^)(]+  = Match anything that isn't a parentheses
                  |  = OR
                  \(  = Match a start parentheses
                      [^)(]*  = Match anything that isn't a parentheses
                  \)  = Match a end parentheses
              )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
  \)  = Match a close parens
 	 /gi  = Get all matches, not the first.  Be case insensitive.
  */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl.trim().replace(/^"(.*)"$/, function (o, $1) {
			return $1;
		}).replace(/^'(.*)'$/, function (o, $1) {
			return $1;
		});

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
			return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
			//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (el) {
  var basicTabbables = [];
  var orderedTabbables = [];

  // A node is "available" if
  // - it's computed style
  var isUnavailable = createIsUnavailable();

  var candidateSelectors = ['input', 'select', 'a[href]', 'textarea', 'button', '[tabindex]'];

  var candidates = el.querySelectorAll(candidateSelectors);

  var candidate, candidateIndex;
  for (var i = 0, l = candidates.length; i < l; i++) {
    candidate = candidates[i];
    candidateIndex = parseInt(candidate.getAttribute('tabindex'), 10) || candidate.tabIndex;

    if (candidateIndex < 0 || candidate.tagName === 'INPUT' && candidate.type === 'hidden' || candidate.disabled || isUnavailable(candidate)) {
      continue;
    }

    if (candidateIndex === 0) {
      basicTabbables.push(candidate);
    } else {
      orderedTabbables.push({
        tabIndex: candidateIndex,
        node: candidate
      });
    }
  }

  var tabbableNodes = orderedTabbables.sort(function (a, b) {
    return a.tabIndex - b.tabIndex;
  }).map(function (a) {
    return a.node;
  });

  Array.prototype.push.apply(tabbableNodes, basicTabbables);

  return tabbableNodes;
};

function createIsUnavailable() {
  // Node cache must be refreshed on every check, in case
  // the content of the element has changed
  var isOffCache = [];

  // "off" means `display: none;`, as opposed to "hidden",
  // which means `visibility: hidden;`. getComputedStyle
  // accurately reflects visiblity in context but not
  // "off" state, so we need to recursively check parents.

  function isOff(node, nodeComputedStyle) {
    if (node === document.documentElement) return false;

    // Find the cached node (Array.prototype.find not available in IE9)
    for (var i = 0, length = isOffCache.length; i < length; i++) {
      if (isOffCache[i][0] === node) return isOffCache[i][1];
    }

    nodeComputedStyle = nodeComputedStyle || window.getComputedStyle(node);

    var result = false;

    if (nodeComputedStyle.display === 'none') {
      result = true;
    } else if (node.parentNode) {
      result = isOff(node.parentNode);
    }

    isOffCache.push([node, result]);

    return result;
  }

  return function isUnavailable(node) {
    if (node === document.documentElement) return false;

    var computedStyle = window.getComputedStyle(node);

    if (isOff(node, computedStyle)) return true;

    return computedStyle.visibility === 'hidden';
  };
}

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var g;

// This works in non-strict mode
g = function () {
	return this;
}();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(58)(undefined);
// imports


// module
exports.push([module.i, ".mdc-animation-linear-out-slow-in {\n  animation-timing-function: cubic-bezier(0, 0, 0.2, 1); }\n\n.mdc-animation-fast-out-slow-in {\n  animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1); }\n\n.mdc-animation-fast-out-linear-in {\n  animation-timing-function: cubic-bezier(0.4, 0, 1, 1); }\n\n/**\n * The css property used for elevation. In most cases this should not be changed. It is exposed\n * as a variable for abstraction / easy use when needing to reference the property directly, for\n * example in a `will-change` rule.\n */\n/**\n * The default duration value for elevation transitions.\n */\n/**\n * The default easing value for elevation transitions.\n */\n/**\n * Applies the correct css rules to an element to give it the elevation specified by $z-value.\n * The $z-value must be between 0 and 24.\n */\n/**\n * Returns a string that can be used as the value for a `transition` property for elevation.\n * Calling this function directly is useful in situations where a component needs to transition\n * more than one property.\n *\n * ```scss\n * .foo {\n *   transition: mdc-elevation-transition-rule(), opacity 100ms ease;\n *   will-change: $mdc-elevation-property, opacity;\n * }\n * ```\n */\n/**\n * Applies the correct css rules needed to have an element transition between elevations.\n * This mixin should be applied to elements whose elevation values will change depending on their\n * context (e.g. when active or disabled).\n */\n/*\n  Precomputed linear color channel values, for use in contrast calculations.\n  See https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests\n\n  Algorithm, for c in 0 to 255:\n  f(c) {\n    c = c / 255;\n    return c < 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);\n  }\n\n  This lookup table is needed since there is no `pow` in SASS.\n*/\n/**\n * Calculate the luminance for a color.\n * See https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests\n */\n/**\n * Calculate the contrast ratio between two colors.\n * See https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests\n */\n/**\n * Determine whether to use dark or light text on top of given color.\n * Returns \"dark\" for dark text and \"light\" for light text.\n */\n/*\n  Main theme colors.\n  If you're a user customizing your color scheme in SASS, these are probably the only variables you need to change.\n*/\n/* Indigo 500 */\n/* Pink A200 */\n/* White */\n/* Which set of text colors to use for each main theme color (light or dark) */\n/* Text colors according to light vs dark and text type */\n/* Primary text colors for each of the theme colors */\n/** MDC Ripple keyframes are split into their own file so that _mixins.scss can rely on them. */\n@keyframes mdc-ripple-fg-radius-in {\n  from {\n    transform: translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1);\n    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1); }\n  to {\n    transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1)); } }\n\n@keyframes mdc-ripple-fg-opacity-in {\n  from {\n    opacity: 0;\n    animation-timing-function: linear; }\n  to {\n    opacity: 1; } }\n\n@keyframes mdc-ripple-fg-opacity-out {\n  from {\n    opacity: 1;\n    animation-timing-function: linear; }\n  to {\n    opacity: 0; } }\n\n/*\n  Precomputed linear color channel values, for use in contrast calculations.\n  See https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests\n\n  Algorithm, for c in 0 to 255:\n  f(c) {\n    c = c / 255;\n    return c < 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);\n  }\n\n  This lookup table is needed since there is no `pow` in SASS.\n*/\n/**\n * Calculate the luminance for a color.\n * See https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests\n */\n/**\n * Calculate the contrast ratio between two colors.\n * See https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests\n */\n/**\n * Determine whether to use dark or light text on top of given color.\n * Returns \"dark\" for dark text and \"light\" for light text.\n */\n/*\n  Main theme colors.\n  If you're a user customizing your color scheme in SASS, these are probably the only variables you need to change.\n*/\n/* Indigo 500 */\n/* Pink A200 */\n/* White */\n/* Which set of text colors to use for each main theme color (light or dark) */\n/* Text colors according to light vs dark and text type */\n/* Primary text colors for each of the theme colors */\n/**\n * Applies the correct theme color style to the specified property.\n * $property is typically color or background-color, but can be any CSS property that accepts color values.\n * $style should be one of the map keys in $mdc-theme-property-values (_variables.scss).\n */\n/**\n * Creates a rule to be used in MDC-Web components for dark theming, and applies the provided contents.\n * Should provide the $root-selector option if applied to anything other than the root selector.\n * When used with a modifier class, provide a second argument of `true` for the $compound parameter\n * to specify that this should be attached as a compound class.\n *\n * Usage example:\n *\n * ```scss\n * .mdc-foo {\n *   color: black;\n *\n *   @include mdc-theme-dark {\n *     color: white;\n *   }\n *\n *   &__bar {\n *     background: black;\n *\n *     @include mdc-theme-dark(\".mdc-foo\") {\n *       background: white;\n *     }\n *   }\n * }\n *\n * .mdc-foo--disabled {\n *   opacity: .38;\n *\n *   @include mdc-theme-dark(\".mdc-foo\", true) {\n *     opacity: .5;\n *   }\n * }\n * ```\n */\n/* TODO(sgomes): Figure out what to do about desktop font sizes. */\n/* TODO(sgomes): Figure out what to do about i18n and i18n font sizes. */\n.mdc-button {\n  --mdc-ripple-surface-width: 0;\n  --mdc-ripple-surface-height: 0;\n  --mdc-ripple-fg-size: 0;\n  --mdc-ripple-left: 0;\n  --mdc-ripple-top: 0;\n  --mdc-ripple-fg-scale: 1;\n  --mdc-ripple-fg-translate-end: 0;\n  --mdc-ripple-fg-translate-start: 0;\n  will-change: transform, opacity;\n  -webkit-tap-highlight-color: transparent;\n  font-family: Roboto, sans-serif;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-size: 0.875rem;\n  font-weight: 500;\n  letter-spacing: 0.04em;\n  line-height: 1.5rem;\n  color: rgba(0, 0, 0, 0.87);\n  color: var(--mdc-theme-text-primary-on-light, rgba(0, 0, 0, 0.87));\n  display: inline-block;\n  position: relative;\n  min-width: 64px;\n  height: 36px;\n  padding: 0 16px;\n  border: none;\n  border-radius: 2px;\n  outline: none;\n  background: transparent;\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 36px;\n  text-align: center;\n  text-decoration: none;\n  text-transform: uppercase;\n  overflow: hidden;\n  vertical-align: middle;\n  user-select: none;\n  box-sizing: border-box;\n  -webkit-appearance: none; }\n  .mdc-button:not(.mdc-ripple-upgraded):hover::before, .mdc-button:not(.mdc-ripple-upgraded):focus::before, .mdc-button:not(.mdc-ripple-upgraded):active::after {\n    transition-duration: 85ms;\n    opacity: .6; }\n  .mdc-button::before {\n    background-color: rgba(0, 0, 0, 0.06);\n    position: absolute;\n    top: calc(50% - 100%);\n    left: calc(50% - 100%);\n    width: 200%;\n    height: 200%;\n    transition: opacity 250ms linear;\n    border-radius: 50%;\n    opacity: 0;\n    pointer-events: none;\n    content: \"\"; }\n  .mdc-button.mdc-ripple-upgraded::before {\n    top: calc(50% - 100%);\n    left: calc(50% - 100%);\n    width: 200%;\n    height: 200%;\n    transform: scale(0);\n    transform: scale(var(--mdc-ripple-fg-scale, 0)); }\n  .mdc-button.mdc-ripple-upgraded--background-focused::before {\n    opacity: .99999; }\n  .mdc-button.mdc-ripple-upgraded--background-active-fill::before {\n    transition-duration: 120ms;\n    opacity: 1; }\n  .mdc-button.mdc-ripple-upgraded--unbounded::before {\n    top: calc(50% - 50%);\n    top: var(--mdc-ripple-top, calc(50% - 50%));\n    left: calc(50% - 50%);\n    left: var(--mdc-ripple-left, calc(50% - 50%));\n    width: 100%;\n    width: var(--mdc-ripple-fg-size, 100%);\n    height: 100%;\n    height: var(--mdc-ripple-fg-size, 100%);\n    transform: scale(0);\n    transform: scale(var(--mdc-ripple-fg-scale, 0)); }\n  .mdc-button::after {\n    background-color: rgba(0, 0, 0, 0.06);\n    position: absolute;\n    top: calc(50% - 100%);\n    left: calc(50% - 100%);\n    width: 200%;\n    height: 200%;\n    transition: opacity 250ms linear;\n    border-radius: 50%;\n    opacity: 0;\n    pointer-events: none;\n    content: \"\"; }\n  .mdc-button.mdc-ripple-upgraded::after {\n    top: 0;\n    left: 0;\n    width: 100%;\n    width: var(--mdc-ripple-fg-size, 100%);\n    height: 100%;\n    height: var(--mdc-ripple-fg-size, 100%);\n    transform: scale(0);\n    transform-origin: center center;\n    opacity: 0; }\n  .mdc-button:not(.mdc-ripple-upgraded--unbounded)::after {\n    transform-origin: center center; }\n  .mdc-button.mdc-ripple-upgraded--unbounded::after {\n    top: 0;\n    top: var(--mdc-ripple-top, 0);\n    left: 0;\n    left: var(--mdc-ripple-left, 0);\n    width: 100%;\n    width: var(--mdc-ripple-fg-size, 100%);\n    height: 100%;\n    height: var(--mdc-ripple-fg-size, 100%);\n    transform: scale(0);\n    transform-origin: center center; }\n  .mdc-button.mdc-ripple-upgraded--foreground-activation::after {\n    animation: 300ms mdc-ripple-fg-radius-in forwards, 83ms mdc-ripple-fg-opacity-in forwards; }\n  .mdc-button.mdc-ripple-upgraded--foreground-deactivation::after {\n    transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n    animation: 250ms mdc-ripple-fg-opacity-out; }\n  .mdc-button:not(.mdc-ripple-upgraded) {\n    -webkit-tap-highlight-color: rgba(0, 0, 0, 0.18); }\n  .mdc-button--theme-dark,\n  .mdc-theme--dark .mdc-button {\n    --mdc-ripple-surface-width: 0;\n    --mdc-ripple-surface-height: 0;\n    --mdc-ripple-fg-size: 0;\n    --mdc-ripple-left: 0;\n    --mdc-ripple-top: 0;\n    --mdc-ripple-fg-scale: 1;\n    --mdc-ripple-fg-translate-end: 0;\n    --mdc-ripple-fg-translate-start: 0;\n    will-change: transform, opacity;\n    -webkit-tap-highlight-color: transparent;\n    color: white;\n    color: var(--mdc-theme-text-primary-on-dark, white); }\n    .mdc-button--theme-dark:not(.mdc-ripple-upgraded):hover::before, .mdc-button--theme-dark:not(.mdc-ripple-upgraded):focus::before, .mdc-button--theme-dark:not(.mdc-ripple-upgraded):active::after,\n    .mdc-theme--dark .mdc-button:not(.mdc-ripple-upgraded):hover::before,\n    .mdc-theme--dark .mdc-button:not(.mdc-ripple-upgraded):focus::before,\n    .mdc-theme--dark .mdc-button:not(.mdc-ripple-upgraded):active::after {\n      transition-duration: 85ms;\n      opacity: .6; }\n    .mdc-button--theme-dark::before,\n    .mdc-theme--dark .mdc-button::before {\n      background-color: rgba(255, 255, 255, 0.14);\n      position: absolute;\n      top: calc(50% - 100%);\n      left: calc(50% - 100%);\n      width: 200%;\n      height: 200%;\n      transition: opacity 250ms linear;\n      border-radius: 50%;\n      opacity: 0;\n      pointer-events: none;\n      content: \"\"; }\n    .mdc-button--theme-dark.mdc-ripple-upgraded::before,\n    .mdc-theme--dark .mdc-button.mdc-ripple-upgraded::before {\n      top: calc(50% - 100%);\n      left: calc(50% - 100%);\n      width: 200%;\n      height: 200%;\n      transform: scale(0);\n      transform: scale(var(--mdc-ripple-fg-scale, 0)); }\n    .mdc-button--theme-dark.mdc-ripple-upgraded--background-focused::before,\n    .mdc-theme--dark .mdc-button.mdc-ripple-upgraded--background-focused::before {\n      opacity: .99999; }\n    .mdc-button--theme-dark.mdc-ripple-upgraded--background-active-fill::before,\n    .mdc-theme--dark .mdc-button.mdc-ripple-upgraded--background-active-fill::before {\n      transition-duration: 120ms;\n      opacity: 1; }\n    .mdc-button--theme-dark.mdc-ripple-upgraded--unbounded::before,\n    .mdc-theme--dark .mdc-button.mdc-ripple-upgraded--unbounded::before {\n      top: calc(50% - 50%);\n      top: var(--mdc-ripple-top, calc(50% - 50%));\n      left: calc(50% - 50%);\n      left: var(--mdc-ripple-left, calc(50% - 50%));\n      width: 100%;\n      width: var(--mdc-ripple-fg-size, 100%);\n      height: 100%;\n      height: var(--mdc-ripple-fg-size, 100%);\n      transform: scale(0);\n      transform: scale(var(--mdc-ripple-fg-scale, 0)); }\n    .mdc-button--theme-dark::after,\n    .mdc-theme--dark .mdc-button::after {\n      background-color: rgba(255, 255, 255, 0.14);\n      position: absolute;\n      top: calc(50% - 100%);\n      left: calc(50% - 100%);\n      width: 200%;\n      height: 200%;\n      transition: opacity 250ms linear;\n      border-radius: 50%;\n      opacity: 0;\n      pointer-events: none;\n      content: \"\"; }\n    .mdc-button--theme-dark.mdc-ripple-upgraded::after,\n    .mdc-theme--dark .mdc-button.mdc-ripple-upgraded::after {\n      top: 0;\n      left: 0;\n      width: 100%;\n      width: var(--mdc-ripple-fg-size, 100%);\n      height: 100%;\n      height: var(--mdc-ripple-fg-size, 100%);\n      transform: scale(0);\n      transform-origin: center center;\n      opacity: 0; }\n    .mdc-button--theme-dark:not(.mdc-ripple-upgraded--unbounded)::after,\n    .mdc-theme--dark .mdc-button:not(.mdc-ripple-upgraded--unbounded)::after {\n      transform-origin: center center; }\n    .mdc-button--theme-dark.mdc-ripple-upgraded--unbounded::after,\n    .mdc-theme--dark .mdc-button.mdc-ripple-upgraded--unbounded::after {\n      top: 0;\n      top: var(--mdc-ripple-top, 0);\n      left: 0;\n      left: var(--mdc-ripple-left, 0);\n      width: 100%;\n      width: var(--mdc-ripple-fg-size, 100%);\n      height: 100%;\n      height: var(--mdc-ripple-fg-size, 100%);\n      transform: scale(0);\n      transform-origin: center center; }\n    .mdc-button--theme-dark.mdc-ripple-upgraded--foreground-activation::after,\n    .mdc-theme--dark .mdc-button.mdc-ripple-upgraded--foreground-activation::after {\n      animation: 300ms mdc-ripple-fg-radius-in forwards, 83ms mdc-ripple-fg-opacity-in forwards; }\n    .mdc-button--theme-dark.mdc-ripple-upgraded--foreground-deactivation::after,\n    .mdc-theme--dark .mdc-button.mdc-ripple-upgraded--foreground-deactivation::after {\n      transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n      animation: 250ms mdc-ripple-fg-opacity-out; }\n    .mdc-button--theme-dark:not(.mdc-ripple-upgraded),\n    .mdc-theme--dark .mdc-button:not(.mdc-ripple-upgraded) {\n      -webkit-tap-highlight-color: rgba(255, 255, 255, 0.18); }\n  .mdc-button.mdc-button--primary {\n    --mdc-ripple-surface-width: 0;\n    --mdc-ripple-surface-height: 0;\n    --mdc-ripple-fg-size: 0;\n    --mdc-ripple-left: 0;\n    --mdc-ripple-top: 0;\n    --mdc-ripple-fg-scale: 1;\n    --mdc-ripple-fg-translate-end: 0;\n    --mdc-ripple-fg-translate-start: 0;\n    will-change: transform, opacity;\n    -webkit-tap-highlight-color: transparent; }\n    .mdc-button.mdc-button--primary:not(.mdc-ripple-upgraded):hover::before, .mdc-button.mdc-button--primary:not(.mdc-ripple-upgraded):focus::before, .mdc-button.mdc-button--primary:not(.mdc-ripple-upgraded):active::after {\n      transition-duration: 85ms;\n      opacity: .6; }\n    .mdc-button.mdc-button--primary::before {\n      background-color: rgba(63, 81, 181, 0.12);\n      position: absolute;\n      top: calc(50% - 100%);\n      left: calc(50% - 100%);\n      width: 200%;\n      height: 200%;\n      transition: opacity 250ms linear;\n      border-radius: 50%;\n      opacity: 0;\n      pointer-events: none;\n      content: \"\"; }\n      @supports (background-color: color(green a(10%))) {\n        .mdc-button.mdc-button--primary::before {\n          background-color: color(var(--mdc-theme-primary, #3f51b5) a(12%)); } }\n    .mdc-button.mdc-button--primary.mdc-ripple-upgraded::before {\n      top: calc(50% - 100%);\n      left: calc(50% - 100%);\n      width: 200%;\n      height: 200%;\n      transform: scale(0);\n      transform: scale(var(--mdc-ripple-fg-scale, 0)); }\n    .mdc-button.mdc-button--primary.mdc-ripple-upgraded--background-focused::before {\n      opacity: .99999; }\n    .mdc-button.mdc-button--primary.mdc-ripple-upgraded--background-active-fill::before {\n      transition-duration: 120ms;\n      opacity: 1; }\n    .mdc-button.mdc-button--primary.mdc-ripple-upgraded--unbounded::before {\n      top: calc(50% - 50%);\n      top: var(--mdc-ripple-top, calc(50% - 50%));\n      left: calc(50% - 50%);\n      left: var(--mdc-ripple-left, calc(50% - 50%));\n      width: 100%;\n      width: var(--mdc-ripple-fg-size, 100%);\n      height: 100%;\n      height: var(--mdc-ripple-fg-size, 100%);\n      transform: scale(0);\n      transform: scale(var(--mdc-ripple-fg-scale, 0)); }\n    .mdc-button.mdc-button--primary::after {\n      background-color: rgba(63, 81, 181, 0.12);\n      position: absolute;\n      top: calc(50% - 100%);\n      left: calc(50% - 100%);\n      width: 200%;\n      height: 200%;\n      transition: opacity 250ms linear;\n      border-radius: 50%;\n      opacity: 0;\n      pointer-events: none;\n      content: \"\"; }\n      @supports (background-color: color(green a(10%))) {\n        .mdc-button.mdc-button--primary::after {\n          background-color: color(var(--mdc-theme-primary, #3f51b5) a(12%)); } }\n    .mdc-button.mdc-button--primary.mdc-ripple-upgraded::after {\n      top: 0;\n      left: 0;\n      width: 100%;\n      width: var(--mdc-ripple-fg-size, 100%);\n      height: 100%;\n      height: var(--mdc-ripple-fg-size, 100%);\n      transform: scale(0);\n      transform-origin: center center;\n      opacity: 0; }\n    .mdc-button.mdc-button--primary:not(.mdc-ripple-upgraded--unbounded)::after {\n      transform-origin: center center; }\n    .mdc-button.mdc-button--primary.mdc-ripple-upgraded--unbounded::after {\n      top: 0;\n      top: var(--mdc-ripple-top, 0);\n      left: 0;\n      left: var(--mdc-ripple-left, 0);\n      width: 100%;\n      width: var(--mdc-ripple-fg-size, 100%);\n      height: 100%;\n      height: var(--mdc-ripple-fg-size, 100%);\n      transform: scale(0);\n      transform-origin: center center; }\n    .mdc-button.mdc-button--primary.mdc-ripple-upgraded--foreground-activation::after {\n      animation: 300ms mdc-ripple-fg-radius-in forwards, 83ms mdc-ripple-fg-opacity-in forwards; }\n    .mdc-button.mdc-button--primary.mdc-ripple-upgraded--foreground-deactivation::after {\n      transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n      animation: 250ms mdc-ripple-fg-opacity-out; }\n  .mdc-button.mdc-button--accent {\n    --mdc-ripple-surface-width: 0;\n    --mdc-ripple-surface-height: 0;\n    --mdc-ripple-fg-size: 0;\n    --mdc-ripple-left: 0;\n    --mdc-ripple-top: 0;\n    --mdc-ripple-fg-scale: 1;\n    --mdc-ripple-fg-translate-end: 0;\n    --mdc-ripple-fg-translate-start: 0;\n    will-change: transform, opacity;\n    -webkit-tap-highlight-color: transparent; }\n    .mdc-button.mdc-button--accent:not(.mdc-ripple-upgraded):hover::before, .mdc-button.mdc-button--accent:not(.mdc-ripple-upgraded):focus::before, .mdc-button.mdc-button--accent:not(.mdc-ripple-upgraded):active::after {\n      transition-duration: 85ms;\n      opacity: .6; }\n    .mdc-button.mdc-button--accent::before {\n      background-color: rgba(255, 64, 129, 0.12);\n      position: absolute;\n      top: calc(50% - 100%);\n      left: calc(50% - 100%);\n      width: 200%;\n      height: 200%;\n      transition: opacity 250ms linear;\n      border-radius: 50%;\n      opacity: 0;\n      pointer-events: none;\n      content: \"\"; }\n      @supports (background-color: color(green a(10%))) {\n        .mdc-button.mdc-button--accent::before {\n          background-color: color(var(--mdc-theme-accent, #ff4081) a(12%)); } }\n    .mdc-button.mdc-button--accent.mdc-ripple-upgraded::before {\n      top: calc(50% - 100%);\n      left: calc(50% - 100%);\n      width: 200%;\n      height: 200%;\n      transform: scale(0);\n      transform: scale(var(--mdc-ripple-fg-scale, 0)); }\n    .mdc-button.mdc-button--accent.mdc-ripple-upgraded--background-focused::before {\n      opacity: .99999; }\n    .mdc-button.mdc-button--accent.mdc-ripple-upgraded--background-active-fill::before {\n      transition-duration: 120ms;\n      opacity: 1; }\n    .mdc-button.mdc-button--accent.mdc-ripple-upgraded--unbounded::before {\n      top: calc(50% - 50%);\n      top: var(--mdc-ripple-top, calc(50% - 50%));\n      left: calc(50% - 50%);\n      left: var(--mdc-ripple-left, calc(50% - 50%));\n      width: 100%;\n      width: var(--mdc-ripple-fg-size, 100%);\n      height: 100%;\n      height: var(--mdc-ripple-fg-size, 100%);\n      transform: scale(0);\n      transform: scale(var(--mdc-ripple-fg-scale, 0)); }\n    .mdc-button.mdc-button--accent::after {\n      background-color: rgba(255, 64, 129, 0.12);\n      position: absolute;\n      top: calc(50% - 100%);\n      left: calc(50% - 100%);\n      width: 200%;\n      height: 200%;\n      transition: opacity 250ms linear;\n      border-radius: 50%;\n      opacity: 0;\n      pointer-events: none;\n      content: \"\"; }\n      @supports (background-color: color(green a(10%))) {\n        .mdc-button.mdc-button--accent::after {\n          background-color: color(var(--mdc-theme-accent, #ff4081) a(12%)); } }\n    .mdc-button.mdc-button--accent.mdc-ripple-upgraded::after {\n      top: 0;\n      left: 0;\n      width: 100%;\n      width: var(--mdc-ripple-fg-size, 100%);\n      height: 100%;\n      height: var(--mdc-ripple-fg-size, 100%);\n      transform: scale(0);\n      transform-origin: center center;\n      opacity: 0; }\n    .mdc-button.mdc-button--accent:not(.mdc-ripple-upgraded--unbounded)::after {\n      transform-origin: center center; }\n    .mdc-button.mdc-button--accent.mdc-ripple-upgraded--unbounded::after {\n      top: 0;\n      top: var(--mdc-ripple-top, 0);\n      left: 0;\n      left: var(--mdc-ripple-left, 0);\n      width: 100%;\n      width: var(--mdc-ripple-fg-size, 100%);\n      height: 100%;\n      height: var(--mdc-ripple-fg-size, 100%);\n      transform: scale(0);\n      transform-origin: center center; }\n    .mdc-button.mdc-button--accent.mdc-ripple-upgraded--foreground-activation::after {\n      animation: 300ms mdc-ripple-fg-radius-in forwards, 83ms mdc-ripple-fg-opacity-in forwards; }\n    .mdc-button.mdc-button--accent.mdc-ripple-upgraded--foreground-deactivation::after {\n      transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n      animation: 250ms mdc-ripple-fg-opacity-out; }\n  .mdc-button:active {\n    outline: none; }\n  .mdc-button:hover {\n    cursor: pointer; }\n  .mdc-button::-moz-focus-inner {\n    padding: 0;\n    border: 0; }\n  .mdc-button--dense {\n    height: 32px;\n    font-size: .8125rem;\n    line-height: 32px; }\n  .mdc-button--raised {\n    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n    transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);\n    will-change: box-shadow;\n    min-width: 88px; }\n    .mdc-button--raised:active {\n      box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12); }\n    .mdc-button--raised.mdc-button--primary {\n      --mdc-ripple-surface-width: 0;\n      --mdc-ripple-surface-height: 0;\n      --mdc-ripple-fg-size: 0;\n      --mdc-ripple-left: 0;\n      --mdc-ripple-top: 0;\n      --mdc-ripple-fg-scale: 1;\n      --mdc-ripple-fg-translate-end: 0;\n      --mdc-ripple-fg-translate-start: 0;\n      will-change: transform, opacity;\n      -webkit-tap-highlight-color: transparent; }\n      .mdc-button--raised.mdc-button--primary:not(.mdc-ripple-upgraded):hover::before, .mdc-button--raised.mdc-button--primary:not(.mdc-ripple-upgraded):focus::before, .mdc-button--raised.mdc-button--primary:not(.mdc-ripple-upgraded):active::after {\n        transition-duration: 85ms;\n        opacity: .6; }\n      .mdc-button--raised.mdc-button--primary::before {\n        background-color: rgba(255, 255, 255, 0.14);\n        position: absolute;\n        top: calc(50% - 100%);\n        left: calc(50% - 100%);\n        width: 200%;\n        height: 200%;\n        transition: opacity 250ms linear;\n        border-radius: 50%;\n        opacity: 0;\n        pointer-events: none;\n        content: \"\"; }\n      .mdc-button--raised.mdc-button--primary.mdc-ripple-upgraded::before {\n        top: calc(50% - 100%);\n        left: calc(50% - 100%);\n        width: 200%;\n        height: 200%;\n        transform: scale(0);\n        transform: scale(var(--mdc-ripple-fg-scale, 0)); }\n      .mdc-button--raised.mdc-button--primary.mdc-ripple-upgraded--background-focused::before {\n        opacity: .99999; }\n      .mdc-button--raised.mdc-button--primary.mdc-ripple-upgraded--background-active-fill::before {\n        transition-duration: 120ms;\n        opacity: 1; }\n      .mdc-button--raised.mdc-button--primary.mdc-ripple-upgraded--unbounded::before {\n        top: calc(50% - 50%);\n        top: var(--mdc-ripple-top, calc(50% - 50%));\n        left: calc(50% - 50%);\n        left: var(--mdc-ripple-left, calc(50% - 50%));\n        width: 100%;\n        width: var(--mdc-ripple-fg-size, 100%);\n        height: 100%;\n        height: var(--mdc-ripple-fg-size, 100%);\n        transform: scale(0);\n        transform: scale(var(--mdc-ripple-fg-scale, 0)); }\n      .mdc-button--raised.mdc-button--primary::after {\n        background-color: rgba(255, 255, 255, 0.14);\n        position: absolute;\n        top: calc(50% - 100%);\n        left: calc(50% - 100%);\n        width: 200%;\n        height: 200%;\n        transition: opacity 250ms linear;\n        border-radius: 50%;\n        opacity: 0;\n        pointer-events: none;\n        content: \"\"; }\n      .mdc-button--raised.mdc-button--primary.mdc-ripple-upgraded::after {\n        top: 0;\n        left: 0;\n        width: 100%;\n        width: var(--mdc-ripple-fg-size, 100%);\n        height: 100%;\n        height: var(--mdc-ripple-fg-size, 100%);\n        transform: scale(0);\n        transform-origin: center center;\n        opacity: 0; }\n      .mdc-button--raised.mdc-button--primary:not(.mdc-ripple-upgraded--unbounded)::after {\n        transform-origin: center center; }\n      .mdc-button--raised.mdc-button--primary.mdc-ripple-upgraded--unbounded::after {\n        top: 0;\n        top: var(--mdc-ripple-top, 0);\n        left: 0;\n        left: var(--mdc-ripple-left, 0);\n        width: 100%;\n        width: var(--mdc-ripple-fg-size, 100%);\n        height: 100%;\n        height: var(--mdc-ripple-fg-size, 100%);\n        transform: scale(0);\n        transform-origin: center center; }\n      .mdc-button--raised.mdc-button--primary.mdc-ripple-upgraded--foreground-activation::after {\n        animation: 300ms mdc-ripple-fg-radius-in forwards, 83ms mdc-ripple-fg-opacity-in forwards; }\n      .mdc-button--raised.mdc-button--primary.mdc-ripple-upgraded--foreground-deactivation::after {\n        transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n        animation: 250ms mdc-ripple-fg-opacity-out; }\n    .mdc-button--raised.mdc-button--accent {\n      --mdc-ripple-surface-width: 0;\n      --mdc-ripple-surface-height: 0;\n      --mdc-ripple-fg-size: 0;\n      --mdc-ripple-left: 0;\n      --mdc-ripple-top: 0;\n      --mdc-ripple-fg-scale: 1;\n      --mdc-ripple-fg-translate-end: 0;\n      --mdc-ripple-fg-translate-start: 0;\n      will-change: transform, opacity;\n      -webkit-tap-highlight-color: transparent; }\n      .mdc-button--raised.mdc-button--accent:not(.mdc-ripple-upgraded):hover::before, .mdc-button--raised.mdc-button--accent:not(.mdc-ripple-upgraded):focus::before, .mdc-button--raised.mdc-button--accent:not(.mdc-ripple-upgraded):active::after {\n        transition-duration: 85ms;\n        opacity: .6; }\n      .mdc-button--raised.mdc-button--accent::before {\n        background-color: rgba(255, 255, 255, 0.14);\n        position: absolute;\n        top: calc(50% - 100%);\n        left: calc(50% - 100%);\n        width: 200%;\n        height: 200%;\n        transition: opacity 250ms linear;\n        border-radius: 50%;\n        opacity: 0;\n        pointer-events: none;\n        content: \"\"; }\n      .mdc-button--raised.mdc-button--accent.mdc-ripple-upgraded::before {\n        top: calc(50% - 100%);\n        left: calc(50% - 100%);\n        width: 200%;\n        height: 200%;\n        transform: scale(0);\n        transform: scale(var(--mdc-ripple-fg-scale, 0)); }\n      .mdc-button--raised.mdc-button--accent.mdc-ripple-upgraded--background-focused::before {\n        opacity: .99999; }\n      .mdc-button--raised.mdc-button--accent.mdc-ripple-upgraded--background-active-fill::before {\n        transition-duration: 120ms;\n        opacity: 1; }\n      .mdc-button--raised.mdc-button--accent.mdc-ripple-upgraded--unbounded::before {\n        top: calc(50% - 50%);\n        top: var(--mdc-ripple-top, calc(50% - 50%));\n        left: calc(50% - 50%);\n        left: var(--mdc-ripple-left, calc(50% - 50%));\n        width: 100%;\n        width: var(--mdc-ripple-fg-size, 100%);\n        height: 100%;\n        height: var(--mdc-ripple-fg-size, 100%);\n        transform: scale(0);\n        transform: scale(var(--mdc-ripple-fg-scale, 0)); }\n      .mdc-button--raised.mdc-button--accent::after {\n        background-color: rgba(255, 255, 255, 0.14);\n        position: absolute;\n        top: calc(50% - 100%);\n        left: calc(50% - 100%);\n        width: 200%;\n        height: 200%;\n        transition: opacity 250ms linear;\n        border-radius: 50%;\n        opacity: 0;\n        pointer-events: none;\n        content: \"\"; }\n      .mdc-button--raised.mdc-button--accent.mdc-ripple-upgraded::after {\n        top: 0;\n        left: 0;\n        width: 100%;\n        width: var(--mdc-ripple-fg-size, 100%);\n        height: 100%;\n        height: var(--mdc-ripple-fg-size, 100%);\n        transform: scale(0);\n        transform-origin: center center;\n        opacity: 0; }\n      .mdc-button--raised.mdc-button--accent:not(.mdc-ripple-upgraded--unbounded)::after {\n        transform-origin: center center; }\n      .mdc-button--raised.mdc-button--accent.mdc-ripple-upgraded--unbounded::after {\n        top: 0;\n        top: var(--mdc-ripple-top, 0);\n        left: 0;\n        left: var(--mdc-ripple-left, 0);\n        width: 100%;\n        width: var(--mdc-ripple-fg-size, 100%);\n        height: 100%;\n        height: var(--mdc-ripple-fg-size, 100%);\n        transform: scale(0);\n        transform-origin: center center; }\n      .mdc-button--raised.mdc-button--accent.mdc-ripple-upgraded--foreground-activation::after {\n        animation: 300ms mdc-ripple-fg-radius-in forwards, 83ms mdc-ripple-fg-opacity-in forwards; }\n      .mdc-button--raised.mdc-button--accent.mdc-ripple-upgraded--foreground-deactivation::after {\n        transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n        animation: 250ms mdc-ripple-fg-opacity-out; }\n    .mdc-button--theme-dark .mdc-button--raised,\n    .mdc-theme--dark .mdc-button--raised {\n      background-color: #3f51b5;\n      background-color: var(--mdc-theme-primary, #3f51b5); }\n      .mdc-button--theme-dark .mdc-button--raised::before,\n      .mdc-theme--dark .mdc-button--raised::before {\n        color: black; }\n  .mdc-button--primary {\n    color: #3f51b5;\n    color: var(--mdc-theme-primary, #3f51b5); }\n    .mdc-button--theme-dark .mdc-button--primary,\n    .mdc-theme--dark .mdc-button--primary {\n      color: #3f51b5;\n      color: var(--mdc-theme-primary, #3f51b5); }\n    .mdc-button--primary.mdc-button--raised {\n      background-color: #3f51b5;\n      background-color: var(--mdc-theme-primary, #3f51b5);\n      color: white;\n      color: var(--mdc-theme-text-primary-on-primary, white); }\n      .mdc-button--primary.mdc-button--raised::before {\n        color: black; }\n  .mdc-button--accent {\n    color: #ff4081;\n    color: var(--mdc-theme-accent, #ff4081); }\n    .mdc-button--theme-dark .mdc-button--accent,\n    .mdc-theme--dark .mdc-button--accent {\n      color: #ff4081;\n      color: var(--mdc-theme-accent, #ff4081); }\n    .mdc-button--accent.mdc-button--raised {\n      background-color: #ff4081;\n      background-color: var(--mdc-theme-accent, #ff4081);\n      color: white;\n      color: var(--mdc-theme-text-primary-on-accent, white); }\n      .mdc-button--accent.mdc-button--raised::before {\n        color: black; }\n  .mdc-button--compact {\n    padding: 0 8px; }\n  fieldset:disabled .mdc-button, .mdc-button:disabled {\n    color: rgba(0, 0, 0, 0.26);\n    cursor: default;\n    pointer-events: none; }\n    .mdc-button--theme-dark fieldset:disabled .mdc-button,\n    .mdc-theme--dark fieldset:disabled .mdc-button, .mdc-button--theme-dark .mdc-button:disabled,\n    .mdc-theme--dark .mdc-button:disabled {\n      color: rgba(255, 255, 255, 0.3); }\n  fieldset:disabled .mdc-button--raised, .mdc-button--raised:disabled {\n    box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);\n    background-color: rgba(0, 0, 0, 0.12);\n    pointer-events: none; }\n    .mdc-button--theme-dark fieldset:disabled .mdc-button--raised,\n    .mdc-theme--dark fieldset:disabled .mdc-button--raised, .mdc-button--theme-dark .mdc-button--raised:disabled,\n    .mdc-theme--dark .mdc-button--raised:disabled {\n      background-color: rgba(255, 255, 255, 0.12); }\n\n/**\n * The css property used for elevation. In most cases this should not be changed. It is exposed\n * as a variable for abstraction / easy use when needing to reference the property directly, for\n * example in a `will-change` rule.\n */\n/**\n * The default duration value for elevation transitions.\n */\n/**\n * The default easing value for elevation transitions.\n */\n/**\n * Applies the correct css rules to an element to give it the elevation specified by $z-value.\n * The $z-value must be between 0 and 24.\n */\n/**\n * Returns a string that can be used as the value for a `transition` property for elevation.\n * Calling this function directly is useful in situations where a component needs to transition\n * more than one property.\n *\n * ```scss\n * .foo {\n *   transition: mdc-elevation-transition-rule(), opacity 100ms ease;\n *   will-change: $mdc-elevation-property, opacity;\n * }\n * ```\n */\n/**\n * Applies the correct css rules needed to have an element transition between elevations.\n * This mixin should be applied to elements whose elevation values will change depending on their\n * context (e.g. when active or disabled).\n */\n/*\n  Precomputed linear color channel values, for use in contrast calculations.\n  See https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests\n\n  Algorithm, for c in 0 to 255:\n  f(c) {\n    c = c / 255;\n    return c < 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);\n  }\n\n  This lookup table is needed since there is no `pow` in SASS.\n*/\n/**\n * Calculate the luminance for a color.\n * See https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests\n */\n/**\n * Calculate the contrast ratio between two colors.\n * See https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests\n */\n/**\n * Determine whether to use dark or light text on top of given color.\n * Returns \"dark\" for dark text and \"light\" for light text.\n */\n/*\n  Main theme colors.\n  If you're a user customizing your color scheme in SASS, these are probably the only variables you need to change.\n*/\n/* Indigo 500 */\n/* Pink A200 */\n/* White */\n/* Which set of text colors to use for each main theme color (light or dark) */\n/* Text colors according to light vs dark and text type */\n/* Primary text colors for each of the theme colors */\n/**\n * Applies the correct theme color style to the specified property.\n * $property is typically color or background-color, but can be any CSS property that accepts color values.\n * $style should be one of the map keys in $mdc-theme-property-values (_variables.scss).\n */\n/**\n * Creates a rule to be used in MDC-Web components for dark theming, and applies the provided contents.\n * Should provide the $root-selector option if applied to anything other than the root selector.\n * When used with a modifier class, provide a second argument of `true` for the $compound parameter\n * to specify that this should be attached as a compound class.\n *\n * Usage example:\n *\n * ```scss\n * .mdc-foo {\n *   color: black;\n *\n *   @include mdc-theme-dark {\n *     color: white;\n *   }\n *\n *   &__bar {\n *     background: black;\n *\n *     @include mdc-theme-dark(\".mdc-foo\") {\n *       background: white;\n *     }\n *   }\n * }\n *\n * .mdc-foo--disabled {\n *   opacity: .38;\n *\n *   @include mdc-theme-dark(\".mdc-foo\", true) {\n *     opacity: .5;\n *   }\n * }\n * ```\n */\n/* TODO(sgomes): Figure out what to do about desktop font sizes. */\n/* TODO(sgomes): Figure out what to do about i18n and i18n font sizes. */\n.mdc-card {\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  padding: 0;\n  box-sizing: border-box; }\n  .mdc-card__primary {\n    padding: 16px; }\n    .mdc-card__primary .mdc-card__title--large {\n      padding-top: 8px; }\n    .mdc-card__primary:last-child {\n      padding-bottom: 24px; }\n  .mdc-card__supporting-text {\n    padding: 8px 16px;\n    box-sizing: border-box;\n    font-family: Roboto, sans-serif;\n    -moz-osx-font-smoothing: grayscale;\n    -webkit-font-smoothing: antialiased;\n    font-size: 0.875rem;\n    font-weight: 400;\n    letter-spacing: 0.04em;\n    line-height: 1.25rem;\n    color: rgba(0, 0, 0, 0.87);\n    color: var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87)); }\n    .mdc-card--theme-dark .mdc-card__supporting-text,\n    .mdc-theme--dark .mdc-card__supporting-text {\n      color: white;\n      color: var(--mdc-theme-text-primary-on-dark, white); }\n    .mdc-card__primary + .mdc-card__supporting-text {\n      margin-top: -8px;\n      padding-top: 0; }\n    .mdc-card__supporting-text:last-child {\n      padding-bottom: 24px; }\n  .mdc-card__actions {\n    display: flex;\n    padding: 8px;\n    box-sizing: border-box; }\n    .mdc-card--theme-dark .mdc-card__actions,\n    .mdc-theme--dark .mdc-card__actions {\n      color: white;\n      color: var(--mdc-theme-text-primary-on-dark, white); }\n    .mdc-card__actions .mdc-card__action {\n      margin: 0 8px 0 0; }\n    .mdc-card__actions .mdc-card__action:last-child {\n      margin-right: 0; }\n    .mdc-card__actions--vertical {\n      flex-flow: column;\n      align-items: flex-start; }\n      .mdc-card__actions--vertical .mdc-card__action {\n        margin: 0 0 4px; }\n      .mdc-card__actions--vertical .mdc-card__action:last-child {\n        margin-bottom: 0; }\n  .mdc-card__media {\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-end;\n    padding: 16px;\n    box-sizing: border-box; }\n  .mdc-card__media-item {\n    display: inline-block;\n    width: auto;\n    height: 80px;\n    margin: 16px 0 0;\n    padding: 0; }\n    .mdc-card__media-item--1dot5x {\n      width: auto;\n      height: 120px; }\n    .mdc-card__media-item--2x {\n      width: auto;\n      height: 160px; }\n    .mdc-card__media-item--3x {\n      width: auto;\n      height: 240px; }\n  .mdc-card__title {\n    font-family: Roboto, sans-serif;\n    -moz-osx-font-smoothing: grayscale;\n    -webkit-font-smoothing: antialiased;\n    font-size: 0.875rem;\n    font-weight: 500;\n    letter-spacing: 0.04em;\n    line-height: 1.5rem;\n    color: rgba(0, 0, 0, 0.87);\n    color: var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87));\n    margin: -.063rem 0; }\n    .mdc-card--theme-dark .mdc-card__title,\n    .mdc-theme--dark .mdc-card__title {\n      color: white;\n      color: var(--mdc-theme-text-primary-on-dark, white); }\n  .mdc-card__title--large {\n    font-family: Roboto, sans-serif;\n    -moz-osx-font-smoothing: grayscale;\n    -webkit-font-smoothing: antialiased;\n    font-size: 1.5rem;\n    font-weight: 400;\n    letter-spacing: normal;\n    line-height: 2rem;\n    margin: 0; }\n  .mdc-card__subtitle {\n    font-family: Roboto, sans-serif;\n    -moz-osx-font-smoothing: grayscale;\n    -webkit-font-smoothing: antialiased;\n    font-size: 0.875rem;\n    font-weight: 400;\n    letter-spacing: 0.04em;\n    line-height: 1.25rem;\n    color: rgba(0, 0, 0, 0.87);\n    color: var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87));\n    margin: -.063rem 0; }\n    .mdc-card--theme-dark .mdc-card__subtitle,\n    .mdc-theme--dark .mdc-card__subtitle {\n      color: white;\n      color: var(--mdc-theme-text-primary-on-dark, white); }\n  .mdc-card__horizontal-block {\n    display: flex;\n    flex-direction: row;\n    align-items: flex-start;\n    justify-content: space-between;\n    padding: 0 16px 0 0;\n    box-sizing: border-box; }\n    .mdc-card__horizontal-block .mdc-card__actions--vertical {\n      margin: 16px; }\n    .mdc-card__horizontal-block .mdc-card__media-item {\n      margin-left: 16px; }\n    .mdc-card__horizontal-block .mdc-card__media-item--3x {\n      margin-bottom: 16px; }\n\n/*\n  Precomputed linear color channel values, for use in contrast calculations.\n  See https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests\n\n  Algorithm, for c in 0 to 255:\n  f(c) {\n    c = c / 255;\n    return c < 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);\n  }\n\n  This lookup table is needed since there is no `pow` in SASS.\n*/\n/**\n * Calculate the luminance for a color.\n * See https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests\n */\n/**\n * Calculate the contrast ratio between two colors.\n * See https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests\n */\n/**\n * Determine whether to use dark or light text on top of given color.\n * Returns \"dark\" for dark text and \"light\" for light text.\n */\n/*\n  Main theme colors.\n  If you're a user customizing your color scheme in SASS, these are probably the only variables you need to change.\n*/\n/* Indigo 500 */\n/* Pink A200 */\n/* White */\n/* Which set of text colors to use for each main theme color (light or dark) */\n/* Text colors according to light vs dark and text type */\n/* Primary text colors for each of the theme colors */\n/** MDC Ripple keyframes are split into their own file so that _mixins.scss can rely on them. */\n@keyframes mdc-ripple-fg-radius-in {\n  from {\n    transform: translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1);\n    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1); }\n  to {\n    transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1)); } }\n\n@keyframes mdc-ripple-fg-opacity-in {\n  from {\n    opacity: 0;\n    animation-timing-function: linear; }\n  to {\n    opacity: 1; } }\n\n@keyframes mdc-ripple-fg-opacity-out {\n  from {\n    opacity: 1;\n    animation-timing-function: linear; }\n  to {\n    opacity: 0; } }\n\n/**\n * Creates a rule that will be applied when an MDC-Web component is within the context of an RTL layout.\n *\n * Usage Example:\n * ```scss\n * .mdc-foo {\n *   position: absolute;\n *   left: 0;\n *\n *   @include mdc-rtl {\n *     left: auto;\n *     right: 0;\n *   }\n *\n *   &__bar {\n *     margin-left: 4px;\n *     @include mdc-rtl(\".mdc-foo\") {\n *       margin-left: auto;\n *       margin-right: 4px;\n *     }\n *   }\n * }\n *\n * .mdc-foo--mod {\n *   padding-left: 4px;\n *\n *   @include mdc-rtl {\n *     padding-left: auto;\n *     padding-right: 4px;\n *   }\n * }\n * ```\n *\n * Note that this works by checking for [dir=\"rtl\"] on an ancestor element. While this will work\n * in most cases, it will in some cases lead to false negatives, e.g.\n *\n * ```html\n * <html dir=\"rtl\">\n *   <!-- ... -->\n *   <div dir=\"ltr\">\n *     <div class=\"mdc-foo\">Styled incorrectly as RTL!</div>\n *   </div>\n * </html>\n * ```\n *\n * In the future, selectors such as :dir (http://mdn.io/:dir) will help us mitigate this.\n */\n/**\n * Takes a base box-model property - e.g. margin / border / padding - along with a default\n * direction and value, and emits rules which apply the value to the\n * \"<base-property>-<default-direction>\" property by default, but flips the direction\n * when within an RTL context.\n *\n * For example:\n *\n * ```scss\n * .mdc-foo {\n *   @include mdc-rtl-reflexive-box(margin, left, 8px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-left: 8px;\n *\n *   @include mdc-rtl {\n *     margin-right: 8px;\n *     margin-left: 0;\n *   }\n * }\n * ```\n * whereas:\n *\n * ```scss\n * .mdc-foo {\n *   @include mdc-rtl-reflexive-box(margin, right, 8px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-right: 8px;\n *\n *   @include mdc-rtl {\n *     margin-right: 0;\n *     margin-left: 8px;\n *   }\n * }\n * ```\n *\n * You can also pass a 4th optional $root-selector argument which will be forwarded to `mdc-rtl`,\n * e.g. `@include mdc-rtl-reflexive-box-property(margin, left, 8px, \".mdc-component\")`.\n *\n * Note that this function will always zero out the original value in an RTL context. If you're\n * trying to flip the values, use mdc-rtl-reflexive-property().\n */\n/**\n * Takes a base property and emits rules that assign <base-property>-left to <left-value> and\n * <base-property>-right to <right-value> in a LTR context, and vice versa in a RTL context.\n * For example:\n *\n * ```scss\n * .mdc-foo {\n *   @include mdc-rtl-reflexive-property(margin, auto, 12px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-left: auto;\n *   margin-right: 12px;\n *\n *   @include mdc-rtl {\n *     margin-left: 12px;\n *     margin-right: auto;\n *   }\n * }\n * ```\n *\n * A 4th optional $root-selector argument can be given, which will be passed to `mdc-rtl`.\n */\n/**\n * Takes an argument specifying a horizontal position property (either \"left\" or \"right\") as well\n * as a value, and applies that value to the specified position in a LTR context, and flips it in a\n * RTL context. For example:\n *\n * ```scss\n * .mdc-foo {\n *   @include mdc-rtl-reflexive-position(left, 0);\n *   position: absolute;\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n *  .mdc-foo {\n *    position: absolute;\n *    left: 0;\n *    right: initial;\n *\n *    @include mdc-rtl {\n *      right: 0;\n *      left: initial;\n *    }\n *  }\n * ```\n * An optional third $root-selector argument may also be given, which is passed to `mdc-rtl`.\n */\n/* Manual calculation done on SVG */\n/*\n  Precomputed linear color channel values, for use in contrast calculations.\n  See https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests\n\n  Algorithm, for c in 0 to 255:\n  f(c) {\n    c = c / 255;\n    return c < 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);\n  }\n\n  This lookup table is needed since there is no `pow` in SASS.\n*/\n/**\n * Calculate the luminance for a color.\n * See https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests\n */\n/**\n * Calculate the contrast ratio between two colors.\n * See https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests\n */\n/**\n * Determine whether to use dark or light text on top of given color.\n * Returns \"dark\" for dark text and \"light\" for light text.\n */\n/*\n  Main theme colors.\n  If you're a user customizing your color scheme in SASS, these are probably the only variables you need to change.\n*/\n/* Indigo 500 */\n/* Pink A200 */\n/* White */\n/* Which set of text colors to use for each main theme color (light or dark) */\n/* Text colors according to light vs dark and text type */\n/* Primary text colors for each of the theme colors */\n/**\n * Applies the correct theme color style to the specified property.\n * $property is typically color or background-color, but can be any CSS property that accepts color values.\n * $style should be one of the map keys in $mdc-theme-property-values (_variables.scss).\n */\n/**\n * Creates a rule to be used in MDC-Web components for dark theming, and applies the provided contents.\n * Should provide the $root-selector option if applied to anything other than the root selector.\n * When used with a modifier class, provide a second argument of `true` for the $compound parameter\n * to specify that this should be attached as a compound class.\n *\n * Usage example:\n *\n * ```scss\n * .mdc-foo {\n *   color: black;\n *\n *   @include mdc-theme-dark {\n *     color: white;\n *   }\n *\n *   &__bar {\n *     background: black;\n *\n *     @include mdc-theme-dark(\".mdc-foo\") {\n *       background: white;\n *     }\n *   }\n * }\n *\n * .mdc-foo--disabled {\n *   opacity: .38;\n *\n *   @include mdc-theme-dark(\".mdc-foo\", true) {\n *     opacity: .5;\n *   }\n * }\n * ```\n */\n/* Manual calculation done on SVG */\n@keyframes mdc-checkbox-fade-in-background {\n  0% {\n    border-color: rgba(0, 0, 0, 0.54);\n    background-color: transparent; }\n  50% {\n    border-color: #3f51b5;\n    border-color: var(--mdc-theme-primary, #3f51b5);\n    background-color: #3f51b5;\n    background-color: var(--mdc-theme-primary, #3f51b5); } }\n\n@keyframes mdc-checkbox-fade-out-background {\n  0%,\n  80% {\n    border-color: #3f51b5;\n    border-color: var(--mdc-theme-primary, #3f51b5);\n    background-color: #3f51b5;\n    background-color: var(--mdc-theme-primary, #3f51b5); }\n  100% {\n    border-color: rgba(0, 0, 0, 0.54);\n    background-color: transparent; } }\n\n@keyframes mdc-checkbox-fade-in-background-dark {\n  0% {\n    border-color: white;\n    background-color: transparent; }\n  50% {\n    border-color: #3f51b5;\n    border-color: var(--mdc-theme-primary, #3f51b5);\n    background-color: #3f51b5;\n    background-color: var(--mdc-theme-primary, #3f51b5); } }\n\n@keyframes mdc-checkbox-fade-out-background-dark {\n  0%,\n  80% {\n    border-color: #3f51b5;\n    border-color: var(--mdc-theme-primary, #3f51b5);\n    background-color: #3f51b5;\n    background-color: var(--mdc-theme-primary, #3f51b5); }\n  100% {\n    border-color: white;\n    background-color: transparent; } }\n\n@keyframes mdc-checkbox-unchecked-checked-checkmark-path {\n  0%,\n  50% {\n    stroke-dashoffset: 29.78334; }\n  50% {\n    animation-timing-function: cubic-bezier(0, 0, 0.2, 1); }\n  100% {\n    stroke-dashoffset: 0; } }\n\n@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark {\n  0%,\n  68.2% {\n    transform: scaleX(0); }\n  68.2% {\n    animation-timing-function: cubic-bezier(0, 0, 0, 1); }\n  100% {\n    transform: scaleX(1); } }\n\n@keyframes mdc-checkbox-checked-unchecked-checkmark-path {\n  from {\n    animation-timing-function: cubic-bezier(0.4, 0, 1, 1);\n    opacity: 1;\n    stroke-dashoffset: 0; }\n  to {\n    opacity: 0;\n    stroke-dashoffset: -29.78334; } }\n\n@keyframes mdc-checkbox-checked-indeterminate-checkmark {\n  from {\n    transform: rotate(0deg);\n    opacity: 1;\n    animation-timing-function: cubic-bezier(0, 0, 0.2, 1); }\n  to {\n    transform: rotate(45deg);\n    opacity: 0; } }\n\n@keyframes mdc-checkbox-indeterminate-checked-checkmark {\n  from {\n    transform: rotate(45deg);\n    opacity: 0;\n    animation-timing-function: cubic-bezier(0.14, 0, 0, 1); }\n  to {\n    transform: rotate(360deg);\n    opacity: 1; } }\n\n@keyframes mdc-checkbox-checked-indeterminate-mixedmark {\n  from {\n    transform: rotate(-45deg);\n    opacity: 0;\n    animation-timing-function: cubic-bezier(0, 0, 0.2, 1); }\n  to {\n    transform: rotate(0deg);\n    opacity: 1; } }\n\n@keyframes mdc-checkbox-indeterminate-checked-mixedmark {\n  from {\n    transform: rotate(0deg);\n    opacity: 1;\n    animation-timing-function: cubic-bezier(0.14, 0, 0, 1); }\n  to {\n    transform: rotate(315deg);\n    opacity: 0; } }\n\n@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark {\n  0% {\n    transform: scaleX(1);\n    opacity: 1;\n    animation-timing-function: linear; }\n  32.8%,\n  100% {\n    transform: scaleX(0);\n    opacity: 0; } }\n\n.mdc-checkbox {\n  --mdc-ripple-surface-width: 0;\n  --mdc-ripple-surface-height: 0;\n  --mdc-ripple-fg-size: 0;\n  --mdc-ripple-left: 0;\n  --mdc-ripple-top: 0;\n  --mdc-ripple-fg-scale: 1;\n  --mdc-ripple-fg-translate-end: 0;\n  --mdc-ripple-fg-translate-start: 0;\n  will-change: transform, opacity;\n  -webkit-tap-highlight-color: transparent;\n  display: inline-block;\n  position: relative;\n  box-sizing: content-box;\n  width: 18px;\n  height: 18px;\n  flex: 0 0 18px;\n  padding: 11px;\n  line-height: 0;\n  white-space: nowrap;\n  cursor: pointer;\n  vertical-align: bottom; }\n  .mdc-checkbox:not(.mdc-ripple-upgraded):hover::before, .mdc-checkbox:not(.mdc-ripple-upgraded):focus::before, .mdc-checkbox:not(.mdc-ripple-upgraded):active::after {\n    transition-duration: 85ms;\n    opacity: .6; }\n  .mdc-checkbox::before {\n    background-color: rgba(63, 81, 181, 0.14);\n    position: absolute;\n    top: calc(50% - 100%);\n    left: calc(50% - 100%);\n    width: 200%;\n    height: 200%;\n    transition: opacity 250ms linear;\n    border-radius: 50%;\n    opacity: 0;\n    pointer-events: none;\n    content: \"\"; }\n    @supports (background-color: color(green a(10%))) {\n      .mdc-checkbox::before {\n        background-color: color(var(--mdc-theme-primary, #3f51b5) a(14%)); } }\n  .mdc-checkbox.mdc-ripple-upgraded::before {\n    top: calc(50% - 100%);\n    left: calc(50% - 100%);\n    width: 200%;\n    height: 200%;\n    transform: scale(0);\n    transform: scale(var(--mdc-ripple-fg-scale, 0)); }\n  .mdc-checkbox.mdc-ripple-upgraded--background-focused::before {\n    opacity: .99999; }\n  .mdc-checkbox.mdc-ripple-upgraded--background-active-fill::before {\n    transition-duration: 120ms;\n    opacity: 1; }\n  .mdc-checkbox.mdc-ripple-upgraded--unbounded::before {\n    top: calc(50% - 50%);\n    top: var(--mdc-ripple-top, calc(50% - 50%));\n    left: calc(50% - 50%);\n    left: var(--mdc-ripple-left, calc(50% - 50%));\n    width: 100%;\n    width: var(--mdc-ripple-fg-size, 100%);\n    height: 100%;\n    height: var(--mdc-ripple-fg-size, 100%);\n    transform: scale(0);\n    transform: scale(var(--mdc-ripple-fg-scale, 0)); }\n  .mdc-checkbox::after {\n    background-color: rgba(63, 81, 181, 0.14);\n    position: absolute;\n    top: calc(50% - 100%);\n    left: calc(50% - 100%);\n    width: 200%;\n    height: 200%;\n    transition: opacity 250ms linear;\n    border-radius: 50%;\n    opacity: 0;\n    pointer-events: none;\n    content: \"\"; }\n    @supports (background-color: color(green a(10%))) {\n      .mdc-checkbox::after {\n        background-color: color(var(--mdc-theme-primary, #3f51b5) a(14%)); } }\n  .mdc-checkbox.mdc-ripple-upgraded::after {\n    top: 0;\n    left: 0;\n    width: 100%;\n    width: var(--mdc-ripple-fg-size, 100%);\n    height: 100%;\n    height: var(--mdc-ripple-fg-size, 100%);\n    transform: scale(0);\n    transform-origin: center center;\n    opacity: 0; }\n  .mdc-checkbox:not(.mdc-ripple-upgraded--unbounded)::after {\n    transform-origin: center center; }\n  .mdc-checkbox.mdc-ripple-upgraded--unbounded::after {\n    top: 0;\n    top: var(--mdc-ripple-top, 0);\n    left: 0;\n    left: var(--mdc-ripple-left, 0);\n    width: 100%;\n    width: var(--mdc-ripple-fg-size, 100%);\n    height: 100%;\n    height: var(--mdc-ripple-fg-size, 100%);\n    transform: scale(0);\n    transform-origin: center center; }\n  .mdc-checkbox.mdc-ripple-upgraded--foreground-activation::after {\n    animation: 300ms mdc-ripple-fg-radius-in forwards, 83ms mdc-ripple-fg-opacity-in forwards; }\n  .mdc-checkbox.mdc-ripple-upgraded--foreground-deactivation::after {\n    transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n    animation: 250ms mdc-ripple-fg-opacity-out; }\n  .mdc-checkbox::before, .mdc-checkbox::after {\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%; }\n  .mdc-checkbox.mdc-ripple-upgraded--unbounded .mdc-checkbox__background::before {\n    content: none; }\n  .mdc-checkbox__background {\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    left: 11px;\n    right: initial;\n    display: inline-flex;\n    top: 11px;\n    align-items: center;\n    justify-content: center;\n    box-sizing: border-box;\n    pointer-events: none;\n    width: 45%;\n    height: 45%;\n    transition: background-color 90ms 0ms cubic-bezier(0.4, 0, 1, 1), border-color 90ms 0ms cubic-bezier(0.4, 0, 1, 1);\n    border: 2px solid rgba(0, 0, 0, 0.54);\n    border-radius: 2px;\n    background-color: transparent;\n    will-change: background-color, border-color; }\n    [dir=\"rtl\"] .mdc-checkbox .mdc-checkbox__background,\n    .mdc-checkbox[dir=\"rtl\"] .mdc-checkbox__background {\n      left: initial;\n      right: 11px; }\n    .mdc-checkbox--theme-dark .mdc-checkbox__background,\n    .mdc-theme--dark .mdc-checkbox__background {\n      border-color: white; }\n    .mdc-checkbox__background::before {\n      position: absolute;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      transform: scale(0, 0);\n      transition: opacity 90ms 0ms cubic-bezier(0.4, 0, 1, 1), transform 90ms 0ms cubic-bezier(0.4, 0, 1, 1);\n      border-radius: 50%;\n      content: \"\";\n      opacity: 0;\n      pointer-events: none;\n      will-change: opacity, transform;\n      background: #3f51b5;\n      background: var(--mdc-theme-primary, #3f51b5); }\n  .mdc-checkbox__native-control {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    margin: 0;\n    padding: 0;\n    cursor: inherit;\n    opacity: 0; }\n  .mdc-checkbox__checkmark {\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    transition: opacity 180ms 0ms cubic-bezier(0.4, 0, 1, 1);\n    opacity: 0;\n    fill: white; }\n    .mdc-checkbox__checkmark__path {\n      transition: stroke-dashoffset 180ms 0ms cubic-bezier(0.4, 0, 1, 1);\n      stroke: white !important;\n      stroke-width: 3.12px;\n      stroke-dashoffset: 29.78334;\n      stroke-dasharray: 29.78334; }\n  .mdc-checkbox__mixedmark {\n    width: 100%;\n    height: 2px;\n    transform: scaleX(0) rotate(0deg);\n    transition: opacity 90ms 0ms cubic-bezier(0.4, 0, 1, 1), transform 90ms 0ms cubic-bezier(0.4, 0, 1, 1);\n    background-color: white;\n    opacity: 0; }\n\n.mdc-checkbox__native-control:focus ~ .mdc-checkbox__background::before {\n  transform: scale(2.75, 2.75);\n  transition: opacity 80ms 0ms cubic-bezier(0, 0, 0.2, 1), transform 80ms 0ms cubic-bezier(0, 0, 0.2, 1);\n  opacity: .26; }\n\n.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background {\n  transition: border-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1);\n  border-color: #3f51b5;\n  border-color: var(--mdc-theme-primary, #3f51b5);\n  background-color: #3f51b5;\n  background-color: var(--mdc-theme-primary, #3f51b5); }\n  .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background .mdc-checkbox__checkmark {\n    transition: opacity 180ms 0ms cubic-bezier(0, 0, 0.2, 1), transform 180ms 0ms cubic-bezier(0, 0, 0.2, 1);\n    opacity: 1; }\n    .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background .mdc-checkbox__checkmark__path {\n      stroke-dashoffset: 0; }\n  .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background .mdc-checkbox__mixedmark {\n    transform: scaleX(1) rotate(-45deg); }\n\n.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {\n  border-color: #3f51b5;\n  border-color: var(--mdc-theme-primary, #3f51b5);\n  background-color: #3f51b5;\n  background-color: var(--mdc-theme-primary, #3f51b5); }\n  .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background .mdc-checkbox__checkmark {\n    transform: rotate(45deg);\n    transition: opacity 90ms 0ms cubic-bezier(0.4, 0, 1, 1), transform 90ms 0ms cubic-bezier(0.4, 0, 1, 1);\n    opacity: 0; }\n    .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background .mdc-checkbox__checkmark__path {\n      stroke-dashoffset: 0; }\n  .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background .mdc-checkbox__mixedmark {\n    transform: scaleX(1) rotate(0deg);\n    opacity: 1; }\n\n.mdc-checkbox__native-control:disabled,\nfieldset:disabled .mdc-checkbox__native-control,\n[aria-disabled=\"true\"] .mdc-checkbox__native-control {\n  cursor: default; }\n  .mdc-checkbox__native-control:disabled ~ .mdc-checkbox__background,\n  fieldset:disabled .mdc-checkbox__native-control ~ .mdc-checkbox__background,\n  [aria-disabled=\"true\"] .mdc-checkbox__native-control ~ .mdc-checkbox__background {\n    border-color: rgba(0, 0, 0, 0.26); }\n    .mdc-checkbox--theme-dark .mdc-checkbox__native-control:disabled ~ .mdc-checkbox__background,\n    .mdc-theme--dark .mdc-checkbox__native-control:disabled ~ .mdc-checkbox__background, .mdc-checkbox--theme-dark\n    fieldset:disabled .mdc-checkbox__native-control ~ .mdc-checkbox__background,\n    .mdc-theme--dark\n    fieldset:disabled .mdc-checkbox__native-control ~ .mdc-checkbox__background, .mdc-checkbox--theme-dark\n    [aria-disabled=\"true\"] .mdc-checkbox__native-control ~ .mdc-checkbox__background,\n    .mdc-theme--dark\n    [aria-disabled=\"true\"] .mdc-checkbox__native-control ~ .mdc-checkbox__background {\n      border-color: rgba(255, 255, 255, 0.3); }\n  .mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background, .mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background,\n  fieldset:disabled .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,\n  fieldset:disabled .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background,\n  [aria-disabled=\"true\"] .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,\n  [aria-disabled=\"true\"] .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {\n    border-color: transparent;\n    background-color: rgba(0, 0, 0, 0.26); }\n    .mdc-checkbox--theme-dark .mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,\n    .mdc-theme--dark .mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background, .mdc-checkbox--theme-dark .mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background,\n    .mdc-theme--dark .mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background, .mdc-checkbox--theme-dark\n    fieldset:disabled .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,\n    .mdc-theme--dark\n    fieldset:disabled .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background, .mdc-checkbox--theme-dark\n    fieldset:disabled .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background,\n    .mdc-theme--dark\n    fieldset:disabled .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background, .mdc-checkbox--theme-dark\n    [aria-disabled=\"true\"] .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,\n    .mdc-theme--dark\n    [aria-disabled=\"true\"] .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background, .mdc-checkbox--theme-dark\n    [aria-disabled=\"true\"] .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background,\n    .mdc-theme--dark\n    [aria-disabled=\"true\"] .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {\n      background-color: rgba(255, 255, 255, 0.3); }\n\n.mdc-checkbox--upgraded .mdc-checkbox__background,\n.mdc-checkbox--upgraded .mdc-checkbox__checkmark,\n.mdc-checkbox--upgraded .mdc-checkbox__checkmark__path,\n.mdc-checkbox--upgraded .mdc-checkbox__mixedmark {\n  transition: none !important; }\n\n.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background, .mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background {\n  animation: mdc-checkbox-fade-in-background 180ms linear; }\n  .mdc-checkbox--theme-dark .mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,\n  .mdc-theme--dark .mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background, .mdc-checkbox--theme-dark .mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,\n  .mdc-theme--dark .mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background {\n    animation-name: mdc-checkbox-fade-in-background-dark; }\n\n.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background, .mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background {\n  animation: mdc-checkbox-fade-out-background 180ms linear; }\n  .mdc-checkbox--theme-dark .mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,\n  .mdc-theme--dark .mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background, .mdc-checkbox--theme-dark .mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background,\n  .mdc-theme--dark .mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background {\n    animation-name: mdc-checkbox-fade-out-background-dark; }\n\n.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark__path {\n  animation: 180ms linear 0s mdc-checkbox-unchecked-checked-checkmark-path;\n  transition: none; }\n\n.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark {\n  animation: 90ms linear 0s mdc-checkbox-unchecked-indeterminate-mixedmark;\n  transition: none; }\n\n.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark__path {\n  animation: 90ms linear 0s mdc-checkbox-checked-unchecked-checkmark-path;\n  transition: none; }\n\n.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark {\n  animation: 90ms linear 0s mdc-checkbox-checked-indeterminate-checkmark;\n  transition: none; }\n\n.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark {\n  animation: 90ms linear 0s mdc-checkbox-checked-indeterminate-mixedmark;\n  transition: none; }\n\n.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark {\n  animation: 500ms linear 0s mdc-checkbox-indeterminate-checked-checkmark;\n  transition: none; }\n\n.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark {\n  animation: 500ms linear 0s mdc-checkbox-indeterminate-checked-mixedmark;\n  transition: none; }\n\n.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark {\n  animation: 300ms linear 0s mdc-checkbox-indeterminate-unchecked-mixedmark;\n  transition: none; }\n\n/**\n * The css property used for elevation. In most cases this should not be changed. It is exposed\n * as a variable for abstraction / easy use when needing to reference the property directly, for\n * example in a `will-change` rule.\n */\n/**\n * The default duration value for elevation transitions.\n */\n/**\n * The default easing value for elevation transitions.\n */\n/**\n * Applies the correct css rules to an element to give it the elevation specified by $z-value.\n * The $z-value must be between 0 and 24.\n */\n/**\n * Returns a string that can be used as the value for a `transition` property for elevation.\n * Calling this function directly is useful in situations where a component needs to transition\n * more than one property.\n *\n * ```scss\n * .foo {\n *   transition: mdc-elevation-transition-rule(), opacity 100ms ease;\n *   will-change: $mdc-elevation-property, opacity;\n * }\n * ```\n */\n/**\n * Applies the correct css rules needed to have an element transition between elevations.\n * This mixin should be applied to elements whose elevation values will change depending on their\n * context (e.g. when active or disabled).\n */\n/**\n * Creates a rule that will be applied when an MDC-Web component is within the context of an RTL layout.\n *\n * Usage Example:\n * ```scss\n * .mdc-foo {\n *   position: absolute;\n *   left: 0;\n *\n *   @include mdc-rtl {\n *     left: auto;\n *     right: 0;\n *   }\n *\n *   &__bar {\n *     margin-left: 4px;\n *     @include mdc-rtl(\".mdc-foo\") {\n *       margin-left: auto;\n *       margin-right: 4px;\n *     }\n *   }\n * }\n *\n * .mdc-foo--mod {\n *   padding-left: 4px;\n *\n *   @include mdc-rtl {\n *     padding-left: auto;\n *     padding-right: 4px;\n *   }\n * }\n * ```\n *\n * Note that this works by checking for [dir=\"rtl\"] on an ancestor element. While this will work\n * in most cases, it will in some cases lead to false negatives, e.g.\n *\n * ```html\n * <html dir=\"rtl\">\n *   <!-- ... -->\n *   <div dir=\"ltr\">\n *     <div class=\"mdc-foo\">Styled incorrectly as RTL!</div>\n *   </div>\n * </html>\n * ```\n *\n * In the future, selectors such as :dir (http://mdn.io/:dir) will help us mitigate this.\n */\n/**\n * Takes a base box-model property - e.g. margin / border / padding - along with a default\n * direction and value, and emits rules which apply the value to the\n * \"<base-property>-<default-direction>\" property by default, but flips the direction\n * when within an RTL context.\n *\n * For example:\n *\n * ```scss\n * .mdc-foo {\n *   @include mdc-rtl-reflexive-box(margin, left, 8px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-left: 8px;\n *\n *   @include mdc-rtl {\n *     margin-right: 8px;\n *     margin-left: 0;\n *   }\n * }\n * ```\n * whereas:\n *\n * ```scss\n * .mdc-foo {\n *   @include mdc-rtl-reflexive-box(margin, right, 8px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-right: 8px;\n *\n *   @include mdc-rtl {\n *     margin-right: 0;\n *     margin-left: 8px;\n *   }\n * }\n * ```\n *\n * You can also pass a 4th optional $root-selector argument which will be forwarded to `mdc-rtl`,\n * e.g. `@include mdc-rtl-reflexive-box-property(margin, left, 8px, \".mdc-component\")`.\n *\n * Note that this function will always zero out the original value in an RTL context. If you're\n * trying to flip the values, use mdc-rtl-reflexive-property().\n */\n/**\n * Takes a base property and emits rules that assign <base-property>-left to <left-value> and\n * <base-property>-right to <right-value> in a LTR context, and vice versa in a RTL context.\n * For example:\n *\n * ```scss\n * .mdc-foo {\n *   @include mdc-rtl-reflexive-property(margin, auto, 12px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-left: auto;\n *   margin-right: 12px;\n *\n *   @include mdc-rtl {\n *     margin-left: 12px;\n *     margin-right: auto;\n *   }\n * }\n * ```\n *\n * A 4th optional $root-selector argument can be given, which will be passed to `mdc-rtl`.\n */\n/**\n * Takes an argument specifying a horizontal position property (either \"left\" or \"right\") as well\n * as a value, and applies that value to the specified position in a LTR context, and flips it in a\n * RTL context. For example:\n *\n * ```scss\n * .mdc-foo {\n *   @include mdc-rtl-reflexive-position(left, 0);\n *   position: absolute;\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n *  .mdc-foo {\n *    position: absolute;\n *    left: 0;\n *    right: initial;\n *\n *    @include mdc-rtl {\n *      right: 0;\n *      left: initial;\n *    }\n *  }\n * ```\n * An optional third $root-selector argument may also be given, which is passed to `mdc-rtl`.\n */\n/*\n  Precomputed linear color channel values, for use in contrast calculations.\n  See https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests\n\n  Algorithm, for c in 0 to 255:\n  f(c) {\n    c = c / 255;\n    return c < 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);\n  }\n\n  This lookup table is needed since there is no `pow` in SASS.\n*/\n/**\n * Calculate the luminance for a color.\n * See https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests\n */\n/**\n * Calculate the contrast ratio between two colors.\n * See https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests\n */\n/**\n * Determine whether to use dark or light text on top of given color.\n * Returns \"dark\" for dark text and \"light\" for light text.\n */\n/*\n  Main theme colors.\n  If you're a user customizing your color scheme in SASS, these are probably the only variables you need to change.\n*/\n/* Indigo 500 */\n/* Pink A200 */\n/* White */\n/* Which set of text colors to use for each main theme color (light or dark) */\n/* Text colors according to light vs dark and text type */\n/* Primary text colors for each of the theme colors */\n/**\n * Applies the correct theme color style to the specified property.\n * $property is typically color or background-color, but can be any CSS property that accepts color values.\n * $style should be one of the map keys in $mdc-theme-property-values (_variables.scss).\n */\n/**\n * Creates a rule to be used in MDC-Web components for dark theming, and applies the provided contents.\n * Should provide the $root-selector option if applied to anything other than the root selector.\n * When used with a modifier class, provide a second argument of `true` for the $compound parameter\n * to specify that this should be attached as a compound class.\n *\n * Usage example:\n *\n * ```scss\n * .mdc-foo {\n *   color: black;\n *\n *   @include mdc-theme-dark {\n *     color: white;\n *   }\n *\n *   &__bar {\n *     background: black;\n *\n *     @include mdc-theme-dark(\".mdc-foo\") {\n *       background: white;\n *     }\n *   }\n * }\n *\n * .mdc-foo--disabled {\n *   opacity: .38;\n *\n *   @include mdc-theme-dark(\".mdc-foo\", true) {\n *     opacity: .5;\n *   }\n * }\n * ```\n */\n/* TODO(sgomes): Figure out what to do about desktop font sizes. */\n/* TODO(sgomes): Figure out what to do about i18n and i18n font sizes. */\n/* TODO(sgomes): Figure out what to do about desktop font sizes. */\n/* TODO(sgomes): Figure out what to do about i18n and i18n font sizes. */\n:root {\n  --mdc-dialog-dark-theme-bg-color: #303030; }\n\n.mdc-dialog {\n  display: flex;\n  position: fixed;\n  align-items: center;\n  justify-content: center;\n  opacity: 0;\n  z-index: -1; }\n  .mdc-dialog__surface {\n    display: inline-flex;\n    flex-direction: column;\n    box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12);\n    width: calc(100% - 30px);\n    min-width: 640px;\n    max-width: 865px;\n    transform: translateY(150px) scale(0.8);\n    transition: opacity 120ms 0ms cubic-bezier(0, 0, 0.2, 1), transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1);\n    border-radius: 2px;\n    background-color: #fff;\n    background-color: var(--mdc-theme-background, #fff);\n    opacity: 0; }\n    .mdc-dialog--theme-dark .mdc-dialog__surface,\n    .mdc-theme--dark .mdc-dialog__surface {\n      color: white;\n      color: var(--mdc-theme-text-primary-on-dark, white);\n      background-color: #303030;\n      background-color: var(--mdc-dialog-dark-theme-bg-color, #303030); }\n    [dir=\"rtl\"] .mdc-dialog .mdc-dialog__surface,\n    .mdc-dialog[dir=\"rtl\"] .mdc-dialog__surface {\n      text-align: right; }\n  .mdc-dialog__backdrop {\n    display: flex;\n    position: fixed;\n    top: 0;\n    left: 0;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.87);\n    background-color: var(--mdc-theme-text-primary-on-light, rgba(0, 0, 0, 0.87));\n    opacity: 0;\n    z-index: -1; }\n  .mdc-dialog__header {\n    display: flex;\n    align-items: center;\n    padding: 24px 24px 0; }\n    .mdc-dialog__header__empty {\n      padding: 0; }\n    [dir=\"rtl\"] .mdc-dialog .mdc-dialog__header,\n    .mdc-dialog[dir=\"rtl\"] .mdc-dialog__header {\n      text-align: right; }\n    .mdc-dialog__header__title {\n      flex: 1;\n      margin: 0;\n      font-family: Roboto, sans-serif;\n      -moz-osx-font-smoothing: grayscale;\n      -webkit-font-smoothing: antialiased;\n      font-size: 1.25rem;\n      font-weight: 500;\n      letter-spacing: 0.02em;\n      line-height: 2rem; }\n  .mdc-dialog__body {\n    margin-top: 20px;\n    padding: 0 24px 24px;\n    color: rgba(0, 0, 0, 0.54);\n    color: var(--mdc-theme-text-secondary-on-light, rgba(0, 0, 0, 0.54));\n    font-family: Roboto, sans-serif;\n    -moz-osx-font-smoothing: grayscale;\n    -webkit-font-smoothing: antialiased;\n    font-size: 0.875rem;\n    font-weight: 400;\n    letter-spacing: 0.04em;\n    line-height: 1.25rem; }\n    .mdc-dialog--theme-dark.mdc-dialog__body,\n    .mdc-theme--dark .mdc-dialog__body {\n      color: rgba(255, 255, 255, 0.7);\n      color: var(--mdc-theme-text-secondary-on-dark, rgba(255, 255, 255, 0.7)); }\n    .mdc-dialog__body--scrollable {\n      max-height: 195px;\n      border-top: 1px solid rgba(0, 0, 0, 0.1);\n      border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n      overflow-y: scroll;\n      overflow-x: auto;\n      -webkit-overflow-scrolling: touch; }\n  .mdc-dialog__footer {\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: flex-end;\n    padding: 8px; }\n  @media (max-width: 640px) {\n    .mdc-dialog {\n      min-width: 280px; }\n      .mdc-dialog__surface {\n        min-width: 280px; }\n      .mdc-dialog__body {\n        line-height: 24px; } }\n\n.mdc-dialog--open {\n  display: flex;\n  top: 0;\n  left: 0;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  opacity: 1;\n  z-index: 2; }\n  .mdc-dialog--open .mdc-dialog__surface {\n    transform: translateY(0) scale(1);\n    transition: opacity 120ms 0ms cubic-bezier(0, 0, 0.2, 1), transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1);\n    opacity: 1; }\n  .mdc-dialog--open .mdc-dialog__backdrop {\n    transition: opacity 120ms 0ms cubic-bezier(0, 0, 0.2, 1);\n    opacity: .3; }\n\n.mdc-dialog-scroll-lock {\n  height: 100vh;\n  overflow: hidden; }\n\n/**\n * Creates a rule that will be applied when an MDC-Web component is within the context of an RTL layout.\n *\n * Usage Example:\n * ```scss\n * .mdc-foo {\n *   position: absolute;\n *   left: 0;\n *\n *   @include mdc-rtl {\n *     left: auto;\n *     right: 0;\n *   }\n *\n *   &__bar {\n *     margin-left: 4px;\n *     @include mdc-rtl(\".mdc-foo\") {\n *       margin-left: auto;\n *       margin-right: 4px;\n *     }\n *   }\n * }\n *\n * .mdc-foo--mod {\n *   padding-left: 4px;\n *\n *   @include mdc-rtl {\n *     padding-left: auto;\n *     padding-right: 4px;\n *   }\n * }\n * ```\n *\n * Note that this works by checking for [dir=\"rtl\"] on an ancestor element. While this will work\n * in most cases, it will in some cases lead to false negatives, e.g.\n *\n * ```html\n * <html dir=\"rtl\">\n *   <!-- ... -->\n *   <div dir=\"ltr\">\n *     <div class=\"mdc-foo\">Styled incorrectly as RTL!</div>\n *   </div>\n * </html>\n * ```\n *\n * In the future, selectors such as :dir (http://mdn.io/:dir) will help us mitigate this.\n */\n/**\n * Takes a base box-model property - e.g. margin / border / padding - along with a default\n * direction and value, and emits rules which apply the value to the\n * \"<base-property>-<default-direction>\" property by default, but flips the direction\n * when within an RTL context.\n *\n * For example:\n *\n * ```scss\n * .mdc-foo {\n *   @include mdc-rtl-reflexive-box(margin, left, 8px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-left: 8px;\n *\n *   @include mdc-rtl {\n *     margin-right: 8px;\n *     margin-left: 0;\n *   }\n * }\n * ```\n * whereas:\n *\n * ```scss\n * .mdc-foo {\n *   @include mdc-rtl-reflexive-box(margin, right, 8px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-right: 8px;\n *\n *   @include mdc-rtl {\n *     margin-right: 0;\n *     margin-left: 8px;\n *   }\n * }\n * ```\n *\n * You can also pass a 4th optional $root-selector argument which will be forwarded to `mdc-rtl`,\n * e.g. `@include mdc-rtl-reflexive-box-property(margin, left, 8px, \".mdc-component\")`.\n *\n * Note that this function will always zero out the original value in an RTL context. If you're\n * trying to flip the values, use mdc-rtl-reflexive-property().\n */\n/**\n * Takes a base property and emits rules that assign <base-property>-left to <left-value> and\n * <base-property>-right to <right-value> in a LTR context, and vice versa in a RTL context.\n * For example:\n *\n * ```scss\n * .mdc-foo {\n *   @include mdc-rtl-reflexive-property(margin, auto, 12px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-left: auto;\n *   margin-right: 12px;\n *\n *   @include mdc-rtl {\n *     margin-left: 12px;\n *     margin-right: auto;\n *   }\n * }\n * ```\n *\n * A 4th optional $root-selector argument can be given, which will be passed to `mdc-rtl`.\n */\n/**\n * Takes an argument specifying a horizontal position property (either \"left\" or \"right\") as well\n * as a value, and applies that value to the specified position in a LTR context, and flips it in a\n * RTL context. For example:\n *\n * ```scss\n * .mdc-foo {\n *   @include mdc-rtl-reflexive-position(left, 0);\n *   position: absolute;\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n *  .mdc-foo {\n *    position: absolute;\n *    left: 0;\n *    right: initial;\n *\n *    @include mdc-rtl {\n *      right: 0;\n *      left: initial;\n *    }\n *  }\n * ```\n * An optional third $root-selector argument may also be given, which is passed to `mdc-rtl`.\n */\n/*\n  Precomputed linear color channel values, for use in contrast calculations.\n  See https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests\n\n  Algorithm, for c in 0 to 255:\n  f(c) {\n    c = c / 255;\n    return c < 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);\n  }\n\n  This lookup table is needed since there is no `pow` in SASS.\n*/\n/**\n * Calculate the luminance for a color.\n * See https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests\n */\n/**\n * Calculate the contrast ratio between two colors.\n * See https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests\n */\n/**\n * Determine whether to use dark or light text on top of given color.\n * Returns \"dark\" for dark text and \"light\" for light text.\n */\n/*\n  Main theme colors.\n  If you're a user customizing your color scheme in SASS, these are probably the only variables you need to change.\n*/\n/* Indigo 500 */\n/* Pink A200 */\n/* White */\n/* Which set of text colors to use for each main theme color (light or dark) */\n/* Text colors according to light vs dark and text type */\n/* Primary text colors for each of the theme colors */\n/**\n * Applies the correct theme color style to the specified property.\n * $property is typically color or background-color, but can be any CSS property that accepts color values.\n * $style should be one of the map keys in $mdc-theme-property-values (_variables.scss).\n */\n/**\n * Creates a rule to be used in MDC-Web components for dark theming, and applies the provided contents.\n * Should provide the $root-selector option if applied to anything other than the root selector.\n * When used with a modifier class, provide a second argument of `true` for the $compound parameter\n * to specify that this should be attached as a compound class.\n *\n * Usage example:\n *\n * ```scss\n * .mdc-foo {\n *   color: black;\n *\n *   @include mdc-theme-dark {\n *     color: white;\n *   }\n *\n *   &__bar {\n *     background: black;\n *\n *     @include mdc-theme-dark(\".mdc-foo\") {\n *       background: white;\n *     }\n *   }\n * }\n *\n * .mdc-foo--disabled {\n *   opacity: .38;\n *\n *   @include mdc-theme-dark(\".mdc-foo\", true) {\n *     opacity: .5;\n *   }\n * }\n * ```\n */\n/*\n  Precomputed linear color channel values, for use in contrast calculations.\n  See https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests\n\n  Algorithm, for c in 0 to 255:\n  f(c) {\n    c = c / 255;\n    return c < 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);\n  }\n\n  This lookup table is needed since there is no `pow` in SASS.\n*/\n/**\n * Calculate the luminance for a color.\n * See https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests\n */\n/**\n * Calculate the contrast ratio between two colors.\n * See https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests\n */\n/**\n * Determine whether to use dark or light text on top of given color.\n * Returns \"dark\" for dark text and \"light\" for light text.\n */\n/*\n  Main theme colors.\n  If you're a user customizing your color scheme in SASS, these are probably the only variables you need to change.\n*/\n/* Indigo 500 */\n/* Pink A200 */\n/* White */\n/* Which set of text colors to use for each main theme color (light or dark) */\n/* Text colors according to light vs dark and text type */\n/* Primary text colors for each of the theme colors */\n/**\n * Applies the correct theme color style to the specified property.\n * $property is typically color or background-color, but can be any CSS property that accepts color values.\n * $style should be one of the map keys in $mdc-theme-property-values (_variables.scss).\n */\n/**\n * Creates a rule to be used in MDC-Web components for dark theming, and applies the provided contents.\n * Should provide the $root-selector option if applied to anything other than the root selector.\n * When used with a modifier class, provide a second argument of `true` for the $compound parameter\n * to specify that this should be attached as a compound class.\n *\n * Usage example:\n *\n * ```scss\n * .mdc-foo {\n *   color: black;\n *\n *   @include mdc-theme-dark {\n *     color: white;\n *   }\n *\n *   &__bar {\n *     background: black;\n *\n *     @include mdc-theme-dark(\".mdc-foo\") {\n *       background: white;\n *     }\n *   }\n * }\n *\n * .mdc-foo--disabled {\n *   opacity: .38;\n *\n *   @include mdc-theme-dark(\".mdc-foo\", true) {\n *     opacity: .5;\n *   }\n * }\n * ```\n */\n/* TODO(sgomes): Figure out what to do about desktop font sizes. */\n/* TODO(sgomes): Figure out what to do about i18n and i18n font sizes. */\n/**\n * Copyright 2016 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/**\n * Creates a rule that will be applied when an MDC-Web component is within the context of an RTL layout.\n *\n * Usage Example:\n * ```scss\n * .mdc-foo {\n *   position: absolute;\n *   left: 0;\n *\n *   @include mdc-rtl {\n *     left: auto;\n *     right: 0;\n *   }\n *\n *   &__bar {\n *     margin-left: 4px;\n *     @include mdc-rtl(\".mdc-foo\") {\n *       margin-left: auto;\n *       margin-right: 4px;\n *     }\n *   }\n * }\n *\n * .mdc-foo--mod {\n *   padding-left: 4px;\n *\n *   @include mdc-rtl {\n *     padding-left: auto;\n *     padding-right: 4px;\n *   }\n * }\n * ```\n *\n * Note that this works by checking for [dir=\"rtl\"] on an ancestor element. While this will work\n * in most cases, it will in some cases lead to false negatives, e.g.\n *\n * ```html\n * <html dir=\"rtl\">\n *   <!-- ... -->\n *   <div dir=\"ltr\">\n *     <div class=\"mdc-foo\">Styled incorrectly as RTL!</div>\n *   </div>\n * </html>\n * ```\n *\n * In the future, selectors such as :dir (http://mdn.io/:dir) will help us mitigate this.\n */\n/**\n * Takes a base box-model property - e.g. margin / border / padding - along with a default\n * direction and value, and emits rules which apply the value to the\n * \"<base-property>-<default-direction>\" property by default, but flips the direction\n * when within an RTL context.\n *\n * For example:\n *\n * ```scss\n * .mdc-foo {\n *   @include mdc-rtl-reflexive-box(margin, left, 8px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-left: 8px;\n *\n *   @include mdc-rtl {\n *     margin-right: 8px;\n *     margin-left: 0;\n *   }\n * }\n * ```\n * whereas:\n *\n * ```scss\n * .mdc-foo {\n *   @include mdc-rtl-reflexive-box(margin, right, 8px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-right: 8px;\n *\n *   @include mdc-rtl {\n *     margin-right: 0;\n *     margin-left: 8px;\n *   }\n * }\n * ```\n *\n * You can also pass a 4th optional $root-selector argument which will be forwarded to `mdc-rtl`,\n * e.g. `@include mdc-rtl-reflexive-box-property(margin, left, 8px, \".mdc-component\")`.\n *\n * Note that this function will always zero out the original value in an RTL context. If you're\n * trying to flip the values, use mdc-rtl-reflexive-property().\n */\n/**\n * Takes a base property and emits rules that assign <base-property>-left to <left-value> and\n * <base-property>-right to <right-value> in a LTR context, and vice versa in a RTL context.\n * For example:\n *\n * ```scss\n * .mdc-foo {\n *   @include mdc-rtl-reflexive-property(margin, auto, 12px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-left: auto;\n *   margin-right: 12px;\n *\n *   @include mdc-rtl {\n *     margin-left: 12px;\n *     margin-right: auto;\n *   }\n * }\n * ```\n *\n * A 4th optional $root-selector argument can be given, which will be passed to `mdc-rtl`.\n */\n/**\n * Takes an argument specifying a horizontal position property (either \"left\" or \"right\") as well\n * as a value, and applies that value to the specified position in a LTR context, and flips it in a\n * RTL context. For example:\n *\n * ```scss\n * .mdc-foo {\n *   @include mdc-rtl-reflexive-position(left, 0);\n *   position: absolute;\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n *  .mdc-foo {\n *    position: absolute;\n *    left: 0;\n *    right: initial;\n *\n *    @include mdc-rtl {\n *      right: 0;\n *      left: initial;\n *    }\n *  }\n * ```\n * An optional third $root-selector argument may also be given, which is passed to `mdc-rtl`.\n */\n/**\n * Copyright 2016 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n:root {\n  --mdc-persistent-drawer-dark-theme-bg-color: #212121; }\n\n.mdc-persistent-drawer {\n  /* Use aspect ratio trick to maintain 16:9 aspect ratio on the header */\n  /* stylelint-disable selector-no-qualifying-type */\n  /* stylelint-enable selector-no-qualifying-type */\n  /* TODO(sgomes): Revisit when we have interactive lists. */\n  width: 0; }\n  .mdc-persistent-drawer__toolbar-spacer {\n    display: flex;\n    position: relative;\n    flex-direction: row;\n    flex-shrink: 0;\n    align-items: flex-center;\n    height: 56px;\n    padding: 16px;\n    border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n    box-sizing: border-box;\n    /* TODO(sgomes): replace with global breakpoints when we have them */ }\n    .mdc-persistent-drawer__toolbar-spacer--theme-dark .mdc-persistent-drawer__toolbar-spacer,\n    .mdc-theme--dark .mdc-persistent-drawer__toolbar-spacer {\n      border-bottom: 1px solid rgba(255, 255, 255, 0.12); }\n    @media (min-width: 600px) {\n      .mdc-persistent-drawer__toolbar-spacer {\n        height: 64px; } }\n  .mdc-persistent-drawer__header {\n    position: relative; }\n  .mdc-persistent-drawer__header::before {\n    display: block;\n    padding-top: 56.25%;\n    content: \"\"; }\n  .mdc-persistent-drawer__header-content {\n    display: flex;\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    align-items: flex-end;\n    padding: 16px;\n    box-sizing: border-box; }\n  .mdc-persistent-drawer .mdc-list-group,\n  .mdc-persistent-drawer .mdc-list {\n    padding-right: 0;\n    padding-left: 0; }\n  .mdc-persistent-drawer .mdc-list-item {\n    position: relative;\n    padding: 0 16px;\n    outline: none;\n    color: inherit;\n    text-decoration: none;\n    font-family: Roboto, sans-serif;\n    -moz-osx-font-smoothing: grayscale;\n    -webkit-font-smoothing: antialiased;\n    font-size: 0.875rem;\n    font-weight: 500;\n    letter-spacing: 0.04em;\n    line-height: 1.5rem; }\n  .mdc-persistent-drawer .mdc-list-item__start-detail {\n    color: rgba(0, 0, 0, 0.54); }\n    .mdc-persistent-drawer .mdc-list-item__start-detail--theme-dark .mdc-persistent-drawer .mdc-list-item__start-detail,\n    .mdc-theme--dark .mdc-persistent-drawer .mdc-list-item__start-detail {\n      color: rgba(255, 255, 255, 0.54); }\n  .mdc-persistent-drawer--selected.mdc-list-item,\n  .mdc-persistent-drawer--selected.mdc-list-item .mdc-list-item__start-detail {\n    color: #3f51b5;\n    color: var(--mdc-theme-primary, #3f51b5); }\n  .mdc-persistent-drawer .mdc-list-item::before {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    transition: opacity 120ms 0ms cubic-bezier(0.4, 0, 1, 1);\n    border-radius: inherit;\n    background: currentColor;\n    content: \"\";\n    opacity: 0; }\n  .mdc-persistent-drawer .mdc-list-item:focus::before {\n    transition: opacity 180ms 0ms cubic-bezier(0, 0, 0.2, 1);\n    opacity: .12; }\n  .mdc-persistent-drawer .mdc-list-item:active::before {\n    /*\n      Slightly darker value for visual distinction.\n      This allows a full base that has distinct modes.\n      Progressive enhancement with ripples will provide complete button spec alignment.\n    */\n    transition: opacity 180ms 0ms cubic-bezier(0, 0, 0.2, 1);\n    opacity: .18; }\n  .mdc-persistent-drawer .mdc-list-item:active:focus::before {\n    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); }\n  .mdc-persistent-drawer__drawer {\n    background: #fff;\n    background: var(--mdc-theme-background, #fff);\n    border-left: 0;\n    border-right: 1px solid #e4e4e4;\n    left: 0;\n    right: initial;\n    height: 100%;\n    transform: translateX(-107%);\n    transform: translateX(calc(-100% - 20px));\n    will-change: transform;\n    display: inline-flex;\n    flex-direction: column;\n    box-sizing: border-box;\n    overflow: hidden;\n    touch-action: none;\n    width: 240px; }\n    [dir=\"rtl\"] .mdc-persistent-drawer__drawer, .mdc-persistent-drawer__drawer[dir=\"rtl\"] {\n      border-left: 1px solid #e4e4e4;\n      border-right: 0; }\n    [dir=\"rtl\"] .mdc-persistent-drawer__drawer, .mdc-persistent-drawer__drawer[dir=\"rtl\"] {\n      left: initial;\n      right: 0; }\n    .mdc-persistent-drawer__drawer--theme-dark,\n    .mdc-theme--dark .mdc-persistent-drawer__drawer {\n      background-color: #212121;\n      background-color: var(--mdc-persistent-drawer-dark-theme-bg-color, #212121);\n      color: white;\n      color: var(--mdc-theme-text-primary-on-dark, white);\n      border-left: 0;\n      border-right: 1px solid rgba(255, 255, 255, 0.12); }\n      [dir=\"rtl\"] .mdc-persistent-drawer__drawer--theme-dark, .mdc-persistent-drawer__drawer--theme-dark[dir=\"rtl\"], [dir=\"rtl\"]\n      .mdc-theme--dark .mdc-persistent-drawer__drawer,\n      .mdc-theme--dark .mdc-persistent-drawer__drawer[dir=\"rtl\"] {\n        border-left: 1px solid rgba(255, 255, 255, 0.12);\n        border-right: 0; }\n    [dir=\"rtl\"] .mdc-persistent-drawer .mdc-persistent-drawer__drawer,\n    .mdc-persistent-drawer[dir=\"rtl\"] .mdc-persistent-drawer__drawer {\n      transform: translateX(107%);\n      transform: translateX(calc(100% + 20px)); }\n  .mdc-persistent-drawer--animating .mdc-persistent-drawer__drawer {\n    transition: transform 0.13s 0ms cubic-bezier(0, 0, 0.2, 1); }\n  .mdc-persistent-drawer--animating.mdc-persistent-drawer--open .mdc-persistent-drawer__drawer {\n    transition: transform 0.33s 0ms cubic-bezier(0, 0, 0.2, 1); }\n  .mdc-persistent-drawer--open {\n    width: 240px;\n    pointer-events: auto; }\n    .mdc-persistent-drawer--open .mdc-persistent-drawer__drawer {\n      transform: none; }\n    [dir=\"rtl\"] .mdc-persistent-drawer--open .mdc-persistent-drawer__drawer, .mdc-persistent-drawer--open[dir=\"rtl\"] .mdc-persistent-drawer__drawer {\n      transform: none; }\n\n/**\n * Creates a rule that will be applied when an MDC-Web component is within the context of an RTL layout.\n *\n * Usage Example:\n * ```scss\n * .mdc-foo {\n *   position: absolute;\n *   left: 0;\n *\n *   @include mdc-rtl {\n *     left: auto;\n *     right: 0;\n *   }\n *\n *   &__bar {\n *     margin-left: 4px;\n *     @include mdc-rtl(\".mdc-foo\") {\n *       margin-left: auto;\n *       margin-right: 4px;\n *     }\n *   }\n * }\n *\n * .mdc-foo--mod {\n *   padding-left: 4px;\n *\n *   @include mdc-rtl {\n *     padding-left: auto;\n *     padding-right: 4px;\n *   }\n * }\n * ```\n *\n * Note that this works by checking for [dir=\"rtl\"] on an ancestor element. While this will work\n * in most cases, it will in some cases lead to false negatives, e.g.\n *\n * ```html\n * <html dir=\"rtl\">\n *   <!-- ... -->\n *   <div dir=\"ltr\">\n *     <div class=\"mdc-foo\">Styled incorrectly as RTL!</div>\n *   </div>\n * </html>\n * ```\n *\n * In the future, selectors such as :dir (http://mdn.io/:dir) will help us mitigate this.\n */\n/**\n * Takes a base box-model property - e.g. margin / border / padding - along with a default\n * direction and value, and emits rules which apply the value to the\n * \"<base-property>-<default-direction>\" property by default, but flips the direction\n * when within an RTL context.\n *\n * For example:\n *\n * ```scss\n * .mdc-foo {\n *   @include mdc-rtl-reflexive-box(margin, left, 8px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-left: 8px;\n *\n *   @include mdc-rtl {\n *     margin-right: 8px;\n *     margin-left: 0;\n *   }\n * }\n * ```\n * whereas:\n *\n * ```scss\n * .mdc-foo {\n *   @include mdc-rtl-reflexive-box(margin, right, 8px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-right: 8px;\n *\n *   @include mdc-rtl {\n *     margin-right: 0;\n *     margin-left: 8px;\n *   }\n * }\n * ```\n *\n * You can also pass a 4th optional $root-selector argument which will be forwarded to `mdc-rtl`,\n * e.g. `@include mdc-rtl-reflexive-box-property(margin, left, 8px, \".mdc-component\")`.\n *\n * Note that this function will always zero out the original value in an RTL context. If you're\n * trying to flip the values, use mdc-rtl-reflexive-property().\n */\n/**\n * Takes a base property and emits rules that assign <base-property>-left to <left-value> and\n * <base-property>-right to <right-value> in a LTR context, and vice versa in a RTL context.\n * For example:\n *\n * ```scss\n * .mdc-foo {\n *   @include mdc-rtl-reflexive-property(margin, auto, 12px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-left: auto;\n *   margin-right: 12px;\n *\n *   @include mdc-rtl {\n *     margin-left: 12px;\n *     margin-right: auto;\n *   }\n * }\n * ```\n *\n * A 4th optional $root-selector argument can be given, which will be passed to `mdc-rtl`.\n */\n/**\n * Takes an argument specifying a horizontal position property (either \"left\" or \"right\") as well\n * as a value, and applies that value to the specified position in a LTR context, and flips it in a\n * RTL context. For example:\n *\n * ```scss\n * .mdc-foo {\n *   @include mdc-rtl-reflexive-position(left, 0);\n *   position: absolute;\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n *  .mdc-foo {\n *    position: absolute;\n *    left: 0;\n *    right: initial;\n *\n *    @include mdc-rtl {\n *      right: 0;\n *      left: initial;\n *    }\n *  }\n * ```\n * An optional third $root-selector argument may also be given, which is passed to `mdc-rtl`.\n */\n/*\n  Precomputed linear color channel values, for use in contrast calculations.\n  See https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests\n\n  Algorithm, for c in 0 to 255:\n  f(c) {\n    c = c / 255;\n    return c < 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);\n  }\n\n  This lookup table is needed since there is no `pow` in SASS.\n*/\n/**\n * Calculate the luminance for a color.\n * See https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests\n */\n/**\n * Calculate the contrast ratio between two colors.\n * See https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests\n */\n/**\n * Determine whether to use dark or light text on top of given color.\n * Returns \"dark\" for dark text and \"light\" for light text.\n */\n/*\n  Main theme colors.\n  If you're a user customizing your color scheme in SASS, these are probably the only variables you need to change.\n*/\n/* Indigo 500 */\n/* Pink A200 */\n/* White */\n/* Which set of text colors to use for each main theme color (light or dark) */\n/* Text colors according to light vs dark and text type */\n/* Primary text colors for each of the theme colors */\n/**\n * Applies the correct theme color style to the specified property.\n * $property is typically color or background-color, but can be any CSS property that accepts color values.\n * $style should be one of the map keys in $mdc-theme-property-values (_variables.scss).\n */\n/**\n * Creates a rule to be used in MDC-Web components for dark theming, and applies the provided contents.\n * Should provide the $root-selector option if applied to anything other than the root selector.\n * When used with a modifier class, provide a second argument of `true` for the $compound parameter\n * to specify that this should be attached as a compound class.\n *\n * Usage example:\n *\n * ```scss\n * .mdc-foo {\n *   color: black;\n *\n *   @include mdc-theme-dark {\n *     color: white;\n *   }\n *\n *   &__bar {\n *     background: black;\n *\n *     @include mdc-theme-dark(\".mdc-foo\") {\n *       background: white;\n *     }\n *   }\n * }\n *\n * .mdc-foo--disabled {\n *   opacity: .38;\n *\n *   @include mdc-theme-dark(\".mdc-foo\", true) {\n *     opacity: .5;\n *   }\n * }\n * ```\n */\n/*\n  Precomputed linear color channel values, for use in contrast calculations.\n  See https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests\n\n  Algorithm, for c in 0 to 255:\n  f(c) {\n    c = c / 255;\n    return c < 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);\n  }\n\n  This lookup table is needed since there is no `pow` in SASS.\n*/\n/**\n * Calculate the luminance for a color.\n * See https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests\n */\n/**\n * Calculate the contrast ratio between two colors.\n * See https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests\n */\n/**\n * Determine whether to use dark or light text on top of given color.\n * Returns \"dark\" for dark text and \"light\" for light text.\n */\n/*\n  Main theme colors.\n  If you're a user customizing your color scheme in SASS, these are probably the only variables you need to change.\n*/\n/* Indigo 500 */\n/* Pink A200 */\n/* White */\n/* Which set of text colors to use for each main theme color (light or dark) */\n/* Text colors according to light vs dark and text type */\n/* Primary text colors for each of the theme colors */\n/**\n * Applies the correct theme color style to the specified property.\n * $property is typically color or background-color, but can be any CSS property that accepts color values.\n * $style should be one of the map keys in $mdc-theme-property-values (_variables.scss).\n */\n/**\n * Creates a rule to be used in MDC-Web components for dark theming, and applies the provided contents.\n * Should provide the $root-selector option if applied to anything other than the root selector.\n * When used with a modifier class, provide a second argument of `true` for the $compound parameter\n * to specify that this should be attached as a compound class.\n *\n * Usage example:\n *\n * ```scss\n * .mdc-foo {\n *   color: black;\n *\n *   @include mdc-theme-dark {\n *     color: white;\n *   }\n *\n *   &__bar {\n *     background: black;\n *\n *     @include mdc-theme-dark(\".mdc-foo\") {\n *       background: white;\n *     }\n *   }\n * }\n *\n * .mdc-foo--disabled {\n *   opacity: .38;\n *\n *   @include mdc-theme-dark(\".mdc-foo\", true) {\n *     opacity: .5;\n *   }\n * }\n * ```\n */\n/* TODO(sgomes): Figure out what to do about desktop font sizes. */\n/* TODO(sgomes): Figure out what to do about i18n and i18n font sizes. */\n:root {\n  --mdc-permanent-drawer-dark-theme-bg-color: #212121; }\n\n.mdc-permanent-drawer {\n  /* Use aspect ratio trick to maintain 16:9 aspect ratio on the header */\n  /* stylelint-disable selector-no-qualifying-type */\n  /* stylelint-enable selector-no-qualifying-type */\n  /* TODO(sgomes): Revisit when we have interactive lists. */\n  background: #fff;\n  background: var(--mdc-theme-background, #fff);\n  border-left: 0;\n  border-right: 1px solid #e4e4e4;\n  left: 0;\n  right: initial;\n  display: inline-flex;\n  flex-direction: column;\n  width: 240px;\n  height: 100%;\n  box-sizing: border-box;\n  overflow: hidden; }\n  .mdc-permanent-drawer__toolbar-spacer {\n    display: flex;\n    position: relative;\n    flex-direction: row;\n    flex-shrink: 0;\n    align-items: flex-center;\n    height: 56px;\n    padding: 16px;\n    border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n    box-sizing: border-box;\n    /* TODO(sgomes): replace with global breakpoints when we have them */ }\n    .mdc-permanent-drawer__toolbar-spacer--theme-dark .mdc-permanent-drawer__toolbar-spacer,\n    .mdc-theme--dark .mdc-permanent-drawer__toolbar-spacer {\n      border-bottom: 1px solid rgba(255, 255, 255, 0.12); }\n    @media (min-width: 600px) {\n      .mdc-permanent-drawer__toolbar-spacer {\n        height: 64px; } }\n  .mdc-permanent-drawer__header {\n    position: relative; }\n  .mdc-permanent-drawer__header::before {\n    display: block;\n    padding-top: 56.25%;\n    content: \"\"; }\n  .mdc-permanent-drawer__header-content {\n    display: flex;\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    align-items: flex-end;\n    padding: 16px;\n    box-sizing: border-box; }\n  .mdc-permanent-drawer .mdc-list-group,\n  .mdc-permanent-drawer .mdc-list {\n    padding-right: 0;\n    padding-left: 0; }\n  .mdc-permanent-drawer .mdc-list-item {\n    position: relative;\n    padding: 0 16px;\n    outline: none;\n    color: inherit;\n    text-decoration: none;\n    font-family: Roboto, sans-serif;\n    -moz-osx-font-smoothing: grayscale;\n    -webkit-font-smoothing: antialiased;\n    font-size: 0.875rem;\n    font-weight: 500;\n    letter-spacing: 0.04em;\n    line-height: 1.5rem; }\n  .mdc-permanent-drawer .mdc-list-item__start-detail {\n    color: rgba(0, 0, 0, 0.54); }\n    .mdc-permanent-drawer .mdc-list-item__start-detail--theme-dark .mdc-permanent-drawer .mdc-list-item__start-detail,\n    .mdc-theme--dark .mdc-permanent-drawer .mdc-list-item__start-detail {\n      color: rgba(255, 255, 255, 0.54); }\n  .mdc-permanent-drawer--selected.mdc-list-item,\n  .mdc-permanent-drawer--selected.mdc-list-item .mdc-list-item__start-detail {\n    color: #3f51b5;\n    color: var(--mdc-theme-primary, #3f51b5); }\n  .mdc-permanent-drawer .mdc-list-item::before {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    transition: opacity 120ms 0ms cubic-bezier(0.4, 0, 1, 1);\n    border-radius: inherit;\n    background: currentColor;\n    content: \"\";\n    opacity: 0; }\n  .mdc-permanent-drawer .mdc-list-item:focus::before {\n    transition: opacity 180ms 0ms cubic-bezier(0, 0, 0.2, 1);\n    opacity: .12; }\n  .mdc-permanent-drawer .mdc-list-item:active::before {\n    /*\n      Slightly darker value for visual distinction.\n      This allows a full base that has distinct modes.\n      Progressive enhancement with ripples will provide complete button spec alignment.\n    */\n    transition: opacity 180ms 0ms cubic-bezier(0, 0, 0.2, 1);\n    opacity: .18; }\n  .mdc-permanent-drawer .mdc-list-item:active:focus::before {\n    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); }\n  [dir=\"rtl\"] .mdc-permanent-drawer, .mdc-permanent-drawer[dir=\"rtl\"] {\n    border-left: 1px solid #e4e4e4;\n    border-right: 0; }\n  [dir=\"rtl\"] .mdc-permanent-drawer, .mdc-permanent-drawer[dir=\"rtl\"] {\n    left: initial;\n    right: 0; }\n  .mdc-permanent-drawer--theme-dark,\n  .mdc-theme--dark .mdc-permanent-drawer {\n    background-color: #212121;\n    background-color: var(--mdc-permanent-drawer-dark-theme-bg-color, #212121);\n    color: white;\n    color: var(--mdc-theme-text-primary-on-dark, white);\n    border-left: 0;\n    border-right: 1px solid rgba(255, 255, 255, 0.12); }\n    [dir=\"rtl\"] .mdc-permanent-drawer--theme-dark, .mdc-permanent-drawer--theme-dark[dir=\"rtl\"], [dir=\"rtl\"]\n    .mdc-theme--dark .mdc-permanent-drawer,\n    .mdc-theme--dark .mdc-permanent-drawer[dir=\"rtl\"] {\n      border-left: 1px solid rgba(255, 255, 255, 0.12);\n      border-right: 0; }\n  .mdc-permanent-drawer--floating {\n    background: none;\n    border-left: 0;\n    border-right: none; }\n    [dir=\"rtl\"] .mdc-permanent-drawer--floating, .mdc-permanent-drawer--floating[dir=\"rtl\"] {\n      border-left: none;\n      border-right: 0; }\n    .mdc-permanent-drawer--floating--theme-dark,\n    .mdc-theme--dark .mdc-permanent-drawer--floating {\n      background: none;\n      border-left: 0;\n      border-right: none; }\n      [dir=\"rtl\"] .mdc-permanent-drawer--floating--theme-dark, .mdc-permanent-drawer--floating--theme-dark[dir=\"rtl\"], [dir=\"rtl\"]\n      .mdc-theme--dark .mdc-permanent-drawer--floating,\n      .mdc-theme--dark .mdc-permanent-drawer--floating[dir=\"rtl\"] {\n        border-left: none;\n        border-right: 0; }\n\n/**\n * The css property used for elevation. In most cases this should not be changed. It is exposed\n * as a variable for abstraction / easy use when needing to reference the property directly, for\n * example in a `will-change` rule.\n */\n/**\n * The default duration value for elevation transitions.\n */\n/**\n * The default easing value for elevation transitions.\n */\n/**\n * Applies the correct css rules to an element to give it the elevation specified by $z-value.\n * The $z-value must be between 0 and 24.\n */\n/**\n * Returns a string that can be used as the value for a `transition` property for elevation.\n * Calling this function directly is useful in situations where a component needs to transition\n * more than one property.\n *\n * ```scss\n * .foo {\n *   transition: mdc-elevation-transition-rule(), opacity 100ms ease;\n *   will-change: $mdc-elevation-property, opacity;\n * }\n * ```\n */\n/**\n * Applies the correct css rules needed to have an element transition between elevations.\n * This mixin should be applied to elements whose elevation values will change depending on their\n * context (e.g. when active or disabled).\n */\n/**\n * Creates a rule that will be applied when an MDC-Web component is within the context of an RTL layout.\n *\n * Usage Example:\n * ```scss\n * .mdc-foo {\n *   position: absolute;\n *   left: 0;\n *\n *   @include mdc-rtl {\n *     left: auto;\n *     right: 0;\n *   }\n *\n *   &__bar {\n *     margin-left: 4px;\n *     @include mdc-rtl(\".mdc-foo\") {\n *       margin-left: auto;\n *       margin-right: 4px;\n *     }\n *   }\n * }\n *\n * .mdc-foo--mod {\n *   padding-left: 4px;\n *\n *   @include mdc-rtl {\n *     padding-left: auto;\n *     padding-right: 4px;\n *   }\n * }\n * ```\n *\n * Note that this works by checking for [dir=\"rtl\"] on an ancestor element. While this will work\n * in most cases, it will in some cases lead to false negatives, e.g.\n *\n * ```html\n * <html dir=\"rtl\">\n *   <!-- ... -->\n *   <div dir=\"ltr\">\n *     <div class=\"mdc-foo\">Styled incorrectly as RTL!</div>\n *   </div>\n * </html>\n * ```\n *\n * In the future, selectors such as :dir (http://mdn.io/:dir) will help us mitigate this.\n */\n/**\n * Takes a base box-model property - e.g. margin / border / padding - along with a default\n * direction and value, and emits rules which apply the value to the\n * \"<base-property>-<default-direction>\" property by default, but flips the direction\n * when within an RTL context.\n *\n * For example:\n *\n * ```scss\n * .mdc-foo {\n *   @include mdc-rtl-reflexive-box(margin, left, 8px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-left: 8px;\n *\n *   @include mdc-rtl {\n *     margin-right: 8px;\n *     margin-left: 0;\n *   }\n * }\n * ```\n * whereas:\n *\n * ```scss\n * .mdc-foo {\n *   @include mdc-rtl-reflexive-box(margin, right, 8px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-right: 8px;\n *\n *   @include mdc-rtl {\n *     margin-right: 0;\n *     margin-left: 8px;\n *   }\n * }\n * ```\n *\n * You can also pass a 4th optional $root-selector argument which will be forwarded to `mdc-rtl`,\n * e.g. `@include mdc-rtl-reflexive-box-property(margin, left, 8px, \".mdc-component\")`.\n *\n * Note that this function will always zero out the original value in an RTL context. If you're\n * trying to flip the values, use mdc-rtl-reflexive-property().\n */\n/**\n * Takes a base property and emits rules that assign <base-property>-left to <left-value> and\n * <base-property>-right to <right-value> in a LTR context, and vice versa in a RTL context.\n * For example:\n *\n * ```scss\n * .mdc-foo {\n *   @include mdc-rtl-reflexive-property(margin, auto, 12px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-left: auto;\n *   margin-right: 12px;\n *\n *   @include mdc-rtl {\n *     margin-left: 12px;\n *     margin-right: auto;\n *   }\n * }\n * ```\n *\n * A 4th optional $root-selector argument can be given, which will be passed to `mdc-rtl`.\n */\n/**\n * Takes an argument specifying a horizontal position property (either \"left\" or \"right\") as well\n * as a value, and applies that value to the specified position in a LTR context, and flips it in a\n * RTL context. For example:\n *\n * ```scss\n * .mdc-foo {\n *   @include mdc-rtl-reflexive-position(left, 0);\n *   position: absolute;\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n *  .mdc-foo {\n *    position: absolute;\n *    left: 0;\n *    right: initial;\n *\n *    @include mdc-rtl {\n *      right: 0;\n *      left: initial;\n *    }\n *  }\n * ```\n * An optional third $root-selector argument may also be given, which is passed to `mdc-rtl`.\n */\n/*\n  Precomputed linear color channel values, for use in contrast calculations.\n  See https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests\n\n  Algorithm, for c in 0 to 255:\n  f(c) {\n    c = c / 255;\n    return c < 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);\n  }\n\n  This lookup table is needed since there is no `pow` in SASS.\n*/\n/**\n * Calculate the luminance for a color.\n * See https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests\n */\n/**\n * Calculate the contrast ratio between two colors.\n * See https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests\n */\n/**\n * Determine whether to use dark or light text on top of given color.\n * Returns \"dark\" for dark text and \"light\" for light text.\n */\n/*\n  Main theme colors.\n  If you're a user customizing your color scheme in SASS, these are probably the only variables you need to change.\n*/\n/* Indigo 500 */\n/* Pink A200 */\n/* White */\n/* Which set of text colors to use for each main theme color (light or dark) */\n/* Text colors according to light vs dark and text type */\n/* Primary text colors for each of the theme colors */\n/**\n * Applies the correct theme color style to the specified property.\n * $property is typically color or background-color, but can be any CSS property that accepts color values.\n * $style should be one of the map keys in $mdc-theme-property-values (_variables.scss).\n */\n/**\n * Creates a rule to be used in MDC-Web components for dark theming, and applies the provided contents.\n * Should provide the $root-selector option if applied to anything other than the root selector.\n * When used with a modifier class, provide a second argument of `true` for the $compound parameter\n * to specify that this should be attached as a compound class.\n *\n * Usage example:\n *\n * ```scss\n * .mdc-foo {\n *   color: black;\n *\n *   @include mdc-theme-dark {\n *     color: white;\n *   }\n *\n *   &__bar {\n *     background: black;\n *\n *     @include mdc-theme-dark(\".mdc-foo\") {\n *       background: white;\n *     }\n *   }\n * }\n *\n * .mdc-foo--disabled {\n *   opacity: .38;\n *\n *   @include mdc-theme-dark(\".mdc-foo\", true) {\n *     opacity: .5;\n *   }\n * }\n * ```\n */\n/*\n  Precomputed linear color channel values, for use in contrast calculations.\n  See https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests\n\n  Algorithm, for c in 0 to 255:\n  f(c) {\n    c = c / 255;\n    return c < 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);\n  }\n\n  This lookup table is needed since there is no `pow` in SASS.\n*/\n/**\n * Calculate the luminance for a color.\n * See https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests\n */\n/**\n * Calculate the contrast ratio between two colors.\n * See https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests\n */\n/**\n * Determine whether to use dark or light text on top of given color.\n * Returns \"dark\" for dark text and \"light\" for light text.\n */\n/*\n  Main theme colors.\n  If you're a user customizing your color scheme in SASS, these are probably the only variables you need to change.\n*/\n/* Indigo 500 */\n/* Pink A200 */\n/* White */\n/* Which set of text colors to use for each main theme color (light or dark) */\n/* Text colors according to light vs dark and text type */\n/* Primary text colors for each of the theme colors */\n/**\n * Applies the correct theme color style to the specified property.\n * $property is typically color or background-color, but can be any CSS property that accepts color values.\n * $style should be one of the map keys in $mdc-theme-property-values (_variables.scss).\n */\n/**\n * Creates a rule to be used in MDC-Web components for dark theming, and applies the provided contents.\n * Should provide the $root-selector option if applied to anything other than the root selector.\n * When used with a modifier class, provide a second argument of `true` for the $compound parameter\n * to specify that this should be attached as a compound class.\n *\n * Usage example:\n *\n * ```scss\n * .mdc-foo {\n *   color: black;\n *\n *   @include mdc-theme-dark {\n *     color: white;\n *   }\n *\n *   &__bar {\n *     background: black;\n *\n *     @include mdc-theme-dark(\".mdc-foo\") {\n *       background: white;\n *     }\n *   }\n * }\n *\n * .mdc-foo--disabled {\n *   opacity: .38;\n *\n *   @include mdc-theme-dark(\".mdc-foo\", true) {\n *     opacity: .5;\n *   }\n * }\n * ```\n */\n/* TODO(sgomes): Figure out what to do about desktop font sizes. */\n/* TODO(sgomes): Figure out what to do about i18n and i18n font sizes. */\n/**\n * Copyright 2016 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n/**\n * Creates a rule that will be applied when an MDC-Web component is within the context of an RTL layout.\n *\n * Usage Example:\n * ```scss\n * .mdc-foo {\n *   position: absolute;\n *   left: 0;\n *\n *   @include mdc-rtl {\n *     left: auto;\n *     right: 0;\n *   }\n *\n *   &__bar {\n *     margin-left: 4px;\n *     @include mdc-rtl(\".mdc-foo\") {\n *       margin-left: auto;\n *       margin-right: 4px;\n *     }\n *   }\n * }\n *\n * .mdc-foo--mod {\n *   padding-left: 4px;\n *\n *   @include mdc-rtl {\n *     padding-left: auto;\n *     padding-right: 4px;\n *   }\n * }\n * ```\n *\n * Note that this works by checking for [dir=\"rtl\"] on an ancestor element. While this will work\n * in most cases, it will in some cases lead to false negatives, e.g.\n *\n * ```html\n * <html dir=\"rtl\">\n *   <!-- ... -->\n *   <div dir=\"ltr\">\n *     <div class=\"mdc-foo\">Styled incorrectly as RTL!</div>\n *   </div>\n * </html>\n * ```\n *\n * In the future, selectors such as :dir (http://mdn.io/:dir) will help us mitigate this.\n */\n/**\n * Takes a base box-model property - e.g. margin / border / padding - along with a default\n * direction and value, and emits rules which apply the value to the\n * \"<base-property>-<default-direction>\" property by default, but flips the direction\n * when within an RTL context.\n *\n * For example:\n *\n * ```scss\n * .mdc-foo {\n *   @include mdc-rtl-reflexive-box(margin, left, 8px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-left: 8px;\n *\n *   @include mdc-rtl {\n *     margin-right: 8px;\n *     margin-left: 0;\n *   }\n * }\n * ```\n * whereas:\n *\n * ```scss\n * .mdc-foo {\n *   @include mdc-rtl-reflexive-box(margin, right, 8px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-right: 8px;\n *\n *   @include mdc-rtl {\n *     margin-right: 0;\n *     margin-left: 8px;\n *   }\n * }\n * ```\n *\n * You can also pass a 4th optional $root-selector argument which will be forwarded to `mdc-rtl`,\n * e.g. `@include mdc-rtl-reflexive-box-property(margin, left, 8px, \".mdc-component\")`.\n *\n * Note that this function will always zero out the original value in an RTL context. If you're\n * trying to flip the values, use mdc-rtl-reflexive-property().\n */\n/**\n * Takes a base property and emits rules that assign <base-property>-left to <left-value> and\n * <base-property>-right to <right-value> in a LTR context, and vice versa in a RTL context.\n * For example:\n *\n * ```scss\n * .mdc-foo {\n *   @include mdc-rtl-reflexive-property(margin, auto, 12px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-left: auto;\n *   margin-right: 12px;\n *\n *   @include mdc-rtl {\n *     margin-left: 12px;\n *     margin-right: auto;\n *   }\n * }\n * ```\n *\n * A 4th optional $root-selector argument can be given, which will be passed to `mdc-rtl`.\n */\n/**\n * Takes an argument specifying a horizontal position property (either \"left\" or \"right\") as well\n * as a value, and applies that value to the specified position in a LTR context, and flips it in a\n * RTL context. For example:\n *\n * ```scss\n * .mdc-foo {\n *   @include mdc-rtl-reflexive-position(left, 0);\n *   position: absolute;\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n *  .mdc-foo {\n *    position: absolute;\n *    left: 0;\n *    right: initial;\n *\n *    @include mdc-rtl {\n *      right: 0;\n *      left: initial;\n *    }\n *  }\n * ```\n * An optional third $root-selector argument may also be given, which is passed to `mdc-rtl`.\n */\n/**\n * Copyright 2016 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n.mdc-temporary-drawer {\n  /* Use aspect ratio trick to maintain 16:9 aspect ratio on the header */\n  /* stylelint-disable selector-no-qualifying-type */\n  /* stylelint-enable selector-no-qualifying-type */\n  /* TODO(sgomes): Revisit when we have interactive lists. */\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  pointer-events: none;\n  box-sizing: border-box;\n  contain: strict;\n  z-index: 3;\n  /* Shaded background */ }\n  .mdc-temporary-drawer__toolbar-spacer {\n    display: flex;\n    position: relative;\n    flex-direction: row;\n    flex-shrink: 0;\n    align-items: flex-center;\n    height: 56px;\n    padding: 16px;\n    border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n    box-sizing: border-box;\n    /* TODO(sgomes): replace with global breakpoints when we have them */ }\n    .mdc-temporary-drawer__toolbar-spacer--theme-dark .mdc-temporary-drawer__toolbar-spacer,\n    .mdc-theme--dark .mdc-temporary-drawer__toolbar-spacer {\n      border-bottom: 1px solid rgba(255, 255, 255, 0.12); }\n    @media (min-width: 600px) {\n      .mdc-temporary-drawer__toolbar-spacer {\n        height: 64px; } }\n  .mdc-temporary-drawer__header {\n    position: relative; }\n  .mdc-temporary-drawer__header::before {\n    display: block;\n    padding-top: 56.25%;\n    content: \"\"; }\n  .mdc-temporary-drawer__header-content {\n    display: flex;\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    align-items: flex-end;\n    padding: 16px;\n    box-sizing: border-box; }\n  .mdc-temporary-drawer .mdc-list-group,\n  .mdc-temporary-drawer .mdc-list {\n    padding-right: 0;\n    padding-left: 0; }\n  .mdc-temporary-drawer .mdc-list-item {\n    position: relative;\n    padding: 0 16px;\n    outline: none;\n    color: inherit;\n    text-decoration: none;\n    font-family: Roboto, sans-serif;\n    -moz-osx-font-smoothing: grayscale;\n    -webkit-font-smoothing: antialiased;\n    font-size: 0.875rem;\n    font-weight: 500;\n    letter-spacing: 0.04em;\n    line-height: 1.5rem; }\n  .mdc-temporary-drawer .mdc-list-item__start-detail {\n    color: rgba(0, 0, 0, 0.54); }\n    .mdc-temporary-drawer .mdc-list-item__start-detail--theme-dark .mdc-temporary-drawer .mdc-list-item__start-detail,\n    .mdc-theme--dark .mdc-temporary-drawer .mdc-list-item__start-detail {\n      color: rgba(255, 255, 255, 0.54); }\n  .mdc-temporary-drawer--selected.mdc-list-item,\n  .mdc-temporary-drawer--selected.mdc-list-item .mdc-list-item__start-detail {\n    color: #3f51b5;\n    color: var(--mdc-theme-primary, #3f51b5); }\n  .mdc-temporary-drawer .mdc-list-item::before {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    transition: opacity 120ms 0ms cubic-bezier(0.4, 0, 1, 1);\n    border-radius: inherit;\n    background: currentColor;\n    content: \"\";\n    opacity: 0; }\n  .mdc-temporary-drawer .mdc-list-item:focus::before {\n    transition: opacity 180ms 0ms cubic-bezier(0, 0, 0.2, 1);\n    opacity: .12; }\n  .mdc-temporary-drawer .mdc-list-item:active::before {\n    /*\n      Slightly darker value for visual distinction.\n      This allows a full base that has distinct modes.\n      Progressive enhancement with ripples will provide complete button spec alignment.\n    */\n    transition: opacity 180ms 0ms cubic-bezier(0, 0, 0.2, 1);\n    opacity: .18; }\n  .mdc-temporary-drawer .mdc-list-item:active:focus::before {\n    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); }\n  .mdc-temporary-drawer::before {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background: rgba(0, 0, 0, 0.6);\n    content: \"\";\n    opacity: 0;\n    opacity: var(--mdc-temporary-drawer-opacity, 0);\n    will-change: opacity;\n    box-sizing: border-box; }\n  .mdc-temporary-drawer__drawer {\n    background: #fff;\n    background: var(--mdc-theme-background, #fff);\n    box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);\n    left: 0;\n    right: initial;\n    height: 100%;\n    transform: translateX(-107%);\n    transform: translateX(calc(-100% - 20px));\n    will-change: transform;\n    display: flex;\n    position: absolute;\n    flex-direction: column;\n    width: calc(100% - 56px);\n    max-width: 280px;\n    box-sizing: border-box;\n    overflow: hidden;\n    touch-action: none;\n    /* TODO(sgomes): replace with global breakpoints when we have them */ }\n    [dir=\"rtl\"] .mdc-temporary-drawer__drawer, .mdc-temporary-drawer__drawer[dir=\"rtl\"] {\n      left: initial;\n      right: 0; }\n    .mdc-temporary-drawer--theme-dark .mdc-temporary-drawer__drawer,\n    .mdc-theme--dark .mdc-temporary-drawer__drawer {\n      background: #303030;\n      color: white;\n      color: var(--mdc-theme-text-primary-on-dark, white); }\n    [dir=\"rtl\"] .mdc-temporary-drawer__drawer .mdc-temporary-drawer__drawer,\n    .mdc-temporary-drawer__drawer[dir=\"rtl\"] .mdc-temporary-drawer__drawer {\n      transform: translateX(107%);\n      transform: translateX(calc(100% + 20px)); }\n    @media (min-width: 600px) {\n      .mdc-temporary-drawer__drawer {\n        width: calc(100% - 64px);\n        max-width: 320px; } }\n  .mdc-temporary-drawer__content {\n    flex-grow: 1;\n    margin: 0;\n    overflow-x: hidden;\n    overflow-y: auto;\n    box-sizing: border-box;\n    -webkit-overflow-scrolling: touch;\n    touch-action: pan-y; }\n  .mdc-temporary-drawer__footer {\n    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n    flex-shrink: 0; }\n  .mdc-temporary-drawer--animating::before {\n    transition: opacity 0.3s 0ms cubic-bezier(0, 0, 0.2, 1); }\n  .mdc-temporary-drawer--animating.mdc-temporary-drawer--open .mdc-temporary-drawer__drawer {\n    transition: transform 0.33s 0ms cubic-bezier(0, 0, 0.2, 1); }\n  .mdc-temporary-drawer--animating .mdc-temporary-drawer__drawer {\n    transition: transform 0.13s 0ms cubic-bezier(0, 0, 0.2, 1); }\n  .mdc-temporary-drawer--open {\n    pointer-events: auto; }\n    .mdc-temporary-drawer--open::before {\n      opacity: 1;\n      opacity: var(--mdc-temporary-drawer-opacity, 1); }\n    .mdc-temporary-drawer--open .mdc-temporary-drawer__drawer {\n      transform: none; }\n    [dir=\"rtl\"] .mdc-temporary-drawer--open .mdc-temporary-drawer__drawer, .mdc-temporary-drawer--open[dir=\"rtl\"] .mdc-temporary-drawer__drawer {\n      transform: none; }\n\n/**\n * The css property used for elevation. In most cases this should not be changed. It is exposed\n * as a variable for abstraction / easy use when needing to reference the property directly, for\n * example in a `will-change` rule.\n */\n/**\n * The default duration value for elevation transitions.\n */\n/**\n * The default easing value for elevation transitions.\n */\n/**\n * Applies the correct css rules to an element to give it the elevation specified by $z-value.\n * The $z-value must be between 0 and 24.\n */\n/**\n * Returns a string that can be used as the value for a `transition` property for elevation.\n * Calling this function directly is useful in situations where a component needs to transition\n * more than one property.\n *\n * ```scss\n * .foo {\n *   transition: mdc-elevation-transition-rule(), opacity 100ms ease;\n *   will-change: $mdc-elevation-property, opacity;\n * }\n * ```\n */\n/**\n * Applies the correct css rules needed to have an element transition between elevations.\n * This mixin should be applied to elements whose elevation values will change depending on their\n * context (e.g. when active or disabled).\n */\n.mdc-elevation--z0 {\n  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12); }\n\n.mdc-elevation--z1 {\n  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12); }\n\n.mdc-elevation--z2 {\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12); }\n\n.mdc-elevation--z3 {\n  box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12); }\n\n.mdc-elevation--z4 {\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12); }\n\n.mdc-elevation--z5 {\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12); }\n\n.mdc-elevation--z6 {\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12); }\n\n.mdc-elevation--z7 {\n  box-shadow: 0px 4px 5px -2px rgba(0, 0, 0, 0.2), 0px 7px 10px 1px rgba(0, 0, 0, 0.14), 0px 2px 16px 1px rgba(0, 0, 0, 0.12); }\n\n.mdc-elevation--z8 {\n  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12); }\n\n.mdc-elevation--z9 {\n  box-shadow: 0px 5px 6px -3px rgba(0, 0, 0, 0.2), 0px 9px 12px 1px rgba(0, 0, 0, 0.14), 0px 3px 16px 2px rgba(0, 0, 0, 0.12); }\n\n.mdc-elevation--z10 {\n  box-shadow: 0px 6px 6px -3px rgba(0, 0, 0, 0.2), 0px 10px 14px 1px rgba(0, 0, 0, 0.14), 0px 4px 18px 3px rgba(0, 0, 0, 0.12); }\n\n.mdc-elevation--z11 {\n  box-shadow: 0px 6px 7px -4px rgba(0, 0, 0, 0.2), 0px 11px 15px 1px rgba(0, 0, 0, 0.14), 0px 4px 20px 3px rgba(0, 0, 0, 0.12); }\n\n.mdc-elevation--z12 {\n  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 12px 17px 2px rgba(0, 0, 0, 0.14), 0px 5px 22px 4px rgba(0, 0, 0, 0.12); }\n\n.mdc-elevation--z13 {\n  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 13px 19px 2px rgba(0, 0, 0, 0.14), 0px 5px 24px 4px rgba(0, 0, 0, 0.12); }\n\n.mdc-elevation--z14 {\n  box-shadow: 0px 7px 9px -4px rgba(0, 0, 0, 0.2), 0px 14px 21px 2px rgba(0, 0, 0, 0.14), 0px 5px 26px 4px rgba(0, 0, 0, 0.12); }\n\n.mdc-elevation--z15 {\n  box-shadow: 0px 8px 9px -5px rgba(0, 0, 0, 0.2), 0px 15px 22px 2px rgba(0, 0, 0, 0.14), 0px 6px 28px 5px rgba(0, 0, 0, 0.12); }\n\n.mdc-elevation--z16 {\n  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12); }\n\n.mdc-elevation--z17 {\n  box-shadow: 0px 8px 11px -5px rgba(0, 0, 0, 0.2), 0px 17px 26px 2px rgba(0, 0, 0, 0.14), 0px 6px 32px 5px rgba(0, 0, 0, 0.12); }\n\n.mdc-elevation--z18 {\n  box-shadow: 0px 9px 11px -5px rgba(0, 0, 0, 0.2), 0px 18px 28px 2px rgba(0, 0, 0, 0.14), 0px 7px 34px 6px rgba(0, 0, 0, 0.12); }\n\n.mdc-elevation--z19 {\n  box-shadow: 0px 9px 12px -6px rgba(0, 0, 0, 0.2), 0px 19px 29px 2px rgba(0, 0, 0, 0.14), 0px 7px 36px 6px rgba(0, 0, 0, 0.12); }\n\n.mdc-elevation--z20 {\n  box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 20px 31px 3px rgba(0, 0, 0, 0.14), 0px 8px 38px 7px rgba(0, 0, 0, 0.12); }\n\n.mdc-elevation--z21 {\n  box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 21px 33px 3px rgba(0, 0, 0, 0.14), 0px 8px 40px 7px rgba(0, 0, 0, 0.12); }\n\n.mdc-elevation--z22 {\n  box-shadow: 0px 10px 14px -6px rgba(0, 0, 0, 0.2), 0px 22px 35px 3px rgba(0, 0, 0, 0.14), 0px 8px 42px 7px rgba(0, 0, 0, 0.12); }\n\n.mdc-elevation--z23 {\n  box-shadow: 0px 11px 14px -7px rgba(0, 0, 0, 0.2), 0px 23px 36px 3px rgba(0, 0, 0, 0.14), 0px 9px 44px 8px rgba(0, 0, 0, 0.12); }\n\n.mdc-elevation--z24 {\n  box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12); }\n\n.mdc-elevation-transition {\n  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);\n  will-change: box-shadow; }\n\n/**\n * The css property used for elevation. In most cases this should not be changed. It is exposed\n * as a variable for abstraction / easy use when needing to reference the property directly, for\n * example in a `will-change` rule.\n */\n/**\n * The default duration value for elevation transitions.\n */\n/**\n * The default easing value for elevation transitions.\n */\n/**\n * Applies the correct css rules to an element to give it the elevation specified by $z-value.\n * The $z-value must be between 0 and 24.\n */\n/**\n * Returns a string that can be used as the value for a `transition` property for elevation.\n * Calling this function directly is useful in situations where a component needs to transition\n * more than one property.\n *\n * ```scss\n * .foo {\n *   transition: mdc-elevation-transition-rule(), opacity 100ms ease;\n *   will-change: $mdc-elevation-property, opacity;\n * }\n * ```\n */\n/**\n * Applies the correct css rules needed to have an element transition between elevations.\n * This mixin should be applied to elements whose elevation values will change depending on their\n * context (e.g. when active or disabled).\n */\n/*\n  Precomputed linear color channel values, for use in contrast calculations.\n  See https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests\n\n  Algorithm, for c in 0 to 255:\n  f(c) {\n    c = c / 255;\n    return c < 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);\n  }\n\n  This lookup table is needed since there is no `pow` in SASS.\n*/\n/**\n * Calculate the luminance for a color.\n * See https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests\n */\n/**\n * Calculate the contrast ratio between two colors.\n * See https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests\n */\n/**\n * Determine whether to use dark or light text on top of given color.\n * Returns \"dark\" for dark text and \"light\" for light text.\n */\n/*\n  Main theme colors.\n  If you're a user customizing your color scheme in SASS, these are probably the only variables you need to change.\n*/\n/* Indigo 500 */\n/* Pink A200 */\n/* White */\n/* Which set of text colors to use for each main theme color (light or dark) */\n/* Text colors according to light vs dark and text type */\n/* Primary text colors for each of the theme colors */\n/** MDC Ripple keyframes are split into their own file so that _mixins.scss can rely on them. */\n@keyframes mdc-ripple-fg-radius-in {\n  from {\n    transform: translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1);\n    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1); }\n  to {\n    transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1)); } }\n\n@keyframes mdc-ripple-fg-opacity-in {\n  from {\n    opacity: 0;\n    animation-timing-function: linear; }\n  to {\n    opacity: 1; } }\n\n@keyframes mdc-ripple-fg-opacity-out {\n  from {\n    opacity: 1;\n    animation-timing-function: linear; }\n  to {\n    opacity: 0; } }\n\n/*\n  Precomputed linear color channel values, for use in contrast calculations.\n  See https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests\n\n  Algorithm, for c in 0 to 255:\n  f(c) {\n    c = c / 255;\n    return c < 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);\n  }\n\n  This lookup table is needed since there is no `pow` in SASS.\n*/\n/**\n * Calculate the luminance for a color.\n * See https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests\n */\n/**\n * Calculate the contrast ratio between two colors.\n * See https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests\n */\n/**\n * Determine whether to use dark or light text on top of given color.\n * Returns \"dark\" for dark text and \"light\" for light text.\n */\n/*\n  Main theme colors.\n  If you're a user customizing your color scheme in SASS, these are probably the only variables you need to change.\n*/\n/* Indigo 500 */\n/* Pink A200 */\n/* White */\n/* Which set of text colors to use for each main theme color (light or dark) */\n/* Text colors according to light vs dark and text type */\n/* Primary text colors for each of the theme colors */\n/**\n * Applies the correct theme color style to the specified property.\n * $property is typically color or background-color, but can be any CSS property that accepts color values.\n * $style should be one of the map keys in $mdc-theme-property-values (_variables.scss).\n */\n/**\n * Creates a rule to be used in MDC-Web components for dark theming, and applies the provided contents.\n * Should provide the $root-selector option if applied to anything other than the root selector.\n * When used with a modifier class, provide a second argument of `true` for the $compound parameter\n * to specify that this should be attached as a compound class.\n *\n * Usage example:\n *\n * ```scss\n * .mdc-foo {\n *   color: black;\n *\n *   @include mdc-theme-dark {\n *     color: white;\n *   }\n *\n *   &__bar {\n *     background: black;\n *\n *     @include mdc-theme-dark(\".mdc-foo\") {\n *       background: white;\n *     }\n *   }\n * }\n *\n * .mdc-foo--disabled {\n *   opacity: .38;\n *\n *   @include mdc-theme-dark(\".mdc-foo\", true) {\n *     opacity: .5;\n *   }\n * }\n * ```\n */\n.mdc-fab {\n  --mdc-ripple-surface-width: 0;\n  --mdc-ripple-surface-height: 0;\n  --mdc-ripple-fg-size: 0;\n  --mdc-ripple-left: 0;\n  --mdc-ripple-top: 0;\n  --mdc-ripple-fg-scale: 1;\n  --mdc-ripple-fg-translate-end: 0;\n  --mdc-ripple-fg-translate-start: 0;\n  will-change: transform, opacity;\n  -webkit-tap-highlight-color: transparent;\n  display: inline-flex;\n  position: relative;\n  justify-content: center;\n  width: 56px;\n  height: 56px;\n  padding: 0;\n  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);\n  border: none;\n  border-radius: 50%;\n  cursor: pointer;\n  user-select: none;\n  box-sizing: border-box;\n  fill: currentColor;\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  overflow: hidden;\n  background-color: #ff4081;\n  background-color: var(--mdc-theme-accent, #ff4081);\n  color: white;\n  color: var(--mdc-theme-text-primary-on-accent, white);\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12); }\n  .mdc-fab:not(.mdc-ripple-upgraded):hover::before, .mdc-fab:not(.mdc-ripple-upgraded):focus::before, .mdc-fab:not(.mdc-ripple-upgraded):active::after {\n    transition-duration: 85ms;\n    opacity: .6; }\n  .mdc-fab::before {\n    background-color: rgba(255, 255, 255, 0.16);\n    position: absolute;\n    top: calc(50% - 100%);\n    left: calc(50% - 100%);\n    width: 200%;\n    height: 200%;\n    transition: opacity 250ms linear;\n    border-radius: 50%;\n    opacity: 0;\n    pointer-events: none;\n    content: \"\"; }\n  .mdc-fab.mdc-ripple-upgraded::before {\n    top: calc(50% - 100%);\n    left: calc(50% - 100%);\n    width: 200%;\n    height: 200%;\n    transform: scale(0);\n    transform: scale(var(--mdc-ripple-fg-scale, 0)); }\n  .mdc-fab.mdc-ripple-upgraded--background-focused::before {\n    opacity: .99999; }\n  .mdc-fab.mdc-ripple-upgraded--background-active-fill::before {\n    transition-duration: 120ms;\n    opacity: 1; }\n  .mdc-fab.mdc-ripple-upgraded--unbounded::before {\n    top: calc(50% - 50%);\n    top: var(--mdc-ripple-top, calc(50% - 50%));\n    left: calc(50% - 50%);\n    left: var(--mdc-ripple-left, calc(50% - 50%));\n    width: 100%;\n    width: var(--mdc-ripple-fg-size, 100%);\n    height: 100%;\n    height: var(--mdc-ripple-fg-size, 100%);\n    transform: scale(0);\n    transform: scale(var(--mdc-ripple-fg-scale, 0)); }\n  .mdc-fab::after {\n    background-color: rgba(255, 255, 255, 0.16);\n    position: absolute;\n    top: calc(50% - 100%);\n    left: calc(50% - 100%);\n    width: 200%;\n    height: 200%;\n    transition: opacity 250ms linear;\n    border-radius: 50%;\n    opacity: 0;\n    pointer-events: none;\n    content: \"\"; }\n  .mdc-fab.mdc-ripple-upgraded::after {\n    top: 0;\n    left: 0;\n    width: 100%;\n    width: var(--mdc-ripple-fg-size, 100%);\n    height: 100%;\n    height: var(--mdc-ripple-fg-size, 100%);\n    transform: scale(0);\n    transform-origin: center center;\n    opacity: 0; }\n  .mdc-fab:not(.mdc-ripple-upgraded--unbounded)::after {\n    transform-origin: center center; }\n  .mdc-fab.mdc-ripple-upgraded--unbounded::after {\n    top: 0;\n    top: var(--mdc-ripple-top, 0);\n    left: 0;\n    left: var(--mdc-ripple-left, 0);\n    width: 100%;\n    width: var(--mdc-ripple-fg-size, 100%);\n    height: 100%;\n    height: var(--mdc-ripple-fg-size, 100%);\n    transform: scale(0);\n    transform-origin: center center; }\n  .mdc-fab.mdc-ripple-upgraded--foreground-activation::after {\n    animation: 300ms mdc-ripple-fg-radius-in forwards, 83ms mdc-ripple-fg-opacity-in forwards; }\n  .mdc-fab.mdc-ripple-upgraded--foreground-deactivation::after {\n    transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n    animation: 250ms mdc-ripple-fg-opacity-out; }\n  .mdc-fab:not(.mdc-ripple-upgraded) {\n    -webkit-tap-highlight-color: rgba(0, 0, 0, 0.18); }\n  .mdc-fab--mini {\n    width: 40px;\n    height: 40px; }\n  .mdc-fab--plain {\n    background-color: white;\n    color: rgba(0, 0, 0, 0.87);\n    color: var(--mdc-theme-text-primary-on-light, rgba(0, 0, 0, 0.87)); }\n    .mdc-fab--plain::before {\n      background-color: rgba(0, 0, 0, 0.06);\n      position: absolute;\n      top: calc(50% - 100%);\n      left: calc(50% - 100%);\n      width: 200%;\n      height: 200%;\n      transition: opacity 250ms linear;\n      border-radius: 50%;\n      opacity: 0;\n      pointer-events: none;\n      content: \"\"; }\n    .mdc-fab--plain.mdc-ripple-upgraded::before {\n      top: calc(50% - 100%);\n      left: calc(50% - 100%);\n      width: 200%;\n      height: 200%;\n      transform: scale(0);\n      transform: scale(var(--mdc-ripple-fg-scale, 0)); }\n    .mdc-fab--plain.mdc-ripple-upgraded--background-focused::before {\n      opacity: .99999; }\n    .mdc-fab--plain.mdc-ripple-upgraded--background-active-fill::before {\n      transition-duration: 120ms;\n      opacity: 1; }\n    .mdc-fab--plain.mdc-ripple-upgraded--unbounded::before {\n      top: calc(50% - 50%);\n      top: var(--mdc-ripple-top, calc(50% - 50%));\n      left: calc(50% - 50%);\n      left: var(--mdc-ripple-left, calc(50% - 50%));\n      width: 100%;\n      width: var(--mdc-ripple-fg-size, 100%);\n      height: 100%;\n      height: var(--mdc-ripple-fg-size, 100%);\n      transform: scale(0);\n      transform: scale(var(--mdc-ripple-fg-scale, 0)); }\n    .mdc-fab--plain::after {\n      background-color: rgba(0, 0, 0, 0.06);\n      position: absolute;\n      top: calc(50% - 100%);\n      left: calc(50% - 100%);\n      width: 200%;\n      height: 200%;\n      transition: opacity 250ms linear;\n      border-radius: 50%;\n      opacity: 0;\n      pointer-events: none;\n      content: \"\"; }\n    .mdc-fab--plain.mdc-ripple-upgraded::after {\n      top: 0;\n      left: 0;\n      width: 100%;\n      width: var(--mdc-ripple-fg-size, 100%);\n      height: 100%;\n      height: var(--mdc-ripple-fg-size, 100%);\n      transform: scale(0);\n      transform-origin: center center;\n      opacity: 0; }\n    .mdc-fab--plain:not(.mdc-ripple-upgraded--unbounded)::after {\n      transform-origin: center center; }\n    .mdc-fab--plain.mdc-ripple-upgraded--unbounded::after {\n      top: 0;\n      top: var(--mdc-ripple-top, 0);\n      left: 0;\n      left: var(--mdc-ripple-left, 0);\n      width: 100%;\n      width: var(--mdc-ripple-fg-size, 100%);\n      height: 100%;\n      height: var(--mdc-ripple-fg-size, 100%);\n      transform: scale(0);\n      transform-origin: center center; }\n    .mdc-fab--plain.mdc-ripple-upgraded--foreground-activation::after {\n      animation: 300ms mdc-ripple-fg-radius-in forwards, 83ms mdc-ripple-fg-opacity-in forwards; }\n    .mdc-fab--plain.mdc-ripple-upgraded--foreground-deactivation::after {\n      transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n      animation: 250ms mdc-ripple-fg-opacity-out; }\n  .mdc-fab:active, .mdc-fab:focus {\n    outline: none; }\n  .mdc-fab:active {\n    box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 12px 17px 2px rgba(0, 0, 0, 0.14), 0px 5px 22px 4px rgba(0, 0, 0, 0.12); }\n  .mdc-fab:hover {\n    cursor: pointer; }\n  .mdc-fab::-moz-focus-inner {\n    padding: 0;\n    border: 0; }\n  .mdc-fab > svg {\n    width: 100%; }\n  fieldset:disabled .mdc-fab, .mdc-fab:disabled {\n    background-color: rgba(0, 0, 0, 0.12);\n    color: rgba(0, 0, 0, 0.26);\n    cursor: default;\n    pointer-events: none; }\n\n.mdc-fab__icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%; }\n\n/**\n * Creates a rule that will be applied when an MDC-Web component is within the context of an RTL layout.\n *\n * Usage Example:\n * ```scss\n * .mdc-foo {\n *   position: absolute;\n *   left: 0;\n *\n *   @include mdc-rtl {\n *     left: auto;\n *     right: 0;\n *   }\n *\n *   &__bar {\n *     margin-left: 4px;\n *     @include mdc-rtl(\".mdc-foo\") {\n *       margin-left: auto;\n *       margin-right: 4px;\n *     }\n *   }\n * }\n *\n * .mdc-foo--mod {\n *   padding-left: 4px;\n *\n *   @include mdc-rtl {\n *     padding-left: auto;\n *     padding-right: 4px;\n *   }\n * }\n * ```\n *\n * Note that this works by checking for [dir=\"rtl\"] on an ancestor element. While this will work\n * in most cases, it will in some cases lead to false negatives, e.g.\n *\n * ```html\n * <html dir=\"rtl\">\n *   <!-- ... -->\n *   <div dir=\"ltr\">\n *     <div class=\"mdc-foo\">Styled incorrectly as RTL!</div>\n *   </div>\n * </html>\n * ```\n *\n * In the future, selectors such as :dir (http://mdn.io/:dir) will help us mitigate this.\n */\n/**\n * Takes a base box-model property - e.g. margin / border / padding - along with a default\n * direction and value, and emits rules which apply the value to the\n * \"<base-property>-<default-direction>\" property by default, but flips the direction\n * when within an RTL context.\n *\n * For example:\n *\n * ```scss\n * .mdc-foo {\n *   @include mdc-rtl-reflexive-box(margin, left, 8px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-left: 8px;\n *\n *   @include mdc-rtl {\n *     margin-right: 8px;\n *     margin-left: 0;\n *   }\n * }\n * ```\n * whereas:\n *\n * ```scss\n * .mdc-foo {\n *   @include mdc-rtl-reflexive-box(margin, right, 8px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-right: 8px;\n *\n *   @include mdc-rtl {\n *     margin-right: 0;\n *     margin-left: 8px;\n *   }\n * }\n * ```\n *\n * You can also pass a 4th optional $root-selector argument which will be forwarded to `mdc-rtl`,\n * e.g. `@include mdc-rtl-reflexive-box-property(margin, left, 8px, \".mdc-component\")`.\n *\n * Note that this function will always zero out the original value in an RTL context. If you're\n * trying to flip the values, use mdc-rtl-reflexive-property().\n */\n/**\n * Takes a base property and emits rules that assign <base-property>-left to <left-value> and\n * <base-property>-right to <right-value> in a LTR context, and vice versa in a RTL context.\n * For example:\n *\n * ```scss\n * .mdc-foo {\n *   @include mdc-rtl-reflexive-property(margin, auto, 12px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-left: auto;\n *   margin-right: 12px;\n *\n *   @include mdc-rtl {\n *     margin-left: 12px;\n *     margin-right: auto;\n *   }\n * }\n * ```\n *\n * A 4th optional $root-selector argument can be given, which will be passed to `mdc-rtl`.\n */\n/**\n * Takes an argument specifying a horizontal position property (either \"left\" or \"right\") as well\n * as a value, and applies that value to the specified position in a LTR context, and flips it in a\n * RTL context. For example:\n *\n * ```scss\n * .mdc-foo {\n *   @include mdc-rtl-reflexive-position(left, 0);\n *   position: absolute;\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n *  .mdc-foo {\n *    position: absolute;\n *    left: 0;\n *    right: initial;\n *\n *    @include mdc-rtl {\n *      right: 0;\n *      left: initial;\n *    }\n *  }\n * ```\n * An optional third $root-selector argument may also be given, which is passed to `mdc-rtl`.\n */\n/*\n  Precomputed linear color channel values, for use in contrast calculations.\n  See https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests\n\n  Algorithm, for c in 0 to 255:\n  f(c) {\n    c = c / 255;\n    return c < 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);\n  }\n\n  This lookup table is needed since there is no `pow` in SASS.\n*/\n/**\n * Calculate the luminance for a color.\n * See https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests\n */\n/**\n * Calculate the contrast ratio between two colors.\n * See https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests\n */\n/**\n * Determine whether to use dark or light text on top of given color.\n * Returns \"dark\" for dark text and \"light\" for light text.\n */\n/*\n  Main theme colors.\n  If you're a user customizing your color scheme in SASS, these are probably the only variables you need to change.\n*/\n/* Indigo 500 */\n/* Pink A200 */\n/* White */\n/* Which set of text colors to use for each main theme color (light or dark) */\n/* Text colors according to light vs dark and text type */\n/* Primary text colors for each of the theme colors */\n/**\n * Applies the correct theme color style to the specified property.\n * $property is typically color or background-color, but can be any CSS property that accepts color values.\n * $style should be one of the map keys in $mdc-theme-property-values (_variables.scss).\n */\n/**\n * Creates a rule to be used in MDC-Web components for dark theming, and applies the provided contents.\n * Should provide the $root-selector option if applied to anything other than the root selector.\n * When used with a modifier class, provide a second argument of `true` for the $compound parameter\n * to specify that this should be attached as a compound class.\n *\n * Usage example:\n *\n * ```scss\n * .mdc-foo {\n *   color: black;\n *\n *   @include mdc-theme-dark {\n *     color: white;\n *   }\n *\n *   &__bar {\n *     background: black;\n *\n *     @include mdc-theme-dark(\".mdc-foo\") {\n *       background: white;\n *     }\n *   }\n * }\n *\n * .mdc-foo--disabled {\n *   opacity: .38;\n *\n *   @include mdc-theme-dark(\".mdc-foo\", true) {\n *     opacity: .5;\n *   }\n * }\n * ```\n */\n/* TODO(sgomes): Figure out what to do about desktop font sizes. */\n/* TODO(sgomes): Figure out what to do about i18n and i18n font sizes. */\n/* stylelint-disable selector-no-type */\n.mdc-form-field {\n  font-family: Roboto, sans-serif;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-size: 0.875rem;\n  font-weight: 400;\n  letter-spacing: 0.04em;\n  line-height: 1.25rem;\n  color: rgba(0, 0, 0, 0.87);\n  color: var(--mdc-theme-text-primary-on-light, rgba(0, 0, 0, 0.87));\n  display: inline-flex;\n  align-items: center;\n  vertical-align: middle; }\n  .mdc-form-field--theme-dark,\n  .mdc-theme--dark .mdc-form-field {\n    color: white;\n    color: var(--mdc-theme-text-primary-on-dark, white); }\n  .mdc-form-field > label {\n    order: 0;\n    margin-right: auto;\n    padding-left: 4px; }\n  [dir=\"rtl\"] .mdc-form-field > label, .mdc-form-field[dir=\"rtl\"] > label {\n    margin-left: auto;\n    padding-right: 4px; }\n\n.mdc-form-field--align-end > label {\n  order: -1;\n  margin-left: auto;\n  padding-right: 4px; }\n\n[dir=\"rtl\"] .mdc-form-field--align-end > label, .mdc-form-field--align-end[dir=\"rtl\"] > label {\n  margin-right: auto;\n  padding-left: 4px; }\n\n/* stylelint-enable selector-no-type */\n/**\n * Creates a rule that will be applied when an MDC-Web component is within the context of an RTL layout.\n *\n * Usage Example:\n * ```scss\n * .mdc-foo {\n *   position: absolute;\n *   left: 0;\n *\n *   @include mdc-rtl {\n *     left: auto;\n *     right: 0;\n *   }\n *\n *   &__bar {\n *     margin-left: 4px;\n *     @include mdc-rtl(\".mdc-foo\") {\n *       margin-left: auto;\n *       margin-right: 4px;\n *     }\n *   }\n * }\n *\n * .mdc-foo--mod {\n *   padding-left: 4px;\n *\n *   @include mdc-rtl {\n *     padding-left: auto;\n *     padding-right: 4px;\n *   }\n * }\n * ```\n *\n * Note that this works by checking for [dir=\"rtl\"] on an ancestor element. While this will work\n * in most cases, it will in some cases lead to false negatives, e.g.\n *\n * ```html\n * <html dir=\"rtl\">\n *   <!-- ... -->\n *   <div dir=\"ltr\">\n *     <div class=\"mdc-foo\">Styled incorrectly as RTL!</div>\n *   </div>\n * </html>\n * ```\n *\n * In the future, selectors such as :dir (http://mdn.io/:dir) will help us mitigate this.\n */\n/**\n * Takes a base box-model property - e.g. margin / border / padding - along with a default\n * direction and value, and emits rules which apply the value to the\n * \"<base-property>-<default-direction>\" property by default, but flips the direction\n * when within an RTL context.\n *\n * For example:\n *\n * ```scss\n * .mdc-foo {\n *   @include mdc-rtl-reflexive-box(margin, left, 8px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-left: 8px;\n *\n *   @include mdc-rtl {\n *     margin-right: 8px;\n *     margin-left: 0;\n *   }\n * }\n * ```\n * whereas:\n *\n * ```scss\n * .mdc-foo {\n *   @include mdc-rtl-reflexive-box(margin, right, 8px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-right: 8px;\n *\n *   @include mdc-rtl {\n *     margin-right: 0;\n *     margin-left: 8px;\n *   }\n * }\n * ```\n *\n * You can also pass a 4th optional $root-selector argument which will be forwarded to `mdc-rtl`,\n * e.g. `@include mdc-rtl-reflexive-box-property(margin, left, 8px, \".mdc-component\")`.\n *\n * Note that this function will always zero out the original value in an RTL context. If you're\n * trying to flip the values, use mdc-rtl-reflexive-property().\n */\n/**\n * Takes a base property and emits rules that assign <base-property>-left to <left-value> and\n * <base-property>-right to <right-value> in a LTR context, and vice versa in a RTL context.\n * For example:\n *\n * ```scss\n * .mdc-foo {\n *   @include mdc-rtl-reflexive-property(margin, auto, 12px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-left: auto;\n *   margin-right: 12px;\n *\n *   @include mdc-rtl {\n *     margin-left: 12px;\n *     margin-right: auto;\n *   }\n * }\n * ```\n *\n * A 4th optional $root-selector argument can be given, which will be passed to `mdc-rtl`.\n */\n/**\n * Takes an argument specifying a horizontal position property (either \"left\" or \"right\") as well\n * as a value, and applies that value to the specified position in a LTR context, and flips it in a\n * RTL context. For example:\n *\n * ```scss\n * .mdc-foo {\n *   @include mdc-rtl-reflexive-position(left, 0);\n *   position: absolute;\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n *  .mdc-foo {\n *    position: absolute;\n *    left: 0;\n *    right: initial;\n *\n *    @include mdc-rtl {\n *      right: 0;\n *      left: initial;\n *    }\n *  }\n * ```\n * An optional third $root-selector argument may also be given, which is passed to `mdc-rtl`.\n */\n/*\n  Precomputed linear color channel values, for use in contrast calculations.\n  See https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests\n\n  Algorithm, for c in 0 to 255:\n  f(c) {\n    c = c / 255;\n    return c < 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);\n  }\n\n  This lookup table is needed since there is no `pow` in SASS.\n*/\n/**\n * Calculate the luminance for a color.\n * See https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests\n */\n/**\n * Calculate the contrast ratio between two colors.\n * See https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests\n */\n/**\n * Determine whether to use dark or light text on top of given color.\n * Returns \"dark\" for dark text and \"light\" for light text.\n */\n/*\n  Main theme colors.\n  If you're a user customizing your color scheme in SASS, these are probably the only variables you need to change.\n*/\n/* Indigo 500 */\n/* Pink A200 */\n/* White */\n/* Which set of text colors to use for each main theme color (light or dark) */\n/* Text colors according to light vs dark and text type */\n/* Primary text colors for each of the theme colors */\n/**\n * Applies the correct theme color style to the specified property.\n * $property is typically color or background-color, but can be any CSS property that accepts color values.\n * $style should be one of the map keys in $mdc-theme-property-values (_variables.scss).\n */\n/**\n * Creates a rule to be used in MDC-Web components for dark theming, and applies the provided contents.\n * Should provide the $root-selector option if applied to anything other than the root selector.\n * When used with a modifier class, provide a second argument of `true` for the $compound parameter\n * to specify that this should be attached as a compound class.\n *\n * Usage example:\n *\n * ```scss\n * .mdc-foo {\n *   color: black;\n *\n *   @include mdc-theme-dark {\n *     color: white;\n *   }\n *\n *   &__bar {\n *     background: black;\n *\n *     @include mdc-theme-dark(\".mdc-foo\") {\n *       background: white;\n *     }\n *   }\n * }\n *\n * .mdc-foo--disabled {\n *   opacity: .38;\n *\n *   @include mdc-theme-dark(\".mdc-foo\", true) {\n *     opacity: .5;\n *   }\n * }\n * ```\n */\n/* TODO(sgomes): Figure out what to do about desktop font sizes. */\n/* TODO(sgomes): Figure out what to do about i18n and i18n font sizes. */\n.mdc-grid-list .mdc-grid-tile__primary {\n  padding-bottom: calc(100% / 1); }\n\n.mdc-grid-list .mdc-grid-tile {\n  margin: 2px 0;\n  padding: 0 2px; }\n  .mdc-grid-list .mdc-grid-tile__secondary {\n    left: 2px;\n    width: calc(100% - 4px); }\n\n.mdc-grid-list .mdc-grid-list__tiles {\n  margin: 2px auto; }\n\n.mdc-grid-list__tiles {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  margin: 0;\n  padding: 0; }\n\n.mdc-grid-list--tile-gutter-1 .mdc-grid-tile {\n  margin: 0.5px 0;\n  padding: 0 0.5px; }\n  .mdc-grid-list--tile-gutter-1 .mdc-grid-tile__secondary {\n    left: 0.5px;\n    width: calc(100% - 1px); }\n\n.mdc-grid-list--tile-gutter-1 .mdc-grid-list__tiles {\n  margin: 0.5px auto; }\n\n.mdc-grid-list--tile-aspect-16x9 .mdc-grid-tile__primary {\n  padding-bottom: calc(100% / 1.77778); }\n\n.mdc-grid-list--tile-aspect-3x2 .mdc-grid-tile__primary {\n  padding-bottom: calc(100% / 1.5); }\n\n.mdc-grid-list--tile-aspect-2x3 .mdc-grid-tile__primary {\n  padding-bottom: calc(100% / 0.66667); }\n\n.mdc-grid-list--tile-aspect-4x3 .mdc-grid-tile__primary {\n  padding-bottom: calc(100% / 1.33333); }\n\n.mdc-grid-list--tile-aspect-3x4 .mdc-grid-tile__primary {\n  padding-bottom: calc(100% / 0.75); }\n\n.mdc-grid-list--twoline-caption .mdc-grid-tile__secondary {\n  height: 68px; }\n\n.mdc-grid-list--header-caption .mdc-grid-tile__secondary {\n  top: 0;\n  bottom: auto; }\n\n.mdc-grid-list--with-icon-align-start .mdc-grid-tile__secondary {\n  padding-left: 56px;\n  padding-right: 8px; }\n  [dir=\"rtl\"] .mdc-grid-list .mdc-grid-list--with-icon-align-start .mdc-grid-tile__secondary,\n  .mdc-grid-list[dir=\"rtl\"] .mdc-grid-list--with-icon-align-start .mdc-grid-tile__secondary {\n    padding-left: 8px;\n    padding-right: 56px; }\n\n.mdc-grid-list--with-icon-align-start .mdc-grid-tile__icon {\n  left: 16px;\n  right: initial;\n  font-size: 24px; }\n  [dir=\"rtl\"] .mdc-grid-list .mdc-grid-list--with-icon-align-start .mdc-grid-tile__icon,\n  .mdc-grid-list[dir=\"rtl\"] .mdc-grid-list--with-icon-align-start .mdc-grid-tile__icon {\n    left: initial;\n    right: 16px; }\n\n.mdc-grid-list--with-icon-align-end .mdc-grid-tile__secondary {\n  padding-left: 16px;\n  padding-right: 56px; }\n  [dir=\"rtl\"] .mdc-grid-list .mdc-grid-list--with-icon-align-end .mdc-grid-tile__secondary,\n  .mdc-grid-list[dir=\"rtl\"] .mdc-grid-list--with-icon-align-end .mdc-grid-tile__secondary {\n    padding-left: 56px;\n    padding-right: 16px; }\n\n.mdc-grid-list--with-icon-align-end .mdc-grid-tile__icon {\n  left: initial;\n  right: 16px;\n  font-size: 24px; }\n  [dir=\"rtl\"] .mdc-grid-list .mdc-grid-list--with-icon-align-end .mdc-grid-tile__icon,\n  .mdc-grid-list[dir=\"rtl\"] .mdc-grid-list--with-icon-align-end .mdc-grid-tile__icon {\n    left: 16px;\n    right: initial; }\n\n.mdc-grid-tile {\n  display: block;\n  position: relative;\n  width: var(--mdc-grid-list-tile-width, 200px); }\n  .mdc-grid-tile__primary {\n    position: relative;\n    height: 0;\n    background-color: #fff;\n    background-color: var(--mdc-theme-background, #fff);\n    color: rgba(0, 0, 0, 0.87);\n    color: var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87)); }\n    .mdc-grid-tile__primary-content {\n      position: absolute;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      background-repeat: no-repeat;\n      background-position: center;\n      background-size: cover; }\n  .mdc-grid-tile__secondary {\n    position: absolute;\n    box-sizing: border-box;\n    bottom: 0;\n    height: 48px;\n    padding: 16px;\n    background-color: #3f51b5;\n    background-color: var(--mdc-theme-primary, #3f51b5);\n    color: white;\n    color: var(--mdc-theme-text-primary-on-primary, white); }\n  .mdc-grid-tile__title {\n    display: block;\n    margin: 0;\n    padding: 0;\n    font-size: 1rem;\n    font-weight: 500;\n    line-height: 1rem;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden; }\n  .mdc-grid-tile__support-text {\n    font-family: Roboto, sans-serif;\n    -moz-osx-font-smoothing: grayscale;\n    -webkit-font-smoothing: antialiased;\n    font-size: 0.875rem;\n    font-weight: 400;\n    letter-spacing: 0.04em;\n    line-height: 1.25rem;\n    display: block;\n    margin: 0;\n    margin-top: 4px;\n    padding: 0; }\n  .mdc-grid-tile__icon {\n    position: absolute;\n    top: calc(50% - 24px / 2);\n    font-size: 0; }\n\n/** postcss-bem-linter: define icon-toggle */\n/*\n  Precomputed linear color channel values, for use in contrast calculations.\n  See https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests\n\n  Algorithm, for c in 0 to 255:\n  f(c) {\n    c = c / 255;\n    return c < 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);\n  }\n\n  This lookup table is needed since there is no `pow` in SASS.\n*/\n/**\n * Calculate the luminance for a color.\n * See https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests\n */\n/**\n * Calculate the contrast ratio between two colors.\n * See https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests\n */\n/**\n * Determine whether to use dark or light text on top of given color.\n * Returns \"dark\" for dark text and \"light\" for light text.\n */\n/*\n  Main theme colors.\n  If you're a user customizing your color scheme in SASS, these are probably the only variables you need to change.\n*/\n/* Indigo 500 */\n/* Pink A200 */\n/* White */\n/* Which set of text colors to use for each main theme color (light or dark) */\n/* Text colors according to light vs dark and text type */\n/* Primary text colors for each of the theme colors */\n/** MDC Ripple keyframes are split into their own file so that _mixins.scss can rely on them. */\n@keyframes mdc-ripple-fg-radius-in {\n  from {\n    transform: translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1);\n    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1); }\n  to {\n    transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1)); } }\n\n@keyframes mdc-ripple-fg-opacity-in {\n  from {\n    opacity: 0;\n    animation-timing-function: linear; }\n  to {\n    opacity: 1; } }\n\n@keyframes mdc-ripple-fg-opacity-out {\n  from {\n    opacity: 1;\n    animation-timing-function: linear; }\n  to {\n    opacity: 0; } }\n\n/*\n  Precomputed linear color channel values, for use in contrast calculations.\n  See https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests\n\n  Algorithm, for c in 0 to 255:\n  f(c) {\n    c = c / 255;\n    return c < 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);\n  }\n\n  This lookup table is needed since there is no `pow` in SASS.\n*/\n/**\n * Calculate the luminance for a color.\n * See https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests\n */\n/**\n * Calculate the contrast ratio between two colors.\n * See https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests\n */\n/**\n * Determine whether to use dark or light text on top of given color.\n * Returns \"dark\" for dark text and \"light\" for light text.\n */\n/*\n  Main theme colors.\n  If you're a user customizing your color scheme in SASS, these are probably the only variables you need to change.\n*/\n/* Indigo 500 */\n/* Pink A200 */\n/* White */\n/* Which set of text colors to use for each main theme color (light or dark) */\n/* Text colors according to light vs dark and text type */\n/* Primary text colors for each of the theme colors */\n/**\n * Applies the correct theme color style to the specified property.\n * $property is typically color or background-color, but can be any CSS property that accepts color values.\n * $style should be one of the map keys in $mdc-theme-property-values (_variables.scss).\n */\n/**\n * Creates a rule to be used in MDC-Web components for dark theming, and applies the provided contents.\n * Should provide the $root-selector option if applied to anything other than the root selector.\n * When used with a modifier class, provide a second argument of `true` for the $compound parameter\n * to specify that this should be attached as a compound class.\n *\n * Usage example:\n *\n * ```scss\n * .mdc-foo {\n *   color: black;\n *\n *   @include mdc-theme-dark {\n *     color: white;\n *   }\n *\n *   &__bar {\n *     background: black;\n *\n *     @include mdc-theme-dark(\".mdc-foo\") {\n *       background: white;\n *     }\n *   }\n * }\n *\n * .mdc-foo--disabled {\n *   opacity: .38;\n *\n *   @include mdc-theme-dark(\".mdc-foo\", true) {\n *     opacity: .5;\n *   }\n * }\n * ```\n */\n.mdc-icon-toggle {\n  color: rgba(0, 0, 0, 0.54);\n  color: var(--mdc-theme-text-secondary-on-light, rgba(0, 0, 0, 0.54));\n  --mdc-ripple-surface-width: 0;\n  --mdc-ripple-surface-height: 0;\n  --mdc-ripple-fg-size: 0;\n  --mdc-ripple-left: 0;\n  --mdc-ripple-top: 0;\n  --mdc-ripple-fg-scale: 1;\n  --mdc-ripple-fg-translate-end: 0;\n  --mdc-ripple-fg-translate-start: 0;\n  will-change: transform, opacity;\n  -webkit-tap-highlight-color: transparent;\n  will-change: initial;\n  display: flex;\n  position: relative;\n  box-sizing: border-box;\n  align-items: center;\n  justify-content: center;\n  width: 48px;\n  height: 48px;\n  padding: 12px;\n  outline: none;\n  font-size: 1.5rem;\n  cursor: pointer;\n  user-select: none; }\n  .mdc-icon-toggle:not(.mdc-ripple-upgraded):hover::before, .mdc-icon-toggle:not(.mdc-ripple-upgraded):focus::before, .mdc-icon-toggle:not(.mdc-ripple-upgraded):active::after {\n    transition-duration: 85ms;\n    opacity: .6; }\n  .mdc-icon-toggle::before {\n    background-color: rgba(0, 0, 0, 0.062);\n    position: absolute;\n    top: calc(50% - 100%);\n    left: calc(50% - 100%);\n    width: 200%;\n    height: 200%;\n    transition: opacity 250ms linear;\n    border-radius: 50%;\n    opacity: 0;\n    pointer-events: none;\n    content: \"\"; }\n  .mdc-icon-toggle.mdc-ripple-upgraded::before {\n    top: calc(50% - 100%);\n    left: calc(50% - 100%);\n    width: 200%;\n    height: 200%;\n    transform: scale(0);\n    transform: scale(var(--mdc-ripple-fg-scale, 0)); }\n  .mdc-icon-toggle.mdc-ripple-upgraded--background-focused::before {\n    opacity: .99999; }\n  .mdc-icon-toggle.mdc-ripple-upgraded--background-active-fill::before {\n    transition-duration: 120ms;\n    opacity: 1; }\n  .mdc-icon-toggle.mdc-ripple-upgraded--unbounded::before {\n    top: calc(50% - 50%);\n    top: var(--mdc-ripple-top, calc(50% - 50%));\n    left: calc(50% - 50%);\n    left: var(--mdc-ripple-left, calc(50% - 50%));\n    width: 100%;\n    width: var(--mdc-ripple-fg-size, 100%);\n    height: 100%;\n    height: var(--mdc-ripple-fg-size, 100%);\n    transform: scale(0);\n    transform: scale(var(--mdc-ripple-fg-scale, 0)); }\n  .mdc-icon-toggle::after {\n    background-color: rgba(0, 0, 0, 0.062);\n    position: absolute;\n    top: calc(50% - 100%);\n    left: calc(50% - 100%);\n    width: 200%;\n    height: 200%;\n    transition: opacity 250ms linear;\n    border-radius: 50%;\n    opacity: 0;\n    pointer-events: none;\n    content: \"\"; }\n  .mdc-icon-toggle.mdc-ripple-upgraded::after {\n    top: 0;\n    left: 0;\n    width: 100%;\n    width: var(--mdc-ripple-fg-size, 100%);\n    height: 100%;\n    height: var(--mdc-ripple-fg-size, 100%);\n    transform: scale(0);\n    transform-origin: center center;\n    opacity: 0; }\n  .mdc-icon-toggle:not(.mdc-ripple-upgraded--unbounded)::after {\n    transform-origin: center center; }\n  .mdc-icon-toggle.mdc-ripple-upgraded--unbounded::after {\n    top: 0;\n    top: var(--mdc-ripple-top, 0);\n    left: 0;\n    left: var(--mdc-ripple-left, 0);\n    width: 100%;\n    width: var(--mdc-ripple-fg-size, 100%);\n    height: 100%;\n    height: var(--mdc-ripple-fg-size, 100%);\n    transform: scale(0);\n    transform-origin: center center; }\n  .mdc-icon-toggle.mdc-ripple-upgraded--foreground-activation::after {\n    animation: 300ms mdc-ripple-fg-radius-in forwards, 83ms mdc-ripple-fg-opacity-in forwards; }\n  .mdc-icon-toggle.mdc-ripple-upgraded--foreground-deactivation::after {\n    transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n    animation: 250ms mdc-ripple-fg-opacity-out; }\n  .mdc-icon-toggle--theme-dark.mdc-icon-toggle::before,\n  .mdc-theme--dark .mdc-icon-toggle::before {\n    background-color: rgba(255, 255, 255, 0.16);\n    position: absolute;\n    top: calc(50% - 100%);\n    left: calc(50% - 100%);\n    width: 200%;\n    height: 200%;\n    transition: opacity 250ms linear;\n    border-radius: 50%;\n    opacity: 0;\n    pointer-events: none;\n    content: \"\"; }\n  .mdc-icon-toggle--theme-dark.mdc-icon-toggle.mdc-ripple-upgraded::before,\n  .mdc-theme--dark .mdc-icon-toggle.mdc-ripple-upgraded::before {\n    top: calc(50% - 100%);\n    left: calc(50% - 100%);\n    width: 200%;\n    height: 200%;\n    transform: scale(0);\n    transform: scale(var(--mdc-ripple-fg-scale, 0)); }\n  .mdc-icon-toggle--theme-dark.mdc-icon-toggle.mdc-ripple-upgraded--background-focused::before,\n  .mdc-theme--dark .mdc-icon-toggle.mdc-ripple-upgraded--background-focused::before {\n    opacity: .99999; }\n  .mdc-icon-toggle--theme-dark.mdc-icon-toggle.mdc-ripple-upgraded--background-active-fill::before,\n  .mdc-theme--dark .mdc-icon-toggle.mdc-ripple-upgraded--background-active-fill::before {\n    transition-duration: 120ms;\n    opacity: 1; }\n  .mdc-icon-toggle--theme-dark.mdc-icon-toggle.mdc-ripple-upgraded--unbounded::before,\n  .mdc-theme--dark .mdc-icon-toggle.mdc-ripple-upgraded--unbounded::before {\n    top: calc(50% - 50%);\n    top: var(--mdc-ripple-top, calc(50% - 50%));\n    left: calc(50% - 50%);\n    left: var(--mdc-ripple-left, calc(50% - 50%));\n    width: 100%;\n    width: var(--mdc-ripple-fg-size, 100%);\n    height: 100%;\n    height: var(--mdc-ripple-fg-size, 100%);\n    transform: scale(0);\n    transform: scale(var(--mdc-ripple-fg-scale, 0)); }\n  .mdc-icon-toggle--theme-dark.mdc-icon-toggle::after,\n  .mdc-theme--dark .mdc-icon-toggle::after {\n    background-color: rgba(255, 255, 255, 0.16);\n    position: absolute;\n    top: calc(50% - 100%);\n    left: calc(50% - 100%);\n    width: 200%;\n    height: 200%;\n    transition: opacity 250ms linear;\n    border-radius: 50%;\n    opacity: 0;\n    pointer-events: none;\n    content: \"\"; }\n  .mdc-icon-toggle--theme-dark.mdc-icon-toggle.mdc-ripple-upgraded::after,\n  .mdc-theme--dark .mdc-icon-toggle.mdc-ripple-upgraded::after {\n    top: 0;\n    left: 0;\n    width: 100%;\n    width: var(--mdc-ripple-fg-size, 100%);\n    height: 100%;\n    height: var(--mdc-ripple-fg-size, 100%);\n    transform: scale(0);\n    transform-origin: center center;\n    opacity: 0; }\n  .mdc-icon-toggle--theme-dark.mdc-icon-toggle:not(.mdc-ripple-upgraded--unbounded)::after,\n  .mdc-theme--dark .mdc-icon-toggle:not(.mdc-ripple-upgraded--unbounded)::after {\n    transform-origin: center center; }\n  .mdc-icon-toggle--theme-dark.mdc-icon-toggle.mdc-ripple-upgraded--unbounded::after,\n  .mdc-theme--dark .mdc-icon-toggle.mdc-ripple-upgraded--unbounded::after {\n    top: 0;\n    top: var(--mdc-ripple-top, 0);\n    left: 0;\n    left: var(--mdc-ripple-left, 0);\n    width: 100%;\n    width: var(--mdc-ripple-fg-size, 100%);\n    height: 100%;\n    height: var(--mdc-ripple-fg-size, 100%);\n    transform: scale(0);\n    transform-origin: center center; }\n  .mdc-icon-toggle--theme-dark.mdc-icon-toggle.mdc-ripple-upgraded--foreground-activation::after,\n  .mdc-theme--dark .mdc-icon-toggle.mdc-ripple-upgraded--foreground-activation::after {\n    animation: 300ms mdc-ripple-fg-radius-in forwards, 83ms mdc-ripple-fg-opacity-in forwards; }\n  .mdc-icon-toggle--theme-dark.mdc-icon-toggle.mdc-ripple-upgraded--foreground-deactivation::after,\n  .mdc-theme--dark .mdc-icon-toggle.mdc-ripple-upgraded--foreground-deactivation::after {\n    transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n    animation: 250ms mdc-ripple-fg-opacity-out; }\n  .mdc-icon-toggle::after {\n    position: absolute;\n    border-radius: 50%;\n    content: \"\";\n    opacity: 0;\n    pointer-events: none; }\n  .mdc-icon-toggle--theme-dark,\n  .mdc-theme--dark .mdc-icon-toggle {\n    color: white;\n    color: var(--mdc-theme-text-primary-on-dark, white); }\n\n.mdc-icon-toggle--primary {\n  color: #3f51b5;\n  color: var(--mdc-theme-primary, #3f51b5); }\n  .mdc-icon-toggle--primary::before {\n    background-color: rgba(63, 81, 181, 0.14);\n    position: absolute;\n    top: calc(50% - 100%);\n    left: calc(50% - 100%);\n    width: 200%;\n    height: 200%;\n    transition: opacity 250ms linear;\n    border-radius: 50%;\n    opacity: 0;\n    pointer-events: none;\n    content: \"\"; }\n    @supports (background-color: color(green a(10%))) {\n      .mdc-icon-toggle--primary::before {\n        background-color: color(var(--mdc-theme-primary, #3f51b5) a(14%)); } }\n  .mdc-icon-toggle--primary.mdc-ripple-upgraded::before {\n    top: calc(50% - 100%);\n    left: calc(50% - 100%);\n    width: 200%;\n    height: 200%;\n    transform: scale(0);\n    transform: scale(var(--mdc-ripple-fg-scale, 0)); }\n  .mdc-icon-toggle--primary.mdc-ripple-upgraded--background-focused::before {\n    opacity: .99999; }\n  .mdc-icon-toggle--primary.mdc-ripple-upgraded--background-active-fill::before {\n    transition-duration: 120ms;\n    opacity: 1; }\n  .mdc-icon-toggle--primary.mdc-ripple-upgraded--unbounded::before {\n    top: calc(50% - 50%);\n    top: var(--mdc-ripple-top, calc(50% - 50%));\n    left: calc(50% - 50%);\n    left: var(--mdc-ripple-left, calc(50% - 50%));\n    width: 100%;\n    width: var(--mdc-ripple-fg-size, 100%);\n    height: 100%;\n    height: var(--mdc-ripple-fg-size, 100%);\n    transform: scale(0);\n    transform: scale(var(--mdc-ripple-fg-scale, 0)); }\n  .mdc-icon-toggle--primary::after {\n    background-color: rgba(63, 81, 181, 0.14);\n    position: absolute;\n    top: calc(50% - 100%);\n    left: calc(50% - 100%);\n    width: 200%;\n    height: 200%;\n    transition: opacity 250ms linear;\n    border-radius: 50%;\n    opacity: 0;\n    pointer-events: none;\n    content: \"\"; }\n    @supports (background-color: color(green a(10%))) {\n      .mdc-icon-toggle--primary::after {\n        background-color: color(var(--mdc-theme-primary, #3f51b5) a(14%)); } }\n  .mdc-icon-toggle--primary.mdc-ripple-upgraded::after {\n    top: 0;\n    left: 0;\n    width: 100%;\n    width: var(--mdc-ripple-fg-size, 100%);\n    height: 100%;\n    height: var(--mdc-ripple-fg-size, 100%);\n    transform: scale(0);\n    transform-origin: center center;\n    opacity: 0; }\n  .mdc-icon-toggle--primary:not(.mdc-ripple-upgraded--unbounded)::after {\n    transform-origin: center center; }\n  .mdc-icon-toggle--primary.mdc-ripple-upgraded--unbounded::after {\n    top: 0;\n    top: var(--mdc-ripple-top, 0);\n    left: 0;\n    left: var(--mdc-ripple-left, 0);\n    width: 100%;\n    width: var(--mdc-ripple-fg-size, 100%);\n    height: 100%;\n    height: var(--mdc-ripple-fg-size, 100%);\n    transform: scale(0);\n    transform-origin: center center; }\n  .mdc-icon-toggle--primary.mdc-ripple-upgraded--foreground-activation::after {\n    animation: 300ms mdc-ripple-fg-radius-in forwards, 83ms mdc-ripple-fg-opacity-in forwards; }\n  .mdc-icon-toggle--primary.mdc-ripple-upgraded--foreground-deactivation::after {\n    transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n    animation: 250ms mdc-ripple-fg-opacity-out; }\n\n.mdc-icon-toggle--accent {\n  color: #ff4081;\n  color: var(--mdc-theme-accent, #ff4081); }\n  .mdc-icon-toggle--accent::before {\n    background-color: rgba(255, 64, 129, 0.14);\n    position: absolute;\n    top: calc(50% - 100%);\n    left: calc(50% - 100%);\n    width: 200%;\n    height: 200%;\n    transition: opacity 250ms linear;\n    border-radius: 50%;\n    opacity: 0;\n    pointer-events: none;\n    content: \"\"; }\n    @supports (background-color: color(green a(10%))) {\n      .mdc-icon-toggle--accent::before {\n        background-color: color(var(--mdc-theme-accent, #ff4081) a(14%)); } }\n  .mdc-icon-toggle--accent.mdc-ripple-upgraded::before {\n    top: calc(50% - 100%);\n    left: calc(50% - 100%);\n    width: 200%;\n    height: 200%;\n    transform: scale(0);\n    transform: scale(var(--mdc-ripple-fg-scale, 0)); }\n  .mdc-icon-toggle--accent.mdc-ripple-upgraded--background-focused::before {\n    opacity: .99999; }\n  .mdc-icon-toggle--accent.mdc-ripple-upgraded--background-active-fill::before {\n    transition-duration: 120ms;\n    opacity: 1; }\n  .mdc-icon-toggle--accent.mdc-ripple-upgraded--unbounded::before {\n    top: calc(50% - 50%);\n    top: var(--mdc-ripple-top, calc(50% - 50%));\n    left: calc(50% - 50%);\n    left: var(--mdc-ripple-left, calc(50% - 50%));\n    width: 100%;\n    width: var(--mdc-ripple-fg-size, 100%);\n    height: 100%;\n    height: var(--mdc-ripple-fg-size, 100%);\n    transform: scale(0);\n    transform: scale(var(--mdc-ripple-fg-scale, 0)); }\n  .mdc-icon-toggle--accent::after {\n    background-color: rgba(255, 64, 129, 0.14);\n    position: absolute;\n    top: calc(50% - 100%);\n    left: calc(50% - 100%);\n    width: 200%;\n    height: 200%;\n    transition: opacity 250ms linear;\n    border-radius: 50%;\n    opacity: 0;\n    pointer-events: none;\n    content: \"\"; }\n    @supports (background-color: color(green a(10%))) {\n      .mdc-icon-toggle--accent::after {\n        background-color: color(var(--mdc-theme-accent, #ff4081) a(14%)); } }\n  .mdc-icon-toggle--accent.mdc-ripple-upgraded::after {\n    top: 0;\n    left: 0;\n    width: 100%;\n    width: var(--mdc-ripple-fg-size, 100%);\n    height: 100%;\n    height: var(--mdc-ripple-fg-size, 100%);\n    transform: scale(0);\n    transform-origin: center center;\n    opacity: 0; }\n  .mdc-icon-toggle--accent:not(.mdc-ripple-upgraded--unbounded)::after {\n    transform-origin: center center; }\n  .mdc-icon-toggle--accent.mdc-ripple-upgraded--unbounded::after {\n    top: 0;\n    top: var(--mdc-ripple-top, 0);\n    left: 0;\n    left: var(--mdc-ripple-left, 0);\n    width: 100%;\n    width: var(--mdc-ripple-fg-size, 100%);\n    height: 100%;\n    height: var(--mdc-ripple-fg-size, 100%);\n    transform: scale(0);\n    transform-origin: center center; }\n  .mdc-icon-toggle--accent.mdc-ripple-upgraded--foreground-activation::after {\n    animation: 300ms mdc-ripple-fg-radius-in forwards, 83ms mdc-ripple-fg-opacity-in forwards; }\n  .mdc-icon-toggle--accent.mdc-ripple-upgraded--foreground-deactivation::after {\n    transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n    animation: 250ms mdc-ripple-fg-opacity-out; }\n\n.mdc-icon-toggle--disabled {\n  color: rgba(0, 0, 0, 0.38);\n  color: var(--mdc-theme-text-disabled-on-light, rgba(0, 0, 0, 0.38));\n  pointer-events: none; }\n  .mdc-icon-toggle--theme-dark.mdc-icon-toggle--disabled,\n  .mdc-theme--dark .mdc-icon-toggle--disabled {\n    color: rgba(255, 255, 255, 0.5);\n    color: var(--mdc-theme-text-disabled-on-dark, rgba(255, 255, 255, 0.5)); }\n\n/** postcss-bem-linter: end */\n.mdc-layout-grid {\n  display: flex;\n  flex-flow: row wrap;\n  align-items: stretch;\n  margin: 0 auto;\n  box-sizing: border-box;\n  padding: 8px;\n  padding: calc(var(--mdc-layout-grid-margin, 16px) - var(--mdc-layout-grid-gutter, 16px) / 2); }\n  @supports (display: grid) {\n    .mdc-layout-grid {\n      display: grid;\n      grid-gap: 16px;\n      grid-gap: var(--mdc-layout-grid-gutter, 16px);\n      padding: 16px;\n      padding: var(--mdc-layout-grid-margin, 16px); }\n      @media (min-width: 840px) {\n        .mdc-layout-grid {\n          grid-template-columns: repeat(12, minmax(0, 1fr)); } }\n      @media (min-width: 480px) and (max-width: 839px) {\n        .mdc-layout-grid {\n          grid-template-columns: repeat(8, minmax(0, 1fr)); } }\n      @media (max-width: 479px) {\n        .mdc-layout-grid {\n          grid-template-columns: repeat(4, minmax(0, 1fr)); } } }\n\n.mdc-layout-grid__cell {\n  margin: 8px;\n  margin: calc(var(--mdc-layout-grid-gutter, 16px) / 2);\n  box-sizing: border-box; }\n  @supports (display: grid) {\n    .mdc-layout-grid__cell {\n      margin: 0; } }\n  @media (min-width: 840px) {\n    .mdc-layout-grid__cell {\n      width: calc(33.33333% - 16px);\n      width: calc(33.33333% - var(--mdc-layout-grid-gutter, 16px)); }\n      @supports (display: grid) {\n        .mdc-layout-grid__cell {\n          width: auto;\n          grid-column-end: span 4; } } }\n  @media (min-width: 480px) and (max-width: 839px) {\n    .mdc-layout-grid__cell {\n      width: calc(50% - 16px);\n      width: calc(50% - var(--mdc-layout-grid-gutter, 16px)); }\n      @supports (display: grid) {\n        .mdc-layout-grid__cell {\n          width: auto;\n          grid-column-end: span 4; } } }\n  @media (max-width: 479px) {\n    .mdc-layout-grid__cell {\n      width: calc(100% - 16px);\n      width: calc(100% - var(--mdc-layout-grid-gutter, 16px)); }\n      @supports (display: grid) {\n        .mdc-layout-grid__cell {\n          width: auto;\n          grid-column-end: span 4; } } }\n  @media (min-width: 840px) {\n    .mdc-layout-grid__cell--span-1, .mdc-layout-grid__cell--span-1-desktop.mdc-layout-grid__cell--span-1-desktop {\n      width: calc(8.33333% - 16px);\n      width: calc(8.33333% - var(--mdc-layout-grid-gutter, 16px)); }\n      @supports (display: grid) {\n        .mdc-layout-grid__cell--span-1, .mdc-layout-grid__cell--span-1-desktop.mdc-layout-grid__cell--span-1-desktop {\n          width: auto;\n          grid-column-end: span 1; } }\n    .mdc-layout-grid__cell--span-2, .mdc-layout-grid__cell--span-2-desktop.mdc-layout-grid__cell--span-2-desktop {\n      width: calc(16.66667% - 16px);\n      width: calc(16.66667% - var(--mdc-layout-grid-gutter, 16px)); }\n      @supports (display: grid) {\n        .mdc-layout-grid__cell--span-2, .mdc-layout-grid__cell--span-2-desktop.mdc-layout-grid__cell--span-2-desktop {\n          width: auto;\n          grid-column-end: span 2; } }\n    .mdc-layout-grid__cell--span-3, .mdc-layout-grid__cell--span-3-desktop.mdc-layout-grid__cell--span-3-desktop {\n      width: calc(25% - 16px);\n      width: calc(25% - var(--mdc-layout-grid-gutter, 16px)); }\n      @supports (display: grid) {\n        .mdc-layout-grid__cell--span-3, .mdc-layout-grid__cell--span-3-desktop.mdc-layout-grid__cell--span-3-desktop {\n          width: auto;\n          grid-column-end: span 3; } }\n    .mdc-layout-grid__cell--span-4, .mdc-layout-grid__cell--span-4-desktop.mdc-layout-grid__cell--span-4-desktop {\n      width: calc(33.33333% - 16px);\n      width: calc(33.33333% - var(--mdc-layout-grid-gutter, 16px)); }\n      @supports (display: grid) {\n        .mdc-layout-grid__cell--span-4, .mdc-layout-grid__cell--span-4-desktop.mdc-layout-grid__cell--span-4-desktop {\n          width: auto;\n          grid-column-end: span 4; } }\n    .mdc-layout-grid__cell--span-5, .mdc-layout-grid__cell--span-5-desktop.mdc-layout-grid__cell--span-5-desktop {\n      width: calc(41.66667% - 16px);\n      width: calc(41.66667% - var(--mdc-layout-grid-gutter, 16px)); }\n      @supports (display: grid) {\n        .mdc-layout-grid__cell--span-5, .mdc-layout-grid__cell--span-5-desktop.mdc-layout-grid__cell--span-5-desktop {\n          width: auto;\n          grid-column-end: span 5; } }\n    .mdc-layout-grid__cell--span-6, .mdc-layout-grid__cell--span-6-desktop.mdc-layout-grid__cell--span-6-desktop {\n      width: calc(50% - 16px);\n      width: calc(50% - var(--mdc-layout-grid-gutter, 16px)); }\n      @supports (display: grid) {\n        .mdc-layout-grid__cell--span-6, .mdc-layout-grid__cell--span-6-desktop.mdc-layout-grid__cell--span-6-desktop {\n          width: auto;\n          grid-column-end: span 6; } }\n    .mdc-layout-grid__cell--span-7, .mdc-layout-grid__cell--span-7-desktop.mdc-layout-grid__cell--span-7-desktop {\n      width: calc(58.33333% - 16px);\n      width: calc(58.33333% - var(--mdc-layout-grid-gutter, 16px)); }\n      @supports (display: grid) {\n        .mdc-layout-grid__cell--span-7, .mdc-layout-grid__cell--span-7-desktop.mdc-layout-grid__cell--span-7-desktop {\n          width: auto;\n          grid-column-end: span 7; } }\n    .mdc-layout-grid__cell--span-8, .mdc-layout-grid__cell--span-8-desktop.mdc-layout-grid__cell--span-8-desktop {\n      width: calc(66.66667% - 16px);\n      width: calc(66.66667% - var(--mdc-layout-grid-gutter, 16px)); }\n      @supports (display: grid) {\n        .mdc-layout-grid__cell--span-8, .mdc-layout-grid__cell--span-8-desktop.mdc-layout-grid__cell--span-8-desktop {\n          width: auto;\n          grid-column-end: span 8; } }\n    .mdc-layout-grid__cell--span-9, .mdc-layout-grid__cell--span-9-desktop.mdc-layout-grid__cell--span-9-desktop {\n      width: calc(75% - 16px);\n      width: calc(75% - var(--mdc-layout-grid-gutter, 16px)); }\n      @supports (display: grid) {\n        .mdc-layout-grid__cell--span-9, .mdc-layout-grid__cell--span-9-desktop.mdc-layout-grid__cell--span-9-desktop {\n          width: auto;\n          grid-column-end: span 9; } }\n    .mdc-layout-grid__cell--span-10, .mdc-layout-grid__cell--span-10-desktop.mdc-layout-grid__cell--span-10-desktop {\n      width: calc(83.33333% - 16px);\n      width: calc(83.33333% - var(--mdc-layout-grid-gutter, 16px)); }\n      @supports (display: grid) {\n        .mdc-layout-grid__cell--span-10, .mdc-layout-grid__cell--span-10-desktop.mdc-layout-grid__cell--span-10-desktop {\n          width: auto;\n          grid-column-end: span 10; } }\n    .mdc-layout-grid__cell--span-11, .mdc-layout-grid__cell--span-11-desktop.mdc-layout-grid__cell--span-11-desktop {\n      width: calc(91.66667% - 16px);\n      width: calc(91.66667% - var(--mdc-layout-grid-gutter, 16px)); }\n      @supports (display: grid) {\n        .mdc-layout-grid__cell--span-11, .mdc-layout-grid__cell--span-11-desktop.mdc-layout-grid__cell--span-11-desktop {\n          width: auto;\n          grid-column-end: span 11; } }\n    .mdc-layout-grid__cell--span-12, .mdc-layout-grid__cell--span-12-desktop.mdc-layout-grid__cell--span-12-desktop {\n      width: calc(100% - 16px);\n      width: calc(100% - var(--mdc-layout-grid-gutter, 16px)); }\n      @supports (display: grid) {\n        .mdc-layout-grid__cell--span-12, .mdc-layout-grid__cell--span-12-desktop.mdc-layout-grid__cell--span-12-desktop {\n          width: auto;\n          grid-column-end: span 12; } } }\n  @media (min-width: 480px) and (max-width: 839px) {\n    .mdc-layout-grid__cell--span-1, .mdc-layout-grid__cell--span-1-tablet.mdc-layout-grid__cell--span-1-tablet {\n      width: calc(12.5% - 16px);\n      width: calc(12.5% - var(--mdc-layout-grid-gutter, 16px)); }\n      @supports (display: grid) {\n        .mdc-layout-grid__cell--span-1, .mdc-layout-grid__cell--span-1-tablet.mdc-layout-grid__cell--span-1-tablet {\n          width: auto;\n          grid-column-end: span 1; } }\n    .mdc-layout-grid__cell--span-2, .mdc-layout-grid__cell--span-2-tablet.mdc-layout-grid__cell--span-2-tablet {\n      width: calc(25% - 16px);\n      width: calc(25% - var(--mdc-layout-grid-gutter, 16px)); }\n      @supports (display: grid) {\n        .mdc-layout-grid__cell--span-2, .mdc-layout-grid__cell--span-2-tablet.mdc-layout-grid__cell--span-2-tablet {\n          width: auto;\n          grid-column-end: span 2; } }\n    .mdc-layout-grid__cell--span-3, .mdc-layout-grid__cell--span-3-tablet.mdc-layout-grid__cell--span-3-tablet {\n      width: calc(37.5% - 16px);\n      width: calc(37.5% - var(--mdc-layout-grid-gutter, 16px)); }\n      @supports (display: grid) {\n        .mdc-layout-grid__cell--span-3, .mdc-layout-grid__cell--span-3-tablet.mdc-layout-grid__cell--span-3-tablet {\n          width: auto;\n          grid-column-end: span 3; } }\n    .mdc-layout-grid__cell--span-4, .mdc-layout-grid__cell--span-4-tablet.mdc-layout-grid__cell--span-4-tablet {\n      width: calc(50% - 16px);\n      width: calc(50% - var(--mdc-layout-grid-gutter, 16px)); }\n      @supports (display: grid) {\n        .mdc-layout-grid__cell--span-4, .mdc-layout-grid__cell--span-4-tablet.mdc-layout-grid__cell--span-4-tablet {\n          width: auto;\n          grid-column-end: span 4; } }\n    .mdc-layout-grid__cell--span-5, .mdc-layout-grid__cell--span-5-tablet.mdc-layout-grid__cell--span-5-tablet {\n      width: calc(62.5% - 16px);\n      width: calc(62.5% - var(--mdc-layout-grid-gutter, 16px)); }\n      @supports (display: grid) {\n        .mdc-layout-grid__cell--span-5, .mdc-layout-grid__cell--span-5-tablet.mdc-layout-grid__cell--span-5-tablet {\n          width: auto;\n          grid-column-end: span 5; } }\n    .mdc-layout-grid__cell--span-6, .mdc-layout-grid__cell--span-6-tablet.mdc-layout-grid__cell--span-6-tablet {\n      width: calc(75% - 16px);\n      width: calc(75% - var(--mdc-layout-grid-gutter, 16px)); }\n      @supports (display: grid) {\n        .mdc-layout-grid__cell--span-6, .mdc-layout-grid__cell--span-6-tablet.mdc-layout-grid__cell--span-6-tablet {\n          width: auto;\n          grid-column-end: span 6; } }\n    .mdc-layout-grid__cell--span-7, .mdc-layout-grid__cell--span-7-tablet.mdc-layout-grid__cell--span-7-tablet {\n      width: calc(87.5% - 16px);\n      width: calc(87.5% - var(--mdc-layout-grid-gutter, 16px)); }\n      @supports (display: grid) {\n        .mdc-layout-grid__cell--span-7, .mdc-layout-grid__cell--span-7-tablet.mdc-layout-grid__cell--span-7-tablet {\n          width: auto;\n          grid-column-end: span 7; } }\n    .mdc-layout-grid__cell--span-8, .mdc-layout-grid__cell--span-8-tablet.mdc-layout-grid__cell--span-8-tablet {\n      width: calc(100% - 16px);\n      width: calc(100% - var(--mdc-layout-grid-gutter, 16px)); }\n      @supports (display: grid) {\n        .mdc-layout-grid__cell--span-8, .mdc-layout-grid__cell--span-8-tablet.mdc-layout-grid__cell--span-8-tablet {\n          width: auto;\n          grid-column-end: span 8; } }\n    .mdc-layout-grid__cell--span-9, .mdc-layout-grid__cell--span-9-tablet.mdc-layout-grid__cell--span-9-tablet {\n      width: calc(100% - 16px);\n      width: calc(100% - var(--mdc-layout-grid-gutter, 16px)); }\n      @supports (display: grid) {\n        .mdc-layout-grid__cell--span-9, .mdc-layout-grid__cell--span-9-tablet.mdc-layout-grid__cell--span-9-tablet {\n          width: auto;\n          grid-column-end: span 8; } }\n    .mdc-layout-grid__cell--span-10, .mdc-layout-grid__cell--span-10-tablet.mdc-layout-grid__cell--span-10-tablet {\n      width: calc(100% - 16px);\n      width: calc(100% - var(--mdc-layout-grid-gutter, 16px)); }\n      @supports (display: grid) {\n        .mdc-layout-grid__cell--span-10, .mdc-layout-grid__cell--span-10-tablet.mdc-layout-grid__cell--span-10-tablet {\n          width: auto;\n          grid-column-end: span 8; } }\n    .mdc-layout-grid__cell--span-11, .mdc-layout-grid__cell--span-11-tablet.mdc-layout-grid__cell--span-11-tablet {\n      width: calc(100% - 16px);\n      width: calc(100% - var(--mdc-layout-grid-gutter, 16px)); }\n      @supports (display: grid) {\n        .mdc-layout-grid__cell--span-11, .mdc-layout-grid__cell--span-11-tablet.mdc-layout-grid__cell--span-11-tablet {\n          width: auto;\n          grid-column-end: span 8; } }\n    .mdc-layout-grid__cell--span-12, .mdc-layout-grid__cell--span-12-tablet.mdc-layout-grid__cell--span-12-tablet {\n      width: calc(100% - 16px);\n      width: calc(100% - var(--mdc-layout-grid-gutter, 16px)); }\n      @supports (display: grid) {\n        .mdc-layout-grid__cell--span-12, .mdc-layout-grid__cell--span-12-tablet.mdc-layout-grid__cell--span-12-tablet {\n          width: auto;\n          grid-column-end: span 8; } } }\n  @media (max-width: 479px) {\n    .mdc-layout-grid__cell--span-1, .mdc-layout-grid__cell--span-1-phone.mdc-layout-grid__cell--span-1-phone {\n      width: calc(25% - 16px);\n      width: calc(25% - var(--mdc-layout-grid-gutter, 16px)); }\n      @supports (display: grid) {\n        .mdc-layout-grid__cell--span-1, .mdc-layout-grid__cell--span-1-phone.mdc-layout-grid__cell--span-1-phone {\n          width: auto;\n          grid-column-end: span 1; } }\n    .mdc-layout-grid__cell--span-2, .mdc-layout-grid__cell--span-2-phone.mdc-layout-grid__cell--span-2-phone {\n      width: calc(50% - 16px);\n      width: calc(50% - var(--mdc-layout-grid-gutter, 16px)); }\n      @supports (display: grid) {\n        .mdc-layout-grid__cell--span-2, .mdc-layout-grid__cell--span-2-phone.mdc-layout-grid__cell--span-2-phone {\n          width: auto;\n          grid-column-end: span 2; } }\n    .mdc-layout-grid__cell--span-3, .mdc-layout-grid__cell--span-3-phone.mdc-layout-grid__cell--span-3-phone {\n      width: calc(75% - 16px);\n      width: calc(75% - var(--mdc-layout-grid-gutter, 16px)); }\n      @supports (display: grid) {\n        .mdc-layout-grid__cell--span-3, .mdc-layout-grid__cell--span-3-phone.mdc-layout-grid__cell--span-3-phone {\n          width: auto;\n          grid-column-end: span 3; } }\n    .mdc-layout-grid__cell--span-4, .mdc-layout-grid__cell--span-4-phone.mdc-layout-grid__cell--span-4-phone {\n      width: calc(100% - 16px);\n      width: calc(100% - var(--mdc-layout-grid-gutter, 16px)); }\n      @supports (display: grid) {\n        .mdc-layout-grid__cell--span-4, .mdc-layout-grid__cell--span-4-phone.mdc-layout-grid__cell--span-4-phone {\n          width: auto;\n          grid-column-end: span 4; } }\n    .mdc-layout-grid__cell--span-5, .mdc-layout-grid__cell--span-5-phone.mdc-layout-grid__cell--span-5-phone {\n      width: calc(100% - 16px);\n      width: calc(100% - var(--mdc-layout-grid-gutter, 16px)); }\n      @supports (display: grid) {\n        .mdc-layout-grid__cell--span-5, .mdc-layout-grid__cell--span-5-phone.mdc-layout-grid__cell--span-5-phone {\n          width: auto;\n          grid-column-end: span 4; } }\n    .mdc-layout-grid__cell--span-6, .mdc-layout-grid__cell--span-6-phone.mdc-layout-grid__cell--span-6-phone {\n      width: calc(100% - 16px);\n      width: calc(100% - var(--mdc-layout-grid-gutter, 16px)); }\n      @supports (display: grid) {\n        .mdc-layout-grid__cell--span-6, .mdc-layout-grid__cell--span-6-phone.mdc-layout-grid__cell--span-6-phone {\n          width: auto;\n          grid-column-end: span 4; } }\n    .mdc-layout-grid__cell--span-7, .mdc-layout-grid__cell--span-7-phone.mdc-layout-grid__cell--span-7-phone {\n      width: calc(100% - 16px);\n      width: calc(100% - var(--mdc-layout-grid-gutter, 16px)); }\n      @supports (display: grid) {\n        .mdc-layout-grid__cell--span-7, .mdc-layout-grid__cell--span-7-phone.mdc-layout-grid__cell--span-7-phone {\n          width: auto;\n          grid-column-end: span 4; } }\n    .mdc-layout-grid__cell--span-8, .mdc-layout-grid__cell--span-8-phone.mdc-layout-grid__cell--span-8-phone {\n      width: calc(100% - 16px);\n      width: calc(100% - var(--mdc-layout-grid-gutter, 16px)); }\n      @supports (display: grid) {\n        .mdc-layout-grid__cell--span-8, .mdc-layout-grid__cell--span-8-phone.mdc-layout-grid__cell--span-8-phone {\n          width: auto;\n          grid-column-end: span 4; } }\n    .mdc-layout-grid__cell--span-9, .mdc-layout-grid__cell--span-9-phone.mdc-layout-grid__cell--span-9-phone {\n      width: calc(100% - 16px);\n      width: calc(100% - var(--mdc-layout-grid-gutter, 16px)); }\n      @supports (display: grid) {\n        .mdc-layout-grid__cell--span-9, .mdc-layout-grid__cell--span-9-phone.mdc-layout-grid__cell--span-9-phone {\n          width: auto;\n          grid-column-end: span 4; } }\n    .mdc-layout-grid__cell--span-10, .mdc-layout-grid__cell--span-10-phone.mdc-layout-grid__cell--span-10-phone {\n      width: calc(100% - 16px);\n      width: calc(100% - var(--mdc-layout-grid-gutter, 16px)); }\n      @supports (display: grid) {\n        .mdc-layout-grid__cell--span-10, .mdc-layout-grid__cell--span-10-phone.mdc-layout-grid__cell--span-10-phone {\n          width: auto;\n          grid-column-end: span 4; } }\n    .mdc-layout-grid__cell--span-11, .mdc-layout-grid__cell--span-11-phone.mdc-layout-grid__cell--span-11-phone {\n      width: calc(100% - 16px);\n      width: calc(100% - var(--mdc-layout-grid-gutter, 16px)); }\n      @supports (display: grid) {\n        .mdc-layout-grid__cell--span-11, .mdc-layout-grid__cell--span-11-phone.mdc-layout-grid__cell--span-11-phone {\n          width: auto;\n          grid-column-end: span 4; } }\n    .mdc-layout-grid__cell--span-12, .mdc-layout-grid__cell--span-12-phone.mdc-layout-grid__cell--span-12-phone {\n      width: calc(100% - 16px);\n      width: calc(100% - var(--mdc-layout-grid-gutter, 16px)); }\n      @supports (display: grid) {\n        .mdc-layout-grid__cell--span-12, .mdc-layout-grid__cell--span-12-phone.mdc-layout-grid__cell--span-12-phone {\n          width: auto;\n          grid-column-end: span 4; } } }\n  .mdc-layout-grid__cell--order-1 {\n    order: 1; }\n  .mdc-layout-grid__cell--order-2 {\n    order: 2; }\n  .mdc-layout-grid__cell--order-3 {\n    order: 3; }\n  .mdc-layout-grid__cell--order-4 {\n    order: 4; }\n  .mdc-layout-grid__cell--order-5 {\n    order: 5; }\n  .mdc-layout-grid__cell--order-6 {\n    order: 6; }\n  .mdc-layout-grid__cell--order-7 {\n    order: 7; }\n  .mdc-layout-grid__cell--order-8 {\n    order: 8; }\n  .mdc-layout-grid__cell--order-9 {\n    order: 9; }\n  .mdc-layout-grid__cell--order-10 {\n    order: 10; }\n  .mdc-layout-grid__cell--order-11 {\n    order: 11; }\n  .mdc-layout-grid__cell--order-12 {\n    order: 12; }\n  .mdc-layout-grid__cell--align-top {\n    align-self: flex-start; }\n    @supports (display: grid) {\n      .mdc-layout-grid__cell--align-top {\n        align-self: start; } }\n  .mdc-layout-grid__cell--align-middle {\n    align-self: center; }\n  .mdc-layout-grid__cell--align-bottom {\n    align-self: flex-end; }\n    @supports (display: grid) {\n      .mdc-layout-grid__cell--align-bottom {\n        align-self: end; } }\n\n/*\n  Precomputed linear color channel values, for use in contrast calculations.\n  See https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests\n\n  Algorithm, for c in 0 to 255:\n  f(c) {\n    c = c / 255;\n    return c < 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);\n  }\n\n  This lookup table is needed since there is no `pow` in SASS.\n*/\n/**\n * Calculate the luminance for a color.\n * See https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests\n */\n/**\n * Calculate the contrast ratio between two colors.\n * See https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests\n */\n/**\n * Determine whether to use dark or light text on top of given color.\n * Returns \"dark\" for dark text and \"light\" for light text.\n */\n/*\n  Main theme colors.\n  If you're a user customizing your color scheme in SASS, these are probably the only variables you need to change.\n*/\n/* Indigo 500 */\n/* Pink A200 */\n/* White */\n/* Which set of text colors to use for each main theme color (light or dark) */\n/* Text colors according to light vs dark and text type */\n/* Primary text colors for each of the theme colors */\n/** MDC Ripple keyframes are split into their own file so that _mixins.scss can rely on them. */\n@keyframes mdc-ripple-fg-radius-in {\n  from {\n    transform: translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1);\n    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1); }\n  to {\n    transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1)); } }\n\n@keyframes mdc-ripple-fg-opacity-in {\n  from {\n    opacity: 0;\n    animation-timing-function: linear; }\n  to {\n    opacity: 1; } }\n\n@keyframes mdc-ripple-fg-opacity-out {\n  from {\n    opacity: 1;\n    animation-timing-function: linear; }\n  to {\n    opacity: 0; } }\n\n/**\n * Creates a rule that will be applied when an MDC-Web component is within the context of an RTL layout.\n *\n * Usage Example:\n * ```scss\n * .mdc-foo {\n *   position: absolute;\n *   left: 0;\n *\n *   @include mdc-rtl {\n *     left: auto;\n *     right: 0;\n *   }\n *\n *   &__bar {\n *     margin-left: 4px;\n *     @include mdc-rtl(\".mdc-foo\") {\n *       margin-left: auto;\n *       margin-right: 4px;\n *     }\n *   }\n * }\n *\n * .mdc-foo--mod {\n *   padding-left: 4px;\n *\n *   @include mdc-rtl {\n *     padding-left: auto;\n *     padding-right: 4px;\n *   }\n * }\n * ```\n *\n * Note that this works by checking for [dir=\"rtl\"] on an ancestor element. While this will work\n * in most cases, it will in some cases lead to false negatives, e.g.\n *\n * ```html\n * <html dir=\"rtl\">\n *   <!-- ... -->\n *   <div dir=\"ltr\">\n *     <div class=\"mdc-foo\">Styled incorrectly as RTL!</div>\n *   </div>\n * </html>\n * ```\n *\n * In the future, selectors such as :dir (http://mdn.io/:dir) will help us mitigate this.\n */\n/**\n * Takes a base box-model property - e.g. margin / border / padding - along with a default\n * direction and value, and emits rules which apply the value to the\n * \"<base-property>-<default-direction>\" property by default, but flips the direction\n * when within an RTL context.\n *\n * For example:\n *\n * ```scss\n * .mdc-foo {\n *   @include mdc-rtl-reflexive-box(margin, left, 8px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-left: 8px;\n *\n *   @include mdc-rtl {\n *     margin-right: 8px;\n *     margin-left: 0;\n *   }\n * }\n * ```\n * whereas:\n *\n * ```scss\n * .mdc-foo {\n *   @include mdc-rtl-reflexive-box(margin, right, 8px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-right: 8px;\n *\n *   @include mdc-rtl {\n *     margin-right: 0;\n *     margin-left: 8px;\n *   }\n * }\n * ```\n *\n * You can also pass a 4th optional $root-selector argument which will be forwarded to `mdc-rtl`,\n * e.g. `@include mdc-rtl-reflexive-box-property(margin, left, 8px, \".mdc-component\")`.\n *\n * Note that this function will always zero out the original value in an RTL context. If you're\n * trying to flip the values, use mdc-rtl-reflexive-property().\n */\n/**\n * Takes a base property and emits rules that assign <base-property>-left to <left-value> and\n * <base-property>-right to <right-value> in a LTR context, and vice versa in a RTL context.\n * For example:\n *\n * ```scss\n * .mdc-foo {\n *   @include mdc-rtl-reflexive-property(margin, auto, 12px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-left: auto;\n *   margin-right: 12px;\n *\n *   @include mdc-rtl {\n *     margin-left: 12px;\n *     margin-right: auto;\n *   }\n * }\n * ```\n *\n * A 4th optional $root-selector argument can be given, which will be passed to `mdc-rtl`.\n */\n/**\n * Takes an argument specifying a horizontal position property (either \"left\" or \"right\") as well\n * as a value, and applies that value to the specified position in a LTR context, and flips it in a\n * RTL context. For example:\n *\n * ```scss\n * .mdc-foo {\n *   @include mdc-rtl-reflexive-position(left, 0);\n *   position: absolute;\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n *  .mdc-foo {\n *    position: absolute;\n *    left: 0;\n *    right: initial;\n *\n *    @include mdc-rtl {\n *      right: 0;\n *      left: initial;\n *    }\n *  }\n * ```\n * An optional third $root-selector argument may also be given, which is passed to `mdc-rtl`.\n */\n/*\n  Precomputed linear color channel values, for use in contrast calculations.\n  See https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests\n\n  Algorithm, for c in 0 to 255:\n  f(c) {\n    c = c / 255;\n    return c < 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);\n  }\n\n  This lookup table is needed since there is no `pow` in SASS.\n*/\n/**\n * Calculate the luminance for a color.\n * See https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests\n */\n/**\n * Calculate the contrast ratio between two colors.\n * See https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests\n */\n/**\n * Determine whether to use dark or light text on top of given color.\n * Returns \"dark\" for dark text and \"light\" for light text.\n */\n/*\n  Main theme colors.\n  If you're a user customizing your color scheme in SASS, these are probably the only variables you need to change.\n*/\n/* Indigo 500 */\n/* Pink A200 */\n/* White */\n/* Which set of text colors to use for each main theme color (light or dark) */\n/* Text colors according to light vs dark and text type */\n/* Primary text colors for each of the theme colors */\n/**\n * Applies the correct theme color style to the specified property.\n * $property is typically color or background-color, but can be any CSS property that accepts color values.\n * $style should be one of the map keys in $mdc-theme-property-values (_variables.scss).\n */\n/**\n * Creates a rule to be used in MDC-Web components for dark theming, and applies the provided contents.\n * Should provide the $root-selector option if applied to anything other than the root selector.\n * When used with a modifier class, provide a second argument of `true` for the $compound parameter\n * to specify that this should be attached as a compound class.\n *\n * Usage example:\n *\n * ```scss\n * .mdc-foo {\n *   color: black;\n *\n *   @include mdc-theme-dark {\n *     color: white;\n *   }\n *\n *   &__bar {\n *     background: black;\n *\n *     @include mdc-theme-dark(\".mdc-foo\") {\n *       background: white;\n *     }\n *   }\n * }\n *\n * .mdc-foo--disabled {\n *   opacity: .38;\n *\n *   @include mdc-theme-dark(\".mdc-foo\", true) {\n *     opacity: .5;\n *   }\n * }\n * ```\n */\n/* TODO(sgomes): Figure out what to do about desktop font sizes. */\n/* TODO(sgomes): Figure out what to do about i18n and i18n font sizes. */\n/* TODO(sgomes): Figure out what to do about desktop font sizes. */\n/* TODO(sgomes): Figure out what to do about i18n and i18n font sizes. */\n.mdc-list {\n  font-family: Roboto, sans-serif;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-size: 1rem;\n  font-weight: 400;\n  letter-spacing: 0.04em;\n  line-height: 1.75rem;\n  color: rgba(0, 0, 0, 0.87);\n  color: var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87));\n  margin: 0;\n  padding: 8px 16px 0;\n  line-height: 1.5rem;\n  list-style-type: none; }\n  .mdc-list--theme-dark,\n  .mdc-theme--dark .mdc-list {\n    color: white;\n    color: var(--mdc-theme-text-primary-on-dark, white); }\n\n.mdc-list--dense {\n  padding-top: 4px;\n  font-size: .812rem; }\n\n.mdc-list-item {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  height: 48px; }\n  .mdc-list-item__start-detail {\n    width: 24px;\n    height: 24px;\n    margin-left: 0;\n    margin-right: 32px; }\n    [dir=\"rtl\"] .mdc-list-item .mdc-list-item__start-detail,\n    .mdc-list-item[dir=\"rtl\"] .mdc-list-item__start-detail {\n      margin-left: 32px;\n      margin-right: 0; }\n  .mdc-list-item__end-detail {\n    width: 24px;\n    height: 24px;\n    margin-left: auto;\n    margin-right: 16px; }\n    [dir=\"rtl\"] .mdc-list-item .mdc-list-item__end-detail,\n    .mdc-list-item[dir=\"rtl\"] .mdc-list-item__end-detail {\n      margin-left: 16px;\n      margin-right: auto; }\n  .mdc-list-item__text {\n    display: inline-flex;\n    flex-direction: column; }\n    .mdc-list-item__text__secondary {\n      font-family: Roboto, sans-serif;\n      -moz-osx-font-smoothing: grayscale;\n      -webkit-font-smoothing: antialiased;\n      font-size: 0.875rem;\n      font-weight: 400;\n      letter-spacing: 0.04em;\n      line-height: 1.25rem;\n      color: rgba(0, 0, 0, 0.54);\n      color: var(--mdc-theme-text-secondary-on-background, rgba(0, 0, 0, 0.54)); }\n      .mdc-list-item__text__secondary--theme-dark,\n      .mdc-theme--dark .mdc-list-item__text__secondary {\n        color: rgba(255, 255, 255, 0.7);\n        color: var(--mdc-theme-text-secondary-on-dark, rgba(255, 255, 255, 0.7)); }\n      .mdc-list--dense .mdc-list-item__text__secondary {\n        font-size: inherit; }\n  .mdc-list--dense .mdc-list-item {\n    height: 40px; }\n    .mdc-list--dense .mdc-list-item__start-detail {\n      width: 20px;\n      height: 20px;\n      margin-left: 0;\n      margin-right: 36px; }\n      [dir=\"rtl\"] .mdc-list-item .mdc-list--dense .mdc-list-item__start-detail,\n      .mdc-list-item[dir=\"rtl\"] .mdc-list--dense .mdc-list-item__start-detail {\n        margin-left: 36px;\n        margin-right: 0; }\n    .mdc-list--dense .mdc-list-item__end-detail {\n      width: 20px;\n      height: 20px; }\n  .mdc-list--avatar-list .mdc-list-item {\n    height: 56px; }\n    .mdc-list--avatar-list .mdc-list-item__start-detail {\n      width: 40px;\n      height: 40px;\n      margin-left: 0;\n      margin-right: 16px;\n      border-radius: 50%; }\n      [dir=\"rtl\"] .mdc-list-item .mdc-list--avatar-list .mdc-list-item__start-detail,\n      .mdc-list-item[dir=\"rtl\"] .mdc-list--avatar-list .mdc-list-item__start-detail {\n        margin-left: 16px;\n        margin-right: 0; }\n  .mdc-list-item .mdc-list--avatar-list.mdc-list--dense .mdc-list__item {\n    height: 48px; }\n    .mdc-list-item .mdc-list--avatar-list.mdc-list--dense .mdc-list__item__start-detail {\n      width: 36px;\n      height: 36px;\n      margin-left: 0;\n      margin-right: 20px; }\n      [dir=\"rtl\"] .mdc-list-item .mdc-list-item .mdc-list--avatar-list.mdc-list--dense .mdc-list__item__start-detail,\n      .mdc-list-item[dir=\"rtl\"] .mdc-list-item .mdc-list--avatar-list.mdc-list--dense .mdc-list__item__start-detail {\n        margin-left: 20px;\n        margin-right: 0; }\n  .mdc-list--two-line .mdc-list-item {\n    height: 72px; }\n  .mdc-list--two-line.mdc-list--dense .mdc-list-item {\n    height: 60px; }\n\na.mdc-list-item {\n  color: inherit;\n  text-decoration: none; }\n\n.mdc-list-item.mdc-ripple-upgraded {\n  --mdc-ripple-surface-width: 0;\n  --mdc-ripple-surface-height: 0;\n  --mdc-ripple-fg-size: 0;\n  --mdc-ripple-left: 0;\n  --mdc-ripple-top: 0;\n  --mdc-ripple-fg-scale: 1;\n  --mdc-ripple-fg-translate-end: 0;\n  --mdc-ripple-fg-translate-start: 0;\n  will-change: transform, opacity;\n  -webkit-tap-highlight-color: transparent;\n  position: relative;\n  left: -16px;\n  width: 100%;\n  padding: 0 16px;\n  overflow: hidden; }\n  .mdc-list-item.mdc-ripple-upgraded:not(.mdc-ripple-upgraded):hover::before, .mdc-list-item.mdc-ripple-upgraded:not(.mdc-ripple-upgraded):focus::before, .mdc-list-item.mdc-ripple-upgraded:not(.mdc-ripple-upgraded):active::after {\n    transition-duration: 85ms;\n    opacity: .6; }\n  .mdc-list-item.mdc-ripple-upgraded::before {\n    background-color: rgba(0, 0, 0, 0.06);\n    position: absolute;\n    top: calc(50% - 100%);\n    left: calc(50% - 100%);\n    width: 200%;\n    height: 200%;\n    transition: opacity 250ms linear;\n    border-radius: 50%;\n    opacity: 0;\n    pointer-events: none;\n    content: \"\"; }\n  .mdc-list-item.mdc-ripple-upgraded.mdc-ripple-upgraded::before {\n    top: calc(50% - 100%);\n    left: calc(50% - 100%);\n    width: 200%;\n    height: 200%;\n    transform: scale(0);\n    transform: scale(var(--mdc-ripple-fg-scale, 0)); }\n  .mdc-list-item.mdc-ripple-upgraded.mdc-ripple-upgraded--background-focused::before {\n    opacity: .99999; }\n  .mdc-list-item.mdc-ripple-upgraded.mdc-ripple-upgraded--background-active-fill::before {\n    transition-duration: 120ms;\n    opacity: 1; }\n  .mdc-list-item.mdc-ripple-upgraded.mdc-ripple-upgraded--unbounded::before {\n    top: calc(50% - 50%);\n    top: var(--mdc-ripple-top, calc(50% - 50%));\n    left: calc(50% - 50%);\n    left: var(--mdc-ripple-left, calc(50% - 50%));\n    width: 100%;\n    width: var(--mdc-ripple-fg-size, 100%);\n    height: 100%;\n    height: var(--mdc-ripple-fg-size, 100%);\n    transform: scale(0);\n    transform: scale(var(--mdc-ripple-fg-scale, 0)); }\n  .mdc-list-item.mdc-ripple-upgraded::after {\n    background-color: rgba(0, 0, 0, 0.06);\n    position: absolute;\n    top: calc(50% - 100%);\n    left: calc(50% - 100%);\n    width: 200%;\n    height: 200%;\n    transition: opacity 250ms linear;\n    border-radius: 50%;\n    opacity: 0;\n    pointer-events: none;\n    content: \"\"; }\n  .mdc-list-item.mdc-ripple-upgraded.mdc-ripple-upgraded::after {\n    top: 0;\n    left: 0;\n    width: 100%;\n    width: var(--mdc-ripple-fg-size, 100%);\n    height: 100%;\n    height: var(--mdc-ripple-fg-size, 100%);\n    transform: scale(0);\n    transform-origin: center center;\n    opacity: 0; }\n  .mdc-list-item.mdc-ripple-upgraded:not(.mdc-ripple-upgraded--unbounded)::after {\n    transform-origin: center center; }\n  .mdc-list-item.mdc-ripple-upgraded.mdc-ripple-upgraded--unbounded::after {\n    top: 0;\n    top: var(--mdc-ripple-top, 0);\n    left: 0;\n    left: var(--mdc-ripple-left, 0);\n    width: 100%;\n    width: var(--mdc-ripple-fg-size, 100%);\n    height: 100%;\n    height: var(--mdc-ripple-fg-size, 100%);\n    transform: scale(0);\n    transform-origin: center center; }\n  .mdc-list-item.mdc-ripple-upgraded.mdc-ripple-upgraded--foreground-activation::after {\n    animation: 300ms mdc-ripple-fg-radius-in forwards, 83ms mdc-ripple-fg-opacity-in forwards; }\n  .mdc-list-item.mdc-ripple-upgraded.mdc-ripple-upgraded--foreground-deactivation::after {\n    transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n    animation: 250ms mdc-ripple-fg-opacity-out; }\n  .mdc-list-item.mdc-ripple-upgraded:focus {\n    outline: none; }\n  .mdc-list--theme-dark .mdc-list-item.mdc-ripple-upgraded::before,\n  .mdc-theme--dark .mdc-list-item.mdc-ripple-upgraded::before {\n    background-color: rgba(255, 255, 255, 0.12);\n    position: absolute;\n    top: calc(50% - 100%);\n    left: calc(50% - 100%);\n    width: 200%;\n    height: 200%;\n    transition: opacity 250ms linear;\n    border-radius: 50%;\n    opacity: 0;\n    pointer-events: none;\n    content: \"\"; }\n  .mdc-list--theme-dark .mdc-list-item.mdc-ripple-upgraded.mdc-ripple-upgraded::before,\n  .mdc-theme--dark .mdc-list-item.mdc-ripple-upgraded.mdc-ripple-upgraded::before {\n    top: calc(50% - 100%);\n    left: calc(50% - 100%);\n    width: 200%;\n    height: 200%;\n    transform: scale(0);\n    transform: scale(var(--mdc-ripple-fg-scale, 0)); }\n  .mdc-list--theme-dark .mdc-list-item.mdc-ripple-upgraded.mdc-ripple-upgraded--background-focused::before,\n  .mdc-theme--dark .mdc-list-item.mdc-ripple-upgraded.mdc-ripple-upgraded--background-focused::before {\n    opacity: .99999; }\n  .mdc-list--theme-dark .mdc-list-item.mdc-ripple-upgraded.mdc-ripple-upgraded--background-active-fill::before,\n  .mdc-theme--dark .mdc-list-item.mdc-ripple-upgraded.mdc-ripple-upgraded--background-active-fill::before {\n    transition-duration: 120ms;\n    opacity: 1; }\n  .mdc-list--theme-dark .mdc-list-item.mdc-ripple-upgraded.mdc-ripple-upgraded--unbounded::before,\n  .mdc-theme--dark .mdc-list-item.mdc-ripple-upgraded.mdc-ripple-upgraded--unbounded::before {\n    top: calc(50% - 50%);\n    top: var(--mdc-ripple-top, calc(50% - 50%));\n    left: calc(50% - 50%);\n    left: var(--mdc-ripple-left, calc(50% - 50%));\n    width: 100%;\n    width: var(--mdc-ripple-fg-size, 100%);\n    height: 100%;\n    height: var(--mdc-ripple-fg-size, 100%);\n    transform: scale(0);\n    transform: scale(var(--mdc-ripple-fg-scale, 0)); }\n  .mdc-list--theme-dark .mdc-list-item.mdc-ripple-upgraded::after,\n  .mdc-theme--dark .mdc-list-item.mdc-ripple-upgraded::after {\n    background-color: rgba(255, 255, 255, 0.12);\n    position: absolute;\n    top: calc(50% - 100%);\n    left: calc(50% - 100%);\n    width: 200%;\n    height: 200%;\n    transition: opacity 250ms linear;\n    border-radius: 50%;\n    opacity: 0;\n    pointer-events: none;\n    content: \"\"; }\n  .mdc-list--theme-dark .mdc-list-item.mdc-ripple-upgraded.mdc-ripple-upgraded::after,\n  .mdc-theme--dark .mdc-list-item.mdc-ripple-upgraded.mdc-ripple-upgraded::after {\n    top: 0;\n    left: 0;\n    width: 100%;\n    width: var(--mdc-ripple-fg-size, 100%);\n    height: 100%;\n    height: var(--mdc-ripple-fg-size, 100%);\n    transform: scale(0);\n    transform-origin: center center;\n    opacity: 0; }\n  .mdc-list--theme-dark .mdc-list-item.mdc-ripple-upgraded:not(.mdc-ripple-upgraded--unbounded)::after,\n  .mdc-theme--dark .mdc-list-item.mdc-ripple-upgraded:not(.mdc-ripple-upgraded--unbounded)::after {\n    transform-origin: center center; }\n  .mdc-list--theme-dark .mdc-list-item.mdc-ripple-upgraded.mdc-ripple-upgraded--unbounded::after,\n  .mdc-theme--dark .mdc-list-item.mdc-ripple-upgraded.mdc-ripple-upgraded--unbounded::after {\n    top: 0;\n    top: var(--mdc-ripple-top, 0);\n    left: 0;\n    left: var(--mdc-ripple-left, 0);\n    width: 100%;\n    width: var(--mdc-ripple-fg-size, 100%);\n    height: 100%;\n    height: var(--mdc-ripple-fg-size, 100%);\n    transform: scale(0);\n    transform-origin: center center; }\n  .mdc-list--theme-dark .mdc-list-item.mdc-ripple-upgraded.mdc-ripple-upgraded--foreground-activation::after,\n  .mdc-theme--dark .mdc-list-item.mdc-ripple-upgraded.mdc-ripple-upgraded--foreground-activation::after {\n    animation: 300ms mdc-ripple-fg-radius-in forwards, 83ms mdc-ripple-fg-opacity-in forwards; }\n  .mdc-list--theme-dark .mdc-list-item.mdc-ripple-upgraded.mdc-ripple-upgraded--foreground-deactivation::after,\n  .mdc-theme--dark .mdc-list-item.mdc-ripple-upgraded.mdc-ripple-upgraded--foreground-deactivation::after {\n    transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n    animation: 250ms mdc-ripple-fg-opacity-out; }\n\n.mdc-list-divider {\n  height: 0;\n  margin: 0;\n  border: none;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12); }\n  .mdc-list--theme-dark .mdc-list-divider,\n  .mdc-theme--dark .mdc-list-divider {\n    border-bottom-color: rgba(255, 255, 255, 0.2); }\n\n.mdc-list-divider--inset {\n  margin-left: 56px;\n  margin-right: 0;\n  width: calc(100% - 56px); }\n  [dir=\"rtl\"] .mdc-list-group .mdc-list-divider--inset,\n  .mdc-list-group[dir=\"rtl\"] .mdc-list-divider--inset {\n    margin-left: 0;\n    margin-right: 56px; }\n\n.mdc-list-group {\n  padding: 0 16px; }\n  .mdc-list-group__subheader {\n    font-family: Roboto, sans-serif;\n    -moz-osx-font-smoothing: grayscale;\n    -webkit-font-smoothing: antialiased;\n    font-size: 0.875rem;\n    font-weight: 500;\n    letter-spacing: 0.04em;\n    line-height: 1.5rem;\n    color: rgba(0, 0, 0, 0.87);\n    color: var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87));\n    margin: 0.75rem 0; }\n    .mdc-list-group__subheader--theme-dark,\n    .mdc-theme--dark .mdc-list-group__subheader {\n      color: white;\n      color: var(--mdc-theme-text-primary-on-dark, white); }\n  .mdc-list-group .mdc-list {\n    padding: 0; }\n\n/**\n * The css property used for elevation. In most cases this should not be changed. It is exposed\n * as a variable for abstraction / easy use when needing to reference the property directly, for\n * example in a `will-change` rule.\n */\n/**\n * The default duration value for elevation transitions.\n */\n/**\n * The default easing value for elevation transitions.\n */\n/**\n * Applies the correct css rules to an element to give it the elevation specified by $z-value.\n * The $z-value must be between 0 and 24.\n */\n/**\n * Returns a string that can be used as the value for a `transition` property for elevation.\n * Calling this function directly is useful in situations where a component needs to transition\n * more than one property.\n *\n * ```scss\n * .foo {\n *   transition: mdc-elevation-transition-rule(), opacity 100ms ease;\n *   will-change: $mdc-elevation-property, opacity;\n * }\n * ```\n */\n/**\n * Applies the correct css rules needed to have an element transition between elevations.\n * This mixin should be applied to elements whose elevation values will change depending on their\n * context (e.g. when active or disabled).\n */\n/*\n  Precomputed linear color channel values, for use in contrast calculations.\n  See https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests\n\n  Algorithm, for c in 0 to 255:\n  f(c) {\n    c = c / 255;\n    return c < 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);\n  }\n\n  This lookup table is needed since there is no `pow` in SASS.\n*/\n/**\n * Calculate the luminance for a color.\n * See https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests\n */\n/**\n * Calculate the contrast ratio between two colors.\n * See https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests\n */\n/**\n * Determine whether to use dark or light text on top of given color.\n * Returns \"dark\" for dark text and \"light\" for light text.\n */\n/*\n  Main theme colors.\n  If you're a user customizing your color scheme in SASS, these are probably the only variables you need to change.\n*/\n/* Indigo 500 */\n/* Pink A200 */\n/* White */\n/* Which set of text colors to use for each main theme color (light or dark) */\n/* Text colors according to light vs dark and text type */\n/* Primary text colors for each of the theme colors */\n/**\n * Applies the correct theme color style to the specified property.\n * $property is typically color or background-color, but can be any CSS property that accepts color values.\n * $style should be one of the map keys in $mdc-theme-property-values (_variables.scss).\n */\n/**\n * Creates a rule to be used in MDC-Web components for dark theming, and applies the provided contents.\n * Should provide the $root-selector option if applied to anything other than the root selector.\n * When used with a modifier class, provide a second argument of `true` for the $compound parameter\n * to specify that this should be attached as a compound class.\n *\n * Usage example:\n *\n * ```scss\n * .mdc-foo {\n *   color: black;\n *\n *   @include mdc-theme-dark {\n *     color: white;\n *   }\n *\n *   &__bar {\n *     background: black;\n *\n *     @include mdc-theme-dark(\".mdc-foo\") {\n *       background: white;\n *     }\n *   }\n * }\n *\n * .mdc-foo--disabled {\n *   opacity: .38;\n *\n *   @include mdc-theme-dark(\".mdc-foo\", true) {\n *     opacity: .5;\n *   }\n * }\n * ```\n */\n/* TODO(sgomes): Figure out what to do about desktop font sizes. */\n/* TODO(sgomes): Figure out what to do about i18n and i18n font sizes. */\n/* postcss-bem-linter: define simple-menu */\n.mdc-simple-menu {\n  display: none;\n  position: absolute;\n  max-width: calc(100vw - 32px);\n  max-height: calc(100vh - 32px);\n  margin: 0;\n  padding: 0;\n  transform: scale(0);\n  transform-origin: top left;\n  border-radius: 2px;\n  background-color: white;\n  white-space: nowrap;\n  opacity: 0;\n  overflow: hidden;\n  box-sizing: border-box;\n  will-change: transform, opacity;\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n  /* stylelint-disable plugin/selector-bem-pattern */\n  /* stylelint-enable plugin/selector-bem-pattern */\n  /* stylelint-disable plugin/selector-bem-pattern */\n  /* stylelint-disable selector-no-qualifying-type */\n  /* stylelint-enable selector-no-qualifying-type */\n  /* TODO(sgomes): Revisit when we have interactive lists. */\n  /* stylelint-enable plugin/selector-bem-pattern */ }\n  .mdc-simple-menu--theme-dark,\n  .mdc-theme--dark .mdc-simple-menu {\n    background-color: #424242; }\n  .mdc-simple-menu:focus {\n    outline: none; }\n  .mdc-simple-menu--open {\n    display: inline-block;\n    transform: scale(1);\n    opacity: 1; }\n  .mdc-simple-menu--animating {\n    display: inline-block;\n    transition: opacity 0.2s cubic-bezier(0, 0, 0.2, 1); }\n  .mdc-simple-menu__items {\n    display: inline-block;\n    overflow-x: hidden;\n    overflow-y: auto;\n    box-sizing: border-box;\n    will-change: transform;\n    /* stylelint-disable plugin/selector-bem-pattern, selector-no-universal */\n    /* stylelint-enable plugin/selector-bem-pattern, selector-no-universal */ }\n    .mdc-simple-menu__items > * {\n      opacity: 0; }\n    .mdc-simple-menu__items > .mdc-list-item {\n      cursor: pointer; }\n    .mdc-simple-menu--animating .mdc-simple-menu__items {\n      overflow-y: hidden; }\n      .mdc-simple-menu--animating .mdc-simple-menu__items > * {\n        transition-duration: 0.3s;\n        transition-property: opacity;\n        transition-timing-function: cubic-bezier(0, 0, 0.2, 1); }\n    .mdc-simple-menu--open .mdc-simple-menu__items > * {\n      opacity: 1;\n      will-change: opacity; }\n  [dir=\"rtl\"] .mdc-simple-menu {\n    transform-origin: top right; }\n  .mdc-simple-menu--open-from-top-left {\n    transform-origin: top left !important; }\n  .mdc-simple-menu--open-from-top-right {\n    transform-origin: top right !important; }\n  .mdc-simple-menu--open-from-bottom-left {\n    transform-origin: bottom left !important; }\n  .mdc-simple-menu--open-from-bottom-right {\n    transform-origin: bottom right !important; }\n  .mdc-simple-menu .mdc-list-group,\n  .mdc-simple-menu .mdc-list {\n    padding: 0; }\n  .mdc-simple-menu .mdc-list-item {\n    position: relative;\n    padding: 0 16px;\n    outline: none;\n    color: inherit;\n    text-decoration: none;\n    font-family: Roboto, sans-serif;\n    -moz-osx-font-smoothing: grayscale;\n    -webkit-font-smoothing: antialiased;\n    font-size: 0.875rem;\n    font-weight: 500;\n    letter-spacing: 0.04em;\n    line-height: 1.5rem; }\n    .mdc-simple-menu--theme-dark.mdc-simple-menu .mdc-list-item,\n    .mdc-theme--dark .mdc-simple-menu .mdc-list-item {\n      color: white; }\n  .mdc-simple-menu--theme-dark.mdc-simple-menu .mdc-list-divider,\n  .mdc-theme--dark .mdc-simple-menu .mdc-list-divider {\n    border-color: rgba(255, 255, 255, 0.12); }\n  .mdc-simple-menu .mdc-list-item__start-detail {\n    color: rgba(0, 0, 0, 0.54); }\n    .mdc-simple-menu--theme-dark.mdc-simple-menu .mdc-list-item__start-detail,\n    .mdc-theme--dark .mdc-simple-menu .mdc-list-item__start-detail {\n      color: rgba(255, 255, 255, 0.54); }\n  .mdc-simple-menu--selected.mdc-list-item,\n  .mdc-simple-menu--selected.mdc-list-item .mdc-list-item__start-detail {\n    color: #3f51b5;\n    color: var(--mdc-theme-primary, #3f51b5); }\n  .mdc-simple-menu .mdc-list-item::before {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    transition: opacity 120ms cubic-bezier(0, 0, 0.2, 1);\n    border-radius: inherit;\n    background: currentColor;\n    content: \"\";\n    opacity: 0; }\n  .mdc-simple-menu .mdc-list-item:focus::before {\n    opacity: .12; }\n  .mdc-simple-menu .mdc-list-item:active::before {\n    /*\n      Slightly darker value for visual distinction.\n      This allows a full base that has distinct modes.\n      Progressive enhancement with ripples will provide complete button spec alignment.\n    */\n    opacity: .18; }\n\n/* postcss-bem-linter: end */\n.mdc-menu-anchor {\n  position: relative;\n  overflow: visible; }\n\n/*\n  Precomputed linear color channel values, for use in contrast calculations.\n  See https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests\n\n  Algorithm, for c in 0 to 255:\n  f(c) {\n    c = c / 255;\n    return c < 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);\n  }\n\n  This lookup table is needed since there is no `pow` in SASS.\n*/\n/**\n * Calculate the luminance for a color.\n * See https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests\n */\n/**\n * Calculate the contrast ratio between two colors.\n * See https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests\n */\n/**\n * Determine whether to use dark or light text on top of given color.\n * Returns \"dark\" for dark text and \"light\" for light text.\n */\n/*\n  Main theme colors.\n  If you're a user customizing your color scheme in SASS, these are probably the only variables you need to change.\n*/\n/* Indigo 500 */\n/* Pink A200 */\n/* White */\n/* Which set of text colors to use for each main theme color (light or dark) */\n/* Text colors according to light vs dark and text type */\n/* Primary text colors for each of the theme colors */\n/** MDC Ripple keyframes are split into their own file so that _mixins.scss can rely on them. */\n@keyframes mdc-ripple-fg-radius-in {\n  from {\n    transform: translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1);\n    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1); }\n  to {\n    transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1)); } }\n\n@keyframes mdc-ripple-fg-opacity-in {\n  from {\n    opacity: 0;\n    animation-timing-function: linear; }\n  to {\n    opacity: 1; } }\n\n@keyframes mdc-ripple-fg-opacity-out {\n  from {\n    opacity: 1;\n    animation-timing-function: linear; }\n  to {\n    opacity: 0; } }\n\n/*\n  Precomputed linear color channel values, for use in contrast calculations.\n  See https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests\n\n  Algorithm, for c in 0 to 255:\n  f(c) {\n    c = c / 255;\n    return c < 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);\n  }\n\n  This lookup table is needed since there is no `pow` in SASS.\n*/\n/**\n * Calculate the luminance for a color.\n * See https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests\n */\n/**\n * Calculate the contrast ratio between two colors.\n * See https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests\n */\n/**\n * Determine whether to use dark or light text on top of given color.\n * Returns \"dark\" for dark text and \"light\" for light text.\n */\n/*\n  Main theme colors.\n  If you're a user customizing your color scheme in SASS, these are probably the only variables you need to change.\n*/\n/* Indigo 500 */\n/* Pink A200 */\n/* White */\n/* Which set of text colors to use for each main theme color (light or dark) */\n/* Text colors according to light vs dark and text type */\n/* Primary text colors for each of the theme colors */\n/**\n * Applies the correct theme color style to the specified property.\n * $property is typically color or background-color, but can be any CSS property that accepts color values.\n * $style should be one of the map keys in $mdc-theme-property-values (_variables.scss).\n */\n/**\n * Creates a rule to be used in MDC-Web components for dark theming, and applies the provided contents.\n * Should provide the $root-selector option if applied to anything other than the root selector.\n * When used with a modifier class, provide a second argument of `true` for the $compound parameter\n * to specify that this should be attached as a compound class.\n *\n * Usage example:\n *\n * ```scss\n * .mdc-foo {\n *   color: black;\n *\n *   @include mdc-theme-dark {\n *     color: white;\n *   }\n *\n *   &__bar {\n *     background: black;\n *\n *     @include mdc-theme-dark(\".mdc-foo\") {\n *       background: white;\n *     }\n *   }\n * }\n *\n * .mdc-foo--disabled {\n *   opacity: .38;\n *\n *   @include mdc-theme-dark(\".mdc-foo\", true) {\n *     opacity: .5;\n *   }\n * }\n * ```\n */\n.mdc-radio {\n  --mdc-ripple-surface-width: 0;\n  --mdc-ripple-surface-height: 0;\n  --mdc-ripple-fg-size: 0;\n  --mdc-ripple-left: 0;\n  --mdc-ripple-top: 0;\n  --mdc-ripple-fg-scale: 1;\n  --mdc-ripple-fg-translate-end: 0;\n  --mdc-ripple-fg-translate-start: 0;\n  will-change: transform, opacity;\n  -webkit-tap-highlight-color: transparent;\n  display: inline-block;\n  position: relative;\n  box-sizing: border-box;\n  width: 40px;\n  height: 40px;\n  flex: 0 0 40px;\n  padding: 10px;\n  cursor: pointer;\n  will-change: opacity, transform, border-color, background-color, color; }\n  .mdc-radio:not(.mdc-ripple-upgraded):hover::before, .mdc-radio:not(.mdc-ripple-upgraded):focus::before, .mdc-radio:not(.mdc-ripple-upgraded):active::after {\n    transition-duration: 85ms;\n    opacity: .6; }\n  .mdc-radio::before {\n    background-color: rgba(63, 81, 181, 0.14);\n    position: absolute;\n    top: calc(50% - 100%);\n    left: calc(50% - 100%);\n    width: 200%;\n    height: 200%;\n    transition: opacity 250ms linear;\n    border-radius: 50%;\n    opacity: 0;\n    pointer-events: none;\n    content: \"\"; }\n    @supports (background-color: color(green a(10%))) {\n      .mdc-radio::before {\n        background-color: color(var(--mdc-theme-primary, #3f51b5) a(14%)); } }\n  .mdc-radio.mdc-ripple-upgraded::before {\n    top: calc(50% - 100%);\n    left: calc(50% - 100%);\n    width: 200%;\n    height: 200%;\n    transform: scale(0);\n    transform: scale(var(--mdc-ripple-fg-scale, 0)); }\n  .mdc-radio.mdc-ripple-upgraded--background-focused::before {\n    opacity: .99999; }\n  .mdc-radio.mdc-ripple-upgraded--background-active-fill::before {\n    transition-duration: 120ms;\n    opacity: 1; }\n  .mdc-radio.mdc-ripple-upgraded--unbounded::before {\n    top: calc(50% - 50%);\n    top: var(--mdc-ripple-top, calc(50% - 50%));\n    left: calc(50% - 50%);\n    left: var(--mdc-ripple-left, calc(50% - 50%));\n    width: 100%;\n    width: var(--mdc-ripple-fg-size, 100%);\n    height: 100%;\n    height: var(--mdc-ripple-fg-size, 100%);\n    transform: scale(0);\n    transform: scale(var(--mdc-ripple-fg-scale, 0)); }\n  .mdc-radio::after {\n    background-color: rgba(63, 81, 181, 0.14);\n    position: absolute;\n    top: calc(50% - 100%);\n    left: calc(50% - 100%);\n    width: 200%;\n    height: 200%;\n    transition: opacity 250ms linear;\n    border-radius: 50%;\n    opacity: 0;\n    pointer-events: none;\n    content: \"\"; }\n    @supports (background-color: color(green a(10%))) {\n      .mdc-radio::after {\n        background-color: color(var(--mdc-theme-primary, #3f51b5) a(14%)); } }\n  .mdc-radio.mdc-ripple-upgraded::after {\n    top: 0;\n    left: 0;\n    width: 100%;\n    width: var(--mdc-ripple-fg-size, 100%);\n    height: 100%;\n    height: var(--mdc-ripple-fg-size, 100%);\n    transform: scale(0);\n    transform-origin: center center;\n    opacity: 0; }\n  .mdc-radio:not(.mdc-ripple-upgraded--unbounded)::after {\n    transform-origin: center center; }\n  .mdc-radio.mdc-ripple-upgraded--unbounded::after {\n    top: 0;\n    top: var(--mdc-ripple-top, 0);\n    left: 0;\n    left: var(--mdc-ripple-left, 0);\n    width: 100%;\n    width: var(--mdc-ripple-fg-size, 100%);\n    height: 100%;\n    height: var(--mdc-ripple-fg-size, 100%);\n    transform: scale(0);\n    transform-origin: center center; }\n  .mdc-radio.mdc-ripple-upgraded--foreground-activation::after {\n    animation: 300ms mdc-ripple-fg-radius-in forwards, 83ms mdc-ripple-fg-opacity-in forwards; }\n  .mdc-radio.mdc-ripple-upgraded--foreground-deactivation::after {\n    transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n    animation: 250ms mdc-ripple-fg-opacity-out; }\n  .mdc-radio::before, .mdc-radio::after {\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%; }\n  .mdc-radio.mdc-ripple-upgraded .mdc-radio__background::before {\n    content: none; }\n  .mdc-radio__background {\n    display: inline-block;\n    position: absolute;\n    width: 50%;\n    height: 50%;\n    box-sizing: border-box; }\n    .mdc-radio__background::before {\n      background-color: #3f51b5;\n      background-color: var(--mdc-theme-primary, #3f51b5);\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      transform: scale(0, 0);\n      transition: opacity 120ms 0ms cubic-bezier(0.4, 0, 1, 1), transform 120ms 0ms cubic-bezier(0.4, 0, 1, 1);\n      border-radius: 50%;\n      content: \"\";\n      opacity: 0;\n      pointer-events: none; }\n  .mdc-radio__outer-circle {\n    border-color: rgba(0, 0, 0, 0.54);\n    border-color: var(--mdc-theme-text-secondary-on-light, rgba(0, 0, 0, 0.54));\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    transition: border-color 120ms 0ms cubic-bezier(0.4, 0, 1, 1);\n    border-width: 2px;\n    border-style: solid;\n    border-radius: 50%;\n    box-sizing: border-box; }\n    .mdc-radio--theme-dark .mdc-radio__outer-circle,\n    .mdc-theme--dark .mdc-radio__outer-circle {\n      border-color: rgba(255, 255, 255, 0.7);\n      border-color: var(--mdc-theme-text-secondary-on-dark, rgba(255, 255, 255, 0.7)); }\n  .mdc-radio__inner-circle {\n    background-color: rgba(0, 0, 0, 0.54);\n    background-color: var(--mdc-theme-text-secondary-on-light, rgba(0, 0, 0, 0.54));\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    transform: scale(0, 0);\n    transition: transform 120ms 0ms cubic-bezier(0.4, 0, 1, 1), background-color 120ms 0ms cubic-bezier(0.4, 0, 1, 1);\n    border-radius: 50%;\n    box-sizing: border-box; }\n    .mdc-radio--theme-dark .mdc-radio__inner-circle,\n    .mdc-theme--dark .mdc-radio__inner-circle {\n      background-color: rgba(255, 255, 255, 0.7);\n      background-color: var(--mdc-theme-text-secondary-on-dark, rgba(255, 255, 255, 0.7)); }\n  .mdc-radio__native-control {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    margin: 0;\n    padding: 0;\n    cursor: inherit;\n    opacity: 0;\n    z-index: 1; }\n\n.mdc-radio__native-control:checked + .mdc-radio__background,\n.mdc-radio__native-control:disabled + .mdc-radio__background {\n  transition: opacity 120ms 0ms cubic-bezier(0, 0, 0.2, 1), transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1); }\n  .mdc-radio__native-control:checked + .mdc-radio__background .mdc-radio__outer-circle,\n  .mdc-radio__native-control:disabled + .mdc-radio__background .mdc-radio__outer-circle {\n    transition: border-color 120ms 0ms cubic-bezier(0, 0, 0.2, 1); }\n  .mdc-radio__native-control:checked + .mdc-radio__background .mdc-radio__inner-circle,\n  .mdc-radio__native-control:disabled + .mdc-radio__background .mdc-radio__inner-circle {\n    transition: transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1), background-color 120ms 0ms cubic-bezier(0, 0, 0.2, 1); }\n\n.mdc-radio--disabled {\n  cursor: default;\n  pointer-events: none; }\n\n.mdc-radio__native-control:checked + .mdc-radio__background .mdc-radio__outer-circle {\n  border-color: #3f51b5;\n  border-color: var(--mdc-theme-primary, #3f51b5); }\n\n.mdc-radio__native-control:checked + .mdc-radio__background .mdc-radio__inner-circle {\n  background-color: #3f51b5;\n  background-color: var(--mdc-theme-primary, #3f51b5);\n  transform: scale(0.5);\n  transition: transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1), background-color 120ms 0ms cubic-bezier(0, 0, 0.2, 1); }\n\n.mdc-radio__native-control:disabled + .mdc-radio__background,\nfieldset:disabled .mdc-radio__native-control + .mdc-radio__background,\n[aria-disabled=\"true\"] .mdc-radio__native-control + .mdc-radio__background {\n  cursor: default; }\n  .mdc-radio__native-control:disabled + .mdc-radio__background .mdc-radio__outer-circle,\n  fieldset:disabled .mdc-radio__native-control + .mdc-radio__background .mdc-radio__outer-circle,\n  [aria-disabled=\"true\"] .mdc-radio__native-control + .mdc-radio__background .mdc-radio__outer-circle {\n    border-color: rgba(0, 0, 0, 0.26); }\n    .mdc-radio--theme-dark .mdc-radio__native-control:disabled + .mdc-radio__background .mdc-radio__outer-circle,\n    .mdc-theme--dark .mdc-radio__native-control:disabled + .mdc-radio__background .mdc-radio__outer-circle, .mdc-radio--theme-dark\n    fieldset:disabled .mdc-radio__native-control + .mdc-radio__background .mdc-radio__outer-circle,\n    .mdc-theme--dark\n    fieldset:disabled .mdc-radio__native-control + .mdc-radio__background .mdc-radio__outer-circle, .mdc-radio--theme-dark\n    [aria-disabled=\"true\"] .mdc-radio__native-control + .mdc-radio__background .mdc-radio__outer-circle,\n    .mdc-theme--dark\n    [aria-disabled=\"true\"] .mdc-radio__native-control + .mdc-radio__background .mdc-radio__outer-circle {\n      border-color: rgba(255, 255, 255, 0.3); }\n  .mdc-radio__native-control:disabled + .mdc-radio__background .mdc-radio__inner-circle,\n  fieldset:disabled .mdc-radio__native-control + .mdc-radio__background .mdc-radio__inner-circle,\n  [aria-disabled=\"true\"] .mdc-radio__native-control + .mdc-radio__background .mdc-radio__inner-circle {\n    background-color: rgba(0, 0, 0, 0.26); }\n    .mdc-radio--theme-dark .mdc-radio__native-control:disabled + .mdc-radio__background .mdc-radio__inner-circle,\n    .mdc-theme--dark .mdc-radio__native-control:disabled + .mdc-radio__background .mdc-radio__inner-circle, .mdc-radio--theme-dark\n    fieldset:disabled .mdc-radio__native-control + .mdc-radio__background .mdc-radio__inner-circle,\n    .mdc-theme--dark\n    fieldset:disabled .mdc-radio__native-control + .mdc-radio__background .mdc-radio__inner-circle, .mdc-radio--theme-dark\n    [aria-disabled=\"true\"] .mdc-radio__native-control + .mdc-radio__background .mdc-radio__inner-circle,\n    .mdc-theme--dark\n    [aria-disabled=\"true\"] .mdc-radio__native-control + .mdc-radio__background .mdc-radio__inner-circle {\n      background-color: rgba(255, 255, 255, 0.3); }\n\n.mdc-radio__native-control:focus + .mdc-radio__background::before {\n  transform: scale(2, 2);\n  transition: opacity 120ms 0ms cubic-bezier(0, 0, 0.2, 1), transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1);\n  opacity: .26; }\n\n/*\n  Precomputed linear color channel values, for use in contrast calculations.\n  See https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests\n\n  Algorithm, for c in 0 to 255:\n  f(c) {\n    c = c / 255;\n    return c < 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);\n  }\n\n  This lookup table is needed since there is no `pow` in SASS.\n*/\n/**\n * Calculate the luminance for a color.\n * See https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests\n */\n/**\n * Calculate the contrast ratio between two colors.\n * See https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests\n */\n/**\n * Determine whether to use dark or light text on top of given color.\n * Returns \"dark\" for dark text and \"light\" for light text.\n */\n/*\n  Main theme colors.\n  If you're a user customizing your color scheme in SASS, these are probably the only variables you need to change.\n*/\n/* Indigo 500 */\n/* Pink A200 */\n/* White */\n/* Which set of text colors to use for each main theme color (light or dark) */\n/* Text colors according to light vs dark and text type */\n/* Primary text colors for each of the theme colors */\n/**\n * Applies the correct theme color style to the specified property.\n * $property is typically color or background-color, but can be any CSS property that accepts color values.\n * $style should be one of the map keys in $mdc-theme-property-values (_variables.scss).\n */\n/**\n * Creates a rule to be used in MDC-Web components for dark theming, and applies the provided contents.\n * Should provide the $root-selector option if applied to anything other than the root selector.\n * When used with a modifier class, provide a second argument of `true` for the $compound parameter\n * to specify that this should be attached as a compound class.\n *\n * Usage example:\n *\n * ```scss\n * .mdc-foo {\n *   color: black;\n *\n *   @include mdc-theme-dark {\n *     color: white;\n *   }\n *\n *   &__bar {\n *     background: black;\n *\n *     @include mdc-theme-dark(\".mdc-foo\") {\n *       background: white;\n *     }\n *   }\n * }\n *\n * .mdc-foo--disabled {\n *   opacity: .38;\n *\n *   @include mdc-theme-dark(\".mdc-foo\", true) {\n *     opacity: .5;\n *   }\n * }\n * ```\n */\n/*\n  Precomputed linear color channel values, for use in contrast calculations.\n  See https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests\n\n  Algorithm, for c in 0 to 255:\n  f(c) {\n    c = c / 255;\n    return c < 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);\n  }\n\n  This lookup table is needed since there is no `pow` in SASS.\n*/\n/**\n * Calculate the luminance for a color.\n * See https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests\n */\n/**\n * Calculate the contrast ratio between two colors.\n * See https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests\n */\n/**\n * Determine whether to use dark or light text on top of given color.\n * Returns \"dark\" for dark text and \"light\" for light text.\n */\n/*\n  Main theme colors.\n  If you're a user customizing your color scheme in SASS, these are probably the only variables you need to change.\n*/\n/* Indigo 500 */\n/* Pink A200 */\n/* White */\n/* Which set of text colors to use for each main theme color (light or dark) */\n/* Text colors according to light vs dark and text type */\n/* Primary text colors for each of the theme colors */\n/** MDC Ripple keyframes are split into their own file so that _mixins.scss can rely on them. */\n@keyframes mdc-ripple-fg-radius-in {\n  from {\n    transform: translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1);\n    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1); }\n  to {\n    transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1)); } }\n\n@keyframes mdc-ripple-fg-opacity-in {\n  from {\n    opacity: 0;\n    animation-timing-function: linear; }\n  to {\n    opacity: 1; } }\n\n@keyframes mdc-ripple-fg-opacity-out {\n  from {\n    opacity: 1;\n    animation-timing-function: linear; }\n  to {\n    opacity: 0; } }\n\n.mdc-ripple-surface {\n  --mdc-ripple-surface-width: 0;\n  --mdc-ripple-surface-height: 0;\n  --mdc-ripple-fg-size: 0;\n  --mdc-ripple-left: 0;\n  --mdc-ripple-top: 0;\n  --mdc-ripple-fg-scale: 1;\n  --mdc-ripple-fg-translate-end: 0;\n  --mdc-ripple-fg-translate-start: 0;\n  will-change: transform, opacity;\n  -webkit-tap-highlight-color: transparent;\n  position: relative;\n  outline: none;\n  overflow: hidden; }\n  .mdc-ripple-surface:not(.mdc-ripple-upgraded):hover::before, .mdc-ripple-surface:not(.mdc-ripple-upgraded):focus::before, .mdc-ripple-surface:not(.mdc-ripple-upgraded):active::after {\n    transition-duration: 85ms;\n    opacity: .6; }\n  .mdc-ripple-surface::before {\n    background-color: rgba(0, 0, 0, 0.06);\n    position: absolute;\n    top: calc(50% - 100%);\n    left: calc(50% - 100%);\n    width: 200%;\n    height: 200%;\n    transition: opacity 250ms linear;\n    border-radius: 50%;\n    opacity: 0;\n    pointer-events: none;\n    content: \"\"; }\n  .mdc-ripple-surface.mdc-ripple-upgraded::before {\n    top: calc(50% - 100%);\n    left: calc(50% - 100%);\n    width: 200%;\n    height: 200%;\n    transform: scale(0);\n    transform: scale(var(--mdc-ripple-fg-scale, 0)); }\n  .mdc-ripple-surface.mdc-ripple-upgraded--background-focused::before {\n    opacity: .99999; }\n  .mdc-ripple-surface.mdc-ripple-upgraded--background-active-fill::before {\n    transition-duration: 120ms;\n    opacity: 1; }\n  .mdc-ripple-surface.mdc-ripple-upgraded--unbounded::before {\n    top: calc(50% - 50%);\n    top: var(--mdc-ripple-top, calc(50% - 50%));\n    left: calc(50% - 50%);\n    left: var(--mdc-ripple-left, calc(50% - 50%));\n    width: 100%;\n    width: var(--mdc-ripple-fg-size, 100%);\n    height: 100%;\n    height: var(--mdc-ripple-fg-size, 100%);\n    transform: scale(0);\n    transform: scale(var(--mdc-ripple-fg-scale, 0)); }\n  .mdc-ripple-surface::after {\n    background-color: rgba(0, 0, 0, 0.06);\n    position: absolute;\n    top: calc(50% - 100%);\n    left: calc(50% - 100%);\n    width: 200%;\n    height: 200%;\n    transition: opacity 250ms linear;\n    border-radius: 50%;\n    opacity: 0;\n    pointer-events: none;\n    content: \"\"; }\n  .mdc-ripple-surface.mdc-ripple-upgraded::after {\n    top: 0;\n    left: 0;\n    width: 100%;\n    width: var(--mdc-ripple-fg-size, 100%);\n    height: 100%;\n    height: var(--mdc-ripple-fg-size, 100%);\n    transform: scale(0);\n    transform-origin: center center;\n    opacity: 0; }\n  .mdc-ripple-surface:not(.mdc-ripple-upgraded--unbounded)::after {\n    transform-origin: center center; }\n  .mdc-ripple-surface.mdc-ripple-upgraded--unbounded::after {\n    top: 0;\n    top: var(--mdc-ripple-top, 0);\n    left: 0;\n    left: var(--mdc-ripple-left, 0);\n    width: 100%;\n    width: var(--mdc-ripple-fg-size, 100%);\n    height: 100%;\n    height: var(--mdc-ripple-fg-size, 100%);\n    transform: scale(0);\n    transform-origin: center center; }\n  .mdc-ripple-surface.mdc-ripple-upgraded--foreground-activation::after {\n    animation: 300ms mdc-ripple-fg-radius-in forwards, 83ms mdc-ripple-fg-opacity-in forwards; }\n  .mdc-ripple-surface.mdc-ripple-upgraded--foreground-deactivation::after {\n    transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n    animation: 250ms mdc-ripple-fg-opacity-out; }\n  .mdc-ripple-surface[data-mdc-ripple-is-unbounded] {\n    overflow: visible; }\n  .mdc-ripple-surface--primary::before, .mdc-ripple-surface--primary::after {\n    background-color: #3f51b5;\n    background-color: var(--mdc-theme-primary, #3f51b5); }\n  .mdc-ripple-surface--primary::before {\n    background-color: rgba(63, 81, 181, 0.16);\n    position: absolute;\n    top: calc(50% - 100%);\n    left: calc(50% - 100%);\n    width: 200%;\n    height: 200%;\n    transition: opacity 250ms linear;\n    border-radius: 50%;\n    opacity: 0;\n    pointer-events: none;\n    content: \"\"; }\n    @supports (background-color: color(green a(10%))) {\n      .mdc-ripple-surface--primary::before {\n        background-color: color(var(--mdc-theme-primary, #3f51b5) a(16%)); } }\n  .mdc-ripple-surface--primary.mdc-ripple-upgraded::before {\n    top: calc(50% - 100%);\n    left: calc(50% - 100%);\n    width: 200%;\n    height: 200%;\n    transform: scale(0);\n    transform: scale(var(--mdc-ripple-fg-scale, 0)); }\n  .mdc-ripple-surface--primary.mdc-ripple-upgraded--background-focused::before {\n    opacity: .99999; }\n  .mdc-ripple-surface--primary.mdc-ripple-upgraded--background-active-fill::before {\n    transition-duration: 120ms;\n    opacity: 1; }\n  .mdc-ripple-surface--primary.mdc-ripple-upgraded--unbounded::before {\n    top: calc(50% - 50%);\n    top: var(--mdc-ripple-top, calc(50% - 50%));\n    left: calc(50% - 50%);\n    left: var(--mdc-ripple-left, calc(50% - 50%));\n    width: 100%;\n    width: var(--mdc-ripple-fg-size, 100%);\n    height: 100%;\n    height: var(--mdc-ripple-fg-size, 100%);\n    transform: scale(0);\n    transform: scale(var(--mdc-ripple-fg-scale, 0)); }\n  .mdc-ripple-surface--primary::after {\n    background-color: rgba(63, 81, 181, 0.16);\n    position: absolute;\n    top: calc(50% - 100%);\n    left: calc(50% - 100%);\n    width: 200%;\n    height: 200%;\n    transition: opacity 250ms linear;\n    border-radius: 50%;\n    opacity: 0;\n    pointer-events: none;\n    content: \"\"; }\n    @supports (background-color: color(green a(10%))) {\n      .mdc-ripple-surface--primary::after {\n        background-color: color(var(--mdc-theme-primary, #3f51b5) a(16%)); } }\n  .mdc-ripple-surface--primary.mdc-ripple-upgraded::after {\n    top: 0;\n    left: 0;\n    width: 100%;\n    width: var(--mdc-ripple-fg-size, 100%);\n    height: 100%;\n    height: var(--mdc-ripple-fg-size, 100%);\n    transform: scale(0);\n    transform-origin: center center;\n    opacity: 0; }\n  .mdc-ripple-surface--primary:not(.mdc-ripple-upgraded--unbounded)::after {\n    transform-origin: center center; }\n  .mdc-ripple-surface--primary.mdc-ripple-upgraded--unbounded::after {\n    top: 0;\n    top: var(--mdc-ripple-top, 0);\n    left: 0;\n    left: var(--mdc-ripple-left, 0);\n    width: 100%;\n    width: var(--mdc-ripple-fg-size, 100%);\n    height: 100%;\n    height: var(--mdc-ripple-fg-size, 100%);\n    transform: scale(0);\n    transform-origin: center center; }\n  .mdc-ripple-surface--primary.mdc-ripple-upgraded--foreground-activation::after {\n    animation: 300ms mdc-ripple-fg-radius-in forwards, 83ms mdc-ripple-fg-opacity-in forwards; }\n  .mdc-ripple-surface--primary.mdc-ripple-upgraded--foreground-deactivation::after {\n    transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n    animation: 250ms mdc-ripple-fg-opacity-out; }\n  .mdc-ripple-surface--accent::before, .mdc-ripple-surface--accent::after {\n    background-color: #3f51b5;\n    background-color: var(--mdc-theme-primary, #3f51b5); }\n  .mdc-ripple-surface--accent::before {\n    background-color: rgba(255, 64, 129, 0.16);\n    position: absolute;\n    top: calc(50% - 100%);\n    left: calc(50% - 100%);\n    width: 200%;\n    height: 200%;\n    transition: opacity 250ms linear;\n    border-radius: 50%;\n    opacity: 0;\n    pointer-events: none;\n    content: \"\"; }\n    @supports (background-color: color(green a(10%))) {\n      .mdc-ripple-surface--accent::before {\n        background-color: color(var(--mdc-theme-accent, #ff4081) a(16%)); } }\n  .mdc-ripple-surface--accent.mdc-ripple-upgraded::before {\n    top: calc(50% - 100%);\n    left: calc(50% - 100%);\n    width: 200%;\n    height: 200%;\n    transform: scale(0);\n    transform: scale(var(--mdc-ripple-fg-scale, 0)); }\n  .mdc-ripple-surface--accent.mdc-ripple-upgraded--background-focused::before {\n    opacity: .99999; }\n  .mdc-ripple-surface--accent.mdc-ripple-upgraded--background-active-fill::before {\n    transition-duration: 120ms;\n    opacity: 1; }\n  .mdc-ripple-surface--accent.mdc-ripple-upgraded--unbounded::before {\n    top: calc(50% - 50%);\n    top: var(--mdc-ripple-top, calc(50% - 50%));\n    left: calc(50% - 50%);\n    left: var(--mdc-ripple-left, calc(50% - 50%));\n    width: 100%;\n    width: var(--mdc-ripple-fg-size, 100%);\n    height: 100%;\n    height: var(--mdc-ripple-fg-size, 100%);\n    transform: scale(0);\n    transform: scale(var(--mdc-ripple-fg-scale, 0)); }\n  .mdc-ripple-surface--accent::after {\n    background-color: rgba(255, 64, 129, 0.16);\n    position: absolute;\n    top: calc(50% - 100%);\n    left: calc(50% - 100%);\n    width: 200%;\n    height: 200%;\n    transition: opacity 250ms linear;\n    border-radius: 50%;\n    opacity: 0;\n    pointer-events: none;\n    content: \"\"; }\n    @supports (background-color: color(green a(10%))) {\n      .mdc-ripple-surface--accent::after {\n        background-color: color(var(--mdc-theme-accent, #ff4081) a(16%)); } }\n  .mdc-ripple-surface--accent.mdc-ripple-upgraded::after {\n    top: 0;\n    left: 0;\n    width: 100%;\n    width: var(--mdc-ripple-fg-size, 100%);\n    height: 100%;\n    height: var(--mdc-ripple-fg-size, 100%);\n    transform: scale(0);\n    transform-origin: center center;\n    opacity: 0; }\n  .mdc-ripple-surface--accent:not(.mdc-ripple-upgraded--unbounded)::after {\n    transform-origin: center center; }\n  .mdc-ripple-surface--accent.mdc-ripple-upgraded--unbounded::after {\n    top: 0;\n    top: var(--mdc-ripple-top, 0);\n    left: 0;\n    left: var(--mdc-ripple-left, 0);\n    width: 100%;\n    width: var(--mdc-ripple-fg-size, 100%);\n    height: 100%;\n    height: var(--mdc-ripple-fg-size, 100%);\n    transform: scale(0);\n    transform-origin: center center; }\n  .mdc-ripple-surface--accent.mdc-ripple-upgraded--foreground-activation::after {\n    animation: 300ms mdc-ripple-fg-radius-in forwards, 83ms mdc-ripple-fg-opacity-in forwards; }\n  .mdc-ripple-surface--accent.mdc-ripple-upgraded--foreground-deactivation::after {\n    transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));\n    animation: 250ms mdc-ripple-fg-opacity-out; }\n\n/* TODO(sgomes): Figure out what to do about desktop font sizes. */\n/* TODO(sgomes): Figure out what to do about i18n and i18n font sizes. */\n/*\n  Precomputed linear color channel values, for use in contrast calculations.\n  See https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests\n\n  Algorithm, for c in 0 to 255:\n  f(c) {\n    c = c / 255;\n    return c < 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);\n  }\n\n  This lookup table is needed since there is no `pow` in SASS.\n*/\n/**\n * Calculate the luminance for a color.\n * See https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests\n */\n/**\n * Calculate the contrast ratio between two colors.\n * See https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests\n */\n/**\n * Determine whether to use dark or light text on top of given color.\n * Returns \"dark\" for dark text and \"light\" for light text.\n */\n/*\n  Main theme colors.\n  If you're a user customizing your color scheme in SASS, these are probably the only variables you need to change.\n*/\n/* Indigo 500 */\n/* Pink A200 */\n/* White */\n/* Which set of text colors to use for each main theme color (light or dark) */\n/* Text colors according to light vs dark and text type */\n/* Primary text colors for each of the theme colors */\n/**\n * Applies the correct theme color style to the specified property.\n * $property is typically color or background-color, but can be any CSS property that accepts color values.\n * $style should be one of the map keys in $mdc-theme-property-values (_variables.scss).\n */\n/**\n * Creates a rule to be used in MDC-Web components for dark theming, and applies the provided contents.\n * Should provide the $root-selector option if applied to anything other than the root selector.\n * When used with a modifier class, provide a second argument of `true` for the $compound parameter\n * to specify that this should be attached as a compound class.\n *\n * Usage example:\n *\n * ```scss\n * .mdc-foo {\n *   color: black;\n *\n *   @include mdc-theme-dark {\n *     color: white;\n *   }\n *\n *   &__bar {\n *     background: black;\n *\n *     @include mdc-theme-dark(\".mdc-foo\") {\n *       background: white;\n *     }\n *   }\n * }\n *\n * .mdc-foo--disabled {\n *   opacity: .38;\n *\n *   @include mdc-theme-dark(\".mdc-foo\", true) {\n *     opacity: .5;\n *   }\n * }\n * ```\n */\n/**\n * Creates a rule that will be applied when an MDC-Web component is within the context of an RTL layout.\n *\n * Usage Example:\n * ```scss\n * .mdc-foo {\n *   position: absolute;\n *   left: 0;\n *\n *   @include mdc-rtl {\n *     left: auto;\n *     right: 0;\n *   }\n *\n *   &__bar {\n *     margin-left: 4px;\n *     @include mdc-rtl(\".mdc-foo\") {\n *       margin-left: auto;\n *       margin-right: 4px;\n *     }\n *   }\n * }\n *\n * .mdc-foo--mod {\n *   padding-left: 4px;\n *\n *   @include mdc-rtl {\n *     padding-left: auto;\n *     padding-right: 4px;\n *   }\n * }\n * ```\n *\n * Note that this works by checking for [dir=\"rtl\"] on an ancestor element. While this will work\n * in most cases, it will in some cases lead to false negatives, e.g.\n *\n * ```html\n * <html dir=\"rtl\">\n *   <!-- ... -->\n *   <div dir=\"ltr\">\n *     <div class=\"mdc-foo\">Styled incorrectly as RTL!</div>\n *   </div>\n * </html>\n * ```\n *\n * In the future, selectors such as :dir (http://mdn.io/:dir) will help us mitigate this.\n */\n/**\n * Takes a base box-model property - e.g. margin / border / padding - along with a default\n * direction and value, and emits rules which apply the value to the\n * \"<base-property>-<default-direction>\" property by default, but flips the direction\n * when within an RTL context.\n *\n * For example:\n *\n * ```scss\n * .mdc-foo {\n *   @include mdc-rtl-reflexive-box(margin, left, 8px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-left: 8px;\n *\n *   @include mdc-rtl {\n *     margin-right: 8px;\n *     margin-left: 0;\n *   }\n * }\n * ```\n * whereas:\n *\n * ```scss\n * .mdc-foo {\n *   @include mdc-rtl-reflexive-box(margin, right, 8px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-right: 8px;\n *\n *   @include mdc-rtl {\n *     margin-right: 0;\n *     margin-left: 8px;\n *   }\n * }\n * ```\n *\n * You can also pass a 4th optional $root-selector argument which will be forwarded to `mdc-rtl`,\n * e.g. `@include mdc-rtl-reflexive-box-property(margin, left, 8px, \".mdc-component\")`.\n *\n * Note that this function will always zero out the original value in an RTL context. If you're\n * trying to flip the values, use mdc-rtl-reflexive-property().\n */\n/**\n * Takes a base property and emits rules that assign <base-property>-left to <left-value> and\n * <base-property>-right to <right-value> in a LTR context, and vice versa in a RTL context.\n * For example:\n *\n * ```scss\n * .mdc-foo {\n *   @include mdc-rtl-reflexive-property(margin, auto, 12px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-left: auto;\n *   margin-right: 12px;\n *\n *   @include mdc-rtl {\n *     margin-left: 12px;\n *     margin-right: auto;\n *   }\n * }\n * ```\n *\n * A 4th optional $root-selector argument can be given, which will be passed to `mdc-rtl`.\n */\n/**\n * Takes an argument specifying a horizontal position property (either \"left\" or \"right\") as well\n * as a value, and applies that value to the specified position in a LTR context, and flips it in a\n * RTL context. For example:\n *\n * ```scss\n * .mdc-foo {\n *   @include mdc-rtl-reflexive-position(left, 0);\n *   position: absolute;\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n *  .mdc-foo {\n *    position: absolute;\n *    left: 0;\n *    right: initial;\n *\n *    @include mdc-rtl {\n *      right: 0;\n *      left: initial;\n *    }\n *  }\n * ```\n * An optional third $root-selector argument may also be given, which is passed to `mdc-rtl`.\n */\n.mdc-select {\n  font-family: Roboto, sans-serif;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-size: 1rem;\n  font-weight: 400;\n  letter-spacing: 0.04em;\n  line-height: 1.75rem;\n  color: rgba(0, 0, 0, 0.87);\n  color: var(--mdc-theme-text-primary-on-light, rgba(0, 0, 0, 0.87));\n  padding-left: 0;\n  padding-right: 24px;\n  appearance: none;\n  display: inline-flex;\n  align-items: center;\n  justify-content: flex-start;\n  max-width: calc(100% - 24px);\n  height: 32px;\n  transition: border-bottom-color 150ms 0ms cubic-bezier(0.4, 0, 1, 1), background-color 150ms 0ms cubic-bezier(0.4, 0, 1, 1);\n  border: none;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n  border-radius: 0;\n  background: none;\n  background-repeat: no-repeat;\n  background-position: right center;\n  background-image: url(data:image/svg+xml,%3Csvg%20width%3D%2210px%22%20height%3D%225px%22%20viewBox%3D%227%2010%2010%205%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%0A%20%20%20%20%3Cpolygon%20id%3D%22Shape%22%20stroke%3D%22none%22%20fill%3D%22%230%22%20fill-rule%3D%22evenodd%22%20opacity%3D%220.54%22%20points%3D%227%2010%2012%2015%2017%2010%22%3E%3C%2Fpolygon%3E%0A%3C%2Fsvg%3E);\n  font-family: Roboto, sans-serif;\n  font-size: .936rem;\n  cursor: pointer; }\n  [dir=\"rtl\"] .mdc-select, .mdc-select[dir=\"rtl\"] {\n    padding-left: 24px;\n    padding-right: 0; }\n  .mdc-select::-ms-expand {\n    display: none; }\n  .mdc-select:focus {\n    border-bottom-color: #3f51b5;\n    border-bottom-color: var(--mdc-theme-primary, #3f51b5);\n    outline: none;\n    background-color: rgba(0, 0, 0, 0.06); }\n  [dir=\"rtl\"] .mdc-select, .mdc-select[dir=\"rtl\"] {\n    background-position: left center; }\n  .mdc-select--theme-dark,\n  .mdc-theme--dark .mdc-select {\n    color: white;\n    color: var(--mdc-theme-text-primary-on-dark, white);\n    background-image: url(data:image/svg+xml,%3Csvg%20width%3D%2210px%22%20height%3D%225px%22%20viewBox%3D%227%2010%2010%205%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%0A%20%20%20%20%3Cpolygon%20id%3D%22Shape%22%20stroke%3D%22none%22%20fill%3D%22%23ffffff%22%20fill-rule%3D%22evenodd%22%20opacity%3D%220.54%22%20points%3D%227%2010%2012%2015%2017%2010%22%3E%3C%2Fpolygon%3E%0A%3C%2Fsvg%3E);\n    border-bottom: 1px solid rgba(255, 255, 255, 0.12); }\n    .mdc-select--theme-dark:focus,\n    .mdc-theme--dark .mdc-select:focus {\n      border-bottom-color: #3f51b5;\n      border-bottom-color: var(--mdc-theme-primary, #3f51b5);\n      background-color: rgba(255, 255, 255, 0.09); }\n  .mdc-select__menu {\n    position: fixed;\n    top: 0;\n    left: 0;\n    max-height: 100%;\n    transform-origin: center center;\n    overflow-y: scroll;\n    z-index: 4; }\n  .mdc-select__selected-text {\n    transition: opacity 125ms 0ms cubic-bezier(0.4, 0, 1, 1), transform 125ms 0ms cubic-bezier(0.4, 0, 1, 1);\n    white-space: nowrap;\n    overflow: hidden; }\n\n.mdc-select--open .mdc-select__selected-text {\n  transform: translateY(8px);\n  transition: opacity 125ms 125ms cubic-bezier(0, 0, 0.2, 1), transform 125ms 125ms cubic-bezier(0, 0, 0.2, 1);\n  opacity: 0; }\n\n.mdc-select--disabled,\n.mdc-select[disabled] {\n  color: rgba(0, 0, 0, 0.38);\n  color: var(--mdc-theme-text-disabled-on-light, rgba(0, 0, 0, 0.38));\n  background-image: url(data:image/svg+xml,%3Csvg%20width%3D%2210px%22%20height%3D%225px%22%20viewBox%3D%227%2010%2010%205%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%0A%20%20%20%20%3Cpolygon%20id%3D%22Shape%22%20stroke%3D%22none%22%20fill%3D%22%230%22%20fill-rule%3D%22evenodd%22%20opacity%3D%220.38%22%20points%3D%227%2010%2012%2015%2017%2010%22%3E%3C%2Fpolygon%3E%0A%3C%2Fsvg%3E);\n  border-bottom-style: dotted;\n  cursor: default;\n  pointer-events: none;\n  user-select: none; }\n\n.mdc-select--theme-dark.mdc-select--disabled,\n.mdc-theme--dark .mdc-select--disabled {\n  color: rgba(255, 255, 255, 0.5);\n  color: var(--mdc-theme-text-disabled-on-dark, rgba(255, 255, 255, 0.5));\n  background-image: url(data:image/svg+xml,%3Csvg%20width%3D%2210px%22%20height%3D%225px%22%20viewBox%3D%227%2010%2010%205%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%0A%20%20%20%20%3Cpolygon%20id%3D%22Shape%22%20stroke%3D%22none%22%20fill%3D%22%23ffffff%22%20fill-rule%3D%22evenodd%22%20opacity%3D%220.38%22%20points%3D%227%2010%2012%2015%2017%2010%22%3E%3C%2Fpolygon%3E%0A%3C%2Fsvg%3E);\n  border-bottom: 1px dotted rgba(255, 255, 255, 0.38); }\n\n.mdc-select--theme-dark.mdc-select[disabled],\n.mdc-theme--dark .mdc-select[disabled] {\n  color: rgba(255, 255, 255, 0.5);\n  color: var(--mdc-theme-text-disabled-on-dark, rgba(255, 255, 255, 0.5));\n  background-image: url(data:image/svg+xml,%3Csvg%20width%3D%2210px%22%20height%3D%225px%22%20viewBox%3D%227%2010%2010%205%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%0A%20%20%20%20%3Cpolygon%20id%3D%22Shape%22%20stroke%3D%22none%22%20fill%3D%22%23ffffff%22%20fill-rule%3D%22evenodd%22%20opacity%3D%220.38%22%20points%3D%227%2010%2012%2015%2017%2010%22%3E%3C%2Fpolygon%3E%0A%3C%2Fsvg%3E);\n  border-bottom: 1px dotted rgba(255, 255, 255, 0.38); }\n\n.mdc-select__menu .mdc-list-item {\n  font-family: Roboto, sans-serif;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-size: 1rem;\n  font-weight: 400;\n  letter-spacing: 0.04em;\n  line-height: 1.75rem;\n  color: rgba(0, 0, 0, 0.54);\n  color: var(--mdc-theme-text-secondary-on-light, rgba(0, 0, 0, 0.54)); }\n  .mdc-select__menu .mdc-list-item[aria-selected=\"true\"] {\n    color: rgba(0, 0, 0, 0.87);\n    color: var(--mdc-theme-text-primary-on-light, rgba(0, 0, 0, 0.87)); }\n  .mdc-select--theme-dark .mdc-select__menu .mdc-list-item,\n  .mdc-theme--dark .mdc-select__menu .mdc-list-item {\n    color: rgba(255, 255, 255, 0.7);\n    color: var(--mdc-theme-text-secondary-on-dark, rgba(255, 255, 255, 0.7)); }\n    .mdc-select--theme-dark .mdc-select__menu .mdc-list-item[aria-selected=\"true\"],\n    .mdc-theme--dark .mdc-select__menu .mdc-list-item[aria-selected=\"true\"] {\n      color: white;\n      color: var(--mdc-theme-text-primary-on-dark, white); }\n\n.mdc-select__menu .mdc-list-group,\n.mdc-select__menu .mdc-list-group > .mdc-list-item:first-child {\n  margin-top: 12px; }\n\n.mdc-select__menu .mdc-list-group {\n  color: rgba(0, 0, 0, 0.38);\n  color: var(--mdc-theme-text-hint-on-light, rgba(0, 0, 0, 0.38));\n  font-weight: normal; }\n  .mdc-select__menu .mdc-list-group .mdc-list-item {\n    color: rgba(0, 0, 0, 0.87);\n    color: var(--mdc-theme-text-primary-on-light, rgba(0, 0, 0, 0.87)); }\n\n.mdc-select--theme-dark .mdc-select__menu .mdc-list-group,\n.mdc-theme--dark .mdc-select__menu .mdc-list-group {\n  color: rgba(255, 255, 255, 0.5);\n  color: var(--mdc-theme-text-hint-on-dark, rgba(255, 255, 255, 0.5)); }\n  .mdc-select--theme-dark .mdc-select__menu .mdc-list-group .mdc-list-item,\n  .mdc-theme--dark .mdc-select__menu .mdc-list-group .mdc-list-item {\n    color: white;\n    color: var(--mdc-theme-text-primary-on-dark, white); }\n\n.mdc-multi-select {\n  appearance: none;\n  width: 250px;\n  padding: 0;\n  border: 1px solid;\n  border-color: rgba(0, 0, 0, 0.38);\n  border-color: var(--mdc-theme-text-hint-on-light, rgba(0, 0, 0, 0.38));\n  outline: none; }\n  .mdc-multi-select--theme-dark,\n  .mdc-theme--dark .mdc-multi-select {\n    border-color: rgba(255, 255, 255, 0.5);\n    border-color: var(--mdc-theme-text-hint-on-dark, rgba(255, 255, 255, 0.5)); }\n  .mdc-multi-select .mdc-list-group {\n    margin: 16px 0 0;\n    padding: 0 0 0 16px;\n    color: rgba(0, 0, 0, 0.38);\n    color: var(--mdc-theme-text-hint-on-light, rgba(0, 0, 0, 0.38));\n    font-weight: normal; }\n    .mdc-multi-select .mdc-list-group--theme-dark,\n    .mdc-theme--dark .mdc-multi-select .mdc-list-group {\n      color: rgba(255, 255, 255, 0.5);\n      color: var(--mdc-theme-text-hint-on-dark, rgba(255, 255, 255, 0.5)); }\n    .mdc-multi-select .mdc-list-group:last-child {\n      margin-bottom: 16px; }\n    .mdc-multi-select .mdc-list-group .mdc-list-divider {\n      margin-left: -16px; }\n  .mdc-multi-select .mdc-list-item {\n    margin: 0 0 0 -16px;\n    padding: 0 16px;\n    color: rgba(0, 0, 0, 0.87);\n    color: var(--mdc-theme-text-primary-on-light, rgba(0, 0, 0, 0.87)); }\n    .mdc-multi-select .mdc-list-item--theme-dark,\n    .mdc-theme--dark .mdc-multi-select .mdc-list-item {\n      color: white;\n      color: var(--mdc-theme-text-primary-on-dark, white); }\n    .mdc-multi-select .mdc-list-item:first-child {\n      margin-top: 12px; }\n    .mdc-multi-select .mdc-list-item:last-child {\n      margin-bottom: 8px; }\n  .mdc-multi-select .mdc-list-item:checked {\n    background-color: rgba(0, 0, 0, 0.12);\n    background-color: #fff;\n    background-color: var(--mdc-theme-background, #fff); }\n    .mdc-multi-select .mdc-list-item:checked--theme-dark,\n    .mdc-theme--dark .mdc-multi-select .mdc-list-item:checked {\n      background-color: white;\n      background-color: var(--mdc-theme-text-primary-on-dark, white); }\n\n.mdc-multi-select:focus .mdc-list-item:checked {\n  background-color: #3f51b5;\n  background-color: var(--mdc-theme-primary, #3f51b5); }\n  .mdc-multi-select:focus .mdc-list-item:checked--theme-dark,\n  .mdc-theme--dark .mdc-multi-select:focus .mdc-list-item:checked {\n    background-color: white;\n    background-color: var(--mdc-theme-text-primary-on-dark, white); }\n\n.mdc-list-divider {\n  margin-bottom: 8px;\n  padding-top: 8px;\n  font-size: 0; }\n\n/**\n * Creates a rule that will be applied when an MDC-Web component is within the context of an RTL layout.\n *\n * Usage Example:\n * ```scss\n * .mdc-foo {\n *   position: absolute;\n *   left: 0;\n *\n *   @include mdc-rtl {\n *     left: auto;\n *     right: 0;\n *   }\n *\n *   &__bar {\n *     margin-left: 4px;\n *     @include mdc-rtl(\".mdc-foo\") {\n *       margin-left: auto;\n *       margin-right: 4px;\n *     }\n *   }\n * }\n *\n * .mdc-foo--mod {\n *   padding-left: 4px;\n *\n *   @include mdc-rtl {\n *     padding-left: auto;\n *     padding-right: 4px;\n *   }\n * }\n * ```\n *\n * Note that this works by checking for [dir=\"rtl\"] on an ancestor element. While this will work\n * in most cases, it will in some cases lead to false negatives, e.g.\n *\n * ```html\n * <html dir=\"rtl\">\n *   <!-- ... -->\n *   <div dir=\"ltr\">\n *     <div class=\"mdc-foo\">Styled incorrectly as RTL!</div>\n *   </div>\n * </html>\n * ```\n *\n * In the future, selectors such as :dir (http://mdn.io/:dir) will help us mitigate this.\n */\n/**\n * Takes a base box-model property - e.g. margin / border / padding - along with a default\n * direction and value, and emits rules which apply the value to the\n * \"<base-property>-<default-direction>\" property by default, but flips the direction\n * when within an RTL context.\n *\n * For example:\n *\n * ```scss\n * .mdc-foo {\n *   @include mdc-rtl-reflexive-box(margin, left, 8px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-left: 8px;\n *\n *   @include mdc-rtl {\n *     margin-right: 8px;\n *     margin-left: 0;\n *   }\n * }\n * ```\n * whereas:\n *\n * ```scss\n * .mdc-foo {\n *   @include mdc-rtl-reflexive-box(margin, right, 8px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-right: 8px;\n *\n *   @include mdc-rtl {\n *     margin-right: 0;\n *     margin-left: 8px;\n *   }\n * }\n * ```\n *\n * You can also pass a 4th optional $root-selector argument which will be forwarded to `mdc-rtl`,\n * e.g. `@include mdc-rtl-reflexive-box-property(margin, left, 8px, \".mdc-component\")`.\n *\n * Note that this function will always zero out the original value in an RTL context. If you're\n * trying to flip the values, use mdc-rtl-reflexive-property().\n */\n/**\n * Takes a base property and emits rules that assign <base-property>-left to <left-value> and\n * <base-property>-right to <right-value> in a LTR context, and vice versa in a RTL context.\n * For example:\n *\n * ```scss\n * .mdc-foo {\n *   @include mdc-rtl-reflexive-property(margin, auto, 12px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-left: auto;\n *   margin-right: 12px;\n *\n *   @include mdc-rtl {\n *     margin-left: 12px;\n *     margin-right: auto;\n *   }\n * }\n * ```\n *\n * A 4th optional $root-selector argument can be given, which will be passed to `mdc-rtl`.\n */\n/**\n * Takes an argument specifying a horizontal position property (either \"left\" or \"right\") as well\n * as a value, and applies that value to the specified position in a LTR context, and flips it in a\n * RTL context. For example:\n *\n * ```scss\n * .mdc-foo {\n *   @include mdc-rtl-reflexive-position(left, 0);\n *   position: absolute;\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n *  .mdc-foo {\n *    position: absolute;\n *    left: 0;\n *    right: initial;\n *\n *    @include mdc-rtl {\n *      right: 0;\n *      left: initial;\n *    }\n *  }\n * ```\n * An optional third $root-selector argument may also be given, which is passed to `mdc-rtl`.\n */\n/*\n  Precomputed linear color channel values, for use in contrast calculations.\n  See https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests\n\n  Algorithm, for c in 0 to 255:\n  f(c) {\n    c = c / 255;\n    return c < 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);\n  }\n\n  This lookup table is needed since there is no `pow` in SASS.\n*/\n/**\n * Calculate the luminance for a color.\n * See https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests\n */\n/**\n * Calculate the contrast ratio between two colors.\n * See https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests\n */\n/**\n * Determine whether to use dark or light text on top of given color.\n * Returns \"dark\" for dark text and \"light\" for light text.\n */\n/*\n  Main theme colors.\n  If you're a user customizing your color scheme in SASS, these are probably the only variables you need to change.\n*/\n/* Indigo 500 */\n/* Pink A200 */\n/* White */\n/* Which set of text colors to use for each main theme color (light or dark) */\n/* Text colors according to light vs dark and text type */\n/* Primary text colors for each of the theme colors */\n/**\n * Applies the correct theme color style to the specified property.\n * $property is typically color or background-color, but can be any CSS property that accepts color values.\n * $style should be one of the map keys in $mdc-theme-property-values (_variables.scss).\n */\n/**\n * Creates a rule to be used in MDC-Web components for dark theming, and applies the provided contents.\n * Should provide the $root-selector option if applied to anything other than the root selector.\n * When used with a modifier class, provide a second argument of `true` for the $compound parameter\n * to specify that this should be attached as a compound class.\n *\n * Usage example:\n *\n * ```scss\n * .mdc-foo {\n *   color: black;\n *\n *   @include mdc-theme-dark {\n *     color: white;\n *   }\n *\n *   &__bar {\n *     background: black;\n *\n *     @include mdc-theme-dark(\".mdc-foo\") {\n *       background: white;\n *     }\n *   }\n * }\n *\n * .mdc-foo--disabled {\n *   opacity: .38;\n *\n *   @include mdc-theme-dark(\".mdc-foo\", true) {\n *     opacity: .5;\n *   }\n * }\n * ```\n */\n/* TODO(sgomes): Figure out what to do about desktop font sizes. */\n/* TODO(sgomes): Figure out what to do about i18n and i18n font sizes. */\n/* postcss-bem-linter: define snackbar */\n.mdc-snackbar {\n  display: flex;\n  position: fixed;\n  bottom: 0;\n  left: 50%;\n  align-items: center;\n  justify-content: flex-start;\n  padding-right: 24px;\n  padding-left: 24px;\n  transform: translate(0, 100%);\n  transition: transform 0.25s 0ms cubic-bezier(0.4, 0, 1, 1);\n  background-color: #323232;\n  will-change: transform;\n  pointer-events: none;\n  /* stylelint-disable plugin/selector-bem-pattern */\n  /* stylelint-enable plugin/selector-bem-pattern */ }\n  @media (max-width: 599px) {\n    .mdc-snackbar {\n      left: 0;\n      width: calc(100% - 48px); } }\n  @media (min-width: 600px) {\n    .mdc-snackbar {\n      min-width: 288px;\n      max-width: 568px;\n      transform: translate(-50%, 100%);\n      border-radius: 2px; } }\n  .mdc-snackbar--active {\n    transform: translate(0, 0);\n    pointer-events: auto;\n    transition: transform 0.25s 0ms cubic-bezier(0, 0, 0.2, 1); }\n    @media (min-width: 600px) {\n      .mdc-snackbar--active {\n        transform: translate(-50%, 0); } }\n  .mdc-snackbar--action-on-bottom {\n    flex-direction: column; }\n  .mdc-snackbar--action-on-bottom .mdc-snackbar__text {\n    margin-right: inherit; }\n  .mdc-snackbar--action-on-bottom .mdc-snackbar__action-wrapper {\n    flex-direction: column;\n    justify-content: flex-start;\n    margin-top: -12px;\n    margin-bottom: 8px;\n    margin-left: auto;\n    margin-right: 0; }\n    [dir=\"rtl\"] .mdc-snackbar--action-on-bottom .mdc-snackbar__action-wrapper, .mdc-snackbar--action-on-bottom .mdc-snackbar__action-wrapper[dir=\"rtl\"] {\n      margin-left: 0;\n      margin-right: auto; }\n  .mdc-snackbar__text {\n    font-family: Roboto, sans-serif;\n    -moz-osx-font-smoothing: grayscale;\n    -webkit-font-smoothing: antialiased;\n    font-size: 0.875rem;\n    font-weight: 400;\n    letter-spacing: 0.04em;\n    line-height: 1.25rem;\n    margin-left: 0;\n    margin-right: auto;\n    display: flex;\n    align-items: center;\n    height: 48px;\n    transition: opacity 0.3s 0ms cubic-bezier(0.4, 0, 1, 1);\n    color: white;\n    opacity: 0; }\n    [dir=\"rtl\"] .mdc-snackbar .mdc-snackbar__text,\n    .mdc-snackbar[dir=\"rtl\"] .mdc-snackbar__text {\n      margin-left: auto;\n      margin-right: 0; }\n  .mdc-snackbar--multiline .mdc-snackbar__text {\n    height: 80px; }\n  .mdc-snackbar--multiline.mdc-snackbar--action-on-bottom .mdc-snackbar__text {\n    margin: 0; }\n  .mdc-snackbar__action-button {\n    color: #ff4081;\n    color: var(--mdc-theme-accent, #ff4081);\n    margin-left: 0;\n    margin-right: -16px;\n    min-width: auto;\n    height: inherit;\n    transition: opacity 0.3s 0ms cubic-bezier(0.4, 0, 1, 1);\n    opacity: 0;\n    visibility: hidden; }\n    [dir=\"rtl\"] .mdc-snackbar .mdc-snackbar__action-button,\n    .mdc-snackbar[dir=\"rtl\"] .mdc-snackbar__action-button {\n      margin-left: -16px;\n      margin-right: 0; }\n    .mdc-snackbar__action-button::-moz-focus-inner {\n      border: 0; }\n    .mdc-snackbar__action-button:not([aria-hidden]) {\n      visibility: inherit; }\n  .mdc-snackbar--active .mdc-snackbar__text,\n  .mdc-snackbar--active .mdc-snackbar__action-button:not([aria-hidden]) {\n    transition: opacity 0.3s 0ms cubic-bezier(0.4, 0, 1, 1);\n    opacity: 1; }\n\n/* postcss-bem-linter: end */\n/**\n * The css property used for elevation. In most cases this should not be changed. It is exposed\n * as a variable for abstraction / easy use when needing to reference the property directly, for\n * example in a `will-change` rule.\n */\n/**\n * The default duration value for elevation transitions.\n */\n/**\n * The default easing value for elevation transitions.\n */\n/**\n * Applies the correct css rules to an element to give it the elevation specified by $z-value.\n * The $z-value must be between 0 and 24.\n */\n/**\n * Returns a string that can be used as the value for a `transition` property for elevation.\n * Calling this function directly is useful in situations where a component needs to transition\n * more than one property.\n *\n * ```scss\n * .foo {\n *   transition: mdc-elevation-transition-rule(), opacity 100ms ease;\n *   will-change: $mdc-elevation-property, opacity;\n * }\n * ```\n */\n/**\n * Applies the correct css rules needed to have an element transition between elevations.\n * This mixin should be applied to elements whose elevation values will change depending on their\n * context (e.g. when active or disabled).\n */\n/*\n  Precomputed linear color channel values, for use in contrast calculations.\n  See https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests\n\n  Algorithm, for c in 0 to 255:\n  f(c) {\n    c = c / 255;\n    return c < 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);\n  }\n\n  This lookup table is needed since there is no `pow` in SASS.\n*/\n/**\n * Calculate the luminance for a color.\n * See https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests\n */\n/**\n * Calculate the contrast ratio between two colors.\n * See https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests\n */\n/**\n * Determine whether to use dark or light text on top of given color.\n * Returns \"dark\" for dark text and \"light\" for light text.\n */\n/*\n  Main theme colors.\n  If you're a user customizing your color scheme in SASS, these are probably the only variables you need to change.\n*/\n/* Indigo 500 */\n/* Pink A200 */\n/* White */\n/* Which set of text colors to use for each main theme color (light or dark) */\n/* Text colors according to light vs dark and text type */\n/* Primary text colors for each of the theme colors */\n/**\n * Applies the correct theme color style to the specified property.\n * $property is typically color or background-color, but can be any CSS property that accepts color values.\n * $style should be one of the map keys in $mdc-theme-property-values (_variables.scss).\n */\n/**\n * Creates a rule to be used in MDC-Web components for dark theming, and applies the provided contents.\n * Should provide the $root-selector option if applied to anything other than the root selector.\n * When used with a modifier class, provide a second argument of `true` for the $compound parameter\n * to specify that this should be attached as a compound class.\n *\n * Usage example:\n *\n * ```scss\n * .mdc-foo {\n *   color: black;\n *\n *   @include mdc-theme-dark {\n *     color: white;\n *   }\n *\n *   &__bar {\n *     background: black;\n *\n *     @include mdc-theme-dark(\".mdc-foo\") {\n *       background: white;\n *     }\n *   }\n * }\n *\n * .mdc-foo--disabled {\n *   opacity: .38;\n *\n *   @include mdc-theme-dark(\".mdc-foo\", true) {\n *     opacity: .5;\n *   }\n * }\n * ```\n */\n.mdc-switch {\n  display: inline-block;\n  position: relative; }\n  .mdc-switch__native-control {\n    display: inline-block;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 34px;\n    height: 14px;\n    cursor: pointer;\n    opacity: 0;\n    z-index: 2; }\n  .mdc-switch__background {\n    display: block;\n    position: relative;\n    width: 34px;\n    height: 14px;\n    border-radius: 7px;\n    outline: none;\n    background-color: transparent;\n    cursor: pointer;\n    user-select: none; }\n    .mdc-switch--theme-dark .mdc-switch__background,\n    .mdc-theme--dark .mdc-switch__background {\n      background-color: transparent; }\n    .mdc-switch__background::before {\n      display: block;\n      position: absolute;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      left: 0;\n      transition: opacity 90ms cubic-bezier(0.4, 0, 0.2, 1), background-color 90ms cubic-bezier(0.4, 0, 0.2, 1);\n      border-radius: 7px;\n      background-color: #000;\n      content: \"\";\n      opacity: .38; }\n      .mdc-switch--theme-dark .mdc-switch__background::before,\n      .mdc-theme--dark .mdc-switch__background::before {\n        background-color: #fff;\n        opacity: .3; }\n    .mdc-switch__background .mdc-switch__knob {\n      display: block;\n      position: absolute;\n      top: -3px;\n      left: 0;\n      width: 20px;\n      height: 20px;\n      transform: translateX(0);\n      transition: transform 90ms cubic-bezier(0.4, 0, 0.2, 1), background-color 90ms cubic-bezier(0.4, 0, 0.2, 1);\n      border-radius: 10px;\n      background-color: #fafafa;\n      box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n      z-index: 1; }\n      .mdc-switch--theme-dark .mdc-switch__background .mdc-switch__knob,\n      .mdc-theme--dark .mdc-switch__background .mdc-switch__knob {\n        background-color: #bdbdbd; }\n      .mdc-switch__background .mdc-switch__knob::before {\n        position: absolute;\n        top: -14px;\n        left: -14px;\n        width: 48px;\n        height: 48px;\n        transform: scale(0);\n        transition: transform 90ms cubic-bezier(0.4, 0, 0.2, 1), background-color 90ms cubic-bezier(0.4, 0, 0.2, 1);\n        border-radius: 24px;\n        background-color: transparent;\n        content: \"\";\n        opacity: .2; }\n\n.mdc-switch__native-control:focus ~ .mdc-switch__background .mdc-switch__knob::before {\n  position: absolute;\n  width: 48px;\n  height: 48px;\n  transform: scale(1);\n  transition: transform 90ms cubic-bezier(0.4, 0, 0.2, 1), background-color 90ms cubic-bezier(0.4, 0, 0.2, 1);\n  border-radius: 24px;\n  background-color: #9e9e9e; }\n  .mdc-switch--theme-dark .mdc-switch__native-control:focus ~ .mdc-switch__background .mdc-switch__knob::before,\n  .mdc-theme--dark .mdc-switch__native-control:focus ~ .mdc-switch__background .mdc-switch__knob::before {\n    background-color: #f1f1f1;\n    opacity: .14; }\n\n.mdc-switch__native-control:checked ~ .mdc-switch__background::before {\n  background-color: #3f51b5;\n  background-color: var(--mdc-theme-primary, #3f51b5);\n  opacity: .5; }\n\n.mdc-switch__native-control:checked ~ .mdc-switch__background .mdc-switch__knob {\n  transform: translateX(14px);\n  transition: transform 90ms cubic-bezier(0.4, 0, 0.2, 1), background-color 90ms cubic-bezier(0.4, 0, 0.2, 1);\n  background-color: #3f51b5;\n  background-color: var(--mdc-theme-primary, #3f51b5); }\n  .mdc-switch__native-control:checked ~ .mdc-switch__background .mdc-switch__knob::before {\n    background-color: #3f51b5;\n    background-color: var(--mdc-theme-primary, #3f51b5);\n    opacity: .15; }\n    .mdc-switch--theme-dark .mdc-switch__native-control:checked ~ .mdc-switch__background .mdc-switch__knob::before,\n    .mdc-theme--dark .mdc-switch__native-control:checked ~ .mdc-switch__background .mdc-switch__knob::before {\n      background-color: #3f51b5;\n      background-color: var(--mdc-theme-primary, #3f51b5); }\n\n.mdc-switch__native-control:disabled {\n  cursor: initial; }\n\n.mdc-switch__native-control:disabled ~ .mdc-switch__background::before {\n  background-color: #000;\n  opacity: .12; }\n  .mdc-switch--theme-dark .mdc-switch__native-control:disabled ~ .mdc-switch__background::before,\n  .mdc-theme--dark .mdc-switch__native-control:disabled ~ .mdc-switch__background::before {\n    background-color: #fff;\n    opacity: .1; }\n\n.mdc-switch__native-control:disabled ~ .mdc-switch__background .mdc-switch__knob {\n  background-color: #bdbdbd; }\n  .mdc-switch--theme-dark .mdc-switch__native-control:disabled ~ .mdc-switch__background .mdc-switch__knob,\n  .mdc-theme--dark .mdc-switch__native-control:disabled ~ .mdc-switch__background .mdc-switch__knob {\n    background-color: #424242; }\n\n/**\n * Creates a rule that will be applied when an MDC-Web component is within the context of an RTL layout.\n *\n * Usage Example:\n * ```scss\n * .mdc-foo {\n *   position: absolute;\n *   left: 0;\n *\n *   @include mdc-rtl {\n *     left: auto;\n *     right: 0;\n *   }\n *\n *   &__bar {\n *     margin-left: 4px;\n *     @include mdc-rtl(\".mdc-foo\") {\n *       margin-left: auto;\n *       margin-right: 4px;\n *     }\n *   }\n * }\n *\n * .mdc-foo--mod {\n *   padding-left: 4px;\n *\n *   @include mdc-rtl {\n *     padding-left: auto;\n *     padding-right: 4px;\n *   }\n * }\n * ```\n *\n * Note that this works by checking for [dir=\"rtl\"] on an ancestor element. While this will work\n * in most cases, it will in some cases lead to false negatives, e.g.\n *\n * ```html\n * <html dir=\"rtl\">\n *   <!-- ... -->\n *   <div dir=\"ltr\">\n *     <div class=\"mdc-foo\">Styled incorrectly as RTL!</div>\n *   </div>\n * </html>\n * ```\n *\n * In the future, selectors such as :dir (http://mdn.io/:dir) will help us mitigate this.\n */\n/**\n * Takes a base box-model property - e.g. margin / border / padding - along with a default\n * direction and value, and emits rules which apply the value to the\n * \"<base-property>-<default-direction>\" property by default, but flips the direction\n * when within an RTL context.\n *\n * For example:\n *\n * ```scss\n * .mdc-foo {\n *   @include mdc-rtl-reflexive-box(margin, left, 8px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-left: 8px;\n *\n *   @include mdc-rtl {\n *     margin-right: 8px;\n *     margin-left: 0;\n *   }\n * }\n * ```\n * whereas:\n *\n * ```scss\n * .mdc-foo {\n *   @include mdc-rtl-reflexive-box(margin, right, 8px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-right: 8px;\n *\n *   @include mdc-rtl {\n *     margin-right: 0;\n *     margin-left: 8px;\n *   }\n * }\n * ```\n *\n * You can also pass a 4th optional $root-selector argument which will be forwarded to `mdc-rtl`,\n * e.g. `@include mdc-rtl-reflexive-box-property(margin, left, 8px, \".mdc-component\")`.\n *\n * Note that this function will always zero out the original value in an RTL context. If you're\n * trying to flip the values, use mdc-rtl-reflexive-property().\n */\n/**\n * Takes a base property and emits rules that assign <base-property>-left to <left-value> and\n * <base-property>-right to <right-value> in a LTR context, and vice versa in a RTL context.\n * For example:\n *\n * ```scss\n * .mdc-foo {\n *   @include mdc-rtl-reflexive-property(margin, auto, 12px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-left: auto;\n *   margin-right: 12px;\n *\n *   @include mdc-rtl {\n *     margin-left: 12px;\n *     margin-right: auto;\n *   }\n * }\n * ```\n *\n * A 4th optional $root-selector argument can be given, which will be passed to `mdc-rtl`.\n */\n/**\n * Takes an argument specifying a horizontal position property (either \"left\" or \"right\") as well\n * as a value, and applies that value to the specified position in a LTR context, and flips it in a\n * RTL context. For example:\n *\n * ```scss\n * .mdc-foo {\n *   @include mdc-rtl-reflexive-position(left, 0);\n *   position: absolute;\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n *  .mdc-foo {\n *    position: absolute;\n *    left: 0;\n *    right: initial;\n *\n *    @include mdc-rtl {\n *      right: 0;\n *      left: initial;\n *    }\n *  }\n * ```\n * An optional third $root-selector argument may also be given, which is passed to `mdc-rtl`.\n */\n/*\n  Precomputed linear color channel values, for use in contrast calculations.\n  See https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests\n\n  Algorithm, for c in 0 to 255:\n  f(c) {\n    c = c / 255;\n    return c < 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);\n  }\n\n  This lookup table is needed since there is no `pow` in SASS.\n*/\n/**\n * Calculate the luminance for a color.\n * See https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests\n */\n/**\n * Calculate the contrast ratio between two colors.\n * See https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests\n */\n/**\n * Determine whether to use dark or light text on top of given color.\n * Returns \"dark\" for dark text and \"light\" for light text.\n */\n/*\n  Main theme colors.\n  If you're a user customizing your color scheme in SASS, these are probably the only variables you need to change.\n*/\n/* Indigo 500 */\n/* Pink A200 */\n/* White */\n/* Which set of text colors to use for each main theme color (light or dark) */\n/* Text colors according to light vs dark and text type */\n/* Primary text colors for each of the theme colors */\n/*\n  Precomputed linear color channel values, for use in contrast calculations.\n  See https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests\n\n  Algorithm, for c in 0 to 255:\n  f(c) {\n    c = c / 255;\n    return c < 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);\n  }\n\n  This lookup table is needed since there is no `pow` in SASS.\n*/\n/**\n * Calculate the luminance for a color.\n * See https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests\n */\n/**\n * Calculate the contrast ratio between two colors.\n * See https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests\n */\n/**\n * Determine whether to use dark or light text on top of given color.\n * Returns \"dark\" for dark text and \"light\" for light text.\n */\n/*\n  Main theme colors.\n  If you're a user customizing your color scheme in SASS, these are probably the only variables you need to change.\n*/\n/* Indigo 500 */\n/* Pink A200 */\n/* White */\n/* Which set of text colors to use for each main theme color (light or dark) */\n/* Text colors according to light vs dark and text type */\n/* Primary text colors for each of the theme colors */\n/**\n * Applies the correct theme color style to the specified property.\n * $property is typically color or background-color, but can be any CSS property that accepts color values.\n * $style should be one of the map keys in $mdc-theme-property-values (_variables.scss).\n */\n/**\n * Creates a rule to be used in MDC-Web components for dark theming, and applies the provided contents.\n * Should provide the $root-selector option if applied to anything other than the root selector.\n * When used with a modifier class, provide a second argument of `true` for the $compound parameter\n * to specify that this should be attached as a compound class.\n *\n * Usage example:\n *\n * ```scss\n * .mdc-foo {\n *   color: black;\n *\n *   @include mdc-theme-dark {\n *     color: white;\n *   }\n *\n *   &__bar {\n *     background: black;\n *\n *     @include mdc-theme-dark(\".mdc-foo\") {\n *       background: white;\n *     }\n *   }\n * }\n *\n * .mdc-foo--disabled {\n *   opacity: .38;\n *\n *   @include mdc-theme-dark(\".mdc-foo\", true) {\n *     opacity: .5;\n *   }\n * }\n * ```\n */\n/* TODO(sgomes): Figure out what to do about desktop font sizes. */\n/* TODO(sgomes): Figure out what to do about i18n and i18n font sizes. */\n/* TODO(sgomes): Figure out what to do about desktop font sizes. */\n/* TODO(sgomes): Figure out what to do about i18n and i18n font sizes. */\n.mdc-textfield {\n  font-family: Roboto, sans-serif;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-size: 1rem;\n  letter-spacing: 0.04em;\n  display: inline-block;\n  margin-bottom: 8px;\n  will-change: opacity, transform, color; }\n  .mdc-textfield__input {\n    color: rgba(0, 0, 0, 0.87);\n    color: var(--mdc-theme-text-primary-on-light, rgba(0, 0, 0, 0.87));\n    padding: 0 0 8px;\n    border: none;\n    background: none;\n    font-size: inherit;\n    appearance: none; }\n    .mdc-textfield__input::placeholder {\n      color: rgba(0, 0, 0, 0.38);\n      color: var(--mdc-theme-text-hint-on-light, rgba(0, 0, 0, 0.38));\n      transition: color 180ms cubic-bezier(0.4, 0, 0.2, 1);\n      opacity: 1; }\n    .mdc-textfield__input:focus {\n      outline: none; }\n      .mdc-textfield__input:focus::placeholder {\n        color: rgba(0, 0, 0, 0.54);\n        color: var(--mdc-theme-text-secondary-on-light, rgba(0, 0, 0, 0.54)); }\n    .mdc-textfield__input:invalid {\n      box-shadow: none; }\n    .mdc-textfield__input--theme-dark,\n    .mdc-theme--dark .mdc-textfield__input {\n      color: white; }\n      .mdc-textfield__input--theme-dark::placeholder,\n      .mdc-theme--dark .mdc-textfield__input::placeholder {\n        color: rgba(255, 255, 255, 0.5);\n        color: var(--mdc-theme-text-hint-on-dark, rgba(255, 255, 255, 0.5)); }\n      .mdc-textfield__input--theme-dark:focus::placeholder,\n      .mdc-theme--dark .mdc-textfield__input:focus::placeholder {\n        color: rgba(255, 255, 255, 0.7);\n        color: var(--mdc-theme-text-secondary-on-dark, rgba(255, 255, 255, 0.7)); }\n  .mdc-textfield__label {\n    color: rgba(0, 0, 0, 0.38);\n    color: var(--mdc-theme-text-hint-on-light, rgba(0, 0, 0, 0.38));\n    position: absolute;\n    bottom: 8px;\n    left: 0;\n    transform-origin: left top;\n    transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1), color 180ms cubic-bezier(0.4, 0, 0.2, 1);\n    cursor: text; }\n    [dir=\"rtl\"] .mdc-textfield .mdc-textfield__label,\n    .mdc-textfield[dir=\"rtl\"] .mdc-textfield__label {\n      right: 0;\n      left: auto;\n      transform-origin: right top; }\n    .mdc-textfield--theme-dark .mdc-textfield__label,\n    .mdc-theme--dark .mdc-textfield__label {\n      color: rgba(255, 255, 255, 0.5);\n      color: var(--mdc-theme-text-hint-on-dark, rgba(255, 255, 255, 0.5)); }\n    .mdc-textfield__label--float-above {\n      transform: translateY(-100%) scale(0.75, 0.75);\n      cursor: auto; }\n\n.mdc-textfield__input:-webkit-autofill + .mdc-textfield__label {\n  transform: translateY(-100%) scale(0.75, 0.75);\n  cursor: auto; }\n\n.mdc-textfield--upgraded:not(.mdc-textfield--fullwidth) {\n  display: inline-flex;\n  position: relative;\n  box-sizing: border-box;\n  align-items: flex-end;\n  margin-top: 16px; }\n  .mdc-textfield--upgraded:not(.mdc-textfield--fullwidth):not(.mdc-textfield--multiline) {\n    height: 48px; }\n    .mdc-textfield--upgraded:not(.mdc-textfield--fullwidth):not(.mdc-textfield--multiline)::after {\n      position: absolute;\n      bottom: 0;\n      left: 0;\n      width: 100%;\n      height: 1px;\n      transform: translateY(50%) scaleY(1);\n      transform-origin: center bottom;\n      transition: background-color 180ms cubic-bezier(0.4, 0, 0.2, 1), transform 180ms cubic-bezier(0.4, 0, 0.2, 1);\n      background-color: rgba(0, 0, 0, 0.12);\n      content: \"\"; }\n      .mdc-textfield--theme-dark .mdc-textfield--upgraded:not(.mdc-textfield--fullwidth):not(.mdc-textfield--multiline)::after,\n      .mdc-theme--dark .mdc-textfield--upgraded:not(.mdc-textfield--fullwidth):not(.mdc-textfield--multiline)::after {\n        background-color: rgba(255, 255, 255, 0.12); }\n  .mdc-textfield--upgraded:not(.mdc-textfield--fullwidth) .mdc-textfield__label {\n    pointer-events: none; }\n\n.mdc-textfield--focused.mdc-textfield--upgraded:not(.mdc-textfield--fullwidth):not(.mdc-textfield--multiline)::after {\n  background-color: #3f51b5;\n  background-color: var(--mdc-theme-primary, #3f51b5);\n  transform: translateY(100%) scaleY(2);\n  transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1); }\n  .mdc-textfield--theme-dark.mdc-textfield--focused.mdc-textfield--upgraded:not(.mdc-textfield--fullwidth):not(.mdc-textfield--multiline)::after,\n  .mdc-theme--dark .mdc-textfield--focused.mdc-textfield--upgraded:not(.mdc-textfield--fullwidth):not(.mdc-textfield--multiline)::after {\n    background-color: #3f51b5;\n    background-color: var(--mdc-theme-primary, #3f51b5);\n    transform: translateY(100%) scaleY(2);\n    transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1); }\n\n.mdc-textfield--focused .mdc-textfield__label {\n  color: #3f51b5;\n  color: var(--mdc-theme-primary, #3f51b5); }\n  .mdc-textfield--theme-dark .mdc-textfield--focused .mdc-textfield__label,\n  .mdc-theme--dark .mdc-textfield--focused .mdc-textfield__label {\n    color: #3f51b5;\n    color: var(--mdc-theme-primary, #3f51b5); }\n\n.mdc-textfield--dense {\n  margin-top: 12px;\n  margin-bottom: 4px;\n  font-size: .813rem; }\n  .mdc-textfield--dense .mdc-textfield__label--float-above {\n    transform: translateY(calc(-100% - 2px)) scale(0.923, 0.923); }\n\n.mdc-textfield--invalid:not(.mdc-textfield--focused)::after {\n  background-color: #d50000; }\n\n.mdc-textfield--invalid:not(.mdc-textfield--focused) .mdc-textfield__label {\n  color: #d50000; }\n\n.mdc-textfield--theme-dark.mdc-textfield--invalid:not(.mdc-textfield--focused)::after,\n.mdc-theme--dark .mdc-textfield--invalid:not(.mdc-textfield--focused)::after {\n  background-color: #ff6e6e; }\n\n.mdc-textfield--theme-dark.mdc-textfield--invalid:not(.mdc-textfield--focused) .mdc-textfield__label,\n.mdc-theme--dark .mdc-textfield--invalid:not(.mdc-textfield--focused) .mdc-textfield__label {\n  color: #ff6e6e; }\n\n.mdc-textfield--disabled {\n  border-bottom: 1px dotted rgba(35, 31, 32, 0.26); }\n  .mdc-textfield--disabled::after {\n    display: none; }\n  .mdc-textfield--disabled .mdc-textfield__input {\n    padding-bottom: 7px; }\n  .mdc-textfield--theme-dark.mdc-textfield--disabled,\n  .mdc-theme--dark .mdc-textfield--disabled {\n    border-bottom: 1px dotted rgba(255, 255, 255, 0.3); }\n  .mdc-textfield--disabled .mdc-textfield__input,\n  .mdc-textfield--disabled .mdc-textfield__label,\n  .mdc-textfield--disabled + .mdc-textfield-helptext {\n    color: rgba(0, 0, 0, 0.38);\n    color: var(--mdc-theme-text-disabled-on-light, rgba(0, 0, 0, 0.38)); }\n  .mdc-textfield--theme-dark .mdc-textfield--disabled .mdc-textfield__input,\n  .mdc-theme--dark .mdc-textfield--disabled .mdc-textfield__input, .mdc-textfield--theme-dark\n  .mdc-textfield--disabled .mdc-textfield__label,\n  .mdc-theme--dark\n  .mdc-textfield--disabled .mdc-textfield__label {\n    color: rgba(255, 255, 255, 0.5);\n    color: var(--mdc-theme-text-disabled-on-dark, rgba(255, 255, 255, 0.5)); }\n  .mdc-textfield--theme-dark.mdc-textfield--disabled + .mdc-textfield-helptext,\n  .mdc-theme--dark .mdc-textfield--disabled + .mdc-textfield-helptext {\n    color: rgba(255, 255, 255, 0.5);\n    color: var(--mdc-theme-text-disabled-on-dark, rgba(255, 255, 255, 0.5)); }\n  .mdc-textfield--disabled .mdc-textfield__label {\n    bottom: 7px;\n    cursor: default; }\n\n.mdc-textfield__input:required + .mdc-textfield__label::after {\n  margin-left: 1px;\n  content: \"*\"; }\n  .mdc-textfield--focused .mdc-textfield__input:required + .mdc-textfield__label::after {\n    color: #d50000; }\n  .mdc-textfield--focused .mdc-textfield--theme-dark .mdc-textfield__input:required + .mdc-textfield__label::after, .mdc-textfield--focused\n  .mdc-theme--dark .mdc-textfield__input:required + .mdc-textfield__label::after {\n    color: #ff6e6e; }\n\n.mdc-textfield--multiline {\n  display: flex;\n  height: initial;\n  transition: none; }\n  .mdc-textfield--multiline::after {\n    content: initial; }\n  .mdc-textfield--multiline .mdc-textfield__input {\n    padding: 4px;\n    transition: border-color 180ms cubic-bezier(0.4, 0, 0.2, 1);\n    border: 1px solid rgba(0, 0, 0, 0.12);\n    border-radius: 2px; }\n    .mdc-textfield--theme-dark .mdc-textfield--multiline .mdc-textfield__input,\n    .mdc-theme--dark .mdc-textfield--multiline .mdc-textfield__input {\n      border-color: rgba(255, 255, 255, 0.12); }\n    .mdc-textfield--multiline .mdc-textfield__input:focus {\n      border-color: #3f51b5;\n      border-color: var(--mdc-theme-primary, #3f51b5); }\n    .mdc-textfield--multiline .mdc-textfield__input:invalid:not(:focus) {\n      border-color: #d50000; }\n    .mdc-textfield--theme-dark .mdc-textfield--multiline .mdc-textfield__input:invalid:not(:focus),\n    .mdc-theme--dark .mdc-textfield--multiline .mdc-textfield__input:invalid:not(:focus) {\n      border-color: #ff6e6e; }\n  .mdc-textfield--multiline .mdc-textfield__label {\n    top: 6px;\n    bottom: initial;\n    left: 4px; }\n    [dir=\"rtl\"] .mdc-textfield--multiline .mdc-textfield--multiline .mdc-textfield__label,\n    .mdc-textfield--multiline[dir=\"rtl\"] .mdc-textfield--multiline .mdc-textfield__label {\n      right: 4px;\n      left: auto; }\n    .mdc-textfield--multiline .mdc-textfield__label--float-above {\n      transform: translateY(calc(-100% - 6px)) scale(0.923, 0.923); }\n  .mdc-textfield--multiline.mdc-textfield--disabled {\n    border-bottom: none; }\n    .mdc-textfield--multiline.mdc-textfield--disabled .mdc-textfield__input {\n      border: 1px dotted rgba(35, 31, 32, 0.26); }\n      .mdc-textfield--theme-dark .mdc-textfield--multiline.mdc-textfield--disabled .mdc-textfield__input,\n      .mdc-theme--dark .mdc-textfield--multiline.mdc-textfield--disabled .mdc-textfield__input {\n        border-color: rgba(255, 255, 255, 0.3); }\n\n.mdc-textfield--fullwidth {\n  display: block;\n  width: 100%;\n  box-sizing: border-box;\n  margin: 0;\n  border: none;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n  outline: none; }\n  .mdc-textfield--fullwidth:not(.mdc-textfield--multiline) {\n    height: 56px; }\n  .mdc-textfield--fullwidth.mdc-textfield--multiline {\n    padding: 20px 0 0; }\n  .mdc-textfield--fullwidth.mdc-textfield--dense:not(.mdc-textfield--multiline) {\n    height: 48px; }\n  .mdc-textfield--fullwidth.mdc-textfield--dense.mdc-textfield--multiline {\n    padding: 16px 0 0; }\n  .mdc-textfield--fullwidth.mdc-textfield--disabled, .mdc-textfield--fullwidth.mdc-textfield--disabled.mdc-textfield--multiline {\n    border-bottom: 1px dotted rgba(0, 0, 0, 0.12); }\n  .mdc-textfield--fullwidth--theme-dark,\n  .mdc-theme--dark .mdc-textfield--fullwidth {\n    border-bottom: 1px solid rgba(255, 255, 255, 0.12); }\n    .mdc-textfield--fullwidth--theme-dark.mdc-textfield--disabled, .mdc-textfield--fullwidth--theme-dark.mdc-textfield--disabled.mdc-textfield--multiline,\n    .mdc-theme--dark .mdc-textfield--fullwidth.mdc-textfield--disabled,\n    .mdc-theme--dark .mdc-textfield--fullwidth.mdc-textfield--disabled.mdc-textfield--multiline {\n      border-bottom: 1px dotted rgba(255, 255, 255, 0.12); }\n  .mdc-textfield--fullwidth .mdc-textfield__input {\n    width: 100%;\n    height: 100%;\n    padding: 0;\n    resize: none;\n    border: none !important; }\n\n.mdc-textfield:not(.mdc-textfield--upgraded):not(.mdc-textfield--multiline) .mdc-textfield__input {\n  transition: border-bottom-color 180ms cubic-bezier(0.4, 0, 0.2, 1);\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12); }\n\n.mdc-textfield:not(.mdc-textfield--upgraded) .mdc-textfield__input:focus {\n  border-color: #3f51b5;\n  border-color: var(--mdc-theme-primary, #3f51b5); }\n\n.mdc-textfield:not(.mdc-textfield--upgraded) .mdc-textfield__input:disabled {\n  color: rgba(0, 0, 0, 0.38);\n  color: var(--mdc-theme-text-disabled-on-light, rgba(0, 0, 0, 0.38));\n  border-style: dotted;\n  border-color: rgba(35, 31, 32, 0.26); }\n\n.mdc-textfield:not(.mdc-textfield--upgraded) .mdc-textfield__input:invalid:not(:focus) {\n  border-color: #d50000; }\n\n.mdc-textfield--theme-dark:not(.mdc-textfield--upgraded) .mdc-textfield__input:not(:focus),\n.mdc-theme--dark .mdc-textfield:not(.mdc-textfield--upgraded) .mdc-textfield__input:not(:focus) {\n  border-color: rgba(255, 255, 255, 0.12); }\n\n.mdc-textfield--theme-dark:not(.mdc-textfield--upgraded) .mdc-textfield__input:disabled,\n.mdc-theme--dark .mdc-textfield:not(.mdc-textfield--upgraded) .mdc-textfield__input:disabled {\n  color: rgba(255, 255, 255, 0.5);\n  color: var(--mdc-theme-text-disabled-on-dark, rgba(255, 255, 255, 0.5));\n  border-color: rgba(255, 255, 255, 0.3); }\n\n.mdc-textfield--theme-dark:not(.mdc-textfield--upgraded) .mdc-textfield__input:invalid:not(:focus),\n.mdc-theme--dark .mdc-textfield:not(.mdc-textfield--upgraded) .mdc-textfield__input:invalid:not(:focus) {\n  border-color: #ff6e6e; }\n\n.mdc-textfield-helptext {\n  color: rgba(0, 0, 0, 0.38);\n  color: var(--mdc-theme-text-hint-on-light, rgba(0, 0, 0, 0.38));\n  margin: 0;\n  transition: opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);\n  font-size: .75rem;\n  opacity: 0;\n  will-change: opacity; }\n  .mdc-textfield-helptext--theme-dark,\n  .mdc-theme--dark .mdc-textfield-helptext {\n    color: rgba(255, 255, 255, 0.5);\n    color: var(--mdc-theme-text-hint-on-dark, rgba(255, 255, 255, 0.5)); }\n  .mdc-textfield + .mdc-textfield-helptext {\n    margin-bottom: 8px; }\n  .mdc-textfield--dense + .mdc-textfield-helptext {\n    margin-bottom: 4px; }\n  .mdc-textfield--focused + .mdc-textfield-helptext:not(.mdc-textfield-helptext--validation-msg) {\n    opacity: 1; }\n\n.mdc-textfield-helptext--persistent {\n  transition: none;\n  opacity: 1;\n  will-change: initial; }\n\n.mdc-textfield--invalid + .mdc-textfield-helptext--validation-msg {\n  color: #d50000;\n  opacity: 1; }\n\n.mdc-textfield--theme-dark.mdc-textfield--invalid + .mdc-textfield-helptext--validation-msg,\n.mdc-theme--dark .mdc-textfield--invalid + .mdc-textfield-helptext--validation-msg {\n  color: #ff6e6e; }\n\n.mdc-form-field > .mdc-textfield + label {\n  align-self: flex-start; }\n\n/*\n  Precomputed linear color channel values, for use in contrast calculations.\n  See https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests\n\n  Algorithm, for c in 0 to 255:\n  f(c) {\n    c = c / 255;\n    return c < 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);\n  }\n\n  This lookup table is needed since there is no `pow` in SASS.\n*/\n/**\n * Calculate the luminance for a color.\n * See https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests\n */\n/**\n * Calculate the contrast ratio between two colors.\n * See https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests\n */\n/**\n * Determine whether to use dark or light text on top of given color.\n * Returns \"dark\" for dark text and \"light\" for light text.\n */\n/*\n  Main theme colors.\n  If you're a user customizing your color scheme in SASS, these are probably the only variables you need to change.\n*/\n/* Indigo 500 */\n/* Pink A200 */\n/* White */\n/* Which set of text colors to use for each main theme color (light or dark) */\n/* Text colors according to light vs dark and text type */\n/* Primary text colors for each of the theme colors */\n/**\n * Applies the correct theme color style to the specified property.\n * $property is typically color or background-color, but can be any CSS property that accepts color values.\n * $style should be one of the map keys in $mdc-theme-property-values (_variables.scss).\n */\n/**\n * Creates a rule to be used in MDC-Web components for dark theming, and applies the provided contents.\n * Should provide the $root-selector option if applied to anything other than the root selector.\n * When used with a modifier class, provide a second argument of `true` for the $compound parameter\n * to specify that this should be attached as a compound class.\n *\n * Usage example:\n *\n * ```scss\n * .mdc-foo {\n *   color: black;\n *\n *   @include mdc-theme-dark {\n *     color: white;\n *   }\n *\n *   &__bar {\n *     background: black;\n *\n *     @include mdc-theme-dark(\".mdc-foo\") {\n *       background: white;\n *     }\n *   }\n * }\n *\n * .mdc-foo--disabled {\n *   opacity: .38;\n *\n *   @include mdc-theme-dark(\".mdc-foo\", true) {\n *     opacity: .5;\n *   }\n * }\n * ```\n */\n:root {\n  --mdc-theme-primary: #3f51b5;\n  --mdc-theme-accent: #ff4081;\n  --mdc-theme-background: #fff;\n  --mdc-theme-text-primary-on-primary: white;\n  --mdc-theme-text-secondary-on-primary: rgba(255, 255, 255, 0.7);\n  --mdc-theme-text-hint-on-primary: rgba(255, 255, 255, 0.5);\n  --mdc-theme-text-disabled-on-primary: rgba(255, 255, 255, 0.5);\n  --mdc-theme-text-icon-on-primary: rgba(255, 255, 255, 0.5);\n  --mdc-theme-text-primary-on-accent: white;\n  --mdc-theme-text-secondary-on-accent: rgba(255, 255, 255, 0.7);\n  --mdc-theme-text-hint-on-accent: rgba(255, 255, 255, 0.5);\n  --mdc-theme-text-disabled-on-accent: rgba(255, 255, 255, 0.5);\n  --mdc-theme-text-icon-on-accent: rgba(255, 255, 255, 0.5);\n  --mdc-theme-text-primary-on-background: rgba(0, 0, 0, 0.87);\n  --mdc-theme-text-secondary-on-background: rgba(0, 0, 0, 0.54);\n  --mdc-theme-text-hint-on-background: rgba(0, 0, 0, 0.38);\n  --mdc-theme-text-disabled-on-background: rgba(0, 0, 0, 0.38);\n  --mdc-theme-text-icon-on-background: rgba(0, 0, 0, 0.38);\n  --mdc-theme-text-primary-on-light: rgba(0, 0, 0, 0.87);\n  --mdc-theme-text-secondary-on-light: rgba(0, 0, 0, 0.54);\n  --mdc-theme-text-hint-on-light: rgba(0, 0, 0, 0.38);\n  --mdc-theme-text-disabled-on-light: rgba(0, 0, 0, 0.38);\n  --mdc-theme-text-icon-on-light: rgba(0, 0, 0, 0.38);\n  --mdc-theme-text-primary-on-dark: white;\n  --mdc-theme-text-secondary-on-dark: rgba(255, 255, 255, 0.7);\n  --mdc-theme-text-hint-on-dark: rgba(255, 255, 255, 0.5);\n  --mdc-theme-text-disabled-on-dark: rgba(255, 255, 255, 0.5);\n  --mdc-theme-text-icon-on-dark: rgba(255, 255, 255, 0.5); }\n\n/* Special case, so that .mdc-theme--background changes background color, not text color. */\n.mdc-theme--background {\n  background-color: #fff;\n  background-color: var(--mdc-theme-background, #fff); }\n\n.mdc-theme--primary {\n  color: #3f51b5 !important;\n  color: var(--mdc-theme-primary, #3f51b5) !important; }\n\n.mdc-theme--accent {\n  color: #ff4081 !important;\n  color: var(--mdc-theme-accent, #ff4081) !important; }\n\n.mdc-theme--text-primary-on-primary {\n  color: white !important;\n  color: var(--mdc-theme-text-primary-on-primary, white) !important; }\n\n.mdc-theme--text-secondary-on-primary {\n  color: rgba(255, 255, 255, 0.7) !important;\n  color: var(--mdc-theme-text-secondary-on-primary, rgba(255, 255, 255, 0.7)) !important; }\n\n.mdc-theme--text-hint-on-primary {\n  color: rgba(255, 255, 255, 0.5) !important;\n  color: var(--mdc-theme-text-hint-on-primary, rgba(255, 255, 255, 0.5)) !important; }\n\n.mdc-theme--text-disabled-on-primary {\n  color: rgba(255, 255, 255, 0.5) !important;\n  color: var(--mdc-theme-text-disabled-on-primary, rgba(255, 255, 255, 0.5)) !important; }\n\n.mdc-theme--text-icon-on-primary {\n  color: rgba(255, 255, 255, 0.5) !important;\n  color: var(--mdc-theme-text-icon-on-primary, rgba(255, 255, 255, 0.5)) !important; }\n\n.mdc-theme--text-primary-on-accent {\n  color: white !important;\n  color: var(--mdc-theme-text-primary-on-accent, white) !important; }\n\n.mdc-theme--text-secondary-on-accent {\n  color: rgba(255, 255, 255, 0.7) !important;\n  color: var(--mdc-theme-text-secondary-on-accent, rgba(255, 255, 255, 0.7)) !important; }\n\n.mdc-theme--text-hint-on-accent {\n  color: rgba(255, 255, 255, 0.5) !important;\n  color: var(--mdc-theme-text-hint-on-accent, rgba(255, 255, 255, 0.5)) !important; }\n\n.mdc-theme--text-disabled-on-accent {\n  color: rgba(255, 255, 255, 0.5) !important;\n  color: var(--mdc-theme-text-disabled-on-accent, rgba(255, 255, 255, 0.5)) !important; }\n\n.mdc-theme--text-icon-on-accent {\n  color: rgba(255, 255, 255, 0.5) !important;\n  color: var(--mdc-theme-text-icon-on-accent, rgba(255, 255, 255, 0.5)) !important; }\n\n.mdc-theme--text-primary-on-background {\n  color: rgba(0, 0, 0, 0.87) !important;\n  color: var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87)) !important; }\n\n.mdc-theme--text-secondary-on-background {\n  color: rgba(0, 0, 0, 0.54) !important;\n  color: var(--mdc-theme-text-secondary-on-background, rgba(0, 0, 0, 0.54)) !important; }\n\n.mdc-theme--text-hint-on-background {\n  color: rgba(0, 0, 0, 0.38) !important;\n  color: var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.38)) !important; }\n\n.mdc-theme--text-disabled-on-background {\n  color: rgba(0, 0, 0, 0.38) !important;\n  color: var(--mdc-theme-text-disabled-on-background, rgba(0, 0, 0, 0.38)) !important; }\n\n.mdc-theme--text-icon-on-background {\n  color: rgba(0, 0, 0, 0.38) !important;\n  color: var(--mdc-theme-text-icon-on-background, rgba(0, 0, 0, 0.38)) !important; }\n\n.mdc-theme--text-primary-on-light {\n  color: rgba(0, 0, 0, 0.87) !important;\n  color: var(--mdc-theme-text-primary-on-light, rgba(0, 0, 0, 0.87)) !important; }\n\n.mdc-theme--text-secondary-on-light {\n  color: rgba(0, 0, 0, 0.54) !important;\n  color: var(--mdc-theme-text-secondary-on-light, rgba(0, 0, 0, 0.54)) !important; }\n\n.mdc-theme--text-hint-on-light {\n  color: rgba(0, 0, 0, 0.38) !important;\n  color: var(--mdc-theme-text-hint-on-light, rgba(0, 0, 0, 0.38)) !important; }\n\n.mdc-theme--text-disabled-on-light {\n  color: rgba(0, 0, 0, 0.38) !important;\n  color: var(--mdc-theme-text-disabled-on-light, rgba(0, 0, 0, 0.38)) !important; }\n\n.mdc-theme--text-icon-on-light {\n  color: rgba(0, 0, 0, 0.38) !important;\n  color: var(--mdc-theme-text-icon-on-light, rgba(0, 0, 0, 0.38)) !important; }\n\n.mdc-theme--text-primary-on-dark {\n  color: white !important;\n  color: var(--mdc-theme-text-primary-on-dark, white) !important; }\n\n.mdc-theme--text-secondary-on-dark {\n  color: rgba(255, 255, 255, 0.7) !important;\n  color: var(--mdc-theme-text-secondary-on-dark, rgba(255, 255, 255, 0.7)) !important; }\n\n.mdc-theme--text-hint-on-dark {\n  color: rgba(255, 255, 255, 0.5) !important;\n  color: var(--mdc-theme-text-hint-on-dark, rgba(255, 255, 255, 0.5)) !important; }\n\n.mdc-theme--text-disabled-on-dark {\n  color: rgba(255, 255, 255, 0.5) !important;\n  color: var(--mdc-theme-text-disabled-on-dark, rgba(255, 255, 255, 0.5)) !important; }\n\n.mdc-theme--text-icon-on-dark {\n  color: rgba(255, 255, 255, 0.5) !important;\n  color: var(--mdc-theme-text-icon-on-dark, rgba(255, 255, 255, 0.5)) !important; }\n\n/* CSS rules for using primary and accent as background colors. */\n.mdc-theme--primary-bg {\n  background-color: #3f51b5 !important;\n  background-color: var(--mdc-theme-primary, #3f51b5) !important; }\n\n.mdc-theme--accent-bg {\n  background-color: #ff4081 !important;\n  background-color: var(--mdc-theme-accent, #ff4081) !important; }\n\n/**\n * The css property used for elevation. In most cases this should not be changed. It is exposed\n * as a variable for abstraction / easy use when needing to reference the property directly, for\n * example in a `will-change` rule.\n */\n/**\n * The default duration value for elevation transitions.\n */\n/**\n * The default easing value for elevation transitions.\n */\n/**\n * Applies the correct css rules to an element to give it the elevation specified by $z-value.\n * The $z-value must be between 0 and 24.\n */\n/**\n * Returns a string that can be used as the value for a `transition` property for elevation.\n * Calling this function directly is useful in situations where a component needs to transition\n * more than one property.\n *\n * ```scss\n * .foo {\n *   transition: mdc-elevation-transition-rule(), opacity 100ms ease;\n *   will-change: $mdc-elevation-property, opacity;\n * }\n * ```\n */\n/**\n * Applies the correct css rules needed to have an element transition between elevations.\n * This mixin should be applied to elements whose elevation values will change depending on their\n * context (e.g. when active or disabled).\n */\n/**\n * Creates a rule that will be applied when an MDC-Web component is within the context of an RTL layout.\n *\n * Usage Example:\n * ```scss\n * .mdc-foo {\n *   position: absolute;\n *   left: 0;\n *\n *   @include mdc-rtl {\n *     left: auto;\n *     right: 0;\n *   }\n *\n *   &__bar {\n *     margin-left: 4px;\n *     @include mdc-rtl(\".mdc-foo\") {\n *       margin-left: auto;\n *       margin-right: 4px;\n *     }\n *   }\n * }\n *\n * .mdc-foo--mod {\n *   padding-left: 4px;\n *\n *   @include mdc-rtl {\n *     padding-left: auto;\n *     padding-right: 4px;\n *   }\n * }\n * ```\n *\n * Note that this works by checking for [dir=\"rtl\"] on an ancestor element. While this will work\n * in most cases, it will in some cases lead to false negatives, e.g.\n *\n * ```html\n * <html dir=\"rtl\">\n *   <!-- ... -->\n *   <div dir=\"ltr\">\n *     <div class=\"mdc-foo\">Styled incorrectly as RTL!</div>\n *   </div>\n * </html>\n * ```\n *\n * In the future, selectors such as :dir (http://mdn.io/:dir) will help us mitigate this.\n */\n/**\n * Takes a base box-model property - e.g. margin / border / padding - along with a default\n * direction and value, and emits rules which apply the value to the\n * \"<base-property>-<default-direction>\" property by default, but flips the direction\n * when within an RTL context.\n *\n * For example:\n *\n * ```scss\n * .mdc-foo {\n *   @include mdc-rtl-reflexive-box(margin, left, 8px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-left: 8px;\n *\n *   @include mdc-rtl {\n *     margin-right: 8px;\n *     margin-left: 0;\n *   }\n * }\n * ```\n * whereas:\n *\n * ```scss\n * .mdc-foo {\n *   @include mdc-rtl-reflexive-box(margin, right, 8px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-right: 8px;\n *\n *   @include mdc-rtl {\n *     margin-right: 0;\n *     margin-left: 8px;\n *   }\n * }\n * ```\n *\n * You can also pass a 4th optional $root-selector argument which will be forwarded to `mdc-rtl`,\n * e.g. `@include mdc-rtl-reflexive-box-property(margin, left, 8px, \".mdc-component\")`.\n *\n * Note that this function will always zero out the original value in an RTL context. If you're\n * trying to flip the values, use mdc-rtl-reflexive-property().\n */\n/**\n * Takes a base property and emits rules that assign <base-property>-left to <left-value> and\n * <base-property>-right to <right-value> in a LTR context, and vice versa in a RTL context.\n * For example:\n *\n * ```scss\n * .mdc-foo {\n *   @include mdc-rtl-reflexive-property(margin, auto, 12px);\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n * .mdc-foo {\n *   margin-left: auto;\n *   margin-right: 12px;\n *\n *   @include mdc-rtl {\n *     margin-left: 12px;\n *     margin-right: auto;\n *   }\n * }\n * ```\n *\n * A 4th optional $root-selector argument can be given, which will be passed to `mdc-rtl`.\n */\n/**\n * Takes an argument specifying a horizontal position property (either \"left\" or \"right\") as well\n * as a value, and applies that value to the specified position in a LTR context, and flips it in a\n * RTL context. For example:\n *\n * ```scss\n * .mdc-foo {\n *   @include mdc-rtl-reflexive-position(left, 0);\n *   position: absolute;\n * }\n * ```\n * is equivalent to:\n *\n * ```scss\n *  .mdc-foo {\n *    position: absolute;\n *    left: 0;\n *    right: initial;\n *\n *    @include mdc-rtl {\n *      right: 0;\n *      left: initial;\n *    }\n *  }\n * ```\n * An optional third $root-selector argument may also be given, which is passed to `mdc-rtl`.\n */\n/*\n  Precomputed linear color channel values, for use in contrast calculations.\n  See https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests\n\n  Algorithm, for c in 0 to 255:\n  f(c) {\n    c = c / 255;\n    return c < 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);\n  }\n\n  This lookup table is needed since there is no `pow` in SASS.\n*/\n/**\n * Calculate the luminance for a color.\n * See https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests\n */\n/**\n * Calculate the contrast ratio between two colors.\n * See https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests\n */\n/**\n * Determine whether to use dark or light text on top of given color.\n * Returns \"dark\" for dark text and \"light\" for light text.\n */\n/*\n  Main theme colors.\n  If you're a user customizing your color scheme in SASS, these are probably the only variables you need to change.\n*/\n/* Indigo 500 */\n/* Pink A200 */\n/* White */\n/* Which set of text colors to use for each main theme color (light or dark) */\n/* Text colors according to light vs dark and text type */\n/* Primary text colors for each of the theme colors */\n/**\n * Applies the correct theme color style to the specified property.\n * $property is typically color or background-color, but can be any CSS property that accepts color values.\n * $style should be one of the map keys in $mdc-theme-property-values (_variables.scss).\n */\n/**\n * Creates a rule to be used in MDC-Web components for dark theming, and applies the provided contents.\n * Should provide the $root-selector option if applied to anything other than the root selector.\n * When used with a modifier class, provide a second argument of `true` for the $compound parameter\n * to specify that this should be attached as a compound class.\n *\n * Usage example:\n *\n * ```scss\n * .mdc-foo {\n *   color: black;\n *\n *   @include mdc-theme-dark {\n *     color: white;\n *   }\n *\n *   &__bar {\n *     background: black;\n *\n *     @include mdc-theme-dark(\".mdc-foo\") {\n *       background: white;\n *     }\n *   }\n * }\n *\n * .mdc-foo--disabled {\n *   opacity: .38;\n *\n *   @include mdc-theme-dark(\".mdc-foo\", true) {\n *     opacity: .5;\n *   }\n * }\n * ```\n */\n/* TODO(sgomes): Figure out what to do about desktop font sizes. */\n/* TODO(sgomes): Figure out what to do about i18n and i18n font sizes. */\n.mdc-toolbar {\n  display: flex;\n  position: relative;\n  flex-direction: column;\n  justify-content: space-between;\n  width: 100%;\n  box-sizing: border-box;\n  background-color: #3f51b5;\n  background-color: var(--mdc-theme-primary, #3f51b5);\n  color: white;\n  color: var(--mdc-theme-text-primary-on-primary, white); }\n  .mdc-toolbar__row {\n    display: flex;\n    position: relative;\n    width: 100%;\n    height: 64px;\n    padding: 20px 28px;\n    box-sizing: border-box; }\n    @media (max-width: 599px) {\n      .mdc-toolbar__row {\n        height: 56px;\n        padding: 16px; } }\n  .mdc-toolbar__section {\n    display: inline-flex;\n    flex: 1;\n    align-items: flex-start;\n    justify-content: center;\n    z-index: 1;\n    overflow: hidden; }\n    .mdc-toolbar__section--align-start {\n      justify-content: flex-start;\n      order: -1; }\n    .mdc-toolbar__section--align-end {\n      justify-content: flex-end;\n      order: 1; }\n  .mdc-toolbar__title {\n    font-family: Roboto, sans-serif;\n    -moz-osx-font-smoothing: grayscale;\n    -webkit-font-smoothing: antialiased;\n    font-size: 1.25rem;\n    font-weight: 500;\n    letter-spacing: 0.02em;\n    line-height: 2rem;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    margin: 0;\n    line-height: 1.5rem; }\n\n.mdc-toolbar--fixed {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 1;\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12); }\n\n.mdc-toolbar-fixed-adjust {\n  margin-top: 64px; }\n  @media (max-width: 599px) {\n    .mdc-toolbar-fixed-adjust {\n      margin-top: 56px; } }\n\n.mdc-toolbar__section--shrink-to-fit {\n  flex: none; }\n\n/* TODO(sgomes): Figure out what to do about desktop font sizes. */\n/* TODO(sgomes): Figure out what to do about i18n and i18n font sizes. */\n/* TODO(sgomes): Figure out what to do about desktop font sizes. */\n/* TODO(sgomes): Figure out what to do about i18n and i18n font sizes. */\n.mdc-typography {\n  font-family: Roboto, sans-serif;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased; }\n\n.mdc-typography--display4 {\n  font-family: Roboto, sans-serif;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-size: 7rem;\n  font-weight: 300;\n  letter-spacing: -0.04em;\n  line-height: 7rem; }\n\n.mdc-typography--adjust-margin.mdc-typography--display4 {\n  margin: -1rem 0 3.5rem -0.085em; }\n\n.mdc-typography--display3 {\n  font-family: Roboto, sans-serif;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-size: 3.5rem;\n  font-weight: 400;\n  letter-spacing: -0.02em;\n  line-height: 3.5rem; }\n\n.mdc-typography--adjust-margin.mdc-typography--display3 {\n  margin: -8px 0 64px -0.07em; }\n\n.mdc-typography--display2 {\n  font-family: Roboto, sans-serif;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-size: 2.813rem;\n  font-weight: 400;\n  letter-spacing: normal;\n  line-height: 3rem; }\n\n.mdc-typography--adjust-margin.mdc-typography--display2 {\n  margin: -0.5rem 0 4rem -0.07em; }\n\n.mdc-typography--display1 {\n  font-family: Roboto, sans-serif;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-size: 2.125rem;\n  font-weight: 400;\n  letter-spacing: normal;\n  line-height: 2.5rem; }\n\n.mdc-typography--adjust-margin.mdc-typography--display1 {\n  margin: -0.5rem 0 4rem -0.07em; }\n\n.mdc-typography--headline {\n  font-family: Roboto, sans-serif;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-size: 1.5rem;\n  font-weight: 400;\n  letter-spacing: normal;\n  line-height: 2rem; }\n\n.mdc-typography--adjust-margin.mdc-typography--headline {\n  margin: -0.5rem 0 1rem -0.06em; }\n\n.mdc-typography--title {\n  font-family: Roboto, sans-serif;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-size: 1.25rem;\n  font-weight: 500;\n  letter-spacing: 0.02em;\n  line-height: 2rem; }\n\n.mdc-typography--adjust-margin.mdc-typography--title {\n  margin: -0.5rem 0 1rem -0.05em; }\n\n.mdc-typography--subheading2 {\n  font-family: Roboto, sans-serif;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-size: 1rem;\n  font-weight: 400;\n  letter-spacing: 0.04em;\n  line-height: 1.75rem; }\n\n.mdc-typography--adjust-margin.mdc-typography--subheading2 {\n  margin: -0.5rem 0 1rem -0.06em; }\n\n.mdc-typography--subheading1 {\n  font-family: Roboto, sans-serif;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-size: 0.938rem;\n  font-weight: 400;\n  letter-spacing: 0.04em;\n  line-height: 1.5rem; }\n\n.mdc-typography--adjust-margin.mdc-typography--subheading1 {\n  margin: -0.313rem 0 0.813rem -0.06em; }\n\n.mdc-typography--body2 {\n  font-family: Roboto, sans-serif;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-size: 0.875rem;\n  font-weight: 500;\n  letter-spacing: 0.04em;\n  line-height: 1.5rem; }\n\n.mdc-typography--adjust-margin.mdc-typography--body2 {\n  margin: -0.25rem 0 0.75rem 0; }\n\n.mdc-typography--body1 {\n  font-family: Roboto, sans-serif;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-size: 0.875rem;\n  font-weight: 400;\n  letter-spacing: 0.04em;\n  line-height: 1.25rem; }\n\n.mdc-typography--adjust-margin.mdc-typography--body1 {\n  margin: -0.25rem 0 0.75rem 0; }\n\n.mdc-typography--caption {\n  font-family: Roboto, sans-serif;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-size: 0.75rem;\n  font-weight: 400;\n  letter-spacing: 0.08em;\n  line-height: 1.25rem; }\n\n.mdc-typography--adjust-margin.mdc-typography--caption {\n  margin: -0.5rem 0 1rem -0.04em; }\n", ""]);

// exports


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		// Test for IE <= 9 as proposed by Browserhacks
		// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
		// Tests for existence of standard globals is to allow style-loader 
		// to operate correctly into non-standard environments
		// @see https://github.com/webpack-contrib/style-loader/issues/177
		return window && document && document.all && !window.atob;
	}),
	getElement = (function(fn) {
		var memo = {};
		return function(selector) {
			if (typeof memo[selector] === "undefined") {
				memo[selector] = fn.call(this, selector);
			}
			return memo[selector]
		};
	})(function (styleTarget) {
		return document.querySelector(styleTarget)
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [],
	fixUrls = __webpack_require__(62);

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (typeof options.insertInto === "undefined") options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var styleTarget = getElement(options.insertInto)
	if (!styleTarget) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			styleTarget.insertBefore(styleElement, styleTarget.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			styleTarget.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			styleTarget.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		styleTarget.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	options.attrs.type = "text/css";

	attachTagAttrs(styleElement, options.attrs);
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	attachTagAttrs(linkElement, options.attrs);
	insertStyleElement(options, linkElement);
	return linkElement;
}

function attachTagAttrs(element, attrs) {
	Object.keys(attrs).forEach(function (key) {
		element.setAttribute(key, attrs[key]);
	});
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement, options);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/* If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
	and there is no publicPath defined then lets turn convertToAbsoluteUrls
	on by default.  Otherwise default to the convertToAbsoluteUrls option
	directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls){
		css = fixUrls(css);
	}

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ })
/******/ ]);