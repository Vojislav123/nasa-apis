"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/imageGalery/page",{

/***/ "(app-client)/./app/imageGalery/NasaImageCard.tsx":
/*!*******************************************!*\
  !*** ./app/imageGalery/NasaImageCard.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _service_imagePopup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/service/imagePopup */ \"(app-client)/./service/imagePopup.tsx\");\n/* harmony import */ var _service_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/service/spinner */ \"(app-client)/./service/spinner.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst NasaImageCard = (param)=>{\n    let { image } = param;\n    _s();\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        simulateLoading(image).then(()=>{});\n    }, [\n        image\n    ]);\n    const simulateLoading = (image)=>{\n        return new Promise((resolve)=>{\n            setTimeout(()=>{\n                resolve(image);\n            }, 2000);\n        });\n    };\n    if (loading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 p-4 mx-auto justify-center\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_service_spinner__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\tijan\\\\Desktop\\\\git\\\\nasa-apis\\\\app\\\\imageGalery\\\\NasaImageCard.tsx\",\n                lineNumber: 36,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\tijan\\\\Desktop\\\\git\\\\nasa-apis\\\\app\\\\imageGalery\\\\NasaImageCard.tsx\",\n            lineNumber: 35,\n            columnNumber: 7\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_service_imagePopup__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        image: image\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\tijan\\\\Desktop\\\\git\\\\nasa-apis\\\\app\\\\imageGalery\\\\NasaImageCard.tsx\",\n        lineNumber: 41,\n        columnNumber: 10\n    }, undefined);\n};\n_s(NasaImageCard, \"J7PPXooW06IQ11rfabbvgk72KFw=\");\n_c = NasaImageCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NasaImageCard);\nvar _c;\n$RefreshReg$(_c, \"NasaImageCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2ltYWdlR2FsZXJ5L05hc2FJbWFnZUNhcmQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQW1EO0FBR0w7QUFDQztBQVkvQyxNQUFNSyxnQkFBZ0Q7UUFBQyxFQUFFQyxLQUFLLEVBQUU7O0lBQzlELE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHUCwrQ0FBUUEsQ0FBQztJQUV2Q0MsZ0RBQVNBLENBQUM7UUFDUk8sZ0JBQWdCSCxPQUFPSSxLQUFLLEtBQzVCO0lBQ0YsR0FBRztRQUFDSjtLQUFNO0lBRVYsTUFBTUcsa0JBQWtCLENBQUNIO1FBQ3ZCLE9BQU8sSUFBSUssUUFBUSxDQUFDQztZQUNsQkMsV0FBVztnQkFDVEQsUUFBUU47WUFDVixHQUFHO1FBQ0w7SUFDRjtJQUVBLElBQUlDLFNBQVM7UUFDWCxxQkFDRSw4REFBQ087WUFBSUMsV0FBVTtzQkFDYiw0RUFBQ1gsd0RBQWNBOzs7Ozs7Ozs7O0lBR3JCO0lBRUEscUJBQU8sOERBQUNELDJEQUFVQTtRQUFDRyxPQUFPQTs7Ozs7O0FBQzVCO0dBekJNRDtLQUFBQTtBQTJCTiwrREFBZUEsYUFBYUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvaW1hZ2VHYWxlcnkvTmFzYUltYWdlQ2FyZC50c3g/OGNkYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuXHJcblxyXG5pbXBvcnQgSW1hZ2VQb3B1cCBmcm9tICdAL3NlcnZpY2UvaW1hZ2VQb3B1cCc7XHJcbmltcG9ydCBTcGlubmVyTG9hZGluZyBmcm9tICdAL3NlcnZpY2Uvc3Bpbm5lcic7XHJcblxyXG5pbnRlcmZhY2UgTmFzYUltYWdlIHtcclxuICBkYXRhOiB7XHJcbiAgICBuYXNhX2lkOiBzdHJpbmc7XHJcbiAgICB0aXRsZTogc3RyaW5nO1xyXG4gIH1bXTtcclxuICBsaW5rczoge1xyXG4gICAgaHJlZjogc3RyaW5nO1xyXG4gIH1bXTtcclxufVxyXG5cclxuY29uc3QgTmFzYUltYWdlQ2FyZDogUmVhY3QuRkM8eyBpbWFnZTogTmFzYUltYWdlIH0+ID0gKHsgaW1hZ2UgfSkgPT4ge1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2ltdWxhdGVMb2FkaW5nKGltYWdlKS50aGVuKCgpID0+IHtcclxuICAgIH0pO1xyXG4gIH0sIFtpbWFnZV0pO1xyXG5cclxuICBjb25zdCBzaW11bGF0ZUxvYWRpbmcgPSAoaW1hZ2U6IE5hc2FJbWFnZSk6IFByb21pc2U8TmFzYUltYWdlPiA9PiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgcmVzb2x2ZShpbWFnZSk7XHJcbiAgICAgIH0sIDIwMDApO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgaWYgKGxvYWRpbmcpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBzbTp3LTEvMiBtZDp3LTEvNCBsZzp3LTEvNCB4bDp3LTEvNCBwLTQgbXgtYXV0byBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICAgIDxTcGlubmVyTG9hZGluZyAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcblxyXG4gIHJldHVybiA8SW1hZ2VQb3B1cCBpbWFnZT17aW1hZ2V9IC8+O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmFzYUltYWdlQ2FyZDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJJbWFnZVBvcHVwIiwiU3Bpbm5lckxvYWRpbmciLCJOYXNhSW1hZ2VDYXJkIiwiaW1hZ2UiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInNpbXVsYXRlTG9hZGluZyIsInRoZW4iLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJkaXYiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./app/imageGalery/NasaImageCard.tsx\n"));

/***/ })

});