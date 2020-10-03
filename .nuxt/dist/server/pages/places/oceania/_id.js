exports.ids = [14];
exports.modules = {

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/places/oceania/_id.vue?vue&type=template&id=dbfedbac&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('main',[_c('H1',{domProps:{"innerHTML":_vm._s(_vm.post.slug)}}),_vm._ssrNode(" "),_c('H1',{domProps:{"innerHTML":_vm._s(_vm.post.title.rendered)}}),_vm._ssrNode(" <span>"+(_vm._s(_vm.post.content.rendered))+"</span>"+_vm._ssrEscape("\n    "+_vm._s(_vm.message)+"\n"))],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/places/oceania/_id.vue?vue&type=template&id=dbfedbac&

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/places/oceania/_id.vue?vue&type=script&lang=js&
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

/* harmony default export */ var _idvue_type_script_lang_js_ = ({
  data({
    req,
    params,
    store
  }) {
    return external_axios_default.a.get('https://www.benjaminsimier.com/wp-json/wp/v2/posts').then(res => {
      return {
        authors: res.data
      };
    });
  },

  data() {
    return {
      post: {},
      error: [],
      message: 'rrrr'
    };
  }

});
// CONCATENATED MODULE: ./pages/places/oceania/_id.vue?vue&type=script&lang=js&
 /* harmony default export */ var oceania_idvue_type_script_lang_js_ = (_idvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/places/oceania/_id.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  oceania_idvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "71489870"
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_id.js.map