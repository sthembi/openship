webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/pending/Pending.js":
/*!***************************************!*\
  !*** ./components/pending/Pending.js ***!
  \***************************************/
/*! exports provided: ORDER_QUERY, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ORDER_QUERY", function() { return ORDER_QUERY; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! apollo-boost */ "./node_modules/apollo-boost/lib/index.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.esm.js");
/* harmony import */ var react_adopt__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-adopt */ "./node_modules/react-adopt/dist/index.m.js");
/* harmony import */ var evergreen_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! evergreen-ui */ "./node_modules/evergreen-ui/esm/index.js");
/* harmony import */ var _common_orderListItem_OrderListItem__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../common/orderListItem/OrderListItem */ "./components/common/orderListItem/OrderListItem.js");
/* harmony import */ var _find_Find__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../find/Find */ "./components/find/Find.js");
/* harmony import */ var _user_User__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../user/User */ "./components/user/User.js");
/* harmony import */ var _common_orderListItem_OrderLine__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../common/orderListItem/OrderLine */ "./components/common/orderListItem/OrderLine.js");
/* harmony import */ var _common_Button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../common/Button */ "./components/common/Button.js");
/* harmony import */ var _common_DefaultStyles__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../common/DefaultStyles */ "./components/common/DefaultStyles.js");
/* harmony import */ var _Cart_MPCart__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Cart/MPCart */ "./components/pending/Cart/MPCart.js");
/* harmony import */ var _Cart_ZincCart__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Cart/ZincCart */ "./components/pending/Cart/ZincCart.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../config */ "./config.js");








function _templateObject10() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n  mutation deleteOrder($id: ID!) {\n    deleteOrder(id: $id) {\n      id\n    }\n  }\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n  mutation checkoutLineItemsUpdate($checkoutId: ID!, $lineItems: Json!) {\n    checkoutLineItemsUpdate(checkoutId: $checkoutId, lineItems: $lineItems) {\n      checkout\n    }\n  }\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n  mutation checkoutLineItemsRemove($checkoutId: ID!, $lineItemIds: Json!) {\n    checkoutLineItemsRemove(\n      checkoutId: $checkoutId\n      lineItemIds: $lineItemIds\n    ) {\n      checkout\n    }\n  }\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n  mutation checkoutLineItemsAdd($checkoutId: ID!, $lineItems: Json!) {\n    checkoutLineItemsAdd(checkoutId: $checkoutId, lineItems: $lineItems) {\n      checkout\n    }\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n  mutation createCheckout($input: Json!) {\n    createCheckout(input: $input) {\n      checkout\n    }\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n  mutation purchaseItems($ids: Json!) {\n    purchaseItems(ids: $ids) {\n      checkout\n      cart\n    }\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n  mutation upsertMatch($shopify: Json!, $marketplace: Json!) {\n    upsertMatch(shopify: $shopify, marketplace: $marketplace) {\n      item\n    }\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n  mutation updateOrder(\n    $id: ID!\n    $mpCart: String\n    $zincCart: String\n    $first_name: String\n    $last_name: String\n    $streetAddress1: String\n    $streetAddress2: String\n    $city: String\n    $state: String\n    $zip: String\n  ) {\n    updateOrder(\n      id: $id\n      mpCart: $mpCart\n      zincCart: $zincCart\n      first_name: $first_name\n      last_name: $last_name\n      streetAddress1: $streetAddress1\n      streetAddress2: $streetAddress2\n      city: $city\n      state: $state\n      zip: $zip\n    ) {\n      id\n      email\n    }\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n  query PAGINATION_QUERY {\n    ordersConnection(where: { processed: false }) {\n      aggregate {\n        count\n      }\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n  query OrdersQuery($skip: Int, $first: Int, $orderBy: OrderOrderByInput) {\n    orders(\n      first: $first\n      skip: $skip\n      orderBy: $orderBy\n      where: { processed: false }\n    ) {\n      id\n      orderId\n      orderName\n      email\n      first_name\n      last_name\n      streetAddress1\n      streetAddress2\n      city\n      state\n      zip\n      phone\n      lineItems\n      currency\n      totalPrice\n      subTotalPrice\n      totalDiscount\n      totalTax\n      createAt\n      mpCart\n      mpCheckout\n      zincCart\n      zincCheckout\n      processed\n      shopName\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
















function placeZincOrder(_x, _x2) {
  return _placeZincOrder.apply(this, arguments);
}

function _placeZincOrder() {
  _placeZincOrder = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee13(data, token) {
    var settings, response, res;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee13$(_context13) {
      while (1) {
        switch (_context13.prev = _context13.next) {
          case 0:
            // fetch(
            //   `${
            //     process.env.NODE_ENV === 'development' ? front : prodFront
            // }/api/purchase/purchase?token=${token}`,
            // {
            //   method: 'POST',
            //   headers: {
            //     'Content-Type': 'application/json',
            //   },
            //   body: JSON.stringify(data),
            // }
            // )
            //   .then(res => JSON.stringify(res))
            //   .then(json => console.log(json))
            //   .catch(error => console.log('Error: ', error));
            settings = {
              method: 'POST',
              body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()({
                friend: 'frank'
              }),
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
              }
            };
            _context13.prev = 1;
            _context13.next = 4;
            return fetch("http://localhost:3000/api/zinc/purchase?token=".concat(token) // {
            //   method: 'POST',
            //   headers: {
            //     'Content-Type': 'application/json',
            //   },
            //   body: JSON.stringify({}),
            // }
            );

          case 4:
            response = _context13.sent;
            _context13.next = 7;
            return response.json();

          case 7:
            res = _context13.sent;
            console.log('first2', res);
            _context13.next = 14;
            break;

          case 11:
            _context13.prev = 11;
            _context13.t0 = _context13["catch"](1);
            console.log('error', _context13.t0);

          case 14:
          case "end":
            return _context13.stop();
        }
      }
    }, _callee13, null, [[1, 11]]);
  }));
  return _placeZincOrder.apply(this, arguments);
}

var ORDER_QUERY = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_8__["gql"])(_templateObject());
var PAGINATION_QUERY = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_8__["gql"])(_templateObject2());
var UPDATE_ORDER_MUTATION = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_8__["gql"])(_templateObject3());
var UPSERT_MUTATION = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_8__["gql"])(_templateObject4());
var PURCHASE_ORDER_MUTATION = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_8__["gql"])(_templateObject5());
var CREATE_CHECKOUT_MUTATION = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_8__["gql"])(_templateObject6());
var CHECKOUT_ADD_MUTATION = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_8__["gql"])(_templateObject7());
var CHECKOUT_REMOVE_MUTATION = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_8__["gql"])(_templateObject8());
var CHECKOUT_UPDATE_MUTATION = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_8__["gql"])(_templateObject9());
var DELETE_ORDER = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_8__["gql"])(_templateObject10());
var Layout = {
  flex: '1 1 10rem',
  marginLeft: '2rem',
  marginTop: '2rem'
};
/* eslint-disable */

var mapper = {
  updateOrder: function updateOrder(_ref) {
    var render = _ref.render;
    return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_9__["Mutation"], {
      mutation: UPDATE_ORDER_MUTATION,
      refetchQueries: function refetchQueries() {
        return [{
          query: ORDER_QUERY,
          variables: {
            skip: 0
          }
        }];
      }
    }, function (mutation, result) {
      return render({
        mutation: mutation,
        result: result
      });
    });
  },
  upsertMatch: function upsertMatch(_ref2) {
    var render = _ref2.render;
    return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_9__["Mutation"], {
      mutation: UPSERT_MUTATION
    }, function (mutation, result) {
      return render({
        mutation: mutation,
        result: result
      });
    });
  },
  checkoutLineItemsRemove: function checkoutLineItemsRemove(_ref3) {
    var render = _ref3.render;
    return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_9__["Mutation"], {
      mutation: CHECKOUT_REMOVE_MUTATION,
      refetchQueries: function refetchQueries() {
        return [{
          query: ORDER_QUERY,
          variables: {
            skip: 0
          }
        }];
      }
    }, function (mutation, result) {
      return render({
        mutation: mutation,
        result: result
      });
    });
  },
  checkoutLineItemsUpdate: function checkoutLineItemsUpdate(_ref4) {
    var render = _ref4.render;
    return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_9__["Mutation"], {
      mutation: CHECKOUT_UPDATE_MUTATION,
      refetchQueries: function refetchQueries() {
        return [{
          query: ORDER_QUERY,
          variables: {
            skip: 0
          }
        }];
      }
    }, function (mutation, result) {
      return render({
        mutation: mutation,
        result: result
      });
    });
  }
};
/* eslint-disable */

function PendingOrders() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(null),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_useState, 2),
      selectedOrderIndex = _useState2[0],
      setSelectedOrderIndex = _useState2[1]; // const [selectedLineIndex, setSelectedLineIndex] = useState([]);


  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(0),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_useState3, 2),
      skip = _useState4[0],
      setSkip = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])("createdAt_ASC"),
      _useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_useState5, 2),
      orderBy = _useState6[0],
      setOrderBy = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(100),
      _useState8 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_useState7, 2),
      firstQ = _useState8[0],
      setFirstQ = _useState8[1]; // const [check, setCheck] = useState(true);


  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(false),
      _useState10 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_useState9, 2),
      open = _useState10[0],
      setOpen = _useState10[1]; // const [checkout, setCheckout] = useState({});


  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(false),
      _useState12 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_useState11, 2),
      cartLoading = _useState12[0],
      setCartLoading = _useState12[1];

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(null),
      _useState14 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_useState13, 2),
      processingOrder = _useState14[0],
      setProcessingOrder = _useState14[1];

  function _currentOrder(_x3) {
    return _currentOrder2.apply(this, arguments);
  }

  function _currentOrder2() {
    _currentOrder2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee5(arg) {
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              setSelectedOrderIndex(arg);

            case 1:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));
    return _currentOrder2.apply(this, arguments);
  }

  function overwrite(_x4, _x5, _x6) {
    return _overwrite.apply(this, arguments);
  }

  function _overwrite() {
    _overwrite = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee6(errorText, lineItems, upsertMatchMutation) {
      var upsertMatchRes;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              setCartLoading(true);
              _context6.next = 3;
              return upsertMatchMutation({
                variables: {
                  shopify: lineItems.map(function (a) {
                    return {
                      product_id: a.product_id,
                      variant_id: a.variant_id,
                      quantity: a.quantity
                    };
                  }),
                  marketplace: mpCart.lineItems.edges.map(function (a) {
                    return {
                      product_id: a.node.id,
                      variant_id: a.node.variant.id,
                      quantity: a.node.quantity
                    };
                  })
                }
              });

            case 3:
              upsertMatchRes = _context6.sent;
              evergreen_ui__WEBPACK_IMPORTED_MODULE_11__["toaster"].notify("Line items have been matched to cart items"); // setSelectedOrderIndex(null);

              setCartLoading(false);

            case 6:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    }));
    return _overwrite.apply(this, arguments);
  }

  function doPurchase(_x7, _x8) {
    return _doPurchase.apply(this, arguments);
  }

  function _doPurchase() {
    _doPurchase = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee7(ids, purchaseOrderMutation) {
      var res;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _context7.next = 2;
              return purchaseOrderMutation({
                variables: {
                  ids: ids
                }
              });

            case 2:
              res = _context7.sent;

            case 3:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7);
    }));
    return _doPurchase.apply(this, arguments);
  }

  function createCheck(_x9, _x10, _x11, _x12) {
    return _createCheck.apply(this, arguments);
  }

  function _createCheck() {
    _createCheck = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee8(input, orderID, createCheckoutFunc, updateOrderFunc) {
      var varCheck, newCheck, res;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              _context8.next = 2;
              return createCheckoutFunc({
                variables: {
                  input: input
                }
              });

            case 2:
              varCheck = _context8.sent;
              newCheck = varCheck.data.createCheckout.checkout;
              _context8.next = 6;
              return updateOrderFunc({
                variables: {
                  id: orderID,
                  mpCart: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(newCheck)
                }
              });

            case 6:
              res = _context8.sent;

            case 7:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8);
    }));
    return _createCheck.apply(this, arguments);
  }

  function addVariant(_x13, _x14, _x15, _x16, _x17) {
    return _addVariant.apply(this, arguments);
  }

  function _addVariant() {
    _addVariant = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee9(id, quantity, checkoutID, checkoutLineItemsAddFunc, updateOrderFunc) {
      var varCheck, newCheck, res;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              evergreen_ui__WEBPACK_IMPORTED_MODULE_11__["toaster"].success("checkout does exist");
              _context9.next = 3;
              return checkoutLineItemsAddFunc({
                variables: {
                  checkoutId: checkoutID,
                  lineItems: [{
                    variantId: id,
                    quantity: quantity
                  }]
                }
              });

            case 3:
              varCheck = _context9.sent;
              newCheck = varCheck.data.checkoutLineItemsAdd.checkout;
              _context9.next = 7;
              return updateOrderFunc({
                variables: {
                  id: selectedOrderIndex,
                  mpCart: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(newCheck)
                }
              });

            case 7:
              res = _context9.sent;

            case 8:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9);
    }));
    return _addVariant.apply(this, arguments);
  }

  function _addZincItem2(_x18, _x19, _x20, _x21, _x22, _x23, _x24) {
    return _addZincItem.apply(this, arguments);
  }

  function _addZincItem() {
    _addZincItem = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee10(id, quantity, title, src, price, cart, updateOrderFunc) {
      var find, newQ, res, _res2;

      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee10$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              // if (cart && cart.products && cart.products.length) {
              // const find = cart.products.find(obj => {
              //   return obj.product_id === id;
              // });
              // }
              find = cart && cart.products && cart.products.length && cart.products.find(function (obj) {
                return obj.product_id === id;
              });

              if (!(cart && cart.products && cart.products.length && find !== undefined)) {
                _context10.next = 12;
                break;
              }

              console.log(true);
              console.log(find);
              newQ = find.quantity + quantity;
              find.quantity = newQ;
              console.log(find);
              _context10.next = 9;
              return updateOrderFunc({
                variables: {
                  id: selectedOrderIndex,
                  zincCart: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()({
                    products: [find].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(cart.products.filter(function (a) {
                      return a.product_id !== id;
                    })))
                  })
                }
              });

            case 9:
              res = _context10.sent;
              _context10.next = 16;
              break;

            case 12:
              console.log(false);
              _context10.next = 15;
              return updateOrderFunc({
                variables: {
                  id: selectedOrderIndex,
                  zincCart: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()({
                    products: [{
                      product_id: id,
                      quantity: quantity,
                      title: title,
                      price: price,
                      src: src
                    }].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(cart && cart.products && cart.products.length ? cart.products : []))
                  })
                }
              });

            case 15:
              _res2 = _context10.sent;

            case 16:
            case "end":
              return _context10.stop();
          }
        }
      }, _callee10);
    }));
    return _addZincItem.apply(this, arguments);
  }

  function removeMPItem(_x25, _x26, _x27, _x28) {
    return _removeMPItem.apply(this, arguments);
  }

  function _removeMPItem() {
    _removeMPItem = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee11(lineItemIds, checkoutID, checkoutLineItemsRemoveFunc, updateOrderFunc) {
      var varCheck, res;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee11$(_context11) {
        while (1) {
          switch (_context11.prev = _context11.next) {
            case 0:
              _context11.next = 2;
              return checkoutLineItemsRemoveFunc.mutation({
                variables: {
                  checkoutId: checkoutID,
                  lineItemIds: lineItemIds
                }
              });

            case 2:
              varCheck = _context11.sent;
              _context11.next = 5;
              return updateOrderFunc({
                variables: {
                  id: selectedOrderIndex,
                  mpCart: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(varCheck.data.checkoutLineItemsRemove.checkout)
                }
              });

            case 5:
              res = _context11.sent;

            case 6:
            case "end":
              return _context11.stop();
          }
        }
      }, _callee11);
    }));
    return _removeMPItem.apply(this, arguments);
  }

  function updateMPItem(_x29, _x30, _x31, _x32) {
    return _updateMPItem.apply(this, arguments);
  }

  function _updateMPItem() {
    _updateMPItem = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee12(lineItems, checkoutID, checkoutLineItemsUpdateFunc, updateOrderFunc) {
      var varCheck, res;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee12$(_context12) {
        while (1) {
          switch (_context12.prev = _context12.next) {
            case 0:
              _context12.next = 2;
              return checkoutLineItemsUpdateFunc.mutation({
                variables: {
                  checkoutId: checkoutID,
                  lineItems: lineItems
                }
              });

            case 2:
              varCheck = _context12.sent;
              _context12.next = 5;
              return updateOrderFunc({
                variables: {
                  id: selectedOrderIndex,
                  mpCart: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(varCheck.data.checkoutLineItemsUpdate.checkout)
                }
              });

            case 5:
              res = _context12.sent;

            case 6:
            case "end":
              return _context12.stop();
          }
        }
      }, _callee12);
    }));
    return _updateMPItem.apply(this, arguments);
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
  /* eslint-disable */


  var orderListMutations = {
    purchaseOrder: function purchaseOrder(_ref5) {
      var render = _ref5.render;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_9__["Mutation"], {
        mutation: PURCHASE_ORDER_MUTATION,
        refetchQueries: function refetchQueries() {
          return [{
            query: ORDER_QUERY,
            variables: {
              skip: skip,
              first: firstQ,
              orderBy: orderBy
            }
          }, {
            query: PAGINATION_QUERY
          }];
        }
      }, function (mutation, result) {
        return render({
          mutation: mutation,
          result: result
        });
      });
    },
    deleteOrder: function deleteOrder(_ref6) {
      var render = _ref6.render;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_9__["Mutation"], {
        mutation: DELETE_ORDER,
        refetchQueries: function refetchQueries() {
          return [{
            query: ORDER_QUERY,
            variables: {
              skip: skip,
              first: firstQ,
              orderBy: orderBy
            }
          }, {
            query: PAGINATION_QUERY
          }];
        }
      }, function (mutation, result) {
        return render({
          mutation: mutation,
          result: result
        });
      });
    },
    updateOrder: function updateOrder(_ref7) {
      var render = _ref7.render;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_9__["Mutation"], {
        mutation: UPDATE_ORDER_MUTATION,
        refetchQueries: function refetchQueries() {
          return [{
            query: ORDER_QUERY,
            variables: {
              skip: 0
            }
          }];
        }
      }, function (mutation, result) {
        return render({
          mutation: mutation,
          result: result
        });
      });
    },
    upsertMatch: function upsertMatch(_ref8) {
      var render = _ref8.render;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_9__["Mutation"], {
        mutation: UPSERT_MUTATION
      }, function (mutation, result) {
        return render({
          mutation: mutation,
          result: result
        });
      });
    },
    createCheckout: function createCheckout(_ref9) {
      var render = _ref9.render;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_9__["Mutation"], {
        mutation: CREATE_CHECKOUT_MUTATION,
        refetchQueries: function refetchQueries() {
          return [{
            query: ORDER_QUERY,
            variables: {
              skip: 0
            }
          }];
        }
      }, function (mutation, result) {
        return render({
          mutation: mutation,
          result: result
        });
      });
    },
    checkoutLineItemsRemove: function checkoutLineItemsRemove(_ref10) {
      var render = _ref10.render;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_9__["Mutation"], {
        mutation: CHECKOUT_REMOVE_MUTATION,
        refetchQueries: function refetchQueries() {
          return [{
            query: ORDER_QUERY,
            variables: {
              skip: 0
            }
          }];
        }
      }, function (mutation, result) {
        return render({
          mutation: mutation,
          result: result
        });
      });
    },
    checkoutLineItemsUpdate: function checkoutLineItemsUpdate(_ref11) {
      var render = _ref11.render;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_9__["Mutation"], {
        mutation: CHECKOUT_UPDATE_MUTATION,
        refetchQueries: function refetchQueries() {
          return [{
            query: ORDER_QUERY,
            variables: {
              skip: 0
            }
          }];
        }
      }, function (mutation, result) {
        return render({
          mutation: mutation,
          result: result
        });
      });
    }
  };
  /* eslint-disable */

  return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_11__["Pane"], {
    display: "flex",
    paddingTop: 16,
    paddingBottom: 16
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_11__["Pane"], {
    flex: 1,
    alignItems: "center",
    display: "flex"
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_11__["Heading"], {
    size: 700
  }, "Pending Orders"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_11__["Pane"], {
    display: "flex",
    flexWrap: "wrap",
    marginLeft: "-2rem",
    marginTop: "-2rem"
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_adopt__WEBPACK_IMPORTED_MODULE_10__["Adopt"], {
    mapper: orderListMutations
  }, function (_ref12) {
    var purchaseOrder = _ref12.purchaseOrder,
        deleteOrder = _ref12.deleteOrder,
        updateOrder = _ref12.updateOrder,
        upsertMatch = _ref12.upsertMatch,
        _createCheckout = _ref12.createCheckout,
        checkoutLineItemsRemove = _ref12.checkoutLineItemsRemove,
        _checkoutLineItemsUpdate = _ref12.checkoutLineItemsUpdate;
    return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_9__["Query"], {
      query: ORDER_QUERY,
      variables: {
        skip: skip,
        first: firstQ,
        orderBy: orderBy
      }
    }, function (_ref13) {
      var loading = _ref13.loading,
          error = _ref13.error,
          data = _ref13.data;
      if (loading) return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_11__["Pane"], Layout, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_11__["Pane"], _common_DefaultStyles__WEBPACK_IMPORTED_MODULE_17__["CardStyle"], react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_11__["Pane"], {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "50vh"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_11__["Spinner"], {
        size: 80
      })))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_11__["Pane"], Layout, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_11__["Pane"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({}, _common_DefaultStyles__WEBPACK_IMPORTED_MODULE_17__["CardStyle"], {
        padding: 10
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_11__["Alert"], {
        intent: "warning",
        title: "Please choose an order or a line item."
      }))));
      if (error) return "Error! ".concat(error.message);
      var orders = data.orders;
      var theOrder = orders.filter(function (order) {
        return order.id === selectedOrderIndex;
      })[0];
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_11__["Pane"], Layout, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_11__["Pane"], _common_DefaultStyles__WEBPACK_IMPORTED_MODULE_17__["CardStyle"], react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_11__["Pane"], {
        display: "flex",
        paddingX: "1em",
        paddingY: ".8em",
        alignItems: "center"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_9__["Query"], {
        query: PAGINATION_QUERY
      }, function (_ref14) {
        var data = _ref14.data,
            loading = _ref14.loading,
            error = _ref14.error;
        var count = data.ordersConnection ? data.ordersConnection.aggregate.count : 0;
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, firstQ === 1 ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_11__["Heading"], {
          size: 100
        }, "Order ", skip + 1, " of ", count) : react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_11__["Heading"], {
          size: 100
        }, count, " Orders"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_11__["Pane"], {
          marginLeft: "auto",
          display: "flex"
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_common_Button__WEBPACK_IMPORTED_MODULE_16__["default"], {
          intent: "none",
          height: 20,
          marginRight: 5,
          onClick: function onClick() {
            return setOrderBy(orderBy === "createdAt_DESC" ? "createdAt_ASC" : "createdAt_DESC");
          }
        }, orderBy.split("_")[1]), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_common_Button__WEBPACK_IMPORTED_MODULE_16__["default"], {
          intent: "success",
          height: 20,
          marginRight: 5,
          onClick: function onClick() {
            return play();
          }
        }, firstQ !== 1 ? "Play" : "Show All", firstQ !== 1 && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_11__["Icon"], {
          size: 13,
          icon: "play",
          marginRight: -4,
          marginLeft: 3
        })), firstQ === 1 ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_common_Button__WEBPACK_IMPORTED_MODULE_16__["default"], {
          intent: "warning",
          height: 20,
          onClick: function onClick() {
            return setSkip(skip + 1);
          },
          disabled: firstQ !== 1 || skip + 1 === count
        }, "Skip", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_11__["Icon"], {
          size: 13,
          icon: "double-chevron-right",
          marginRight: -4,
          marginLeft: 3
        })) : react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_9__["Mutation"], {
          mutation: PURCHASE_ORDER_MUTATION,
          refetchQueries: function refetchQueries() {
            return [{
              query: ORDER_QUERY,
              variables: {
                skip: skip,
                first: firstQ,
                orderBy: orderBy
              }
            }, {
              query: PAGINATION_QUERY
            }];
          }
        }, function (purchaseOrder, _ref15) {
          var error = _ref15.error,
              loading = _ref15.loading;
          return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_common_Button__WEBPACK_IMPORTED_MODULE_16__["default"], {
            intent: "warning",
            height: 20,
            disabled: firstQ !== 1 || skip + 1 === count,
            isLoading: loading // onClick={() => {
            //   doPurchase(
            //     orders
            //       .filter(
            //         order =>
            //           order.mpCart &&
            //           JSON.parse(order.mpCart)
            //             .length > 0 &&
            //           JSON.parse(
            //             order.mpCart
            //           )[0].status === "matched"
            //       )
            //       .map(a => a.id),
            //     purchaseOrder
            //   );
            //   setSkip(skip + 1);
            // }}

          }, "Multi |", " ");
        })));
      })), orders.length ? orders.map(function (order) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_11__["Pane"], {
          key: order.id
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_11__["Pane"], {
          opacity: processingOrder === order.id && "0.2",
          width: "100%",
          height: "100%",
          position: "relative"
        }, processingOrder === order.id && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_11__["Pane"], {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          width: "100%",
          height: "100%"
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_11__["Spinner"], {
          size: 80
        })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_11__["Pane"], {
          borderTop: "0.1rem solid #dfe3e8"
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_11__["Pane"], {
          borderLeft: "3px solid ".concat(selectedOrderIndex === order.id ? "#007489" : "transparent")
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_common_orderListItem_OrderListItem__WEBPACK_IMPORTED_MODULE_12__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({}, order, {
          updateIndex: function updateIndex(arg) {
            return _currentOrder(arg);
          },
          open: open // updateLine={arg => _currentLineItem(arg)}
          // createCheckout={createCheckout.mutation}
          ,
          createCheckout: function createCheckout(a) {
            return createCheck(a, order.id, _createCheckout.mutation, updateOrder.mutation);
          },
          key: order.id,
          index: order.id // selectedLineIndex={selectedLineIndex}
          ,
          selectedOrderIndex: selectedOrderIndex // disabled={selectedOrderIndex || loading}
          ,
          disabled: !(!selectedOrderIndex || selectedOrderIndex === order.id),
          buttons: react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_11__["IconButton"], {
            height: 20,
            appearance: "minimal",
            inent: "danger",
            icon: "cross",
            iconSize: 15,
            marginLeft: 6,
            pointerEvents: "visible",
            onClick:
            /*#__PURE__*/
            function () {
              var _ref16 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__["default"])(
              /*#__PURE__*/
              _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee(e) {
                var res;
                return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        e.stopPropagation();
                        setProcessingOrder(order.id);
                        _context.next = 4;
                        return deleteOrder.mutation({
                          variables: {
                            id: order.id
                          }
                        });

                      case 4:
                        res = _context.sent;
                        setProcessingOrder(null);

                      case 6:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              }));

              return function (_x33) {
                return _ref16.apply(this, arguments);
              };
            }()
          }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_user_User__WEBPACK_IMPORTED_MODULE_14__["default"], null, function (_ref17) {
            var me = _ref17.data.me;
            return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_11__["IconButton"], {
              height: 20,
              appearance: "minimal",
              icon: "tick",
              iconSize: 15,
              marginLeft: 6,
              pointerEvents: loading ? "none" : "visible",
              onClick:
              /*#__PURE__*/
              function () {
                var _ref18 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__["default"])(
                /*#__PURE__*/
                _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee2(e) {
                  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee2$(_context2) {
                    while (1) {
                      switch (_context2.prev = _context2.next) {
                        case 0:
                          e.stopPropagation();
                          setProcessingOrder(order.id);
                          setSelectedOrderIndex(null);

                          if (!(JSON.parse(order.mpCart).lineItems.edges.length > 0)) {
                            _context2.next = 8;
                            break;
                          }

                          _context2.next = 6;
                          return doPurchase([order.id], purchaseOrder.mutation);

                        case 6:
                          _context2.next = 9;
                          break;

                        case 8:
                          if (JSON.parse(order.zincCart).products.length > 0) {
                            evergreen_ui__WEBPACK_IMPORTED_MODULE_11__["toaster"].success("zinc called");
                            placeZincOrder({
                              retailer: "amazon",
                              products: JSON.parse(order.zincCart).products,
                              shipping_address: {
                                first_name: order.first_name,
                                last_name: order.last_name,
                                address_line1: order.streetAddress1,
                                address_line2: order.streetAddress2,
                                zip_code: order.zip,
                                city: order.city,
                                state: order.state,
                                country: "US",
                                phone_number: order.state
                              },
                              is_gift: true,
                              gift_message: "Here is your package, Tim! Enjoy!",
                              shipping: {
                                order_by: "price",
                                max_days: 5,
                                max_price: 1000
                              },
                              webhooks: {
                                request_succeeded: "https://hooks.zapier.com/hooks/catch/1902946/o2z8bdq/",
                                request_failed: "https://hooks.zapier.com/hooks/catch/1902946/o2z8bdq/",
                                tracking_obtained: "https://hooks.zapier.com/hooks/catch/1902946/o2z8bdq/"
                              },
                              client_notes: {
                                our_internal_order_id: "abc123"
                              }
                            }, me.zincToken);
                          } else {
                            evergreen_ui__WEBPACK_IMPORTED_MODULE_11__["toaster"].success("not called");
                          }

                        case 9:
                          setProcessingOrder(null);

                        case 10:
                        case "end":
                          return _context2.stop();
                      }
                    }
                  }, _callee2);
                }));

                return function (_x34) {
                  return _ref18.apply(this, arguments);
                };
              }()
            });
          }))
        }))))));
      }) : react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_11__["Pane"], {
        background: "tint2",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        borderRadius: 3
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_11__["Heading"], {
        margin: "1em",
        size: 600
      }, "Your pending orders will appear here.")))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_11__["Pane"], Layout, selectedOrderIndex ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_11__["Pane"], null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_11__["Pane"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({}, _common_DefaultStyles__WEBPACK_IMPORTED_MODULE_17__["CardStyle"], {
        padding: 15,
        opacity: cartLoading && "0.2",
        width: "100%",
        height: "100%"
      }), cartLoading && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_11__["Pane"], {
        display: "flex",
        justifyContent: "center",
        margin: "auto"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_11__["Pane"], {
        position: "fixed"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_11__["Spinner"], {
        size: 80
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_11__["Pane"], {
        display: "flex",
        justifyContent: "space-between",
        fontWeight: 600,
        background: "white"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_11__["Heading"], {
        size: 400
      }, theOrder.orderName), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_11__["Pane"], {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 4
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_11__["Text"], {
        size: 300,
        fontWeight: 500,
        marginX: 10,
        color: "#7B8B9A",
        className: "hover",
        cursor: "pointer",
        onClick: function onClick() {
          // setSelectedLineIndex([]);
          setSelectedOrderIndex(null);
        }
      }, "Empty"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_common_Button__WEBPACK_IMPORTED_MODULE_16__["default"], {
        intent: "primary",
        height: 20,
        onClick: function onClick() {
          return overwrite(JSON.parse(theOrder.mpCart), theOrder.lineItems, upsertMatch.mutation);
        },
        disabled: theOrder.mpCart && theOrder.mpCart.lineItems && theOrder.mpCart.lineItems.edges.length === 0 || !theOrder.mpCart
      }, "Match")))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_11__["Pane"], null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_11__["Pane"], {
        display: "flex"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_11__["Text"], {
        contenteditable: "true",
        size: 300,
        marginRight: 4
      }, theOrder.first_name), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_11__["Text"], {
        contenteditable: "true",
        size: 300
      }, theOrder.last_name)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_11__["Text"], {
        contenteditable: "true",
        size: 300
      }, theOrder.streetAddress1), theOrder.streetAddress2 && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_11__["Text"], {
        contenteditable: "true",
        size: 300
      }, theOrder.streetAddress2), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_11__["Pane"], {
        display: "flex"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_11__["Text"], {
        contenteditable: "true",
        size: 300,
        marginRight: 4
      }, theOrder.city), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_11__["Text"], {
        contenteditable: "true",
        size: 300,
        marginRight: 4
      }, theOrder.state), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_11__["Text"], {
        contenteditable: "true",
        size: 300
      }, theOrder.zip))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_11__["Pane"], {
        paddingTop: 10
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_11__["Pane"], {
        marginLeft: "-3px",
        background: "#F7F9FD",
        border: "muted",
        paddingY: ".7em",
        paddingX: "1em"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_11__["Pane"], {
        marginBottom: 10
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_11__["Text"], {
        size: 400,
        fontWeight: 500,
        color: "#084B8A"
      }, "Line Items")), theOrder.lineItems.map(function (a) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_common_orderListItem_OrderLine__WEBPACK_IMPORTED_MODULE_15__["default"], {
          key: a.id,
          item: a.node ? a.node : a
        });
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Cart_MPCart__WEBPACK_IMPORTED_MODULE_18__["default"], {
        checkout: JSON.parse(theOrder.mpCart),
        removeItem: function removeItem(a) {
          return removeMPItem(a, JSON.parse(theOrder.mpCart).id, checkoutLineItemsRemove, updateOrder.mutation);
        },
        checkoutLineItemsUpdate: function checkoutLineItemsUpdate(a) {
          return updateMPItem(a, JSON.parse(theOrder.mpCart).id, _checkoutLineItemsUpdate, updateOrder.mutation);
        },
        loading: updateOrder.result.loading
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Cart_ZincCart__WEBPACK_IMPORTED_MODULE_19__["default"], {
        cart: JSON.parse(theOrder.zincCart),
        removeItem:
        /*#__PURE__*/
        function () {
          var _ref19 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__["default"])(
          /*#__PURE__*/
          _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee3(productID) {
            var res;
            return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return updateOrder.mutation({
                      variables: {
                        id: selectedOrderIndex,
                        zincCart: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()({
                          products: JSON.parse(theOrder.zincCart).products.filter(function (a) {
                            return a.product_id !== productID;
                          })
                        })
                      }
                    });

                  case 2:
                    res = _context3.sent;

                  case 3:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3);
          }));

          return function (_x35) {
            return _ref19.apply(this, arguments);
          };
        }(),
        checkoutLineItemsUpdate:
        /*#__PURE__*/
        function () {
          var _ref20 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__["default"])(
          /*#__PURE__*/
          _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee4(productID, quantity) {
            var res, find, newQ, _res;

            return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    if (!(quantity === 0)) {
                      _context4.next = 6;
                      break;
                    }

                    _context4.next = 3;
                    return updateOrder.mutation({
                      variables: {
                        id: selectedOrderIndex,
                        zincCart: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()({
                          products: JSON.parse(theOrder.zincCart).products.filter(function (a) {
                            return a.product_id !== productID;
                          })
                        })
                      }
                    });

                  case 3:
                    res = _context4.sent;
                    _context4.next = 12;
                    break;

                  case 6:
                    find = JSON.parse(theOrder.zincCart).products.find(function (obj) {
                      return obj.product_id === productID;
                    });
                    newQ = quantity;
                    find.quantity = newQ;
                    _context4.next = 11;
                    return updateOrder.mutation({
                      variables: {
                        id: selectedOrderIndex,
                        zincCart: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()({
                          products: [find].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(JSON.parse(theOrder.zincCart).products.filter(function (a) {
                            return a.product_id !== productID;
                          })))
                        })
                      }
                    });

                  case 11:
                    _res = _context4.sent;

                  case 12:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4);
          }));

          return function (_x36, _x37) {
            return _ref20.apply(this, arguments);
          };
        }(),
        loading: updateOrder.result.loading
      }))) : react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_11__["Pane"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({}, _common_DefaultStyles__WEBPACK_IMPORTED_MODULE_17__["CardStyle"], {
        padding: 10
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_11__["Alert"], {
        intent: "warning",
        title: "Please choose an order or a line item."
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_9__["Mutation"], {
        mutation: CHECKOUT_ADD_MUTATION
      }, function (checkoutLineItemsAdd, _ref21) {
        var error = _ref21.error,
            loading = _ref21.loading;
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_find_Find__WEBPACK_IMPORTED_MODULE_13__["default"], {
          headerSize: 600,
          atcDisabled: !theOrder,
          addMPItem: function addMPItem(a, b) {
            if (theOrder.mpCart && JSON.parse(theOrder.mpCart).id) {
              addVariant(a, b, JSON.parse(theOrder.mpCart).id, checkoutLineItemsAdd, updateOrder.mutation);
            } else {
              evergreen_ui__WEBPACK_IMPORTED_MODULE_11__["toaster"].success("checkout does not exist");
              createCheck({
                shippingAddress: {
                  address1: theOrder.streetAddress1,
                  address2: theOrder.streetAddress2 && theOrder.streetAddress2,
                  city: theOrder.city,
                  province: theOrder.state,
                  country: "US",
                  zip: theOrder.zip,
                  firstName: theOrder.first_name,
                  lastName: theOrder.last_name
                },
                lineItems: [{
                  variantId: a,
                  quantity: b
                }]
              }, theOrder.id, _createCheckout.mutation, updateOrder.mutation);
            }
          },
          addZincItem: function addZincItem(a, b, c, d, e) {
            return _addZincItem2(a, b, c, d, e, JSON.parse(theOrder.zincCart), updateOrder.mutation);
          }
        });
      })));
    });
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (PendingOrders);

/***/ })

})
//# sourceMappingURL=index.js.8a76b97f760158535d2c.hot-update.js.map