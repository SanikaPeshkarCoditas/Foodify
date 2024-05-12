import styles from "./ResList.module.scss";
import { ResListProps } from "./ResList.types.ts";

const ResList = ({ resdata, feedbackdata }: ResListProps) => {
  return (
    <div className={styles.ResList}>
      {resdata.map((res) => (
        <div key={res.resid} className={styles.ResEach}>
          <h2>{res.resname}</h2>
          <ul className={styles.Feedbacklist}>
            {feedbackdata
              .filter((feedback) => feedback.resid === res.resid)
              .map((feedback) => (
                <li key={feedback.userid} className={styles.FeedbackEach}>{feedback.feedbackText}</li>
              ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ResList;
