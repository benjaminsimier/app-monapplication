exports.ids = [15];
exports.modules = {

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/places/oceania/_slug.vue?vue&type=template&id=30846569&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('main',[_c('H1',{domProps:{"innerHTML":_vm._s(_vm.post.slug)}}),_vm._ssrNode(" "),_c('H1',{domProps:{"innerHTML":_vm._s(_vm.post.title.rendered)}}),_vm._ssrNode(" <span>"+(_vm._s(_vm.post.content.rendered))+"</span>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/places/oceania/_slug.vue?vue&type=template&id=30846569&

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/places/oceania/_slug.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//

/* harmony default export */ var _slugvue_type_script_lang_js_ = ({
  validate({
    params
  }) {
    return !isNaN(+params.slug);
    console.log(params);
  },

  async asyncData({
    params,
    error
  }) {
    try {
      const {
        data
      } = await external_axios_default.a.get(`https://www.benjaminsimier.com/wp-json/wp/v2/posts/?slug=${+params.slug}`);
      return data;
    } catch (e) {
      error({
        message: 'User not found',
        statusCode: 404
      });
    }
  }

});
// CONCATENATED MODULE: ./pages/places/oceania/_slug.vue?vue&type=script&lang=js&
 /* harmony default export */ var oceania_slugvue_type_script_lang_js_ = (_slugvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/places/oceania/_slug.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  oceania_slugvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "e51f8fd0"
  
)

/* harmony default export */ var _slug = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_slug.js.map