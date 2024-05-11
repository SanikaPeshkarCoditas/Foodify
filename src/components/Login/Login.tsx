import { useState } from "react";
import styles from "./login.module.scss";
import { useForm } from "react-hook-form";
import { LoginProps } from "./login.types";
import { render } from "sass";



export default function Login(props:LoginProps) {
  const [loginData, setLoginData] = useState<FormData | null>(null);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    setLoginData(data);
    console.log(data);
  };

  return (
    <div className={styles.Login}>
      <pre>{JSON.stringify(loginData, null, 2)}</pre>{" "}
      {/* Changed to JSON.stringify */}
      <form className={styles.Form} onSubmit={handleSubmit(onSubmit)}>
        <h1>Login as User</h1>
        <div className={styles.Field}>
          <label>UserName</label>
          <input placeholder="enter your username" {...register("username")} />
        </div>
        <div className={styles.Field}>
          <label>Email</label>
          <input placeholder="enter your email" {...register("email")} />
        </div>
        <div className={styles.Field}>
          <label>Password</label>
          <input
            type="password"
            placeholder="enter your password"
            name="password"
          />
        </div>

        <div>
          <button
            type="submit"
            onClick={() => props.onLogin('home')}
            className={styles.LoginBtn}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}