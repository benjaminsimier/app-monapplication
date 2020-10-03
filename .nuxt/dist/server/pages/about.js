exports.ids = [1];
exports.modules = {

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/about.vue?vue&type=template&id=6b7cd0f9&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('main',[_vm._ssrNode("<div class=\"red\">"+((_vm.seen)?("<p>"+_vm._ssrEscape("\n            Bonjour "+_vm._s(_vm.name)+"!\n       ")+"</p>"):"<!---->")+"</div> <ol>"+(_vm._ssrList((_vm.todos),function(todo){return ("<li>"+_vm._ssrEscape("\n        "+_vm._s(todo.text)+"\n      ")+"</li>")}))+"</ol> <button>Reverse Message</button> <button>Reverse Liste</button> <button>Refresh</button>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/about.vue?vue&type=template&id=6b7cd0f9&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/about.vue?vue&type=script&lang=js&
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
/* harmony default export */ var aboutvue_type_script_lang_js_ = ({
  asyncData(context) {
    // appelé à chaque fois avant le chargement du composant
    // comme son nom l'indique, il peut être asynchrone
    // De plus, l'objet retourné sera ajouté à votre objet `data`
    return {
      name: 'le Monde',
      seen: true,
      todos: [{
        text: 'Learn JavaScript'
      }, {
        text: 'Learn Vue'
      }, {
        text: 'Build something awesome'
      }]
    };
  },

  methods: {
    refresh: function () {
      // document.location.reload(true);
      this.name = this.name.reload(true);
    },
    reverseMessage: function () {
      this.name = this.name.split('').reverse().join('');
    },
    reverseListe: function () {
      this.todos = this.todos.slice().reverse();
    }
  }
});
// CONCATENATED MODULE: ./pages/about.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_aboutvue_type_script_lang_js_ = (aboutvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/about.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_aboutvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "1d0783b3"
  
)

/* harmony default export */ var about = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=about.js.map