(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ "./src/styles/globals.css");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_store_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/store/store */ "./src/redux/store/store.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "D:\\Coding\\aluminium2\\client\\src\\pages\\_app.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_2__.Provider, {
    store: _redux_store_store__WEBPACK_IMPORTED_MODULE_3__.default,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

/***/ }),

/***/ "./src/redux/reducers/mainText/mainText.tsx":
/*!**************************************************!*\
  !*** ./src/redux/reducers/mainText/mainText.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialState": () => (/* binding */ initialState),
/* harmony export */   "getRecipes": () => (/* binding */ getRecipes),
/* harmony export */   "getRecipesSuccess": () => (/* binding */ getRecipesSuccess),
/* harmony export */   "getRecipesFailure": () => (/* binding */ getRecipesFailure),
/* harmony export */   "addText": () => (/* binding */ addText),
/* harmony export */   "removeText": () => (/* binding */ removeText),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
  loading: false,
  error: false,
  recipes: [],
  text: ['text 1', 'text 2']
};
const recipesSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: 'text',
  initialState,
  reducers: {
    getRecipes: state => {
      state.loading = true;
    },
    getRecipesSuccess: (state, {
      payload
    }) => {
      state.recipes = payload;
      state.loading = false;
      state.error = false;
    },
    getRecipesFailure: state => {
      state.loading = false;
      state.error = true;
    },
    addText: (state, action) => {
      state.text.push(...action.payload);
      state.loading = false;
      state.error = false;
    },
    removeText: (state, action) => {
      var _state$text;

      state.text = (_state$text = state.text) === null || _state$text === void 0 ? void 0 : _state$text.filter(item => item !== action.payload);
      state.loading = false;
      state.error = false;
    }
  }
});
const {
  getRecipes,
  getRecipesSuccess,
  getRecipesFailure,
  addText,
  removeText
} = recipesSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (recipesSlice.reducer);

/***/ }),

/***/ "./src/redux/store/rootReducer.tsx":
/*!*****************************************!*\
  !*** ./src/redux/store/rootReducer.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "rootReducer": () => (/* binding */ rootReducer)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reducers_mainText_mainText__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reducers/mainText/mainText */ "./src/redux/reducers/mainText/mainText.tsx");


const rootReducer = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({
  text: _reducers_mainText_mainText__WEBPACK_IMPORTED_MODULE_1__.default
});

/***/ }),

/***/ "./src/redux/store/store.tsx":
/*!***********************************!*\
  !*** ./src/redux/store/store.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useAppDispatch": () => (/* binding */ useAppDispatch),
/* harmony export */   "useAppSelector": () => (/* binding */ useAppSelector),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _rootReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rootReducer */ "./src/redux/store/rootReducer.tsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);



const store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({
  reducer: _rootReducer__WEBPACK_IMPORTED_MODULE_1__.rootReducer
});
const useAppDispatch = () => (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
const useAppSelector = react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store);

/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7O0FDSFA7QUFDQTtBQUNBO0FBRUEsTUFBTTNCLEtBQUssR0FBRzZCLGdFQUFjLENBQUM7QUFDekJKLEVBQUFBLE9BQU8sRUFBR0cscURBQVdBO0FBREksQ0FBRCxDQUE1QjtBQU1PLE1BQU1JLGNBQWMsR0FBRyxNQUFNRix3REFBVyxFQUF4QztBQUNBLE1BQU1HLGNBQStDLEdBQUdGLG9EQUF4RDtBQUVQLGlFQUFlL0IsS0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FFYkE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aXRoLXJlZHV4LXRvb2xraXQtdHlwZXNjcmlwdC8uL3NyYy9wYWdlcy9fYXBwLnRzeCIsIndlYnBhY2s6Ly93aXRoLXJlZHV4LXRvb2xraXQtdHlwZXNjcmlwdC8uL3NyYy9yZWR1eC9yZWR1Y2Vycy9tYWluVGV4dC9tYWluVGV4dC50c3giLCJ3ZWJwYWNrOi8vd2l0aC1yZWR1eC10b29sa2l0LXR5cGVzY3JpcHQvLi9zcmMvcmVkdXgvc3RvcmUvcm9vdFJlZHVjZXIudHN4Iiwid2VicGFjazovL3dpdGgtcmVkdXgtdG9vbGtpdC10eXBlc2NyaXB0Ly4vc3JjL3JlZHV4L3N0b3JlL3N0b3JlLnRzeCIsIndlYnBhY2s6Ly93aXRoLXJlZHV4LXRvb2xraXQtdHlwZXNjcmlwdC8uL3NyYy9zdHlsZXMvZ2xvYmFscy5jc3MiLCJ3ZWJwYWNrOi8vd2l0aC1yZWR1eC10b29sa2l0LXR5cGVzY3JpcHQvZXh0ZXJuYWwgXCJAcmVkdXhqcy90b29sa2l0XCIiLCJ3ZWJwYWNrOi8vd2l0aC1yZWR1eC10b29sa2l0LXR5cGVzY3JpcHQvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL3dpdGgtcmVkdXgtdG9vbGtpdC10eXBlc2NyaXB0L2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly93aXRoLXJlZHV4LXRvb2xraXQtdHlwZXNjcmlwdC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJ1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCdcbmltcG9ydCBzdG9yZSBmcm9tICcuLi9yZWR1eC9zdG9yZS9zdG9yZSdcblxuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgPC9Qcm92aWRlcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcFxuIiwiaW1wb3J0IHsgY3JlYXRlU2xpY2V9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSU1haW5UZXh0IHtcbiAgICB0ZXh0OiBBcnJheTxzdHJpbmc+O1xuICAgIGxvYWRpbmc6IGJvb2xlYW47XG4gICAgZXJyb3I6IGFueTtcbiAgICByZWNpcGVzOiBBcnJheTx1bmtub3duPjtcbn1cbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gICAgbG9hZGluZzogZmFsc2UsXG4gICAgZXJyb3I6IGZhbHNlLFxuICAgIHJlY2lwZXM6IFtdLFxuICAgIHRleHQ6IFsndGV4dCAxJywgJ3RleHQgMiddXG59XG5jb25zdCByZWNpcGVzU2xpY2UgPSBjcmVhdGVTbGljZSh7XG4gICAgbmFtZTogJ3RleHQnLFxuICAgIGluaXRpYWxTdGF0ZSxcbiAgICByZWR1Y2Vyczoge1xuICAgICAgICBnZXRSZWNpcGVzOiBzdGF0ZSA9PiB7XG4gICAgICAgICAgICBzdGF0ZS5sb2FkaW5nID0gdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBnZXRSZWNpcGVzU3VjY2VzczogKHN0YXRlLCB7IHBheWxvYWQgfSkgPT4ge1xuICAgICAgICAgICAgc3RhdGUucmVjaXBlcyA9IHBheWxvYWRcbiAgICAgICAgICAgIHN0YXRlLmxvYWRpbmcgPSBmYWxzZVxuICAgICAgICAgICAgc3RhdGUuZXJyb3IgPSBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICBnZXRSZWNpcGVzRmFpbHVyZTogc3RhdGUgPT4ge1xuICAgICAgICAgICAgc3RhdGUubG9hZGluZyA9IGZhbHNlXG4gICAgICAgICAgICBzdGF0ZS5lcnJvciA9IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgYWRkVGV4dDogKHN0YXRlOiBJTWFpblRleHQsIGFjdGlvbikgPT4ge1xuICAgICAgICAgICAgc3RhdGUudGV4dC5wdXNoKC4uLmFjdGlvbi5wYXlsb2FkKVxuICAgICAgICAgICAgc3RhdGUubG9hZGluZyA9IGZhbHNlXG4gICAgICAgICAgICBzdGF0ZS5lcnJvciA9IGZhbHNlXG4gICAgICAgIH0sXG5cbiAgICAgICAgcmVtb3ZlVGV4dDogKHN0YXRlOiBJTWFpblRleHQsIGFjdGlvbikgPT4ge1xuICAgICAgICAgICAgc3RhdGUudGV4dCA9IHN0YXRlLnRleHQ/LmZpbHRlcigoaXRlbSkgPT4gaXRlbSAhPT0gYWN0aW9uLnBheWxvYWQpXG4gICAgICAgICAgICBzdGF0ZS5sb2FkaW5nID0gZmFsc2VcbiAgICAgICAgICAgIHN0YXRlLmVycm9yID0gZmFsc2VcbiAgICAgICAgfVxuICAgIH0sXG59KVxuXG5cbmV4cG9ydCBjb25zdCB7IGdldFJlY2lwZXMsIGdldFJlY2lwZXNTdWNjZXNzLCBnZXRSZWNpcGVzRmFpbHVyZSwgYWRkVGV4dCwgcmVtb3ZlVGV4dCB9ID0gcmVjaXBlc1NsaWNlLmFjdGlvbnNcbmV4cG9ydCBkZWZhdWx0IHJlY2lwZXNTbGljZS5yZWR1Y2VyXG4iLCJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0J1xuaW1wb3J0IHRleHRSZWR1Y2VyIGZyb20gXCIuLi9yZWR1Y2Vycy9tYWluVGV4dC9tYWluVGV4dFwiO1xuXG5leHBvcnQgY29uc3Qgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xuICAgIHRleHQ6IHRleHRSZWR1Y2VyLFxufSlcbiIsImltcG9ydCB7IGNvbmZpZ3VyZVN0b3JlIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCdcbmltcG9ydCB7cm9vdFJlZHVjZXJ9IGZyb20gXCIuL3Jvb3RSZWR1Y2VyXCI7XG5pbXBvcnQgeyBUeXBlZFVzZVNlbGVjdG9ySG9vaywgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbmNvbnN0IHN0b3JlID0gY29uZmlndXJlU3RvcmUoe1xuICAgIHJlZHVjZXI6ICByb290UmVkdWNlclxuXG59KVxuZXhwb3J0IHR5cGUgUm9vdFN0YXRlID0gUmV0dXJuVHlwZTx0eXBlb2Ygc3RvcmUuZ2V0U3RhdGU+XG5leHBvcnQgdHlwZSBBcHBEaXNwYXRjaCA9IHR5cGVvZiBzdG9yZS5kaXNwYXRjaFxuZXhwb3J0IGNvbnN0IHVzZUFwcERpc3BhdGNoID0gKCkgPT4gdXNlRGlzcGF0Y2g8QXBwRGlzcGF0Y2g+KClcbmV4cG9ydCBjb25zdCB1c2VBcHBTZWxlY3RvcjogVHlwZWRVc2VTZWxlY3Rvckhvb2s8Um9vdFN0YXRlPiA9IHVzZVNlbGVjdG9yXG5cbmV4cG9ydCBkZWZhdWx0IHN0b3JlIiwiIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHJlZHV4anMvdG9vbGtpdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvdmlkZXIiLCJzdG9yZSIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiY3JlYXRlU2xpY2UiLCJpbml0aWFsU3RhdGUiLCJsb2FkaW5nIiwiZXJyb3IiLCJyZWNpcGVzIiwidGV4dCIsInJlY2lwZXNTbGljZSIsIm5hbWUiLCJyZWR1Y2VycyIsImdldFJlY2lwZXMiLCJzdGF0ZSIsImdldFJlY2lwZXNTdWNjZXNzIiwicGF5bG9hZCIsImdldFJlY2lwZXNGYWlsdXJlIiwiYWRkVGV4dCIsImFjdGlvbiIsInB1c2giLCJyZW1vdmVUZXh0IiwiZmlsdGVyIiwiaXRlbSIsImFjdGlvbnMiLCJyZWR1Y2VyIiwiY29tYmluZVJlZHVjZXJzIiwidGV4dFJlZHVjZXIiLCJyb290UmVkdWNlciIsImNvbmZpZ3VyZVN0b3JlIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInVzZUFwcERpc3BhdGNoIiwidXNlQXBwU2VsZWN0b3IiXSwic291cmNlUm9vdCI6IiJ9