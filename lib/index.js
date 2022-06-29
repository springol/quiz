function createFetchFunction(method) {
    return async (url, params) => {   
        const _params = {
            method,
            headers: {
                "content-type": "application/json"
            },
            ...params
        }

        if (_params.body !== undefined) {
            _params.body = JSON.stringify(_params.body) 
        }

  //      if (_params.token !== undefined) {
  //          _params.headers["Authorization"] = `Bearer ${_params.token}`
  //      }

        const response = await fetch(url, _params)
      //  console.log(response)


        if (!response.ok) {
            const error = new Error("Request failed with status " + response.status)
            error.response = response
            console.log(error)
            throw error
        }

        let data = response;
        try{
            data = await response.json()
            console.log(data)
        }catch(e) {

        }

        
        return data
    }
}

export const getJSON = createFetchFunction("GET")
export const putJSON = createFetchFunction("PUT")
export const postJSON = createFetchFunction("POST")
export const deleteJSON = createFetchFunction("DELETE")
export const BASE_URL = "http://172.16.2.143:8080"
//export const BASE_URL = "http://localhost:8080"




