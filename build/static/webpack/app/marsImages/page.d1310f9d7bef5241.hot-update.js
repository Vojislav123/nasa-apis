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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _service_returnSpinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/service/returnSpinner */ \"(app-client)/./service/returnSpinner.tsx\");\n/* harmony import */ var _imageModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./imageModal */ \"(app-client)/./app/marsImages/imageModal.tsx\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"(app-client)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst MarsRoverPhotos = ()=>{\n    _s();\n    const [roverPhotos, setRoverPhotos] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [selectedPhoto, setSelectedPhoto] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const roverMaxSols = {\n        curiosity: 2866,\n        opportunity: 4111,\n        spirit: 1208,\n        perseverance: 832\n    };\n    const fetchRoverPhotos = async ()=>{\n        const rovers = [\n            \"curiosity\",\n            \"opportunity\",\n            \"spirit\",\n            \"perseverance\"\n        ];\n        try {\n            const requests = rovers.map(async (rover)=>{\n                const maxSol = roverMaxSols[rover];\n                const randomSol = Math.floor(Math.random() * maxSol) + 1;\n                const url = \"https://api.nasa.gov/mars-photos/api/v1/rovers/\".concat(rover, \"/photos?sol=\").concat(randomSol, \"&api_key=DEMO_KEY\");\n                const response = await fetch(url);\n                const data = await response.json();\n                return data.photos[0];\n            });\n            const roverPhotos = await Promise.all(requests);\n            const filteredRoverPhotos = roverPhotos.filter((photo)=>photo !== undefined);\n            setRoverPhotos(filteredRoverPhotos);\n            setLoading(false);\n        } catch (error) {\n            console.error(\"Error fetching Mars rover photos:\", error);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchRoverPhotos();\n    }, []);\n    const handleLoadMore = ()=>{\n        setLoading(true);\n        fetchRoverPhotos();\n    };\n    const openImagePopup = (photo)=>{\n        setSelectedPhoto(photo);\n    };\n    const closeImagePopup = ()=>{\n        setSelectedPhoto(null);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"max-w-auto mx-auto rounded-lg shadow-md p-10\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-5xl font-bold mb-4 text-center\",\n                children: \"Mars Rover Photos\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\tijan\\\\Desktop\\\\git\\\\nasa-apis\\\\app\\\\marsImages\\\\page.tsx\",\n                lineNumber: 84,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-gray-400 m-4 text-center\",\n                children: \"Here you can see a photo from each rover randomly generated\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\tijan\\\\Desktop\\\\git\\\\nasa-apis\\\\app\\\\marsImages\\\\page.tsx\",\n                lineNumber: 85,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-wrap\",\n                children: loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_service_returnSpinner__WEBPACK_IMPORTED_MODULE_2__.ReturnSpinner, {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\tijan\\\\Desktop\\\\git\\\\nasa-apis\\\\app\\\\marsImages\\\\page.tsx\",\n                    lineNumber: 87,\n                    columnNumber: 19\n                }, undefined) : roverPhotos.map((roverPhoto)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 p-4 mx-auto\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \"text-lg font-bold mb-2 text-center\",\n                                children: roverPhoto.rover.name\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\tijan\\\\Desktop\\\\git\\\\nasa-apis\\\\app\\\\marsImages\\\\page.tsx\",\n                                lineNumber: 89,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-gray-400 m-2\",\n                                children: roverPhoto.camera.full_name\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\tijan\\\\Desktop\\\\git\\\\nasa-apis\\\\app\\\\marsImages\\\\page.tsx\",\n                                lineNumber: 90,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                src: roverPhoto.img_src,\n                                width: 200,\n                                height: 200,\n                                alt: \"Mars Rover - \".concat(roverPhoto.rover.name),\n                                className: \"w-full rounded-lg cursor-pointer\",\n                                onClick: ()=>openImagePopup(roverPhoto)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\tijan\\\\Desktop\\\\git\\\\nasa-apis\\\\app\\\\marsImages\\\\page.tsx\",\n                                lineNumber: 91,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-gray-400\",\n                                children: [\n                                    \"Earth Date: \",\n                                    roverPhoto.earth_date\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\tijan\\\\Desktop\\\\git\\\\nasa-apis\\\\app\\\\marsImages\\\\page.tsx\",\n                                lineNumber: 98,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, roverPhoto.id, true, {\n                        fileName: \"C:\\\\Users\\\\tijan\\\\Desktop\\\\git\\\\nasa-apis\\\\app\\\\marsImages\\\\page.tsx\",\n                        lineNumber: 88,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\tijan\\\\Desktop\\\\git\\\\nasa-apis\\\\app\\\\marsImages\\\\page.tsx\",\n                lineNumber: 86,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"bg-purple-700 hover:bg-purple-900 text-white font-bold mt-20 py-4 px-6 rounded\",\n                    onClick: handleLoadMore,\n                    children: \"Reload\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\tijan\\\\Desktop\\\\git\\\\nasa-apis\\\\app\\\\marsImages\\\\page.tsx\",\n                    lineNumber: 103,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\tijan\\\\Desktop\\\\git\\\\nasa-apis\\\\app\\\\marsImages\\\\page.tsx\",\n                lineNumber: 102,\n                columnNumber: 7\n            }, undefined),\n            selectedPhoto && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_imageModal__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                photo: selectedPhoto,\n                onClose: closeImagePopup\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\tijan\\\\Desktop\\\\git\\\\nasa-apis\\\\app\\\\marsImages\\\\page.tsx\",\n                lineNumber: 110,\n                columnNumber: 25\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\tijan\\\\Desktop\\\\git\\\\nasa-apis\\\\app\\\\marsImages\\\\page.tsx\",\n        lineNumber: 83,\n        columnNumber: 5\n    }, undefined);\n};\n_s(MarsRoverPhotos, \"9Re8YFJe6Qf9VEwXK9Bgo/Q/jC4=\");\n_c = MarsRoverPhotos;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MarsRoverPhotos);\nvar _c;\n$RefreshReg$(_c, \"MarsRoverPhotos\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RS8uL2FwcC9tYXJzSW1hZ2VzL3BhZ2UudHN4PzgwN2EiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgUmV0dXJuU3Bpbm5lciB9IGZyb20gJ0Avc2VydmljZS9yZXR1cm5TcGlubmVyJztcclxuaW1wb3J0IEltYWdlTW9kYWwgZnJvbSAnLi9pbWFnZU1vZGFsJztcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xyXG5cclxuaW50ZXJmYWNlIFJvdmVyUGhvdG8ge1xyXG4gIGlkOiBudW1iZXI7XHJcbiAgaW1nX3NyYzogc3RyaW5nO1xyXG4gIGVhcnRoX2RhdGU6IHN0cmluZztcclxuICBjYW1lcmE6IHtcclxuICAgIGZ1bGxfbmFtZTogc3RyaW5nO1xyXG4gIH07XHJcbiAgcm92ZXI6IHtcclxuICAgIG5hbWU6IHN0cmluZztcclxuICB9O1xyXG4gIGxpbmtzOiB7XHJcbiAgICBocmVmOiBzdHJpbmc7XHJcbiAgfTtcclxufVxyXG5cclxuaW50ZXJmYWNlIFJvdmVyTWF4U29scyB7XHJcbiAgW3JvdmVyOiBzdHJpbmddOiBudW1iZXI7XHJcbn1cclxuXHJcbmNvbnN0IE1hcnNSb3ZlclBob3RvcyA9ICgpID0+IHtcclxuICBjb25zdCBbcm92ZXJQaG90b3MsIHNldFJvdmVyUGhvdG9zXSA9IHVzZVN0YXRlPFJvdmVyUGhvdG9bXT4oW10pO1xyXG4gIGNvbnN0IFtzZWxlY3RlZFBob3RvLCBzZXRTZWxlY3RlZFBob3RvXSA9IHVzZVN0YXRlPFJvdmVyUGhvdG8gfCBudWxsPihudWxsKTtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHJcblxyXG4gIGNvbnN0IHJvdmVyTWF4U29sczogUm92ZXJNYXhTb2xzID0ge1xyXG4gICAgY3VyaW9zaXR5OiAyODY2LFxyXG4gICAgb3Bwb3J0dW5pdHk6IDQxMTEsXHJcbiAgICBzcGlyaXQ6IDEyMDgsXHJcbiAgICBwZXJzZXZlcmFuY2U6IDgzMixcclxuICB9O1xyXG5cclxuXHJcblxyXG4gIGNvbnN0IGZldGNoUm92ZXJQaG90b3MgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCByb3ZlcnMgPSBbJ2N1cmlvc2l0eScsICdvcHBvcnR1bml0eScsICdzcGlyaXQnLCAncGVyc2V2ZXJhbmNlJ107XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVxdWVzdHMgPSByb3ZlcnMubWFwKGFzeW5jIChyb3ZlcikgPT4ge1xyXG4gICAgICAgIGNvbnN0IG1heFNvbCA9IHJvdmVyTWF4U29sc1tyb3Zlcl07XHJcbiAgICAgICAgY29uc3QgcmFuZG9tU29sID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbWF4U29sKSArIDE7XHJcbiAgICAgICAgY29uc3QgdXJsID0gYGh0dHBzOi8vYXBpLm5hc2EuZ292L21hcnMtcGhvdG9zL2FwaS92MS9yb3ZlcnMvJHtyb3Zlcn0vcGhvdG9zP3NvbD0ke3JhbmRvbVNvbH0mYXBpX2tleT1ERU1PX0tFWWA7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgcmV0dXJuIGRhdGEucGhvdG9zWzBdO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNvbnN0IHJvdmVyUGhvdG9zID0gYXdhaXQgUHJvbWlzZS5hbGwocmVxdWVzdHMpO1xyXG4gICAgICBjb25zdCBmaWx0ZXJlZFJvdmVyUGhvdG9zID0gcm92ZXJQaG90b3MuZmlsdGVyKChwaG90bykgPT4gcGhvdG8gIT09IHVuZGVmaW5lZCk7XHJcbiAgICAgIHNldFJvdmVyUGhvdG9zKGZpbHRlcmVkUm92ZXJQaG90b3MpO1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgTWFycyByb3ZlciBwaG90b3M6JywgZXJyb3IpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmZXRjaFJvdmVyUGhvdG9zKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBoYW5kbGVMb2FkTW9yZSA9ICgpID0+IHtcclxuICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICBmZXRjaFJvdmVyUGhvdG9zKCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb3BlbkltYWdlUG9wdXAgPSAocGhvdG86IFJvdmVyUGhvdG8pID0+IHtcclxuICAgIHNldFNlbGVjdGVkUGhvdG8ocGhvdG8pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNsb3NlSW1hZ2VQb3B1cCA9ICgpID0+IHtcclxuICAgIHNldFNlbGVjdGVkUGhvdG8obnVsbCk7XHJcbiAgfTtcclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LWF1dG8gbXgtYXV0byByb3VuZGVkLWxnIHNoYWRvdy1tZCBwLTEwXCI+XHJcbiAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTV4bCBmb250LWJvbGQgbWItNCB0ZXh0LWNlbnRlclwiPk1hcnMgUm92ZXIgUGhvdG9zPC9oMj5cclxuICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTQwMCBtLTQgdGV4dC1jZW50ZXJcIj5IZXJlIHlvdSBjYW4gc2VlIGEgcGhvdG8gZnJvbSBlYWNoIHJvdmVyIHJhbmRvbWx5IGdlbmVyYXRlZDwvcD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcFwiPlxyXG4gICAgICAgIHtsb2FkaW5nPyA8UmV0dXJuU3Bpbm5lciAvPiA6ICByb3ZlclBob3Rvcy5tYXAoKHJvdmVyUGhvdG8pID0+IChcclxuICAgICAgICAgIDxkaXYga2V5PXtyb3ZlclBob3RvLmlkfSBjbGFzc05hbWU9XCJ3LWZ1bGwgc206dy0xLzIgbWQ6dy0xLzQgbGc6dy0xLzQgeGw6dy0xLzQgcC00IG14LWF1dG9cIj5cclxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1ib2xkIG1iLTIgdGV4dC1jZW50ZXJcIj57cm92ZXJQaG90by5yb3Zlci5uYW1lfTwvaDM+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS00MDAgbS0yXCI+e3JvdmVyUGhvdG8uY2FtZXJhLmZ1bGxfbmFtZX08L3A+XHJcbiAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgIHNyYz17cm92ZXJQaG90by5pbWdfc3JjfVxyXG4gICAgICAgICAgICAgIHdpZHRoPXsyMDB9IGhlaWdodD17MjAwfVxyXG4gICAgICAgICAgICAgIGFsdD17YE1hcnMgUm92ZXIgLSAke3JvdmVyUGhvdG8ucm92ZXIubmFtZX1gfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCByb3VuZGVkLWxnIGN1cnNvci1wb2ludGVyXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvcGVuSW1hZ2VQb3B1cChyb3ZlclBob3RvKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTQwMFwiPkVhcnRoIERhdGU6IHtyb3ZlclBob3RvLmVhcnRoX2RhdGV9PC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJiZy1wdXJwbGUtNzAwIGhvdmVyOmJnLXB1cnBsZS05MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgbXQtMjAgcHktNCBweC02IHJvdW5kZWRcIlxyXG4gICAgICAgICAgb25DbGljaz17aGFuZGxlTG9hZE1vcmV9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgUmVsb2FkXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7c2VsZWN0ZWRQaG90byAmJiA8SW1hZ2VNb2RhbCBwaG90bz17c2VsZWN0ZWRQaG90b30gb25DbG9zZT17Y2xvc2VJbWFnZVBvcHVwfSAvPn1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYXJzUm92ZXJQaG90b3M7XHJcblxyXG5cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJSZXR1cm5TcGlubmVyIiwiSW1hZ2VNb2RhbCIsIkltYWdlIiwiTWFyc1JvdmVyUGhvdG9zIiwicm92ZXJQaG90b3MiLCJzZXRSb3ZlclBob3RvcyIsInNlbGVjdGVkUGhvdG8iLCJzZXRTZWxlY3RlZFBob3RvIiwibG9hZGluZyIsInNldExvYWRpbmciLCJyb3Zlck1heFNvbHMiLCJjdXJpb3NpdHkiLCJvcHBvcnR1bml0eSIsInNwaXJpdCIsInBlcnNldmVyYW5jZSIsImZldGNoUm92ZXJQaG90b3MiLCJyb3ZlcnMiLCJyZXF1ZXN0cyIsIm1hcCIsInJvdmVyIiwibWF4U29sIiwicmFuZG9tU29sIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwidXJsIiwicmVzcG9uc2UiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwicGhvdG9zIiwiUHJvbWlzZSIsImFsbCIsImZpbHRlcmVkUm92ZXJQaG90b3MiLCJmaWx0ZXIiLCJwaG90byIsInVuZGVmaW5lZCIsImVycm9yIiwiY29uc29sZSIsImhhbmRsZUxvYWRNb3JlIiwib3BlbkltYWdlUG9wdXAiLCJjbG9zZUltYWdlUG9wdXAiLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsInAiLCJyb3ZlclBob3RvIiwiaDMiLCJuYW1lIiwiY2FtZXJhIiwiZnVsbF9uYW1lIiwic3JjIiwiaW1nX3NyYyIsIndpZHRoIiwiaGVpZ2h0IiwiYWx0Iiwib25DbGljayIsImVhcnRoX2RhdGUiLCJpZCIsImJ1dHRvbiIsIm9uQ2xvc2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./app/marsImages/page.tsx\n"));

/***/ })

});