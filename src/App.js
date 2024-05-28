// import { useEffect} from 'react';
// import axios from 'axios';
import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Promo from "./components/promo/promo";
import Rates from "./components/rates/rates";
import User from "./components/user/user";
import News from "./components/news/news";
import Support from "./components/support/support";
import Modal from "./components/modal/modal";

import "./App.css";
function App() {
  // const dataURL  = 'http://147.45.136.116:8080/users_customers';
  // useEffect(() => {
  //   axios.get(dataURL)
  //     .then(responce => {
  //       console.log(responce)
  //     })
  //     .catch((error) => {
  //       console.error('Ошибка здесь!' + error)
  //     })
  // }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/proreklama' element={<><Promo /><Rates /></>}/>
        <Route path="/user" element={<User />}/>
        <Route path="/news" element={<News/>}/>
        <Route path="/support" element={<Support/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
