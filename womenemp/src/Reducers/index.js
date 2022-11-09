import { combineReducers } from "redux";
import { selectedTraineeReducer, traineeReducer } from "./TraineeReducers";
import { userReducer } from "./UserReducer";

const allReducers = combineReducers({
    allTrainees : traineeReducer,
    trainee : selectedTraineeReducer,
    user : userReducer
})

export default allReducers;