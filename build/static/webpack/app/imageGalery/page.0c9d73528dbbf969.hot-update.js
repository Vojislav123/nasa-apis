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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _NasaImageGrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NasaImageGrid */ \"(app-client)/./app/imageGalery/NasaImageGrid.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst NasaImages = ()=>{\n    _s();\n    const [query, setQuery] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [images, setImages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleSearch = async ()=>{\n        try {\n            const response = await fetch(\"https://images-api.nasa.gov/search?q=\".concat(encodeURIComponent(query), \"&media_type=image\"));\n            const data = await response.json();\n            setLoading(true);\n            setImages(data.collection.items);\n        } catch (error) {\n            console.error(\"Error searching images:\", error);\n        }\n    };\n    const handleInputChange = (e)=>{\n        setQuery(e.target.value);\n        handleSearch();\n    };\n    // if (loading) {\n    //   return (\n    //     <div className=\"flex sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 p-4 mx-auto justify-center\">\n    //       <SpinnerLoading />\n    //     </div>\n    //   )\n    // }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"text-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-5xl font-bold mb-10 mt-40 text-center\",\n                children: \"Nasa Image Gallery\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\tijan\\\\Desktop\\\\git\\\\nasa-apis\\\\app\\\\imageGalery\\\\page.tsx\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-l mb-10\",\n                children: \"Try me?\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\tijan\\\\Desktop\\\\git\\\\nasa-apis\\\\app\\\\imageGalery\\\\page.tsx\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                value: query,\n                className: \"px-4 py-2 border border-gray-300 mb-10 focus:outline-none focus:ring focus:border-blue-300 text-black rounded-xl\",\n                onChange: handleInputChange,\n                placeholder: \"Search images...\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\tijan\\\\Desktop\\\\git\\\\nasa-apis\\\\app\\\\imageGalery\\\\page.tsx\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NasaImageGrid__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                images: images\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\tijan\\\\Desktop\\\\git\\\\nasa-apis\\\\app\\\\imageGalery\\\\page.tsx\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\tijan\\\\Desktop\\\\git\\\\nasa-apis\\\\app\\\\imageGalery\\\\page.tsx\",\n        lineNumber: 50,\n        columnNumber: 5\n    }, undefined);\n};\n_s(NasaImages, \"VxRmeSO1ODhFAYRD0MeWEIfhtpA=\");\n_c = NasaImages;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NasaImages);\nvar _c;\n$RefreshReg$(_c, \"NasaImages\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2ltYWdlR2FsZXJ5L3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFFd0M7QUFDSTtBQWE1QyxNQUFNRyxhQUF1Qjs7SUFDM0IsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdKLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ0ssUUFBUUMsVUFBVSxHQUFHTiwrQ0FBUUEsQ0FBYyxFQUFFO0lBQ3BELE1BQU0sQ0FBQ08sU0FBU0MsV0FBVyxHQUFHUiwrQ0FBUUEsQ0FBQztJQUV2QyxNQUFNUyxlQUFlO1FBQ25CLElBQUk7WUFDRixNQUFNQyxXQUFXLE1BQU1DLE1BQ3JCLHdDQUFrRSxPQUExQkMsbUJBQW1CVCxRQUFPO1lBRXBFLE1BQU1VLE9BQU8sTUFBTUgsU0FBU0k7WUFDNUJOLFdBQVc7WUFDWEYsVUFBVU8sS0FBS0UsV0FBV0M7UUFFNUIsRUFBRSxPQUFPQyxPQUFPO1lBQ2RDLFFBQVFELE1BQU0sMkJBQTJCQTtRQUMzQztJQUNGO0lBRUEsTUFBTUUsb0JBQW9CLENBQUNDO1FBQ3pCaEIsU0FBU2dCLEVBQUVDLE9BQU9DO1FBQ2xCYjtJQUNGO0lBRUEsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYiw0RkFBNEY7SUFDNUYsMkJBQTJCO0lBQzNCLGFBQWE7SUFDYixNQUFNO0lBQ04sSUFBSTtJQUVKLHFCQUNFLDhEQUFDYztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0M7Z0JBQUdELFdBQVU7MEJBQTZDOzs7Ozs7MEJBQzNELDhEQUFDRTtnQkFBRUYsV0FBVTswQkFBZTs7Ozs7OzBCQUM1Qiw4REFBQ0c7Z0JBQ0NDLE1BQUs7Z0JBQ0xOLE9BQU9uQjtnQkFDUHFCLFdBQVU7Z0JBQ1ZLLFVBQVVWO2dCQUNWVyxhQUFZOzs7Ozs7MEJBR2QsOERBQUM3QixzREFBYUE7Z0JBQUNJLFFBQVFBOzs7Ozs7Ozs7Ozs7QUFHN0I7R0EvQ01IO0tBQUFBO0FBaUROLCtEQUFlQSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9pbWFnZUdhbGVyeS9wYWdlLnRzeD80ZjliIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xyXG5cclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTmFzYUltYWdlR3JpZCBmcm9tICcuL05hc2FJbWFnZUdyaWQnO1xyXG5pbXBvcnQgU3Bpbm5lckxvYWRpbmcgZnJvbSAnQC9zZXJ2aWNlL3NwaW5uZXInO1xyXG5cclxuaW50ZXJmYWNlIE5hc2FJbWFnZSB7XHJcbiAgZGF0YToge1xyXG4gICAgbmFzYV9pZDogc3RyaW5nO1xyXG4gICAgdGl0bGU6IHN0cmluZztcclxuICB9W107XHJcbiAgbGlua3M6IHtcclxuICAgIGhyZWY6IHN0cmluZztcclxuICB9W107XHJcbn1cclxuXHJcbmNvbnN0IE5hc2FJbWFnZXM6IFJlYWN0LkZDID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtxdWVyeSwgc2V0UXVlcnldID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtpbWFnZXMsIHNldEltYWdlc10gPSB1c2VTdGF0ZTxOYXNhSW1hZ2VbXT4oW10pO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU2VhcmNoID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcclxuICAgICAgICBgaHR0cHM6Ly9pbWFnZXMtYXBpLm5hc2EuZ292L3NlYXJjaD9xPSR7ZW5jb2RlVVJJQ29tcG9uZW50KHF1ZXJ5KX0mbWVkaWFfdHlwZT1pbWFnZWBcclxuICAgICAgKTtcclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgc2V0TG9hZGluZyh0cnVlKVxyXG4gICAgICBzZXRJbWFnZXMoZGF0YS5jb2xsZWN0aW9uLml0ZW1zKTtcclxuXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBzZWFyY2hpbmcgaW1hZ2VzOicsIGVycm9yKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVJbnB1dENoYW5nZSA9IChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xyXG4gICAgc2V0UXVlcnkoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgaGFuZGxlU2VhcmNoKCk7XHJcbiAgfTtcclxuXHJcbiAgLy8gaWYgKGxvYWRpbmcpIHtcclxuICAvLyAgIHJldHVybiAoXHJcbiAgLy8gICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBzbTp3LTEvMiBtZDp3LTEvNCBsZzp3LTEvNCB4bDp3LTEvNCBwLTQgbXgtYXV0byBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gIC8vICAgICAgIDxTcGlubmVyTG9hZGluZyAvPlxyXG4gIC8vICAgICA8L2Rpdj5cclxuICAvLyAgIClcclxuICAvLyB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XHJcbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTV4bCBmb250LWJvbGQgbWItMTAgbXQtNDAgdGV4dC1jZW50ZXJcIj5OYXNhIEltYWdlIEdhbGxlcnk8L2gxPlxyXG4gICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWwgbWItMTBcIj5UcnkgbWU/PC9wPlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgdmFsdWU9e3F1ZXJ5fVxyXG4gICAgICAgIGNsYXNzTmFtZT1cInB4LTQgcHktMiBib3JkZXIgYm9yZGVyLWdyYXktMzAwIG1iLTEwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nIGZvY3VzOmJvcmRlci1ibHVlLTMwMCB0ZXh0LWJsYWNrIHJvdW5kZWQteGxcIlxyXG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cclxuICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCBpbWFnZXMuLi5cIlxyXG4gICAgICAvPlxyXG5cclxuICAgICAgPE5hc2FJbWFnZUdyaWQgaW1hZ2VzPXtpbWFnZXN9IC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmFzYUltYWdlcztcclxuXHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiTmFzYUltYWdlR3JpZCIsIk5hc2FJbWFnZXMiLCJxdWVyeSIsInNldFF1ZXJ5IiwiaW1hZ2VzIiwic2V0SW1hZ2VzIiwibG9hZGluZyIsInNldExvYWRpbmciLCJoYW5kbGVTZWFyY2giLCJyZXNwb25zZSIsImZldGNoIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiZGF0YSIsImpzb24iLCJjb2xsZWN0aW9uIiwiaXRlbXMiLCJlcnJvciIsImNvbnNvbGUiLCJoYW5kbGVJbnB1dENoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwicCIsImlucHV0IiwidHlwZSIsIm9uQ2hhbmdlIiwicGxhY2Vob2xkZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./app/imageGalery/page.tsx\n"));

/***/ })

});