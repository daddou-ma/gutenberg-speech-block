(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["style-index"],{

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);

/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"index": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.js","style-index"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;

/***/ }),

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Edit; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _speech__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./speech */ "./src/speech.js");
/* harmony import */ var _language__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./language */ "./src/language.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./editor.scss */ "./src/editor.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_editor_scss__WEBPACK_IMPORTED_MODULE_7__);



/**
 * External dependencies
 */
// Not Yet

/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */




var speech = new _speech__WEBPACK_IMPORTED_MODULE_5__["default"]();
window.speech = speech;
function Edit(_ref) {
  var className = _ref.className,
      isSelected = _ref.isSelected,
      content = _ref.attributes.content,
      setAttributes = _ref.setAttributes;
  var richTextRef = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);

  var _useState = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useState"])(speech.recognizing),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      recognizing = _useState2[0],
      setRecognizing = _useState2[1];

  var _useState3 = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useState"])(document.documentElement.lang),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState3, 2),
      language = _useState4[0],
      setLanguage = _useState4[1];

  var onChangeContent = function onChangeContent(content) {
    setAttributes({
      content: content
    });
  };

  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    speech.recognition.lang = language;
    speech.onstart(function () {
      setRecognizing(true);
      console.log("Recognition Started");
    });
    speech.onend(function () {
      if (richTextRef.current) {
        setRecognizing(false);
        console.log("Recognition Stoped");
      }
    });
    window.addEventListener('blur', function () {
      return speech.stop();
    });
    richTextRef.current.addEventListener('click', function () {
      return speech.start();
    });
    speech.onerror(function () {
      if (richTextRef.current) {
        speech.restart();
        console.log("Recognition Error");
      }
    });
    speech.onresult(function (text) {
      console.log(text);
      var selection = document.getSelection();
      var range = selection.getRangeAt(0);

      if (typeof text !== 'string' || !richTextRef || !richTextRef.current.contains(range.startContainer)) {
        return;
      }

      var insertElement = range.startContainer.tagName === 'p' ? range.startContainer.childNodes[0] : range.startContainer;
      insertElement.insertData(range.startOffset, text);
      range.setStart(range.startContainer, range.startOffset + text.length);
    });
  }, []);
  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (recognizing) {
      speech.setLang(language);
    }
  }, [language]);
  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (isSelected) {
      speech.start();
    } else if (!isSelected) {
      speech.stop();
    }

    return function () {
      return speech.stop();
    };
  }, [isSelected]);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "".concat(className, " ").concat(recognizing ? 'recognizing' : '')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["InspectorControls"], {
    key: "inspector"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "speech-block-inspector"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["SelectControl"], {
    onChange: function onChange(lang) {
      return setLanguage(lang);
    },
    defaultValue: language,
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Select a Language'),
    options: _language__WEBPACK_IMPORTED_MODULE_6__["langageOptions"]
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"], {
    tagName: "p",
    onChange: onChangeContent,
    value: content,
    ref: richTextRef
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Icon"], {
    icon: "microphone",
    className: "speech-block-mic-icon ".concat(recognizing ? 'recognizing' : '')
  }));
}

/***/ }),

/***/ "./src/editor.scss":
/*!*************************!*\
  !*** ./src/editor.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/save.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_4__);
/**
 * External dependencies
 */
// Not Yet

/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */




Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__["registerBlockType"])('create-block/speech-block', {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Speech Block', 'speech-block'),
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Speech block written with ESNext standard and JSX support – build step required.', 'speech-block'),
  category: 'widgets',
  icon: 'microphone',
  supports: {
    html: false
  },
  attributes: {
    content: {
      type: 'array',
      source: 'children',
      selector: 'p'
    }
  },
  transforms: {
    from: [{
      type: 'block',
      blocks: ['core/paragraph'],
      transform: function transform(_ref) {
        var content = _ref.content;
        return Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__["createBlock"])('create-block/speech-block', {
          content: content
        });
      }
    }],
    to: [{
      type: 'block',
      blocks: ['core/paragraph'],
      transform: function transform(_ref2) {
        var content = _ref2.content;
        return Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__["createBlock"])('core/paragraph', {
          content: content
        });
      }
    }]
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ }),

/***/ "./src/language.js":
/*!*************************!*\
  !*** ./src/language.js ***!
  \*************************/
/*! exports provided: langageOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "langageOptions", function() { return langageOptions; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);

var langageOptions = [{
  label: "Afrikaans",
  value: "af-ZA"
}, {
  label: "Arabic",
  value: "ar-DZ"
}, {
  label: "Basque",
  value: "eu-ES"
}, {
  label: "Bulgarian",
  value: "bg-BG"
}, {
  label: "Catalan",
  value: "ca-ES"
}, {
  label: "Chinese ,darin",
  value: "cmn-Hans-CN"
}, {
  label: "Chinese ,tonese",
  value: "yue-Hant-HK"
}, {
  label: "Croatian",
  value: "hr_HR"
}, {
  label: "Czech",
  value: "cs-CZ"
}, {
  label: "Danish",
  value: "da-DK"
}, {
  label: "English",
  value: "en-US"
}, {
  label: "Farsi",
  value: "fa-IR"
}, {
  label: "French",
  value: "fr-FR"
}, {
  label: "Filipino",
  value: "fil-PH"
}, {
  label: "Galician",
  value: "gl-ES"
}, {
  label: "German",
  value: "de-DE"
}, {
  label: "Greek",
  value: "el-GR"
}, {
  label: "Finnish",
  value: "fi-FI"
}, {
  label: "Hebrew",
  value: "he-IL"
}, {
  label: "Hindi",
  value: "hi-IN"
}, {
  label: "Hungarian",
  value: "hu-HU"
}, {
  label: "Indonesian",
  value: "id-ID"
}, {
  label: "Icelandic",
  value: "is-IS"
}, {
  label: "Italian",
  value: "it-IT"
}, {
  label: "Japanese",
  value: "ja-JP"
}, {
  label: "Korean",
  value: "ko-KR"
}, {
  label: "Lithuanian",
  value: "lt-LT"
}, {
  label: "Malaysian",
  value: "ms-MY"
}, {
  label: "Dutch",
  value: "nl-NL"
}, {
  label: "Norwegian",
  value: "nb-NO"
}, {
  label: "Polish",
  value: "pl-PL"
}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({
  label: "Portuguese",
  value: "pt-BR"
}, "value", "pt-PT"), {
  label: "Romanian",
  value: "ro-RO"
}, {
  label: "Russian",
  value: "ru-RU"
}, {
  label: "Serbian",
  value: "sr-RS"
}, {
  label: "Slovak",
  value: "sk-SK"
}, {
  label: "Slovenian",
  value: "sl-SI"
}, {
  label: "Spanish",
  value: "es-ES"
}, {
  label: "Swedish",
  value: "sv-SE"
}, {
  label: "Thai",
  value: "th-TH"
}, {
  label: "Turkish",
  value: "tr-TR"
}, {
  label: "Ukrainian",
  value: "uk-UA"
}, {
  label: "Vietnamese",
  value: "vi-VN"
}, {
  label: "Zulu",
  value: "zu-ZA"
}];

/***/ }),

/***/ "./src/save.js":
/*!*********************!*\
  !*** ./src/save.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return save; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);


/**
 * External dependencies
 */
// Not Yet

/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */

function save(_ref) {
  var content = _ref.attributes.content;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, content);
}

/***/ }),

/***/ "./src/speech.js":
/*!***********************!*\
  !*** ./src/speech.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SpeechToText; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);


var SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;

var SpeechToText = /*#__PURE__*/function () {
  function SpeechToText() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, SpeechToText);

    this.recognizing = false;
    this.recognition = new SpeechRecognition();
    this.recognition.continuous = true;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(SpeechToText, [{
    key: "start",
    value: function start() {
      if (this.recognizing) {
        return;
      }

      this.recognizing = true;
      this.startListener();
      this.recognition.start();
    }
  }, {
    key: "stop",
    value: function stop() {
      if (!this.recognizing) {
        return;
      }

      this.stopListener();
      this.recognition.stop();
    }
  }, {
    key: "restart",
    value: function restart() {
      var _this = this;

      this.stop();
      setTimeout(function () {
        return _this.start();
      }, 1000);
    }
  }, {
    key: "setLang",
    value: function setLang(lang) {
      this.recognition.lang = lang;
      this.restart();
    }
  }, {
    key: "startListener",
    value: function startListener() {
      var _this2 = this;

      this.recognition.onresult = function (_ref) {
        var results = _ref.results,
            resultIndex = _ref.resultIndex;

        if (!results || !_this2.recognizing) {
          return;
        }

        var alternatives = Array.from(results).slice(resultIndex).find(function (res) {
          return res.isFinal;
        });

        if (!alternatives) {
          return;
        }

        var _Array$from$reduce = Array.from(alternatives).reduce(function (cur, alt) {
          return alt.confidence > cur.confidence ? alt : cur;
        }, {
          confidence: 0
        }),
            transcript = _Array$from$reduce.transcript;

        _this2.onresultcallback(transcript);
      };
    }
  }, {
    key: "stopListener",
    value: function stopListener() {
      this.recognition.onresult = null;
    }
  }, {
    key: "onstart",
    value: function onstart(func) {
      var _this3 = this;

      this.recognition.onstart = function () {
        _this3.recognizing = true;
        func.apply(void 0, arguments);
      };
    }
  }, {
    key: "onend",
    value: function onend(func) {
      var _this4 = this;

      this.recognition.onend = function () {
        _this4.recognizing = false;
        func.apply(void 0, arguments);
      };

      ;
    }
  }, {
    key: "onresult",
    value: function onresult(func) {
      this.onresultcallback = func;
    }
  }, {
    key: "onspeechstart",
    value: function onspeechstart(func) {
      this.recognition.onspeechstart = func;
    }
  }, {
    key: "onspeechend",
    value: function onspeechend(func) {
      this.recognition.onspeechend = func;
    }
  }, {
    key: "onaudiostart",
    value: function onaudiostart(func) {
      this.recognition.onaudiostart = func;
    }
  }, {
    key: "onaudioend",
    value: function onaudioend(func) {
      this.recognition.onaudioend = func;
    }
  }, {
    key: "onsoundstart",
    value: function onsoundstart(func) {
      this.recognition.onsoundstart = func;
    }
  }, {
    key: "onsoundend",
    value: function onsoundend(func) {
      this.recognition.onsoundend = func;
    }
  }, {
    key: "onnomatch",
    value: function onnomatch(func) {
      this.recognition.onnomatch = func;
    }
  }, {
    key: "onerror",
    value: function onerror(func) {
      this.recognition.onerror = func;
    }
  }]);

  return SpeechToText;
}();



/***/ }),

/***/ "@wordpress/block-editor":
/*!**********************************************!*\
  !*** external {"this":["wp","blockEditor"]} ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["blockEditor"]; }());

/***/ }),

/***/ "@wordpress/blocks":
/*!*****************************************!*\
  !*** external {"this":["wp","blocks"]} ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["blocks"]; }());

/***/ }),

/***/ "@wordpress/components":
/*!*********************************************!*\
  !*** external {"this":["wp","components"]} ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["components"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ }),

/***/ "@wordpress/i18n":
/*!***************************************!*\
  !*** external {"this":["wp","i18n"]} ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["i18n"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map