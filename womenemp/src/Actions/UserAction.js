import WomenEmpApi from '../Api/WomenEmpApi'

export const fetchUser = (username, password)=> 
    async function (dispatch){
        const response = await WomenEmpApi.get(`/UserLogin/${username}/${password}`)
        console.log(response)
        dispatch({type : 'getUser', payload: response.data})
    };