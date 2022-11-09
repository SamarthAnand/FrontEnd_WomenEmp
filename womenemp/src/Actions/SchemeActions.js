import WomenEmpApi from '../Api/WomenEmpApi'

export const fetchSchemes = () =>
    async function (dispatch) {
        const response = await WomenEmpApi.get("/Schemes")
        console.log(response)
        dispatch({ type: 'getAllSchemes', payload: response.data })
    };

export const fetchSchemesById = (id) =>
    async function (dispatch) {
        const response = await WomenEmpApi.get(`/Schemes/${id}`)
        dispatch({ type: 'getScheme', payload: response.data })
    };
export const addSchemes = (scheme) =>
    async function (dispatch) {
        const response = await WomenEmpApi.post(`/Schemes`, scheme)
        dispatch({ type: 'addScheme', payload: response.data })
    };