import Header from "./components/Header/Header";
import styles from './App.module.scss';
import { useState } from "react";
import Login from "./components/Login/Login";
import ResDashboard from "./components/ResDashboard/ResDashboard";
import User from "./components/User/User";
import Main from "./components/Main/main";
import ResPage from "./components/ResPage/ResPage";
import { RESDATA, RESTAURANTS } from "../resdata";
import {FEEDBACKS} from '../userdata'
import Admin from "./components/Admin/admin";


export default function App() {
  const [currentPage, setCurrentPage] = useState('login');
  const [seldata,setSeldata]=useState<RESDATA[]>(RESTAURANTS)
  const renderPage = (page: string) => {
    setCurrentPage(page);
  };

  const goToHomePage = (page:string) => {
    setCurrentPage(page);
  };


  function handleselected(id:number){
   const selecteddata=RESTAURANTS.filter(f=>f.resid===id);
   console.log(selecteddata);
   setSeldata(selecteddata);
  }
 

  return (
    <div className={styles.App}>
      <Header />
      <Main renderPage={renderPage} currentPage={currentPage} />
      {currentPage === 'login' && <Login onLogin={goToHomePage} />}
      {currentPage === 'home' && <ResDashboard onclick={goToHomePage} handleselected={handleselected}/>}
      {currentPage === 'givefeedback' && <ResPage selecteddata={seldata} feedbackdata={FEEDBACKS}/>}
      {currentPage === 'admin' && <Admin/>}
    </div>
  );
}
