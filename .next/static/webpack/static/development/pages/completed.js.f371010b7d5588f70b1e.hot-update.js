webpackHotUpdate("static/development/pages/completed.js",{

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
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-boost */ "./node_modules/apollo-boost/lib/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/core */ "./node_modules/@chakra-ui/core/dist/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
/* harmony import */ var _common_ShopSelect__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/ShopSelect */ "./components/common/ShopSelect.js");
/* harmony import */ var _common_orderListItem_OrderListItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../common/orderListItem/OrderListItem */ "./components/common/orderListItem/OrderListItem.js");
/* harmony import */ var _common_Reshipment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../common/Reshipment */ "./components/common/Reshipment.js");
/* harmony import */ var _common_OrderDetails__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../common/OrderDetails */ "./components/common/OrderDetails.js");
/* harmony import */ var _common_DefaultStyles__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../common/DefaultStyles */ "./components/common/DefaultStyles.js");


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  query shopOrders(\n    $domain: String!\n    $first: Int\n    $after: String\n    $before: String\n    $last: Int\n    $query: String\n  ) {\n    shopOrders(\n      domain: $domain\n      first: $first\n      after: $after\n      before: $before\n      last: $last\n      query: $query\n    ) {\n      pageInfo\n      edges\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}












var SHOP_ORDERS_QUERY = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_3__["gql"])(_templateObject());
function CompletedOrderList(_ref) {
  var shops = _ref.shops;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(shops.length && shops[0].domain.split('.')[0]),
      client = _useState[0],
      setClient = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      afterCursor = _useState2[0],
      setAfterCursor = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      beforeCursor = _useState3[0],
      setBeforeCursor = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      query = _useState4[0],
      setQuery = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(10),
      first = _useState5[0],
      setFirst = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      last = _useState6[0],
      setLast = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      selectedOrder = _useState7[0],
      setSelectedOrder = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      selectedOrder2 = _useState8[0],
      setSelectedOrder2 = _useState8[1];

  var _useDisclosure = Object(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_5__["useDisclosure"])(),
      isOpen = _useDisclosure.isOpen,
      onOpen = _useDisclosure.onOpen,
      onClose = _useDisclosure.onClose;

  var _useDisclosure2 = Object(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_5__["useDisclosure"])(),
      drawerIsOpen = _useDisclosure2.isOpen,
      drawerOnOpen = _useDisclosure2.onOpen,
      drawerOnClose = _useDisclosure2.onClose;

  var _useQuery = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_7__["useQuery"])(SHOP_ORDERS_QUERY, {
    variables: {
      domain: "".concat(client, ".myshopify.com"),
      after: afterCursor,
      before: beforeCursor,
      first: first,
      last: last,
      query: query
    }
  }),
      data = _useQuery.data,
      error = _useQuery.error,
      loading = _useQuery.loading;

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

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_5__["Box"], {
    display: "flex",
    py: 4
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_5__["Box"], {
    flex: 1,
    alignItems: "center",
    display: "flex"
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_5__["Heading"], {
    fontSize: "2xl",
    color: "text",
    fontWeight: 500
  }, "Completed Orders"))), selectedOrder2 && __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_5__["Drawer"], {
    size: "md",
    isOpen: drawerIsOpen,
    placement: "right",
    onClose: drawerOnClose
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_5__["DrawerOverlay"], null), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_5__["DrawerContent"], null, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_5__["DrawerBody"], {
    bg: "#f9f9fb",
    p: 0
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_5__["Box"], null, __jsx(_common_OrderDetails__WEBPACK_IMPORTED_MODULE_11__["OrderDetailsComp"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, data.shopOrders.edges.filter(function (order) {
    return order.node.id.split('/').pop() === selectedOrder2;
  })[0].node, {
    store: client,
    backgroundColor: "white",
    onOpen: function onOpen() {
      return updateDialog(selectedOrder2);
    }
  })))))), client ? __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_5__["Box"], _common_DefaultStyles__WEBPACK_IMPORTED_MODULE_12__["CardStyle"], __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_5__["Box"], {
    display: "block",
    padding: "1em"
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_5__["Box"], {
    display: "flex"
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_5__["InputGroup"], {
    width: "100%",
    borderColor: "gray.300"
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_5__["InputLeftElement"], {
    children: __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_5__["Icon"], {
      name: "search",
      color: "gray.300"
    })
  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_5__["Input"], {
    value: query,
    onChange: function onChange(e) {
      return setQuery(e.target.value);
    },
    type: "phone",
    placeholder: "Search"
  }))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_5__["Box"], null, __jsx(_common_ShopSelect__WEBPACK_IMPORTED_MODULE_8__["default"], {
    client: client,
    shops: shops,
    updateClient: updateClient
  }))), function () {
    if (loading) return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_5__["Box"], {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh"
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_5__["Spinner"], {
      thickness: "4px",
      speed: "0.65s",
      emptyColor: "gray.200",
      color: "blue.500",
      size: "xl"
    }));
    if (error || !data.shopOrders) return __jsx("div", null, error);
    return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_5__["Box"], {
      width: "100%"
    }, selectedOrder && __jsx(_common_Reshipment__WEBPACK_IMPORTED_MODULE_10__["default"], {
      isOpen: isOpen,
      onClose: onClose,
      order: data.shopOrders.edges.filter(function (order) {
        return order.node.id.split('/').pop() === selectedOrder;
      }).length > 0 && data.shopOrders.edges.filter(function (order) {
        return order.node.id.split('/').pop() === selectedOrder;
      })[0].node,
      shop: client
    }), data.shopOrders.edges.map(function (order, index) {
      return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_5__["Box"], {
        borderTop: "0.1rem solid #dfe3e8"
      }, __jsx(_common_orderListItem_OrderListItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
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
        buttons: __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_5__["Button"], {
          background: "#DDEBF7",
          borderRadius: 3,
          marginRight: 1,
          px: 2,
          height: 5,
          onClick: function onClick() {
            return updateDialog(order.node.id.split('/').pop());
          }
        }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_5__["Heading"], {
          fontSize: "xs",
          fontWeight: 700,
          color: "#1070CA",
          marginRight: 2
        }, "RESHIP"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_5__["Icon"], {
          size: 3,
          color: "#1070CA",
          name: "repeat"
        })), __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
          href: {
            pathname: '/completed'
          },
          as: "/order?store=".concat(client, "&name=").concat(order.node.name)
        }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_5__["Button"], {
          onClick: function onClick() {
            return updateDrawer(order.node.id.split('/').pop());
          },
          bg: "transparent",
          color: "#66788a",
          "aria-label": "show order",
          height: "1.3rem",
          minWidth: "1.3rem",
          px: 0,
          ml: 1
        }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_5__["Icon"], {
          name: "arrow-forward",
          size: "18px"
        }))))
      }));
    })));
  }()) : __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_5__["Box"], {
    background: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    borderRadius: 3
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_5__["Heading"], {
    margin: "1em",
    size: 600
  }, "Your orders will appear here after you add a shop.")));
}
CompletedOrderList.propTypes = {
  shops: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string
};

/***/ })

})
//# sourceMappingURL=completed.js.f371010b7d5588f70b1e.hot-update.js.map