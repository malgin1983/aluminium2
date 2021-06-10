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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app/store.ts":
/*!**************************!*\
  !*** ./src/app/store.ts ***!
  \**************************/
/*! exports provided: makeStore, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeStore", function() { return makeStore; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _features_counter_counterSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../features/counter/counterSlice */ "./src/features/counter/counterSlice.ts");


function makeStore() {
  return Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["configureStore"])({
    reducer: {
      counter: _features_counter_counterSlice__WEBPACK_IMPORTED_MODULE_1__["default"]
    }
  });
}
const store = makeStore();
/* harmony default export */ __webpack_exports__["default"] = (store);

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

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ "./src/styles/globals.css");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app/store */ "./src/app/store.ts");

var _jsxFileName = "D:\\Projects\\next-nest-postgrees-docker\\client\\src\\pages\\_app.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_redux__WEBPACK_IMPORTED_MODULE_2__["Provider"], {
    store: _app_store__WEBPACK_IMPORTED_MODULE_3__["default"],
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.tsx */"./src/pages/_app.tsx");


/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@reduxjs/toolkit");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9zdG9yZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZmVhdHVyZXMvY291bnRlci9jb3VudGVyQVBJLnRzIiwid2VicGFjazovLy8uL3NyYy9mZWF0dXJlcy9jb3VudGVyL2NvdW50ZXJTbGljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvX2FwcC50c3giLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHJlZHV4anMvdG9vbGtpdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsibWFrZVN0b3JlIiwiY29uZmlndXJlU3RvcmUiLCJyZWR1Y2VyIiwiY291bnRlciIsImNvdW50ZXJSZWR1Y2VyIiwic3RvcmUiLCJmZXRjaENvdW50IiwiYW1vdW50IiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInJlc3VsdCIsImpzb24iLCJpbml0aWFsU3RhdGUiLCJ2YWx1ZSIsInN0YXR1cyIsImluY3JlbWVudEFzeW5jIiwiY3JlYXRlQXN5bmNUaHVuayIsImRhdGEiLCJjb3VudGVyU2xpY2UiLCJjcmVhdGVTbGljZSIsIm5hbWUiLCJyZWR1Y2VycyIsImluY3JlbWVudCIsInN0YXRlIiwiZGVjcmVtZW50IiwiaW5jcmVtZW50QnlBbW91bnQiLCJhY3Rpb24iLCJwYXlsb2FkIiwiZXh0cmFSZWR1Y2VycyIsImJ1aWxkZXIiLCJhZGRDYXNlIiwicGVuZGluZyIsImZ1bGZpbGxlZCIsImFjdGlvbnMiLCJzZWxlY3RDb3VudCIsImluY3JlbWVudElmT2RkIiwiZGlzcGF0Y2giLCJnZXRTdGF0ZSIsImN1cnJlbnRWYWx1ZSIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRU8sU0FBU0EsU0FBVCxHQUFxQjtBQUMxQixTQUFPQyx1RUFBYyxDQUFDO0FBQ3BCQyxXQUFPLEVBQUU7QUFBRUMsYUFBTyxFQUFFQyxzRUFBY0E7QUFBekI7QUFEVyxHQUFELENBQXJCO0FBR0Q7QUFFRCxNQUFNQyxLQUFLLEdBQUdMLFNBQVMsRUFBdkI7QUFhZUssb0VBQWYsRTs7Ozs7Ozs7Ozs7O0FDdkJBO0FBQUE7QUFBTyxlQUFlQyxVQUFmLENBQTBCQyxNQUFNLEdBQUcsQ0FBbkMsRUFBaUU7QUFDdEUsUUFBTUMsUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FBQyxjQUFELEVBQWlCO0FBQzNDQyxVQUFNLEVBQUUsTUFEbUM7QUFFM0NDLFdBQU8sRUFBRTtBQUNQLHNCQUFnQjtBQURULEtBRmtDO0FBSzNDQyxRQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQUVQO0FBQUYsS0FBZjtBQUxxQyxHQUFqQixDQUE1QjtBQU9BLFFBQU1RLE1BQU0sR0FBRyxNQUFNUCxRQUFRLENBQUNRLElBQVQsRUFBckI7QUFFQSxTQUFPRCxNQUFQO0FBQ0QsQzs7Ozs7Ozs7Ozs7O0FDWEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFPQSxNQUFNRSxZQUEwQixHQUFHO0FBQ2pDQyxPQUFLLEVBQUUsQ0FEMEI7QUFFakNDLFFBQU0sRUFBRTtBQUZ5QixDQUFuQyxDLENBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxNQUFNQyxjQUFjLEdBQUdDLHlFQUFnQixDQUM1QyxvQkFENEMsRUFFNUMsTUFBT2QsTUFBUCxJQUEwQjtBQUN4QixRQUFNQyxRQUFRLEdBQUcsTUFBTUYsOERBQVUsQ0FBQ0MsTUFBRCxDQUFqQyxDQUR3QixDQUV4Qjs7QUFDQSxTQUFPQyxRQUFRLENBQUNjLElBQWhCO0FBQ0QsQ0FOMkMsQ0FBdkM7QUFTQSxNQUFNQyxZQUFZLEdBQUdDLG9FQUFXLENBQUM7QUFDdENDLE1BQUksRUFBRSxTQURnQztBQUV0Q1IsY0FGc0M7QUFHdEM7QUFDQVMsVUFBUSxFQUFFO0FBQ1JDLGFBQVMsRUFBR0MsS0FBRCxJQUFXO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0FBLFdBQUssQ0FBQ1YsS0FBTixJQUFlLENBQWY7QUFDRCxLQVBPO0FBUVJXLGFBQVMsRUFBR0QsS0FBRCxJQUFXO0FBQ3BCQSxXQUFLLENBQUNWLEtBQU4sSUFBZSxDQUFmO0FBQ0QsS0FWTztBQVdSO0FBQ0FZLHFCQUFpQixFQUFFLENBQUNGLEtBQUQsRUFBUUcsTUFBUixLQUEwQztBQUMzREgsV0FBSyxDQUFDVixLQUFOLElBQWVhLE1BQU0sQ0FBQ0MsT0FBdEI7QUFDRDtBQWRPLEdBSjRCO0FBb0J0QztBQUNBO0FBQ0FDLGVBQWEsRUFBR0MsT0FBRCxJQUFhO0FBQzFCQSxXQUFPLENBQ0pDLE9BREgsQ0FDV2YsY0FBYyxDQUFDZ0IsT0FEMUIsRUFDb0NSLEtBQUQsSUFBVztBQUMxQ0EsV0FBSyxDQUFDVCxNQUFOLEdBQWUsU0FBZjtBQUNELEtBSEgsRUFJR2dCLE9BSkgsQ0FJV2YsY0FBYyxDQUFDaUIsU0FKMUIsRUFJcUMsQ0FBQ1QsS0FBRCxFQUFRRyxNQUFSLEtBQW1CO0FBQ3BESCxXQUFLLENBQUNULE1BQU4sR0FBZSxNQUFmO0FBQ0FTLFdBQUssQ0FBQ1YsS0FBTixJQUFlYSxNQUFNLENBQUNDLE9BQXRCO0FBQ0QsS0FQSDtBQVFEO0FBL0JxQyxDQUFELENBQWhDO0FBa0NBLE1BQU07QUFBRUwsV0FBRjtBQUFhRSxXQUFiO0FBQXdCQztBQUF4QixJQUE4Q1AsWUFBWSxDQUFDZSxPQUFqRSxDLENBRVA7QUFDQTtBQUNBOztBQUNPLE1BQU1DLFdBQVcsR0FBSVgsS0FBRCxJQUFxQkEsS0FBSyxDQUFDekIsT0FBTixDQUFjZSxLQUF2RCxDLENBRVA7QUFDQTs7QUFDTyxNQUFNc0IsY0FBYyxHQUFJakMsTUFBRCxJQUE4QixDQUMxRGtDLFFBRDBELEVBRTFEQyxRQUYwRCxLQUd2RDtBQUNILFFBQU1DLFlBQVksR0FBR0osV0FBVyxDQUFDRyxRQUFRLEVBQVQsQ0FBaEM7O0FBQ0EsTUFBSUMsWUFBWSxHQUFHLENBQWYsS0FBcUIsQ0FBekIsRUFBNEI7QUFDMUJGLFlBQVEsQ0FBQ1gsaUJBQWlCLENBQUN2QixNQUFELENBQWxCLENBQVI7QUFDRDtBQUNGLENBUk07QUFVUWdCLDJFQUFZLENBQUNyQixPQUE1QixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUVBO0FBR0E7O0FBRUEsU0FBUzBDLEtBQVQsQ0FBZTtBQUFFQyxXQUFGO0FBQWFDO0FBQWIsQ0FBZixFQUFtRDtBQUNqRCxzQkFDRSxxRUFBQyxvREFBRDtBQUFVLFNBQUssRUFBRXpDLGtEQUFqQjtBQUFBLDJCQUNFLHFFQUFDLFNBQUQsb0JBQWV5QyxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFLRDs7QUFFY0Ysb0VBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZBLDZDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgeyBjb25maWd1cmVTdG9yZSwgVGh1bmtBY3Rpb24sIEFjdGlvbiB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnXG5cbmltcG9ydCBjb3VudGVyUmVkdWNlciBmcm9tICcuLi9mZWF0dXJlcy9jb3VudGVyL2NvdW50ZXJTbGljZSdcblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VTdG9yZSgpIHtcbiAgcmV0dXJuIGNvbmZpZ3VyZVN0b3JlKHtcbiAgICByZWR1Y2VyOiB7IGNvdW50ZXI6IGNvdW50ZXJSZWR1Y2VyIH0sXG4gIH0pXG59XG5cbmNvbnN0IHN0b3JlID0gbWFrZVN0b3JlKClcblxuZXhwb3J0IHR5cGUgQXBwU3RhdGUgPSBSZXR1cm5UeXBlPHR5cGVvZiBzdG9yZS5nZXRTdGF0ZT5cblxuZXhwb3J0IHR5cGUgQXBwRGlzcGF0Y2ggPSB0eXBlb2Ygc3RvcmUuZGlzcGF0Y2hcblxuZXhwb3J0IHR5cGUgQXBwVGh1bms8UmV0dXJuVHlwZSA9IHZvaWQ+ID0gVGh1bmtBY3Rpb248XG4gIFJldHVyblR5cGUsXG4gIEFwcFN0YXRlLFxuICB1bmtub3duLFxuICBBY3Rpb248c3RyaW5nPlxuPlxuXG5leHBvcnQgZGVmYXVsdCBzdG9yZVxuIiwiZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZldGNoQ291bnQoYW1vdW50ID0gMSk6IFByb21pc2U8eyBkYXRhOiBudW1iZXIgfT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL2NvdW50ZXInLCB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgYW1vdW50IH0pLFxuICB9KVxuICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKClcblxuICByZXR1cm4gcmVzdWx0XG59XG4iLCJpbXBvcnQgeyBjcmVhdGVBc3luY1RodW5rLCBjcmVhdGVTbGljZSwgUGF5bG9hZEFjdGlvbiB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnXG5cbmltcG9ydCB0eXBlIHsgQXBwU3RhdGUsIEFwcFRodW5rIH0gZnJvbSAnLi4vLi4vYXBwL3N0b3JlJ1xuaW1wb3J0IHsgZmV0Y2hDb3VudCB9IGZyb20gJy4vY291bnRlckFQSSdcblxuZXhwb3J0IGludGVyZmFjZSBDb3VudGVyU3RhdGUge1xuICB2YWx1ZTogbnVtYmVyXG4gIHN0YXR1czogJ2lkbGUnIHwgJ2xvYWRpbmcnIHwgJ2ZhaWxlZCdcbn1cblxuY29uc3QgaW5pdGlhbFN0YXRlOiBDb3VudGVyU3RhdGUgPSB7XG4gIHZhbHVlOiAwLFxuICBzdGF0dXM6ICdpZGxlJyxcbn1cblxuLy8gVGhlIGZ1bmN0aW9uIGJlbG93IGlzIGNhbGxlZCBhIHRodW5rIGFuZCBhbGxvd3MgdXMgdG8gcGVyZm9ybSBhc3luYyBsb2dpYy4gSXRcbi8vIGNhbiBiZSBkaXNwYXRjaGVkIGxpa2UgYSByZWd1bGFyIGFjdGlvbjogYGRpc3BhdGNoKGluY3JlbWVudEFzeW5jKDEwKSlgLiBUaGlzXG4vLyB3aWxsIGNhbGwgdGhlIHRodW5rIHdpdGggdGhlIGBkaXNwYXRjaGAgZnVuY3Rpb24gYXMgdGhlIGZpcnN0IGFyZ3VtZW50LiBBc3luY1xuLy8gY29kZSBjYW4gdGhlbiBiZSBleGVjdXRlZCBhbmQgb3RoZXIgYWN0aW9ucyBjYW4gYmUgZGlzcGF0Y2hlZC4gVGh1bmtzIGFyZVxuLy8gdHlwaWNhbGx5IHVzZWQgdG8gbWFrZSBhc3luYyByZXF1ZXN0cy5cbmV4cG9ydCBjb25zdCBpbmNyZW1lbnRBc3luYyA9IGNyZWF0ZUFzeW5jVGh1bmsoXG4gICdjb3VudGVyL2ZldGNoQ291bnQnLFxuICBhc3luYyAoYW1vdW50OiBudW1iZXIpID0+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoQ291bnQoYW1vdW50KVxuICAgIC8vIFRoZSB2YWx1ZSB3ZSByZXR1cm4gYmVjb21lcyB0aGUgYGZ1bGZpbGxlZGAgYWN0aW9uIHBheWxvYWRcbiAgICByZXR1cm4gcmVzcG9uc2UuZGF0YVxuICB9XG4pXG5cbmV4cG9ydCBjb25zdCBjb3VudGVyU2xpY2UgPSBjcmVhdGVTbGljZSh7XG4gIG5hbWU6ICdjb3VudGVyJyxcbiAgaW5pdGlhbFN0YXRlLFxuICAvLyBUaGUgYHJlZHVjZXJzYCBmaWVsZCBsZXRzIHVzIGRlZmluZSByZWR1Y2VycyBhbmQgZ2VuZXJhdGUgYXNzb2NpYXRlZCBhY3Rpb25zXG4gIHJlZHVjZXJzOiB7XG4gICAgaW5jcmVtZW50OiAoc3RhdGUpID0+IHtcbiAgICAgIC8vIFJlZHV4IFRvb2xraXQgYWxsb3dzIHVzIHRvIHdyaXRlIFwibXV0YXRpbmdcIiBsb2dpYyBpbiByZWR1Y2Vycy4gSXRcbiAgICAgIC8vIGRvZXNuJ3QgYWN0dWFsbHkgbXV0YXRlIHRoZSBzdGF0ZSBiZWNhdXNlIGl0IHVzZXMgdGhlIEltbWVyIGxpYnJhcnksXG4gICAgICAvLyB3aGljaCBkZXRlY3RzIGNoYW5nZXMgdG8gYSBcImRyYWZ0IHN0YXRlXCIgYW5kIHByb2R1Y2VzIGEgYnJhbmQgbmV3XG4gICAgICAvLyBpbW11dGFibGUgc3RhdGUgYmFzZWQgb2ZmIHRob3NlIGNoYW5nZXNcbiAgICAgIHN0YXRlLnZhbHVlICs9IDFcbiAgICB9LFxuICAgIGRlY3JlbWVudDogKHN0YXRlKSA9PiB7XG4gICAgICBzdGF0ZS52YWx1ZSAtPSAxXG4gICAgfSxcbiAgICAvLyBVc2UgdGhlIFBheWxvYWRBY3Rpb24gdHlwZSB0byBkZWNsYXJlIHRoZSBjb250ZW50cyBvZiBgYWN0aW9uLnBheWxvYWRgXG4gICAgaW5jcmVtZW50QnlBbW91bnQ6IChzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPG51bWJlcj4pID0+IHtcbiAgICAgIHN0YXRlLnZhbHVlICs9IGFjdGlvbi5wYXlsb2FkXG4gICAgfSxcbiAgfSxcbiAgLy8gVGhlIGBleHRyYVJlZHVjZXJzYCBmaWVsZCBsZXRzIHRoZSBzbGljZSBoYW5kbGUgYWN0aW9ucyBkZWZpbmVkIGVsc2V3aGVyZSxcbiAgLy8gaW5jbHVkaW5nIGFjdGlvbnMgZ2VuZXJhdGVkIGJ5IGNyZWF0ZUFzeW5jVGh1bmsgb3IgaW4gb3RoZXIgc2xpY2VzLlxuICBleHRyYVJlZHVjZXJzOiAoYnVpbGRlcikgPT4ge1xuICAgIGJ1aWxkZXJcbiAgICAgIC5hZGRDYXNlKGluY3JlbWVudEFzeW5jLnBlbmRpbmcsIChzdGF0ZSkgPT4ge1xuICAgICAgICBzdGF0ZS5zdGF0dXMgPSAnbG9hZGluZydcbiAgICAgIH0pXG4gICAgICAuYWRkQ2FzZShpbmNyZW1lbnRBc3luYy5mdWxmaWxsZWQsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICAgIHN0YXRlLnN0YXR1cyA9ICdpZGxlJ1xuICAgICAgICBzdGF0ZS52YWx1ZSArPSBhY3Rpb24ucGF5bG9hZFxuICAgICAgfSlcbiAgfSxcbn0pXG5cbmV4cG9ydCBjb25zdCB7IGluY3JlbWVudCwgZGVjcmVtZW50LCBpbmNyZW1lbnRCeUFtb3VudCB9ID0gY291bnRlclNsaWNlLmFjdGlvbnNcblxuLy8gVGhlIGZ1bmN0aW9uIGJlbG93IGlzIGNhbGxlZCBhIHNlbGVjdG9yIGFuZCBhbGxvd3MgdXMgdG8gc2VsZWN0IGEgdmFsdWUgZnJvbVxuLy8gdGhlIHN0YXRlLiBTZWxlY3RvcnMgY2FuIGFsc28gYmUgZGVmaW5lZCBpbmxpbmUgd2hlcmUgdGhleSdyZSB1c2VkIGluc3RlYWQgb2Zcbi8vIGluIHRoZSBzbGljZSBmaWxlLiBGb3IgZXhhbXBsZTogYHVzZVNlbGVjdG9yKChzdGF0ZTogUm9vdFN0YXRlKSA9PiBzdGF0ZS5jb3VudGVyLnZhbHVlKWBcbmV4cG9ydCBjb25zdCBzZWxlY3RDb3VudCA9IChzdGF0ZTogQXBwU3RhdGUpID0+IHN0YXRlLmNvdW50ZXIudmFsdWVcblxuLy8gV2UgY2FuIGFsc28gd3JpdGUgdGh1bmtzIGJ5IGhhbmQsIHdoaWNoIG1heSBjb250YWluIGJvdGggc3luYyBhbmQgYXN5bmMgbG9naWMuXG4vLyBIZXJlJ3MgYW4gZXhhbXBsZSBvZiBjb25kaXRpb25hbGx5IGRpc3BhdGNoaW5nIGFjdGlvbnMgYmFzZWQgb24gY3VycmVudCBzdGF0ZS5cbmV4cG9ydCBjb25zdCBpbmNyZW1lbnRJZk9kZCA9IChhbW91bnQ6IG51bWJlcik6IEFwcFRodW5rID0+IChcbiAgZGlzcGF0Y2gsXG4gIGdldFN0YXRlXG4pID0+IHtcbiAgY29uc3QgY3VycmVudFZhbHVlID0gc2VsZWN0Q291bnQoZ2V0U3RhdGUoKSlcbiAgaWYgKGN1cnJlbnRWYWx1ZSAlIDIgPT09IDEpIHtcbiAgICBkaXNwYXRjaChpbmNyZW1lbnRCeUFtb3VudChhbW91bnQpKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvdW50ZXJTbGljZS5yZWR1Y2VyXG4iLCJpbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcydcblxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCdcblxuaW1wb3J0IHN0b3JlIGZyb20gJy4uL2FwcC9zdG9yZSdcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgIDwvUHJvdmlkZXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHBcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkByZWR1eGpzL3Rvb2xraXRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=