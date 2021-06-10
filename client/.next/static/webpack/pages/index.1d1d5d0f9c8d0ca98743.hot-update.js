webpackHotUpdate_N_E("pages/index",{

/***/ "./src/features/counter/Counter.tsx":
/*!******************************************!*\
  !*** ./src/features/counter/Counter.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app/hooks */ "./src/app/hooks.ts");
/* harmony import */ var _counterSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./counterSlice */ "./src/features/counter/counterSlice.ts");
/* harmony import */ var _Counter_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Counter.module.css */ "./src/features/counter/Counter.module.css");
/* harmony import */ var _Counter_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Counter_module_css__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "D:\\Projects\\next-nest-postgrees-docker\\client\\src\\features\\counter\\Counter.tsx",
    _s = $RefreshSig$();






function Counter() {
  _s();

  var dispatch = Object(_app_hooks__WEBPACK_IMPORTED_MODULE_2__["useAppDispatch"])();
  var count = Object(_app_hooks__WEBPACK_IMPORTED_MODULE_2__["useAppSelector"])(_counterSlice__WEBPACK_IMPORTED_MODULE_3__["selectCount"]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('2'),
      incrementAmount = _useState[0],
      setIncrementAmount = _useState[1];

  var incrementValue = Number(incrementAmount) || 0;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _Counter_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.row,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        className: _Counter_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.button,
        "aria-label": "Decrement value",
        onClick: function onClick() {
          return dispatch(Object(_counterSlice__WEBPACK_IMPORTED_MODULE_3__["decrement"])());
        },
        children: "-"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: _Counter_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.value,
        children: count
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        className: _Counter_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.button,
        "aria-label": "Increment value",
        onClick: function onClick() {
          return dispatch(Object(_counterSlice__WEBPACK_IMPORTED_MODULE_3__["increment"])());
        },
        children: "+"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 5
  }, this);
}

_s(Counter, "g3PabBG3smI7AZYwW39PjroomhU=", false, function () {
  return [_app_hooks__WEBPACK_IMPORTED_MODULE_2__["useAppDispatch"], _app_hooks__WEBPACK_IMPORTED_MODULE_2__["useAppSelector"]];
});

_c = Counter;
/* harmony default export */ __webpack_exports__["default"] = (Counter);

var _c;

$RefreshReg$(_c, "Counter");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2ZlYXR1cmVzL2NvdW50ZXIvQ291bnRlci50c3giXSwibmFtZXMiOlsiQ291bnRlciIsImRpc3BhdGNoIiwidXNlQXBwRGlzcGF0Y2giLCJjb3VudCIsInVzZUFwcFNlbGVjdG9yIiwic2VsZWN0Q291bnQiLCJ1c2VTdGF0ZSIsImluY3JlbWVudEFtb3VudCIsInNldEluY3JlbWVudEFtb3VudCIsImluY3JlbWVudFZhbHVlIiwiTnVtYmVyIiwic3R5bGVzIiwicm93IiwiYnV0dG9uIiwiZGVjcmVtZW50IiwidmFsdWUiLCJpbmNyZW1lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQVFBOztBQUVBLFNBQVNBLE9BQVQsR0FBbUI7QUFBQTs7QUFDakIsTUFBTUMsUUFBUSxHQUFHQyxpRUFBYyxFQUEvQjtBQUNBLE1BQU1DLEtBQUssR0FBR0MsaUVBQWMsQ0FBQ0MseURBQUQsQ0FBNUI7O0FBRmlCLGtCQUc2QkMsc0RBQVEsQ0FBQyxHQUFELENBSHJDO0FBQUEsTUFHVkMsZUFIVTtBQUFBLE1BR09DLGtCQUhQOztBQUtqQixNQUFNQyxjQUFjLEdBQUdDLE1BQU0sQ0FBQ0gsZUFBRCxDQUFOLElBQTJCLENBQWxEO0FBRUEsc0JBQ0U7QUFBQSwyQkFDRTtBQUFLLGVBQVMsRUFBRUksMERBQU0sQ0FBQ0MsR0FBdkI7QUFBQSw4QkFDRTtBQUNFLGlCQUFTLEVBQUVELDBEQUFNLENBQUNFLE1BRHBCO0FBRUUsc0JBQVcsaUJBRmI7QUFHRSxlQUFPLEVBQUU7QUFBQSxpQkFBTVosUUFBUSxDQUFDYSwrREFBUyxFQUFWLENBQWQ7QUFBQSxTQUhYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFRRTtBQUFNLGlCQUFTLEVBQUVILDBEQUFNLENBQUNJLEtBQXhCO0FBQUEsa0JBQWdDWjtBQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUkYsZUFTRTtBQUNFLGlCQUFTLEVBQUVRLDBEQUFNLENBQUNFLE1BRHBCO0FBRUUsc0JBQVcsaUJBRmI7QUFHRSxlQUFPLEVBQUU7QUFBQSxpQkFBTVosUUFBUSxDQUFDZSwrREFBUyxFQUFWLENBQWQ7QUFBQSxTQUhYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBcUJEOztHQTVCUWhCLE87VUFDVUUseUQsRUFDSEUseUQ7OztLQUZQSixPO0FBOEJNQSxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4xZDFkNWQwZjljOGQwY2E5ODc0My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHsgdXNlQXBwU2VsZWN0b3IsIHVzZUFwcERpc3BhdGNoIH0gZnJvbSAnLi4vLi4vYXBwL2hvb2tzJ1xuaW1wb3J0IHtcbiAgZGVjcmVtZW50LFxuICBpbmNyZW1lbnQsXG4gIGluY3JlbWVudEJ5QW1vdW50LFxuICBpbmNyZW1lbnRBc3luYyxcbiAgaW5jcmVtZW50SWZPZGQsXG4gIHNlbGVjdENvdW50LFxufSBmcm9tICcuL2NvdW50ZXJTbGljZSdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Db3VudGVyLm1vZHVsZS5jc3MnXG5cbmZ1bmN0aW9uIENvdW50ZXIoKSB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlQXBwRGlzcGF0Y2goKVxuICBjb25zdCBjb3VudCA9IHVzZUFwcFNlbGVjdG9yKHNlbGVjdENvdW50KVxuICBjb25zdCBbaW5jcmVtZW50QW1vdW50LCBzZXRJbmNyZW1lbnRBbW91bnRdID0gdXNlU3RhdGUoJzInKVxuXG4gIGNvbnN0IGluY3JlbWVudFZhbHVlID0gTnVtYmVyKGluY3JlbWVudEFtb3VudCkgfHwgMFxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucm93fT5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn1cbiAgICAgICAgICBhcmlhLWxhYmVsPVwiRGVjcmVtZW50IHZhbHVlXCJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBkaXNwYXRjaChkZWNyZW1lbnQoKSl9XG4gICAgICAgID5cbiAgICAgICAgICAtXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy52YWx1ZX0+e2NvdW50fTwvc3Bhbj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn1cbiAgICAgICAgICBhcmlhLWxhYmVsPVwiSW5jcmVtZW50IHZhbHVlXCJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBkaXNwYXRjaChpbmNyZW1lbnQoKSl9XG4gICAgICAgID5cbiAgICAgICAgICArXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ291bnRlclxuIl0sInNvdXJjZVJvb3QiOiIifQ==