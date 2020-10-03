exports.ids = [16];
exports.modules = {

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/places/oceania/index.vue?vue&type=template&id=3d56041a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<h1>Blog posts</h1> "),(_vm.$fetchState.pending)?_vm._ssrNode("<p>","</p>",[_vm._ssrNode("Fetching posts...")],2):(_vm.$fetchState.error)?_vm._ssrNode(("<p>"+_vm._ssrEscape("\n    Error while fetching posts: "+_vm._s(_vm.$fetchState.error.message)+"\n  ")+"</p>")):_vm._ssrNode("<ul>","</ul>",_vm._l((_vm.posts.slice(0, _vm.counter)),function(post){return _vm._ssrNode("<li>","</li>",[_c('n-link',{attrs:{"to":("/posts/" + (post.id))}},[_vm._v(_vm._s(post.title.rendered))])],1)}),0),_vm._ssrNode(" "+((_vm.counter != _vm.posts.length)?("<div><button>Add 1</button></div>"):("<div>\n      fgdfg\n  </div>"))+" <br>"+_vm._ssrEscape("\n  "+_vm._s(_vm.posts.length)+"\n  ")+"<br>"+_vm._ssrEscape("\n  "+_vm._s(_vm.counter)+"\n"))],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/places/oceania/index.vue?vue&type=template&id=3d56041a&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/places/oceania/index.vue?vue&type=script&lang=js&
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
/* harmony default export */ var oceaniavue_type_script_lang_js_ = ({
  async fetch() {
    this.posts = await this.$http.$get( // 'https://jsonplaceholder.typicode.com/posts'
    // 'http://localhost/sites/ag_sophrologie/wp-json/wp/v2/posts'
    this.$axios.defaults.baseURL + '/posts');
  },

  fetchOnServer: false,

  data() {
    return {
      posts: [],
      counter: 1
    };
  }

});
// CONCATENATED MODULE: ./pages/places/oceania/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var places_oceaniavue_type_script_lang_js_ = (oceaniavue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/places/oceania/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  places_oceaniavue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "e1b24d40"
  
)

/* harmony default export */ var oceania = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map