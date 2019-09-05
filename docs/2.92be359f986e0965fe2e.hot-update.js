webpackHotUpdate(2,{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/views/resume/resumeedit.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--1!./node_modules/vue-loader/lib??vue-loader-options!./src/views/resume/resumeedit.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_template_template1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @components/template/template1 */ \"./src/components/template/template1.vue\");\n/* harmony import */ var _components_template_template2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/template/template2 */ \"./src/components/template/template2.vue\");\n/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @utils/utils */ \"./src/utils/utils.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'resumeedit',\n  props: [],\n  data: function data() {\n    return {};\n  },\n  methods: {\n    exportTemplate: function exportTemplate(id, fileName) {\n      Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__[\"exportPdf\"])(id, fileName);\n    }\n  },\n  computed: {\n    currentTabComponent: function currentTabComponent() {\n      console.log(this.$route.params, '获取路由参数');\n      return 'resumeTemplate' + this.$route.params.id;\n    }\n  },\n  components: {\n    'resumeTemplate1': _components_template_template1__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n  }\n});\n\n//# sourceURL=webpack:///./src/views/resume/resumeedit.vue?./node_modules/babel-loader/lib??ref--1!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/views/resume/resumeedit.vue?vue&type=template&id=396350a2&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/views/resume/resumeedit.vue?vue&type=template&id=396350a2& ***!
  \******************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    [\n      _c(\n        \"div\",\n        { staticClass: \"toolbar\" },\n        [\n          _c(\"a-button\", { attrs: { type: \"default\" } }, [_vm._v(\"回到首页\")]),\n          _vm._v(\" \"),\n          _c(\n            \"a-button\",\n            {\n              attrs: { type: \"primary\" },\n              on: {\n                click: function($event) {\n                  return _vm.exportTemplate(\"template1\", \"我的模版\")\n                }\n              }\n            },\n            [_vm._v(\"导出模版\")]\n          )\n        ],\n        1\n      ),\n      _vm._v(\" \"),\n      _c(_vm.currentTabComponent, { tag: \"component\" })\n    ],\n    1\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/views/resume/resumeedit.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

})