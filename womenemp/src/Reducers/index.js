import { combineReducers } from "redux";
import { schemesReducer, selectedSchemeReducer } from "./SchemesReducers";
import { selectedTraineeReducer, traineeReducer } from "./TraineeReducers";

const allReducers = combineReducers({
    allTrainees: traineeReducer,
    trainee: selectedTraineeReducer,
    allSchemes: schemesReducer,
    schemeById: selectedSchemeReducer
})

export default allReducers;