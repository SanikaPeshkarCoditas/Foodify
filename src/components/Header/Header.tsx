import styles from "./Header.module.scss";
import { HeaderProps } from "./Header.types";

export default function Header({}: HeaderProps) {
  return (
    <div className={styles.Header}>
      {<img src="" alt="logo here"></img>&&<h1>Foodify</h1>}
      <div className={styles.LoginBtns}>
        <button>Login as User</button>
        <button>Login as Admin</button>
      </div>
    </div>
  );
}
