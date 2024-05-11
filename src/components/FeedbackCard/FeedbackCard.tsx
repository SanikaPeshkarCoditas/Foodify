import styles from "./FeedbackCard.module.scss"; 
import { FeedbackCardProps } from "./FeedbackCard.types.ts" 
import StarRating from "../ui/StarRating/Starrating.tsx";
 
const FeedbackCard = ({}: FeedbackCardProps) => { 

    return <div className={styles.FeedbackCard}>
        <img src="" alt="restaurnat img here
    "></img>
        <h3>Restaurant Name</h3>
        <h4>Pune, Maharashtra</h4>
        <div>Rating <StarRating/></div>
         <p>Feedback Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis, nostrum.</p>
   
    </div>
} 
 
export default FeedbackCard 
