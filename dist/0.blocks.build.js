(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./src/components/fields/lazyToggle.js":
/*!*********************************************!*\
  !*** ./src/components/fields/lazyToggle.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_toggle_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/toggle.scss */ "./src/components/css/toggle.scss");
/* harmony import */ var _css_toggle_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_toggle_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _device__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./device */ "./src/components/fields/device.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var _wp$element = wp.element,
    Component = _wp$element.Component,
    Fragment = _wp$element.Fragment;
var ToggleControl = wp.components.ToggleControl;

var LazyToggle = /*#__PURE__*/function (_Component) {
  _inherits(LazyToggle, _Component);

  var _super = _createSuper(LazyToggle);

  function LazyToggle(props) {
    var _this;

    _classCallCheck(this, LazyToggle);

    _this = _super.call(this, props);
    _this.state = {
      current: _this._filterValue()
    };
    return _this;
  }

  _createClass(LazyToggle, [{
    key: "_filterValue",
    value: function _filterValue() {
      return this.props.value ? this.props.responsive ? this.props.value[window.wprigDevice] || '' : this.props.value : '';
    }
  }, {
    key: "setSettings",
    value: function setSettings(val) {
      var _this$props = this.props,
          value = _this$props.value,
          responsive = _this$props.responsive,
          onChange = _this$props.onChange;

      var _final = responsive ? Object.assign({}, value, _defineProperty({}, window.wprigDevice, val)) : val;

      onChange(_final);
      this.setState({
        current: val
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          label = _this$props2.label,
          customClassName = _this$props2.customClassName,
          responsive = _this$props2.responsive,
          device = _this$props2.device,
          onDeviceChange = _this$props2.onDeviceChange;
      return /*#__PURE__*/React.createElement("div", {
        className: 'wprig-field-toggle wprig-field' + (this.props.responsive ? ' wprig-responsive' : '') + (customClassName ? " ".concat(customClassName) : '')
      }, /*#__PURE__*/React.createElement("label", null, label && label, responsive && /*#__PURE__*/React.createElement(Fragment, null, device ? /*#__PURE__*/React.createElement(_device__WEBPACK_IMPORTED_MODULE_1__["default"], {
        device: device,
        commonResponsiveDevice: device,
        className: "wprig-ml-10",
        onChange: function onChange(val) {
          return onDeviceChange(val);
        }
      }) : /*#__PURE__*/React.createElement(_device__WEBPACK_IMPORTED_MODULE_1__["default"], {
        onChange: function onChange(val) {
          return _this2.setState({
            current: val
          });
        }
      }))), /*#__PURE__*/React.createElement(ToggleControl, {
        checked: this._filterValue(),
        onChange: function onChange(val) {
          return _this2.setSettings(val);
        }
      }));
    }
  }]);

  return LazyToggle;
}(Component);

/* harmony default export */ __webpack_exports__["default"] = (LazyToggle);

/***/ })

}]);
//# sourceMappingURL=0.blocks.build.js.map