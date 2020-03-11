module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Logo/Logo.js":
/*!*********************************!*\
  !*** ./components/Logo/Logo.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Logo = ({
  color = '#fff'
}) => __jsx("svg", {
  viewBox: "0 180 495 110"
}, __jsx("path", {
  d: "M363.113 225.168v34.25h4.485l.059-14.875.059-14.875.378-1.333c4.174-14.693 22.894-17.61 29.026-4.524 1.598 3.409 1.653 4.117 1.656 21.315l.003 14.292h4.334l-.001-15.292c0-18.154-.014-18.293-2.181-22.592-6.398-12.687-24.211-14.177-32.297-2.701l-.938 1.331-.043-14.623-.042-14.623h-4.498v34.25m58.255-33.16c-3.029 1.152-2.963 5.483.098 6.5 2.973.987 5.588-2.148 4.105-4.923-.76-1.423-2.698-2.15-4.203-1.577m-91.136 19.258c-10.35 1.515-16.239 12.834-10.094 19.403 2.404 2.569 5.247 4.08 10.808 5.745 7.354 2.201 10.19 3.454 12.148 5.368 3.745 3.66 1.265 10.937-4.498 13.203-3.121 1.228-8.388 1.342-11.109.24-2.793-1.131-4.367-2.164-6.672-4.379l-1.722-1.656-1.684 1.684-1.684 1.683.693.828c.711.849 2.302 2.209 3.778 3.229 11.074 7.656 26.697 3.412 28.849-7.836 1.477-7.719-2.752-12.598-13.599-15.691-10.536-3.003-13.267-4.896-13.234-9.169.069-8.786 13.141-11.463 20.564-4.21 1.897 1.854 1.434 1.871 3.423-.128l1.664-1.67-1.417-1.345c-1.304-1.237-3.41-2.697-4.833-3.35-1.965-.902-2.538-1.132-3.611-1.449-2.162-.64-5.393-.847-7.77-.5m131.297.076c-5.072.853-10.561 4.334-13.746 8.716-.41.565-.804 1.027-.875 1.027-.071 0-.129-2.025-.129-4.5v-4.5h-4.5v68.176l2.209-.046 2.208-.047.083-14.917.084-14.916.956 1.269c10.248 13.603 29.494 11.074 37.031-4.867 8.195-17.335-5.661-38.365-23.321-35.395m-351.504.742c-15.57 2.77-24.614 19.791-17.977 33.832 8.692 18.388 33.913 18.949 43.479.967 9.126-17.155-6.307-38.213-25.502-34.799m60.171-.067c-3.553.629-8.208 2.874-10.785 5.203-.896.809-.965.663-.965-2.064v-2.41l-4.792.044-4.791.045v66.666h9.5l.041-12.5c.023-6.875.079-12.6.125-12.722.057-.151.418.068 1.125.683 14.482 12.585 36.608 1.048 36.525-19.044-.046-11.341-6.423-20.026-17.233-23.469-2.092-.666-6.262-.872-8.75-.432m55.083-.178c-.137.027-.812.137-1.5.244-11.226 1.747-19.693 11.758-19.737 23.335-.062 16.186 14.997 27.977 30.64 23.991 2.622-.668 6.26-2.422 8.971-4.324 1.588-1.115 4.793-4.148 4.793-4.536 0-.12-1.377-1.593-3.059-3.274l-3.059-3.055-.732.807c-6.32 6.976-15.075 8.456-21.983 3.716-2.847-1.953-5.834-6.594-5.834-9.065 0-.234 1.824-.26 18.066-.26 16.543 0 18.074-.023 18.17-.272.057-.149.187-1.03.289-1.958 1.559-14.207-8.56-25.541-22.691-25.416-1.146.01-2.196.04-2.334.067m56.334.167c-3.486.625-7 2.269-9.857 4.611-.425.349-.817.634-.87.634-.053 0-.118-.993-.143-2.208l-.047-2.208-4.792-.045-4.791-.044v46.51l4.791-.044 4.792-.044.097-14.25c.06-8.859.161-14.502.268-14.917.42-1.641.612-2.21 1.076-3.191 3.937-8.333 16.619-8.509 20.629-.286 1.142 2.343 1.082 1.437 1.177 17.811l.086 14.833 4.792.044 4.792.044v-14.921c0-17.595-.047-18.134-1.915-22.194-3.456-7.507-11.659-11.646-20.085-10.135m138.5 23.745v23.667h4.333v-47.333h-4.333v23.666m48.583-19.764c15.991 4.474 19.104 27.686 4.993 37.232-13.886 9.394-31.402-6.828-25.88-23.968 3.027-9.397 12.717-15.55 20.887-13.264m-237.583 4.373c4.659.954 9.833 6.53 9.833 10.596 0 .071-6.038.129-13.417.129s-13.416-.063-13.416-.139c0-.335.741-2.353 1.202-3.273 2.981-5.95 8.954-8.714 15.798-7.313m-113.681.575c12.331 3.295 15.12 20.628 4.496 27.938-11.321 7.789-25.727-3.694-21.811-17.387 2.209-7.724 10.038-12.495 17.315-10.551m58.097-.073c9.184 2.318 13.84 13.745 9.21 22.602-5.756 11.009-20.066 10.313-24.972-1.216-4.758-11.18 4.804-24.153 15.762-21.386",
  fill: color || '#fff'
}), __jsx("g", {
  transform: "matrix(1.3, 0, 0, 1.3, 5.39868, 205.029358)"
}, __jsx("rect", {
  x: 27,
  y: 28,
  style: {
    fill: color
  },
  width: 2,
  height: 18,
  "data-original": "#424A60",
  className: "active-path",
  "data-old_color": "#ffffff"
}), __jsx("rect", {
  x: "37.5",
  y: "2.893",
  transform: "matrix(0.7071 0.7071 -0.7071 0.7071 20.8223 -23.2696)",
  style: {
    fill: color
  },
  width: 2,
  height: "21.213",
  "data-original": "#424A60",
  className: "active-path",
  "data-old_color": "#ffffff"
}), __jsx("rect", {
  x: 15,
  y: "21.858",
  transform: "matrix(0.7071 0.7071 -0.7071 0.7071 30.1421 -0.7696)",
  style: {
    fill: color
  },
  width: 2,
  height: "28.284",
  "data-original": "#424A60",
  className: "active-path",
  "data-old_color": "#ffffff"
}), __jsx("rect", {
  x: "10.722",
  y: "13.5",
  transform: "matrix(0.7071 0.7071 -0.7071 0.7071 15.6716 -8.8345)",
  style: {
    fill: color
  },
  width: "15.556",
  height: 2,
  "data-original": "#424A60",
  className: "active-path",
  "data-old_color": "#ffffff"
}), __jsx("rect", {
  x: "26.893",
  y: "32.5",
  transform: "matrix(0.7071 0.7071 -0.7071 0.7071 34.6716 -16.7046)",
  style: {
    fill: color
  },
  width: "21.213",
  height: 2,
  "data-original": "#424A60",
  className: "active-path",
  "data-old_color": "#ffffff"
}), __jsx("circle", {
  style: {
    fill: '#735DD0'
  },
  cx: 48,
  cy: 5,
  r: 5,
  "data-original": "#43B05C",
  "data-old_color": "#745CD4"
}), __jsx("circle", {
  style: {
    fill: '#14B5D0'
  },
  cx: 28,
  cy: 48,
  r: 5,
  "data-original": "#7383BF",
  "data-old_color": "#7383BF"
}), __jsx("circle", {
  style: {
    fill: '#47B881'
  },
  cx: 5,
  cy: 46,
  r: 5,
  "data-original": "#57D8AB",
  "data-old_color": "#43BC84"
}), __jsx("circle", {
  style: {
    fill: '#EC4C47'
  },
  cx: 12,
  cy: 8,
  r: 3,
  "data-original": "#D75A4A",
  "data-old_color": "#F08F4C"
}), __jsx("circle", {
  style: {
    fill: '#EBBA16'
  },
  cx: 44,
  cy: 40,
  r: 3,
  "data-original": "#EBBA16"
}), __jsx("circle", {
  style: {
    fill: '#1070CA'
  },
  cx: 28,
  cy: 24,
  r: 7,
  "data-original": "#4B6DAA",
  "data-old_color": "#0A89CE"
})));

/* harmony default export */ __webpack_exports__["default"] = (Logo);
Logo.propTypes = {
  color: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};

/***/ }),

/***/ "./components/common/DefaultStyles.js":
/*!********************************************!*\
  !*** ./components/common/DefaultStyles.js ***!
  \********************************************/
/*! exports provided: CardStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardStyle", function() { return CardStyle; });
const CardStyle = {
  overflow: 'hidden',
  boxShadow: '0 0 0 1px rgba(63, 63, 68, 0.05), 0 1px 3px 0 rgba(63, 63, 68, 0.15)',
  backgroundColor: 'white',
  borderRadius: 3
};

/***/ }),

/***/ "./components/common/DeleteShop.js":
/*!*****************************************!*\
  !*** ./components/common/DeleteShop.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-boost */ "apollo-boost");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(apollo_boost__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/react-hooks */ "@apollo/react-hooks");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/core */ "@chakra-ui/core");
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _shops_ShopList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shops/ShopList */ "./components/shops/ShopList.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const CREATE_SHOP_MUTATION = apollo_boost__WEBPACK_IMPORTED_MODULE_1__["gql"]`
  mutation deleteShop($id: ID!) {
    deleteShop(id: $id) {
      id
    }
  }
`;

const DeleteShop = ({
  id,
  button
}) => {
  const [deleteShop] = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__["useMutation"])(CREATE_SHOP_MUTATION, {
    refetchQueries: [{
      query: _shops_ShopList__WEBPACK_IMPORTED_MODULE_5__["ALL_SHOPS_QUERY"],
      variables: _shops_ShopList__WEBPACK_IMPORTED_MODULE_5__["shopsQueryVars"]
    }]
  });
  return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Text"], {
    fontSize: "sm",
    fontWeight: 500,
    marginLeft: "auto",
    color: "#ea645f",
    className: "hover",
    cursor: "pointer",
    onClick: async () => {
      await deleteShop({
        variables: {
          id
        }
      });
    }
  }, button);
};

/* harmony default export */ __webpack_exports__["default"] = (DeleteShop);
DeleteShop.propTypes = {
  id: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  button: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string
};

/***/ }),

/***/ "./components/common/ErrorMessage.js":
/*!*******************************************!*\
  !*** ./components/common/ErrorMessage.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/core */ "@chakra-ui/core");
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




const errorCard = {
  paddingX: 10,
  paddingY: 5,
  background: '#FAE2E2',
  borderRadius: 3,
  display: 'flex',
  alignItems: 'center'
};

const DisplayError = ({
  error
}) => {
  if (!error || !error.message) return null;

  if (error.networkError && error.networkError.result && error.networkError.result.errors.length) {
    return error.networkError.result.errors.map((error, i) => __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], _extends({
      key: i
    }, errorCard), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
      name: "warning-2",
      color: "red.400"
    }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
      color: "#EC4C47",
      fontWeight: 500,
      fontSize: "14px"
    }, error.message.replace('GraphQL error: ', ''))));
  }

  return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], errorCard, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    icon: "warning-sign",
    color: "danger",
    marginRight: 10
  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    color: "#EC4C47",
    fontWeight: 500,
    fontSize: "14px"
  }, error.message.replace('GraphQL error: ', '')));
};

DisplayError.defaultProps = {
  error: {}
};
DisplayError.propTypes = {
  error: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (DisplayError);

/***/ }),

/***/ "./components/layout/Header.js":
/*!*************************************!*\
  !*** ./components/layout/Header.js ***!
  \*************************************/
/*! exports provided: NavGroupTitle, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavGroupTitle", function() { return NavGroupTitle; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/core */ "@chakra-ui/core");
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/react-hooks */ "@apollo/react-hooks");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Page */ "./components/layout/Page.js");
/* harmony import */ var _user_Signout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../user/Signout */ "./components/user/Signout.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../config */ "./config.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











const CREATE_CHANNEL_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_6___default.a`
  mutation CREATE_CHANNEL_MUTATION(
    $name: String!
    $type: ChannelType!
    $settings: Json!
  ) {
    createChannel(name: $name, type: $type, settings: $settings) {
      id
      type
      name
      createdAt
      settings
    }
  }
`;

const Divider = __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
  flexShrink: 0,
  height: "3px",
  backgroundColor: "rgb(44, 71, 118)",
  borderRadius: 1,
  marginY: 1,
  marginX: 3
});

const option = (name, options, update, selected) => __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
  marginBottom: 2
}, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Heading"], {
  fontSize: "sm",
  fontWeight: 500,
  marginBottom: 2,
  color: "gray.600"
}, name), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
  width: "100%"
}, options.map((a, index) => __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
  display: "flex",
  alignItems: "center",
  p: 2,
  mt: 2,
  borderRadius: 2,
  bg: a === selected ? 'blue.50' : 'gray.50',
  onClick: () => update(a),
  cursor: "pointer"
}, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
  name: "check-circle",
  color: a === selected ? 'blue.200' : 'gray.400',
  mr: 3
}), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Heading"], {
  fontSize: "xs",
  fontWeight: 500,
  color: a === selected ? 'blue.600' : 'gray.500',
  letterSpacing: "wide",
  textTransform: "uppercase"
}, a)))));

const NavGroupTitle = ({
  title,
  icon
}) => __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
  display: "flex",
  alignItems: "center"
}, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Heading"], {
  my: 2,
  mx: 4,
  textTransform: "uppercase",
  letterSpacing: "wide",
  fontSize: "sm",
  fontWeight: 800,
  color: "#d7dae0",
  flex: 1
}, title), icon);

function postRequest(url, data) {
  return fetch(url, {
    credentials: 'same-origin',
    // 'include', default: 'omit'
    method: 'POST',
    // 'GET', 'PUT', 'DELETE', etc.
    body: JSON.stringify({
      shops: data
    }),
    // Use correct payload (matching 'Content-Type')
    headers: {
      'Content-Type': 'application/json'
    }
  });
}

const Header = ({
  router,
  logo,
  onClick,
  channels,
  channelsError,
  shops,
  shopsError
}) => {
  const {
    0: type,
    1: setType
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('zinc');
  const {
    0: name,
    1: setName
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: key,
    1: setKey
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: secret,
    1: setSecret
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const toast = Object(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["useToast"])();
  const [createChannel] = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_5__["useMutation"])(CREATE_CHANNEL_MUTATION, {
    refetchQueries: [{
      query: _Page__WEBPACK_IMPORTED_MODULE_7__["CHANNELS_QUERY"],
      variables: _Page__WEBPACK_IMPORTED_MODULE_7__["channelsQueryVars"]
    }]
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    postRequest(`${true ? _config__WEBPACK_IMPORTED_MODULE_9__["front"] : undefined}/_shopify`, shops);
  }, [shops]);
  const {
    asPath
  } = router;

  const NavItem = ({
    icon,
    iconColor,
    title,
    href
  }) => __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    borderLeft: `3px solid ${asPath && asPath.startsWith(href) ? 'rgb(66, 95, 146)' : 'transparent'}`,
    background: asPath && asPath.startsWith(href) ? 'rgb(35, 61, 106)' : null,
    onSelect: onClick
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: href
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["PseudoBox"], {
    onSelect: onClick,
    cursor: "pointer",
    width: "100%",
    height: "40px",
    display: "flex",
    alignItems: "center",
    _hover: asPath && !asPath.startsWith(href) && {
      bg: '#192c4e'
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
    name: icon,
    color: iconColor || '#ffffff',
    marginLeft: "13px" // size={15}

  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Heading"], {
    color: "#fff",
    ml: 2,
    fontSize: 15,
    overflow: "visible",
    textTransform: "capitalize"
  }, title))));

  return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    background: "rgb(23, 43, 77)",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column"
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], null, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    width: "100%"
  }, logo, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    py: 2
  }, __jsx(NavGroupTitle, {
    title: "Orders"
  }), __jsx(NavItem, {
    icon: "delta",
    title: "Pending",
    href: "/pending"
  }), __jsx(NavItem, {
    icon: "time",
    title: "Processed",
    href: "/processed"
  }), __jsx(NavItem, {
    icon: "check-circle",
    title: "Completed",
    href: "/completed"
  })), Divider, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    py: 2
  }, __jsx(NavGroupTitle, {
    title: "Products"
  }), __jsx(NavItem, {
    icon: "database",
    title: "All Products",
    href: "/products"
  }), __jsx(NavItem, {
    icon: "globe",
    title: "Marketplace",
    href: "/find"
  })), Divider, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    py: 2
  }, __jsx(NavGroupTitle, {
    title: __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/shops"
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
      color: "#d7dae0",
      cursor: "pointer"
    }, "Shops")),
    icon: __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Popover"], null, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["PopoverTrigger"], null, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
      variantColor: "green",
      backgroundImage: "linear-gradient(to bottom, #23C277, #399D6C)",
      borderRadius: "50%",
      height: "20px",
      minWidth: "20px",
      px: 0,
      mr: 4
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
      size: 5,
      name: "small-add"
    }))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["PopoverContent"], {
      zIndex: 4
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
      width: "100%",
      display: "flex",
      alignItems: "left",
      justifyContent: "center",
      flexDirection: "column",
      padding: 15
    }, __jsx("form", {
      method: "GET",
      action: "/shopify/auth",
      style: {
        width: '100%'
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Text"], {
      fontSize: "sm",
      color: "gray.600",
      mb: 1,
      fontWeight: 500
    }, "Shop Name"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Input"], {
      label: "Shop Name",
      mb: 2
    }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Text"], {
      fontSize: "sm",
      color: "gray.600",
      mb: 1,
      fontWeight: 500
    }, "Shop URL"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Input"], {
      label: "Shop URL",
      mb: 1,
      id: "shop",
      name: "shop"
    }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Text"], {
      fontSize: "xs",
      color: "gray.500",
      mb: 1
    }, "Must end in .myshopify.com"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
      variantColor: "green",
      variant: "ghost",
      backgroundColor: "green.50",
      borderRadius: 3,
      marginRight: 1,
      px: 3,
      height: 8,
      width: "100%"
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Heading"], {
      fontSize: "sm",
      fontWeight: 700,
      textTransform: "uppercase",
      letterSpacing: "wide"
    }, "Add Shop"))))))
  }), (() => {
    if (shopsError || !shops) return null;
    return shops.map((shop, index) => __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
      key: index
    }, __jsx(NavItem, {
      icon: "vinyl",
      iconColor: "green.500",
      title: shop.name,
      href: `/shop?shop=${shop.domain.split('.')[0]}`
    })));
  })()), Divider, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    py: 2
  }, __jsx(NavGroupTitle, {
    title: __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
      color: "#d7dae0",
      cursor: "pointer"
    }, "Channels"),
    icon: __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Popover"], null, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["PopoverTrigger"], null, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
      variantColor: "green",
      backgroundImage: "linear-gradient(to bottom, #23C277, #399D6C)",
      borderRadius: "50%",
      height: "20px",
      minWidth: "20px",
      px: 0,
      mr: 4
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
      size: 5,
      name: "small-add"
    }))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["PopoverContent"], {
      zIndex: 4
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
      width: "100%",
      display: "flex",
      alignItems: "left",
      justifyContent: "center",
      flexDirection: "column",
      padding: 15
    }, option('Channel Type', ['zinc', 'custom'], a => setType(a), type), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Text"], {
      fontSize: "sm",
      color: "gray.600",
      mb: 1,
      fontWeight: 500
    }, "Name"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Input"], {
      label: "Name",
      mb: 2,
      value: name,
      onChange: e => setName(e.target.value)
    }), type === 'zinc' && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Text"], {
      fontSize: "sm",
      color: "gray.600",
      mb: 1,
      fontWeight: 500
    }, "API Key"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Input"], {
      label: "API Key",
      mb: 1,
      value: key,
      onChange: e => setKey(e.target.value)
    }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Text"], {
      fontSize: "xs",
      color: "gray.500",
      mb: 2
    }, "You must get the key at Zinc.io")), type === 'custom' && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Text"], {
      fontSize: "sm",
      color: "gray.600",
      mb: 1,
      fontWeight: 500
    }, "API Key"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Input"], {
      label: "Name",
      mb: 2,
      value: key,
      onChange: e => setKey(e.target.value)
    }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Text"], {
      fontSize: "sm",
      color: "gray.600",
      mb: 1,
      fontWeight: 500
    }, "Secret"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Input"], {
      label: "Secret",
      mb: 2,
      value: secret,
      onChange: e => setSecret(e.target.value)
    })), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
      variantColor: "green",
      variant: "ghost",
      backgroundColor: "green.50",
      borderRadius: 3,
      marginRight: 1,
      px: 3,
      height: 8,
      width: "100%",
      onClick: async () => {
        await createChannel({
          variables: {
            type: type.toUpperCase(),
            name,
            settings: _objectSpread({}, key && {
              key
            }, {}, secret && {
              secret
            })
          }
        });
        setName('');
        setKey('');
        setSecret('');
        toast({
          position: 'top-right',
          title: 'Channel has been added.',
          status: 'success',
          duration: 2000,
          isClosable: true
        });
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Heading"], {
      fontSize: "sm",
      fontWeight: 700,
      textTransform: "uppercase",
      letterSpacing: "wide"
    }, "Add Channel")))))
  }), (() => {
    if (channelsError || !channels) return null;
    return channels.map((channel, index) => __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
      key: index
    }, __jsx(NavItem, {
      icon: "vinyl",
      iconColor: "green.500",
      title: channel.name,
      href: `/channel?channel=${channel.name}`
    })));
  })()), Divider, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], null, __jsx(NavItem, {
    icon: "settings",
    title: "Settings",
    href: "/settings"
  })))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    marginTop: "auto"
  }, __jsx(_user_Signout__WEBPACK_IMPORTED_MODULE_8__["default"], null)));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(Header));

/***/ }),

/***/ "./components/layout/Meta.js":
/*!***********************************!*\
  !*** ./components/layout/Meta.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Meta = () => __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, __jsx("meta", {
  name: "viewport",
  content: "width=device-width, initial-scale=1"
}), __jsx("meta", {
  charSet: "utf-8"
}), __jsx("link", {
  rel: "shortcut icon",
  href: "/static/favicon.png"
}), __jsx("title", null, "openship"));

/* harmony default export */ __webpack_exports__["default"] = (Meta);

/***/ }),

/***/ "./components/layout/Page.js":
/*!***********************************!*\
  !*** ./components/layout/Page.js ***!
  \***********************************/
/*! exports provided: CHANNELS_QUERY, channelsQueryVars, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANNELS_QUERY", function() { return CHANNELS_QUERY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "channelsQueryVars", function() { return channelsQueryVars; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/core */ "@chakra-ui/core");
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-boost */ "apollo-boost");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(apollo_boost__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/react-hooks */ "@apollo/react-hooks");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _shops_ShopList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shops/ShopList */ "./components/shops/ShopList.js");
/* harmony import */ var _Logo_Logo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Logo/Logo */ "./components/Logo/Logo.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Header */ "./components/layout/Header.js");
/* harmony import */ var _Meta__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Meta */ "./components/layout/Meta.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }










const CHANNELS_QUERY = apollo_boost__WEBPACK_IMPORTED_MODULE_3__["gql"]`
  query($first: Int!, $skip: Int!) {
    channels(orderBy: createdAt_ASC, first: $first, skip: $skip) {
      id
      type
      name
      createdAt
      settings
    }
  }
`;
const channelsQueryVars = {
  skip: 0,
  first: 10
};

const Page = ({
  children,
  shopsURL
}) => {
  const {
    0: isShown,
    1: setIsShown
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    data: channelsData,
    error: channelsError,
    loading: channelsLoading
  } = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__["useQuery"])(CHANNELS_QUERY, {
    variables: channelsQueryVars
  });
  const {
    data: shopsData,
    error: shopsError,
    loading: shopsLoading
  } = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__["useQuery"])(_shops_ShopList__WEBPACK_IMPORTED_MODULE_5__["ALL_SHOPS_QUERY"], {
    variables: _shops_ShopList__WEBPACK_IMPORTED_MODULE_5__["shopsQueryVars"]
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_Meta__WEBPACK_IMPORTED_MODULE_8__["default"], null), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    className: "layout"
  }, (() => {
    if (shopsError || !shopsData || !shopsData.shops) return null;
    const {
      shops
    } = shopsData;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      className: "hidden"
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      position: "sticky",
      background: "rgb(23, 43, 77)",
      top: "0",
      display: "grid",
      boxShadow: "0 0 1px rgba(67,90,111,.47), 0 2px 4px -2px rgba(67,90,111,.3)",
      width: "270px"
    }, __jsx(_Header__WEBPACK_IMPORTED_MODULE_7__["default"], {
      channels: channelsData && channelsData.channels,
      channelsError: channelsError,
      shops: shopsData.shops,
      shopsError: shopsError,
      logo: __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
        margin: 18,
        marginBottom: 0
      }, __jsx(_Logo_Logo__WEBPACK_IMPORTED_MODULE_6__["default"], null))
    }))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      className: "show"
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Drawer"], {
      size: "sm",
      isOpen: isShown,
      placement: "left",
      onClose: () => setIsShown(false)
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["DrawerOverlay"], null), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["DrawerContent"], null, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["DrawerCloseButton"], {
      color: "White"
    }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["DrawerBody"], {
      bg: "#f9f9fb",
      p: 0
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], null, __jsx(_Header__WEBPACK_IMPORTED_MODULE_7__["default"], {
      channels: channelsData && channelsData.channels,
      channelsError: channelsError,
      shops: shopsData.shops,
      shopsError: shopsError,
      isShown: isShown,
      onClick: () => setIsShown(false)
    }))))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      display: "flex",
      padding: 4,
      background: "rgb(23, 43, 77)"
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      marginLeft: 2,
      flex: 1,
      alignItems: "center",
      display: "flex",
      onClick: () => setIsShown(true)
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      className: "hover",
      borderRadius: 7
    }, __jsx("svg", {
      width: 38,
      height: 38,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "#fff",
      strokeWidth: 1.5,
      strokeLinecap: "round",
      strokeLinejoin: "bevel"
    }, __jsx("line", {
      x1: 3,
      y1: 12,
      x2: 21,
      y2: 12
    }), __jsx("line", {
      x1: 3,
      y1: 6,
      x2: 13,
      y2: 6
    }), __jsx("line", {
      x1: 10,
      y1: 18,
      x2: 21,
      y2: 18
    })))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      width: "200px",
      marginRight: 7
    }, __jsx(_Logo_Logo__WEBPACK_IMPORTED_MODULE_6__["default"], null)))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      padding: "1.3rem",
      paddingTop: "0rem",
      width: "100%",
      background: "rgb(245, 246, 247)",
      minHeight: "100vh"
    }, shops.length || shopsURL ? __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      maxWidth: "1100px",
      marginY: "0px",
      marginX: "auto"
    }, children) : __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], _extends({
      backgroundImage: `url(
                      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 304 304' width='304' height='304'%3E%3Cpath fill='%23d0d0d0' fill-opacity='0.1' d='M44.1 224a5 5 0 1 1 0 2H0v-2h44.1zm160 48a5 5 0 1 1 0 2H82v-2h122.1zm57.8-46a5 5 0 1 1 0-2H304v2h-42.1zm0 16a5 5 0 1 1 0-2H304v2h-42.1zm6.2-114a5 5 0 1 1 0 2h-86.2a5 5 0 1 1 0-2h86.2zm-256-48a5 5 0 1 1 0 2H0v-2h12.1zm185.8 34a5 5 0 1 1 0-2h86.2a5 5 0 1 1 0 2h-86.2zM258 12.1a5 5 0 1 1-2 0V0h2v12.1zm-64 208a5 5 0 1 1-2 0v-54.2a5 5 0 1 1 2 0v54.2zm48-198.2V80h62v2h-64V21.9a5 5 0 1 1 2 0zm16 16V64h46v2h-48V37.9a5 5 0 1 1 2 0zm-128 96V208h16v12.1a5 5 0 1 1-2 0V210h-16v-76.1a5 5 0 1 1 2 0zm-5.9-21.9a5 5 0 1 1 0 2H114v48H85.9a5 5 0 1 1 0-2H112v-48h12.1zm-6.2 130a5 5 0 1 1 0-2H176v-74.1a5 5 0 1 1 2 0V242h-60.1zm-16-64a5 5 0 1 1 0-2H114v48h10.1a5 5 0 1 1 0 2H112v-48h-10.1zM66 284.1a5 5 0 1 1-2 0V274H50v30h-2v-32h18v12.1zM236.1 176a5 5 0 1 1 0 2H226v94h48v32h-2v-30h-48v-98h12.1zm25.8-30a5 5 0 1 1 0-2H274v44.1a5 5 0 1 1-2 0V146h-10.1zm-64 96a5 5 0 1 1 0-2H208v-80h16v-14h-42.1a5 5 0 1 1 0-2H226v18h-16v80h-12.1zm86.2-210a5 5 0 1 1 0 2H272V0h2v32h10.1zM98 101.9V146H53.9a5 5 0 1 1 0-2H96v-42.1a5 5 0 1 1 2 0zM53.9 34a5 5 0 1 1 0-2H80V0h2v34H53.9zm60.1 3.9V66H82v64H69.9a5 5 0 1 1 0-2H80V64h32V37.9a5 5 0 1 1 2 0zM101.9 82a5 5 0 1 1 0-2H128V37.9a5 5 0 1 1 2 0V82h-28.1zm16-64a5 5 0 1 1 0-2H146v44.1a5 5 0 1 1-2 0V18h-26.1zm102.2 270a5 5 0 1 1 0 2H98v14h-2v-16h124.1zM242 149.9V160h16v34h-16v62h48v48h-2v-46h-48v-66h16v-30h-16v-12.1a5 5 0 1 1 2 0zM53.9 18a5 5 0 1 1 0-2H64V2H48V0h18v18H53.9zm112 32a5 5 0 1 1 0-2H192V0h50v2h-48v48h-28.1zm-48-48a5 5 0 0 1-9.8-2h2.07a3 3 0 1 0 5.66 0H178v34h-18V21.9a5 5 0 1 1 2 0V32h14V2h-58.1zm0 96a5 5 0 1 1 0-2H137l32-32h39V21.9a5 5 0 1 1 2 0V66h-40.17l-32 32H117.9zm28.1 90.1a5 5 0 1 1-2 0v-76.51L175.59 80H224V21.9a5 5 0 1 1 2 0V82h-49.59L146 112.41v75.69zm16 32a5 5 0 1 1-2 0v-99.51L184.59 96H300.1a5 5 0 0 1 3.9-3.9v2.07a3 3 0 0 0 0 5.66v2.07a5 5 0 0 1-3.9-3.9H185.41L162 121.41v98.69zm-144-64a5 5 0 1 1-2 0v-3.51l48-48V48h32V0h2v50H66v55.41l-48 48v2.69zM50 53.9v43.51l-48 48V208h26.1a5 5 0 1 1 0 2H0v-65.41l48-48V53.9a5 5 0 1 1 2 0zm-16 16V89.41l-34 34v-2.82l32-32V69.9a5 5 0 1 1 2 0zM12.1 32a5 5 0 1 1 0 2H9.41L0 43.41V40.6L8.59 32h3.51zm265.8 18a5 5 0 1 1 0-2h18.69l7.41-7.41v2.82L297.41 50H277.9zm-16 160a5 5 0 1 1 0-2H288v-71.41l16-16v2.82l-14 14V210h-28.1zm-208 32a5 5 0 1 1 0-2H64v-22.59L40.59 194H21.9a5 5 0 1 1 0-2H41.41L66 216.59V242H53.9zm150.2 14a5 5 0 1 1 0 2H96v-56.6L56.6 162H37.9a5 5 0 1 1 0-2h19.5L98 200.6V256h106.1zm-150.2 2a5 5 0 1 1 0-2H80v-46.59L48.59 178H21.9a5 5 0 1 1 0-2H49.41L82 208.59V258H53.9zM34 39.8v1.61L9.41 66H0v-2h8.59L32 40.59V0h2v39.8zM2 300.1a5 5 0 0 1 3.9 3.9H3.83A3 3 0 0 0 0 302.17V256h18v48h-2v-46H2v42.1zM34 241v63h-2v-62H0v-2h34v1zM17 18H0v-2h16V0h2v18h-1zm273-2h14v2h-16V0h2v16zm-32 273v15h-2v-14h-14v14h-2v-16h18v1zM0 92.1A5.02 5.02 0 0 1 6 97a5 5 0 0 1-6 4.9v-2.07a3 3 0 1 0 0-5.66V92.1zM80 272h2v32h-2v-32zm37.9 32h-2.07a3 3 0 0 0-5.66 0h-2.07a5 5 0 0 1 9.8 0zM5.9 0A5.02 5.02 0 0 1 0 5.9V3.83A3 3 0 0 0 3.83 0H5.9zm294.2 0h2.07A3 3 0 0 0 304 3.83V5.9a5 5 0 0 1-3.9-5.9zm3.9 300.1v2.07a3 3 0 0 0-1.83 1.83h-2.07a5 5 0 0 1 3.9-3.9zM97 100a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-48 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 48a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 96a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-144a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-96 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm96 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-32 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM49 36a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-32 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM33 68a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-48a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 240a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm80-176a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 48a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm112 176a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM17 180a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM17 84a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6z'%3E%3C/path%3E%3C/svg%3E"
                    )`
    }, {
      minHeight: "100vh"
    }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      paddingTop: 150
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
      fontSize: "xl",
      color: "text",
      paddingBottom: 15
    }, "Take full control of your e-commerce operations"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
      fontSize: "md"
    }, "Get started by adding a Shopify shop"), __jsx("form", {
      method: "GET",
      action: "/shopify/auth"
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["InputGroup"], {
      size: "md",
      marginTop: 10,
      width: "25rem"
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Input"], {
      id: "shop",
      name: "shop",
      pr: "4.5rem",
      pl: "2.4rem",
      placeholder: "franksbikeshop.myshopify.com",
      borderColor: "gray.300"
    }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["InputLeftElement"], {
      children: __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
        name: "shop",
        color: "gray.400"
      })
    }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["InputRightElement"], {
      width: "3.5rem"
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      type: "submit",
      h: "1.75rem",
      size: "sm",
      variantColor: "green"
    }, "GO"))))))));
  })()));
};

/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ }),

/***/ "./components/shops/ShopList.js":
/*!**************************************!*\
  !*** ./components/shops/ShopList.js ***!
  \**************************************/
/*! exports provided: ALL_SHOPS_QUERY, shopsQueryVars, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALL_SHOPS_QUERY", function() { return ALL_SHOPS_QUERY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shopsQueryVars", function() { return shopsQueryVars; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ShopList; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/react-hooks */ "@apollo/react-hooks");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/core */ "@chakra-ui/core");
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ShopListItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ShopListItem */ "./components/shops/ShopListItem.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const ALL_SHOPS_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default.a`
  query($first: Int!, $skip: Int!) {
    shops(orderBy: createdAt_DESC, first: $first, skip: $skip) {
      id
      domain
      accessToken
      createdAt
      name
      settings
    }
  }
`;
const shopsQueryVars = {
  skip: 0,
  first: 10
};
function ShopList() {
  const {
    data,
    loading,
    error
  } = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__["useQuery"])(ALL_SHOPS_QUERY, {
    variables: shopsQueryVars
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    display: "flex",
    py: 4
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Heading"], {
    fontSize: "2xl",
    color: "text",
    fontWeight: 500
  }, "Shops"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    ml: "auto"
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Popover"], {
    placement: "bottom-end"
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["PopoverTrigger"], null, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    background: "#DDEBF7",
    color: "#1070CA",
    borderRadius: 3,
    marginRight: 1,
    px: 2,
    height: 5,
    textTransform: "uppercase",
    letterSpacing: "wide",
    fontSize: "xs",
    fontWeight: 700
  }, "Add Shop")), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["PopoverContent"], {
    zIndex: 4
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    width: "100%",
    display: "flex",
    alignItems: "left",
    justifyContent: "center",
    flexDirection: "column",
    padding: 15
  }, __jsx("form", {
    method: "GET",
    action: "/shopify/auth",
    style: {
      width: '100%'
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    fontSize: "sm",
    color: "gray.600",
    mb: 1,
    fontWeight: 500
  }, "Shop Name"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    label: "Shop Name",
    mb: 2
  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    fontSize: "sm",
    color: "gray.600",
    mb: 1,
    fontWeight: 500
  }, "Shop URL"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    label: "Shop URL",
    mb: 1,
    id: "shop",
    name: "shop"
  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    fontSize: "xs",
    color: "gray.500",
    mb: 1
  }, "Must end in .myshopify.com"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    variantColor: "green",
    variant: "ghost",
    backgroundColor: "green.50",
    borderRadius: 3,
    marginRight: 1,
    px: 3,
    height: 8,
    width: "100%"
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Heading"], {
    fontSize: "sm",
    fontWeight: 700,
    textTransform: "uppercase",
    letterSpacing: "wide"
  }, "Add Shop")))))))), (() => {
    if (loading) return __jsx("p", null, "Loading...");
    if (error || !data.shops) return __jsx("h1", null, "Error loading shops: ", error);
    return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
      display: "flex",
      width: "calc(100% + 20px)",
      flexWrap: "wrap",
      marginX: "-10px"
    }, data.shops.map(shop => __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
      flex: 1,
      padding: 3,
      key: shop.id
    }, __jsx(_ShopListItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
      shop: shop
    }))));
  })());
}

/***/ }),

/***/ "./components/shops/ShopListItem.js":
/*!******************************************!*\
  !*** ./components/shops/ShopListItem.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/core */ "@chakra-ui/core");
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_DeleteShop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/DeleteShop */ "./components/common/DeleteShop.js");
/* harmony import */ var _common_DefaultStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/DefaultStyles */ "./components/common/DefaultStyles.js");
/* harmony import */ var _WebhookSwitch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./WebhookSwitch */ "./components/shops/WebhookSwitch.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const ShopListItem = ({
  shop
}) => __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], _common_DefaultStyles__WEBPACK_IMPORTED_MODULE_4__["CardStyle"], __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
  padding: 15
}, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
  display: "flex"
}, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
  marginBottom: 3
}, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
  fontWeight: 500,
  fontSize: "lg",
  textTransform: "capitalize",
  color: "text"
}, shop.name), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
  fontSize: "sm",
  textTransform: "uppercase",
  color: "gray.500",
  fontWeight: 400
}, "Name")), __jsx(_common_DeleteShop__WEBPACK_IMPORTED_MODULE_3__["default"], {
  id: shop.id,
  button: "Delete"
})), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], null, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
  fontWeight: 500,
  fontSize: "md",
  color: "text"
}, shop.domain), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
  fontSize: "xs",
  textTransform: "uppercase",
  color: "gray.500",
  fontWeight: 400
}, "URL"))), __jsx(_WebhookSwitch__WEBPACK_IMPORTED_MODULE_5__["default"], {
  domain: shop.domain,
  accessToken: shop.accessToken
}));

/* harmony default export */ __webpack_exports__["default"] = (ShopListItem);
ShopListItem.propTypes = {
  shop: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired
};

/***/ }),

/***/ "./components/shops/WebhookSwitch.js":
/*!*******************************************!*\
  !*** ./components/shops/WebhookSwitch.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/core */ "@chakra-ui/core");
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../config */ "./config.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






function getWebhooks(domain, accessToken, setResults) {
  const url = `${true ? _config__WEBPACK_IMPORTED_MODULE_4__["front"] : undefined}/${accessToken}/graphql`;
  isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default()(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: `
    {
      webhookSubscriptions(first :5
        callbackUrl: "${_config__WEBPACK_IMPORTED_MODULE_4__["prodEndpoint"]}order?spdn=${domain}"
        ) {
          edges{
            node{
              id
              callbackUrl
              createdAt
              topic
              includeFields
            }
          }
        }
      }
    `
    })
  }).then(res => res.json()).then(res => {
    if (res.data) {
      const results = res.data.webhookSubscriptions.edges;
      setResults(results);
    }
  });
}

function createWebhook(domain, accessToken, setResults) {
  const url = `${true ? _config__WEBPACK_IMPORTED_MODULE_4__["front"] : undefined}/${accessToken}/graphql`;
  isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default()(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: `
      mutation webhookSubscriptionCreate(
        $topic: WebhookSubscriptionTopic!
        $webhookSubscription: WebhookSubscriptionInput!
      ) {
        webhookSubscriptionCreate(
          topic: $topic
          webhookSubscription: $webhookSubscription
        ) {
          userErrors {
            field
            message
          }
          webhookSubscription {
            id
          }
        }
      }
    `,
      variables: {
        topic: 'ORDERS_CREATE',
        webhookSubscription: {
          callbackUrl: `${_config__WEBPACK_IMPORTED_MODULE_4__["prodEndpoint"]}order?spdn=${domain}`,
          format: 'JSON'
        }
      }
    })
  }).then(res => res.json()).then(res => {
    const webhook = res.data.webhookSubscriptionCreate;
    getWebhooks(domain, accessToken, setResults);
  });
}

function deleteWebhook(id, domain, accessToken, setResults) {
  const url = `${true ? _config__WEBPACK_IMPORTED_MODULE_4__["front"] : undefined}/${accessToken}/graphql`;
  isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default()(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: `
      mutation   {
        webhookSubscriptionDelete(
          id: "${id}"
        ) {
          deletedWebhookSubscriptionId
        }
      }
    `
    })
  }).then(res => res.json()).then(res => {
    getWebhooks(domain, accessToken, setResults);
  });
}

const WebhookSwitch = ({
  domain,
  accessToken
}) => {
  const {
    0: results,
    1: setResults
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    getWebhooks(domain, accessToken, setResults);
  }, [domain, accessToken]);

  function handleSwitch(e) {
    if (e.target.checked) {
      createWebhook(domain, accessToken, setResults);
    } else {
      deleteWebhook(results[0].node.id, domain, accessToken, setResults);
    }
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    paddingY: 2,
    paddingX: 4,
    background: "#f5f5f5",
    display: "flex",
    alignItems: "center",
    width: "100%"
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    paddingRight: 15
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Heading"], {
    fontSize: "sm",
    fontWeight: 500,
    mb: 1,
    color: "gray.800"
  }, "Push orders to Openship"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    fontSize: "xs",
    color: "gray.700"
  }, "Orders will be pushed to the pending tab to be fulfilled")), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Switch"], {
    marginLeft: "auto",
    isChecked: results.length > 0,
    onChange: e => handleSwitch(e)
  })), results.map(a => __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    paddingY: 2,
    paddingX: 3
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    display: "flex",
    alignItems: "center",
    marginBottom: 2
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    fontSize: "sm",
    fontWeight: 500,
    align: "right",
    marginRight: 2,
    flexBasis: "100px",
    textAlign: "right",
    color: "text"
  }, "Endpoint:"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Code"], {
    variantColor: "blue",
    fontSize: "xs",
    wordWrap: "break-word"
  }, "Openship")), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    display: "flex",
    alignItems: "center"
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    fontSize: "sm",
    fontWeight: 500,
    align: "right",
    marginRight: 2,
    flexBasis: "100px",
    textAlign: "right",
    color: "text"
  }, "Topic:"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Code"], {
    variantColor: "blue",
    fontSize: "xs"
  }, a.node.topic)))));
};

/* harmony default export */ __webpack_exports__["default"] = (WebhookSwitch);
WebhookSwitch.propTypes = {
  domain: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired
};

/***/ }),

/***/ "./components/user/PleaseSignIn.js":
/*!*****************************************!*\
  !*** ./components/user/PleaseSignIn.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/react-hooks */ "@apollo/react-hooks");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/core */ "@chakra-ui/core");
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./User */ "./components/user/User.js");
/* harmony import */ var _Signin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Signin */ "./components/user/Signin.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const PleaseSignIn = ({
  children
}) => {
  const {
    data,
    loading,
    error
  } = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__["useQuery"])(_User__WEBPACK_IMPORTED_MODULE_4__["CURRENT_USER_QUERY"]);

  if (loading) {
    return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh"
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Spinner"], {
      thickness: "4px",
      speed: "0.65s",
      emptyColor: "gray.200",
      color: "blue.500",
      size: "xl"
    }));
  }

  if (!data) {
    return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh"
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      background: "rgb(250, 226, 226)",
      borderRadius: 2,
      padding: 3,
      marginX: 4
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      display: 'inline-block',
      boxSizing: 'border-box',
      marginX: 4,
      marginY: 2,
      borderRadius: 2,
      textAlign: 'center',
      textDecoration: 'none',
      textTransform: 'uppercase',
      color: 'rgb(191, 14, 8)',
      fontSize: '18px',
      fontWeight: 600
    }, "URL not Whitelisted. Please check URL under settings.")));
  }

  if (!data.me) {
    return __jsx(_Signin__WEBPACK_IMPORTED_MODULE_5__["default"], null);
  }

  return children;
};

/* harmony default export */ __webpack_exports__["default"] = (PleaseSignIn);
PleaseSignIn.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.element.isRequired
};

/***/ }),

/***/ "./components/user/RequestReset.js":
/*!*****************************************!*\
  !*** ./components/user/RequestReset.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/react-hooks */ "@apollo/react-hooks");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Userform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Userform */ "./components/user/Userform.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const REUQEST_RESET_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default.a`
  mutation SIGNUP_MUTATION($email: String!) {
    requestReset(email: $email) {
      message
    }
  }
`;

function RequestReset({
  formChange
}) {
  const {
    0: email,
    1: setEmail
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [reset, {
    error,
    loading,
    called
  }] = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__["useMutation"])(REUQEST_RESET_MUTATION, {
    variables: {
      email
    }
  });
  return __jsx(_Userform__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "Please enter your email and we'll send a link to reset your password",
    handleToggleClick: () => formChange(),
    buttonTitle: "Send Reset Link",
    buttonColor: "#14B5D0",
    error: error,
    loading: loading,
    buttonDisabled: !email,
    fields: [{
      label: 'Email',
      value: email,
      onChange: setEmail,
      icon: 'envelope'
    }],
    bottomLinkText: "Back to sign in",
    onSubmit: async e => {
      e.preventDefault();
      await reset();
      setEmail('');
    },
    success: called
  });
}

/* harmony default export */ __webpack_exports__["default"] = (RequestReset);
RequestReset.propTypes = {
  formChange: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired
};

/***/ }),

/***/ "./components/user/Signin.js":
/*!***********************************!*\
  !*** ./components/user/Signin.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/react-hooks */ "@apollo/react-hooks");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/core */ "@chakra-ui/core");
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./User */ "./components/user/User.js");
/* harmony import */ var _Signup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Signup */ "./components/user/Signup.js");
/* harmony import */ var _RequestReset__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./RequestReset */ "./components/user/RequestReset.js");
/* harmony import */ var _Logo_Logo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Logo/Logo */ "./components/Logo/Logo.js");
/* harmony import */ var _Userform__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Userform */ "./components/user/Userform.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }











const SIGNIN_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default.a`
  mutation SIGNIN_MUTATION($email: String!, $password: String!) {
    signin(email: $email, password: $password) {
      id
      email
      name
    }
  }
`;

function Signin() {
  const {
    0: password,
    1: setPassword
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: email,
    1: setEmail
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: form,
    1: setForm
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('signin');
  const [signin, {
    error,
    loading,
    called
  }] = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__["useMutation"])(SIGNIN_MUTATION, {
    variables: {
      email,
      password
    },
    refetchQueries: [{
      query: _User__WEBPACK_IMPORTED_MODULE_5__["CURRENT_USER_QUERY"]
    }],
    onCompleted: () => {
      next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push('/');
    }
  });
  return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Box"], _extends({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    height: "100vh",
    background: "tint1"
  }, {
    backgroundImage: `url(
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 304 304' width='304' height='304'%3E%3Cpath fill='%23d0d0d0' fill-opacity='0.1' d='M44.1 224a5 5 0 1 1 0 2H0v-2h44.1zm160 48a5 5 0 1 1 0 2H82v-2h122.1zm57.8-46a5 5 0 1 1 0-2H304v2h-42.1zm0 16a5 5 0 1 1 0-2H304v2h-42.1zm6.2-114a5 5 0 1 1 0 2h-86.2a5 5 0 1 1 0-2h86.2zm-256-48a5 5 0 1 1 0 2H0v-2h12.1zm185.8 34a5 5 0 1 1 0-2h86.2a5 5 0 1 1 0 2h-86.2zM258 12.1a5 5 0 1 1-2 0V0h2v12.1zm-64 208a5 5 0 1 1-2 0v-54.2a5 5 0 1 1 2 0v54.2zm48-198.2V80h62v2h-64V21.9a5 5 0 1 1 2 0zm16 16V64h46v2h-48V37.9a5 5 0 1 1 2 0zm-128 96V208h16v12.1a5 5 0 1 1-2 0V210h-16v-76.1a5 5 0 1 1 2 0zm-5.9-21.9a5 5 0 1 1 0 2H114v48H85.9a5 5 0 1 1 0-2H112v-48h12.1zm-6.2 130a5 5 0 1 1 0-2H176v-74.1a5 5 0 1 1 2 0V242h-60.1zm-16-64a5 5 0 1 1 0-2H114v48h10.1a5 5 0 1 1 0 2H112v-48h-10.1zM66 284.1a5 5 0 1 1-2 0V274H50v30h-2v-32h18v12.1zM236.1 176a5 5 0 1 1 0 2H226v94h48v32h-2v-30h-48v-98h12.1zm25.8-30a5 5 0 1 1 0-2H274v44.1a5 5 0 1 1-2 0V146h-10.1zm-64 96a5 5 0 1 1 0-2H208v-80h16v-14h-42.1a5 5 0 1 1 0-2H226v18h-16v80h-12.1zm86.2-210a5 5 0 1 1 0 2H272V0h2v32h10.1zM98 101.9V146H53.9a5 5 0 1 1 0-2H96v-42.1a5 5 0 1 1 2 0zM53.9 34a5 5 0 1 1 0-2H80V0h2v34H53.9zm60.1 3.9V66H82v64H69.9a5 5 0 1 1 0-2H80V64h32V37.9a5 5 0 1 1 2 0zM101.9 82a5 5 0 1 1 0-2H128V37.9a5 5 0 1 1 2 0V82h-28.1zm16-64a5 5 0 1 1 0-2H146v44.1a5 5 0 1 1-2 0V18h-26.1zm102.2 270a5 5 0 1 1 0 2H98v14h-2v-16h124.1zM242 149.9V160h16v34h-16v62h48v48h-2v-46h-48v-66h16v-30h-16v-12.1a5 5 0 1 1 2 0zM53.9 18a5 5 0 1 1 0-2H64V2H48V0h18v18H53.9zm112 32a5 5 0 1 1 0-2H192V0h50v2h-48v48h-28.1zm-48-48a5 5 0 0 1-9.8-2h2.07a3 3 0 1 0 5.66 0H178v34h-18V21.9a5 5 0 1 1 2 0V32h14V2h-58.1zm0 96a5 5 0 1 1 0-2H137l32-32h39V21.9a5 5 0 1 1 2 0V66h-40.17l-32 32H117.9zm28.1 90.1a5 5 0 1 1-2 0v-76.51L175.59 80H224V21.9a5 5 0 1 1 2 0V82h-49.59L146 112.41v75.69zm16 32a5 5 0 1 1-2 0v-99.51L184.59 96H300.1a5 5 0 0 1 3.9-3.9v2.07a3 3 0 0 0 0 5.66v2.07a5 5 0 0 1-3.9-3.9H185.41L162 121.41v98.69zm-144-64a5 5 0 1 1-2 0v-3.51l48-48V48h32V0h2v50H66v55.41l-48 48v2.69zM50 53.9v43.51l-48 48V208h26.1a5 5 0 1 1 0 2H0v-65.41l48-48V53.9a5 5 0 1 1 2 0zm-16 16V89.41l-34 34v-2.82l32-32V69.9a5 5 0 1 1 2 0zM12.1 32a5 5 0 1 1 0 2H9.41L0 43.41V40.6L8.59 32h3.51zm265.8 18a5 5 0 1 1 0-2h18.69l7.41-7.41v2.82L297.41 50H277.9zm-16 160a5 5 0 1 1 0-2H288v-71.41l16-16v2.82l-14 14V210h-28.1zm-208 32a5 5 0 1 1 0-2H64v-22.59L40.59 194H21.9a5 5 0 1 1 0-2H41.41L66 216.59V242H53.9zm150.2 14a5 5 0 1 1 0 2H96v-56.6L56.6 162H37.9a5 5 0 1 1 0-2h19.5L98 200.6V256h106.1zm-150.2 2a5 5 0 1 1 0-2H80v-46.59L48.59 178H21.9a5 5 0 1 1 0-2H49.41L82 208.59V258H53.9zM34 39.8v1.61L9.41 66H0v-2h8.59L32 40.59V0h2v39.8zM2 300.1a5 5 0 0 1 3.9 3.9H3.83A3 3 0 0 0 0 302.17V256h18v48h-2v-46H2v42.1zM34 241v63h-2v-62H0v-2h34v1zM17 18H0v-2h16V0h2v18h-1zm273-2h14v2h-16V0h2v16zm-32 273v15h-2v-14h-14v14h-2v-16h18v1zM0 92.1A5.02 5.02 0 0 1 6 97a5 5 0 0 1-6 4.9v-2.07a3 3 0 1 0 0-5.66V92.1zM80 272h2v32h-2v-32zm37.9 32h-2.07a3 3 0 0 0-5.66 0h-2.07a5 5 0 0 1 9.8 0zM5.9 0A5.02 5.02 0 0 1 0 5.9V3.83A3 3 0 0 0 3.83 0H5.9zm294.2 0h2.07A3 3 0 0 0 304 3.83V5.9a5 5 0 0 1-3.9-5.9zm3.9 300.1v2.07a3 3 0 0 0-1.83 1.83h-2.07a5 5 0 0 1 3.9-3.9zM97 100a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-48 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 48a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 96a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-144a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-96 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm96 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-32 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM49 36a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-32 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM33 68a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-48a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 240a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm80-176a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 48a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm112 176a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM17 180a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM17 84a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6z'%3E%3C/path%3E%3C/svg%3E"
      )`
  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Box"], {
    margin: 2,
    background: "white",
    padding: 6,
    borderRadius: 5,
    boxShadow: "0 0 1px rgba(67,90,111,.47), 0 2px 4px -2px rgba(67,90,111,.3)"
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Box"], {
    width: 180,
    marginBottom: "15px"
  }, __jsx(_Logo_Logo__WEBPACK_IMPORTED_MODULE_8__["default"], {
    color: "#162b4c"
  })), form === 'signup' && __jsx(_Signup__WEBPACK_IMPORTED_MODULE_6__["default"], {
    formChange: () => setForm('signin')
  }), form === 'forgot' && __jsx(_RequestReset__WEBPACK_IMPORTED_MODULE_7__["default"], {
    formChange: () => setForm('signin')
  }), form === 'signin' && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_Userform__WEBPACK_IMPORTED_MODULE_9__["default"], {
    title: "Sign in",
    handleToggleClick: () => setForm('signup'),
    buttonTitle: "Sign In",
    buttonColor: "blue",
    buttonDisabled: email === '' || password === '',
    error: error,
    loading: loading,
    fields: [{
      label: 'Email',
      value: email,
      onChange: setEmail,
      icon: 'envelope'
    }, {
      label: 'Password',
      value: password,
      onChange: setPassword,
      icon: 'lock'
    }],
    bottomText: "Don't have an account yet?",
    bottomLinkText: "Sign up for free",
    onSubmit: async e => {
      e.preventDefault();
      await signin();
      setEmail('');
      setPassword('');
    },
    links: __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Text"], {
      marginLeft: "auto",
      fontSize: "md",
      borderBottom: "2px solid #EDF0F2",
      cursor: "pointer",
      color: "gray.500",
      onClick: () => setForm('forgot')
    }, "Forgot Password")
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (Signin);

/***/ }),

/***/ "./components/user/Signout.js":
/*!************************************!*\
  !*** ./components/user/Signout.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/core */ "@chakra-ui/core");
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/react-hooks */ "@apollo/react-hooks");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./User */ "./components/user/User.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const SIGN_OUT_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default.a`
  mutation SIGN_OUT_MUTATION {
    signout {
      message
    }
  }
`;

const Signout = () => {
  const [signout, {
    error,
    loading
  }] = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__["useMutation"])(SIGN_OUT_MUTATION, {
    refetchQueries: [{
      query: _User__WEBPACK_IMPORTED_MODULE_4__["CURRENT_USER_QUERY"]
    }]
  });
  return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    height: 30,
    cursor: "pointer",
    onClick: () => signout().then(() => window.location.href = '/')
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    display: "flex"
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    marginLeft: "13px",
    alignItems: "center",
    justifyContent: "center",
    display: "flex"
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    size: 5,
    name: "arrow-forward",
    color: "#EC4C47"
  })), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    ml: 2,
    color: "#fff",
    fontSize: 15,
    overflow: "visible",
    textTransform: "capitalize"
  }, "Sign Out")));
};

/* harmony default export */ __webpack_exports__["default"] = (Signout);

/***/ }),

/***/ "./components/user/Signup.js":
/*!***********************************!*\
  !*** ./components/user/Signup.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/react-hooks */ "@apollo/react-hooks");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./User */ "./components/user/User.js");
/* harmony import */ var _Userform__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Userform */ "./components/user/Userform.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const SIGNUP_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default.a`
  mutation SIGNUP_MUTATION(
    $email: String!
    $name: String!
    $password: String!
  ) {
    signup(email: $email, name: $name, password: $password) {
      id
      email
      name
    }
  }
`;

function Signup({
  formChange
}) {
  const {
    0: name,
    1: setName
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: password,
    1: setPassword
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: email,
    1: setEmail
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [signup, {
    error,
    loading
  }] = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__["useMutation"])(SIGNUP_MUTATION, {
    variables: {
      name,
      password,
      email
    },
    refetchQueries: [{
      query: _User__WEBPACK_IMPORTED_MODULE_4__["CURRENT_USER_QUERY"]
    }]
  });
  return __jsx(_Userform__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: "Create an account",
    handleToggleClick: () => formChange(),
    buttonTitle: "Sign Up",
    error: error,
    loading: loading,
    buttonDisabled: !email || !password || !name,
    fields: [{
      label: 'Name',
      value: name,
      onChange: setName,
      icon: 'user'
    }, {
      label: 'Email',
      value: email,
      onChange: setEmail,
      icon: 'envelope'
    }, {
      label: 'Password',
      value: password,
      onChange: setPassword,
      icon: 'lock'
    }],
    bottomText: "Already have an account?",
    bottomLinkText: "Sign In",
    onSubmit: async e => {
      e.preventDefault();
      await signup();
      setName('');
      setEmail('');
      setPassword('');
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = (Signup);
Signup.propTypes = {
  formChange: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
};

/***/ }),

/***/ "./components/user/User.js":
/*!*********************************!*\
  !*** ./components/user/User.js ***!
  \*********************************/
/*! exports provided: CURRENT_USER_QUERY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CURRENT_USER_QUERY", function() { return CURRENT_USER_QUERY; });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);

const CURRENT_USER_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query {
    me {
      id
      email
      name
      permissions
      url
      zincToken
      buyer {
        status
        questions
        account
      }
      seller {
        status
        questions
        account
      }
    }
  }
`;


/***/ }),

/***/ "./components/user/Userform.js":
/*!*************************************!*\
  !*** ./components/user/Userform.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/core */ "@chakra-ui/core");
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_ErrorMessage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/ErrorMessage */ "./components/common/ErrorMessage.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const sucessCard = {
  paddingX: 10,
  paddingY: 5,
  background: '#F1FAF5',
  borderRadius: 3,
  display: 'flex',
  alignItems: 'center'
};

const Userform = ({
  title,
  fields,
  handleToggleClick,
  links,
  buttonTitle,
  buttonColor,
  bottomText,
  bottomLinkText,
  onSubmit,
  buttonDisabled,
  error,
  loading,
  success
}) => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
  width: 350,
  alignItems: "center"
}, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
  marginBottom: 2,
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
  fontSize: "lg",
  fontWeight: "500",
  marginRight: "auto",
  color: "#425A70"
}, title), links && links), fields && fields.map(field => __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["InputGroup"], {
  width: "100%",
  borderColor: "gray.200",
  mb: 4
}, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["InputLeftElement"], {
  children: __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    name: field.icon,
    color: "gray.300"
  })
}), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Input"], {
  value: field.value,
  name: field.label,
  type: field.type || field.label,
  onChange: e => field.onChange(e.target.value),
  placeholder: field.label
}))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
  bg: buttonColor === 'blue' ? '#DDEBF7' : '#d4eee2',
  color: buttonColor === 'blue' ? '#1070ca' : '#00783e',
  _hover: buttonColor === 'blue' ? {
    bg: '#c0d8ed'
  } : {
    bg: '#bfe3d2'
  },
  borderRadius: 3,
  px: 3,
  height: 8,
  width: "100%",
  disabled: buttonDisabled,
  isLoading: loading,
  onClick: onSubmit
}, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
  fontSize: "md",
  textTransform: "uppercase",
  letterSpacing: "wider",
  fontWeight: 700,
  marginRight: 2
}, buttonTitle), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
  size: 4,
  name: "arrow-forward"
})), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
  marginTop: 15
}, __jsx(_common_ErrorMessage__WEBPACK_IMPORTED_MODULE_3__["default"], {
  error: error
})), success && __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], sucessCard, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
  icon: "tick-circle",
  color: "success",
  marginRight: 10
}), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
  color: "#47B881",
  fontWeight: 500,
  fontSize: "14px"
}, "Link sent. Please check your email."))), handleToggleClick && __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
  mt: 6
}, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
  width: "100%",
  color: "gray.500",
  my: 1
}, bottomText), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
  float: "left",
  onClick: handleToggleClick,
  color: buttonColor === 'blue' ? '#1070ca' : '#00783e',
  paddingBottom: "1px",
  borderBottom: `2px solid ${buttonColor === 'blue' ? '#1070ca' : '#00783e'}`,
  cursor: "pointer",
  className: "hover",
  my: 0
}, bottomLinkText)));

/* harmony default export */ __webpack_exports__["default"] = (Userform);
Userform.propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.element,
  fields: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array,
  handleToggleClick: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  links: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.element,
  buttonTitle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  buttonColor: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  bottomText: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  bottomLinkText: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  onSubmit: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  buttonDisabled: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  error: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  loading: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  success: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool
};

/***/ }),

/***/ "./config.js":
/*!*******************!*\
  !*** ./config.js ***!
  \*******************/
/*! exports provided: endpoint, prodEndpoint, front, prodFront, perPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "endpoint", function() { return endpoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prodEndpoint", function() { return prodEndpoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "front", function() { return front; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prodFront", function() { return prodFront; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "perPage", function() { return perPage; });
// This is client side config only - don't put anything in here that shouldn't be public!
const endpoint = `http://localhost:4444/`;
const prodEndpoint = `https://server.app.openship.org/`;
const front = `http://localhost:3000`;
const prodFront = `https://dashboard.openship.org`;
const perPage = 4;

/***/ }),

/***/ "./lib/withData.js":
/*!*************************!*\
  !*** ./lib/withData.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_with_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-with-apollo */ "next-with-apollo");
/* harmony import */ var next_with_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_with_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-boost */ "apollo-boost");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(apollo_boost__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/react-hooks */ "@apollo/react-hooks");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config */ "./config.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




/* harmony default export */ __webpack_exports__["default"] = (next_with_apollo__WEBPACK_IMPORTED_MODULE_1___default()(({
  initialState,
  headers
}) => {
  return new apollo_boost__WEBPACK_IMPORTED_MODULE_2___default.a({
    uri: true ? _config__WEBPACK_IMPORTED_MODULE_4__["endpoint"] : undefined,
    cache: new apollo_boost__WEBPACK_IMPORTED_MODULE_2__["InMemoryCache"]().restore(initialState || {}),
    request: operation => {
      operation.setContext({
        fetchOptions: {
          credentials: "include"
        },
        headers
      });
    }
  });
}, {
  render: ({
    Page,
    props
  }) => {
    return __jsx(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__["ApolloProvider"], {
      client: props.apollo
    }, __jsx(Page, props));
  }
})); // function createClient({ headers }) {
//   return new ApolloClient({
//     uri: process.env.NODE_ENV === 'development' ? endpoint : prodEndpoint,
//     request: operation => {
//       operation.setContext({
//         fetchOptions: {
//           credentials: 'include',
//         },
//         headers,
//       });
//     },
//   });
// }
// export default withApollo(createClient);

/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _url = __webpack_require__(/*! url */ "url");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      var isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (true) {
        // rethrow to show invalid URL errors
        throw err;
      }
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function addBasePath(path) {
  // variable is always a string
  const p = "";
  return path.indexOf(p) !== 0 ? p + path : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      // @ts-ignore __NEXT_DATA__
      pathname: `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`,
      query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && url_1.parse(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = url_1.parse(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, addBasePath(as), options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, addBasePath(as), options);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        }

        this.set(route, pathname, query, as, routeInfo);

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "./node_modules/next/node_modules/react-is/index.js");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch page code, you may wait for the data during page rendering.
   * This feature only works in production!
   * @param url the href of prefetched page
   * @param asPath the as path of the prefetched page
   */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      }

      Promise.all([this.pageLoader.prefetchData(url, asPath), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](toRoute(pathname))]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = decodeURIComponent;
    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

exports.AppInitialProps = _utils.AppInitialProps;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps(_ref) {
  var {
    Component,
    ctx
  } = _ref;
  var pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    var {
      router,
      Component,
      pageProps,
      __N_SSG,
      __N_SSP
    } = this.props;
    return _react.default.createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy
    // methods like getStaticProps and getServerSideProps
    !(__N_SSG || __N_SSP) ? {
      url: createUrl(router)
    } : {}));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
var warnContainer;
var warnUrl;

if (true) {
  warnContainer = (0, _utils.execOnce)(() => {
    console.warn("Warning: the `Container` in `_app` has been deprecated and should be removed. https://err.sh/zeit/next.js/app-container-deprecated");
  });
  warnUrl = (0, _utils.execOnce)(() => {
    console.error("Warning: the 'url' property is deprecated. https://err.sh/zeit/next.js/url-deprecated");
  });
} // @deprecated noop for now until removal


function Container(p) {
  if (true) warnContainer();
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  var {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (true) warnUrl();
      return query;
    },

    get pathname() {
      if (true) warnUrl();
      return pathname;
    },

    get asPath() {
      if (true) warnUrl();
      return asPath;
    },

    back: () => {
      if (true) warnUrl();
      router.back();
    },
    push: (url, as) => {
      if (true) warnUrl();
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (true) warnUrl();
      var pushRoute = as ? href : '';
      var pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (true) warnUrl();
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (true) warnUrl();
      var replaceRoute = as ? href : '';
      var replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js":
/*!*************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/cjs/react-is.development.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.6
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;
          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

// AsyncMode is deprecated along with isAsyncMode
var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;

var hasWarnedAboutDeprecatedIsAsyncMode = false;

// AsyncMode should be deprecated
function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }
  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/react-hooks */ "@apollo/react-hooks");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/core */ "@chakra-ui/core");
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_layout_Page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/layout/Page */ "./components/layout/Page.js");
/* harmony import */ var _lib_withData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/withData */ "./lib/withData.js");
/* harmony import */ var _components_user_PleaseSignIn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/user/PleaseSignIn */ "./components/user/PleaseSignIn.js");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../theme */ "./theme.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








class MyApp extends next_app__WEBPACK_IMPORTED_MODULE_1___default.a {
  static async getInitialProps({
    Component,
    ctx,
    apolloClient
  }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    } // this exposes the query to the user


    pageProps.query = ctx.query;
    return {
      pageProps,
      path: ctx.asPath
    };
  }

  render() {
    const {
      Component,
      apollo,
      pageProps,
      path
    } = this.props;

    function pathCheck(p) {
      if (p.startsWith('/reset')) {
        return __jsx(Component, pageProps);
      }

      return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["ThemeProvider"], {
        theme: _theme__WEBPACK_IMPORTED_MODULE_7__["default"]
      }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["CSSReset"], null), __jsx(_components_user_PleaseSignIn__WEBPACK_IMPORTED_MODULE_6__["default"], null, __jsx(_components_layout_Page__WEBPACK_IMPORTED_MODULE_4__["default"], {
        shopsURL: p.startsWith('/shops') || p.startsWith('/settings') && true
      }, __jsx(Component, pageProps))));
    }

    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("style", null, `
          .layout {
            display: flex;
          }
          .hover:hover {
            opacity: 0.85;
          }

          .shine {
            background: #e4e7eb;
            background-image: linear-gradient(
              to right,
              #e4e7eb 0%,
              #edeef1 20%,
              #e4e7eb 40%,
              #e4e7eb 100%
            );
            background-repeat: no-repeat;
            background-size: 800px 104px;
            display: inline-block;
            position: relative;

            -webkit-animation-duration: 1.5s;
            -webkit-animation-fill-mode: forwards;
            -webkit-animation-iteration-count: infinite;
            -webkit-animation-name: placeholderShimmer;
            -webkit-animation-timing-function: linear;
          }

          a:link {
            text-decoration: none;
            color: rgb(35, 67, 97);
          }

          a:visited {
            text-decoration: none;
            color: rgb(35, 67, 97);
          }

          a:hover {
            text-decoration: none;
            color: #2e669a;
          }

          a:active {
            text-decoration: none;
            color: #2e669a;
          }

          .clean-input {
            box-shadow: none;
          }

          @-webkit-keyframes placeholderShimmer {
            0% {
              background-position: -468px 0;
            }

            100% {
              background-position: 468px 0;
            }
          }

          @media screen and (max-width: 768px) {
            .hidden {
              display: none;
            }

            .layout {
              display: block;
            }
          }
          @media screen and (min-width: 769px) {
            .show {
              display: none;
            }
          }
          ::-webkit-input-placeholder {
            /* Chrome/Opera/Safari */
            color: #8b949c !important;
            opacity: 1 !important;
          }
          ::-moz-placeholder {
            /* Firefox 19+ */
            color: #8b949c !important;
            opacity: 1 !important;
          }
          :-ms-input-placeholder {
            /* IE 10+ */
            color: #8b949c !important;
            opacity: 1 !important;
          }
          :-moz-placeholder {
            /* Firefox 18- */
            color: #8b949c !important;
            opacity: 1 !important;
          }
          .dot-flashing {
            position: relative;
            width: 6px;
            height: 6px;
            border-radius: 5px;
            background-color: #d0d5da;
            color: #9880ff;
            animation: dotFlashing 1s infinite linear alternate;
            animation-delay: 0.5s;
          }

          .dot-flashing::before,
          .dot-flashing::after {
            content: "";
            display: inline-block;
            position: absolute;
            top: 0;
          }

          .dot-flashing::before {
            left: -12px;
            width: 6px;
            height: 6px;
            border-radius: 5px;
            background-color: #d0d5da;
            color: #9880ff;
            animation: dotFlashing 1s infinite alternate;
            animation-delay: 0s;
          }

          .dot-flashing::after {
            left: 12px;
            width: 6px;
            height: 6px;
            border-radius: 5px;
            background-color: #d0d5da;
            color: #9880ff;
            animation: dotFlashing 1s infinite alternate;
            animation-delay: 1s;
          }

          @keyframes dotFlashing {
            0% {
              background-color: #425a70;
            }
            50%,
            100% {
              background-color: #d0d5da;
            }
          }
        `), __jsx(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__["ApolloProvider"], {
      client: apollo
    }, pathCheck(path)));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(_lib_withData__WEBPACK_IMPORTED_MODULE_5__["default"])(MyApp));

/***/ }),

/***/ "./theme.js":
/*!******************!*\
  !*** ./theme.js ***!
  \******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/core */ "@chakra-ui/core");
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const fonts = _objectSpread({}, _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["theme"].fonts, {
  mono: `'Menlo', monospace`
});

const breakpoints = ['40em', '52em', '64em'];

const theme = _objectSpread({}, _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["theme"], {
  colors: _objectSpread({}, _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["theme"].colors, {
    black: '#16161D',
    text: '#234361'
  }),
  fonts,
  breakpoints,
  icons: _objectSpread({}, _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["theme"].icons, {
    logo: {
      path: __jsx("svg", {
        width: "3000",
        height: "3163",
        viewBox: "0 0 3000 3163",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, __jsx("rect", {
        width: "3000",
        height: "3162.95",
        fill: "none"
      }), __jsx("path", {
        d: "M1470.89 1448.81L2170 2488.19H820V706.392H2170L1470.89 1448.81ZM1408.21 1515.37L909.196 2045.3V2393.46H1998.84L1408.21 1515.37Z",
        fill: "currentColor"
      })),
      viewBox: '0 0 3000 3163'
    },
    delta: {
      path: __jsx("svg", {
        "data-icon": "delta",
        viewBox: "0 0 16 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, __jsx("path", {
        fill: "currentColor",
        d: "M8 0L0 16h16L8 0zM7 5l5 10H2L7 5z",
        fillRule: "evenodd"
      }))
    },
    vinyl: {
      path: __jsx("svg", {
        version: "1.1",
        viewBox: "0 0 48 48",
        fill: "none"
      }, __jsx("path", {
        fill: "currentColor",
        d: "M24 0C10.746 0 0 10.746 0 24s10.746 24 24 24 24-10.746 24-24S37.254 0 24 0zm0 36c-6.627 0-12-5.373-12-12s5.373-12 12-12 12 5.373 12 12-5.373 12-12 12z"
      }))
    },
    globe: {
      path: __jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1",
        id: "Globe",
        viewBox: "0 0 20 20",
        enableBackground: "new 0 0 20 20",
        xmlSpace: "preserve",
        fill: "none"
      }, __jsx("path", {
        fill: "currentColor",
        d: "M10,0.4c-5.295,0-9.601,4.307-9.601,9.6S4.705,19.6,10,19.6c5.293,0,9.6-4.307,9.6-9.6S15.293,0.4,10,0.4z   M18.188,10c0,1.873-0.636,3.6-1.696,4.98c-0.3-0.234-0.619-0.867-0.319-1.523c0.303-0.66,0.382-2.188,0.312-2.783  c-0.066-0.594-0.375-2.025-1.214-2.039c-0.838-0.012-1.413-0.289-1.911-1.283c-1.033-2.068,1.939-2.465,0.906-3.609  c-0.289-0.322-1.783,1.322-2.002-0.869C12.25,2.717,12.399,2.482,12.6,2.238C15.844,3.328,18.188,6.395,18.188,10z M8.875,1.893  C8.679,2.275,8.162,2.43,7.848,2.717C7.164,3.336,6.87,3.25,6.502,3.844C6.131,4.438,4.935,5.293,4.935,5.723  s0.604,0.936,0.906,0.838c0.302-0.1,1.099-0.094,1.567,0.07c0.469,0.166,3.914,0.332,2.816,3.244  c-0.348,0.926-1.873,0.77-2.279,2.303c-0.061,0.225-0.272,1.186-0.285,1.5c-0.025,0.486,0.344,2.318-0.125,2.318  c-0.471,0-1.738-1.639-1.738-1.936s-0.328-1.338-0.328-2.23c0-0.891-1.518-0.877-1.518-2.062c0-1.068,0.823-1.6,0.638-2.113  c-0.181-0.51-1.627-0.527-2.23-0.59C3.412,4.334,5.889,2.307,8.875,1.893z M7.424,17.77c0.492-0.26,0.542-0.596,0.988-0.613  c0.51-0.023,0.925-0.199,1.5-0.326c0.51-0.111,1.423-0.629,2.226-0.695c0.678-0.055,2.015,0.035,2.375,0.689  c-1.295,0.861-2.848,1.363-4.514,1.363C9.1,18.188,8.234,18.039,7.424,17.77z"
      }))
    },
    database: {
      path: __jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1",
        id: "Database",
        viewBox: "0 0 20 20"
      }, __jsx("path", {
        fill: "currentColor",
        d: "M16.726,12.641c-0.843,1.363-3.535,2.361-6.726,2.361s-5.883-0.998-6.727-2.361  C3.095,12.351,3,12.506,3,12.648c0,0.144,0,2.002,0,2.002c0,1.94,3.134,3.95,7,3.95s7-2.01,7-3.949c0,0,0-1.858,0-2.002  C17,12.506,16.904,12.351,16.726,12.641z M16.737,7.525c-0.83,1.205-3.532,2.09-6.737,2.09S4.092,8.73,3.262,7.525  C3.091,7.277,3,7.412,3,7.523C3,7.636,3,9.88,3,9.88c0,1.762,3.134,3.189,7,3.189s7-1.428,7-3.189c0,0,0-2.244,0-2.357  C17,7.412,16.908,7.277,16.737,7.525z M10,1C6.134,1,3,2.18,3,3.633v1.26c0,1.541,3.134,2.791,7,2.791s7-1.25,7-2.791v-1.26  C17,2.18,13.866,1,10,1z"
      }))
    },
    shop: {
      path: __jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1",
        id: "Shop",
        viewBox: "0 0 20 20",
        enableBackground: "new 0 0 20 20",
        xmlSpace: "preserve"
      }, __jsx("path", {
        fill: "currentColor",
        d: "M6.123,7.25L6.914,2H2.8L1.081,6.5C1.028,6.66,1,6.826,1,7c0,1.104,1.15,2,2.571,2  C4.881,9,5.964,8.236,6.123,7.25z M10,9c1.42,0,2.571-0.896,2.571-2c0-0.041-0.003-0.082-0.005-0.121L12.057,2H7.943l-0.51,4.875  C7.431,6.916,7.429,6.957,7.429,7C7.429,8.104,8.58,9,10,9z M15,10.046V14H5v-3.948C4.562,10.21,4.08,10.3,3.571,10.3  c-0.195,0-0.384-0.023-0.571-0.049V16.6C3,17.37,3.629,18,4.398,18H15.6c0.77,0,1.4-0.631,1.4-1.4v-6.348  c-0.188,0.025-0.376,0.049-0.571,0.049C15.923,10.3,15.439,10.208,15,10.046z M18.92,6.5L17.199,2h-4.113l0.79,5.242  C14.03,8.232,15.113,9,16.429,9C17.849,9,19,8.104,19,7C19,6.826,18.972,6.66,18.92,6.5z"
      }))
    },
    play: {
      path: __jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1",
        id: "Triangle_right",
        viewBox: "0 0 20 20",
        enableBackground: "new 0 0 20 20",
        xmlSpace: "preserve"
      }, __jsx("path", {
        fill: "currentColor",
        d: "M15,10l-9,5V5L15,10z"
      }))
    },
    user: {
      path: __jsx("svg", {
        version: "1.1",
        id: "User",
        viewBox: "0 0 20 20",
        enableBackground: "new 0 0 20 20",
        xmlSpace: "preserve"
      }, __jsx("path", {
        fill: "currentColor",
        d: "M7.725,2.146c-1.016,0.756-1.289,1.953-1.239,2.59C6.55,5.515,6.708,6.529,6.708,6.529  s-0.313,0.17-0.313,0.854C6.504,9.1,7.078,8.359,7.196,9.112c0.284,1.814,0.933,1.491,0.933,2.481c0,1.649-0.68,2.42-2.803,3.334  C3.196,15.845,1,17,1,19v1h18v-1c0-2-2.197-3.155-4.328-4.072c-2.123-0.914-2.801-1.684-2.801-3.334c0-0.99,0.647-0.667,0.932-2.481  c0.119-0.753,0.692-0.012,0.803-1.729c0-0.684-0.314-0.854-0.314-0.854s0.158-1.014,0.221-1.793c0.065-0.817-0.398-2.561-2.3-3.096  c-0.333-0.34-0.558-0.881,0.466-1.424C9.439,0.112,8.918,1.284,7.725,2.146z"
      }))
    },
    envelope: {
      path: __jsx("svg", {
        version: "1.1",
        id: "Mail",
        viewBox: "0 0 20 20",
        enableBackground: "new 0 0 20 20",
        xmlSpace: "preserve"
      }, __jsx("path", {
        fill: "currentColor",
        d: "M1.574,5.286c0.488,0.262,7.248,3.894,7.5,4.029C9.326,9.45,9.652,9.514,9.98,9.514  c0.328,0,0.654-0.064,0.906-0.199s7.012-3.767,7.5-4.029C18.875,5.023,19.337,4,18.44,4H1.521C0.624,4,1.086,5.023,1.574,5.286z   M18.613,7.489c-0.555,0.289-7.387,3.849-7.727,4.027s-0.578,0.199-0.906,0.199s-0.566-0.021-0.906-0.199S1.941,7.777,1.386,7.488  C0.996,7.284,1,7.523,1,7.707S1,15,1,15c0,0.42,0.566,1,1,1h16c0.434,0,1-0.58,1-1c0,0,0-7.108,0-7.292S19.004,7.285,18.613,7.489z"
      }))
    },
    code: {
      path: __jsx("svg", {
        version: "1.1",
        id: "Code",
        viewBox: "0 0 20 20",
        enableBackground: "new 0 0 20 20",
        xmlSpace: "preserve"
      }, __jsx("path", {
        fill: "currentColor",
        d: "M5.719,14.75c-0.236,0-0.474-0.083-0.664-0.252L-0.005,10l5.341-4.748c0.412-0.365,1.044-0.33,1.411,0.083  s0.33,1.045-0.083,1.412L3.005,10l3.378,3.002c0.413,0.367,0.45,0.999,0.083,1.412C6.269,14.637,5.994,14.75,5.719,14.75z   M14.664,14.748L20.005,10l-5.06-4.498c-0.413-0.367-1.045-0.33-1.411,0.083c-0.367,0.413-0.33,1.045,0.083,1.412L16.995,10  l-3.659,3.252c-0.413,0.367-0.45,0.999-0.083,1.412C13.45,14.887,13.725,15,14,15C14.236,15,14.474,14.917,14.664,14.748z   M9.986,16.165l2-12c0.091-0.545-0.277-1.06-0.822-1.151c-0.547-0.092-1.061,0.277-1.15,0.822l-2,12  c-0.091,0.545,0.277,1.06,0.822,1.151C8.892,16.996,8.946,17,9.001,17C9.481,17,9.905,16.653,9.986,16.165z"
      }))
    }
  })
});

/* harmony default export */ __webpack_exports__["default"] = (theme);

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "@apollo/react-hooks":
/*!**************************************!*\
  !*** external "@apollo/react-hooks" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@apollo/react-hooks");

/***/ }),

/***/ "@chakra-ui/core":
/*!**********************************!*\
  !*** external "@chakra-ui/core" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@chakra-ui/core");

/***/ }),

/***/ "apollo-boost":
/*!*******************************!*\
  !*** external "apollo-boost" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-boost");

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "next-with-apollo":
/*!***********************************!*\
  !*** external "next-with-apollo" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-with-apollo");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map