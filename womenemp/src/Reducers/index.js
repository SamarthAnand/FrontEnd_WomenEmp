import { combineReducers } from "redux";
import { selectedTraineeReducer, traineeReducer } from "./TraineeReducers";

const allReducers = combineReducers({
    allTrainees : traineeReducer,
    trainee : selectedTraineeReducer
})

export default allReducers;