import Header from "./components/Header/Header";
import styles from './App.module.scss';
import { useState } from "react";
import Login from "./components/Login/Login";
import ResDashboard from "./components/ResDashboard/ResDashboard";
import User from "./components/User/User";
import Main from "./components/Main/main";
import ResPage from "./components/ResPage/ResPage";

export default function App() {
  const [currentPage, setCurrentPage] = useState('login');

  const renderPage = (page: string) => {
    setCurrentPage(page);
  };

  const goToHomePage = (page:string) => {
    setCurrentPage(page);
  };

  return (
    <div className={styles.App}>
      <Header />
      <Main renderPage={renderPage} currentPage={currentPage} />
      {currentPage === 'login' && <Login onLogin={goToHomePage} />}
      {currentPage === 'home' && <ResDashboard onclick={goToHomePage} />}
      {currentPage === 'givefeedback' && <ResPage/>}
    </div>
  );
}
