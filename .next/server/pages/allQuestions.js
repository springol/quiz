"use strict";
(() => {
var exports = {};
exports.id = 921;
exports.ids = [921];
exports.modules = {

/***/ 9708:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ AllQuestionsPage),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./lib/Question.js + 1 modules
var Question = __webpack_require__(6774);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/ShowQuestions.js





function ShowQuestions({ questions  }) {
    const { 0: deleted , 1: setDeleted  } = (0,external_react_.useState)("");
    const handleDelete = (e)=>{
        e.preventDefault();
        console.log(e.target.name);
        let id = e.target.name.toString();
        console.log("id: " + id);
        Question/* default.delete */.Z["delete"](id);
        //neu rendern mit aufruf des UseState
        setDeleted(true);
        router_.router.push("/allQuestions");
    };
    const handleUpdate = (e)=>{
        e.preventDefault();
        console.log(e.target.name);
        let id = e.target.name;
        try {
            router_.router.push("/edit/" + id);
        } catch  {
            console.log("Router push fehlgeschlagen");
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("table", {
            class: "table table-striped table-success table-hover",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("thead", {
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                children: "Frage"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                children: "Richtige Antwort"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                children: "Falsche Antwort"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                children: "Falsche Antwort"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                children: "Falsche Antwort"
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("tbody", {
                    children: questions.map((question)=>{
                        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                    children: question.question
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                    children: question.rightAnswer
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                    children: question.wrongAnswer1
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                    children: question.wrongAnswer2
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                    children: question.wrongAnswer3
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        class: "btn-primary",
                                        onClick: handleUpdate,
                                        name: question.id,
                                        children: "\xc4ndern"
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("td", {
                                    children: [
                                        " ",
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: `/edit/${question.id}`,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                class: "btn-danger",
                                                onClick: handleDelete,
                                                name: question.id,
                                                children: "L\xf6schen"
                                            })
                                        })
                                    ]
                                })
                            ]
                        }, question.id);
                    })
                })
            ]
        })
    });
};

;// CONCATENATED MODULE: ./pages/allQuestions.js



function AllQuestionsPage({ questions  }) {
    return questions && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        class: "container",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                children: "Alle Fragen"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(ShowQuestions, {
                questions: questions
            })
        ]
    });
};
async function getStaticProps() {
    let questions;
    try {
        questions = await Question/* default.getAllQuestions */.Z.getAllQuestions();
        console.log("Fetch erfolgreich");
    } catch (e) {
        questions = null;
        console.log("fetch nicht erfolgreich");
    }
    return {
        props: {
            questions
        },
        revalidate: 30
    };
}


/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [952,664,774], () => (__webpack_exec__(9708)));
module.exports = __webpack_exports__;

})();