webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(16)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(10),
  /* template */
  __webpack_require__(25),
  /* scopeId */
  "data-v-b83ffd16",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(14)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(11),
  /* template */
  __webpack_require__(23),
  /* scopeId */
  "data-v-1f0581d3",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(15)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(8),
  /* template */
  __webpack_require__(24),
  /* scopeId */
  "data-v-ab32a1fa",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(13)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(9),
  /* template */
  __webpack_require__(22),
  /* scopeId */
  "data-v-134b3b30",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 7 */,
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_StyleEditor__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_StyleEditor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_StyleEditor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_ResumeEditor__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_ResumeEditor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_ResumeEditor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_reset_css__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_reset_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__assets_reset_css__);
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
  name: "app",
  components: {
    StyleEditor: __WEBPACK_IMPORTED_MODULE_0__components_StyleEditor___default.a,
    ResumeEditor: __WEBPACK_IMPORTED_MODULE_1__components_ResumeEditor___default.a
  },
  data() {
    return {
      // ????????????
      interval: 4,
      currentStyle: "",
      enableHtml: true,
      fullStyle: [`/*
* ??????????????????C1EYE???
* ????????????????????????
*/

/* ????????????????????????????????? */
* {
  transition: all .1s;
}
/* ?????????????????? */
html {
  color: rgb(222,222,222); background: rgb(0,43,54);
}


/* ???????????? */
.styleEditor {
  padding: .5em;
  border: 1px solid;
  margin: .5em;
  overflow: auto;
  width: 45vw; height: 90vh;
  /* background: rgb(20,20,20); */
}
/* ???????????? */
.token.selector{ color: rgb(133,153,0); }
.token.property{ color: rgb(187,137,0); }
.token.punctuation{ color: yellow; }
.token.function{ color: rgb(42,161,152); }

/* ???3D?????? */
html{
  perspective: 1000px;
}
.styleEditor {
  position: fixed; left: 0; top: 0;
  -webkit-transition: none;
  transition: none;
  -webkit-transform: rotateY(10deg) translateZ(-100px) ;
          transform: rotateY(10deg) translateZ(-100px) ;
}

/* ????????????????????? */
.resumeEditor{
  position: fixed; right: 0; top: 0;
  padding: .5em;  margin: .5em;
  width: 48vw; height: 90vh;
  border: 1px solid;
  background: white; color: #222;
  overflow: auto;
}
/* ??????????????? */
`, `
/*???Markdown???????????????HTML
 *??????HTML????????????
*/
.resumeEditor{
  padding: 2em;
}
.resumeEditor h2{
  display: inline-block;
  border-bottom: 1px solid;
  margin: 1em 0 .5em;
}
.resumeEditor ul,.resumeEditor ol{
  list-style: none;
}
.resumeEditor ul> li::before{
  content: '???';
  margin-right: .5em;
}
.resumeEditor ol {
  counter-reset: section;
}
.resumeEditor ol li::before {
  counter-increment: section;
  content: counters(section, ".") " ";
  margin-right: .5em;
}
.resumeEditor blockquote {
  margin: 1em;
  padding: .5em;
  background: #ddd;
}
`],
      currentMarkdown: "",
      fullMarkdown: `
?????????
----
20??????Java???????????????Java EE ???????????????????????????
????????????????????????????????????????????????????????????????????????????????????????????????
?????????????????????????????????????????????????????????
<br/>


??????
----
* ????????????
* Linux??????

???????????????
----
  - **Java**: SpringBoot???SpringCloud???SpringMVC???MyBatis
  - **??????**: Vue???Bootstrap???jQuery
  - **?????????**: MySQL???SQLServer???Oracle???redis
  - **web ?????????**: Nginx???Tomcat???Apache
  - **OS**: Linux???Windows
  - **Others**: Git???Maven
  - **????????????**: IDEA???VsCode???SublimeText

????????????
----
1. ???

????????????
----
1. [??????SpringBoot + MyBatisPlus?????????????????????](https://github.com/C1EYE/Guli)

??????
----
* [????????????](https://c1eye.github.io/c1eye/)
* [GitHub](https://github.com/C1EYE)

?????????
----
* ??????QQ???**2010782766** | ?????????****
* ?????????????????????**Java????????????**???**Linux**
`
    };
  },
  created() {
    this.makeResume();
  },

  methods: {
    makeResume: async function () {
      await this.progressivelyShowStyle(0);
      await this.progressivelyShowResume();
      await this.progressivelyShowStyle(1);
      await this.showHtml();
      await this.progressivelyShowStyle(2);
    },
    showHtml() {
      return new Promise((resolve, reject) => {
        this.enableHtml = true;
        resolve();
      });
    },
    progressivelyShowStyle(n) {
      return new Promise((resolve, reject) => {
        let interval = this.interval;
        let showStyle = async function () {
          let style = this.fullStyle[n];
          if (!style) {
            return;
          }
          // ????????? n ??? style ???????????????
          let length = this.fullStyle.filter((_, index) => index <= n).map(item => item.length).reduce((p, c) => p + c, 0);
          let prefixLength = length - style.length;
          if (this.currentStyle.length < length) {
            let l = this.currentStyle.length - prefixLength;
            let char = style.substring(l, l + 1) || " ";
            this.currentStyle += char;
            if (style.substring(l - 1, l) === "\n" && this.$refs.styleEditor) {
              this.$nextTick(() => {
                this.$refs.styleEditor.goBottom();
              });
            }
            setTimeout(showStyle, interval);
          } else {
            resolve();
          }
        }.bind(this);
        showStyle();
      });
    },
    progressivelyShowResume() {
      return new Promise((resolve, reject) => {
        let length = this.fullMarkdown.length;
        let interval = this.interval;
        let showResume = () => {
          if (this.currentMarkdown.length < length) {
            this.currentMarkdown = this.fullMarkdown.substring(0, this.currentMarkdown.length + 1);
            let lastChar = this.currentMarkdown[this.currentMarkdown.length - 1];
            let prevChar = this.currentMarkdown[this.currentMarkdown.length - 2];
            if (prevChar === "\n" && this.$refs.resumeEditor) {
              this.$nextTick(() => this.$refs.resumeEditor.goBottom());
            }
            setTimeout(showResume, interval);
          } else {
            resolve();
          }
        };
        showResume();
      });
    }
  }
});

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_StyleEditor__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_StyleEditor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_StyleEditor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_ResumeEditor__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_ResumeEditor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_ResumeEditor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_reset_css__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_reset_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__assets_reset_css__);
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  name: "app",
  components: {
    StyleEditor: __WEBPACK_IMPORTED_MODULE_0__components_StyleEditor___default.a,
    ResumeEditor: __WEBPACK_IMPORTED_MODULE_1__components_ResumeEditor___default.a
  },
  data() {
    return {
      interval: 3,
      currentStyle: "",
      enableHtml: false,
      fullStyle: [`/*
* ??????????????????C1EYE???
* ????????????????????????
*/

/* ??????????????????????????????????????? */
* {
  transition: all .1s;
}
/* ????????????????????????????????????????????? */
html {
  color: rgb(222,222,222);
  background: rgb(0,43,54);
}
/* ???????????????????????? */
.styleEditor {
  padding: .5em;
  border: 1px solid;
  overflow: auto;
  width: 90vw;
  margin: 2.5vh 5vw;
  height: 90vh;
}
/* ????????? */
.styleEditor {
  height: 45vh;
}
/* ???????????? */
.token.selector{
  color: rgb(133,153,0);
}
.token.property{
  color: rgb(187,137,0);
}
.token.punctuation{
  color: yellow;
}
.token.function{
  color: rgb(42,161,152);
}
/* ?????? 3D ????????? */
html{
  perspective: 1000px;
}
.styleEditor {
  position: fixed; left: 0; top: 0;
  transform: rotateX(-10deg) translateZ(-50px) ;
}
/* ?????????????????????????????????????????? */
.resumeEditor{
  position: fixed;
  top: 50%; left: 0;
  padding: .5em;  margin: 2.5vh;
  width: 95vw; height: 45vh;
  border: 1px solid;
  background: white; color: #222;
  overflow: auto;
}
/* ??????????????? */
`, `
.resumeEditor{
  padding: 2em;
}
.resumeEditor h2{
  display: inline-block;
  border-bottom: 1px solid;
  margin: 1em 0 .5em;
}
.resumeEditor ul,.resumeEditor ol{
  list-style: none;
}
.resumeEditor ul> li::before{
  content: '???';
  margin-right: .5em;
}
.resumeEditor ol {
  counter-reset: section;
}
.resumeEditor ol li::before {
  counter-increment: section;
  content: counters(section, ".") " ";
  margin-right: .5em;
}
.resumeEditor blockquote {
  margin: 1em;
  padding: .5em;
  background: #ddd;
}
`],
      currentMarkdown: "",
      fullMarkdown: `
?????????
----
20??????Java???????????????Java EE ???????????????????????????
????????????????????????????????????????????????????????????????????????????????????????????????
?????????????????????????????????????????????????????????
<br/>


??????
----
* ????????????
* Linux??????

???????????????
----
  - **Java**: SpringBoot???SpringCloud???SpringMVC???MyBatis
  - **??????**: Vue???Bootstrap???jQuery
  - **?????????**: MySQL???SQLServer???Oracle???redis
  - **web ?????????**: Nginx???Tomcat???Apache
  - **OS**: Linux???Windows
  - **Others**: Git???Maven
  - **????????????**: IDEA???VsCode???SublimeText

????????????
----
1. ???

????????????
----
1. [??????SpringBoot + MyBatisPlus?????????????????????](https://github.com/C1EYE/Guli)

??????
----
* [????????????](https://c1eye.github.io/c1eye/)
* [GitHub](https://github.com/C1EYE)

?????????
----
* ??????QQ???**2010782766** | ?????????****
* ?????????????????????**Java????????????**???**Linux**
`
    };
  },
  created() {
    this.makeResume();
  },
  methods: {
    makeResume: async function () {
      await this.progressivelyShowStyle(0);
      await this.progressivelyShowResume();
      await this.progressivelyShowStyle(1);
      await this.showHtml();
      await this.progressivelyShowStyle(2);
    },
    showHtml: function () {
      return new Promise((resolve, reject) => {
        this.enableHtml = true;
        this.$nextTick(() => {
          this.$refs.resumeEditor.goTop();
        });
        resolve();
      });
    },
    progressivelyShowStyle(n) {
      return new Promise((resolve, reject) => {
        let interval = this.interval;
        let showStyle = async function () {
          let style = this.fullStyle[n];
          if (!style) {
            return;
          }
          // ????????? n ??? style ???????????????
          let length = this.fullStyle.filter((_, index) => index <= n).map(item => item.length).reduce((p, c) => p + c, 0);
          let prefixLength = length - style.length;
          if (this.currentStyle.length < length) {
            let l = this.currentStyle.length - prefixLength;
            let char = style.substring(l, l + 1) || " ";
            this.currentStyle += char;
            if (style.substring(l - 1, l) === "\n" && this.$refs.styleEditor) {
              this.$nextTick(() => {
                this.$refs.styleEditor.goBottom();
              });
            }
            setTimeout(showStyle, interval);
          } else {
            resolve();
          }
        }.bind(this);
        showStyle();
      });
    },
    progressivelyShowResume() {
      return new Promise((resolve, reject) => {
        let length = this.fullMarkdown.length;
        let interval = this.interval;
        let showResume = () => {
          if (this.currentMarkdown.length < length) {
            this.currentMarkdown = this.fullMarkdown.substring(0, this.currentMarkdown.length + 1);
            let lastChar = this.currentMarkdown[this.currentMarkdown.length - 1];
            let prevChar = this.currentMarkdown[this.currentMarkdown.length - 2];
            if (prevChar === "\n" && this.$refs.resumeEditor) {
              this.$nextTick(() => this.$refs.resumeEditor.goBottom());
            }
            setTimeout(showResume, interval);
          } else {
            resolve();
          }
        };
        showResume();
      });
    }
  }
});

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_marked__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_marked___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_marked__);
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["markdown", "enableHtml"],
  name: "ResumeEditor",
  computed: {
    result: function () {
      const renderer = new __WEBPACK_IMPORTED_MODULE_0_marked___default.a.Renderer();
      //????????????
      __WEBPACK_IMPORTED_MODULE_0_marked___default.a.setOptions({
        renderer: renderer,
        gfm: true, //?????? Git Hub?????????markdown.
        tables: true, //?????????????????????????????????????????? gfm ???true???
        breaks: true, //???????????????????????????????????? gfm ???true???
        pedantic: false, //???????????????????????????????????????????????????????????????false???
        sanitize: false, //??????????????????????????????????????????????????????????????????html??????????????????
        smartLists: true, //???????????????markdown??????????????????
        smartypants: false //???????????????????????????
      });
      //https://github.com/markedjs/marked/issues/655#issuecomment-383226346
      const linkRenderer = renderer.link;
      renderer.link = (href, title, text) => {
        const html = linkRenderer.call(renderer, href, title, text);
        return html.replace(/^<a /, '<a target="_blank" rel="nofollow" ');
      };

      return this.enableHtml ? __WEBPACK_IMPORTED_MODULE_0_marked___default()(this.markdown, { renderer }) : this.markdown;
    }
  },
  methods: {
    goBottom: function () {
      this.$refs.container.scrollTop = 100000;
    },
    goTop: function () {
      this.$refs.container.scrollTop = 0;
    }
  }
});

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prismjs__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prismjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_prismjs__);
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Editor",
  props: ["code"],
  computed: {
    highlightedCode: function () {
      return __WEBPACK_IMPORTED_MODULE_0_prismjs___default.a.highlight(this.code, __WEBPACK_IMPORTED_MODULE_0_prismjs___default.a.languages.css);
    },
    codeInStyleTag: function () {
      return `<style>${this.code}</style>`;
    }
  },
  methods: {
    goBottom() {
      this.$refs.container.scrollTop = 100000;
    }
  }
});

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__App__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Mobile__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Mobile___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Mobile__);




var width = document.documentElement.clientWidth;
/* eslint-disable no-new */
new __WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */]({
  el: '#app',
  render: h => h(width > 500 ? __WEBPACK_IMPORTED_MODULE_1__App___default.a : __WEBPACK_IMPORTED_MODULE_2__Mobile___default.a)
});

/***/ }),
/* 13 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 14 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 15 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 16 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "app"
    }
  }, [_c('StyleEditor', {
    ref: "styleEditor",
    attrs: {
      "code": _vm.currentStyle
    }
  }), _vm._v(" "), _c('ResumeEditor', {
    ref: "resumeEditor",
    attrs: {
      "markdown": _vm.currentMarkdown,
      "enableHtml": _vm.enableHtml
    }
  })], 1)
},staticRenderFns: []}

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    ref: "container",
    staticClass: "styleEditor"
  }, [_c('div', {
    staticClass: "code",
    domProps: {
      "innerHTML": _vm._s(_vm.codeInStyleTag)
    }
  }), _vm._v(" "), _c('pre', {
    domProps: {
      "innerHTML": _vm._s(_vm.highlightedCode)
    }
  })])
},staticRenderFns: []}

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "app"
    }
  }, [_c('StyleEditor', {
    ref: "styleEditor",
    attrs: {
      "code": _vm.currentStyle
    }
  }), _vm._v(" "), _c('ResumeEditor', {
    ref: "resumeEditor",
    attrs: {
      "markdown": _vm.currentMarkdown,
      "enableHtml": _vm.enableHtml
    }
  })], 1)
},staticRenderFns: []}

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    ref: "container",
    staticClass: "resumeEditor",
    class: {
      htmlMode: _vm.enableHtml
    }
  }, [(_vm.enableHtml) ? _c('div', {
    domProps: {
      "innerHTML": _vm._s(_vm.result)
    }
  }) : _c('pre', [_vm._v(_vm._s(_vm.result))])])
},staticRenderFns: []}

/***/ })
],[12]);
//# sourceMappingURL=app.438bb89cc14c7d91407d.js.map