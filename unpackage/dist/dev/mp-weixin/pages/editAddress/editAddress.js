(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/editAddress/editAddress"],{

/***/ 69:
/*!**********************************************************************************!*\
  !*** I:/pro/maintainCar2.0/main.js?{"page":"pages%2FeditAddress%2FeditAddress"} ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _editAddress = _interopRequireDefault(__webpack_require__(/*! ./pages/editAddress/editAddress.vue */ 70));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_editAddress.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 70:
/*!***************************************************************!*\
  !*** I:/pro/maintainCar2.0/pages/editAddress/editAddress.vue ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _editAddress_vue_vue_type_template_id_4367599c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editAddress.vue?vue&type=template&id=4367599c& */ 71);
/* harmony import */ var _editAddress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editAddress.vue?vue&type=script&lang=js& */ 73);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _editAddress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _editAddress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _editAddress_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editAddress.vue?vue&type=style&index=0&lang=less& */ 75);
/* harmony import */ var _HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../软件/HBuilderX.1.7.0.20190314.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 10);

var renderjs





/* normalize component */

var component = Object(_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _editAddress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _editAddress_vue_vue_type_template_id_4367599c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _editAddress_vue_vue_type_template_id_4367599c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _editAddress_vue_vue_type_template_id_4367599c___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/editAddress/editAddress.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 71:
/*!**********************************************************************************************!*\
  !*** I:/pro/maintainCar2.0/pages/editAddress/editAddress.vue?vue&type=template&id=4367599c& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_editAddress_vue_vue_type_template_id_4367599c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../软件/HBuilderX.1.7.0.20190314.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../软件/HBuilderX.1.7.0.20190314.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../软件/HBuilderX.1.7.0.20190314.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../软件/HBuilderX.1.7.0.20190314.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../软件/HBuilderX.1.7.0.20190314.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../软件/HBuilderX.1.7.0.20190314.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./editAddress.vue?vue&type=template&id=4367599c& */ 72);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_editAddress_vue_vue_type_template_id_4367599c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_editAddress_vue_vue_type_template_id_4367599c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_editAddress_vue_vue_type_template_id_4367599c___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_editAddress_vue_vue_type_template_id_4367599c___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 72:
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!I:/pro/maintainCar2.0/pages/editAddress/editAddress.vue?vue&type=template&id=4367599c& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 73:
/*!****************************************************************************************!*\
  !*** I:/pro/maintainCar2.0/pages/editAddress/editAddress.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_editAddress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../软件/HBuilderX.1.7.0.20190314.full/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../软件/HBuilderX.1.7.0.20190314.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../软件/HBuilderX.1.7.0.20190314.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../软件/HBuilderX.1.7.0.20190314.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../软件/HBuilderX.1.7.0.20190314.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./editAddress.vue?vue&type=script&lang=js& */ 74);
/* harmony import */ var _HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_editAddress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_editAddress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_editAddress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_editAddress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_editAddress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 74:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!I:/pro/maintainCar2.0/pages/editAddress/editAddress.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default =
{
  data: function data() {
    return {
      region: ['广东省', '广州市', '海珠区'],
      address: {
        receiverName: '',
        receiverPhone: '',
        receiverProvince: '',
        receiverCity: '',
        receiverTown: '',
        receiverAddress: '',
        def: '0', //0是未选中，1是选中,
        userId: '2',
        id: this.addressId },

      //默认地址是否选中
      checkTip: false,
      //用来存储地址id
      addressId: '' };

  },
  onLoad: function onLoad(options) {var _this = this;
    console.log(options.id);
    this.addressId = options.id;
    //初始化渲染页面
    wx.request({
      url: 'http://172.17.1.203:6067/order/{id}?id=' + options.id,
      method: 'get',
      header: {
        token: wx.getStorageSync('token') },

      success: function success(res) {
        if (res.statusCode === 200) {
          if (typeof res.data.data === 'object') {
            _this.address = res.data.data;
            _this.region = [res.data.data.receiverProvince, res.data.data.receiverCity, res.data.data.receiverTown];
            if (res.data.data.def) {
              _this.checkTip = true;
            } else {
              _this.checkTip = false;
            }
          }
        }
      },
      fail: function fail(err) {
        console.log(err);
      } });

  },
  methods: {
    bindRegionChange: function bindRegionChange(e) {
      this.region = e.detail.value;
      this.address.receiverProvince = this.region[0];
      this.address.receiverCity = this.region[1];
      this.address.receiverTown = this.region[2];
    },
    changeRadio: function changeRadio() {
      this.checkTip = !this.checkTip;
      if (this.checkTip) {
        this.address.def = '1';
      } else {
        this.address.def = '0';
      }
    },
    //正则验证手机号码
    checkPhone: function checkPhone() {
      var reg = /^1[3-9]\d{9}$/;
      if (!reg.test(this.address.receiverPhone)) {
        wx.showToast({
          title: "手机号格式错误!",
          icon: "none",
          duration: 1000 });

      }
    },
    //删除地址
    del: function del(id) {
      wx.showModal({
        content: '确定要删除该地址吗？',
        success: function success(res) {
          if (res.confirm) {
            //删除成功后提示并且可以跳回地址管理页面
            wx.request({
              url: 'http://172.17.1.203:6067/order/delete/{id}?id=' + id,
              method: 'GET',
              header: {
                token: wx.getStorageSync('token') },

              success: function success(res) {
                console.log(res);
                if (res.statusCode === 200) {
                  wx.showToast({
                    title: '删除成功',
                    icon: 'success',
                    duration: 1000,
                    success: function success() {
                      //跳转到地址管理页面
                      setTimeout(function () {
                        //跳转回地址管理页面
                        wx.navigateBack({
                          delta: 1 });

                      }, 1000);
                    } });

                }
              } });

          } else if (res.cancel) {
            console.log('用户点击取消');
          }
        } });

    },
    //修改数据
    baoCun: function baoCun() {
      //判空
      if (!this.address.receiverName || !this.address.receiverPhone || !this.address.receiverAddress) {
        wx.showToast({
          title: '以上信息不能为空！',
          icon: 'none',
          duration: 1000 });

        return;
      } else {
        //正则验证
        var reg = /^1[3-9]\d{9}$/;
        if (!reg.test(this.address.receiverPhone)) {
          wx.showToast({
            title: "手机号格式错误!",
            icon: "none",
            duration: 1000 });

        } else {
          wx.request({
            url: 'http://172.17.1.203:6067/order/updateAddress',
            method: 'post',
            data: this.address,
            header: {
              token: wx.getStorageSync('token') },

            success: function success(res) {
              console.log(res);
              if (res.statusCode === 200) {
                if (res.data.message == '修改成功') {
                  wx.showToast({
                    title: "修改成功!",
                    icon: "success",
                    duration: 1000,
                    success: function success() {
                      setTimeout(function () {
                        //跳转回地址管理页面
                        wx.navigateBack({
                          delta: 1 });

                      }, 1000);
                    } });

                }
              }
            },
            fail: function fail(err) {
              console.log(err);
            } });

        }
      }
    } } };exports.default = _default;

/***/ }),

/***/ 75:
/*!*************************************************************************************************!*\
  !*** I:/pro/maintainCar2.0/pages/editAddress/editAddress.vue?vue&type=style&index=0&lang=less& ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_2_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_editAddress_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../软件/HBuilderX.1.7.0.20190314.full/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--10-oneOf-1-0!../../../../软件/HBuilderX.1.7.0.20190314.full/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--10-oneOf-1-1!../../../../软件/HBuilderX.1.7.0.20190314.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../软件/HBuilderX.1.7.0.20190314.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-2!../../../../软件/HBuilderX.1.7.0.20190314.full/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--10-oneOf-1-3!../../../../软件/HBuilderX.1.7.0.20190314.full/HBuilderX/plugins/uniapp-cli/node_modules/less-loader/dist/cjs.js??ref--10-oneOf-1-4!../../../../软件/HBuilderX.1.7.0.20190314.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-5!../../../../软件/HBuilderX.1.7.0.20190314.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../软件/HBuilderX.1.7.0.20190314.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./editAddress.vue?vue&type=style&index=0&lang=less& */ 76);
/* harmony import */ var _HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_2_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_editAddress_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_2_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_editAddress_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_2_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_editAddress_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_2_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_editAddress_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_2_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_1_7_0_20190314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_editAddress_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 76:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--10-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--10-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-2!./node_modules/postcss-loader/src??ref--10-oneOf-1-3!./node_modules/less-loader/dist/cjs.js??ref--10-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!I:/pro/maintainCar2.0/pages/editAddress/editAddress.vue?vue&type=style&index=0&lang=less& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[69,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/editAddress/editAddress.js.map