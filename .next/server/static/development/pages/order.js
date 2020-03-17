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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

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

/***/ "./components/common/OrderDetails.js":
/*!*******************************************!*\
  !*** ./components/common/OrderDetails.js ***!
  \*******************************************/
/*! exports provided: default, OrderDetailsComp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDetailsComp", function() { return OrderDetailsComp; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/core */ "@chakra-ui/core");
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Reshipment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Reshipment */ "./components/common/Reshipment.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





const secondaryLayout = {
  flex: '1 1 10rem',
  marginLeft: '1.5rem',
  marginTop: '.3rem'
};
const Layout = {
  flex: '2 2 20rem',
  marginLeft: '1.5rem',
  marginTop: '.3rem'
};

const OrderDetailsComp = ({
  backgroundColor,
  name,
  store,
  email,
  processedAt,
  fulfillments,
  lineItems,
  shippingAddress,
  onOpen
}) => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
  display: "flex",
  paddingY: 4,
  backgroundColor: backgroundColor,
  boxShadow: backgroundColor && '0 0 1px rgba(67, 90, 111, 0.3)',
  paddingX: backgroundColor && 4
}, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
  flex: 1,
  alignItems: "center",
  display: "flex"
}, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], null, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
  size: "lg",
  fontWeight: 600,
  color: "text"
}, name), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
  fontSize: "xs",
  fontWeight: 600,
  color: "gray.500",
  letterSpacing: "wide",
  textTransform: "uppercase",
  display: "flex",
  alignItems: "center"
}, store, " \xB7", __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
  ml: 1,
  color: "#234361",
  fontSize: "xs",
  fontWeight: 400
}, processedAt && Intl.DateTimeFormat('en-US').format(Date.parse(processedAt)))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Badge"], {
  marginTop: 2,
  variantColor: fulfillments.length > 0 ? 'green' : 'red',
  variant: "solid"
}, fulfillments.length > 0 ? 'Processed' : 'Not Processed'))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
  background: "#DDEBF7",
  borderRadius: 3,
  marginRight: 1,
  px: 3,
  height: 8,
  onClick: onOpen
}, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
  fontSize: "sm",
  fontWeight: 700,
  color: "#1070CA",
  marginRight: 2
}, "RESHIP"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
  size: 4,
  color: "#1070CA",
  name: "repeat"
}))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
  display: "flex",
  flexWrap: "wrap",
  marginLeft: "-1.5rem",
  marginTop: "-.3rem",
  padding: backgroundColor && 4
}, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], Layout, lineItems.edges.map(a => {
  const ID = a.node.id.toString().split('/').pop();
  return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    boxShadow: "sm",
    background: "white",
    padding: 2,
    marginBottom: 15,
    key: ID
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    display: "flex",
    alignItems: "center"
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], null, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    as: "img",
    src: a.node.image && a.node.image.originalSrc,
    borderStyle: "solid",
    borderWidth: "1px",
    borderRadius: 3,
    borderColor: "#e8e9ea",
    width: "130px"
  })), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    marginLeft: 4
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    size: "sm",
    fontWeight: 600,
    color: "text"
  }, a.node.name), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    display: "flex",
    alignItems: "center"
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    color: "#66788a",
    fontSize: 14,
    mr: 1
  }, ID), "-", __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    color: "#234361",
    fontSize: "sm",
    ml: 1
  }, "QUANTITY: ", a.node.quantity)))));
})), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], secondaryLayout, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
  boxShadow: "sm",
  background: "white",
  padding: 3,
  marginBottom: 15
}, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
  fontSize: "xs",
  fontWeight: 500,
  color: "gray.500",
  letterSpacing: "wide",
  textTransform: "uppercase",
  mb: 2
}, "Customer"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
  display: "block"
}, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
  fontSize: "sm",
  color: "#425A70",
  fontWeight: 500
}, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], null, shippingAddress.name.split(' ')[0], ' ', shippingAddress.name.split(' ').pop()), shippingAddress.address1, " ", shippingAddress.address2, __jsx("br", null), shippingAddress.city, ', ', shippingAddress.province, " ", shippingAddress.zip))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
  boxShadow: "sm",
  background: "white",
  padding: 3,
  marginBottom: 15
}, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
  fontSize: "xs",
  fontWeight: 500,
  color: "gray.500",
  letterSpacing: "wide",
  textTransform: "uppercase",
  mb: 2
}, "Email"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
  display: "block"
}, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
  fontSize: "sm",
  color: "#425A70",
  fontWeight: 500
}, email))), fulfillments.length > 0 && __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
  boxShadow: "sm",
  background: "white",
  padding: 3,
  marginBottom: 15
}, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
  fontSize: "xs",
  fontWeight: 500,
  color: "gray.500",
  letterSpacing: "wide",
  textTransform: "uppercase",
  mb: 2
}, "Shipments"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
  display: "block"
}, fulfillments.map(a => a.trackingInfo.map((b, index) => __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
  key: index,
  display: "flex",
  alignItems: "center"
}, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
  size: 4,
  name: "check-circle",
  color: "#47B881",
  marginRight: 2
}), __jsx("a", {
  href: b.url,
  target: "_blank",
  rel: "noopener noreferrer"
}, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
  fontSize: "md",
  color: "#425A70",
  fontWeight: 500
}, b.number))))))))));

const OrderDetails = props => {
  const {
    isOpen,
    onOpen,
    onClose
  } = Object(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["useDisclosure"])();
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_Reshipment__WEBPACK_IMPORTED_MODULE_3__["default"], {
    isOpen: isOpen,
    onClose: onClose,
    order: props,
    shop: props.store
  }), __jsx(OrderDetailsComp, _extends({}, props, {
    onOpen: onOpen
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (OrderDetails);

OrderDetails.propTypes = {
  store: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  backgroundColor: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  name: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  processedAt: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  note: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  lineItems: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array,
  shippingAddress: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  fulfillments: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array
};

/***/ }),

/***/ "./components/common/Pagination.js":
/*!*****************************************!*\
  !*** ./components/common/Pagination.js ***!
  \*****************************************/
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



const Pagination = ({
  leftDisabled,
  onLeft,
  rightDisabled,
  onRight
}) => __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
  display: "flex",
  marginRight: 3
}, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
  display: "flex",
  borderRadius: 3,
  boxShadow: "inset 0 0 0 1px rgba(67, 90, 111, 0.14), inset 0 -1px 1px 0 rgba(67, 90, 111, 0.06);"
}, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["IconButton"], {
  borderTopRightRadius: 0,
  borderBottomRightRadius: 0,
  icon: "arrow-back",
  color: "#657889",
  height: 10,
  disabled: leftDisabled,
  onClick: onLeft,
  backgroundImage: "linear-gradient(rgb(255, 255, 255), rgb(244, 245, 247))",
  boxShadow: "rgba(67, 90, 111, 0.14) 0px 0px 0px 1px inset, rgba(67, 90, 111, 0.06) 0px -1px 1px 0px inset"
}), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["IconButton"], {
  borderTopLeftRadius: 0,
  borderBottomLeftRadius: 0,
  icon: "arrow-forward",
  color: "#657889",
  height: 10,
  onClick: onRight,
  disabled: rightDisabled,
  backgroundImage: "linear-gradient(rgb(255, 255, 255), rgb(244, 245, 247))",
  boxShadow: "rgba(67, 90, 111, 0.14) 0px 0px 0px 1px inset, rgba(67, 90, 111, 0.06) 0px -1px 1px 0px inset"
})));

/* harmony default export */ __webpack_exports__["default"] = (Pagination);
Pagination.propTypes = {
  leftDisabled: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  rightDisabled: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  onLeft: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  onRight: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
};

/***/ }),

/***/ "./components/common/Reshipment.js":
/*!*****************************************!*\
  !*** ./components/common/Reshipment.js ***!
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
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/core */ "@chakra-ui/core");
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ReshipmentLineItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ReshipmentLineItem */ "./components/common/ReshipmentLineItem.js");
/* harmony import */ var _pending_Pending__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pending/Pending */ "./components/pending/Pending.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const Layout = {
  flex: '1 1 10rem',
  marginLeft: '2rem',
  marginTop: '2rem'
};
const wideText = {
  fontSize: 'xs',
  fontWeight: 500,
  color: 'gray.500',
  letterSpacing: 'wide',
  textTransform: 'uppercase'
};
const CREATE_ORDER = apollo_boost__WEBPACK_IMPORTED_MODULE_1__["gql"]`
  mutation createOrder(
    $shopName: String!
    $orderId: Float!
    $orderName: String!
    $email: String
    $first_name: String
    $last_name: String
    $streetAddress1: String!
    $streetAddress2: String
    $city: String!
    $state: String!
    $zip: String!
    $lineItems: Json!
    $currency: String!
    $totalPrice: String!
    $subTotalPrice: String!
    $totalDiscount: String!
    $totalTax: String!
    $mpCart: String!
    $zincCart: String!
    $processed: Processed
    $createAt: String!
  ) {
    createOrder(
      shopName: $shopName
      orderId: $orderId
      orderName: $orderName
      email: $email
      first_name: $first_name
      last_name: $last_name
      streetAddress1: $streetAddress1
      streetAddress2: $streetAddress2
      city: $city
      state: $state
      zip: $zip
      lineItems: $lineItems
      currency: $currency
      totalPrice: $totalPrice
      totalDiscount: $totalDiscount
      subTotalPrice: $subTotalPrice
      totalTax: $totalTax
      mpCart: $mpCart
      zincCart: $zincCart
      processed: $processed
      createAt: $createAt
    ) {
      id
      email
    }
  }
`;

function readFormField(data, field, onInput) {
  return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    marginBottom: 2
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    contentEditable: "true",
    onInput: onInput,
    fontWeight: 500,
    fontSize: "md",
    color: "text"
  }, data), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Heading"], wideText, field));
}

const Reshipment = ({
  order,
  shop,
  isOpen,
  onClose
}) => {
  const {
    0: first,
    1: setFirst
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const {
    0: last,
    1: setLast
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const {
    0: address,
    1: setAddress
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const {
    0: address2,
    1: setAddress2
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const {
    0: city,
    1: setCity
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const {
    0: state,
    1: setState
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const {
    0: zip,
    1: setZip
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const {
    0: lineItems,
    1: setLineItems
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const initialItems = [];
  const toast = Object(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["useToast"])();
  const [createOrder, {
    loading
  }] = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__["useMutation"])(CREATE_ORDER, {
    refetchQueries: [{
      query: _pending_Pending__WEBPACK_IMPORTED_MODULE_6__["ORDER_QUERY"],
      variables: {
        skip: 0,
        first: 100,
        orderBy: 'createdAt_ASC',
        processed: 'FALSE'
      }
    }, {
      query: _pending_Pending__WEBPACK_IMPORTED_MODULE_6__["PAGINATION_QUERY"]
    }]
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (order) {
      setFirst(order.shippingAddress.name.split(' ')[0]);
      setLast(order.shippingAddress.name.split(' ').pop());
      setAddress(order.shippingAddress.address1);
      setAddress2(order.shippingAddress.address2);
      setCity(order.shippingAddress.city);
      setState(order.shippingAddress.province);
      setZip(order.shippingAddress.zip);
      setLineItems(order.lineItems.edges);
    }
  }, [order]);

  const handleLine = (ID, quantity, initialQty) => {
    const temp = lineItems;
    temp.map(item => {
      if (item.node.id === ID) {
        item.node.quantity = quantity;
        const itemObj = {};
        itemObj.id = ID;
        itemObj.quantity = initialQty;
        initialItems.push(itemObj);
      }

      return null;
    });
    setLineItems(temp);
  };

  const resetLineItems = () => {
    const temp = lineItems;
    initialItems.reverse();
    temp.map(item => {
      initialItems.forEach(function (initialItem) {
        if (item.node.id === initialItem.id) {
          item.node.quantity = initialItem.quantity;
        }
      });
      return null;
    });
    setLineItems(temp);
  };

  return order ? __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Modal"], {
    isOpen: isOpen,
    onClose: onClose
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["ModalOverlay"], null), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["ModalContent"], null, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["ModalHeader"], null, "Request Reshipment"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["ModalCloseButton"], null), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["ModalBody"], null, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    display: "flex",
    flexWrap: "wrap",
    marginLeft: "-2rem",
    marginTop: "-2rem"
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], Layout, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    marginBottom: 4
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    fontWeight: 600,
    fontSize: "md",
    color: "text"
  }, order.name), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Heading"], wideText, "Order Number")), readFormField(order.shippingAddress.name.split(' ')[0], 'First Name', e => setFirst(e.target.textContent)), readFormField(order.shippingAddress.name.split(' ').pop(), 'Last Name', e => setLast(e.target.textContent)), readFormField(order.shippingAddress.address1, 'Street Address', e => setAddress(e.target.textContent)), order.shippingAddress.address2 && readFormField(order.shippingAddress.address2, 'Apt, Suite, etc.', e => setAddress2(e.target.textContent)), readFormField(order.shippingAddress.city, 'City', e => setCity(e.target.textContent)), readFormField(order.shippingAddress.province, 'State', e => setState(e.target.textContent)), readFormField(order.shippingAddress.zip, 'Zip Code', e => setZip(e.target.textContent))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], Layout, order.lineItems.edges.map(a => __jsx(_ReshipmentLineItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
    arg: a.node,
    handleLine: handleLine
  }))))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["ModalFooter"], null, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    variant: "ghost",
    mr: 3,
    onClick: onClose
  }, "Cancel"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    variant: "ghost",
    variantColor: "blue",
    bg: "blue.50",
    _hover: {
      bg: 'blue.100'
    },
    isLoading: loading,
    onClick: async () => {
      const res = await createOrder({
        variables: {
          shopName: `${shop}.myshopify.com`,
          orderId: order.id.split('/').pop(),
          orderName: order.name,
          email: order.email || 'noemail@noemail.com',
          first_name: first,
          last_name: last,
          streetAddress1: address,
          streetAddress2: address2,
          city,
          state,
          zip,
          phone: order.shippingAddress.phone,
          lineItems: lineItems.filter(a => a.node.quantity > 0).map(b => {
            b.node.id = parseFloat(b.node.id.split('/').pop());
            return b.node;
          }),
          currency: 'USD',
          totalPrice: order.totalReceivedSet.shopMoney.amount,
          subTotalPrice: 0,
          totalDiscount: 0,
          totalTax: 0,
          createAt: order.processedAt,
          mpCart: '{}',
          zincCart: '{}',
          processed: 'FALSE'
        }
      });
      onClose();
      toast({
        position: 'top-right',
        title: `${order.name} has been requested for reshipment.`,
        status: 'success',
        duration: 2000,
        isClosable: true
      });
    }
  }, "Confirm Reshipment")))) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null);
};

/* harmony default export */ __webpack_exports__["default"] = (Reshipment);
Reshipment.propTypes = {
  order: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,
  isShown: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
  onCloseComplete: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  shop: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string
};

/***/ }),

/***/ "./components/common/ReshipmentLineItem.js":
/*!*************************************************!*\
  !*** ./components/common/ReshipmentLineItem.js ***!
  \*************************************************/
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




function LineItem({
  arg,
  handleLine
}) {
  const initialQty = arg.quantity;
  const {
    0: quantity,
    1: setQuantity
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(arg.quantity);

  function onInputChange(e) {
    handleLine(arg.id, e, initialQty);
    setQuantity(e);
  }

  return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    display: "flex",
    alignItems: "center",
    marginBottom: 15
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    display: "block"
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], null, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    as: "img",
    src: arg.img ? arg.img : arg.image && arg.image.originalSrc,
    borderStyle: "solid",
    borderWidth: "1px",
    borderRadius: 3,
    borderColor: "#e8e9ea",
    width: "70px"
  }))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    flex: 2,
    display: "block",
    marginLeft: 2
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    fontSize: "sm",
    color: "text",
    mb: 2,
    fontWeight: 600
  }, arg.name), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["PseudoBox"], null, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    fontSize: ".65rem",
    fontWeight: "600",
    color: "gray.500"
  }, "QUANTITY"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["NumberInput"], {
    size: "sm",
    value: quantity,
    onChange: onInputChange,
    min: 0,
    width: "80px"
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["NumberInputField"], {
    focusBorderColor: "blue.500",
    textAlign: "center",
    _hover: {
      borderColor: 'blue.500'
    },
    height: "25px"
  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["NumberInputStepper"], {
    width: "25px"
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["NumberIncrementStepper"], {
    bg: "#f6f7f9",
    color: "blue.500",
    _active: {
      bg: 'blue.500'
    },
    _hover: {
      bg: 'blue.500',
      color: 'white'
    },
    children: __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
      name: "add",
      color: "currentColor"
    }),
    marginTop: "0px !important",
    borderTopWidth: "0px !important"
  })), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["NumberInputStepper"], {
    left: "0",
    width: "25px"
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["NumberDecrementStepper"], {
    bg: "#f6f7f9",
    color: "blue.500",
    _active: {
      bg: 'blue.500'
    },
    _hover: {
      bg: 'blue.500',
      color: 'white'
    },
    children: __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
      name: "minus",
      color: "currentColor"
    }),
    borderLeft: "0px",
    borderRight: "1px solid #E2E8F0",
    marginTop: "0px !important",
    borderTopWidth: "0px !important"
  }))))));
}

/* harmony default export */ __webpack_exports__["default"] = (LineItem);
LineItem.propTypes = {
  arg: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  handleLine: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
};

/***/ }),

/***/ "./components/common/ShopSelect.js":
/*!*****************************************!*\
  !*** ./components/common/ShopSelect.js ***!
  \*****************************************/
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



const ShopSelect = ({
  shops,
  client,
  updateClient
}) => __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
  display: "flex",
  flexWrap: "wrap"
}, shops.map(shop => __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
  p: 2,
  mr: 2,
  mt: 2,
  borderRadius: 2,
  bg: client === shop.domain.split('.')[0] ? 'blue.50' : 'gray.50',
  onClick: () => updateClient(shop.domain.split('.')[0]),
  cursor: "pointer"
}, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
  fontSize: "xs",
  fontWeight: 500,
  color: client === shop.domain.split('.')[0] ? 'blue.600' : 'gray.500',
  letterSpacing: "wide",
  textTransform: "uppercase"
}, shop.domain.split('.')[0]))));

/* harmony default export */ __webpack_exports__["default"] = (ShopSelect);
ShopSelect.propTypes = {
  shops: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array,
  client: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  updateClient: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
};

/***/ }),

/***/ "./components/common/orderListItem/OrderLine.js":
/*!******************************************************!*\
  !*** ./components/common/orderListItem/OrderLine.js ***!
  \******************************************************/
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



const OrderLine = props => {
  const {
    item
  } = props;

  const priceString = (price, quantity) => {
    const total = Math.round(price * quantity * 100).toString();
    return `${total.substring(0, total.length - 2)}.${total.substring(total.length - 2)}`;
  };

  return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    background: "#fff",
    borderStyle: "solid",
    borderWidth: "1px",
    borderColor: "#e8e9ea",
    marginBottom: 2
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    display: "flex",
    alignItems: "center"
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    height: "100%",
    background: "white",
    borderRight: "1px solid #e8e9ea"
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    as: "img",
    src: item.img ? item.img : item.image && item.image.originalSrc,
    width: "100px"
  })), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    borderLeft: "muted",
    padding: 2,
    paddingLeft: 4
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    fontSize: "xs",
    color: "text"
  }, item.name), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    fontSize: "xs",
    color: "text"
  }, item.id), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    fontSize: "xs"
  }, item.product_id), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    display: "flex"
  }, item.quantity > 1 && __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], null, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    fontSize: "xs",
    color: "muted"
  }, "$", item.price ? item.price : item.discountedUnitPriceSet.shopMoney.amount, ' ', "x ", item.quantity)), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    fontSize: "xs",
    marginRight: 10,
    color: "green.600"
  }, "$", item.price ? priceString(item.price, item.quantity) : item.discountedUnitPriceSet.shopMoney.amount * item.quantity)))));
};

/* harmony default export */ __webpack_exports__["default"] = (OrderLine);
OrderLine.propTypes = {
  item: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired
};

/***/ }),

/***/ "./components/common/orderListItem/OrderListItem.js":
/*!**********************************************************!*\
  !*** ./components/common/orderListItem/OrderListItem.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OrderListItem; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/react-hooks */ "@apollo/react-hooks");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/core */ "@chakra-ui/core");
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _pending_Cart_MPCart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../pending/Cart/MPCart */ "./components/pending/Cart/MPCart.js");
/* harmony import */ var _pending_Cart_ZincCart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../pending/Cart/ZincCart */ "./components/pending/Cart/ZincCart.js");
/* harmony import */ var _OrderLine__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./OrderLine */ "./components/common/orderListItem/OrderLine.js");
/* harmony import */ var _layout_Page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../layout/Page */ "./components/layout/Page.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









const priceString = (price, quantity) => {
  const total = Math.round(price * quantity * 100).toString();
  return `${total.substring(0, total.length - 2)}.${total.substring(total.length - 2)}`;
};

function OrderListItem(props) {
  const {
    0: open,
    1: setOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const {
    data: {
      channels
    },
    error,
    loading
  } = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__["useQuery"])(_layout_Page__WEBPACK_IMPORTED_MODULE_7__["CHANNELS_QUERY"], {
    variables: _layout_Page__WEBPACK_IMPORTED_MODULE_7__["channelsQueryVars"]
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setOpen(props.open);
  }, [props.open]);

  async function onCheckAllChange(e, updateIndexFunc) {
    updateIndexFunc(e ? props.index : null);
  }

  function handleToggleClick(e) {
    e.stopPropagation();
    setOpen(prevOpen => !prevOpen);
  }

  function parseMP(name, string, checkout) {
    const parse = JSON.parse(string);
    return parse.lineItems && __jsx(_pending_Cart_MPCart__WEBPACK_IMPORTED_MODULE_4__["default"], {
      cart: parse,
      checkout: checkout,
      cartName: name
    });
  }

  function parseZinc(string, checkout) {
    const parse = JSON.parse(string);
    return parse.products && __jsx(_pending_Cart_ZincCart__WEBPACK_IMPORTED_MODULE_5__["default"], {
      cart: parse,
      checkout: checkout
    });
  }

  const {
    id,
    orderId,
    orderName,
    email,
    first_name,
    last_name,
    streetAddress1,
    streetAddress2,
    city,
    state,
    zip,
    shopName,
    phone,
    lineItems,
    currency,
    totalPrice,
    subTotalPrice,
    totalDiscount,
    totalTax,
    createAt,
    mpCheckout,
    mpCart,
    zincCheckout,
    zincCart,
    customCheckout,
    customCart,
    note,
    disabled,
    buttons,
    selectedOrderIndex,
    updateIndex,
    createCheckout
  } = props;
  return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], null, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    display: "flex",
    paddingX: "1em",
    paddingY: ".7em",
    onClick: !disabled ? () => onCheckAllChange(!selectedOrderIndex, updateIndex, // createCheckout,
    mpCart) : undefined,
    pointerEvents: !selectedOrderIndex || selectedOrderIndex === id ? null : 'none',
    className: !selectedOrderIndex || selectedOrderIndex === id ? 'hover' : null,
    cursor: !selectedOrderIndex || selectedOrderIndex === id ? 'pointer' : null
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], null, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    mb: 1
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Heading"], {
    fontSize: "sm",
    marginRight: 3,
    color: "text"
  }, __jsx("a", {
    href: `https://${shopName.split('.')[0]}.myshopify.com/admin/orders/${orderId}`,
    target: "_blank",
    rel: "noopener noreferrer"
  }, orderName)), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Heading"], {
    fontSize: "xs",
    fontWeight: 500,
    letterSpacing: "wide",
    textTransform: "uppercase",
    color: "gray.500",
    mr: 3
  }, shopName.split('.')[0]), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Heading"], {
    fontSize: "xs",
    color: "gray.500"
  }, Intl.DateTimeFormat('en-US').format(Date.parse(createAt)))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    as: "p",
    fontSize: "sm",
    color: "#425A70",
    lineHeight: "short"
  }, first_name, " ", last_name, __jsx("br", null), streetAddress1, " ", streetAddress2, __jsx("br", null), city, ', ', state, " ", zip)), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    display: "flex",
    marginLeft: "auto",
    justifyContent: "center" // alignItems="center"

  }, buttons, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    bg: open && '#EDF2F7',
    onClick: handleToggleClick,
    color: "#66788a",
    "aria-label": "show line-items",
    height: "1.3rem",
    minWidth: "1.3rem",
    px: 0,
    ml: 1
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
    name: "chevron-down",
    size: "22px"
  })))), open && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    marginLeft: "-3px",
    background: "#F7F9FD",
    border: "muted",
    paddingY: ".7em",
    paddingX: "1em"
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    marginBottom: 2
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    fontSize: "sm",
    fontWeight: 500,
    color: "#084B8A"
  }, "Line Items")), lineItems.map(a => __jsx(_OrderLine__WEBPACK_IMPORTED_MODULE_6__["default"], {
    key: a.id,
    item: a.node ? a.node : a
  }))), channels.filter(channel => channel.type === 'MARKETPLACE').length > 0 && mpCart && JSON.parse(mpCart).lineItems && JSON.parse(mpCart).lineItems.edges.length > 0 && __jsx(_pending_Cart_MPCart__WEBPACK_IMPORTED_MODULE_4__["default"], {
    cart: JSON.parse(mpCart),
    cartName: "Marketplace"
  }), channels.filter(channel => channel.type === 'SHOPIFY').length > 0 && customCart && JSON.parse(customCart).lineItems && JSON.parse(customCart).lineItems.edges.length > 0 && __jsx(_pending_Cart_MPCart__WEBPACK_IMPORTED_MODULE_4__["default"], {
    cart: JSON.parse(customCart),
    cartName: "BN",
    background: "#F1FBFC",
    color: "#007489"
  }), channels.filter(channel => channel.type === 'ZINC').length > 0 && zincCart && JSON.parse(zincCart).products && JSON.parse(zincCart).products.length > 0 && parseZinc(zincCart, zincCheckout), mpCheckout && __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    marginLeft: "-3px",
    background: "#F1FAF5",
    border: "muted",
    paddingY: ".7em",
    paddingX: "1em"
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    marginBottom: 10
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    size: 400,
    fontWeight: 500,
    color: "#00783E"
  }, "Marketplace Order")), mpCheckout[0].marketLineItems.map(a => __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    background: "#fff",
    border: "muted",
    marginBottom: 5
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    display: "flex",
    alignItems: "center"
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    height: "100%",
    background: "white",
    borderRight: "1px solid #e8e9ea"
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    as: "img",
    src: a.variantImg,
    width: "100px"
  })), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    padding: 5,
    paddingLeft: 10
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Heading"], {
    size: 300
  }, a.title), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    display: "flex"
  }, a.quantity > 1 && __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], null, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    size: 300,
    color: "muted"
  }, "$", a.variantPrice, " x ", a.quantity)), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Heading"], {
    size: 300,
    marginRight: 10,
    color: "green"
  }, "$", a.variantPrice && priceString(a.variantPrice, a.quantity))))))))));
}
OrderListItem.propTypes = {
  id: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  orderId: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  orderName: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  email: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  first_name: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  last_name: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  streetAddress1: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  streetAddress2: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  city: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  state: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  zip: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  shopName: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  phone: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  lineItems: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  currency: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  totalPrice: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,
  subTotalPrice: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,
  totalDiscount: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,
  totalTax: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,
  createAt: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,
  mpCheckout: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  mpCart: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  note: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  selectedOrderIndex: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,
  selectedLineIndex: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array,
  open: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  updateIndex: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  index: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,
  createCheckout: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  buttons: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.element
};

/***/ }),

/***/ "./components/completed/completedOrderList/CompletedOrderList.js":
/*!***********************************************************************!*\
  !*** ./components/completed/completedOrderList/CompletedOrderList.js ***!
  \***********************************************************************/
/*! exports provided: SHOP_ORDERS_QUERY, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHOP_ORDERS_QUERY", function() { return SHOP_ORDERS_QUERY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CompletedOrderList; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-boost */ "apollo-boost");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(apollo_boost__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/core */ "@chakra-ui/core");
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/react-hooks */ "@apollo/react-hooks");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _common_ShopSelect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/ShopSelect */ "./components/common/ShopSelect.js");
/* harmony import */ var _common_orderListItem_OrderListItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/orderListItem/OrderListItem */ "./components/common/orderListItem/OrderListItem.js");
/* harmony import */ var _common_Reshipment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/Reshipment */ "./components/common/Reshipment.js");
/* harmony import */ var _common_OrderDetails__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../common/OrderDetails */ "./components/common/OrderDetails.js");
/* harmony import */ var _common_DefaultStyles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../common/DefaultStyles */ "./components/common/DefaultStyles.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }












const SHOP_ORDERS_QUERY = apollo_boost__WEBPACK_IMPORTED_MODULE_1__["gql"]`
  query shopOrders(
    $domain: String!
    $first: Int
    $after: String
    $before: String
    $last: Int
    $query: String
  ) {
    shopOrders(
      domain: $domain
      first: $first
      after: $after
      before: $before
      last: $last
      query: $query
    ) {
      pageInfo
      edges
    }
  }
`;
function CompletedOrderList({
  shops
}) {
  const {
    0: client,
    1: setClient
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(shops.length && shops[0].domain.split('.')[0]);
  const {
    0: afterCursor,
    1: setAfterCursor
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const {
    0: beforeCursor,
    1: setBeforeCursor
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const {
    0: query,
    1: setQuery
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: first,
    1: setFirst
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(10);
  const {
    0: last,
    1: setLast
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const {
    0: selectedOrder,
    1: setSelectedOrder
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const {
    0: selectedOrder2,
    1: setSelectedOrder2
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const {
    isOpen,
    onOpen,
    onClose
  } = Object(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["useDisclosure"])();
  const {
    isOpen: drawerIsOpen,
    onOpen: drawerOnOpen,
    onClose: drawerOnClose
  } = Object(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["useDisclosure"])();
  const {
    data,
    error,
    loading
  } = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_5__["useQuery"])(SHOP_ORDERS_QUERY, {
    variables: {
      domain: `${client}.myshopify.com`,
      after: afterCursor,
      before: beforeCursor,
      first,
      last,
      query
    }
  });

  function updateClient(arg) {
    setClient(arg);
    setAfterCursor(null);
    setBeforeCursor(null);
    setFirst(10);
    setLast(null);
  }

  function onPrevious(arg) {
    setAfterCursor(null);
    setBeforeCursor(arg);
    setFirst(null);
    setLast(10);
  }

  function onNext(arg) {
    setAfterCursor(arg);
    setBeforeCursor(null);
    setFirst(10);
    setLast(null);
  }

  function updateDialog(arg) {
    onOpen();
    setSelectedOrder(arg);
  }

  function updateDrawer(arg) {
    drawerOnOpen();
    setSelectedOrder2(arg);
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    display: "flex",
    py: 4
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    flex: 1,
    alignItems: "center",
    display: "flex"
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Heading"], {
    fontSize: "2xl",
    color: "text",
    fontWeight: 500
  }, "Completed Orders"))), selectedOrder2 && __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Drawer"], {
    size: "md",
    isOpen: drawerIsOpen,
    placement: "right",
    onClose: drawerOnClose
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["DrawerOverlay"], null), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["DrawerContent"], null, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["DrawerBody"], {
    bg: "#f9f9fb",
    p: 0
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], null, __jsx(_common_OrderDetails__WEBPACK_IMPORTED_MODULE_9__["OrderDetailsComp"], _extends({}, data.shopOrders.edges.filter(order => order.node.id.split('/').pop() === selectedOrder2)[0].node, {
    store: client,
    backgroundColor: "white",
    onOpen: () => updateDialog(selectedOrder2)
  })))))), client ? __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], _common_DefaultStyles__WEBPACK_IMPORTED_MODULE_10__["CardStyle"], __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    display: "block",
    padding: "1em"
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    display: "flex"
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["InputGroup"], {
    width: "100%",
    borderColor: "gray.300"
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["InputLeftElement"], {
    children: __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
      name: "search",
      color: "gray.300"
    })
  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    value: query,
    onChange: e => setQuery(e.target.value),
    type: "phone",
    placeholder: "Search"
  }))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], null, __jsx(_common_ShopSelect__WEBPACK_IMPORTED_MODULE_6__["default"], {
    client: client,
    shops: shops,
    updateClient: updateClient
  }))), (() => {
    if (loading) return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh"
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Spinner"], {
      thickness: "4px",
      speed: "0.65s",
      emptyColor: "gray.200",
      color: "blue.500",
      size: "xl"
    }));
    if (error || !data.shopOrders) return __jsx("div", null, error);
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
      width: "100%"
    }, selectedOrder && __jsx(_common_Reshipment__WEBPACK_IMPORTED_MODULE_8__["default"], {
      isOpen: isOpen,
      onClose: onClose,
      order: data.shopOrders.edges.filter(order => order.node.id.split('/').pop() === selectedOrder).length > 0 && data.shopOrders.edges.filter(order => order.node.id.split('/').pop() === selectedOrder)[0].node,
      shop: client
    }), data.shopOrders.edges.map((order, index) => __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
      borderTop: "0.1rem solid #dfe3e8"
    }, __jsx(_common_orderListItem_OrderListItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      key: index,
      disabled: true,
      client: client,
      orderName: order.node.name,
      first_name: order.node.shippingAddress.name.split(' ')[0],
      last_name: order.node.shippingAddress.name.split(' ').pop(),
      streetAddress1: order.node.shippingAddress.address1,
      streetAddress2: order.node.shippingAddress.address2,
      city: order.node.shippingAddress.city,
      state: order.node.shippingAddress.province,
      zip: order.node.shippingAddress.zip,
      shopName: client,
      lineItems: order.node.lineItems.edges,
      createAt: order.node.processedAt,
      note: order.node.note && order.node.note,
      email: order.node.email // errorText={order.node.note && order.node.note}
      // processText={order.node.note && order.node.note}
      ,
      orderId: order.node.id.split('/').pop(),
      buttons: __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        background: "#DDEBF7",
        borderRadius: 3,
        marginRight: 1,
        px: 2,
        height: 5,
        onClick: () => updateDialog(order.node.id.split('/').pop())
      }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Heading"], {
        fontSize: "xs",
        fontWeight: 700,
        color: "#1070CA",
        marginRight: 2
      }, "RESHIP"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
        size: 3,
        color: "#1070CA",
        name: "repeat"
      })), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: {
          pathname: '/completed'
        },
        as: `/order?store=${client}&name=${order.node.name}`
      }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        onClick: () => updateDrawer(order.node.id.split('/').pop()),
        bg: "transparent",
        color: "#66788a",
        "aria-label": "show order",
        height: "1.3rem",
        minWidth: "1.3rem",
        px: 0,
        ml: 1
      }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
        name: "arrow-forward",
        size: "18px"
      }))))
    })))));
  })()) : __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    background: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    borderRadius: 3
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Heading"], {
    margin: "1em",
    size: 600
  }, "Your orders will appear here after you add a shop.")));
}
CompletedOrderList.propTypes = {
  shops: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string
};

/***/ }),

/***/ "./components/find/Find.js":
/*!*********************************!*\
  !*** ./components/find/Find.js ***!
  \*********************************/
/*! exports provided: getItemGroup, option, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getItemGroup", function() { return getItemGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "option", function() { return option; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-boost */ "apollo-boost");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(apollo_boost__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/react-hooks */ "@apollo/react-hooks");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/core */ "@chakra-ui/core");
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _user_User__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../user/User */ "./components/user/User.js");
/* harmony import */ var _common_Pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/Pagination */ "./components/common/Pagination.js");
/* harmony import */ var _common_DefaultStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/DefaultStyles */ "./components/common/DefaultStyles.js");
/* harmony import */ var _MarketplaceSearch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./MarketplaceSearch */ "./components/find/MarketplaceSearch/index.js");
/* harmony import */ var _ZincSearch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ZincSearch */ "./components/find/ZincSearch/index.js");
/* harmony import */ var _ShopifySearch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ShopifySearch */ "./components/find/ShopifySearch/index.js");
/* harmony import */ var _layout_Page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../layout/Page */ "./components/layout/Page.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }













const getItemGroup = apollo_boost__WEBPACK_IMPORTED_MODULE_2__["gql"]`
  query getItemGroup($itemID: String) {
    getItemGroup(itemID: $itemID) {
      item
    }
  }
`;
const sortOptions = [{
  label: 'Lowest Price',
  value: 'price'
}, {
  label: 'Highest Price',
  value: '-price'
}, {
  label: 'Best Match',
  value: 'match'
}];
const option = (name, options, update, selected) => __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Box"], {
  marginBottom: 2,
  marginRight: 5
}, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Heading"], {
  fontSize: "sm",
  color: "text",
  fontWeight: 500,
  marginBottom: 0
}, name), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Box"], {
  display: "flex"
}, options.length > 0 ? options.map((a, index) => __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Box"], {
  id: a,
  key: index,
  p: 1,
  mr: 2,
  mt: 2,
  borderRadius: 3,
  bg: a === selected ? '#e2e9f2' : 'transparent',
  onClick: () => update(a),
  cursor: "pointer"
}, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Heading"], {
  fontSize: "xs",
  fontWeight: 500,
  px: 1,
  color: a === selected ? '#1070ca' : '#425a70',
  letterSpacing: "wide",
  textTransform: "uppercase"
}, a))) : __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Text"], {
  mt: 2,
  fontSize: "sm",
  color: "text"
}, "No Channels Added")));

const Find = ({
  headerSize,
  atcDisabled,
  addMPItem,
  addCustomItem,
  addZincItem
}) => {
  const allChannels = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__["useQuery"])(_layout_Page__WEBPACK_IMPORTED_MODULE_11__["CHANNELS_QUERY"], {
    variables: _layout_Page__WEBPACK_IMPORTED_MODULE_11__["channelsQueryVars"]
  });
  const {
    data,
    error: channelsError,
    loading: channelsLoading
  } = allChannels;
  const {
    0: selectedChannel,
    1: setSelectedChannel
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(data.channels.length ? data.channels[0].name : '');
  const {
    0: value,
    1: setValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('price');
  const {
    0: searchBar,
    1: setSearchBar
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: searchEntry,
    1: setSearchEntry
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: limit,
    1: setLimit
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(10);
  const {
    0: pageNum,
    1: setPageNum
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: min,
    1: setMin
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: max,
    1: setMax
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: price,
    1: setPrice
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const {
    0: priceCurrency,
    1: setPriceCurrency
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('USD');
  const {
    0: itemLocationCountry,
    1: setItemLocationCountry
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('US');
  const {
    0: include,
    1: setInclude
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: exclude,
    1: setExclude
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    data: {
      me
    }
  } = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__["useQuery"])(_user_User__WEBPACK_IMPORTED_MODULE_5__["CURRENT_USER_QUERY"]);
  const toast = Object(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["useToast"])();
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Box"], {
    display: "flex",
    py: 4
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Box"], {
    flex: 1,
    alignItems: "center",
    display: "flex"
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Heading"], {
    fontSize: "2xl",
    color: "text",
    fontWeight: 500
  }, "Marketplace"))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Box"], _extends({}, _common_DefaultStyles__WEBPACK_IMPORTED_MODULE_7__["CardStyle"], {
    background: "white"
  }), __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Box"], {
    display: "flex",
    paddingX: "1em",
    paddingY: "1em",
    flexWrap: "wrap"
  }, __jsx(_common_Pagination__WEBPACK_IMPORTED_MODULE_6__["default"], {
    leftDisabled: pageNum === 0,
    onLeft: () => setPageNum(pageNum - 1),
    onRight: () => setPageNum(pageNum + 1)
  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Box"], {
    flex: 1
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["InputGroup"], {
    width: "100%",
    borderColor: "gray.300"
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["InputLeftElement"], {
    children: __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Icon"], {
      name: "search",
      color: "gray.300"
    })
  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Input"], {
    value: searchBar,
    onChange: e => {
      setSearchBar(e.target.value);
      setPageNum(0);
    },
    onKeyPress: e => {
      if (e.key === 'Enter') {
        setSearchEntry(searchBar);
      }
    },
    placeholder: "Search"
  })))), (() => {
    if (channelsError || !data || !data.channels) return null;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Box"], {
      display: "flex",
      flexWrap: "wrap",
      background: "#f5f5f5",
      paddingY: ".7em",
      paddingX: "1em"
    }, option('Channel', data.channels.map(a => a.name), a => setSelectedChannel(a), selectedChannel), option('Location', ['US', 'CN', 'All'], a => setItemLocationCountry(a), itemLocationCountry), option('Items per page', [10, 50, 100], a => setLimit(a), limit)), searchEntry && data.channels.filter(order => order.name === selectedChannel)[0].type === 'MARKETPLACE' && __jsx(_MarketplaceSearch__WEBPACK_IMPORTED_MODULE_8__["default"], {
      search: searchEntry,
      limit,
      sort: value,
      pageNum,
      exclude,
      include,
      priceCurrency,
      price,
      itemLocationCountry,
      atcDisabled,
      addMPItem
    }), data.channels.length > 0 && data.channels.filter(order => order.name === selectedChannel)[0].type === 'ZINC' && __jsx(_ZincSearch__WEBPACK_IMPORTED_MODULE_9__["default"], {
      addZincItem: addZincItem,
      atcDisabled: atcDisabled,
      searchEntry: searchEntry,
      token: data.channels.filter(c => c.type === 'ZINC')[0].settings.key
    }), data.channels.length > 0 && data.channels.filter(order => order.name === selectedChannel)[0].type === 'SHOPIFY' && __jsx(_ShopifySearch__WEBPACK_IMPORTED_MODULE_10__["default"], {
      addCustomItem: (a, b) => addCustomItem(a, b, data.channels.filter(order => order.name === selectedChannel)[0].settings.shopURL, data.channels.filter(order => order.name === selectedChannel)[0].settings.key),
      checkout: () => toast({
        position: 'top-right',
        title: `Checkout`,
        status: 'success',
        duration: 2000,
        isClosable: true
      }),
      client: "Marketplace",
      atcDisabled: atcDisabled,
      searchEntry: searchEntry,
      apiKey: data.channels.filter(order => order.name === selectedChannel)[0].settings.key,
      url: data.channels.filter(order => order.name === selectedChannel)[0].settings.shopURL
    }));
  })())));
};

/* harmony default export */ __webpack_exports__["default"] = (Find);

/***/ }),

/***/ "./components/find/MarketplaceSearch/MktProduct.js":
/*!*********************************************************!*\
  !*** ./components/find/MarketplaceSearch/MktProduct.js ***!
  \*********************************************************/
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
/* harmony import */ var _VariantSelector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./VariantSelector */ "./components/find/MarketplaceSearch/VariantSelector.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class MktProduct extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleOptionChange", event => {
      const {
        product
      } = this.props;
      const {
        target
      } = event;
      const {
        selectedOptions
      } = this.state;
      selectedOptions[target.name] = target.value;
      const selectedVariant = product.variants.edges.find(variant => variant.node.selectedOptions.every(selectedOption => selectedOptions[selectedOption.name] === selectedOption.value)).node;
      this.setState({
        selectedVariant,
        selectedVariantImage: selectedVariant.image.src
      });
    });

    _defineProperty(this, "handleQuantityChange", event => {
      this.setState({
        selectedVariantQuantity: event
      });
    });

    _defineProperty(this, "handleQuantityDown", () => {
      this.setState(prevState => ({
        selectedVariantQuantity: prevState.selectedVariantQuantity - 1 || 1
      }));
    });

    _defineProperty(this, "handleQuantityUp", () => {
      this.setState(prevState => ({
        selectedVariantQuantity: prevState.selectedVariantQuantity + 1
      }));
    });

    _defineProperty(this, "findImage", (images, variantId) => {
      const primary = images[0];
      const image = images.filter(function (a) {
        return a.variant_ids.includes(variantId);
      })[0];
      return (image || primary).src;
    });

    this.state = {
      selectedOptions: {},
      selectedVariantQuantity: 1
    };
  }

  componentWillMount() {
    const {
      product
    } = this.props;
    product.options.forEach(selector => {
      this.setState(prevState => ({
        selectedOptions: _objectSpread({}, prevState.selectedOptions, {
          [selector.name]: selector.values[0]
        })
      }));
    });
  }

  render() {
    const {
      product,
      addVariantToCart,
      atcDisabled
    } = this.props;
    const {
      selectedVariantImage,
      selectedVariantQuantity,
      selectedVariant
    } = this.state;
    const variantImage = selectedVariantImage || product.images.edges[0].node.src;
    const variant = selectedVariant || product.variants.edges[0].node;
    const variantQuantity = selectedVariantQuantity || 1;
    const variantSelectors = product.options.map(option => __jsx(_VariantSelector__WEBPACK_IMPORTED_MODULE_3__["default"], {
      handleOptionChange: this.handleOptionChange,
      key: option.id.toString(),
      option: option
    }));
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      display: "flex",
      alignItems: "center",
      borderTop: "0.1rem solid #dfe3e8"
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      padding: 4
    }, product.images.edges.length && __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      background: "white",
      border: "1px solid #e8e9ea",
      borderRadius: 3,
      height: "90px",
      width: "90px"
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      as: "img",
      src: variantImage,
      alt: `${product.title} product shot`
    }))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      padding: 4,
      paddingLeft: 0,
      marginTop: 1,
      marginBottom: "auto"
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
      fontSize: "md",
      color: "text",
      fontWeight: 500
    }, product.title), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
      size: 400,
      marginRight: 10,
      color: "green.600"
    }, "$", variant.price), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      display: "flex",
      marginTop: 1,
      marginBottom: 7
    }, variantSelectors), !atcDisabled && __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      display: "flex"
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      paddingRight: 5
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["PseudoBox"], null, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
      fontSize: ".65rem",
      fontWeight: "600",
      color: "gray.500"
    }, "QUANTITY"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["NumberInput"], {
      size: "sm",
      value: selectedVariantQuantity,
      onChange: this.handleQuantityChange,
      min: 1,
      width: "80px"
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["NumberInputField"], {
      focusBorderColor: "blue.500",
      textAlign: "center",
      _hover: {
        borderColor: 'blue.500'
      },
      height: "25px"
    }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["NumberInputStepper"], {
      width: "25px"
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["NumberIncrementStepper"], {
      bg: "#f6f7f9",
      color: "blue.500",
      _active: {
        bg: 'blue.500'
      },
      _hover: {
        bg: 'blue.500',
        color: 'white'
      },
      children: __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
        name: "add",
        color: "currentColor"
      }),
      marginTop: "0px !important",
      borderTopWidth: "0px !important"
    })), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["NumberInputStepper"], {
      left: "0",
      width: "25px"
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["NumberDecrementStepper"], {
      bg: "#f6f7f9",
      color: "blue.500",
      _active: {
        bg: 'blue.500'
      },
      _hover: {
        bg: 'blue.500',
        color: 'white'
      },
      children: __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
        name: "minus",
        color: "currentColor"
      }),
      borderLeft: "0px",
      borderRight: "1px solid #E2E8F0",
      marginTop: "0px !important",
      borderTopWidth: "0px !important"
    })))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      background: "#DDEBF7",
      borderRadius: 3,
      marginRight: 1,
      px: 2,
      mx: 3,
      mt: "auto",
      height: 6,
      onClick: () => addVariantToCart(variant.id, selectedVariantQuantity),
      disabled: atcDisabled
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
      letterSpacing: "wide",
      fontSize: "sm",
      fontWeight: 700,
      color: "#1070CA"
    }, "ADD TO CART")))))));
  }

}

_defineProperty(MktProduct, "propTypes", {
  product: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  addVariantToCart: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  atcDisabled: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool
});

/* harmony default export */ __webpack_exports__["default"] = (MktProduct);

/***/ }),

/***/ "./components/find/MarketplaceSearch/VariantSelector.js":
/*!**************************************************************!*\
  !*** ./components/find/MarketplaceSearch/VariantSelector.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/core */ "@chakra-ui/core");
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class VariantSelector extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    const {
      option: {
        name,
        values
      },
      handleOptionChange
    } = this.props;
    return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      marginRight: 10
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
      fontSize: "sm",
      color: "gray.500",
      letterSpacing: "wide",
      fontWeight: 600
    }, name), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Select"], {
      mt: 1,
      height: 6,
      fontSize: "12px",
      name: name,
      key: name,
      onChange: handleOptionChange,
      iconSize: 4,
      borderRadius: 3,
      background: "#f7f7f7"
    }, values.map(value => __jsx("option", {
      value: value,
      key: `${name}-${value}`
    }, `${value}`))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (VariantSelector);

/***/ }),

/***/ "./components/find/MarketplaceSearch/index.js":
/*!****************************************************!*\
  !*** ./components/find/MarketplaceSearch/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/react-hooks */ "@apollo/react-hooks");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/core */ "@chakra-ui/core");
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! apollo-boost */ "apollo-boost");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(apollo_boost__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _MktProduct__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MktProduct */ "./components/find/MarketplaceSearch/MktProduct.js");
/* harmony import */ var _user_User__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../user/User */ "./components/user/User.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const getItemsQuery = apollo_boost__WEBPACK_IMPORTED_MODULE_4__["gql"]`
  query getItems(
    $search: String
    $limit: Int
    $sort: String
    $pageNum: Int
    $exclude: Json
    $include: Json
    $priceCurrency: String
    $price: String
    $itemLocationCountry: String
  ) {
    getItems(
      search: $search
      limit: $limit
      sort: $sort
      pageNum: $pageNum
      exclude: $exclude
      include: $include
      priceCurrency: $priceCurrency
      price: $price
      itemLocationCountry: $itemLocationCountry
    ) {
      item
    }
  }
`;

function MarketplaceSearch({
  search,
  limit,
  sort,
  pageNum,
  exclude,
  include,
  priceCurrency,
  price,
  itemLocationCountry,
  atcDisabled,
  addMPItem
}) {
  const {
    data: {
      me
    }
  } = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__["useQuery"])(_user_User__WEBPACK_IMPORTED_MODULE_6__["CURRENT_USER_QUERY"]);
  const allItems = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__["useQuery"])(getItemsQuery, {
    variables: {
      search,
      limit,
      sort: sort.value,
      pageNum,
      exclude,
      include,
      priceCurrency,
      price,
      itemLocationCountry
    }
  });
  const {
    data,
    error,
    loading
  } = allItems;

  if (me && (!me.buyer || !me.buyer.status)) {
    return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      height: "200px"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/settings"
    }, __jsx("a", null, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
      background: "#DDEBF7",
      borderRadius: 3
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Heading"], {
      fontSize: "lg",
      fontWeight: 700,
      color: "#1070CA"
    }, "GET MARKETPLACE BETA ACCESS")))));
  }

  if (loading) return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh"
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Spinner"], {
    thickness: "4px",
    speed: "0.65s",
    emptyColor: "gray.200",
    color: "blue.500",
    size: "xl"
  }));
  if (error || !data.getItems.item || data.getItems.item.length < 1) return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    paddingX: "1em",
    paddingY: "1em"
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    background: "tint2",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    borderRadius: 3
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Heading"], {
    margin: "1em",
    size: 600
  }, "No items found.")));
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, data.getItems.item.data.products.edges.map(product => __jsx(_MktProduct__WEBPACK_IMPORTED_MODULE_5__["default"], {
    addVariantToCart: (a, b) => addMPItem(a, b),
    checkout: () => toaster.success(`checkout`),
    key: product.node.id.toString(),
    product: product.node,
    client: "Marketplace",
    atcDisabled: atcDisabled
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (MarketplaceSearch);

/***/ }),

/***/ "./components/find/ShopifySearch/index.js":
/*!************************************************!*\
  !*** ./components/find/ShopifySearch/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MarketplaceSearch_MktProduct__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../MarketplaceSearch/MktProduct */ "./components/find/MarketplaceSearch/MktProduct.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function ShopifySearch({
  addCustomItem,
  atcDisabled,
  searchEntry,
  token,
  apiKey,
  url
}) {
  const {
    0: results,
    1: setResults
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: error,
    1: setError
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    async function findItems() {
      const query = `
      query AllOrdersQuery($query: String)
      {
        products(query: $query first:5) 
        {
          pageInfo {
            hasNextPage
            hasPreviousPage
          }
          edges {
            node {
              id
              title
              options {
                id
                name
                values
              }
              variants(first: 250) {
                pageInfo {
                  hasNextPage
                  hasPreviousPage
                }
                edges {
                  node {
                    id
                    title
                    selectedOptions {
                      name
                      value
                    }
                    image {
                      src
                    }
                    price
                  }
                }
              }
              images(first: 250) {
                pageInfo {
                  hasNextPage
                  hasPreviousPage
                }
                edges {
                  node {
                    src
                  }
                }
              }
            }
          }
          }
        }
      `;
      const variables = {
        query: searchEntry
      };
      const items = await fetch(`https://${url}.myshopify.com/api/graphql`, {
        method: 'POST',
        body: JSON.stringify({
          query,
          variables
        }),
        headers: {
          'Content-Type': 'application/json',
          'X-Shopify-Storefront-Access-Token': apiKey
        }
      }).then(res => res.json()).then(json => setResults(json.data.products.edges));
    }

    searchEntry && findItems();
  }, [apiKey, searchEntry, url]);
  return results.map(product => __jsx(_MarketplaceSearch_MktProduct__WEBPACK_IMPORTED_MODULE_1__["default"], {
    addVariantToCart: (a, b) => addCustomItem(a, b),
    checkout: () => toaster.success(`checkout`),
    key: product.node.id.toString(),
    product: product.node,
    client: "Marketplace",
    atcDisabled: atcDisabled
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ShopifySearch);

/***/ }),

/***/ "./components/find/ZincSearch/AmzProduct.js":
/*!**************************************************!*\
  !*** ./components/find/ZincSearch/AmzProduct.js ***!
  \**************************************************/
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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class AmzProduct extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleQuantityChange", event => {
      this.setState({
        selectedVariantQuantity: event
      });
    });

    _defineProperty(this, "handleQuantityDown", () => {
      this.setState(prevState => ({
        selectedVariantQuantity: prevState.selectedVariantQuantity - 1 || 1
      }));
    });

    _defineProperty(this, "handleQuantityUp", () => {
      this.setState(prevState => ({
        selectedVariantQuantity: prevState.selectedVariantQuantity + 1
      }));
    });

    _defineProperty(this, "findImage", (images, variantId) => {
      const primary = images[0];
      const image = images.filter(function (a) {
        return a.variant_ids.includes(variantId);
      })[0];
      return (image || primary).src;
    });

    this.state = {
      selectedOptions: {},
      selectedVariantQuantity: 1
    };
  }

  render() {
    const {
      product,
      addZincItem,
      atcDisabled
    } = this.props;
    console.log(product);
    const {
      selectedVariantImage,
      selectedVariantQuantity,
      selectedVariant
    } = this.state;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      display: "flex",
      alignItems: "center",
      borderTop: "0.1rem solid #dfe3e8"
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      flex: 1,
      padding: 15
    }, product.image && __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      background: "white",
      border: "1px solid #e8e9ea",
      borderRadius: 3
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      as: "img",
      src: product.image,
      alt: `${product.title} product shot`
    }))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      flex: 6,
      padding: 15,
      paddingLeft: 0,
      marginTop: 3,
      marginBottom: "auto"
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
      fontSize: "md",
      color: "text",
      fontWeight: 500
    }, `${product.title.slice(0, 70)}...`), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      display: "flex",
      alignItems: "center"
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
      name: "star",
      color: "yellow.400",
      mr: 2
    }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
      paddingRight: 3,
      color: "gray.600"
    }, product.stars), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
      fontSize: "sm",
      color: "gray.400"
    }, "(", product.num_reviews, ")"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
      fontSize: "sm",
      mx: 2
    }, "\xB7"), __jsx("a", {
      href: `https://amazon.com/gp/product/${product.product_id}`,
      target: "_blank",
      rel: "noopener noreferrer"
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
      fontSize: "sm"
    }, product.product_id))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
      fontSize: "md",
      marginRight: 10,
      color: "green.600",
      mb: 2
    }, "$", product.price / 100), !atcDisabled && __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      display: "flex"
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      paddingRight: 5
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["PseudoBox"], null, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
      fontSize: ".65rem",
      fontWeight: "600",
      color: "gray.500"
    }, "QUANTITY"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["NumberInput"], {
      size: "sm",
      value: selectedVariantQuantity,
      onChange: this.handleQuantityChange,
      min: 1,
      width: "80px"
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["NumberInputField"], {
      focusBorderColor: "blue.500",
      textAlign: "center",
      _hover: {
        borderColor: 'blue.500'
      },
      height: "25px"
    }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["NumberInputStepper"], {
      width: "25px"
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["NumberIncrementStepper"], {
      bg: "#f6f7f9",
      color: "blue.500",
      _active: {
        bg: 'blue.500'
      },
      _hover: {
        bg: 'blue.500',
        color: 'white'
      },
      children: __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
        name: "add",
        color: "currentColor"
      }),
      marginTop: "0px !important",
      borderTopWidth: "0px !important"
    })), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["NumberInputStepper"], {
      left: "0",
      width: "25px"
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["NumberDecrementStepper"], {
      bg: "#f6f7f9",
      color: "blue.500",
      _active: {
        bg: 'blue.500'
      },
      _hover: {
        bg: 'blue.500',
        color: 'white'
      },
      children: __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
        name: "minus",
        color: "currentColor"
      }),
      borderLeft: "0px",
      borderRight: "1px solid #E2E8F0",
      marginTop: "0px !important",
      borderTopWidth: "0px !important"
    })))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      background: "#DDEBF7",
      borderRadius: 3,
      marginRight: 1,
      px: 2,
      mx: 3,
      mt: "auto",
      height: 6,
      onClick: () => addZincItem(product.product_id, selectedVariantQuantity, `${product.title.slice(0, 70)}...`, product.image, product.price / 100),
      disabled: atcDisabled
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
      letterSpacing: "wide",
      fontSize: "sm",
      fontWeight: 700,
      color: "#1070CA"
    }, "ADD TO CART")))) // <Box display="flex">
    //   <Box
    //     display="flex"
    //     alignItems="center"
    //     justifyContent="center"
    //     paddingRight={5}
    //   >
    //     <Box display="flex" paddingRight={5} height={20}>
    //       <Box
    //         display="flex"
    //         alignItems="center"
    //         background="#f4f4f4"
    //         paddingX={5}
    //         borderRadius={2}
    //         boxShadow="0 0 2px rgba(67, 90, 111, 0.3)"
    //       >
    //         <Icon
    //           color="#425A70"
    //           icon="minus"
    //           appearance="minimal"
    //           size={12}
    //           cursor="pointer"
    //           onClick={this.handleQuantityDown}
    //         />
    //         <Text size={300} marginX={9}>
    //           {selectedVariantQuantity}
    //         </Text>
    //         <Icon
    //           color="#425A70"
    //           icon="plus"
    //           appearance="minimal"
    //           size={12}
    //           cursor="pointer"
    //           onClick={this.handleQuantityUp}
    //         />
    //       </Box>
    //     </Box>
    //     <Box height={20}>
    //       <Button
    //         boxShadow="0 0 2px rgba(67, 90, 111, 0.3)"
    //         intent="primary"
    //         height={20}
    //         disabled={atcDisabled}
    //         onClick={() =>
    //           addZincItem(
    //             product.product_id,
    //             selectedVariantQuantity,
    //             `${product.title.slice(0, 70)}...`,
    //             product.image,
    //             product.price / 100
    //           )
    //         }
    //       >
    //         Add to Cart
    //       </Button>
    //     </Box>
    //   </Box>
    // </Box>
    )));
  }

}

_defineProperty(AmzProduct, "propTypes", {
  product: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  addZincItem: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  atcDisabled: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool
});

/* harmony default export */ __webpack_exports__["default"] = (AmzProduct);

/***/ }),

/***/ "./components/find/ZincSearch/index.js":
/*!*********************************************!*\
  !*** ./components/find/ZincSearch/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AmzProduct__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AmzProduct */ "./components/find/ZincSearch/AmzProduct.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../config */ "./config.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function ZincSearch({
  addZincItem,
  atcDisabled,
  searchEntry,
  token
}) {
  const {
    0: results,
    1: setResults
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: error,
    1: setError
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    async function findItems() {
      const res = await fetch(`${true ? _config__WEBPACK_IMPORTED_MODULE_2__["front"] : undefined}/api/zinc/search?query=${searchEntry}&token=${token}`).then(res => res.json()).then(json => setResults(json)).catch(error => setError('Error: ', error));
    }

    searchEntry && findItems();
  }, [searchEntry, token]);
  return results.map(product => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", null, error), __jsx(_AmzProduct__WEBPACK_IMPORTED_MODULE_1__["default"], {
    product: product,
    addVariantToCart: a => toaster.success(a),
    atcDisabled: atcDisabled,
    addZincItem: (a, b, c, d, e) => addZincItem(a, b, c, d, e)
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (ZincSearch);

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
  icon,
  fd
}) => __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
  display: "flex",
  flexDirection: fd || 'row',
  alignItems: "center"
}, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Heading"], {
  my: 2,
  ml: 4,
  mr: "auto",
  textTransform: "uppercase",
  letterSpacing: "wide",
  fontSize: "sm",
  fontWeight: 800,
  color: "#d7dae0"
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
    0: shopURL,
    1: setShopURL
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
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
    fd: shops && shops.length === 0 && 'column',
    icon: __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Popover"], null, shops.length > 0 ? __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["PopoverTrigger"], null, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
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
    }))) : __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["PopoverTrigger"], null, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
      px: 4,
      mt: 2,
      width: "100%"
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
      variantColor: "green",
      variant: "ghost",
      bg: "green.50",
      width: "100%",
      borderRadius: 3,
      marginRight: 1,
      px: 2,
      textTransform: "uppercase",
      letterSpacing: "wide",
      fontSize: "md",
      fontWeight: 700,
      _hover: {
        opacity: 0.8
      }
    }, "Add first shop"))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["PopoverContent"], {
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
      width: "100%",
      type: "submit"
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
    fd: channels && channels.length === 0 && 'column',
    icon: __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Popover"], null, channels && channels.length === 0 ? __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["PopoverTrigger"], null, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
      px: 4,
      mt: 2,
      width: "100%"
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
      variantColor: "blue",
      variant: "ghost",
      bg: "blue.50",
      width: "100%",
      borderRadius: 3,
      marginRight: 1,
      px: 2,
      textTransform: "uppercase",
      letterSpacing: "wide",
      fontSize: "md",
      fontWeight: 700,
      _hover: {
        opacity: 0.8
      }
    }, "Add first channel"))) : __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["PopoverTrigger"], null, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
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
    }, option('Channel Type', ['zinc', 'shopify'], a => setType(a), type), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Text"], {
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
    }, "You must get the key at Zinc.io")), type === 'shopify' && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Text"], {
      fontSize: "sm",
      color: "gray.600",
      mb: 1,
      fontWeight: 500
    }, "Shop URL"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Input"], {
      label: "Name",
      mb: 2,
      value: shopURL,
      onChange: e => setShopURL(e.target.value)
    }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Text"], {
      fontSize: "sm",
      color: "gray.600",
      mb: 1,
      fontWeight: 500
    }, "API Key"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Input"], {
      label: "key",
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
            }, {}, shopURL && {
              shopURL
            })
          }
        });
        setName('');
        setKey('');
        setSecret('');
        setShopURL('');
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
}), __jsx("title", null, "Openship"));

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
/* harmony import */ var _logo_Logo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../logo/Logo */ "./components/logo/Logo.js");
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
      }, __jsx(_logo_Logo__WEBPACK_IMPORTED_MODULE_6__["default"], null))
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
    }, __jsx(_logo_Logo__WEBPACK_IMPORTED_MODULE_6__["default"], null)))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
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
      fontSize: "2xl",
      fontWeight: 500,
      color: "text",
      paddingBottom: 15
    }, "Take full control of your e-commerce operations"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
      fontSize: "lg",
      color: "gray.600"
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

/***/ "./components/logo/Logo.js":
/*!*********************************!*\
  !*** ./components/logo/Logo.js ***!
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

/***/ "./components/order/Order.js":
/*!***********************************!*\
  !*** ./components/order/Order.js ***!
  \***********************************/
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
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_OrderDetails__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/OrderDetails */ "./components/common/OrderDetails.js");
/* harmony import */ var _completed_completedOrderList_CompletedOrderList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../completed/completedOrderList/CompletedOrderList */ "./components/completed/completedOrderList/CompletedOrderList.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }







function Order({
  store,
  name
}) {
  const {
    data,
    error,
    loading
  } = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__["useQuery"])(_completed_completedOrderList_CompletedOrderList__WEBPACK_IMPORTED_MODULE_5__["SHOP_ORDERS_QUERY"], {
    variables: {
      domain: `${store}.myshopify.com`,
      query: name,
      first: 10
    }
  });

  function formatNote(note) {
    if (!note.includes('Walmart')) {
      return note.split('||').map(a => {
        const obj = {};
        a.split(',').forEach(b => {
          obj[b.split(':')[0].trim()] = b.split(':')[1].trim();
        });
        obj.lineID = obj.lineID.split('|').map(c => parseFloat(c));
        obj.marketID = obj.marketID;
        obj.transID = parseFloat(obj.transID);
        return obj;
      });
    }

    return null;
  }

  if (loading) return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh"
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Spinner"], {
    size: 80
  }));
  if (error || !data.shopOrders) return __jsx("div", null, error);
  const {
    note
  } = data.shopOrders.edges[0].node;
  return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    maxWidth: "45em"
  }, __jsx(_common_OrderDetails__WEBPACK_IMPORTED_MODULE_4__["default"], _extends({}, data.shopOrders.edges[0].node, {
    // note={note && formatNote(note)}
    store: store
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (Order);
Order.propTypes = {
  store: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  name: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string
};

/***/ }),

/***/ "./components/pending/Cart/MPCart.js":
/*!*******************************************!*\
  !*** ./components/pending/Cart/MPCart.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/core */ "@chakra-ui/core");
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _MPCartItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MPCartItem */ "./components/pending/Cart/MPCartItem.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class Cart extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    const {
      cart,
      checkout,
      removeItem,
      checkoutLineItemsUpdate,
      loading,
      cartName,
      background,
      color
    } = this.props;
    return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      marginLeft: "-3px",
      background: background || '#F1FAF5',
      paddingY: ".7em",
      paddingX: "1em",
      border: "1px solid #edf0f2"
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      marginBottom: 2
    }, cart ? __jsx("a", {
      href: cart.webUrl,
      target: "_blank",
      rel: "noopener noreferrer"
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      fontSize: "sm",
      fontWeight: 500,
      color: color || '#00783E'
    }, cartName, " Cart")) : __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      fontWeight: 500,
      color: color || '#00783E'
    }, cartName, " Cart")), cart && cart.lineItems && cart.lineItems.edges.length ? cart.lineItems.edges.map(a => __jsx(_MPCartItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
      removeItem: removeItem ? a => removeItem(a) : undefined,
      checkoutID: cart.id,
      checkoutLineItemsUpdate: checkoutLineItemsUpdate ? a => checkoutLineItemsUpdate(a) : undefined,
      key: a.node.id.toString(),
      lineItem: a.node,
      loading: loading
    })) : __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      background: "#fff",
      border: "muted",
      padding: 2,
      display: "flex",
      justifyContent: "center"
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      fontSize: "sm",
      color: "text"
    }, "Cart is empty")));
  }

}

_defineProperty(Cart, "propTypes", {
  checkout: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  createCheckout: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  setCheckout: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  checkoutLineItemsRemove: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
});

/* harmony default export */ __webpack_exports__["default"] = (Cart);

/***/ }),

/***/ "./components/pending/Cart/MPCartItem.js":
/*!***********************************************!*\
  !*** ./components/pending/Cart/MPCartItem.js ***!
  \***********************************************/
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




function CartItem({
  lineItem,
  removeItem,
  checkoutLineItemsUpdate,
  checkoutID,
  loading
}) {
  function updateQuantity(lineItemId, quantity) {
    checkoutLineItemsUpdate([{
      id: lineItemId,
      quantity: parseInt(quantity, 10)
    }]);
  }

  return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    background: "#fff",
    border: "muted",
    marginBottom: 5
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    display: "flex",
    alignItems: "center"
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    height: "100%",
    background: "white"
  }, lineItem.variant.image && __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    background: "white",
    borderRight: "1px solid #e8e9ea",
    height: "70px",
    width: "70px"
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    as: "img",
    src: lineItem.variant.image.src,
    alt: `${lineItem.title} product shot`
  }))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    paddingRight: 2,
    paddingLeft: 3
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    fontSize: "sm",
    color: "text"
  }, lineItem.title), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    display: "flex",
    alignItems: "center"
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    fontSize: "xs",
    color: "gray.600"
  }, lineItem.variant.title), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    marginX: 2
  }, "\xB7"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    fontSize: "xs",
    marginRight: 10,
    color: "green.600"
  }, "$", (lineItem.quantity * lineItem.variant.price).toFixed(2))), lineItem.quantity > 1 && __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    fontSize: "xs",
    color: "gray.500"
  }, "$", lineItem.variant.price, " x ", lineItem.quantity)), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    marginLeft: "auto",
    display: "flex",
    alignItems: "center"
  }, checkoutLineItemsUpdate && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, loading ? __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Spinner"], {
    size: "sm",
    color: "blue.500",
    mx: 3
  }) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["NumberInput"], {
    size: "sm",
    value: lineItem.quantity,
    onChange: e => updateQuantity(lineItem.id, e),
    min: 0,
    width: "80px",
    mr: 1
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["NumberInputField"], {
    focusBorderColor: "blue.500",
    textAlign: "center",
    _hover: {
      borderColor: 'blue.500'
    },
    height: "25px"
  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["NumberInputStepper"], {
    width: "25px"
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["NumberIncrementStepper"], {
    bg: "#f6f7f9",
    color: "blue.500",
    _active: {
      bg: 'blue.500'
    },
    _hover: {
      bg: 'blue.500',
      color: 'white'
    },
    children: __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
      name: "add",
      color: "currentColor"
    }),
    marginTop: "0px !important",
    borderTopWidth: "0px !important"
  })), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["NumberInputStepper"], {
    left: "0",
    width: "25px"
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["NumberDecrementStepper"], {
    bg: "#f6f7f9",
    color: "blue.500",
    _active: {
      bg: 'blue.500'
    },
    _hover: {
      bg: 'blue.500',
      color: 'white'
    },
    children: __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
      name: "minus",
      color: "currentColor"
    }),
    borderLeft: "0px",
    borderRight: "1px solid #E2E8F0",
    marginTop: "0px !important",
    borderTopWidth: "0px !important"
  }))))), removeItem && __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    "aria-label": "show line-items",
    height: "1.3rem",
    minWidth: "1.3rem",
    bg: "transparent",
    color: "#66788a",
    px: 0,
    mx: 2,
    onClick: () => removeItem([lineItem.id])
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    name: "small-close",
    size: 4
  })))));
}

/* harmony default export */ __webpack_exports__["default"] = (CartItem);

/***/ }),

/***/ "./components/pending/Cart/ZincCart.js":
/*!*********************************************!*\
  !*** ./components/pending/Cart/ZincCart.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/core */ "@chakra-ui/core");
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ZincCartItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ZincCartItem */ "./components/pending/Cart/ZincCartItem.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class Cart extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    const {
      cart,
      checkout,
      removeItem,
      checkoutLineItemsUpdate,
      loading
    } = this.props;
    return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      marginLeft: "-3px",
      background: "#EDF2F7",
      paddingY: ".7em",
      paddingX: "1em",
      border: "1px solid #edf0f2"
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      marginBottom: 2,
      display: "flex",
      alignItems: "center"
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      fontSize: "sm",
      fontWeight: 500,
      color: "#1A202C"
    }, "Zinc Cart"), checkout && checkout._type === 'error' && __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      marginLeft: "auto"
    }, __jsx("a", {
      href: `https://dash.zinc.io/orders/${checkout.request_id}`,
      target: "_blank",
      rel: "noopener noreferrer"
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Badge"], {
      variantColor: "red"
    }, "Status: Error"))), checkout && checkout.tracking && __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      marginLeft: "auto"
    }, __jsx("a", {
      href: `https://dash.zinc.io/orders/${checkout.request_id}`,
      target: "_blank",
      rel: "noopener noreferrer"
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Badge"], null, "Status: ", checkout.tracking.length > 0 ? 'Shipped' : 'Pending')))), cart && cart.products && cart.products.length ? cart.products.map(a => __jsx(_ZincCartItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
      removeItem: removeItem ? a => removeItem(a) : undefined,
      checkoutLineItemsUpdate: checkoutLineItemsUpdate ? (id, quantity) => checkoutLineItemsUpdate(id, quantity) : undefined,
      key: a.product_id,
      lineItem: a,
      loading: loading
    })) : __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      background: "#fff",
      border: "muted",
      padding: 2,
      display: "flex",
      justifyContent: "center"
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      fontSize: "sm"
    }, "Cart is empty")));
  }

}

_defineProperty(Cart, "propTypes", {
  cart: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  removeItem: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  checkoutLineItemsUpdate: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
});

/* harmony default export */ __webpack_exports__["default"] = (Cart);

/***/ }),

/***/ "./components/pending/Cart/ZincCartItem.js":
/*!*************************************************!*\
  !*** ./components/pending/Cart/ZincCartItem.js ***!
  \*************************************************/
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




function CartItem({
  lineItem,
  removeItem,
  checkoutLineItemsUpdate,
  loading
}) {
  return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    background: "#fff",
    border: "muted",
    marginBottom: 5
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    display: "flex",
    alignItems: "center"
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    height: "100%",
    background: "white"
  }, lineItem.src && __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    background: "white",
    borderRight: "1px solid #e8e9ea",
    width: "70px",
    maxHeight: "100%"
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    as: "img",
    src: lineItem.src,
    alt: `${lineItem.title} product shot`
  }))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    paddingRight: 2,
    paddingLeft: 3
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    fontSize: "sm",
    color: "text"
  }, lineItem.title), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    display: "flex",
    alignItems: "center"
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    fontSize: "xs",
    color: "gray.600"
  }, lineItem.product_id), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    marginX: 2
  }, "\xB7"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    fontSize: "xs",
    marginRight: 10,
    color: "green.600"
  }, "$", (lineItem.quantity * lineItem.price).toFixed(2))), lineItem.quantity > 1 && __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    fontSize: "xs",
    color: "gray.500"
  }, "$", lineItem.price, " x ", lineItem.quantity)), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    marginLeft: "auto",
    display: "flex",
    alignItems: "center"
  }, checkoutLineItemsUpdate && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, loading ? __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Spinner"], {
    size: "sm",
    color: "blue.500",
    mx: 3
  }) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["NumberInput"], {
    size: "sm",
    value: lineItem.quantity,
    onChange: e => checkoutLineItemsUpdate(lineItem.product_id, e),
    min: 0,
    width: "80px",
    mr: 1
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["NumberInputField"], {
    focusBorderColor: "blue.500",
    textAlign: "center",
    _hover: {
      borderColor: 'blue.500'
    },
    height: "25px"
  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["NumberInputStepper"], {
    width: "25px"
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["NumberIncrementStepper"], {
    bg: "#f6f7f9",
    color: "blue.500",
    _active: {
      bg: 'blue.500'
    },
    _hover: {
      bg: 'blue.500',
      color: 'white'
    },
    children: __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
      name: "add",
      color: "currentColor"
    }),
    marginTop: "0px !important",
    borderTopWidth: "0px !important"
  })), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["NumberInputStepper"], {
    left: "0",
    width: "25px"
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["NumberDecrementStepper"], {
    bg: "#f6f7f9",
    color: "blue.500",
    _active: {
      bg: 'blue.500'
    },
    _hover: {
      bg: 'blue.500',
      color: 'white'
    },
    children: __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
      name: "minus",
      color: "currentColor"
    }),
    borderLeft: "0px",
    borderRight: "1px solid #E2E8F0",
    marginTop: "0px !important",
    borderTopWidth: "0px !important"
  }))))), removeItem && __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    "aria-label": "show line-items",
    height: "1.3rem",
    minWidth: "1.3rem",
    bg: "transparent",
    color: "#66788a",
    px: 0,
    mx: 2,
    onClick: () => removeItem(lineItem.product_id)
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    name: "small-close",
    size: 4
  })))));
}

/* harmony default export */ __webpack_exports__["default"] = (CartItem);

/***/ }),

/***/ "./components/pending/Pending.js":
/*!***************************************!*\
  !*** ./components/pending/Pending.js ***!
  \***************************************/
/*! exports provided: ORDER_QUERY, PAGINATION_QUERY, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ORDER_QUERY", function() { return ORDER_QUERY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAGINATION_QUERY", function() { return PAGINATION_QUERY; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-boost */ "apollo-boost");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(apollo_boost__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/react-hooks */ "@apollo/react-hooks");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/core */ "@chakra-ui/core");
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_orderListItem_OrderListItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/orderListItem/OrderListItem */ "./components/common/orderListItem/OrderListItem.js");
/* harmony import */ var _find_Find__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../find/Find */ "./components/find/Find.js");
/* harmony import */ var _user_User__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../user/User */ "./components/user/User.js");
/* harmony import */ var _layout_Page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../layout/Page */ "./components/layout/Page.js");
/* harmony import */ var _common_orderListItem_OrderLine__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/orderListItem/OrderLine */ "./components/common/orderListItem/OrderLine.js");
/* harmony import */ var _common_DefaultStyles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common/DefaultStyles */ "./components/common/DefaultStyles.js");
/* harmony import */ var _Cart_MPCart__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Cart/MPCart */ "./components/pending/Cart/MPCart.js");
/* harmony import */ var _Cart_ZincCart__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Cart/ZincCart */ "./components/pending/Cart/ZincCart.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../config */ "./config.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }















async function placeZincOrder(data, token, updateOrderFunc) {
  try {
    const response = await fetch(`${true ? _config__WEBPACK_IMPORTED_MODULE_12__["front"] : undefined}/api/zinc/purchase?token=${token}`, {
      credentials: 'same-origin',
      mode: 'cors',
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json',
        'X-Requested-With': 'Fetch'
      },
      body: JSON.stringify({
        data
      })
    });
    const res = await response.json();
    const update = await updateOrderFunc({
      variables: {
        id: data.client_notes.os_order_id,
        zincCheckout: res,
        processed: 'TRUE'
      }
    });
    console.log('first2', res);
  } catch (e) {
    console.log('error', e);
  }
}

async function placeCustomOrder(cart, id, updateOrderFunc) {
  const update = await updateOrderFunc({
    variables: {
      id,
      processed: 'TRUE'
    }
  }); // try {
  //   let cartObj = JSON.parse(cart);
  //   cartObj["pId"] = id;
  //   let cartJson = JSON.stringify(cartObj);
  //   const response = await fetch(
  //     `${
  //       process.env.NODE_ENV === 'development' ? front : prodFront
  //     }/api/shopify/purchase`,
  //     {
  //       credentials: 'same-origin',
  //       mode: 'cors',
  //       method: 'POST',
  //       headers: {
  //         Accept: 'application/json',
  //         'Content-type': 'application/json',
  //         'X-Requested-With': 'Fetch',
  //       },
  //       body: cartJson,
  //     }
  //   );
  //   const res = await response.json();
  //   console.log(res);
  //   // console.log("response received");
  //   const update = await updateOrderFunc({
  //     variables: {
  //       id,
  //       customCheckout: res,
  //       processed: 'TRUE',
  //     },
  //   }).then(function(data) {
  //     // console.log(data, "after update");
  //     // forceUpdate();
  //   });
  //   // console.log("first2", res);
  // } catch (e) {
  //   console.log('error', e);
  // }
}

const ORDER_QUERY = apollo_boost__WEBPACK_IMPORTED_MODULE_1__["gql"]`
  query OrdersQuery(
    $skip: Int
    $first: Int
    $orderBy: OrderOrderByInput
    $processed: Processed
  ) {
    orders(
      first: $first
      skip: $skip
      orderBy: $orderBy
      where: { processed: $processed }
    ) {
      id
      orderId
      orderName
      email
      first_name
      last_name
      streetAddress1
      streetAddress2
      city
      state
      zip
      phone
      lineItems
      currency
      totalPrice
      subTotalPrice
      totalDiscount
      totalTax
      createAt
      mpCart
      mpCheckout
      zincCart
      zincCheckout
      customCheckout
      customCart
      processed
      shopName
    }
  }
`;
const PAGINATION_QUERY = apollo_boost__WEBPACK_IMPORTED_MODULE_1__["gql"]`
  query PAGINATION_QUERY {
    ordersConnection(where: { processed: FALSE }) {
      aggregate {
        count
      }
    }
  }
`;
const UPDATE_ORDER_MUTATION = apollo_boost__WEBPACK_IMPORTED_MODULE_1__["gql"]`
  mutation updateOrder(
    $id: ID!
    $mpCart: String
    $customCart: String
    $customCheckout: Json
    $zincCart: String
    $zincCheckout: Json
    $first_name: String
    $last_name: String
    $streetAddress1: String
    $streetAddress2: String
    $city: String
    $state: String
    $zip: String
    $processed: Processed
  ) {
    updateOrder(
      id: $id
      mpCart: $mpCart
      customCart: $customCart
      customCheckout: $customCheckout
      zincCart: $zincCart
      zincCheckout: $zincCheckout
      first_name: $first_name
      last_name: $last_name
      streetAddress1: $streetAddress1
      streetAddress2: $streetAddress2
      city: $city
      state: $state
      zip: $zip
      processed: $processed
    ) {
      id
      email
    }
  }
`;
const UPSERT_MATCH_MUTATION = apollo_boost__WEBPACK_IMPORTED_MODULE_1__["gql"]`
  mutation upsertMatch($id: ID!) {
    upsertMatch(id: $id) {
      item
    }
  }
`;
const PURCHASE_ORDER_MUTATION = apollo_boost__WEBPACK_IMPORTED_MODULE_1__["gql"]`
  mutation purchaseItems($ids: Json!) {
    purchaseItems(ids: $ids) {
      checkout
      cart
    }
  }
`;
const CREATE_CHECKOUT_MUTATION = apollo_boost__WEBPACK_IMPORTED_MODULE_1__["gql"]`
  mutation createCheckout($input: Json!) {
    createCheckout(input: $input) {
      checkout
    }
  }
`;
const CHECKOUT_ADD_MUTATION = apollo_boost__WEBPACK_IMPORTED_MODULE_1__["gql"]`
  mutation checkoutLineItemsAdd($checkoutId: ID!, $lineItems: Json!) {
    checkoutLineItemsAdd(checkoutId: $checkoutId, lineItems: $lineItems) {
      checkout
    }
  }
`;
const CHECKOUT_REMOVE_MUTATION = apollo_boost__WEBPACK_IMPORTED_MODULE_1__["gql"]`
  mutation checkoutLineItemsRemove($checkoutId: ID!, $lineItemIds: Json!) {
    checkoutLineItemsRemove(
      checkoutId: $checkoutId
      lineItemIds: $lineItemIds
    ) {
      checkout
    }
  }
`;
const CHECKOUT_UPDATE_MUTATION = apollo_boost__WEBPACK_IMPORTED_MODULE_1__["gql"]`
  mutation checkoutLineItemsUpdate($checkoutId: ID!, $lineItems: Json!) {
    checkoutLineItemsUpdate(checkoutId: $checkoutId, lineItems: $lineItems) {
      checkout
    }
  }
`;
const DELETE_ORDER = apollo_boost__WEBPACK_IMPORTED_MODULE_1__["gql"]`
  mutation deleteOrder($id: ID!) {
    deleteOrder(id: $id) {
      id
    }
  }
`;
const Layout = {
  flex: '1 1 10rem',
  marginLeft: '2rem',
  marginTop: '2rem'
};

function PendingOrders() {
  const {
    0: selectedOrderIndex,
    1: setSelectedOrderIndex
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const {
    0: skip,
    1: setSkip
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: orderBy,
    1: setOrderBy
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('createdAt_ASC');
  const {
    0: firstQ,
    1: setFirstQ
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(100);
  const {
    0: open,
    1: setOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: cartLoading,
    1: setCartLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: processingOrder,
    1: setProcessingOrder
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const toast = Object(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["useToast"])();
  const {
    data: {
      me
    }
  } = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__["useQuery"])(_user_User__WEBPACK_IMPORTED_MODULE_6__["CURRENT_USER_QUERY"]);
  const allOrders = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__["useQuery"])(ORDER_QUERY, {
    variables: {
      skip,
      first: firstQ,
      orderBy,
      processed: 'FALSE'
    }
  });
  const allChannels = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__["useQuery"])(_layout_Page__WEBPACK_IMPORTED_MODULE_7__["CHANNELS_QUERY"], {
    variables: _layout_Page__WEBPACK_IMPORTED_MODULE_7__["channelsQueryVars"]
  });
  const {
    data: channelsData,
    error: channelsError,
    loading: channelsLoading
  } = allChannels;
  const pagination = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__["useQuery"])(PAGINATION_QUERY);
  const [deleteOrder] = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__["useMutation"])(DELETE_ORDER, {
    refetchQueries: [{
      query: ORDER_QUERY,
      variables: {
        skip,
        first: firstQ,
        orderBy,
        processed: 'FALSE'
      }
    }, {
      query: PAGINATION_QUERY
    }]
  });
  const [purchaseOrder, {
    loading: purchaseOrderLoading,
    error: purchaseOrderError
  }] = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__["useMutation"])(PURCHASE_ORDER_MUTATION, {
    refetchQueries: [{
      query: ORDER_QUERY,
      variables: {
        skip,
        first: firstQ,
        orderBy,
        processed: 'FALSE'
      }
    }, {
      query: PAGINATION_QUERY
    }]
  });
  const [updateOrder, {
    loading: updateOrderLoading
  }] = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__["useMutation"])(UPDATE_ORDER_MUTATION, {
    refetchQueries: [{
      query: ORDER_QUERY,
      variables: {
        skip,
        first: firstQ,
        orderBy,
        processed: 'FALSE'
      }
    }, {
      query: PAGINATION_QUERY
    }]
  });
  const [createCheckout] = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__["useMutation"])(CREATE_CHECKOUT_MUTATION, {
    refetchQueries: [{
      query: ORDER_QUERY,
      variables: {
        skip,
        first: firstQ,
        orderBy,
        processed: 'FALSE'
      }
    }, {
      query: PAGINATION_QUERY
    }]
  });
  const [checkoutLineItemsRemove] = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__["useMutation"])(CHECKOUT_REMOVE_MUTATION, {
    refetchQueries: [{
      query: ORDER_QUERY,
      variables: {
        skip,
        first: firstQ,
        orderBy,
        processed: 'FALSE'
      }
    }, {
      query: PAGINATION_QUERY
    }]
  });
  const [checkoutLineItemsUpdate] = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__["useMutation"])(CHECKOUT_UPDATE_MUTATION, {
    refetchQueries: [{
      query: ORDER_QUERY,
      variables: {
        skip,
        first: firstQ,
        orderBy,
        processed: 'FALSE'
      }
    }, {
      query: PAGINATION_QUERY
    }]
  });
  const [checkoutLineItemsAdd] = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__["useMutation"])(CHECKOUT_ADD_MUTATION, {
    refetchQueries: [{
      query: ORDER_QUERY,
      variables: {
        skip,
        first: firstQ,
        orderBy,
        processed: 'FALSE'
      }
    }, {
      query: PAGINATION_QUERY
    }]
  });
  const [upsertMatch] = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__["useMutation"])(UPSERT_MATCH_MUTATION);

  async function _currentOrder(arg) {
    setSelectedOrderIndex(arg);
  }

  async function overwrite(id) {
    setCartLoading(true);
    const upsertMatchRes = await upsertMatch({
      variables: {
        id
      }
    });
    toast({
      position: 'top-right',
      title: 'Line items have been matched to cart items',
      status: 'success',
      duration: 2000,
      isClosable: true
    }); // setSelectedOrderIndex(null);

    setCartLoading(false);
  }

  async function doPurchase(ids) {
    const res = await purchaseOrder({
      variables: {
        ids
      }
    });
  }

  async function createCheck(input, orderID) {
    const varCheck = await createCheckout({
      variables: {
        input
      }
    });
    const newCheck = varCheck.data.createCheckout.checkout;
    const res = await updateOrder({
      variables: {
        id: orderID,
        mpCart: JSON.stringify(newCheck)
      }
    });
  }

  async function createCustomCheck(input, orderID, createCheckoutFunc, updateOrderFunc, url, key) {
    const query = `
    mutation checkoutCreate($input: CheckoutCreateInput!)
    {
      checkoutCreate(input: $input) {
        userErrors {
          message
          field
        }
        checkout {
          id
          email
          webUrl
          subtotalPrice
          totalTax
          totalPrice
          shippingAddress{
            firstName
            lastName
            address1
            address2
            city
            provinceCode
            zip
            country
          }
          lineItems (first:250) {
            pageInfo {
              hasNextPage
              hasPreviousPage
            }
            edges {
              node {
                id
                title
                variant {
                  id
                  title
                  image {
                    src
                  }
                  price
                }
                quantity
              }
            }
          }
        }
      }
      }
    `;
    const variables = {
      input
    };
    const checkout = await fetch(`https://${url}.myshopify.com/api/graphql`, {
      method: 'POST',
      body: JSON.stringify({
        query,
        variables
      }),
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': key
      }
    }).then(response => response.json());
    console.log(checkout);
    const newCheck = checkout.data.checkoutCreate.checkout;
    const res = await updateOrderFunc({
      variables: {
        id: selectedOrderIndex,
        customCart: JSON.stringify(newCheck)
      }
    });
  }

  async function addCustomVariant(id, quantity, checkoutID, checkoutLineItemsAddFunc, updateOrderFunc, url, key) {
    toast({
      position: 'top-right',
      title: 'custom checkout does exist',
      status: 'success',
      duration: 2000,
      isClosable: true
    });
    const query = `
    mutation checkoutLineItemsAdd($lineItems: [CheckoutLineItemInput!]!, $checkoutId: ID!) {
      checkoutLineItemsAdd(lineItems: $lineItems, checkoutId: $checkoutId) {
        userErrors {
          message
          field
        }
        checkout {
          id
          email
          webUrl
          subtotalPrice
          totalTax
          totalPrice
          shippingAddress {
            address1
            address2
            city
            countryCodeV2
            provinceCode
            zip
            firstName
            lastName
          }
          lineItems (first:250) {
            pageInfo {
              hasNextPage
              hasPreviousPage
            }
            edges {
              node {
                id
                title
                variant {
                  id
                  title
                  image {
                    src
                  }
                  price
                }
                quantity
              }
            }
          }
        }
      }
    }
    `;
    const variables = {
      checkoutId: checkoutID,
      lineItems: [{
        variantId: id,
        quantity
      }]
    };
    const checkout = await fetch(`https://${url}.myshopify.com/api/graphql`, {
      method: 'POST',
      body: JSON.stringify({
        query,
        variables
      }),
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': key
      }
    }).then(res => res.json());
    console.log(checkout);
    const newCheck = checkout.data.checkoutLineItemsAdd.checkout;
    const res = await updateOrderFunc({
      variables: {
        id: selectedOrderIndex,
        customCart: JSON.stringify(newCheck)
      }
    });
  }

  async function addVariant(id, quantity, checkoutID) {
    toast({
      position: 'top-right',
      title: 'checkout does exist',
      status: 'success',
      duration: 2000,
      isClosable: true
    });
    const varCheck = await checkoutLineItemsAdd({
      variables: {
        checkoutId: checkoutID,
        lineItems: [{
          variantId: id,
          quantity
        }]
      }
    });
    const newCheck = varCheck.data.checkoutLineItemsAdd.checkout;
    const res = await updateOrder({
      variables: {
        id: selectedOrderIndex,
        mpCart: JSON.stringify(newCheck)
      }
    });
  }

  async function addZincItem(id, quantity, title, src, price, cart) {
    const find = cart && cart.products && cart.products.length && cart.products.find(obj => obj.product_id === id);

    if (cart && cart.products && cart.products.length && find !== undefined) {
      console.log(true);
      console.log(find);
      const newQ = find.quantity + quantity;
      find.quantity = newQ;
      console.log(find);
      const res = await updateOrder({
        variables: {
          id: selectedOrderIndex,
          zincCart: JSON.stringify({
            products: [find, ...cart.products.filter(a => a.product_id !== id)]
          })
        }
      });
    } else {
      console.log(false);
      const res = await updateOrder({
        variables: {
          id: selectedOrderIndex,
          zincCart: JSON.stringify({
            products: [{
              product_id: id,
              quantity,
              title,
              price,
              src
            }, ...(cart && cart.products && cart.products.length ? cart.products : [])]
          })
        }
      });
    }
  }

  async function removeMPItem(lineItemIds, checkoutID) {
    const varCheck = await checkoutLineItemsRemove({
      variables: {
        checkoutId: checkoutID,
        lineItemIds
      }
    });
    const res = await updateOrder({
      variables: {
        id: selectedOrderIndex,
        mpCart: JSON.stringify(varCheck.data.checkoutLineItemsRemove.checkout)
      }
    });
  }

  async function removeCustomItem(lineItemIds, checkoutID, key, url) {
    const query = `
    mutation checkoutLineItemsRemove($checkoutId: ID!, $lineItemIds: [ID!]!) {
      checkoutLineItemsRemove(checkoutId: $checkoutId, lineItemIds: $lineItemIds) {
        userErrors {
          message
          field
        }
        checkout {
          id
          email
          webUrl
          subtotalPrice
          totalTax
          totalPrice
          shippingAddress {
            address1
            address2
            city
            countryCodeV2
            provinceCode
            zip
            firstName
            lastName
          }
          lineItems (first:250) {
            pageInfo {
              hasNextPage
              hasPreviousPage
            }
            edges {
              node {
                id
                title
                variant {
                  id
                  title
                  image {
                    src
                  }
                  price
                }
                quantity
              }
            }
          }
        }
      }
    }
    `;
    const variables = {
      checkoutId: checkoutID,
      lineItemIds
    };
    const checkout = await fetch(`https://${url}.myshopify.com/api/graphql`, {
      method: 'POST',
      body: JSON.stringify({
        query,
        variables
      }),
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': key
      }
    }).then(res => res.json());
    const res = await updateOrder({
      variables: {
        id: selectedOrderIndex,
        customCart: JSON.stringify(checkout.data.checkoutLineItemsRemove.checkout)
      }
    });
  }

  async function updateMPItem(lineItems, checkoutID) {
    const varCheck = await checkoutLineItemsUpdate({
      variables: {
        checkoutId: checkoutID,
        lineItems
      }
    });
    const res = await updateOrder({
      variables: {
        id: selectedOrderIndex,
        mpCart: JSON.stringify(varCheck.data.checkoutLineItemsUpdate.checkout)
      }
    });
  }

  async function updateCustomItem(lineItems, checkoutID, key, url) {
    const query = `
    mutation checkoutLineItemsUpdate ($checkoutId: ID!, $lineItems: [CheckoutLineItemUpdateInput!]!) {
      checkoutLineItemsUpdate(checkoutId: $checkoutId, lineItems: $lineItems) {
        userErrors {
          message
          field
        }
        checkout {
          id
          email
          webUrl
          subtotalPrice
          totalTax
          totalPrice
          shippingAddress {
            address1
            address2
            city
            countryCodeV2
            provinceCode
            zip
            firstName
            lastName
          }
          lineItems (first:250) {
            pageInfo {
              hasNextPage
              hasPreviousPage
            }
            edges {
              node {
                id
                title
                variant {
                  id
                  title
                  image {
                    src
                  }
                  price
                }
                quantity
              }
            }
          }
        }
      }
    }
    `;
    const variables = {
      checkoutId: checkoutID,
      lineItems
    };
    const checkout = await fetch(`https://${url}.myshopify.com/api/graphql`, {
      method: 'POST',
      body: JSON.stringify({
        query,
        variables
      }),
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': key
      }
    }).then(res => res.json());
    const res = await updateOrder({
      variables: {
        id: selectedOrderIndex,
        customCart: JSON.stringify(checkout.data.checkoutLineItemsUpdate.checkout)
      }
    });
  }

  function play() {
    if (firstQ === 1) {
      setFirstQ(100);
      setOpen(false);
      setSkip(0);
    } else {
      setFirstQ(1);
      setOpen(true);
    } // setSkip(0);

  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    display: "flex",
    py: 4
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    flex: 1,
    alignItems: "center",
    display: "flex"
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Heading"], {
    fontSize: "2xl",
    color: "text",
    fontWeight: 500
  }, "Pending Orders"))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    display: "flex",
    flexWrap: "wrap",
    marginLeft: "-2rem",
    marginTop: "-2rem"
  }, (() => {
    if (allOrders.loading) return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], Layout, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], _common_DefaultStyles__WEBPACK_IMPORTED_MODULE_9__["CardStyle"], __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "50vh"
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Spinner"], {
      thickness: "4px",
      speed: "0.65s",
      emptyColor: "gray.200",
      color: "blue.500",
      size: "xl"
    })))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], Layout, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], _extends({}, _common_DefaultStyles__WEBPACK_IMPORTED_MODULE_9__["CardStyle"], {
      padding: 3
    }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
      p: 2,
      display: "flex",
      borderLeft: "3px solid #d9822b",
      borderRight: "1px solid #E2E8F0",
      borderTop: "1px solid #E2E8F0",
      borderBottom: "1px solid #E2E8F0"
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
      name: "warning-2",
      color: "#d9812a",
      mr: 2
    }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Heading"], {
      fontSize: "sm",
      color: "text"
    }, "Please choose an order or a line item.")))));
    if (allOrders.error) return `Error! ${allOrders.error.message}`;
    const {
      orders
    } = allOrders.data;
    const theOrder = orders.filter(order => order.id === selectedOrderIndex)[0];
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], Layout, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], _common_DefaultStyles__WEBPACK_IMPORTED_MODULE_9__["CardStyle"], __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
      display: "flex",
      paddingX: "1em",
      paddingY: ".8em",
      alignItems: "center"
    }, (() => {
      const count = pagination.data && pagination.data.ordersConnection ? pagination.data.ordersConnection.aggregate.count : 0;
      return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, firstQ === 1 ? __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Heading"], {
        fontSize: "xs",
        letterSpacing: "wider",
        textTransform: "uppercase",
        color: "gray.500",
        fontWeight: 400
      }, "Order ", skip + 1, " of ", count) : __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Heading"], {
        fontSize: "xs",
        letterSpacing: "wider",
        textTransform: "uppercase",
        color: "gray.500",
        fontWeight: 400
      }, count, " Order", count !== 1 && 's'), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
        marginLeft: "auto",
        display: "flex"
      }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        borderRadius: 3,
        marginX: 1,
        px: 2,
        height: 5,
        onClick: () => setOrderBy(orderBy === 'createdAt_DESC' ? 'createdAt_ASC' : 'createdAt_DESC')
      }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Heading"], {
        fontSize: "xs",
        fontWeight: 700,
        textTransform: "uppercase"
      }, orderBy.split('_')[1])), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        bg: "#d4eee2",
        color: "#00783e",
        _hover: {
          bg: '#bfe3d2'
        },
        borderRadius: 3,
        marginX: 1,
        px: 2,
        height: 5,
        onClick: () => play()
      }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Heading"], {
        fontSize: "xs",
        fontWeight: 700,
        textTransform: "uppercase"
      }, firstQ !== 1 ? 'Play' : 'Show All')), firstQ === 1 ? __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        background: "#fbe6a2",
        color: "#7e6514",
        _hover: {
          bg: '#f0d98d'
        },
        borderRadius: 3,
        ml: 1,
        px: 2,
        height: 5,
        onClick: () => setSkip(skip + 1) // disabled={firstQ !== 1 || skip + 1 === count}

      }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Heading"], {
        fontSize: "xs",
        fontWeight: 700,
        marginRight: 2,
        textTransform: "uppercase"
      }, "Skip"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
        size: 2,
        name: "arrow-right"
      })) : __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        borderRadius: 3,
        marginX: 1,
        px: 2,
        height: 5,
        bg: "#ddebf7",
        color: "#1070ca",
        _hover: {
          bg: '#c0d8ed'
        },
        disabled: firstQ !== 1 || skip + 1 === count,
        isLoading: purchaseOrderLoading
      }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Heading"], {
        fontSize: "xs",
        fontWeight: 700,
        textTransform: "uppercase"
      }, "Process"))));
    })()), orders.length ? orders.map(order => __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
      key: order.id
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
      opacity: processingOrder === order.id && '0.2',
      width: "100%",
      height: "100%",
      position: "relative"
    }, processingOrder === order.id && __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "absolute",
      width: "100%",
      height: "100%"
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Spinner"], {
      thickness: "4px",
      speed: "0.65s",
      emptyColor: "gray.200",
      color: "blue.500",
      size: "xl"
    })), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
      borderTop: "0.1rem solid #dfe3e8"
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
      borderLeft: `3px solid ${selectedOrderIndex === order.id ? '#007489' : 'transparent'}`
    }, __jsx(_common_orderListItem_OrderListItem__WEBPACK_IMPORTED_MODULE_4__["default"], _extends({}, order, {
      updateIndex: arg => _currentOrder(arg),
      open: open,
      createCheckout: a => createCheck(a, order.id),
      key: order.id,
      index: order.id,
      selectedOrderIndex: selectedOrderIndex,
      disabled: !(!selectedOrderIndex || selectedOrderIndex === order.id),
      buttons: __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        "aria-label": "delete order",
        height: "1.3rem",
        minWidth: "1.3rem",
        bg: "transparent",
        color: "#66788a",
        px: 0,
        mx: 1,
        onClick: async e => {
          e.stopPropagation();
          setProcessingOrder(order.id);
          const res = await deleteOrder({
            variables: {
              id: order.id
            }
          });
          setProcessingOrder(null);
        }
      }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
        name: "small-close",
        size: 4
      })), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        "aria-label": "show line-items",
        height: "1.3rem",
        minWidth: "1.3rem",
        bg: "transparent",
        color: "#66788a",
        px: 0,
        mx: 1,
        onClick: async e => {
          e.stopPropagation();
          setProcessingOrder(order.id);
          setSelectedOrderIndex(null);

          if (JSON.parse(order.customCart).lineItems.edges.length > 0) {
            toast({
              position: 'top-right',
              title: 'custom called',
              status: 'success',
              duration: 2000,
              isClosable: true
            });
            await placeCustomOrder(order.customCart, order.id, updateOrder // forceUpdate
            );
          } else if (JSON.parse(order.mpCart).lineItems.edges.length > 0) {
            await doPurchase([order.id]);
          } else if (JSON.parse(order.zincCart).products.length > 0) {
            toast({
              position: 'top-right',
              title: 'zinc called',
              status: 'success',
              duration: 2000,
              isClosable: true
            });
            await placeZincOrder({
              retailer: 'amazon',
              products: JSON.parse(order.zincCart).products,
              shipping_address: {
                first_name: order.first_name,
                last_name: order.last_name,
                address_line1: order.streetAddress1,
                address_line2: order.streetAddress2,
                zip_code: order.zip,
                city: order.city,
                state: order.state,
                country: 'US',
                phone_number: '281-337-9862'
              },
              addax: true,
              is_gift: true,
              gift_message: `Here is your package, ${order.first_name}! Enjoy!`,
              shipping: {
                order_by: 'price',
                max_days: 5,
                max_price: 1000
              },
              webhooks: {
                request_succeeded: 'https://webhook.site/3d977945-5b89-4734-8a64-146d321a100c',
                request_failed: 'https://webhook.site/3d977945-5b89-4734-8a64-146d321a100c',
                tracking_obtained: 'https://webhook.site/3d977945-5b89-4734-8a64-146d321a100c'
              },
              client_notes: {
                shopify_order_id: order.orderId,
                os_order_id: order.id
              }
            }, me.zincToken, updateOrder);
          } else {
            toast({
              position: 'top-right',
              title: 'Not called',
              status: 'success',
              duration: 2000,
              isClosable: true
            });
          }

          setProcessingOrder(null);
        }
      }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
        name: "check",
        size: 3
      })))
    }))))))) : __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
      backgroundColor: "gray.100",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column"
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Heading"], {
      margin: "1em",
      fontSize: "xl",
      fontWeight: 600,
      color: "text"
    }, "Your pending orders will appear here.")))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], Layout, selectedOrderIndex ? __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], null, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], _extends({}, _common_DefaultStyles__WEBPACK_IMPORTED_MODULE_9__["CardStyle"], {
      padding: 15,
      opacity: cartLoading && '0.2',
      width: "100%",
      height: "100%"
    }), cartLoading && __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
      display: "flex",
      justifyContent: "center",
      margin: "auto"
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
      position: "fixed"
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Spinner"], {
      thickness: "4px",
      speed: "0.65s",
      emptyColor: "gray.200",
      color: "blue.500",
      size: "xl"
    }))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
      display: "flex",
      justifyContent: "space-between",
      fontWeight: 600,
      background: "white"
    }, __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Heading"], {
      fontSize: "md",
      color: "text",
      mb: 1
    }, theOrder.orderName), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginLeft: 4
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Text"], {
      fontSize: "sm",
      fontWeight: 500,
      marginX: 2,
      color: "#7B8B9A",
      cursor: "pointer",
      onClick: () => {
        // setSelectedLineIndex([]);
        setSelectedOrderIndex(null);
      }
    }, "Empty"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
      borderRadius: 3,
      marginX: 1,
      px: 2,
      height: 5,
      bg: "#ddebf7",
      color: "#1070ca",
      _hover: {
        bg: '#c0d8ed'
      },
      onClick: () => overwrite(theOrder.id),
      disabled: theOrder.mpCart && theOrder.mpCart.lineItems && theOrder.mpCart.lineItems.edges.length === 0 || !theOrder.mpCart
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Heading"], {
      fontSize: "xs",
      fontWeight: 700,
      textTransform: "uppercase"
    }, "Match"))))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], null, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
      display: "flex"
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Text"], {
      contenteditable: "true",
      fontSize: "sm",
      marginRight: 1,
      lineHeight: "short"
    }, theOrder.first_name), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Text"], {
      contenteditable: "true",
      fontSize: "sm",
      lineHeight: "short"
    }, theOrder.last_name)), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Text"], {
      contenteditable: "true",
      fontSize: "sm",
      lineHeight: "short"
    }, theOrder.streetAddress1), theOrder.streetAddress2 && __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Text"], {
      contenteditable: "true",
      fontSize: "sm",
      lineHeight: "short"
    }, theOrder.streetAddress2), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
      display: "flex"
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Text"], {
      contenteditable: "true",
      fontSize: "sm",
      marginRight: 1,
      lineHeight: "short"
    }, theOrder.city), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Text"], {
      contenteditable: "true",
      fontSize: "sm",
      marginRight: 2,
      lineHeight: "short"
    }, theOrder.state), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Text"], {
      contenteditable: "true",
      fontSize: "sm",
      lineHeight: "short"
    }, theOrder.zip))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
      paddingTop: 2
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
      marginLeft: "-3px",
      background: "#F7F9FD",
      paddingY: ".7em",
      paddingX: "1em",
      border: "1px solid #edf0f2"
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
      marginBottom: 2
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Text"], {
      fontSize: "sm",
      fontWeight: 500,
      color: "#084B8A"
    }, "Line Items")), theOrder.lineItems.map(a => __jsx(_common_orderListItem_OrderLine__WEBPACK_IMPORTED_MODULE_8__["default"], {
      key: a.id,
      item: a.node ? a.node : a
    })))), channelsData.channels.filter(channel => channel.type === 'MARKETPLACE').length > 0 && __jsx(_Cart_MPCart__WEBPACK_IMPORTED_MODULE_10__["default"], {
      cartName: "Marketplace",
      cart: JSON.parse(theOrder.mpCart),
      removeItem: a => removeMPItem(a, JSON.parse(theOrder.mpCart).id),
      checkoutLineItemsUpdate: a => updateMPItem(a, JSON.parse(theOrder.mpCart).id),
      loading: updateOrderLoading
    }), channelsData.channels.filter(channel => channel.type === 'SHOPIFY').length > 0 && __jsx(_Cart_MPCart__WEBPACK_IMPORTED_MODULE_10__["default"], {
      cartName: "BN",
      background: "#F1FBFC",
      color: "#007489",
      cart: JSON.parse(theOrder.customCart),
      removeItem: a => removeCustomItem(a, JSON.parse(theOrder.customCart).id, channelsData.channels.filter(channel => channel.type === 'SHOPIFY')[0].settings.key, channelsData.channels.filter(channel => channel.type === 'SHOPIFY')[0].settings.shopURL),
      checkoutLineItemsUpdate: a => updateCustomItem(a, JSON.parse(theOrder.customCart).id, channelsData.channels.filter(channel => channel.type === 'SHOPIFY')[0].settings.key, channelsData.channels.filter(channel => channel.type === 'SHOPIFY')[0].settings.shopURL),
      loading: updateOrderLoading
    }), channelsData.channels.filter(channel => channel.type === 'ZINC').length > 0 && __jsx(_Cart_ZincCart__WEBPACK_IMPORTED_MODULE_11__["default"], {
      cart: JSON.parse(theOrder.zincCart),
      removeItem: async productID => {
        const res = await updateOrder({
          variables: {
            id: selectedOrderIndex,
            zincCart: JSON.stringify({
              products: JSON.parse(theOrder.zincCart).products.filter(a => a.product_id !== productID)
            })
          }
        });
      },
      checkoutLineItemsUpdate: async (productID, quantity) => {
        if (quantity === 0) {
          const res = await updateOrder({
            variables: {
              id: selectedOrderIndex,
              zincCart: JSON.stringify({
                products: JSON.parse(theOrder.zincCart).products.filter(a => a.product_id !== productID)
              })
            }
          });
        } else {
          const find = JSON.parse(theOrder.zincCart).products.find(obj => obj.product_id === productID);
          const newQ = quantity;
          find.quantity = newQ;
          const res = await updateOrder({
            variables: {
              id: selectedOrderIndex,
              zincCart: JSON.stringify({
                products: [find, ...JSON.parse(theOrder.zincCart).products.filter(a => a.product_id !== productID)]
              })
            }
          });
        }
      },
      loading: updateOrderLoading
    }))) : __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], _extends({}, _common_DefaultStyles__WEBPACK_IMPORTED_MODULE_9__["CardStyle"], {
      padding: 3
    }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
      p: 2,
      display: "flex",
      borderLeft: "3px solid #d9822b",
      borderRight: "1px solid #E2E8F0",
      borderTop: "1px solid #E2E8F0",
      borderBottom: "1px solid #E2E8F0"
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
      name: "warning-2",
      color: "#d9812a",
      mr: 2
    }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Heading"], {
      fontSize: "sm",
      color: "text"
    }, "Please choose an order or a line item."))), __jsx(_find_Find__WEBPACK_IMPORTED_MODULE_5__["default"], {
      headerSize: 600,
      atcDisabled: !theOrder,
      addMPItem: (a, b) => {
        if (theOrder.mpCart && JSON.parse(theOrder.mpCart).id) {
          addVariant(a, b, JSON.parse(theOrder.mpCart).id);
        } else {
          toast({
            position: 'top-right',
            title: 'checkout does not exist',
            status: 'success',
            duration: 2000,
            isClosable: true
          });
          createCheck({
            shippingAddress: {
              address1: theOrder.streetAddress1,
              address2: theOrder.streetAddress2 && theOrder.streetAddress2,
              city: theOrder.city,
              province: theOrder.state,
              country: 'US',
              zip: theOrder.zip,
              firstName: theOrder.first_name,
              lastName: theOrder.last_name
            },
            lineItems: [{
              variantId: a,
              quantity: b
            }]
          }, theOrder.id);
        }
      },
      addCustomItem: (a, b, url, key) => {
        if (theOrder.customCart && JSON.parse(theOrder.customCart).id) {
          addCustomVariant(a, b, JSON.parse(theOrder.customCart).id, checkoutLineItemsAdd, updateOrder, url, key);
        } else {
          toast({
            position: 'top-right',
            title: 'checkout does not exist',
            status: 'success',
            duration: 2000,
            isClosable: true
          });
          createCustomCheck({
            shippingAddress: {
              address1: theOrder.streetAddress1,
              address2: theOrder.streetAddress2 && theOrder.streetAddress2,
              city: theOrder.city,
              province: theOrder.state,
              country: 'US',
              zip: theOrder.zip,
              firstName: theOrder.first_name,
              lastName: theOrder.last_name
            },
            lineItems: [{
              variantId: a,
              quantity: b
            }],
            email: 'junaidkabani@windstream.net'
          }, theOrder.id, createCheckout, updateOrder, url, key);
        }
      },
      addZincItem: (a, b, c, d, e) => addZincItem(a, b, c, d, e, JSON.parse(theOrder.zincCart))
    })));
  })()));
}

/* harmony default export */ __webpack_exports__["default"] = (PendingOrders);

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

/***/ "./pages/order.js":
/*!************************!*\
  !*** ./pages/order.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_order_Order__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/order/Order */ "./components/order/Order.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const OrderPage = ({
  query
}) => __jsx(_components_order_Order__WEBPACK_IMPORTED_MODULE_2__["default"], query);

/* harmony default export */ __webpack_exports__["default"] = (OrderPage);
OrderPage.propTypes = {
  query: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};

/***/ }),

/***/ 5:
/*!******************************!*\
  !*** multi ./pages/order.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/junaid/openship/pages/order.js */"./pages/order.js");


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
//# sourceMappingURL=order.js.map