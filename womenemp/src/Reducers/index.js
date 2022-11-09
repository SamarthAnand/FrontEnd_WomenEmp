import { combineReducers } from "redux";
import { selectedTraineeReducer, traineeReducer } from "./TraineeReducers";
import { selectedTrainingCourseReducer, trainingCourseReducer } from "./TrainingCourseReducers";
import { selectedFeedbackReducer, feedbackReducer } from "./FeedbackReducers";
const allReducers = combineReducers({
    allTrainees : traineeReducer,
    trainee : selectedTraineeReducer ,
    allCourses : trainingCourseReducer,
    Course : selectedTrainingCourseReducer,
    allfeedbacks : feedbackReducer,
    feedback : selectedFeedbackReducer
})

export default allReducers;