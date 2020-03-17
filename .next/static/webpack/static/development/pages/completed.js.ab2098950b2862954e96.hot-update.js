webpackHotUpdate("static/development/pages/completed.js",{

/***/ "./components/common/orderListItem/OrderListItem.js":
/*!**********************************************************!*\
  !*** ./components/common/orderListItem/OrderListItem.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OrderListItem; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/core */ "./node_modules/@chakra-ui/core/dist/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _pending_Cart_MPCart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../pending/Cart/MPCart */ "./components/pending/Cart/MPCart.js");
/* harmony import */ var _pending_Cart_ZincCart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../pending/Cart/ZincCart */ "./components/pending/Cart/ZincCart.js");
/* harmony import */ var _OrderLine__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./OrderLine */ "./components/common/orderListItem/OrderLine.js");
/* harmony import */ var _layout_Page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../layout/Page */ "./components/layout/Page.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;









var priceString = function priceString(price, quantity) {
  var total = Math.round(price * quantity * 100).toString();
  return "".concat(total.substring(0, total.length - 2), ".").concat(total.substring(total.length - 2));
};

function OrderListItem(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      open = _useState[0],
      setOpen = _useState[1];

  var _useQuery = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__["useQuery"])(_layout_Page__WEBPACK_IMPORTED_MODULE_8__["CHANNELS_QUERY"], {
    variables: _layout_Page__WEBPACK_IMPORTED_MODULE_8__["channelsQueryVars"]
  }),
      channels = _useQuery.data.channels,
      error = _useQuery.error,
      loading = _useQuery.loading;

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setOpen(props.open);
  }, [props.open]);

  function onCheckAllChange(e, updateIndexFunc) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function onCheckAllChange$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            updateIndexFunc(e ? props.index : null);

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, null, Promise);
  }

  function handleToggleClick(e) {
    e.stopPropagation();
    setOpen(function (prevOpen) {
      return !prevOpen;
    });
  }

  function parseMP(name, string, checkout) {
    var parse = JSON.parse(string);
    return parse.lineItems && __jsx(_pending_Cart_MPCart__WEBPACK_IMPORTED_MODULE_5__["default"], {
      cart: parse,
      checkout: checkout,
      cartName: name
    });
  }

  function parseZinc(string, checkout) {
    var parse = JSON.parse(string);
    return parse.products && __jsx(_pending_Cart_ZincCart__WEBPACK_IMPORTED_MODULE_6__["default"], {
      cart: parse,
      checkout: checkout
    });
  }

  var id = props.id,
      orderId = props.orderId,
      orderName = props.orderName,
      email = props.email,
      first_name = props.first_name,
      last_name = props.last_name,
      streetAddress1 = props.streetAddress1,
      streetAddress2 = props.streetAddress2,
      city = props.city,
      state = props.state,
      zip = props.zip,
      shopName = props.shopName,
      phone = props.phone,
      lineItems = props.lineItems,
      currency = props.currency,
      totalPrice = props.totalPrice,
      subTotalPrice = props.subTotalPrice,
      totalDiscount = props.totalDiscount,
      totalTax = props.totalTax,
      createAt = props.createAt,
      mpCheckout = props.mpCheckout,
      mpCart = props.mpCart,
      zincCheckout = props.zincCheckout,
      zincCart = props.zincCart,
      customCheckout = props.customCheckout,
      customCart = props.customCart,
      note = props.note,
      disabled = props.disabled,
      buttons = props.buttons,
      selectedOrderIndex = props.selectedOrderIndex,
      updateIndex = props.updateIndex,
      createCheckout = props.createCheckout;
  return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], null, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    display: "flex",
    paddingX: "1em",
    paddingY: ".7em",
    onClick: !disabled ? function () {
      return onCheckAllChange(!selectedOrderIndex, updateIndex, // createCheckout,
      mpCart);
    } : undefined,
    pointerEvents: !selectedOrderIndex || selectedOrderIndex === id ? null : 'none',
    className: !selectedOrderIndex || selectedOrderIndex === id ? 'hover' : null,
    cursor: !selectedOrderIndex || selectedOrderIndex === id ? 'pointer' : null
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], null, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    mb: 1
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Heading"], {
    fontSize: "sm",
    marginRight: 3,
    color: "text"
  }, __jsx("a", {
    href: "https://".concat(shopName.split('.')[0], ".myshopify.com/admin/orders/").concat(orderId),
    target: "_blank",
    rel: "noopener noreferrer"
  }, orderName)), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Heading"], {
    fontSize: "xs",
    fontWeight: 500,
    letterSpacing: "wide",
    textTransform: "uppercase",
    color: "gray.500",
    mr: 3
  }, shopName.split('.')[0]), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Heading"], {
    fontSize: "xs",
    color: "gray.500"
  }, Intl.DateTimeFormat('en-US').format(Date.parse(createAt)))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    as: "p",
    fontSize: "sm",
    color: "#425A70",
    lineHeight: "short"
  }, first_name, " ", last_name, __jsx("br", null), streetAddress1, " ", streetAddress2, __jsx("br", null), city, ', ', state, " ", zip)), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    display: "flex",
    marginLeft: "auto",
    justifyContent: "center" // alignItems="center"

  }, buttons, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    bg: open && '#EDF2F7',
    onClick: handleToggleClick,
    color: "#66788a",
    "aria-label": "show line-items",
    height: "1.3rem",
    minWidth: "1.3rem",
    px: 0,
    ml: 1
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
    name: "chevron-down",
    size: "22px"
  })))), open && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    marginLeft: "-3px",
    background: "#F7F9FD",
    border: "muted",
    paddingY: ".7em",
    paddingX: "1em"
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    marginBottom: 2
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    fontSize: "sm",
    fontWeight: 500,
    color: "#084B8A"
  }, "Line Items")), lineItems.map(function (a) {
    return __jsx(_OrderLine__WEBPACK_IMPORTED_MODULE_7__["default"], {
      key: a.id,
      item: a.node ? a.node : a
    });
  })), channels.filter(function (channel) {
    return channel.type === 'MARKETPLACE';
  }).length > 0 && mpCart && JSON.parse(mpCart).lineItems && JSON.parse(mpCart).lineItems.edges.length > 0 && __jsx(_pending_Cart_MPCart__WEBPACK_IMPORTED_MODULE_5__["default"], {
    cart: JSON.parse(mpCart),
    cartName: "Marketplace"
  }), channels.filter(function (channel) {
    return channel.type === 'SHOPIFY';
  }).length > 0 && customCart && JSON.parse(customCart).lineItems && JSON.parse(customCart).lineItems.edges.length > 0 && __jsx(_pending_Cart_MPCart__WEBPACK_IMPORTED_MODULE_5__["default"], {
    cart: JSON.parse(customCart),
    cartName: "BN",
    background: "#F1FBFC",
    color: "#007489"
  }), channels.filter(function (channel) {
    return channel.type === 'ZINC';
  }).length > 0 && zincCart && JSON.parse(zincCart).products && JSON.parse(zincCart).products.length > 0 && parseZinc(zincCart, zincCheckout), mpCheckout && __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    marginLeft: "-3px",
    background: "#F1FAF5",
    border: "muted",
    paddingY: ".7em",
    paddingX: "1em"
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    marginBottom: 10
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    size: 400,
    fontWeight: 500,
    color: "#00783E"
  }, "Marketplace Order")), mpCheckout[0].marketLineItems.map(function (a) {
    return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
      background: "#fff",
      border: "muted",
      marginBottom: 5
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
      display: "flex",
      alignItems: "center"
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
      height: "100%",
      background: "white",
      borderRight: "1px solid #e8e9ea"
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
      as: "img",
      src: a.variantImg,
      width: "100px"
    })), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
      padding: 5,
      paddingLeft: 10
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Heading"], {
      size: 300
    }, a.title), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
      display: "flex"
    }, a.quantity > 1 && __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], null, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Text"], {
      size: 300,
      color: "muted"
    }, "$", a.variantPrice, " x ", a.quantity)), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Heading"], {
      size: 300,
      marginRight: 10,
      color: "green"
    }, "$", a.variantPrice && priceString(a.variantPrice, a.quantity))))));
  }))));
}
OrderListItem.propTypes = {
  id: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  orderId: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  orderName: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  email: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  first_name: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  last_name: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  streetAddress1: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  streetAddress2: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  city: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  state: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  zip: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  shopName: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  phone: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  lineItems: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,
  currency: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  totalPrice: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
  subTotalPrice: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
  totalDiscount: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
  totalTax: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
  createAt: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
  mpCheckout: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,
  mpCart: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,
  note: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
  selectedOrderIndex: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
  selectedLineIndex: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.array,
  open: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
  updateIndex: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  index: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
  createCheckout: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  buttons: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.element
};

/***/ })

})
//# sourceMappingURL=completed.js.ab2098950b2862954e96.hot-update.js.map