import FeedbackCard from "../FeedbackCard/FeedbackCard.tsx";
import styles from "./User.module.scss"; 
import { UserProps } from "./User.types.ts" 
 
const User = ({}: UserProps) => { 

    return <div className={styles.User}>
        <div className={styles.Profile}>
            <img src="" alt="profile image here"></img>
        </div>
        <div className={styles.UserInfo}>
            <h3>UserName</h3>
            <p>From : Pune Maharashtra</p>
        </div>
        <div className={styles.Feedback}>
            <FeedbackCard  id={1} rating={3} feedback="feedack"/>
            <FeedbackCard id={1} rating={3} feedback="feedack"/>
            <FeedbackCard id={1} rating={3} feedback="feedack"/>
        </div>
    </div>
} 
 
export default User 
