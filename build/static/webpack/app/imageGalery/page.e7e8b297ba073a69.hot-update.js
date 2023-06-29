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

/***/ "(app-client)/./app/imageGalery/page.tsx":
/*!**********************************!*\
  !*** ./app/imageGalery/page.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _NasaImageGrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NasaImageGrid */ \"(app-client)/./app/imageGalery/NasaImageGrid.tsx\");\n/* harmony import */ var _service_returnSpinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/service/returnSpinner */ \"(app-client)/./service/returnSpinner.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst NasaImages = ()=>{\n    _s();\n    const [query, setQuery] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [images, setImages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleSearch = async ()=>{\n        try {\n            const response = await fetch(\"https://images-api.nasa.gov/search?q=\".concat(encodeURIComponent(query), \"&media_type=image\"));\n            const data = await response.json();\n            setImages(data.collection.items);\n            setLoading(false);\n        } catch (error) {\n            console.error(\"Error searching images:\", error);\n        }\n    };\n    const handleInputChange = (e)=>{\n        setQuery(e.target.value);\n        setLoading(true);\n        handleSearch();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"text-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-5xl font-bold mb-10 mt-40 text-center\",\n                children: \"Nasa Image Gallery\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\tijan\\\\Desktop\\\\git\\\\nasa-apis\\\\app\\\\imageGalery\\\\page.tsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-l mb-10\",\n                children: \"Try me?\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\tijan\\\\Desktop\\\\git\\\\nasa-apis\\\\app\\\\imageGalery\\\\page.tsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                value: query,\n                className: \"px-4 py-2 border border-gray-300 mb-10 focus:outline-none focus:ring focus:border-blue-300 text-black rounded-xl\",\n                onChange: handleInputChange,\n                placeholder: \"Search images...\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\tijan\\\\Desktop\\\\git\\\\nasa-apis\\\\app\\\\imageGalery\\\\page.tsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, undefined),\n            loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_service_returnSpinner__WEBPACK_IMPORTED_MODULE_3__.ReturnSpinner, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\tijan\\\\Desktop\\\\git\\\\nasa-apis\\\\app\\\\imageGalery\\\\page.tsx\",\n                lineNumber: 54,\n                columnNumber: 17\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NasaImageGrid__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                images: images\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\tijan\\\\Desktop\\\\git\\\\nasa-apis\\\\app\\\\imageGalery\\\\page.tsx\",\n                lineNumber: 54,\n                columnNumber: 37\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\tijan\\\\Desktop\\\\git\\\\nasa-apis\\\\app\\\\imageGalery\\\\page.tsx\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, undefined);\n};\n_s(NasaImages, \"VxRmeSO1ODhFAYRD0MeWEIfhtpA=\");\n_c = NasaImages;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NasaImages);\nvar _c;\n$RefreshReg$(_c, \"NasaImages\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2ltYWdlR2FsZXJ5L3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRXdDO0FBQ0k7QUFDWTtBQVl4RCxNQUFNSSxhQUF1Qjs7SUFDM0IsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdMLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ00sUUFBUUMsVUFBVSxHQUFHUCwrQ0FBUUEsQ0FBYyxFQUFFO0lBQ3BELE1BQU0sQ0FBQ1EsU0FBU0MsV0FBVyxHQUFHVCwrQ0FBUUEsQ0FBQztJQUV2QyxNQUFNVSxlQUFlO1FBQ25CLElBQUk7WUFDRixNQUFNQyxXQUFXLE1BQU1DLE1BQ3JCLHdDQUFrRSxPQUExQkMsbUJBQW1CVCxRQUFPO1lBRXBFLE1BQU1VLE9BQU8sTUFBTUgsU0FBU0k7WUFDNUJSLFVBQVVPLEtBQUtFLFdBQVdDO1lBQzFCUixXQUFXO1FBQ2IsRUFBRSxPQUFPUyxPQUFPO1lBQ2RDLFFBQVFELE1BQU0sMkJBQTJCQTtRQUMzQztJQUNGO0lBRUEsTUFBTUUsb0JBQW9CLENBQUNDO1FBQ3pCaEIsU0FBU2dCLEVBQUVDLE9BQU9DO1FBQ2xCZCxXQUFXO1FBQ1hDO0lBQ0Y7SUFHQSxxQkFDRSw4REFBQ2M7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNDO2dCQUFHRCxXQUFVOzBCQUE2Qzs7Ozs7OzBCQUMzRCw4REFBQ0U7Z0JBQUVGLFdBQVU7MEJBQWU7Ozs7OzswQkFDNUIsOERBQUNHO2dCQUNDQyxNQUFLO2dCQUNMTixPQUFPbkI7Z0JBQ1BxQixXQUFVO2dCQUNWSyxVQUFVVjtnQkFDVlcsYUFBWTs7Ozs7O1lBR2J2Qix3QkFBUyw4REFBQ04saUVBQWFBOzs7OzBDQUFNLDhEQUFDRCxzREFBYUE7Z0JBQUNLLFFBQVFBOzs7Ozs7Ozs7Ozs7QUFHM0Q7R0F4Q01IO0tBQUFBO0FBMENOLCtEQUFlQSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9pbWFnZUdhbGVyeS9wYWdlLnRzeD80ZjliIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xyXG5cclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTmFzYUltYWdlR3JpZCBmcm9tICcuL05hc2FJbWFnZUdyaWQnO1xyXG5pbXBvcnQgeyBSZXR1cm5TcGlubmVyIH0gZnJvbSAnQC9zZXJ2aWNlL3JldHVyblNwaW5uZXInO1xyXG5cclxuaW50ZXJmYWNlIE5hc2FJbWFnZSB7XHJcbiAgZGF0YToge1xyXG4gICAgbmFzYV9pZDogc3RyaW5nO1xyXG4gICAgdGl0bGU6IHN0cmluZztcclxuICB9W107XHJcbiAgbGlua3M6IHtcclxuICAgIGhyZWY6IHN0cmluZztcclxuICB9W107XHJcbn1cclxuXHJcbmNvbnN0IE5hc2FJbWFnZXM6IFJlYWN0LkZDID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtxdWVyeSwgc2V0UXVlcnldID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtpbWFnZXMsIHNldEltYWdlc10gPSB1c2VTdGF0ZTxOYXNhSW1hZ2VbXT4oW10pO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU2VhcmNoID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcclxuICAgICAgICBgaHR0cHM6Ly9pbWFnZXMtYXBpLm5hc2EuZ292L3NlYXJjaD9xPSR7ZW5jb2RlVVJJQ29tcG9uZW50KHF1ZXJ5KX0mbWVkaWFfdHlwZT1pbWFnZWBcclxuICAgICAgKTtcclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgc2V0SW1hZ2VzKGRhdGEuY29sbGVjdGlvbi5pdGVtcyk7XHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3Igc2VhcmNoaW5nIGltYWdlczonLCBlcnJvcik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlSW5wdXRDaGFuZ2UgPSAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcclxuICAgIHNldFF1ZXJ5KGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICBoYW5kbGVTZWFyY2goKTtcclxuICB9O1xyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cclxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNXhsIGZvbnQtYm9sZCBtYi0xMCBtdC00MCB0ZXh0LWNlbnRlclwiPk5hc2EgSW1hZ2UgR2FsbGVyeTwvaDE+XHJcbiAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbCBtYi0xMFwiPlRyeSBtZT88L3A+XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICB2YWx1ZT17cXVlcnl9XHJcbiAgICAgICAgY2xhc3NOYW1lPVwicHgtNCBweS0yIGJvcmRlciBib3JkZXItZ3JheS0zMDAgbWItMTAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmcgZm9jdXM6Ym9yZGVyLWJsdWUtMzAwIHRleHQtYmxhY2sgcm91bmRlZC14bFwiXHJcbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGltYWdlcy4uLlwiXHJcbiAgICAgIC8+XHJcblxyXG4gICAgICB7bG9hZGluZz8gPFJldHVyblNwaW5uZXIgLz4gOiA8TmFzYUltYWdlR3JpZCBpbWFnZXM9e2ltYWdlc30gLz59XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmFzYUltYWdlcztcclxuXHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiTmFzYUltYWdlR3JpZCIsIlJldHVyblNwaW5uZXIiLCJOYXNhSW1hZ2VzIiwicXVlcnkiLCJzZXRRdWVyeSIsImltYWdlcyIsInNldEltYWdlcyIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiaGFuZGxlU2VhcmNoIiwicmVzcG9uc2UiLCJmZXRjaCIsImVuY29kZVVSSUNvbXBvbmVudCIsImRhdGEiLCJqc29uIiwiY29sbGVjdGlvbiIsIml0ZW1zIiwiZXJyb3IiLCJjb25zb2xlIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsInAiLCJpbnB1dCIsInR5cGUiLCJvbkNoYW5nZSIsInBsYWNlaG9sZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./app/imageGalery/page.tsx\n"));

/***/ })

});