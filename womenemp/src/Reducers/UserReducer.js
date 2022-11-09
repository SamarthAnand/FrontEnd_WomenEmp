export const userReducer = (state = {}, action) => {
    switch(action.type){
        case 'getUser' :
            return {...state, ...action.payload}
        default :
            return state
    }
}