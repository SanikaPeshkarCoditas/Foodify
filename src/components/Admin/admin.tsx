import { RESTAURANTS } from "../../../resdata"
import styles from './admin.module.scss';
import { Users, FEEDBACKS } from "../../../userdata";
import ResList from "../ResList/ResList";



export default function Admin(){


    return(<div className={styles.Admin}>
        ADMIN DASHBOARD
        <ResList  resdata={RESTAURANTS} feedbackdata={FEEDBACKS}/>
    </div>)
}