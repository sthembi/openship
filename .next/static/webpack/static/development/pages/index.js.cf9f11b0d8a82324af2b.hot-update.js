webpackHotUpdate("static/development/pages/index.js",{

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
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! apollo-boost */ "./node_modules/apollo-boost/lib/index.js");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @chakra-ui/core */ "./node_modules/@chakra-ui/core/dist/es/index.js");
/* harmony import */ var _common_orderListItem_OrderListItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common/orderListItem/OrderListItem */ "./components/common/orderListItem/OrderListItem.js");
/* harmony import */ var _find_Find__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../find/Find */ "./components/find/Find.js");
/* harmony import */ var _user_User__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../user/User */ "./components/user/User.js");
/* harmony import */ var _layout_Page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../layout/Page */ "./components/layout/Page.js");
/* harmony import */ var _common_orderListItem_OrderLine__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../common/orderListItem/OrderLine */ "./components/common/orderListItem/OrderLine.js");
/* harmony import */ var _common_DefaultStyles__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../common/DefaultStyles */ "./components/common/DefaultStyles.js");
/* harmony import */ var _Cart_MPCart__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Cart/MPCart */ "./components/pending/Cart/MPCart.js");
/* harmony import */ var _Cart_ZincCart__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Cart/ZincCart */ "./components/pending/Cart/ZincCart.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../config */ "./config.js");





var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function _templateObject10() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__["default"])(["\n  mutation deleteOrder($id: ID!) {\n    deleteOrder(id: $id) {\n      id\n    }\n  }\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__["default"])(["\n  mutation checkoutLineItemsUpdate($checkoutId: ID!, $lineItems: Json!) {\n    checkoutLineItemsUpdate(checkoutId: $checkoutId, lineItems: $lineItems) {\n      checkout\n    }\n  }\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__["default"])(["\n  mutation checkoutLineItemsRemove($checkoutId: ID!, $lineItemIds: Json!) {\n    checkoutLineItemsRemove(\n      checkoutId: $checkoutId\n      lineItemIds: $lineItemIds\n    ) {\n      checkout\n    }\n  }\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__["default"])(["\n  mutation checkoutLineItemsAdd($checkoutId: ID!, $lineItems: Json!) {\n    checkoutLineItemsAdd(checkoutId: $checkoutId, lineItems: $lineItems) {\n      checkout\n    }\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__["default"])(["\n  mutation createCheckout($input: Json!) {\n    createCheckout(input: $input) {\n      checkout\n    }\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__["default"])(["\n  mutation purchaseItems($ids: Json!) {\n    purchaseItems(ids: $ids) {\n      checkout\n      cart\n    }\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__["default"])(["\n  mutation upsertMatch($id: ID!) {\n    upsertMatch(id: $id) {\n      item\n    }\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__["default"])(["\n  mutation updateOrder(\n    $id: ID!\n    $mpCart: String\n    $customCart: String\n    $customCheckout: Json\n    $zincCart: String\n    $zincCheckout: Json\n    $first_name: String\n    $last_name: String\n    $streetAddress1: String\n    $streetAddress2: String\n    $city: String\n    $state: String\n    $zip: String\n    $processed: Processed\n  ) {\n    updateOrder(\n      id: $id\n      mpCart: $mpCart\n      customCart: $customCart\n      customCheckout: $customCheckout\n      zincCart: $zincCart\n      zincCheckout: $zincCheckout\n      first_name: $first_name\n      last_name: $last_name\n      streetAddress1: $streetAddress1\n      streetAddress2: $streetAddress2\n      city: $city\n      state: $state\n      zip: $zip\n      processed: $processed\n    ) {\n      id\n      email\n    }\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__["default"])(["\n  query PAGINATION_QUERY {\n    ordersConnection(where: { processed: FALSE }) {\n      aggregate {\n        count\n      }\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__["default"])(["\n  query OrdersQuery(\n    $skip: Int\n    $first: Int\n    $orderBy: OrderOrderByInput\n    $processed: Processed\n  ) {\n    orders(\n      first: $first\n      skip: $skip\n      orderBy: $orderBy\n      where: { processed: $processed }\n    ) {\n      id\n      orderId\n      orderName\n      email\n      first_name\n      last_name\n      streetAddress1\n      streetAddress2\n      city\n      state\n      zip\n      phone\n      lineItems\n      currency\n      totalPrice\n      subTotalPrice\n      totalDiscount\n      totalTax\n      createAt\n      mpCart\n      mpCheckout\n      zincCart\n      zincCheckout\n      customCheckout\n      customCart\n      processed\n      shopName\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}















function placeZincOrder(data, token, updateOrderFunc) {
  var response, res, update;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.async(function placeZincOrder$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.awrap(fetch("".concat(true ? _config__WEBPACK_IMPORTED_MODULE_17__["front"] : undefined, "/api/zinc/purchase?token=").concat(token), {
            credentials: 'same-origin',
            mode: 'cors',
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-type': 'application/json',
              'X-Requested-With': 'Fetch'
            },
            body: JSON.stringify({
              data: data
            })
          }));

        case 3:
          response = _context.sent;
          _context.next = 6;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.awrap(response.json());

        case 6:
          res = _context.sent;
          _context.next = 9;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.awrap(updateOrderFunc({
            variables: {
              id: data.client_notes.os_order_id,
              zincCheckout: res,
              processed: 'TRUE'
            }
          }));

        case 9:
          update = _context.sent;
          console.log('first2', res);
          _context.next = 16;
          break;

        case 13:
          _context.prev = 13;
          _context.t0 = _context["catch"](0);
          console.log('error', _context.t0);

        case 16:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 13]], Promise);
}

function placeCustomOrder(cart, id, updateOrderFunc) {
  var update;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.async(function placeCustomOrder$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.awrap(updateOrderFunc({
            variables: {
              id: id,
              processed: 'TRUE'
            }
          }));

        case 2:
          update = _context2.sent;

        case 3:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, null, Promise);
}

var ORDER_QUERY = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_6__["gql"])(_templateObject());
var PAGINATION_QUERY = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_6__["gql"])(_templateObject2());
var UPDATE_ORDER_MUTATION = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_6__["gql"])(_templateObject3());
var UPSERT_MATCH_MUTATION = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_6__["gql"])(_templateObject4());
var PURCHASE_ORDER_MUTATION = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_6__["gql"])(_templateObject5());
var CREATE_CHECKOUT_MUTATION = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_6__["gql"])(_templateObject6());
var CHECKOUT_ADD_MUTATION = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_6__["gql"])(_templateObject7());
var CHECKOUT_REMOVE_MUTATION = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_6__["gql"])(_templateObject8());
var CHECKOUT_UPDATE_MUTATION = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_6__["gql"])(_templateObject9());
var DELETE_ORDER = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_6__["gql"])(_templateObject10());
var Layout = {
  flex: '1 1 10rem',
  marginLeft: '2rem',
  marginTop: '2rem'
};

function PendingOrders() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(null),
      selectedOrderIndex = _useState[0],
      setSelectedOrderIndex = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(0),
      skip = _useState2[0],
      setSkip = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])('createdAt_ASC'),
      orderBy = _useState3[0],
      setOrderBy = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(100),
      firstQ = _useState4[0],
      setFirstQ = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false),
      open = _useState5[0],
      setOpen = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false),
      cartLoading = _useState6[0],
      setCartLoading = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(null),
      processingOrder = _useState7[0],
      setProcessingOrder = _useState7[1];

  var toast = Object(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_8__["useToast"])();

  var _useQuery = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_7__["useQuery"])(_user_User__WEBPACK_IMPORTED_MODULE_11__["CURRENT_USER_QUERY"]),
      me = _useQuery.data.me;

  var allOrders = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_7__["useQuery"])(ORDER_QUERY, {
    variables: {
      skip: skip,
      first: firstQ,
      orderBy: orderBy,
      processed: 'FALSE'
    }
  });
  var allChannels = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_7__["useQuery"])(_layout_Page__WEBPACK_IMPORTED_MODULE_12__["CHANNELS_QUERY"], {
    variables: _layout_Page__WEBPACK_IMPORTED_MODULE_12__["channelsQueryVars"]
  });
  var channelsData = allChannels.data,
      channelsError = allChannels.error,
      channelsLoading = allChannels.loading;
  var pagination = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_7__["useQuery"])(PAGINATION_QUERY);

  var _useMutation = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_7__["useMutation"])(DELETE_ORDER, {
    refetchQueries: [{
      query: ORDER_QUERY,
      variables: {
        skip: skip,
        first: firstQ,
        orderBy: orderBy,
        processed: 'FALSE'
      }
    }, {
      query: PAGINATION_QUERY
    }]
  }),
      _useMutation2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useMutation, 1),
      deleteOrder = _useMutation2[0];

  var _useMutation3 = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_7__["useMutation"])(PURCHASE_ORDER_MUTATION, {
    refetchQueries: [{
      query: ORDER_QUERY,
      variables: {
        skip: skip,
        first: firstQ,
        orderBy: orderBy,
        processed: 'FALSE'
      }
    }, {
      query: PAGINATION_QUERY
    }]
  }),
      _useMutation4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useMutation3, 2),
      purchaseOrder = _useMutation4[0],
      _useMutation4$ = _useMutation4[1],
      purchaseOrderLoading = _useMutation4$.loading,
      purchaseOrderError = _useMutation4$.error;

  var _useMutation5 = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_7__["useMutation"])(UPDATE_ORDER_MUTATION, {
    refetchQueries: [{
      query: ORDER_QUERY,
      variables: {
        skip: skip,
        first: firstQ,
        orderBy: orderBy,
        processed: 'FALSE'
      }
    }, {
      query: PAGINATION_QUERY
    }]
  }),
      _useMutation6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useMutation5, 2),
      updateOrder = _useMutation6[0],
      updateOrderLoading = _useMutation6[1].loading;

  var _useMutation7 = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_7__["useMutation"])(CREATE_CHECKOUT_MUTATION, {
    refetchQueries: [{
      query: ORDER_QUERY,
      variables: {
        skip: skip,
        first: firstQ,
        orderBy: orderBy,
        processed: 'FALSE'
      }
    }, {
      query: PAGINATION_QUERY
    }]
  }),
      _useMutation8 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useMutation7, 1),
      createCheckout = _useMutation8[0];

  var _useMutation9 = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_7__["useMutation"])(CHECKOUT_REMOVE_MUTATION, {
    refetchQueries: [{
      query: ORDER_QUERY,
      variables: {
        skip: skip,
        first: firstQ,
        orderBy: orderBy,
        processed: 'FALSE'
      }
    }, {
      query: PAGINATION_QUERY
    }]
  }),
      _useMutation10 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useMutation9, 1),
      checkoutLineItemsRemove = _useMutation10[0];

  var _useMutation11 = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_7__["useMutation"])(CHECKOUT_UPDATE_MUTATION, {
    refetchQueries: [{
      query: ORDER_QUERY,
      variables: {
        skip: skip,
        first: firstQ,
        orderBy: orderBy,
        processed: 'FALSE'
      }
    }, {
      query: PAGINATION_QUERY
    }]
  }),
      _useMutation12 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useMutation11, 1),
      checkoutLineItemsUpdate = _useMutation12[0];

  var _useMutation13 = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_7__["useMutation"])(CHECKOUT_ADD_MUTATION, {
    refetchQueries: [{
      query: ORDER_QUERY,
      variables: {
        skip: skip,
        first: firstQ,
        orderBy: orderBy,
        processed: 'FALSE'
      }
    }, {
      query: PAGINATION_QUERY
    }]
  }),
      _useMutation14 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useMutation13, 1),
      checkoutLineItemsAdd = _useMutation14[0];

  var _useMutation15 = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_7__["useMutation"])(UPSERT_MATCH_MUTATION),
      _useMutation16 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useMutation15, 1),
      upsertMatch = _useMutation16[0];

  function _currentOrder(arg) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.async(function _currentOrder$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            setSelectedOrderIndex(arg);

          case 1:
          case "end":
            return _context3.stop();
        }
      }
    }, null, null, null, Promise);
  }

  function overwrite(id) {
    var upsertMatchRes;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.async(function overwrite$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            setCartLoading(true);
            _context4.next = 3;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.awrap(upsertMatch({
              variables: {
                id: id
              }
            }));

          case 3:
            upsertMatchRes = _context4.sent;
            toast({
              position: 'top-right',
              title: 'Line items have been matched to cart items',
              status: 'success',
              duration: 2000,
              isClosable: true
            }); // setSelectedOrderIndex(null);

            setCartLoading(false);

          case 6:
          case "end":
            return _context4.stop();
        }
      }
    }, null, null, null, Promise);
  }

  function doPurchase(ids) {
    var res;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.async(function doPurchase$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.awrap(purchaseOrder({
              variables: {
                ids: ids
              }
            }));

          case 2:
            res = _context5.sent;

          case 3:
          case "end":
            return _context5.stop();
        }
      }
    }, null, null, null, Promise);
  }

  function createCheck(input, orderID) {
    var varCheck, newCheck, res;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.async(function createCheck$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.awrap(createCheckout({
              variables: {
                input: input
              }
            }));

          case 2:
            varCheck = _context6.sent;
            newCheck = varCheck.data.createCheckout.checkout;
            _context6.next = 6;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.awrap(updateOrder({
              variables: {
                id: orderID,
                mpCart: JSON.stringify(newCheck)
              }
            }));

          case 6:
            res = _context6.sent;

          case 7:
          case "end":
            return _context6.stop();
        }
      }
    }, null, null, null, Promise);
  }

  function createCustomCheck(input, orderID, createCheckoutFunc, updateOrderFunc, url, key) {
    var query, variables, checkout, newCheck, res;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.async(function createCustomCheck$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            query = "\n    mutation checkoutCreate($input: CheckoutCreateInput!)\n    {\n      checkoutCreate(input: $input) {\n        userErrors {\n          message\n          field\n        }\n        checkout {\n          id\n          email\n          webUrl\n          subtotalPrice\n          totalTax\n          totalPrice\n          shippingAddress{\n            firstName\n            lastName\n            address1\n            address2\n            city\n            provinceCode\n            zip\n            country\n          }\n          lineItems (first:250) {\n            pageInfo {\n              hasNextPage\n              hasPreviousPage\n            }\n            edges {\n              node {\n                id\n                title\n                variant {\n                  id\n                  title\n                  image {\n                    src\n                  }\n                  price\n                }\n                quantity\n              }\n            }\n          }\n        }\n      }\n      }\n    ";
            variables = {
              input: input
            };
            _context7.next = 4;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.awrap(fetch("https://".concat(url, ".myshopify.com/api/graphql"), {
              method: 'POST',
              body: JSON.stringify({
                query: query,
                variables: variables
              }),
              headers: {
                'Content-Type': 'application/json',
                'X-Shopify-Storefront-Access-Token': key
              }
            }).then(function (response) {
              return response.json();
            }));

          case 4:
            checkout = _context7.sent;
            console.log(checkout);
            newCheck = checkout.data.checkoutCreate.checkout;
            _context7.next = 9;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.awrap(updateOrderFunc({
              variables: {
                id: selectedOrderIndex,
                customCart: JSON.stringify(newCheck)
              }
            }));

          case 9:
            res = _context7.sent;

          case 10:
          case "end":
            return _context7.stop();
        }
      }
    }, null, null, null, Promise);
  }

  function addCustomVariant(id, quantity, checkoutID, checkoutLineItemsAddFunc, updateOrderFunc, url, key) {
    var query, variables, checkout, newCheck, res;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.async(function addCustomVariant$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            toast({
              position: 'top-right',
              title: 'custom checkout does exist',
              status: 'success',
              duration: 2000,
              isClosable: true
            });
            query = "\n    mutation checkoutLineItemsAdd($lineItems: [CheckoutLineItemInput!]!, $checkoutId: ID!) {\n      checkoutLineItemsAdd(lineItems: $lineItems, checkoutId: $checkoutId) {\n        userErrors {\n          message\n          field\n        }\n        checkout {\n          id\n          email\n          webUrl\n          subtotalPrice\n          totalTax\n          totalPrice\n          shippingAddress {\n            address1\n            address2\n            city\n            countryCodeV2\n            provinceCode\n            zip\n            firstName\n            lastName\n          }\n          lineItems (first:250) {\n            pageInfo {\n              hasNextPage\n              hasPreviousPage\n            }\n            edges {\n              node {\n                id\n                title\n                variant {\n                  id\n                  title\n                  image {\n                    src\n                  }\n                  price\n                }\n                quantity\n              }\n            }\n          }\n        }\n      }\n    }\n    ";
            variables = {
              checkoutId: checkoutID,
              lineItems: [{
                variantId: id,
                quantity: quantity
              }]
            };
            _context8.next = 5;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.awrap(fetch("https://".concat(url, ".myshopify.com/api/graphql"), {
              method: 'POST',
              body: JSON.stringify({
                query: query,
                variables: variables
              }),
              headers: {
                'Content-Type': 'application/json',
                'X-Shopify-Storefront-Access-Token': key
              }
            }).then(function (res) {
              return res.json();
            }));

          case 5:
            checkout = _context8.sent;
            console.log(checkout);
            newCheck = checkout.data.checkoutLineItemsAdd.checkout;
            _context8.next = 10;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.awrap(updateOrderFunc({
              variables: {
                id: selectedOrderIndex,
                customCart: JSON.stringify(newCheck)
              }
            }));

          case 10:
            res = _context8.sent;

          case 11:
          case "end":
            return _context8.stop();
        }
      }
    }, null, null, null, Promise);
  }

  function addVariant(id, quantity, checkoutID) {
    var varCheck, newCheck, res;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.async(function addVariant$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            toast({
              position: 'top-right',
              title: 'checkout does exist',
              status: 'success',
              duration: 2000,
              isClosable: true
            });
            _context9.next = 3;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.awrap(checkoutLineItemsAdd({
              variables: {
                checkoutId: checkoutID,
                lineItems: [{
                  variantId: id,
                  quantity: quantity
                }]
              }
            }));

          case 3:
            varCheck = _context9.sent;
            newCheck = varCheck.data.checkoutLineItemsAdd.checkout;
            _context9.next = 7;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.awrap(updateOrder({
              variables: {
                id: selectedOrderIndex,
                mpCart: JSON.stringify(newCheck)
              }
            }));

          case 7:
            res = _context9.sent;

          case 8:
          case "end":
            return _context9.stop();
        }
      }
    }, null, null, null, Promise);
  }

  function _addZincItem(id, quantity, title, src, price, cart) {
    var find, newQ, res, _res;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.async(function addZincItem$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
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
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.awrap(updateOrder({
              variables: {
                id: selectedOrderIndex,
                zincCart: JSON.stringify({
                  products: [find].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(cart.products.filter(function (a) {
                    return a.product_id !== id;
                  })))
                })
              }
            }));

          case 9:
            res = _context10.sent;
            _context10.next = 16;
            break;

          case 12:
            console.log(false);
            _context10.next = 15;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.awrap(updateOrder({
              variables: {
                id: selectedOrderIndex,
                zincCart: JSON.stringify({
                  products: [{
                    product_id: id,
                    quantity: quantity,
                    title: title,
                    price: price,
                    src: src
                  }].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(cart && cart.products && cart.products.length ? cart.products : []))
                })
              }
            }));

          case 15:
            _res = _context10.sent;

          case 16:
          case "end":
            return _context10.stop();
        }
      }
    }, null, null, null, Promise);
  }

  function removeMPItem(lineItemIds, checkoutID) {
    var varCheck, res;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.async(function removeMPItem$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            _context11.next = 2;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.awrap(checkoutLineItemsRemove({
              variables: {
                checkoutId: checkoutID,
                lineItemIds: lineItemIds
              }
            }));

          case 2:
            varCheck = _context11.sent;
            _context11.next = 5;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.awrap(updateOrder({
              variables: {
                id: selectedOrderIndex,
                mpCart: JSON.stringify(varCheck.data.checkoutLineItemsRemove.checkout)
              }
            }));

          case 5:
            res = _context11.sent;

          case 6:
          case "end":
            return _context11.stop();
        }
      }
    }, null, null, null, Promise);
  }

  function removeCustomItem(lineItemIds, checkoutID, key, url) {
    var query, variables, checkout, res;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.async(function removeCustomItem$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            query = "\n    mutation checkoutLineItemsRemove($checkoutId: ID!, $lineItemIds: [ID!]!) {\n      checkoutLineItemsRemove(checkoutId: $checkoutId, lineItemIds: $lineItemIds) {\n        userErrors {\n          message\n          field\n        }\n        checkout {\n          id\n          email\n          webUrl\n          subtotalPrice\n          totalTax\n          totalPrice\n          shippingAddress {\n            address1\n            address2\n            city\n            countryCodeV2\n            provinceCode\n            zip\n            firstName\n            lastName\n          }\n          lineItems (first:250) {\n            pageInfo {\n              hasNextPage\n              hasPreviousPage\n            }\n            edges {\n              node {\n                id\n                title\n                variant {\n                  id\n                  title\n                  image {\n                    src\n                  }\n                  price\n                }\n                quantity\n              }\n            }\n          }\n        }\n      }\n    }\n    ";
            variables = {
              checkoutId: checkoutID,
              lineItemIds: lineItemIds
            };
            _context12.next = 4;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.awrap(fetch("https://".concat(url, ".myshopify.com/api/graphql"), {
              method: 'POST',
              body: JSON.stringify({
                query: query,
                variables: variables
              }),
              headers: {
                'Content-Type': 'application/json',
                'X-Shopify-Storefront-Access-Token': key
              }
            }).then(function (res) {
              return res.json();
            }));

          case 4:
            checkout = _context12.sent;
            _context12.next = 7;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.awrap(updateOrder({
              variables: {
                id: selectedOrderIndex,
                customCart: JSON.stringify(checkout.data.checkoutLineItemsRemove.checkout)
              }
            }));

          case 7:
            res = _context12.sent;

          case 8:
          case "end":
            return _context12.stop();
        }
      }
    }, null, null, null, Promise);
  }

  function updateMPItem(lineItems, checkoutID) {
    var varCheck, res;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.async(function updateMPItem$(_context13) {
      while (1) {
        switch (_context13.prev = _context13.next) {
          case 0:
            _context13.next = 2;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.awrap(checkoutLineItemsUpdate({
              variables: {
                checkoutId: checkoutID,
                lineItems: lineItems
              }
            }));

          case 2:
            varCheck = _context13.sent;
            _context13.next = 5;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.awrap(updateOrder({
              variables: {
                id: selectedOrderIndex,
                mpCart: JSON.stringify(varCheck.data.checkoutLineItemsUpdate.checkout)
              }
            }));

          case 5:
            res = _context13.sent;

          case 6:
          case "end":
            return _context13.stop();
        }
      }
    }, null, null, null, Promise);
  }

  function updateCustomItem(lineItems, checkoutID, key, url) {
    var query, variables, checkout, res;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.async(function updateCustomItem$(_context14) {
      while (1) {
        switch (_context14.prev = _context14.next) {
          case 0:
            query = "\n    mutation checkoutLineItemsUpdate ($checkoutId: ID!, $lineItems: [CheckoutLineItemUpdateInput!]!) {\n      checkoutLineItemsUpdate(checkoutId: $checkoutId, lineItems: $lineItems) {\n        userErrors {\n          message\n          field\n        }\n        checkout {\n          id\n          email\n          webUrl\n          subtotalPrice\n          totalTax\n          totalPrice\n          shippingAddress {\n            address1\n            address2\n            city\n            countryCodeV2\n            provinceCode\n            zip\n            firstName\n            lastName\n          }\n          lineItems (first:250) {\n            pageInfo {\n              hasNextPage\n              hasPreviousPage\n            }\n            edges {\n              node {\n                id\n                title\n                variant {\n                  id\n                  title\n                  image {\n                    src\n                  }\n                  price\n                }\n                quantity\n              }\n            }\n          }\n        }\n      }\n    }\n    ";
            variables = {
              checkoutId: checkoutID,
              lineItems: lineItems
            };
            _context14.next = 4;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.awrap(fetch("https://".concat(url, ".myshopify.com/api/graphql"), {
              method: 'POST',
              body: JSON.stringify({
                query: query,
                variables: variables
              }),
              headers: {
                'Content-Type': 'application/json',
                'X-Shopify-Storefront-Access-Token': key
              }
            }).then(function (res) {
              return res.json();
            }));

          case 4:
            checkout = _context14.sent;
            _context14.next = 7;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.awrap(updateOrder({
              variables: {
                id: selectedOrderIndex,
                customCart: JSON.stringify(checkout.data.checkoutLineItemsUpdate.checkout)
              }
            }));

          case 7:
            res = _context14.sent;

          case 8:
          case "end":
            return _context14.stop();
        }
      }
    }, null, null, null, Promise);
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

  return __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_8__["Box"], {
    display: "flex",
    py: 4
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_8__["Box"], {
    flex: 1,
    alignItems: "center",
    display: "flex"
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_8__["Heading"], {
    fontSize: "2xl",
    color: "text",
    fontWeight: 500
  }, "Pending Orders"))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_8__["Box"], {
    display: "flex",
    flexWrap: "wrap",
    marginLeft: "-2rem",
    marginTop: "-2rem"
  }, function () {
    if (allOrders.loading) return __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_8__["Box"], Layout, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_8__["Box"], _common_DefaultStyles__WEBPACK_IMPORTED_MODULE_14__["CardStyle"], __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_8__["Box"], {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "50vh"
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_8__["Spinner"], {
      thickness: "4px",
      speed: "0.65s",
      emptyColor: "gray.200",
      color: "blue.500",
      size: "xl"
    })))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_8__["Box"], Layout, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_8__["Box"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _common_DefaultStyles__WEBPACK_IMPORTED_MODULE_14__["CardStyle"], {
      padding: 3
    }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_8__["Box"], {
      p: 2,
      display: "flex",
      borderLeft: "3px solid #d9822b",
      borderRight: "1px solid #E2E8F0",
      borderTop: "1px solid #E2E8F0",
      borderBottom: "1px solid #E2E8F0"
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_8__["Icon"], {
      name: "warning-2",
      color: "#d9812a",
      mr: 2
    }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_8__["Heading"], {
      fontSize: "sm",
      color: "text"
    }, "Please choose an order or a line item.")))));
    if (allOrders.error) return "Error! ".concat(allOrders.error.message);
    var orders = allOrders.data.orders;
    var theOrder = orders.filter(function (order) {
      return order.id === selectedOrderIndex;
    })[0];
    return __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_8__["Box"], Layout, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_8__["Box"], _common_DefaultStyles__WEBPACK_IMPORTED_MODULE_14__["CardStyle"], __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_8__["Box"], {
      display: "flex",
      paddingX: "1em",
      paddingY: ".8em",
      alignItems: "center"
    }, function () {
      var count = pagination.data && pagination.data.ordersConnection ? pagination.data.ordersConnection.aggregate.count : 0;
      return __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, firstQ === 1 ? __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_8__["Heading"], {
        fontSize: "xs",
        letterSpacing: "wider",
        textTransform: "uppercase",
        color: "gray.500",
        fontWeight: 400
      }, "Order ", skip + 1, " of ", count) : __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_8__["Heading"], {
        fontSize: "xs",
        letterSpacing: "wider",
        textTransform: "uppercase",
        color: "gray.500",
        fontWeight: 400
      }, count, " Order", count !== 1 && 's'), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_8__["Box"], {
        marginLeft: "auto",
        display: "flex"
      }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_8__["Button"], {
        borderRadius: 3,
        marginX: 1,
        px: 2,
        height: 5,
        onClick: function onClick() {
          return setOrderBy(orderBy === 'createdAt_DESC' ? 'createdAt_ASC' : 'createdAt_DESC');
        }
      }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_8__["Heading"], {
        fontSize: "xs",
        fontWeight: 700,
        textTransform: "uppercase"
      }, orderBy.split('_')[1])), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_8__["Button"], {
        bg: "#d4eee2",
        color: "#00783e",
        _hover: {
          bg: '#bfe3d2'
        },
        borderRadius: 3,
        marginX: 1,
        px: 2,
        height: 5,
        onClick: function onClick() {
          return play();
        }
      }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_8__["Heading"], {
        fontSize: "xs",
        fontWeight: 700,
        textTransform: "uppercase"
      }, firstQ !== 1 ? 'Play' : 'Show All')), firstQ === 1 ? __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_8__["Button"], {
        background: "#fbe6a2",
        color: "#7e6514",
        _hover: {
          bg: '#f0d98d'
        },
        borderRadius: 3,
        ml: 1,
        px: 2,
        height: 5,
        onClick: function onClick() {
          return setSkip(skip + 1);
        } // disabled={firstQ !== 1 || skip + 1 === count}

      }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_8__["Heading"], {
        fontSize: "xs",
        fontWeight: 700,
        marginRight: 2,
        textTransform: "uppercase"
      }, "Skip"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_8__["Icon"], {
        size: 2,
        name: "arrow-right"
      })) : __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_8__["Button"], {
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
      }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_8__["Heading"], {
        fontSize: "xs",
        fontWeight: 700,
        textTransform: "uppercase"
      }, "Process"))));
    }()), orders.length ? orders.map(function (order) {
      return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_8__["Box"], {
        key: order.id
      }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_8__["Box"], {
        opacity: processingOrder === order.id && '0.2',
        width: "100%",
        height: "100%",
        position: "relative"
      }, processingOrder === order.id && __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_8__["Box"], {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        width: "100%",
        height: "100%"
      }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_8__["Spinner"], {
        thickness: "4px",
        speed: "0.65s",
        emptyColor: "gray.200",
        color: "blue.500",
        size: "xl"
      })), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_8__["Box"], {
        borderTop: "0.1rem solid #dfe3e8"
      }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_8__["Box"], {
        borderLeft: "3px solid ".concat(selectedOrderIndex === order.id ? '#007489' : 'transparent')
      }, __jsx(_common_orderListItem_OrderListItem__WEBPACK_IMPORTED_MODULE_9__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, order, {
        updateIndex: function updateIndex(arg) {
          return _currentOrder(arg);
        },
        open: open,
        createCheckout: function createCheckout(a) {
          return createCheck(a, order.id);
        },
        key: order.id,
        index: order.id,
        selectedOrderIndex: selectedOrderIndex,
        disabled: !(!selectedOrderIndex || selectedOrderIndex === order.id),
        buttons: __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_8__["Button"], {
          "aria-label": "delete order",
          height: "1.3rem",
          minWidth: "1.3rem",
          bg: "transparent",
          color: "#66788a",
          px: 0,
          mx: 1,
          onClick: function _callee(e) {
            var res;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.async(function _callee$(_context15) {
              while (1) {
                switch (_context15.prev = _context15.next) {
                  case 0:
                    e.stopPropagation();
                    setProcessingOrder(order.id);
                    _context15.next = 4;
                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.awrap(deleteOrder({
                      variables: {
                        id: order.id
                      }
                    }));

                  case 4:
                    res = _context15.sent;
                    setProcessingOrder(null);

                  case 6:
                  case "end":
                    return _context15.stop();
                }
              }
            }, null, null, null, Promise);
          }
        }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_8__["Icon"], {
          name: "small-close",
          size: 4
        })), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_8__["Button"], {
          "aria-label": "show line-items",
          height: "1.3rem",
          minWidth: "1.3rem",
          bg: "transparent",
          color: "#66788a",
          px: 0,
          mx: 1,
          onClick: function _callee2(e) {
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.async(function _callee2$(_context16) {
              while (1) {
                switch (_context16.prev = _context16.next) {
                  case 0:
                    e.stopPropagation();
                    setProcessingOrder(order.id);
                    setSelectedOrderIndex(null);

                    if (!(JSON.parse(order.customCart).lineItems.edges.length > 0)) {
                      _context16.next = 9;
                      break;
                    }

                    toast({
                      position: 'top-right',
                      title: 'custom called',
                      status: 'success',
                      duration: 2000,
                      isClosable: true
                    });
                    _context16.next = 7;
                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.awrap(placeCustomOrder(order.customCart, order.id, updateOrder // forceUpdate
                    ));

                  case 7:
                    _context16.next = 21;
                    break;

                  case 9:
                    if (!(JSON.parse(order.mpCart).lineItems.edges.length > 0)) {
                      _context16.next = 14;
                      break;
                    }

                    _context16.next = 12;
                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.awrap(doPurchase([order.id]));

                  case 12:
                    _context16.next = 21;
                    break;

                  case 14:
                    if (!(JSON.parse(order.zincCart).products.length > 0)) {
                      _context16.next = 20;
                      break;
                    }

                    toast({
                      position: 'top-right',
                      title: 'zinc called',
                      status: 'success',
                      duration: 2000,
                      isClosable: true
                    });
                    _context16.next = 18;
                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.awrap(placeZincOrder({
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
                      gift_message: "Here is your package, ".concat(order.first_name, "! Enjoy!"),
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
                    }, me.zincToken, updateOrder));

                  case 18:
                    _context16.next = 21;
                    break;

                  case 20:
                    toast({
                      position: 'top-right',
                      title: 'Not called',
                      status: 'success',
                      duration: 2000,
                      isClosable: true
                    });

                  case 21:
                    setProcessingOrder(null);

                  case 22:
                  case "end":
                    return _context16.stop();
                }
              }
            }, null, null, null, Promise);
          }
        }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_8__["Icon"], {
          name: "check",
          size: 3
        })))
      }))))));
    }) : __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_8__["Box"], {
      backgroundColor: "gray.100",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column"
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_8__["Heading"], {
      margin: "1em",
      fontSize: "xl",
      fontWeight: 600,
      color: "text"
    }, "Your pending orders will appear here.")))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_8__["Box"], Layout, selectedOrderIndex ? __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_8__["Box"], null, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_8__["Box"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _common_DefaultStyles__WEBPACK_IMPORTED_MODULE_14__["CardStyle"], {
      padding: 15,
      opacity: cartLoading && '0.2',
      width: "100%",
      height: "100%"
    }), cartLoading && __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_8__["Box"], {
      display: "flex",
      justifyContent: "center",
      margin: "auto"
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_8__["Box"], {
      position: "fixed"
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_8__["Spinner"], {
      thickness: "4px",
      speed: "0.65s",
      emptyColor: "gray.200",
      color: "blue.500",
      size: "xl"
    }))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_8__["Box"], {
      display: "flex",
      justifyContent: "space-between",
      fontWeight: 600,
      background: "white"
    }, __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_8__["Heading"], {
      fontSize: "md",
      color: "text",
      mb: 1
    }, theOrder.orderName), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_8__["Box"], {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginLeft: 4
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_8__["Text"], {
      fontSize: "sm",
      fontWeight: 500,
      marginX: 2,
      color: "#7B8B9A",
      cursor: "pointer",
      onClick: function onClick() {
        // setSelectedLineIndex([]);
        setSelectedOrderIndex(null);
      }
    }, "Empty"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_8__["Button"], {
      borderRadius: 3,
      marginX: 1,
      px: 2,
      height: 5,
      bg: "#ddebf7",
      color: "#1070ca",
      _hover: {
        bg: '#c0d8ed'
      },
      onClick: function onClick() {
        return overwrite(theOrder.id);
      },
      disabled: theOrder.mpCart && theOrder.mpCart.lineItems && theOrder.mpCart.lineItems.edges.length === 0 || !theOrder.mpCart
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_8__["Heading"], {
      fontSize: "xs",
      fontWeight: 700,
      textTransform: "uppercase"
    }, "Match"))))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_8__["Box"], null, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_8__["Box"], {
      display: "flex"
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_8__["Text"], {
      contenteditable: "true",
      fontSize: "sm",
      marginRight: 1,
      lineHeight: "short"
    }, theOrder.first_name), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_8__["Text"], {
      contenteditable: "true",
      fontSize: "sm",
      lineHeight: "short"
    }, theOrder.last_name)), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_8__["Text"], {
      contenteditable: "true",
      fontSize: "sm",
      lineHeight: "short"
    }, theOrder.streetAddress1), theOrder.streetAddress2 && __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_8__["Text"], {
      contenteditable: "true",
      fontSize: "sm",
      lineHeight: "short"
    }, theOrder.streetAddress2), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_8__["Box"], {
      display: "flex"
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_8__["Text"], {
      contenteditable: "true",
      fontSize: "sm",
      marginRight: 1,
      lineHeight: "short"
    }, theOrder.city), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_8__["Text"], {
      contenteditable: "true",
      fontSize: "sm",
      marginRight: 2,
      lineHeight: "short"
    }, theOrder.state), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_8__["Text"], {
      contenteditable: "true",
      fontSize: "sm",
      lineHeight: "short"
    }, theOrder.zip))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_8__["Box"], {
      paddingTop: 2
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_8__["Box"], {
      marginLeft: "-3px",
      background: "#F7F9FD",
      paddingY: ".7em",
      paddingX: "1em",
      border: "1px solid #edf0f2"
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_8__["Box"], {
      marginBottom: 2
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_8__["Text"], {
      fontSize: "sm",
      fontWeight: 500,
      color: "#084B8A"
    }, "Line Items")), theOrder.lineItems.map(function (a) {
      return __jsx(_common_orderListItem_OrderLine__WEBPACK_IMPORTED_MODULE_13__["default"], {
        key: a.id,
        item: a.node ? a.node : a
      });
    }))), channelsData.channels.filter(function (channel) {
      return channel.type === 'MARKETPLACE';
    }).length > 0 && __jsx(_Cart_MPCart__WEBPACK_IMPORTED_MODULE_15__["default"], {
      cartName: "Marketplace",
      cart: JSON.parse(theOrder.mpCart),
      removeItem: function removeItem(a) {
        return removeMPItem(a, JSON.parse(theOrder.mpCart).id);
      },
      checkoutLineItemsUpdate: function checkoutLineItemsUpdate(a) {
        return updateMPItem(a, JSON.parse(theOrder.mpCart).id);
      },
      loading: updateOrderLoading
    }), channelsData.channels.filter(function (channel) {
      return channel.type === 'SHOPIFY';
    }).length > 0 && __jsx(_Cart_MPCart__WEBPACK_IMPORTED_MODULE_15__["default"], {
      cartName: "BN",
      background: "#F1FBFC",
      color: "#007489",
      cart: JSON.parse(theOrder.customCart),
      removeItem: function removeItem(a) {
        return removeCustomItem(a, JSON.parse(theOrder.customCart).id, channelsData.channels.filter(function (channel) {
          return channel.type === 'SHOPIFY';
        })[0].settings.key, channelsData.channels.filter(function (channel) {
          return channel.type === 'SHOPIFY';
        })[0].settings.shopURL);
      },
      checkoutLineItemsUpdate: function checkoutLineItemsUpdate(a) {
        return updateCustomItem(a, JSON.parse(theOrder.customCart).id, channelsData.channels.filter(function (channel) {
          return channel.type === 'SHOPIFY';
        })[0].settings.key, channelsData.channels.filter(function (channel) {
          return channel.type === 'SHOPIFY';
        })[0].settings.shopURL);
      },
      loading: updateOrderLoading
    }), channelsData.channels.filter(function (channel) {
      return channel.type === 'ZINC';
    }).length > 0 && __jsx(_Cart_ZincCart__WEBPACK_IMPORTED_MODULE_16__["default"], {
      cart: JSON.parse(theOrder.zincCart),
      removeItem: function _callee3(productID) {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.async(function _callee3$(_context17) {
          while (1) {
            switch (_context17.prev = _context17.next) {
              case 0:
                _context17.next = 2;
                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.awrap(updateOrder({
                  variables: {
                    id: selectedOrderIndex,
                    zincCart: JSON.stringify({
                      products: JSON.parse(theOrder.zincCart).products.filter(function (a) {
                        return a.product_id !== productID;
                      })
                    })
                  }
                }));

              case 2:
                res = _context17.sent;

              case 3:
              case "end":
                return _context17.stop();
            }
          }
        }, null, null, null, Promise);
      },
      checkoutLineItemsUpdate: function _callee4(productID, quantity) {
        var res, find, newQ, _res2;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.async(function _callee4$(_context18) {
          while (1) {
            switch (_context18.prev = _context18.next) {
              case 0:
                if (!(quantity === 0)) {
                  _context18.next = 6;
                  break;
                }

                _context18.next = 3;
                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.awrap(updateOrder({
                  variables: {
                    id: selectedOrderIndex,
                    zincCart: JSON.stringify({
                      products: JSON.parse(theOrder.zincCart).products.filter(function (a) {
                        return a.product_id !== productID;
                      })
                    })
                  }
                }));

              case 3:
                res = _context18.sent;
                _context18.next = 12;
                break;

              case 6:
                find = JSON.parse(theOrder.zincCart).products.find(function (obj) {
                  return obj.product_id === productID;
                });
                newQ = quantity;
                find.quantity = newQ;
                _context18.next = 11;
                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.awrap(updateOrder({
                  variables: {
                    id: selectedOrderIndex,
                    zincCart: JSON.stringify({
                      products: [find].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(JSON.parse(theOrder.zincCart).products.filter(function (a) {
                        return a.product_id !== productID;
                      })))
                    })
                  }
                }));

              case 11:
                _res2 = _context18.sent;

              case 12:
              case "end":
                return _context18.stop();
            }
          }
        }, null, null, null, Promise);
      },
      loading: updateOrderLoading
    }))) : __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_8__["Box"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _common_DefaultStyles__WEBPACK_IMPORTED_MODULE_14__["CardStyle"], {
      padding: 3
    }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_8__["Box"], {
      p: 2,
      display: "flex",
      borderLeft: "3px solid #d9822b",
      borderRight: "1px solid #E2E8F0",
      borderTop: "1px solid #E2E8F0",
      borderBottom: "1px solid #E2E8F0"
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_8__["Icon"], {
      name: "warning-2",
      color: "#d9812a",
      mr: 2
    }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_8__["Heading"], {
      fontSize: "sm",
      color: "text"
    }, "Please choose an order or a line item."))), __jsx(_find_Find__WEBPACK_IMPORTED_MODULE_10__["default"], {
      headerSize: 600,
      atcDisabled: !theOrder,
      addMPItem: function addMPItem(a, b) {
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
      addCustomItem: function addCustomItem(a, b, url, key) {
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
      addZincItem: function addZincItem(a, b, c, d, e) {
        return _addZincItem(a, b, c, d, e, JSON.parse(theOrder.zincCart));
      }
    })));
  }()));
}

/* harmony default export */ __webpack_exports__["default"] = (PendingOrders);

/***/ })

})
//# sourceMappingURL=index.js.cf9f11b0d8a82324af2b.hot-update.js.map