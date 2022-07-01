"use strict";
exports.id = 774;
exports.ids = [774];
exports.modules = {

/***/ 6774:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Question)
});

;// CONCATENATED MODULE: ./lib/index.js
function createFetchFunction(method) {
    return async (url, params)=>{
        const _params = {
            method,
            headers: {
                "content-type": "application/json"
            },
            ...params
        };
        if (_params.body !== undefined) {
            _params.body = JSON.stringify(_params.body);
        }
        //      if (_params.token !== undefined) {
        //          _params.headers["Authorization"] = `Bearer ${_params.token}`
        //      }
        const response = await fetch(url, _params);
        //  console.log(response)
        if (!response.ok) {
            const error = new Error("Request failed with status " + response.status);
            error.response = response;
            console.log(error);
            throw error;
        }
        let data = response;
        try {
            data = await response.json();
            console.log(data);
        } catch (e) {}
        return data;
    };
}
const getJSON = createFetchFunction("GET");
const putJSON = createFetchFunction("PUT");
const postJSON = createFetchFunction("POST");
const deleteJSON = createFetchFunction("DELETE");

;// CONCATENATED MODULE: ./lib/Question.js

const GET_RANDOM_URL = "https://javascript.azurewebsites.net/api/HttpTriggerTest";
const GET_QUESTION_BY_ID = "https://javascript.azurewebsites.net/api/GetbyID?id=";
const POST_URL = "https://javascript.azurewebsites.net/api/PostQuestion?code=lIIMQnQ3kfe7UoWziNeZYAWwkwSundakVGNWu3ByFHkRAzFuwMtDfg==";
const GET_ALL_URL = "https://javascript.azurewebsites.net/api/HttpTrigger2";
const DELETE_URL = "https://javascript.azurewebsites.net/api/delete2?id=";
const UPDATE_URL = "https://javascript.azurewebsites.net/api/UpdateItem";
const QuestionAPI = {
    getRandomQuestion () {
        return getJSON(GET_RANDOM_URL);
    },
    getAllQuestions () {
        return getJSON(GET_ALL_URL);
    },
    getQuestionById (id) {
        return getJSON(`${GET_QUESTION_BY_ID}${id}`);
    },
    create (question) {
        const data = postJSON(POST_URL, {
            body: question
        });
        return data;
    },
    update (question) {
        const data = postJSON(UPDATE_URL, {
            body: question
        });
        return data;
    },
    delete (id) {
        const data = getJSON(`${DELETE_URL}${id}`);
        return data;
    }
};
/* harmony default export */ const Question = (QuestionAPI);


/***/ })

};
;