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
/* harmony import */ var _app_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app/hooks */ "./src/app/hooks.ts");
/* harmony import */ var _counterSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./counterSlice */ "./src/features/counter/counterSlice.ts");
/* harmony import */ var _Counter_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Counter.module.css */ "./src/features/counter/Counter.module.css");
/* harmony import */ var _Counter_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Counter_module_css__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "D:\\Projects\\next-nest-postgrees-docker\\client\\src\\features\\counter\\Counter.tsx",
    _s = $RefreshSig$();





function Counter() {
  _s();

  var dispatch = Object(_app_hooks__WEBPACK_IMPORTED_MODULE_1__["useAppDispatch"])();
  var count = Object(_app_hooks__WEBPACK_IMPORTED_MODULE_1__["useAppSelector"])(_counterSlice__WEBPACK_IMPORTED_MODULE_2__["selectCount"]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _Counter_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.row,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        className: _Counter_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.button,
        "aria-label": "Decrement value",
        onClick: function onClick() {
          return dispatch(Object(_counterSlice__WEBPACK_IMPORTED_MODULE_2__["decrement"])());
        },
        children: "-"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: _Counter_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.value,
        children: count
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        className: _Counter_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.button,
        "aria-label": "Increment value",
        onClick: function onClick() {
          return dispatch(Object(_counterSlice__WEBPACK_IMPORTED_MODULE_2__["increment"])());
        },
        children: "+"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }, this);
}

_s(Counter, "+hTsZxwFI0D4w/lFWzVWa7ZzUE0=", false, function () {
  return [_app_hooks__WEBPACK_IMPORTED_MODULE_1__["useAppDispatch"], _app_hooks__WEBPACK_IMPORTED_MODULE_1__["useAppSelector"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2ZlYXR1cmVzL2NvdW50ZXIvQ291bnRlci50c3giXSwibmFtZXMiOlsiQ291bnRlciIsImRpc3BhdGNoIiwidXNlQXBwRGlzcGF0Y2giLCJjb3VudCIsInVzZUFwcFNlbGVjdG9yIiwic2VsZWN0Q291bnQiLCJzdHlsZXMiLCJyb3ciLCJidXR0b24iLCJkZWNyZW1lbnQiLCJ2YWx1ZSIsImluY3JlbWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0FBQ0E7QUFLQTs7QUFFQSxTQUFTQSxPQUFULEdBQW1CO0FBQUE7O0FBQ2pCLE1BQU1DLFFBQVEsR0FBR0MsaUVBQWMsRUFBL0I7QUFDQSxNQUFNQyxLQUFLLEdBQUdDLGlFQUFjLENBQUNDLHlEQUFELENBQTVCO0FBRUEsc0JBQ0U7QUFBQSwyQkFDRTtBQUFLLGVBQVMsRUFBRUMsMERBQU0sQ0FBQ0MsR0FBdkI7QUFBQSw4QkFDRTtBQUNFLGlCQUFTLEVBQUVELDBEQUFNLENBQUNFLE1BRHBCO0FBRUUsc0JBQVcsaUJBRmI7QUFHRSxlQUFPLEVBQUU7QUFBQSxpQkFBTVAsUUFBUSxDQUFDUSwrREFBUyxFQUFWLENBQWQ7QUFBQSxTQUhYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFRRTtBQUFNLGlCQUFTLEVBQUVILDBEQUFNLENBQUNJLEtBQXhCO0FBQUEsa0JBQWdDUDtBQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUkYsZUFTRTtBQUNFLGlCQUFTLEVBQUVHLDBEQUFNLENBQUNFLE1BRHBCO0FBRUUsc0JBQVcsaUJBRmI7QUFHRSxlQUFPLEVBQUU7QUFBQSxpQkFBTVAsUUFBUSxDQUFDVSwrREFBUyxFQUFWLENBQWQ7QUFBQSxTQUhYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBcUJEOztHQXpCUVgsTztVQUNVRSx5RCxFQUNIRSx5RDs7O0tBRlBKLE87QUEyQk1BLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmZhYjZiODVlYzk0YWQ1MGRjNTNkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgeyB1c2VBcHBTZWxlY3RvciwgdXNlQXBwRGlzcGF0Y2ggfSBmcm9tICcuLi8uLi9hcHAvaG9va3MnXG5pbXBvcnQge1xuICBkZWNyZW1lbnQsXG4gIGluY3JlbWVudCxcbiAgc2VsZWN0Q291bnQsXG59IGZyb20gJy4vY291bnRlclNsaWNlJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0NvdW50ZXIubW9kdWxlLmNzcydcblxuZnVuY3Rpb24gQ291bnRlcigpIHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VBcHBEaXNwYXRjaCgpXG4gIGNvbnN0IGNvdW50ID0gdXNlQXBwU2VsZWN0b3Ioc2VsZWN0Q291bnQpXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yb3d9PlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufVxuICAgICAgICAgIGFyaWEtbGFiZWw9XCJEZWNyZW1lbnQgdmFsdWVcIlxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGRpc3BhdGNoKGRlY3JlbWVudCgpKX1cbiAgICAgICAgPlxuICAgICAgICAgIC1cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnZhbHVlfT57Y291bnR9PC9zcGFuPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufVxuICAgICAgICAgIGFyaWEtbGFiZWw9XCJJbmNyZW1lbnQgdmFsdWVcIlxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGRpc3BhdGNoKGluY3JlbWVudCgpKX1cbiAgICAgICAgPlxuICAgICAgICAgICtcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb3VudGVyXG4iXSwic291cmNlUm9vdCI6IiJ9