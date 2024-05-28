import { useEffect, useState} from 'react';
import axios from 'axios';
import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Promo from "./components/promo/promo";
import Rates from "./components/rates/rates";
import User from "./components/user/user";
import News from "./components/news/news";
import Support from "./components/support/support";
import Registration from './components/registration/registration';

import "./App.css";
function App() {
  const dataURL  = 'http://147.45.136.116:8080/users_customers';
  const [dataUser, setDataUser] = useState(null);

  useEffect(() => {
    axios.get(dataURL)
      .then(responce => {
        setDataUser(responce.data[45])
      })
      .catch((error) => {
        console.error('Ошибка здесь!' + error)
      })
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/proreklama' element={<><Promo /><Rates /></>}/>
        <Route path="/user" element={<User dataUsers={dataUser}/>}/>
        <Route path="/news" element={<News/>}/>
        <Route path="/support" element={<Support/>}/>
        <Route path="/registration" element={<Registration/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
