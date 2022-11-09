import WomenEmpApi from '../Api/WomenEmpApi'

export const fetchTrainees = ()=> 
    async function (dispatch){
        const response = await WomenEmpApi.get("/Trainee")
        // console.log(response)
        dispatch({type : 'getTrainees', payload: response.data})
    };
    
export const fetchTrainee = (id)=> 
    async function (dispatch){
        const response = await WomenEmpApi.get(`/Trainee/${id}`)
        dispatch({type : 'getTrainee', payload: response.data})
    };
export const addTrainee = (trainee)=> 
    async function (dispatch){
        const response = await WomenEmpApi.post(`/Trainee`, trainee)
        dispatch({type : 'addTrainee', payload: response.data})
    };