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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _NasaImageGrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NasaImageGrid */ \"(app-client)/./app/imageGalery/NasaImageGrid.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst NasaImages = ()=>{\n    _s();\n    const [query, setQuery] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [images, setImages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleSearch = async ()=>{\n        try {\n            const response = await fetch(\"https://images-api.nasa.gov/search?q=\".concat(encodeURIComponent(query), \"&media_type=image\"));\n            const data = await response.json();\n            setImages(data.collection.items);\n        } catch (error) {\n            console.error(\"Error searching images:\", error);\n        }\n    };\n    const handleInputChange = (e)=>{\n        setQuery(e.target.value);\n        handleSearch();\n    };\n    // if (loading) {\n    //   return (\n    //     <div className=\"flex sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 p-4 mx-auto justify-center\">\n    //       <SpinnerLoading />\n    //     </div>\n    //   )\n    // }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"text-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-5xl font-bold mb-10 mt-40 text-center\",\n                children: \"Nasa Image Gallery\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\tijan\\\\Desktop\\\\git\\\\nasa-apis\\\\app\\\\imageGalery\\\\page.tsx\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-l mb-10\",\n                children: \"Try me?\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\tijan\\\\Desktop\\\\git\\\\nasa-apis\\\\app\\\\imageGalery\\\\page.tsx\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                value: query,\n                className: \"px-4 py-2 border border-gray-300 mb-10 focus:outline-none focus:ring focus:border-blue-300 text-black rounded-xl\",\n                onChange: handleInputChange,\n                placeholder: \"Search images...\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\tijan\\\\Desktop\\\\git\\\\nasa-apis\\\\app\\\\imageGalery\\\\page.tsx\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NasaImageGrid__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                images: images\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\tijan\\\\Desktop\\\\git\\\\nasa-apis\\\\app\\\\imageGalery\\\\page.tsx\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\tijan\\\\Desktop\\\\git\\\\nasa-apis\\\\app\\\\imageGalery\\\\page.tsx\",\n        lineNumber: 49,\n        columnNumber: 5\n    }, undefined);\n};\n_s(NasaImages, \"VxRmeSO1ODhFAYRD0MeWEIfhtpA=\");\n_c = NasaImages;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NasaImages);\nvar _c;\n$RefreshReg$(_c, \"NasaImages\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2ltYWdlR2FsZXJ5L3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFFd0M7QUFDSTtBQWE1QyxNQUFNRyxhQUF1Qjs7SUFDM0IsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdKLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ0ssUUFBUUMsVUFBVSxHQUFHTiwrQ0FBUUEsQ0FBYyxFQUFFO0lBQ3BELE1BQU0sQ0FBQ08sU0FBU0MsV0FBVyxHQUFHUiwrQ0FBUUEsQ0FBQztJQUV2QyxNQUFNUyxlQUFlO1FBQ25CLElBQUk7WUFDRixNQUFNQyxXQUFXLE1BQU1DLE1BQ3JCLHdDQUFrRSxPQUExQkMsbUJBQW1CVCxRQUFPO1lBRXBFLE1BQU1VLE9BQU8sTUFBTUgsU0FBU0k7WUFDNUJSLFVBQVVPLEtBQUtFLFdBQVdDO1FBRTVCLEVBQUUsT0FBT0MsT0FBTztZQUNkQyxRQUFRRCxNQUFNLDJCQUEyQkE7UUFDM0M7SUFDRjtJQUVBLE1BQU1FLG9CQUFvQixDQUFDQztRQUN6QmhCLFNBQVNnQixFQUFFQyxPQUFPQztRQUNsQmI7SUFDRjtJQUVBLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsNEZBQTRGO0lBQzVGLDJCQUEyQjtJQUMzQixhQUFhO0lBQ2IsTUFBTTtJQUNOLElBQUk7SUFFSixxQkFDRSw4REFBQ2M7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNDO2dCQUFHRCxXQUFVOzBCQUE2Qzs7Ozs7OzBCQUMzRCw4REFBQ0U7Z0JBQUVGLFdBQVU7MEJBQWU7Ozs7OzswQkFDNUIsOERBQUNHO2dCQUNDQyxNQUFLO2dCQUNMTixPQUFPbkI7Z0JBQ1BxQixXQUFVO2dCQUNWSyxVQUFVVjtnQkFDVlcsYUFBWTs7Ozs7OzBCQUdkLDhEQUFDN0Isc0RBQWFBO2dCQUFDSSxRQUFRQTs7Ozs7Ozs7Ozs7O0FBRzdCO0dBOUNNSDtLQUFBQTtBQWdETiwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvaW1hZ2VHYWxlcnkvcGFnZS50c3g/NGY5YiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcclxuXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IE5hc2FJbWFnZUdyaWQgZnJvbSAnLi9OYXNhSW1hZ2VHcmlkJztcclxuaW1wb3J0IFNwaW5uZXJMb2FkaW5nIGZyb20gJ0Avc2VydmljZS9zcGlubmVyJztcclxuXHJcbmludGVyZmFjZSBOYXNhSW1hZ2Uge1xyXG4gIGRhdGE6IHtcclxuICAgIG5hc2FfaWQ6IHN0cmluZztcclxuICAgIHRpdGxlOiBzdHJpbmc7XHJcbiAgfVtdO1xyXG4gIGxpbmtzOiB7XHJcbiAgICBocmVmOiBzdHJpbmc7XHJcbiAgfVtdO1xyXG59XHJcblxyXG5jb25zdCBOYXNhSW1hZ2VzOiBSZWFjdC5GQyA9ICgpID0+IHtcclxuICBjb25zdCBbcXVlcnksIHNldFF1ZXJ5XSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbaW1hZ2VzLCBzZXRJbWFnZXNdID0gdXNlU3RhdGU8TmFzYUltYWdlW10+KFtdKTtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNlYXJjaCA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgICAgYGh0dHBzOi8vaW1hZ2VzLWFwaS5uYXNhLmdvdi9zZWFyY2g/cT0ke2VuY29kZVVSSUNvbXBvbmVudChxdWVyeSl9Jm1lZGlhX3R5cGU9aW1hZ2VgXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgIHNldEltYWdlcyhkYXRhLmNvbGxlY3Rpb24uaXRlbXMpO1xyXG4gICAgICBcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHNlYXJjaGluZyBpbWFnZXM6JywgZXJyb3IpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlID0gKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XHJcbiAgICBzZXRRdWVyeShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICBoYW5kbGVTZWFyY2goKTtcclxuICB9O1xyXG5cclxuICAvLyBpZiAobG9hZGluZykge1xyXG4gIC8vICAgcmV0dXJuIChcclxuICAvLyAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHNtOnctMS8yIG1kOnctMS80IGxnOnctMS80IHhsOnctMS80IHAtNCBteC1hdXRvIGp1c3RpZnktY2VudGVyXCI+XHJcbiAgLy8gICAgICAgPFNwaW5uZXJMb2FkaW5nIC8+XHJcbiAgLy8gICAgIDwvZGl2PlxyXG4gIC8vICAgKVxyXG4gIC8vIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cclxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNXhsIGZvbnQtYm9sZCBtYi0xMCBtdC00MCB0ZXh0LWNlbnRlclwiPk5hc2EgSW1hZ2UgR2FsbGVyeTwvaDE+XHJcbiAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbCBtYi0xMFwiPlRyeSBtZT88L3A+XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICB2YWx1ZT17cXVlcnl9XHJcbiAgICAgICAgY2xhc3NOYW1lPVwicHgtNCBweS0yIGJvcmRlciBib3JkZXItZ3JheS0zMDAgbWItMTAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmcgZm9jdXM6Ym9yZGVyLWJsdWUtMzAwIHRleHQtYmxhY2sgcm91bmRlZC14bFwiXHJcbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGltYWdlcy4uLlwiXHJcbiAgICAgIC8+XHJcblxyXG4gICAgICA8TmFzYUltYWdlR3JpZCBpbWFnZXM9e2ltYWdlc30gLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXNhSW1hZ2VzO1xyXG5cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJOYXNhSW1hZ2VHcmlkIiwiTmFzYUltYWdlcyIsInF1ZXJ5Iiwic2V0UXVlcnkiLCJpbWFnZXMiLCJzZXRJbWFnZXMiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImhhbmRsZVNlYXJjaCIsInJlc3BvbnNlIiwiZmV0Y2giLCJlbmNvZGVVUklDb21wb25lbnQiLCJkYXRhIiwianNvbiIsImNvbGxlY3Rpb24iLCJpdGVtcyIsImVycm9yIiwiY29uc29sZSIsImhhbmRsZUlucHV0Q2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJwIiwiaW5wdXQiLCJ0eXBlIiwib25DaGFuZ2UiLCJwbGFjZWhvbGRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./app/imageGalery/page.tsx\n"));

/***/ })

});