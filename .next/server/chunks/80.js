"use strict";
exports.id = 80;
exports.ids = [80];
exports.modules = {

/***/ 7080:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ CreateFunction)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_Question__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6774);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);






function CreateFunction({ givenQuestion  }) {
    const { 0: question , 1: setQuestion  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(givenQuestion ? givenQuestion : {});
    const handleChange = (e)=>{
        const key = e.target.name;
        const value = e.target.value;
        setQuestion({
            ...question,
            ...{
                [key]: value
            }
        });
        console.log(question);
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        console.log(question);
        //Wenn QuestionGiven = null, wird frage neu erstellt:
        if (givenQuestion == null) {
            try {
                console.log("Senden geklickt");
                _lib_Question__WEBPACK_IMPORTED_MODULE_2__/* ["default"].create */ .Z.create(question);
                console.log("Frage erstellt");
            } catch  {
                console.log("Frage erstellen fehlgeschlagen");
            }
        } else {
            try {
                _lib_Question__WEBPACK_IMPORTED_MODULE_2__/* ["default"].update */ .Z.update(question);
                console.log("Frage geupdated");
            } catch  {
                console.log("Update fehlgeschlagen");
            }
        }
        next_router__WEBPACK_IMPORTED_MODULE_3__.router.push("/allQuestions");
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            children: "Frage:"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            onChange: handleChange,
                            type: "text",
                            name: "question",
                            value: question ? question.question : "",
                            placeholder: "Wie hoch ist der Mt. Everest?"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            children: "Richtige Antwort:"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            onChange: handleChange,
                            type: "text",
                            value: question ? question.rightAnswer : "",
                            name: "rightAnswer"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            children: "Falsche Antwort 1:"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            onChange: handleChange,
                            type: "text",
                            value: question ? question.wrongAnswer1 : "",
                            name: "wrongAnswer1"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            children: "Falsche Antwort 2:"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            onChange: handleChange,
                            type: "text",
                            value: question ? question.wrongAnswer2 : "",
                            name: "wrongAnswer2"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            children: "Falsche Antwort 3:"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            onChange: handleChange,
                            type: "text",
                            value: question ? question.wrongAnswer3 : "",
                            name: "wrongAnswer3"
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    class: "btn-primary",
                    onClick: handleSubmit,
                    children: "Frage absenden"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                    href: `/allQuestions`,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        class: "btn-danger",
                        children: "Abbrechen"
                    })
                })
            ]
        })
    });
};


/***/ })

};
;