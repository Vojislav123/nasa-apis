"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/marsImages/page",{

/***/ "(app-client)/./app/marsImages/page.tsx":
/*!*********************************!*\
  !*** ./app/marsImages/page.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _service_apikey__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/service/apikey */ \"(app-client)/./service/apikey.tsx\");\n/* harmony import */ var _service_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/service/spinner */ \"(app-client)/./service/spinner.tsx\");\n/* harmony import */ var _imageModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./imageModal */ \"(app-client)/./app/marsImages/imageModal.tsx\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ \"(app-client)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst MarsRoverPhotos = ()=>{\n    _s();\n    const [roverPhotos, setRoverPhotos] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [selectedPhoto, setSelectedPhoto] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const roverMaxSols = {\n        curiosity: 2866,\n        opportunity: 4111,\n        spirit: 1208,\n        perseverance: 832\n    };\n    const fetchRoverPhotos = async ()=>{\n        const rovers = [\n            \"curiosity\",\n            \"opportunity\",\n            \"spirit\",\n            \"perseverance\"\n        ];\n        try {\n            const requests = rovers.map(async (rover)=>{\n                const maxSol = roverMaxSols[rover];\n                const randomSol = Math.floor(Math.random() * maxSol) + 1;\n                const url = \"https://api.nasa.gov/mars-photos/api/v1/rovers/\".concat(rover, \"/photos?sol=\").concat(randomSol, \"&api_key=\").concat(_service_apikey__WEBPACK_IMPORTED_MODULE_2__.apiKey);\n                const response = await fetch(url);\n                const data = await response.json();\n                return data.photos[0];\n            });\n            const roverPhotos = await Promise.all(requests);\n            const filteredRoverPhotos = roverPhotos.filter((photo)=>photo !== undefined);\n            setRoverPhotos(filteredRoverPhotos);\n            setLoading(false);\n        } catch (error) {\n            console.error(\"Error fetching Mars rover photos:\", error);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchRoverPhotos();\n    }, []);\n    const handleLoadMore = ()=>{\n        setLoading(true);\n        fetchRoverPhotos();\n    };\n    const openImagePopup = (photo)=>{\n        setSelectedPhoto(photo);\n    };\n    const closeImagePopup = ()=>{\n        setSelectedPhoto(null);\n    };\n    const returnSpinner = ()=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 p-4 mx-auto\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_service_spinner__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\tijan\\\\Desktop\\\\git\\\\nasa-apis\\\\app\\\\marsImages\\\\page.tsx\",\n                lineNumber: 86,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\tijan\\\\Desktop\\\\git\\\\nasa-apis\\\\app\\\\marsImages\\\\page.tsx\",\n            lineNumber: 85,\n            columnNumber: 7\n        }, undefined);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"max-w-auto mx-auto rounded-lg shadow-md p-10 bg-black\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-5xl font-bold mb-4 text-center\",\n                children: \"Mars Rover Photos\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\tijan\\\\Desktop\\\\git\\\\nasa-apis\\\\app\\\\marsImages\\\\page.tsx\",\n                lineNumber: 93,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-gray-400 m-4 text-center\",\n                children: \"Here you can see a photo from each rover randomly generated\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\tijan\\\\Desktop\\\\git\\\\nasa-apis\\\\app\\\\marsImages\\\\page.tsx\",\n                lineNumber: 94,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-wrap\",\n                children: loading ? returnSpinner() : roverPhotos.map((roverPhoto)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 p-4 mx-auto\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \"text-lg font-bold mb-2 text-center\",\n                                children: roverPhoto.rover.name\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\tijan\\\\Desktop\\\\git\\\\nasa-apis\\\\app\\\\marsImages\\\\page.tsx\",\n                                lineNumber: 98,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-gray-400 m-2\",\n                                children: roverPhoto.camera.full_name\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\tijan\\\\Desktop\\\\git\\\\nasa-apis\\\\app\\\\marsImages\\\\page.tsx\",\n                                lineNumber: 99,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                src: roverPhoto.img_src,\n                                width: 200,\n                                height: 200,\n                                alt: \"Mars Rover - \".concat(roverPhoto.rover.name),\n                                className: \"w-full rounded-lg cursor-pointer\",\n                                onClick: ()=>openImagePopup(roverPhoto)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\tijan\\\\Desktop\\\\git\\\\nasa-apis\\\\app\\\\marsImages\\\\page.tsx\",\n                                lineNumber: 100,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-gray-400\",\n                                children: [\n                                    \"Earth Date: \",\n                                    roverPhoto.earth_date\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\tijan\\\\Desktop\\\\git\\\\nasa-apis\\\\app\\\\marsImages\\\\page.tsx\",\n                                lineNumber: 107,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, roverPhoto.id, true, {\n                        fileName: \"C:\\\\Users\\\\tijan\\\\Desktop\\\\git\\\\nasa-apis\\\\app\\\\marsImages\\\\page.tsx\",\n                        lineNumber: 97,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\tijan\\\\Desktop\\\\git\\\\nasa-apis\\\\app\\\\marsImages\\\\page.tsx\",\n                lineNumber: 95,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"bg-purple-700 hover:bg-purple-900 text-white font-bold mt-20 py-4 px-6 rounded\",\n                    onClick: handleLoadMore,\n                    children: \"Reload\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\tijan\\\\Desktop\\\\git\\\\nasa-apis\\\\app\\\\marsImages\\\\page.tsx\",\n                    lineNumber: 112,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\tijan\\\\Desktop\\\\git\\\\nasa-apis\\\\app\\\\marsImages\\\\page.tsx\",\n                lineNumber: 111,\n                columnNumber: 7\n            }, undefined),\n            selectedPhoto && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_imageModal__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                photo: selectedPhoto,\n                onClose: closeImagePopup\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\tijan\\\\Desktop\\\\git\\\\nasa-apis\\\\app\\\\marsImages\\\\page.tsx\",\n                lineNumber: 119,\n                columnNumber: 25\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\tijan\\\\Desktop\\\\git\\\\nasa-apis\\\\app\\\\marsImages\\\\page.tsx\",\n        lineNumber: 92,\n        columnNumber: 5\n    }, undefined);\n};\n_s(MarsRoverPhotos, \"9Re8YFJe6Qf9VEwXK9Bgo/Q/jC4=\");\n_c = MarsRoverPhotos;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MarsRoverPhotos);\nvar _c;\n$RefreshReg$(_c, \"MarsRoverPhotos\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU83QjtnQkFBZXVELFNBQVNwQjs7Ozs7Ozs7Ozs7O0FBR25FO0dBOUZNdEM7S0FBQUE7QUFnR04sK0RBQWVBLGVBQWVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL21hcnNJbWFnZXMvcGFnZS50c3g/ODA3YSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcclxuXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBhcGlLZXkgfSBmcm9tICdAL3NlcnZpY2UvYXBpa2V5JztcclxuaW1wb3J0IFNwaW5uZXJMb2FkaW5nIGZyb20gJ0Avc2VydmljZS9zcGlubmVyJztcclxuaW1wb3J0IEltYWdlTW9kYWwgZnJvbSAnLi9pbWFnZU1vZGFsJztcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xyXG5cclxuaW50ZXJmYWNlIFJvdmVyUGhvdG8ge1xyXG4gIGlkOiBudW1iZXI7XHJcbiAgaW1nX3NyYzogc3RyaW5nO1xyXG4gIGVhcnRoX2RhdGU6IHN0cmluZztcclxuICBjYW1lcmE6IHtcclxuICAgIGZ1bGxfbmFtZTogc3RyaW5nO1xyXG4gIH07XHJcbiAgcm92ZXI6IHtcclxuICAgIG5hbWU6IHN0cmluZztcclxuICB9O1xyXG4gIGxpbmtzOiB7XHJcbiAgICBocmVmOiBzdHJpbmc7XHJcbiAgfTtcclxufVxyXG5cclxuaW50ZXJmYWNlIFJvdmVyTWF4U29scyB7XHJcbiAgW3JvdmVyOiBzdHJpbmddOiBudW1iZXI7XHJcbn1cclxuXHJcbmNvbnN0IE1hcnNSb3ZlclBob3RvcyA9ICgpID0+IHtcclxuICBjb25zdCBbcm92ZXJQaG90b3MsIHNldFJvdmVyUGhvdG9zXSA9IHVzZVN0YXRlPFJvdmVyUGhvdG9bXT4oW10pO1xyXG4gIGNvbnN0IFtzZWxlY3RlZFBob3RvLCBzZXRTZWxlY3RlZFBob3RvXSA9IHVzZVN0YXRlPFJvdmVyUGhvdG8gfCBudWxsPihudWxsKTtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHJcblxyXG4gIGNvbnN0IHJvdmVyTWF4U29sczogUm92ZXJNYXhTb2xzID0ge1xyXG4gICAgY3VyaW9zaXR5OiAyODY2LFxyXG4gICAgb3Bwb3J0dW5pdHk6IDQxMTEsXHJcbiAgICBzcGlyaXQ6IDEyMDgsXHJcbiAgICBwZXJzZXZlcmFuY2U6IDgzMixcclxuICB9O1xyXG5cclxuXHJcblxyXG4gIGNvbnN0IGZldGNoUm92ZXJQaG90b3MgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCByb3ZlcnMgPSBbJ2N1cmlvc2l0eScsICdvcHBvcnR1bml0eScsICdzcGlyaXQnLCAncGVyc2V2ZXJhbmNlJ107XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVxdWVzdHMgPSByb3ZlcnMubWFwKGFzeW5jIChyb3ZlcikgPT4ge1xyXG4gICAgICAgIGNvbnN0IG1heFNvbCA9IHJvdmVyTWF4U29sc1tyb3Zlcl07XHJcbiAgICAgICAgY29uc3QgcmFuZG9tU29sID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbWF4U29sKSArIDE7XHJcbiAgICAgICAgY29uc3QgdXJsID0gYGh0dHBzOi8vYXBpLm5hc2EuZ292L21hcnMtcGhvdG9zL2FwaS92MS9yb3ZlcnMvJHtyb3Zlcn0vcGhvdG9zP3NvbD0ke3JhbmRvbVNvbH0mYXBpX2tleT0ke2FwaUtleX1gO1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKTtcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIHJldHVybiBkYXRhLnBob3Rvc1swXTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBjb25zdCByb3ZlclBob3RvcyA9IGF3YWl0IFByb21pc2UuYWxsKHJlcXVlc3RzKTtcclxuICAgICAgY29uc3QgZmlsdGVyZWRSb3ZlclBob3RvcyA9IHJvdmVyUGhvdG9zLmZpbHRlcigocGhvdG8pID0+IHBob3RvICE9PSB1bmRlZmluZWQpO1xyXG4gICAgICBzZXRSb3ZlclBob3RvcyhmaWx0ZXJlZFJvdmVyUGhvdG9zKTtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSlcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIE1hcnMgcm92ZXIgcGhvdG9zOicsIGVycm9yKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZmV0Y2hSb3ZlclBob3RvcygpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTG9hZE1vcmUgPSAoKSA9PiB7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgZmV0Y2hSb3ZlclBob3RvcygpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9wZW5JbWFnZVBvcHVwID0gKHBob3RvOiBSb3ZlclBob3RvKSA9PiB7XHJcbiAgICBzZXRTZWxlY3RlZFBob3RvKHBob3RvKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBjbG9zZUltYWdlUG9wdXAgPSAoKSA9PiB7XHJcbiAgICBzZXRTZWxlY3RlZFBob3RvKG51bGwpO1xyXG4gIH07XHJcblxyXG5cclxuICBjb25zdCByZXR1cm5TcGlubmVyID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHctZnVsbCBzbTp3LTEvMiBtZDp3LTEvNCBsZzp3LTEvNCB4bDp3LTEvNCBwLTQgbXgtYXV0b1wiPlxyXG4gICAgICAgIDxTcGlubmVyTG9hZGluZyAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LWF1dG8gbXgtYXV0byByb3VuZGVkLWxnIHNoYWRvdy1tZCBwLTEwIGJnLWJsYWNrXCI+XHJcbiAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTV4bCBmb250LWJvbGQgbWItNCB0ZXh0LWNlbnRlclwiPk1hcnMgUm92ZXIgUGhvdG9zPC9oMj5cclxuICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTQwMCBtLTQgdGV4dC1jZW50ZXJcIj5IZXJlIHlvdSBjYW4gc2VlIGEgcGhvdG8gZnJvbSBlYWNoIHJvdmVyIHJhbmRvbWx5IGdlbmVyYXRlZDwvcD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcFwiPlxyXG4gICAgICAgIHtsb2FkaW5nPyByZXR1cm5TcGlubmVyKCkgOiAgcm92ZXJQaG90b3MubWFwKChyb3ZlclBob3RvKSA9PiAoXHJcbiAgICAgICAgICA8ZGl2IGtleT17cm92ZXJQaG90by5pZH0gY2xhc3NOYW1lPVwidy1mdWxsIHNtOnctMS8yIG1kOnctMS80IGxnOnctMS80IHhsOnctMS80IHAtNCBteC1hdXRvXCI+XHJcbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtYm9sZCBtYi0yIHRleHQtY2VudGVyXCI+e3JvdmVyUGhvdG8ucm92ZXIubmFtZX08L2gzPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNDAwIG0tMlwiPntyb3ZlclBob3RvLmNhbWVyYS5mdWxsX25hbWV9PC9wPlxyXG4gICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICBzcmM9e3JvdmVyUGhvdG8uaW1nX3NyY31cclxuICAgICAgICAgICAgICB3aWR0aD17MjAwfSBoZWlnaHQ9ezIwMH1cclxuICAgICAgICAgICAgICBhbHQ9e2BNYXJzIFJvdmVyIC0gJHtyb3ZlclBob3RvLnJvdmVyLm5hbWV9YH1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcm91bmRlZC1sZyBjdXJzb3ItcG9pbnRlclwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb3BlbkltYWdlUG9wdXAocm92ZXJQaG90byl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS00MDBcIj5FYXJ0aCBEYXRlOiB7cm92ZXJQaG90by5lYXJ0aF9kYXRlfTwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYmctcHVycGxlLTcwMCBob3ZlcjpiZy1wdXJwbGUtOTAwIHRleHQtd2hpdGUgZm9udC1ib2xkIG10LTIwIHB5LTQgcHgtNiByb3VuZGVkXCJcclxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUxvYWRNb3JlfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIFJlbG9hZFxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAge3NlbGVjdGVkUGhvdG8gJiYgPEltYWdlTW9kYWwgcGhvdG89e3NlbGVjdGVkUGhvdG99IG9uQ2xvc2U9e2Nsb3NlSW1hZ2VQb3B1cH0gLz59XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFyc1JvdmVyUGhvdG9zO1xyXG5cclxuXHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiYXBpS2V5IiwiU3Bpbm5lckxvYWRpbmciLCJJbWFnZU1vZGFsIiwiSW1hZ2UiLCJNYXJzUm92ZXJQaG90b3MiLCJyb3ZlclBob3RvcyIsInNldFJvdmVyUGhvdG9zIiwic2VsZWN0ZWRQaG90byIsInNldFNlbGVjdGVkUGhvdG8iLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInJvdmVyTWF4U29scyIsImN1cmlvc2l0eSIsIm9wcG9ydHVuaXR5Iiwic3Bpcml0IiwicGVyc2V2ZXJhbmNlIiwiZmV0Y2hSb3ZlclBob3RvcyIsInJvdmVycyIsInJlcXVlc3RzIiwibWFwIiwicm92ZXIiLCJtYXhTb2wiLCJyYW5kb21Tb2wiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJ1cmwiLCJyZXNwb25zZSIsImZldGNoIiwiZGF0YSIsImpzb24iLCJwaG90b3MiLCJQcm9taXNlIiwiYWxsIiwiZmlsdGVyZWRSb3ZlclBob3RvcyIsImZpbHRlciIsInBob3RvIiwidW5kZWZpbmVkIiwiZXJyb3IiLCJjb25zb2xlIiwiaGFuZGxlTG9hZE1vcmUiLCJvcGVuSW1hZ2VQb3B1cCIsImNsb3NlSW1hZ2VQb3B1cCIsInJldHVyblNwaW5uZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsInAiLCJyb3ZlclBob3RvIiwiaDMiLCJuYW1lIiwiY2FtZXJhIiwiZnVsbF9uYW1lIiwic3JjIiwiaW1nX3NyYyIsIndpZHRoIiwiaGVpZ2h0IiwiYWx0Iiwib25DbGljayIsImVhcnRoX2RhdGUiLCJpZCIsImJ1dHRvbiIsIm9uQ2xvc2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./app/marsImages/page.tsx\n"));

/***/ })

});