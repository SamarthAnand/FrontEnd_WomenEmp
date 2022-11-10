import WomenEmpApi from '../Api/WomenEmpApi'

export const fetchFeedbacks= ()=> 
    async function (dispatch){
        const response = await WomenEmpApi.get("/Feedback")
        // console.log(response)
        dispatch({type : 'getFeedbacks', payload: response.data})
    };
export const fetchFeedbackByUserId = (id)=> 
    async function (dispatch){
        const response = await WomenEmpApi.get(`/Feedback/${id}`)
        dispatch({type : 'getFeedbacks', payload: response.data})
    };
export const addFeedback = (feedback)=> 
    async function (dispatch){
        const response = await WomenEmpApi.post(`/Feedback`, feedback)
        dispatch({type : 'addFeedback', payload: response.data})
    };
    export const UpdateFeedback = (feedback)=> 
    async function (dispatch){
        const response = await WomenEmpApi.put(`/Feedback`, feedback)
        dispatch({type : 'addFeedback', payload: response.data})
    };
    
export const fetchfeedbacksByScheme= (schemeName)=> 
async function (dispatch){
    const response = await WomenEmpApi.get(`/Feedback/Scheme/${schemeName}`)
    dispatch({type : 'getFeedbacks', payload: response.data})
};
export const fetchfeedbacksByTraining= (courseName)=> 
async function (dispatch){
    const response = await WomenEmpApi.get(`/Feedback/TrainingCourse/${courseName}`)
    dispatch({type : 'getFeedbacks', payload: response.data})
};