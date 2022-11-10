import WomenEmpApi from '../Api/WomenEmpApi'

export const fetchFeedbacks= ()=> 
    async function (dispatch){
        const response = await WomenEmpApi.get("/Feedback")
        // console.log(response)
        dispatch({type : 'getFeedbacks', payload: response.data})
    };
    
export const fetchFeedback = (id)=> 
    async function (dispatch){
        const response = await WomenEmpApi.get(`/Feedback/${id}`)
        dispatch({type : 'getFeedback', payload: response.data})
    };
export const addFeedback = (feedback)=> 
    async function (dispatch){
        const response = await WomenEmpApi.post(`/Feedback`, feedback)
        dispatch({type : 'addFeedback', payload: response.data})
    };
export const fetchFeedbackByUserId = (id) =>
    async function (dispatch){
        const response = await WomenEmpApi.get(`/Feedback/User/${id}`)
        dispatch({type : 'getFeedback', payload: response.data})
    }