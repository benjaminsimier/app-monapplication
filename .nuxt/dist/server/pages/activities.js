exports.ids = [2];
exports.modules = {

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/activities.vue?vue&type=template&id=984954ac&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('main',[_vm._ssrNode(((_vm.$fetchState.pending)?("<p>Fetching mountains...</p>"):(_vm.$fetchState.error)?("<p>An error occured :(</p>"):("<div><h1>Nuxt Mountains</h1> "+(_vm._ssrList((_vm.mountains),function(mountain){return ("<ul><li>"+_vm._ssrEscape(_vm._s(mountain.title))+"</li></ul>")}))+" <button>Refresh</button></div>")))])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/activities.vue?vue&type=template&id=984954ac&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/activities.vue?vue&type=script&lang=js&
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
/* harmony default export */ var activitiesvue_type_script_lang_js_ = ({
  data() {
    return {
      mountains: []
    };
  },

  async fetch() {
    this.mountains = await fetch('https://api.nuxtjs.dev/mountains').then(res => res.json());
  }

});
// CONCATENATED MODULE: ./pages/activities.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_activitiesvue_type_script_lang_js_ = (activitiesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/activities.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_activitiesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "d3c16692"
  
)

/* harmony default export */ var activities = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=activities.js.map