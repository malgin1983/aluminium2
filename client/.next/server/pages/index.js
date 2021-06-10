module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app/hooks.ts":
/*!**************************!*\
  !*** ./src/app/hooks.ts ***!
  \**************************/
/*! exports provided: useForm, useInterval, useAppDispatch, useAppSelector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useForm", function() { return useForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useInterval", function() { return useInterval; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAppDispatch", function() { return useAppDispatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAppSelector", function() { return useAppSelector; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const useForm = defaultValues => handler => async event => {
  event.preventDefault();
  event.persist();
  const form = event.target;
  const elements = Array.from(form.elements);
  const data = elements.filter(element => element.hasAttribute('name')).reduce((object, element) => _objectSpread(_objectSpread({}, object), {}, {
    [`${element.getAttribute('name')}`]: element.value
  }), defaultValues);
  await handler(data);
  form.reset();
}; // https://overreacted.io/making-setinterval-declarative-with-react-hooks/

const useInterval = (callback, delay) => {
  const savedCallback = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    savedCallback.current = callback;
  }, [callback]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const handler = (...args) => {
      var _savedCallback$curren;

      return (_savedCallback$curren = savedCallback.current) === null || _savedCallback$curren === void 0 ? void 0 : _savedCallback$curren.call(savedCallback, ...args);
    };

    if (delay !== null) {
      const id = setInterval(handler, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}; // Use throughout your app instead of plain `useDispatch` and `useSelector`

const useAppDispatch = () => Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
const useAppSelector = react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"];

/***/ }),

/***/ "./src/features/counter/Counter.module.css":
/*!*************************************************!*\
  !*** ./src/features/counter/Counter.module.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"row": "Counter_row__2owYy",
	"value": "Counter_value__19Ztg",
	"button": "Counter_button__BtJ_w",
	"textbox": "Counter_textbox__1lols",
	"asyncButton": "Counter_asyncButton__1bB7D Counter_button__BtJ_w"
};


/***/ }),

/***/ "./src/features/counter/Counter.tsx":
/*!******************************************!*\
  !*** ./src/features/counter/Counter.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app/hooks */ "./src/app/hooks.ts");
/* harmony import */ var _counterSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./counterSlice */ "./src/features/counter/counterSlice.ts");
/* harmony import */ var _Counter_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Counter.module.css */ "./src/features/counter/Counter.module.css");
/* harmony import */ var _Counter_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Counter_module_css__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "D:\\Projects\\next-nest-postgrees-docker\\client\\src\\features\\counter\\Counter.tsx";




function Counter() {
  const dispatch = Object(_app_hooks__WEBPACK_IMPORTED_MODULE_1__["useAppDispatch"])();
  const count = Object(_app_hooks__WEBPACK_IMPORTED_MODULE_1__["useAppSelector"])(_counterSlice__WEBPACK_IMPORTED_MODULE_2__["selectCount"]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _Counter_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.row,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        className: _Counter_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.button,
        "aria-label": "Decrement value",
        onClick: () => dispatch(Object(_counterSlice__WEBPACK_IMPORTED_MODULE_2__["decrement"])()),
        children: "-"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: _Counter_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.value,
        children: count
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        className: _Counter_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.button,
        "aria-label": "Increment value",
        onClick: () => dispatch(Object(_counterSlice__WEBPACK_IMPORTED_MODULE_2__["increment"])()),
        children: "+"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Counter);

/***/ }),

/***/ "./src/features/counter/counterAPI.ts":
/*!********************************************!*\
  !*** ./src/features/counter/counterAPI.ts ***!
  \********************************************/
/*! exports provided: fetchCount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchCount", function() { return fetchCount; });
async function fetchCount(amount = 1) {
  const response = await fetch('/api/counter', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      amount
    })
  });
  const result = await response.json();
  return result;
}

/***/ }),

/***/ "./src/features/counter/counterSlice.ts":
/*!**********************************************!*\
  !*** ./src/features/counter/counterSlice.ts ***!
  \**********************************************/
/*! exports provided: incrementAsync, counterSlice, increment, decrement, incrementByAmount, selectCount, incrementIfOdd, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "incrementAsync", function() { return incrementAsync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "counterSlice", function() { return counterSlice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "increment", function() { return increment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decrement", function() { return decrement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "incrementByAmount", function() { return incrementByAmount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCount", function() { return selectCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "incrementIfOdd", function() { return incrementIfOdd; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _counterAPI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./counterAPI */ "./src/features/counter/counterAPI.ts");


const initialState = {
  value: 0,
  status: 'idle'
}; // The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.

const incrementAsync = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createAsyncThunk"])('counter/fetchCount', async amount => {
  const response = await Object(_counterAPI__WEBPACK_IMPORTED_MODULE_1__["fetchCount"])(amount); // The value we return becomes the `fulfilled` action payload

  return response.data;
});
const counterSlice = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSlice"])({
  name: 'counter',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    increment: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    }
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: builder => {
    builder.addCase(incrementAsync.pending, state => {
      state.status = 'loading';
    }).addCase(incrementAsync.fulfilled, (state, action) => {
      state.status = 'idle';
      state.value += action.payload;
    });
  }
});
const {
  increment,
  decrement,
  incrementByAmount
} = counterSlice.actions; // The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`

const selectCount = state => state.counter.value; // We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.

const incrementIfOdd = amount => (dispatch, getState) => {
  const currentValue = selectCount(getState());

  if (currentValue % 2 === 1) {
    dispatch(incrementByAmount(amount));
  }
};
/* harmony default export */ __webpack_exports__["default"] = (counterSlice.reducer);

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _features_counter_Counter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../features/counter/Counter */ "./src/features/counter/Counter.tsx");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Home.module.css */ "./src/styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "D:\\Projects\\next-nest-postgrees-docker\\client\\src\\pages\\index.tsx";





const IndexPage = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.container,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "Redux Toolkit"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.header,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: "/logo.svg",
        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.logo,
        alt: "logo"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_features_counter_Counter__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        variant: "primary",
        href: "https://nextjs.org/docs",
        children: "BUTTON BOOTSTRAP"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 12
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (IndexPage);

/***/ }),

/***/ "./src/styles/Home.module.css":
/*!************************************!*\
  !*** ./src/styles/Home.module.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "Home_container__sDexO",
	"logo": "Home_logo__qxZJS",
	"header": "Home_header__1runh",
	"link": "Home_link__3d5W4",
	"logo-float": "Home_logo-float__1uLqM"
};


/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-bootstrap":
/*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9ob29rcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZmVhdHVyZXMvY291bnRlci9Db3VudGVyLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZlYXR1cmVzL2NvdW50ZXIvQ291bnRlci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZlYXR1cmVzL2NvdW50ZXIvY291bnRlckFQSS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZmVhdHVyZXMvY291bnRlci9jb3VudGVyU2xpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL0hvbWUubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAcmVkdXhqcy90b29sa2l0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbInVzZUZvcm0iLCJkZWZhdWx0VmFsdWVzIiwiaGFuZGxlciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJwZXJzaXN0IiwiZm9ybSIsInRhcmdldCIsImVsZW1lbnRzIiwiQXJyYXkiLCJmcm9tIiwiZGF0YSIsImZpbHRlciIsImVsZW1lbnQiLCJoYXNBdHRyaWJ1dGUiLCJyZWR1Y2UiLCJvYmplY3QiLCJnZXRBdHRyaWJ1dGUiLCJ2YWx1ZSIsInJlc2V0IiwidXNlSW50ZXJ2YWwiLCJjYWxsYmFjayIsImRlbGF5Iiwic2F2ZWRDYWxsYmFjayIsInVzZVJlZiIsInVzZUVmZmVjdCIsImN1cnJlbnQiLCJhcmdzIiwiaWQiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJ1c2VBcHBEaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlQXBwU2VsZWN0b3IiLCJ1c2VTZWxlY3RvciIsIkNvdW50ZXIiLCJkaXNwYXRjaCIsImNvdW50Iiwic2VsZWN0Q291bnQiLCJzdHlsZXMiLCJyb3ciLCJidXR0b24iLCJkZWNyZW1lbnQiLCJpbmNyZW1lbnQiLCJmZXRjaENvdW50IiwiYW1vdW50IiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInJlc3VsdCIsImpzb24iLCJpbml0aWFsU3RhdGUiLCJzdGF0dXMiLCJpbmNyZW1lbnRBc3luYyIsImNyZWF0ZUFzeW5jVGh1bmsiLCJjb3VudGVyU2xpY2UiLCJjcmVhdGVTbGljZSIsIm5hbWUiLCJyZWR1Y2VycyIsInN0YXRlIiwiaW5jcmVtZW50QnlBbW91bnQiLCJhY3Rpb24iLCJwYXlsb2FkIiwiZXh0cmFSZWR1Y2VycyIsImJ1aWxkZXIiLCJhZGRDYXNlIiwicGVuZGluZyIsImZ1bGZpbGxlZCIsImFjdGlvbnMiLCJjb3VudGVyIiwiaW5jcmVtZW50SWZPZGQiLCJnZXRTdGF0ZSIsImN1cnJlbnRWYWx1ZSIsInJlZHVjZXIiLCJJbmRleFBhZ2UiLCJjb250YWluZXIiLCJoZWFkZXIiLCJsb2dvIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlE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QTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBZUQsQ0FoQkQ7O0FBa0JlSCx3RUFBZixFOzs7Ozs7Ozs7OztBQ3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNQQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSw0Qzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrRCIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3BhZ2VzL2luZGV4LnRzeFwiKTtcbiIsImltcG9ydCB0eXBlIHsgQ2hhbmdlRXZlbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBUeXBlZFVzZVNlbGVjdG9ySG9vaywgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbmltcG9ydCB0eXBlIHsgQXBwRGlzcGF0Y2gsIEFwcFN0YXRlIH0gZnJvbSAnLi9zdG9yZSdcblxuZXhwb3J0IGNvbnN0IHVzZUZvcm0gPSA8VENvbnRlbnQ+KGRlZmF1bHRWYWx1ZXM6IFRDb250ZW50KSA9PiAoXG4gIGhhbmRsZXI6IChjb250ZW50OiBUQ29udGVudCkgPT4gdm9pZFxuKSA9PiBhc3luYyAoZXZlbnQ6IENoYW5nZUV2ZW50PEhUTUxGb3JtRWxlbWVudD4pID0+IHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICBldmVudC5wZXJzaXN0KClcblxuICBjb25zdCBmb3JtID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxGb3JtRWxlbWVudFxuICBjb25zdCBlbGVtZW50cyA9IEFycmF5LmZyb20oZm9ybS5lbGVtZW50cykgYXMgSFRNTElucHV0RWxlbWVudFtdXG4gIGNvbnN0IGRhdGEgPSBlbGVtZW50c1xuICAgIC5maWx0ZXIoKGVsZW1lbnQpID0+IGVsZW1lbnQuaGFzQXR0cmlidXRlKCduYW1lJykpXG4gICAgLnJlZHVjZShcbiAgICAgIChvYmplY3QsIGVsZW1lbnQpID0+ICh7XG4gICAgICAgIC4uLm9iamVjdCxcbiAgICAgICAgW2Ake2VsZW1lbnQuZ2V0QXR0cmlidXRlKCduYW1lJyl9YF06IGVsZW1lbnQudmFsdWUsXG4gICAgICB9KSxcbiAgICAgIGRlZmF1bHRWYWx1ZXNcbiAgICApXG4gIGF3YWl0IGhhbmRsZXIoZGF0YSlcbiAgZm9ybS5yZXNldCgpXG59XG5cbi8vIGh0dHBzOi8vb3ZlcnJlYWN0ZWQuaW8vbWFraW5nLXNldGludGVydmFsLWRlY2xhcmF0aXZlLXdpdGgtcmVhY3QtaG9va3MvXG5leHBvcnQgY29uc3QgdXNlSW50ZXJ2YWwgPSAoY2FsbGJhY2s6IEZ1bmN0aW9uLCBkZWxheTogbnVtYmVyKSA9PiB7XG4gIGNvbnN0IHNhdmVkQ2FsbGJhY2sgPSB1c2VSZWY8RnVuY3Rpb24+KClcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzYXZlZENhbGxiYWNrLmN1cnJlbnQgPSBjYWxsYmFja1xuICB9LCBbY2FsbGJhY2tdKVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGhhbmRsZXIgPSAoLi4uYXJnczogYW55KSA9PiBzYXZlZENhbGxiYWNrLmN1cnJlbnQ/LiguLi5hcmdzKVxuXG4gICAgaWYgKGRlbGF5ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBpZCA9IHNldEludGVydmFsKGhhbmRsZXIsIGRlbGF5KVxuICAgICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaWQpXG4gICAgfVxuICB9LCBbZGVsYXldKVxufVxuXG4vLyBVc2UgdGhyb3VnaG91dCB5b3VyIGFwcCBpbnN0ZWFkIG9mIHBsYWluIGB1c2VEaXNwYXRjaGAgYW5kIGB1c2VTZWxlY3RvcmBcbmV4cG9ydCBjb25zdCB1c2VBcHBEaXNwYXRjaCA9ICgpID0+IHVzZURpc3BhdGNoPEFwcERpc3BhdGNoPigpXG5cbmV4cG9ydCBjb25zdCB1c2VBcHBTZWxlY3RvcjogVHlwZWRVc2VTZWxlY3Rvckhvb2s8QXBwU3RhdGU+ID0gdXNlU2VsZWN0b3JcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInJvd1wiOiBcIkNvdW50ZXJfcm93X18yb3dZeVwiLFxuXHRcInZhbHVlXCI6IFwiQ291bnRlcl92YWx1ZV9fMTladGdcIixcblx0XCJidXR0b25cIjogXCJDb3VudGVyX2J1dHRvbl9fQnRKX3dcIixcblx0XCJ0ZXh0Ym94XCI6IFwiQ291bnRlcl90ZXh0Ym94X18xbG9sc1wiLFxuXHRcImFzeW5jQnV0dG9uXCI6IFwiQ291bnRlcl9hc3luY0J1dHRvbl9fMWJCN0QgQ291bnRlcl9idXR0b25fX0J0Sl93XCJcbn07XG4iLCJpbXBvcnQgeyB1c2VBcHBTZWxlY3RvciwgdXNlQXBwRGlzcGF0Y2ggfSBmcm9tICcuLi8uLi9hcHAvaG9va3MnXG5pbXBvcnQge1xuICBkZWNyZW1lbnQsXG4gIGluY3JlbWVudCxcbiAgc2VsZWN0Q291bnQsXG59IGZyb20gJy4vY291bnRlclNsaWNlJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0NvdW50ZXIubW9kdWxlLmNzcydcblxuZnVuY3Rpb24gQ291bnRlcigpIHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VBcHBEaXNwYXRjaCgpXG4gIGNvbnN0IGNvdW50ID0gdXNlQXBwU2VsZWN0b3Ioc2VsZWN0Q291bnQpXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yb3d9PlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufVxuICAgICAgICAgIGFyaWEtbGFiZWw9XCJEZWNyZW1lbnQgdmFsdWVcIlxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGRpc3BhdGNoKGRlY3JlbWVudCgpKX1cbiAgICAgICAgPlxuICAgICAgICAgIC1cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnZhbHVlfT57Y291bnR9PC9zcGFuPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufVxuICAgICAgICAgIGFyaWEtbGFiZWw9XCJJbmNyZW1lbnQgdmFsdWVcIlxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGRpc3BhdGNoKGluY3JlbWVudCgpKX1cbiAgICAgICAgPlxuICAgICAgICAgICtcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb3VudGVyXG4iLCJleHBvcnQgYXN5bmMgZnVuY3Rpb24gZmV0Y2hDb3VudChhbW91bnQgPSAxKTogUHJvbWlzZTx7IGRhdGE6IG51bWJlciB9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvY291bnRlcicsIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBhbW91bnQgfSksXG4gIH0pXG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuXG4gIHJldHVybiByZXN1bHRcbn1cbiIsImltcG9ydCB7IGNyZWF0ZUFzeW5jVGh1bmssIGNyZWF0ZVNsaWNlLCBQYXlsb2FkQWN0aW9uIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCdcblxuaW1wb3J0IHR5cGUgeyBBcHBTdGF0ZSwgQXBwVGh1bmsgfSBmcm9tICcuLi8uLi9hcHAvc3RvcmUnXG5pbXBvcnQgeyBmZXRjaENvdW50IH0gZnJvbSAnLi9jb3VudGVyQVBJJ1xuXG5leHBvcnQgaW50ZXJmYWNlIENvdW50ZXJTdGF0ZSB7XG4gIHZhbHVlOiBudW1iZXJcbiAgc3RhdHVzOiAnaWRsZScgfCAnbG9hZGluZycgfCAnZmFpbGVkJ1xufVxuXG5jb25zdCBpbml0aWFsU3RhdGU6IENvdW50ZXJTdGF0ZSA9IHtcbiAgdmFsdWU6IDAsXG4gIHN0YXR1czogJ2lkbGUnLFxufVxuXG4vLyBUaGUgZnVuY3Rpb24gYmVsb3cgaXMgY2FsbGVkIGEgdGh1bmsgYW5kIGFsbG93cyB1cyB0byBwZXJmb3JtIGFzeW5jIGxvZ2ljLiBJdFxuLy8gY2FuIGJlIGRpc3BhdGNoZWQgbGlrZSBhIHJlZ3VsYXIgYWN0aW9uOiBgZGlzcGF0Y2goaW5jcmVtZW50QXN5bmMoMTApKWAuIFRoaXNcbi8vIHdpbGwgY2FsbCB0aGUgdGh1bmsgd2l0aCB0aGUgYGRpc3BhdGNoYCBmdW5jdGlvbiBhcyB0aGUgZmlyc3QgYXJndW1lbnQuIEFzeW5jXG4vLyBjb2RlIGNhbiB0aGVuIGJlIGV4ZWN1dGVkIGFuZCBvdGhlciBhY3Rpb25zIGNhbiBiZSBkaXNwYXRjaGVkLiBUaHVua3MgYXJlXG4vLyB0eXBpY2FsbHkgdXNlZCB0byBtYWtlIGFzeW5jIHJlcXVlc3RzLlxuZXhwb3J0IGNvbnN0IGluY3JlbWVudEFzeW5jID0gY3JlYXRlQXN5bmNUaHVuayhcbiAgJ2NvdW50ZXIvZmV0Y2hDb3VudCcsXG4gIGFzeW5jIChhbW91bnQ6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2hDb3VudChhbW91bnQpXG4gICAgLy8gVGhlIHZhbHVlIHdlIHJldHVybiBiZWNvbWVzIHRoZSBgZnVsZmlsbGVkYCBhY3Rpb24gcGF5bG9hZFxuICAgIHJldHVybiByZXNwb25zZS5kYXRhXG4gIH1cbilcblxuZXhwb3J0IGNvbnN0IGNvdW50ZXJTbGljZSA9IGNyZWF0ZVNsaWNlKHtcbiAgbmFtZTogJ2NvdW50ZXInLFxuICBpbml0aWFsU3RhdGUsXG4gIC8vIFRoZSBgcmVkdWNlcnNgIGZpZWxkIGxldHMgdXMgZGVmaW5lIHJlZHVjZXJzIGFuZCBnZW5lcmF0ZSBhc3NvY2lhdGVkIGFjdGlvbnNcbiAgcmVkdWNlcnM6IHtcbiAgICBpbmNyZW1lbnQ6IChzdGF0ZSkgPT4ge1xuICAgICAgLy8gUmVkdXggVG9vbGtpdCBhbGxvd3MgdXMgdG8gd3JpdGUgXCJtdXRhdGluZ1wiIGxvZ2ljIGluIHJlZHVjZXJzLiBJdFxuICAgICAgLy8gZG9lc24ndCBhY3R1YWxseSBtdXRhdGUgdGhlIHN0YXRlIGJlY2F1c2UgaXQgdXNlcyB0aGUgSW1tZXIgbGlicmFyeSxcbiAgICAgIC8vIHdoaWNoIGRldGVjdHMgY2hhbmdlcyB0byBhIFwiZHJhZnQgc3RhdGVcIiBhbmQgcHJvZHVjZXMgYSBicmFuZCBuZXdcbiAgICAgIC8vIGltbXV0YWJsZSBzdGF0ZSBiYXNlZCBvZmYgdGhvc2UgY2hhbmdlc1xuICAgICAgc3RhdGUudmFsdWUgKz0gMVxuICAgIH0sXG4gICAgZGVjcmVtZW50OiAoc3RhdGUpID0+IHtcbiAgICAgIHN0YXRlLnZhbHVlIC09IDFcbiAgICB9LFxuICAgIC8vIFVzZSB0aGUgUGF5bG9hZEFjdGlvbiB0eXBlIHRvIGRlY2xhcmUgdGhlIGNvbnRlbnRzIG9mIGBhY3Rpb24ucGF5bG9hZGBcbiAgICBpbmNyZW1lbnRCeUFtb3VudDogKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248bnVtYmVyPikgPT4ge1xuICAgICAgc3RhdGUudmFsdWUgKz0gYWN0aW9uLnBheWxvYWRcbiAgICB9LFxuICB9LFxuICAvLyBUaGUgYGV4dHJhUmVkdWNlcnNgIGZpZWxkIGxldHMgdGhlIHNsaWNlIGhhbmRsZSBhY3Rpb25zIGRlZmluZWQgZWxzZXdoZXJlLFxuICAvLyBpbmNsdWRpbmcgYWN0aW9ucyBnZW5lcmF0ZWQgYnkgY3JlYXRlQXN5bmNUaHVuayBvciBpbiBvdGhlciBzbGljZXMuXG4gIGV4dHJhUmVkdWNlcnM6IChidWlsZGVyKSA9PiB7XG4gICAgYnVpbGRlclxuICAgICAgLmFkZENhc2UoaW5jcmVtZW50QXN5bmMucGVuZGluZywgKHN0YXRlKSA9PiB7XG4gICAgICAgIHN0YXRlLnN0YXR1cyA9ICdsb2FkaW5nJ1xuICAgICAgfSlcbiAgICAgIC5hZGRDYXNlKGluY3JlbWVudEFzeW5jLmZ1bGZpbGxlZCwgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgICAgc3RhdGUuc3RhdHVzID0gJ2lkbGUnXG4gICAgICAgIHN0YXRlLnZhbHVlICs9IGFjdGlvbi5wYXlsb2FkXG4gICAgICB9KVxuICB9LFxufSlcblxuZXhwb3J0IGNvbnN0IHsgaW5jcmVtZW50LCBkZWNyZW1lbnQsIGluY3JlbWVudEJ5QW1vdW50IH0gPSBjb3VudGVyU2xpY2UuYWN0aW9uc1xuXG4vLyBUaGUgZnVuY3Rpb24gYmVsb3cgaXMgY2FsbGVkIGEgc2VsZWN0b3IgYW5kIGFsbG93cyB1cyB0byBzZWxlY3QgYSB2YWx1ZSBmcm9tXG4vLyB0aGUgc3RhdGUuIFNlbGVjdG9ycyBjYW4gYWxzbyBiZSBkZWZpbmVkIGlubGluZSB3aGVyZSB0aGV5J3JlIHVzZWQgaW5zdGVhZCBvZlxuLy8gaW4gdGhlIHNsaWNlIGZpbGUuIEZvciBleGFtcGxlOiBgdXNlU2VsZWN0b3IoKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLmNvdW50ZXIudmFsdWUpYFxuZXhwb3J0IGNvbnN0IHNlbGVjdENvdW50ID0gKHN0YXRlOiBBcHBTdGF0ZSkgPT4gc3RhdGUuY291bnRlci52YWx1ZVxuXG4vLyBXZSBjYW4gYWxzbyB3cml0ZSB0aHVua3MgYnkgaGFuZCwgd2hpY2ggbWF5IGNvbnRhaW4gYm90aCBzeW5jIGFuZCBhc3luYyBsb2dpYy5cbi8vIEhlcmUncyBhbiBleGFtcGxlIG9mIGNvbmRpdGlvbmFsbHkgZGlzcGF0Y2hpbmcgYWN0aW9ucyBiYXNlZCBvbiBjdXJyZW50IHN0YXRlLlxuZXhwb3J0IGNvbnN0IGluY3JlbWVudElmT2RkID0gKGFtb3VudDogbnVtYmVyKTogQXBwVGh1bmsgPT4gKFxuICBkaXNwYXRjaCxcbiAgZ2V0U3RhdGVcbikgPT4ge1xuICBjb25zdCBjdXJyZW50VmFsdWUgPSBzZWxlY3RDb3VudChnZXRTdGF0ZSgpKVxuICBpZiAoY3VycmVudFZhbHVlICUgMiA9PT0gMSkge1xuICAgIGRpc3BhdGNoKGluY3JlbWVudEJ5QW1vdW50KGFtb3VudCkpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY291bnRlclNsaWNlLnJlZHVjZXJcbiIsImltcG9ydCB0eXBlIHsgTmV4dFBhZ2UgfSBmcm9tICduZXh0J1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuXG5pbXBvcnQgQ291bnRlciBmcm9tICcuLi9mZWF0dXJlcy9jb3VudGVyL0NvdW50ZXInXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXG5cbmNvbnN0IEluZGV4UGFnZTogTmV4dFBhZ2UgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5SZWR1eCBUb29sa2l0PC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPGhlYWRlciBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9PlxuICAgICAgICA8aW1nIHNyYz1cIi9sb2dvLnN2Z1wiIGNsYXNzTmFtZT17c3R5bGVzLmxvZ299IGFsdD1cImxvZ29cIiAvPlxuICAgICAgICA8Q291bnRlciAvPlxuICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5XCIgaHJlZj1cImh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzXCI+XG4gICAgICAgICAgICAgIEJVVFRPTiBCT09UU1RSQVBcbiAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L2hlYWRlcj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleFBhZ2VcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIkhvbWVfY29udGFpbmVyX19zRGV4T1wiLFxuXHRcImxvZ29cIjogXCJIb21lX2xvZ29fX3F4WkpTXCIsXG5cdFwiaGVhZGVyXCI6IFwiSG9tZV9oZWFkZXJfXzFydW5oXCIsXG5cdFwibGlua1wiOiBcIkhvbWVfbGlua19fM2Q1VzRcIixcblx0XCJsb2dvLWZsb2F0XCI6IFwiSG9tZV9sb2dvLWZsb2F0X18xdUxxTVwiXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHJlZHV4anMvdG9vbGtpdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYm9vdHN0cmFwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9