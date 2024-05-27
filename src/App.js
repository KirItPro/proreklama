import './App.css';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Promo from './components/promo/promo';
import Rates from './components/rates/rates';
import User from './components/user/user';

function App() {
  return (
    <div className="App">
      <Header/>
      <Promo/>
      <Rates/>
      <Footer/>
      <User/>
    </div>
  );
}

export default App;
