import StarRating from "../ui/StarRating/Starrating.tsx";
import styles from "./ResPage.module.scss";
import { ResPageProps } from "./ResPage.types.ts";

const ResPage = ({}: ResPageProps) => {
  return (
    <div className={styles.ResPageMain}>
      <div className={styles.ResPageUpper}>
        <img src="" alt="restaurant Image here"></img>
        <div className={styles.ResPageContent}>
          <h3>Restauarnt Name</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse iusto
            aut alias amet officia eos obcaecati rerum necessitatibus
            consequuntur eligendi.
          </p>

          <div className={styles.FeedbackContainer}>
            <StarRating/>
            <div className={styles.Feedback}>
                <textarea placeholder="feedback"></textarea><button> Give Feedback</button></div>
 
          </div>
        </div>
      </div>

    </div>
  );
};

export default ResPage;
