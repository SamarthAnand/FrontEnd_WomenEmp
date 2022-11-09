import { useParams } from "react-router-dom";
import useFetch from "./Usefetch";

const FeedbackDetails = () => {
    const {id} = useParams();
    const {data : feedback, error} = useFetch('http://localhost:8000/data/'+ id);
    return (
        <div>
            {error && <div> {error}</div> }
            { feedback && ( <article>
                <h2>Feedback Details -{id}</h2>
            <p>Scheme Rating : {feedback.schemeRating}</p>
            <p>Training Rating : {feedback.trainingRating}</p>
            <p>Overall Rating : {feedback.overallRating}</p>
            <p>Comments: {feedback.Comment}</p>
            </article>
        )}
        </div>
     );
}
 
export default FeedbackDetails;
