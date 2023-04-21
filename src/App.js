import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
// import axios from 'axios';
import {getAuth, signInAnonymously} from 'firebase/auth';
import {getToken, onMessage} from 'firebase/messaging';
import {messaging} from './firebase';
import {ToastContainer, toast} from 'react-toastify';

function App() {
  const login = ()=>{
    signInAnonymously(getAuth()).then(usuario=> console.log(usuario));
  }

  const activarMensajes = async ()=>{
    const token = await getToken(messaging, {
      vapidKey:""
    }).catch(error => console.log(""));

    if(token) console.log("Este es tu token: "+ token);
    if(!token) console.log("No tienes token paps")
  }

  //consultas individuales
  // const API_URL = `http://api.openweathermap.org/data/2.5/weather?q=London%2Cuk&APPID=34515c14f718ee1dc3599ce93715ff3f`;
  // //consultas grupo de ciudades
  // const API_URL2 = 'http://api.openweathermap.org/data/2.5/weather?q=London%2Cuk&APPID=34515c14f718ee1dc3599ce93715ff3f';
  // const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    onMessage(messaging, message =>{
      console.log("Tu mensaje: ", message);
      toast(message.notification.title);
    })
  //}, []);
 
    //consultas individuales
    //axios.get(API_URL)	
    //consultas engrupo de ciudades	
    // axios.get(API_URL2)
    // //consultas individuales
    // //.then(response => setWeatherData(response.data))
    //   //consultas grupo de ciudades
    //   .then(response => setWeatherData(response.data.list))
    //   .catch(error => console.error(error));
  }, []);


  //consultas grupo de ciudades
  return (
    <div>
      <h1>Hola mundo de mierda alabrga todo chingueasumadre el america alv</h1>
      <ToastContainer/>
      <button onClick={login}>Logearse</button>
      <button onClick={activarMensajes}>Gener token</button>
    </div>
  );

  // return (
  //   <>  
  //       <table>
  //         <thead>
  //           <td>ID</td>
  //           <td>Nombre</td>
  //           <td>Temp</td>
  //         </thead>
  //         <tbody>
  //         {weatherData.map(art => {
  //           return (
  //             <>
  //               <tr>
  //                 <td>{art.id}</td>
  //                 <td>{art.name}</td>
  //                 <td>{art.main.temp}</td>
  //               </tr>
  //             </>
  //           );
  //         })}
  //         </tbody>
  //       </table>
  //   </>
      
  // );

  //consultas individuales

  /*return (
    <>  
        <table>
          <thead>
            <td>ID</td>
            <td>Nombre</td>
            <td>Temp</td>
          </thead>
          <tbody>
                <td>{weatherData.id}</td>
                <td>{weatherData.name}</td>
                <td>{weatherData.main.temp}</td>
          </tbody>
        </table>
    </>
      
  );*/
}

export default App;