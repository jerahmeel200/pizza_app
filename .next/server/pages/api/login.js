"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/login";
exports.ids = ["pages/api/login"];
exports.modules = {

/***/ "cookie":
/*!*************************!*\
  !*** external "cookie" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("cookie");

/***/ }),

/***/ "(api)/./pages/api/login.js":
/*!****************************!*\
  !*** ./pages/api/login.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cookie */ \"cookie\");\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_0__);\n\nconst handler = (req, res)=>{\n    if (req.method === \"POST\") {\n        const { username , password  } = req.body;\n        if (username === process.env.ADMIN_USERNAME && password === process.env.ADMIN_PASSWORD) {\n            console.log(\"hello\");\n            res.setHeader(\"Set-Cookie\", cookie__WEBPACK_IMPORTED_MODULE_0___default().serialize(\"token\", process.env.TOKEN, {\n                maxAge: 60 * 60,\n                sameSite: \"strict\",\n                path: \"/\"\n            }));\n            res.status(200).json(\"Succesfull\");\n        } else {\n            res.status(400).json(\"Wrong Credentials!\");\n        }\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbG9naW4uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTJCO0FBQzNCLEtBQUssQ0FBQ0MsT0FBTyxJQUFJQyxHQUFHLEVBQUVDLEdBQUcsR0FBSyxDQUFDO0lBQzdCLEVBQUUsRUFBRUQsR0FBRyxDQUFDRSxNQUFNLEtBQUssQ0FBTSxPQUFFLENBQUM7UUFDMUIsS0FBSyxDQUFDLENBQUMsQ0FBQ0MsUUFBUSxHQUFFQyxRQUFRLEVBQUMsQ0FBQyxHQUFHSixHQUFHLENBQUNLLElBQUk7UUFDdkMsRUFBRSxFQUNBRixRQUFRLEtBQUtHLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxjQUFjLElBQ3ZDSixRQUFRLEtBQUtFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRSxjQUFjLEVBQ3ZDLENBQUM7WUFDREMsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBTztZQUNuQlYsR0FBRyxDQUFDVyxTQUFTLENBQ1gsQ0FBWSxhQUNaZCx1REFBZ0IsQ0FBQyxDQUFPLFFBQUVRLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTyxLQUFLLEVBQUUsQ0FBQztnQkFDNUNDLE1BQU0sRUFBRSxFQUFFLEdBQUcsRUFBRTtnQkFDZkMsUUFBUSxFQUFFLENBQVE7Z0JBQ2xCQyxJQUFJLEVBQUUsQ0FBRztZQUNYLENBQUM7WUFFSGhCLEdBQUcsQ0FBQ2lCLE1BQU0sQ0FBQyxHQUFHLEVBQUVDLElBQUksQ0FBQyxDQUFZO1FBQ25DLENBQUMsTUFBTSxDQUFDO1lBQ05sQixHQUFHLENBQUNpQixNQUFNLENBQUMsR0FBRyxFQUFFQyxJQUFJLENBQUMsQ0FBb0I7UUFDM0MsQ0FBQztJQUNILENBQUM7QUFDSCxDQUFDO0FBQ0QsaUVBQWVwQixPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9waXp6YS1hcHAvLi9wYWdlcy9hcGkvbG9naW4uanM/YWU4OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY29va2llIGZyb20gXCJjb29raWVcIjtcclxuY29uc3QgaGFuZGxlciA9IChyZXEsIHJlcykgPT4ge1xyXG4gIGlmIChyZXEubWV0aG9kID09PSBcIlBPU1RcIikge1xyXG4gICAgY29uc3QgeyB1c2VybmFtZSwgcGFzc3dvcmQgfSA9IHJlcS5ib2R5O1xyXG4gICAgaWYgKFxyXG4gICAgICB1c2VybmFtZSA9PT0gcHJvY2Vzcy5lbnYuQURNSU5fVVNFUk5BTUUgJiZcclxuICAgICAgcGFzc3dvcmQgPT09IHByb2Nlc3MuZW52LkFETUlOX1BBU1NXT1JEXHJcbiAgICApIHtcclxuICAgICAgY29uc29sZS5sb2coXCJoZWxsb1wiKTtcclxuICAgICAgcmVzLnNldEhlYWRlcihcclxuICAgICAgICBcIlNldC1Db29raWVcIixcclxuICAgICAgICBjb29raWUuc2VyaWFsaXplKFwidG9rZW5cIiwgcHJvY2Vzcy5lbnYuVE9LRU4sIHtcclxuICAgICAgICAgIG1heEFnZTogNjAgKiA2MCxcclxuICAgICAgICAgIHNhbWVTaXRlOiBcInN0cmljdFwiLFxyXG4gICAgICAgICAgcGF0aDogXCIvXCIsXHJcbiAgICAgICAgfSlcclxuICAgICAgKTtcclxuICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oXCJTdWNjZXNmdWxsXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmVzLnN0YXR1cyg0MDApLmpzb24oXCJXcm9uZyBDcmVkZW50aWFscyFcIik7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyO1xyXG4iXSwibmFtZXMiOlsiY29va2llIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJib2R5IiwicHJvY2VzcyIsImVudiIsIkFETUlOX1VTRVJOQU1FIiwiQURNSU5fUEFTU1dPUkQiLCJjb25zb2xlIiwibG9nIiwic2V0SGVhZGVyIiwic2VyaWFsaXplIiwiVE9LRU4iLCJtYXhBZ2UiLCJzYW1lU2l0ZSIsInBhdGgiLCJzdGF0dXMiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/login.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/login.js"));
module.exports = __webpack_exports__;

})();