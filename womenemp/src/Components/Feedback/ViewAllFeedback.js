import { useEffect } from "react";
import FeedbackList from './FeedbackList';
import { useSelector, useDispatch } from "react-redux";
import { fetchFeedbacks } from "../../Actions/FeedbackActions"

function ViewAllFeedback() {
    const feedbacks = useSelector((state) => state.allfeedbacks.feedbacks)
    const dispatch = useDispatch()
    useEffect(() => {
    dispatch(fetchFeedbacks())
  }, []);
    return(
        <div>
             <FeedbackList data={feedbacks} title="All Feedbacks" />
        </div>
    );
}

export default ViewAllFeedback;