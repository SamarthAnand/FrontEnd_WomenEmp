import { combineReducers } from "redux";
import { schemesReducer, selectedSchemeReducer } from "./SchemesReducers";
import { selectedTraineeReducer, traineeReducer } from "./TraineeReducers";
import { feedbackReducer, selectedFeedbackReducer } from "./FeedbackReducers";
import { userReducer } from "./UserReducer";
import { selectedTrainingCourseReducer, trainingCourseReducer } from "./TrainingCourseReducers";

const allReducers = combineReducers({

    allTrainees : traineeReducer,
    trainee : selectedTraineeReducer,
    allSchemes: schemesReducer,
    schemeById: selectedSchemeReducer,
    user : userReducer,
    allfeedbacks : feedbackReducer,
    feedback : selectedFeedbackReducer,
    allCourses : trainingCourseReducer,
    Course : selectedTrainingCourseReducer
})

export default allReducers;