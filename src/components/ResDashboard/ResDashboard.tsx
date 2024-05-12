import ResCard from "../ResCard/ResCard.tsx";
import styles from "./ResDashboard.module.scss";
import { ResDashboardProps } from "./ResDashboard.types.ts";
import { RESTAURANTS } from "../../../resdata.ts";

const ResDashboard = ({onclick,handleselected}: ResDashboardProps) => {
  return (
    <div className={styles.ResDashboard}>
      <h2>Best Restaurants In the town </h2>
      <div className={styles.dashboardMain} >
        {RESTAURANTS.map((restaurant: any) => {
          return (
            <ResCard
              resid={restaurant.resid}
              resname={restaurant.resname}
              resimg={restaurant.resimg}
              resdesc={restaurant.resdesc}
              feedback={[]}
              handleselected={handleselected}
              handleclick={onclick}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ResDashboard;
