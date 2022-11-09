import { combineReducers } from "redux";
import { schemesReducer, selectedSchemeReducer } from "./SchemesReducers";
import { selectedTraineeReducer, traineeReducer } from "./TraineeReducers";
import { feedbackReducer, selectedFeedbackReducer } from "./FeedbackReducers";
import { userReducer } from "./UserReducer";

const allReducers = combineReducers({

    allTrainees : traineeReducer,
    trainee : selectedTraineeReducer,
    allSchemes: schemesReducer,
    schemeById: selectedSchemeReducer,
    user : userReducer,
    allfeedbacks : feedbackReducer,
    feedback : selectedFeedbackReducer
})

export default allReducers;