webpackHotUpdate("static/development/pages/pending.js",{

/***/ "./components/find/Find.js":
/*!*********************************!*\
  !*** ./components/find/Find.js ***!
  \*********************************/
/*! exports provided: getItemGroup, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getItemGroup", function() { return getItemGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Find; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! apollo-boost */ "./node_modules/apollo-boost/lib/index.js");
/* harmony import */ var evergreen_ui__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! evergreen-ui */ "./node_modules/evergreen-ui/esm/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.esm.js");
/* harmony import */ var _findListItem_Product__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./findListItem/Product */ "./components/find/findListItem/Product.js");
/* harmony import */ var _findListItem_AmzProduct__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./findListItem/AmzProduct */ "./components/find/findListItem/AmzProduct.js");
/* harmony import */ var _user_User__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../user/User */ "./components/user/User.js");
/* harmony import */ var _common_Pagination__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../common/Pagination */ "./components/common/Pagination.js");
/* harmony import */ var _common_Button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../common/Button */ "./components/common/Button.js");
/* harmony import */ var _common_DefaultStyles__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../common/DefaultStyles */ "./components/common/DefaultStyles.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../config */ "./config.js");










function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_8__["default"])(["\n  query getItemGroup($itemID: String) {\n    getItemGroup(itemID: $itemID) {\n      item\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_8__["default"])(["\n  query getItems(\n    $search: String\n    $limit: Int\n    $sort: String\n    $pageNum: Int\n    $exclude: Json\n    $include: Json\n    $priceCurrency: String\n    $price: String\n    $itemLocationCountry: String\n  ) {\n    getItems(\n      search: $search\n      limit: $limit\n      sort: $sort\n      pageNum: $pageNum\n      exclude: $exclude\n      include: $include\n      priceCurrency: $priceCurrency\n      price: $price\n      itemLocationCountry: $itemLocationCountry\n    ) {\n      item\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}














var getItems = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_11__["gql"])(_templateObject());
var getItemGroup = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_11__["gql"])(_templateObject2());
var sortOptions = [{
  label: 'Lowest Price',
  value: 'price'
}, {
  label: 'Highest Price',
  value: '-price'
}, {
  label: 'Best Match',
  value: 'match'
}];

var option = function option(name, options, update, selected) {
  return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_12__["Pane"], {
    marginBottom: 10,
    marginRight: 10
  }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_12__["Heading"], {
    size: 500,
    fontSize: "12px",
    fontWeight: 500,
    marginBottom: 2
  }, name), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_12__["Tablist"], null, options.map(function (a, index) {
    return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_12__["Tab"], {
      key: a,
      id: a,
      marginLeft: 0,
      height: "20px",
      fontSize: "10px",
      marginBottom: 3,
      letterSpacing: "0.3px",
      fontWeight: 400,
      textTransform: "uppercase",
      onSelect: function onSelect() {
        return update(a);
      },
      isSelected: a === selected,
      "aria-controls": "panel-".concat(a)
    }, a);
  })));
};

var Find =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Find, _Component);

  function Find() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Find);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Find)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "state", {
      sort: {
        label: 'Lowest Price',
        value: 'price'
      },
      searchBar: '',
      searchEntry: null,
      limit: 10,
      pageNum: 0,
      min: '',
      max: '',
      price: null,
      priceCurrency: 'USD',
      itemLocationCountry: 'US',
      include: [],
      exclude: [],
      selectedChannel: 'zinc',
      zincResults: []
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "zincSearch", function (searchEntry, token) {
      console.log('called');
      fetch("".concat( true ? _config__WEBPACK_IMPORTED_MODULE_21__["front"] : undefined, "/api/zinc/search?query=").concat(searchEntry, "&token=").concat(token)).then(function (res) {
        return res.json();
      }).then(function (json) {
        return _this.setState({
          zincResults: json
        });
      })["catch"](function (error) {
        return console.log('Error: ', error);
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Find, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          headerSize = _this$props.headerSize,
          atcDisabled = _this$props.atcDisabled,
          addMPItem = _this$props.addMPItem,
          _addZincItem = _this$props.addZincItem;
      var _this$state = this.state,
          pageNum = _this$state.pageNum,
          searchBar = _this$state.searchBar,
          sort = _this$state.sort,
          limit = _this$state.limit,
          itemLocationCountry = _this$state.itemLocationCountry,
          selectedChannel = _this$state.selectedChannel,
          min = _this$state.min,
          max = _this$state.max,
          include = _this$state.include,
          exclude = _this$state.exclude,
          searchEntry = _this$state.searchEntry,
          priceCurrency = _this$state.priceCurrency,
          price = _this$state.price,
          zincResults = _this$state.zincResults;
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_12__["Pane"], {
        display: "flex",
        paddingTop: 16,
        paddingBottom: 16
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_12__["Pane"], {
        flex: 1,
        alignItems: "center",
        display: "flex"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_12__["Heading"], {
        size: headerSize || 700
      }, "Marketplace"))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_12__["Pane"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _common_DefaultStyles__WEBPACK_IMPORTED_MODULE_20__["CardStyle"], {
        background: "white"
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_user_User__WEBPACK_IMPORTED_MODULE_17__["default"], null, function (_ref) {
        var me = _ref.data.me;
        if (!me) return null;

        if (me.buyer && me.buyer.status) {
          return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_12__["Pane"], {
            display: "flex",
            paddingX: "1em",
            paddingY: "1em",
            flexWrap: "wrap"
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_common_Pagination__WEBPACK_IMPORTED_MODULE_18__["default"], {
            leftDisabled: pageNum === 0,
            onLeft: function onLeft() {
              return _this2.setState(function (state) {
                return {
                  pageNum: state.pageNum - 1
                };
              });
            },
            onRight: function onRight() {
              return _this2.setState(function (state) {
                return {
                  pageNum: state.pageNum + 1
                };
              });
            }
          }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_12__["Pane"], {
            flex: 1
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_12__["SearchInput"], {
            placeholder: "Search",
            boxShadow: "none",
            width: "100%",
            height: 36,
            value: searchBar,
            onChange: function onChange(e) {
              return _this2.setState({
                searchBar: e.target.value,
                pageNum: 0
              });
            },
            onKeyPress: function onKeyPress(e) {
              if (e.key === 'Enter') {
                _this2.setState(function (state) {
                  return {
                    searchEntry: state.searchBar
                  };
                });

                if (selectedChannel === 'zinc') {
                  _this2.zincSearch(searchBar, me.zincToken);
                }
              }
            }
          }))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_12__["Pane"], {
            display: "flex",
            flexWrap: "wrap",
            background: "#f5f5f5",
            paddingY: ".7em",
            paddingX: "1em"
          }, option('Channel', ['zinc', 'marketplace'], function (a) {
            return _this2.setState({
              selectedChannel: a
            });
          }, selectedChannel), option('Location', ['US', 'CN', 'All'], function (a) {
            return _this2.setState({
              itemLocationCountry: a
            });
          }, itemLocationCountry), option('Items per page', [10, 50, 100], function (a) {
            return _this2.setState({
              limit: a
            });
          }, limit)), searchEntry && selectedChannel === 'marketplace' && react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_14__["Query"], {
            query: getItems,
            variables: {
              search: searchEntry,
              limit: limit,
              sort: sort.value,
              pageNum: pageNum,
              exclude: exclude,
              include: include,
              priceCurrency: priceCurrency,
              price: price,
              itemLocationCountry: itemLocationCountry
            }
          }, function (_ref2) {
            var data = _ref2.data,
                error = _ref2.error,
                loading = _ref2.loading;
            if (loading) return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_12__["Pane"], {
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100vh"
            }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_12__["Spinner"], {
              size: 80
            }));
            if (error || !data.getItems.item || data.getItems.item.length < 1) return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_12__["Pane"], {
              paddingX: "1em",
              paddingY: "1em"
            }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_12__["Pane"], {
              background: "tint2",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              borderRadius: 3
            }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_12__["Heading"], {
              margin: "1em",
              size: 600
            }, "No items found.")));
            return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, data.getItems.item.data.products.edges.map(function (product) {
              return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_findListItem_Product__WEBPACK_IMPORTED_MODULE_15__["default"], {
                addVariantToCart: function addVariantToCart(a, b) {
                  return addMPItem(a, b);
                },
                checkout: function checkout() {
                  return evergreen_ui__WEBPACK_IMPORTED_MODULE_12__["toaster"].success("checkout");
                },
                key: product.node.id.toString(),
                product: product.node,
                client: "Marketplace",
                atcDisabled: atcDisabled
              });
            }));
          }), selectedChannel === 'zinc' && zincResults.length ? zincResults.map(function (product) {
            return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_findListItem_AmzProduct__WEBPACK_IMPORTED_MODULE_16__["default"], {
              product: product,
              addVariantToCart: function addVariantToCart(a) {
                return evergreen_ui__WEBPACK_IMPORTED_MODULE_12__["toaster"].success(a);
              },
              atcDisabled: atcDisabled,
              addZincItem: function addZincItem(a, b, c, d, e) {
                return _addZincItem(a, b, c, d, e);
              }
            });
          }) : react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_12__["Pane"], {
            paddingX: "1em",
            paddingY: "1em"
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_12__["Pane"], {
            background: "tint2",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            borderRadius: 3
          }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_12__["Heading"], {
            margin: "1em",
            size: 600
          }, "No items found"))));
        }

        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(evergreen_ui__WEBPACK_IMPORTED_MODULE_12__["Pane"], {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "200px"
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
          href: "/settings"
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("a", null, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_common_Button__WEBPACK_IMPORTED_MODULE_19__["default"], {
          intent: "primary",
          height: 30,
          fontSize: 16
        }, "Apply for Beta Access"))));
      })));
    }
  }]);

  return Find;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Find, "propTypes", {
  headerSize: prop_types__WEBPACK_IMPORTED_MODULE_13___default.a.number,
  atcDisabled: prop_types__WEBPACK_IMPORTED_MODULE_13___default.a.bool,
  addVariant: prop_types__WEBPACK_IMPORTED_MODULE_13___default.a.func
});



/***/ })

})
//# sourceMappingURL=pending.js.dd2d1b7ed6ab40b69a1b.hot-update.js.map