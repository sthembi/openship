webpackHotUpdate("static/development/pages/order.js",{

/***/ "./components/common/OrderDetails.js":
/*!*******************************************!*\
  !*** ./components/common/OrderDetails.js ***!
  \*******************************************/
/*! exports provided: default, OrderDetailsComp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDetailsComp", function() { return OrderDetailsComp; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/core */ "./node_modules/@chakra-ui/core/dist/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Reshipment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Reshipment */ "./components/common/Reshipment.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var secondaryLayout = {
  flex: '1 1 10rem',
  marginLeft: '1.5rem',
  marginTop: '.3rem'
};
var Layout = {
  flex: '2 2 20rem',
  marginLeft: '1.5rem',
  marginTop: '.3rem'
};

var OrderDetailsComp = function OrderDetailsComp(_ref) {
  var backgroundColor = _ref.backgroundColor,
      name = _ref.name,
      store = _ref.store,
      processedAt = _ref.processedAt,
      fulfillments = _ref.fulfillments,
      lineItems = _ref.lineItems,
      shippingAddress = _ref.shippingAddress,
      onOpen = _ref.onOpen;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    display: "flex",
    paddingY: 4,
    backgroundColor: backgroundColor,
    boxShadow: backgroundColor && '0 0 1px rgba(67, 90, 111, 0.3)',
    paddingX: backgroundColor && 4
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    flex: 1,
    alignItems: "center",
    display: "flex"
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], null, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Heading"], {
    size: "lg",
    fontWeight: 600,
    color: "text"
  }, name), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Heading"], {
    fontSize: "xs",
    fontWeight: 600,
    color: "gray.500",
    letterSpacing: "wide",
    textTransform: "uppercase",
    display: "flex",
    alignItems: "center"
  }, store, " \xB7", __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    ml: 1,
    color: "#234361",
    fontSize: "xs",
    fontWeight: 400
  }, processedAt && Intl.DateTimeFormat('en-US').format(Date.parse(processedAt)))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Badge"], {
    marginTop: 2,
    variantColor: fulfillments.length > 0 ? 'green' : 'red',
    variant: "solid"
  }, fulfillments.length > 0 ? 'Processed' : 'Not Processed'))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    background: "#DDEBF7",
    borderRadius: 3,
    marginRight: 1,
    px: 3,
    height: 8,
    onClick: onOpen
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Heading"], {
    fontSize: "sm",
    fontWeight: 700,
    color: "#1070CA",
    marginRight: 2
  }, "RESHIP"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
    size: 4,
    color: "#1070CA",
    name: "repeat"
  }))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    display: "flex",
    flexWrap: "wrap",
    marginLeft: "-1.5rem",
    marginTop: "-.3rem",
    padding: backgroundColor && 4
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], Layout, lineItems.edges.map(function (a) {
    var ID = a.node.id.toString().split('/').pop();
    return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      boxShadow: "sm",
      background: "white",
      padding: 2,
      marginBottom: 15,
      key: ID
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      display: "flex",
      alignItems: "center"
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], null, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      as: "img",
      src: a.node.image && a.node.image.originalSrc,
      borderStyle: "solid",
      borderWidth: "1px",
      borderRadius: 3,
      borderColor: "#e8e9ea",
      width: "130px"
    })), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      marginLeft: 4
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Heading"], {
      size: "sm",
      fontWeight: 600,
      color: "text"
    }, a.node.name), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      display: "flex",
      alignItems: "center"
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      color: "#66788a",
      fontSize: 14,
      mr: 1
    }, ID), "-", __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      color: "#234361",
      fontSize: "sm",
      ml: 1
    }, "QUANTITY: ", a.node.quantity)))));
  })), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], secondaryLayout, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    boxShadow: "sm",
    background: "white",
    padding: 3,
    marginBottom: 15
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Heading"], {
    fontSize: "xs",
    fontWeight: 500,
    color: "gray.500",
    letterSpacing: "wide",
    textTransform: "uppercase",
    mb: 2
  }, "Customer"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    display: "block"
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    fontSize: "sm",
    color: "#425A70",
    fontWeight: 500
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], null, shippingAddress.name.split(' ')[0], ' ', shippingAddress.name.split(' ').pop()), shippingAddress.address1, " ", shippingAddress.address2, __jsx("br", null), shippingAddress.city, ', ', shippingAddress.province, " ", shippingAddress.zip))), fulfillments.length > 0 && __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    boxShadow: "sm",
    background: "white",
    padding: 3,
    marginBottom: 15
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Heading"], {
    fontSize: "xs",
    fontWeight: 500,
    color: "gray.500",
    letterSpacing: "wide",
    textTransform: "uppercase",
    mb: 2
  }, "Shipments"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    display: "block"
  }, fulfillments.map(function (a) {
    return a.trackingInfo.map(function (b, index) {
      return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
        key: index,
        display: "flex",
        alignItems: "center"
      }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
        name: "check-circle",
        color: "#47B881",
        marginRight: 2
      }), __jsx("a", {
        href: b.url,
        target: "_blank",
        rel: "noopener noreferrer"
      }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Box"], {
        fontSize: "sm",
        color: "#425A70",
        fontWeight: 500
      }, b.number)));
    });
  }))))));
};

var OrderDetails = function OrderDetails(props) {
  var _useDisclosure = Object(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["useDisclosure"])(),
      isOpen = _useDisclosure.isOpen,
      onOpen = _useDisclosure.onOpen,
      onClose = _useDisclosure.onClose;

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_Reshipment__WEBPACK_IMPORTED_MODULE_4__["default"], {
    isOpen: isOpen,
    onClose: onClose,
    order: props,
    shop: props.store
  }), __jsx(OrderDetailsComp, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    onOpen: onOpen
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (OrderDetails);

OrderDetails.propTypes = {
  store: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  backgroundColor: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  name: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  processedAt: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  note: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  lineItems: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array,
  shippingAddress: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  fulfillments: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array
};

/***/ })

})
//# sourceMappingURL=order.js.525f4130e5352eaaee2c.hot-update.js.map