exports.id = 565;
exports.ids = [565];
exports.modules = {

/***/ 9375:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 7604));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 9254))

/***/ }),

/***/ 3259:
/***/ (() => {



/***/ }),

/***/ 7604:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ page)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1621);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(8421);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./service/hamburgerMenu.svg
/* harmony default export */ const hamburgerMenu = ({"src":"/_next/static/media/hamburgerMenu.3286b002.svg","height":64,"width":64,"blurWidth":0,"blurHeight":0});
;// CONCATENATED MODULE: ./service/close.svg
/* harmony default export */ const service_close = ({"src":"/_next/static/media/close.00af1734.svg","height":64,"width":64,"blurWidth":0,"blurHeight":0});
// EXTERNAL MODULE: ./service/nasaLogo.png
var nasaLogo = __webpack_require__(6492);
;// CONCATENATED MODULE: ./app/NavBar/page.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 






const NavBar = ()=>{
    const [navbar, setNavbar] = (0,react_.useState)(false);
    return /*#__PURE__*/ jsx_runtime_.jsx("nav", {
        className: "w-full bg-gray-900 fixed top-0 left-0 right-0 z-10",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex items-center justify-between py-3 md:py-5 md:block",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    width: 20,
                                    height: 20,
                                    className: "w-20",
                                    src: nasaLogo/* default */.Z.src,
                                    alt: "NASA Logo"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "md:hidden",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    className: "p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border",
                                    onClick: ()=>setNavbar(!navbar),
                                    children: navbar ? /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        src: service_close.src,
                                        width: 30,
                                        height: 30,
                                        alt: "close button"
                                    }) : /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        src: hamburgerMenu.src,
                                        width: 30,
                                        height: 30,
                                        alt: "open button"
                                    })
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: `flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "p-12 md:p-0 block" : "hidden"}`,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                            className: "h-screen md:h-auto items-center justify-center font-bold md:flex",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "pb-6 text-xl text-white py-2 md:px-6 text-center border-b-2 md:border-b-0 hover:bg-purple-900 border-purple-900 md:hover:text-purple-600 md:hover:bg-transparent",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/",
                                        onClick: ()=>setNavbar(!navbar),
                                        children: "Home"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "pb-6 text-xl text-white py-2 px-6 text-center border-b-2 md:border-b-0 hover:bg-purple-600 border-purple-900 md:hover:text-purple-600 md:hover:bg-transparent",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/imageGalery",
                                        onClick: ()=>setNavbar(!navbar),
                                        children: "Image Gallery"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "pb-6 text-xl text-white py-2 px-6 text-center border-b-2 md:border-b-0 hover:bg-purple-600 border-purple-900 md:hover:text-purple-600 md:hover:bg-transparent",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/apod",
                                        onClick: ()=>setNavbar(!navbar),
                                        children: "Picture of the Day"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "pb-6 text-xl text-white py-2 px-6 text-center border-b-2 md:border-b-0 hover:bg-purple-600 border-purple-900 md:hover:text-purple-600 md:hover:bg-transparent",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/epic",
                                        onClick: ()=>setNavbar(!navbar),
                                        children: "Epic"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: "pb-6 text-xl text-white py-2 px-6 text-center border-b-2 md:border-b-0 hover:bg-purple-600 border-purple-900 md:hover:text-purple-600 md:hover:bg-transparent",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/marsImages",
                                        onClick: ()=>setNavbar(!navbar),
                                        children: "Mars Images"
                                    })
                                })
                            ]
                        })
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const page = (NavBar);


/***/ }),

/***/ 9254:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* __next_internal_client_entry_do_not_use__ default auto */ 

const ScrollToTop = ()=>{
    const [showButton, setShowButton] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        window.scrollTo(0, 0);
        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return ()=>{
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    const handleScroll = ()=>{
        const scrollY = window.scrollY;
        const headerHeight = 80;
        if (scrollY > headerHeight) {
            setShowButton(true);
        } else {
            setShowButton(false);
        }
    };
    const scrollToTop = ()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: showButton && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
            className: "topButton",
            onClick: scrollToTop,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                children: "Back to Top"
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ScrollToTop);


/***/ }),

/***/ 8374:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$typeof: () => (/* binding */ $$typeof),
/* harmony export */   __esModule: () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1313);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`C:\Users\tijan\Desktop\git\nasa-apis\app\NavBar\page.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ 5430:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"app\\layout.tsx","import":"Inter","arguments":[{"subsets":["latin"]}],"variableName":"inter"}
var target_path_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_ = __webpack_require__(160);
var target_path_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_default = /*#__PURE__*/__webpack_require__.n(target_path_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_);
// EXTERNAL MODULE: ./app/globals.css
var globals = __webpack_require__(2817);
// EXTERNAL MODULE: ./app/NavBar/page.tsx
var page = __webpack_require__(8374);
;// CONCATENATED MODULE: ./app/footer.tsx

const Footer = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: `fixed bottom-0 left-0 w-full h-8 bg-gray-900`,
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "flex items-center justify-center h-full",
            children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "text-center text-white",
                children: "Copyright 2023 Vojislav Alic"
            })
        })
    });
};
/* harmony default export */ const footer = (Footer);

// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(1313);
;// CONCATENATED MODULE: ./service/scrollToTop.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`C:\Users\tijan\Desktop\git\nasa-apis\service\scrollToTop.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const scrollToTop = (__default__);
;// CONCATENATED MODULE: ./app/layout.tsx






const metadata = {
    title: "Nasa API Hub",
    description: "Welcome page"
};
function RootLayout({ children }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("html", {
        lang: "en",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("body", {
            className: (target_path_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_default()).className,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(page["default"], {}),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "overflow-hidden",
                    id: "stars"
                }),
                children,
                /*#__PURE__*/ jsx_runtime_.jsx(scrollToTop, {}),
                /*#__PURE__*/ jsx_runtime_.jsx(footer, {})
            ]
        })
    });
}


/***/ }),

/***/ 6492:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/nasaLogo.a3f86bab.png","height":1700,"width":3400,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAAeklEQVR42mNgYKhgZAADGz4Gtd6JDAytBf8ZGHh/zZrOxAACE6dtZ2FgYGAoq1s1u6N97f/ldfP+78npzGJgYGBYWzuHhaFn0lawgsayRfOmNi//39W25n9Sy8YgBgYGhtr29SwM8gyZYCusGRgEGRhaJzIwtBUwIAEA3BQju0+Ei18AAAAASUVORK5CYII=","blurWidth":8,"blurHeight":4});

/***/ }),

/***/ 3174:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3180);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"any"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ }),

/***/ 2817:
/***/ (() => {



/***/ })

};
;