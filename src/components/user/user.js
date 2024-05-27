import { useEffect} from 'react';
import axios from 'axios';
import "./user.css";

export default function User() {
    const dataURL  = 'http://147.45.136.116:8080/users_customers';
    function Console () {
        console.log('ппппп')
    }
    useEffect(() => {
        axios.get(dataURL)
          .then(responce => {
            console.log(responce)
          })
          .catch((error) => {
            console.error('Ошибка здесь!' + error)
          })
      }, []);

  return (
  <div>
    <button onClick={Console}> нажми </button>
  </div>
  );
}
