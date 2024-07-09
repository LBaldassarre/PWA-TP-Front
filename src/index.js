import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css';
import "bootstrap-icons/font/bootstrap-icons.css";

import Home from './pages/Home/Home';
import Characters from './pages/Characters/Characters';
import Contact from './pages/Contact/Contact';

async function saveFavorites () {
  const characters_id = localStorage.getItem("characters_id");
  const email = localStorage.getItem("email");
  const body = JSON.stringify({email: email, characters_id: characters_id});

  const rawResponse = await fetch('https://pwa-tp-api.onrender.com/users/characters', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: body
    });
    const content = await rawResponse.json();
  }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/characters' element={<Characters />} onLeave={saveFavorites} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
//por el momento como no sabemos todavia como navegar entre paginas, las cargamos a las 3 y vamos comentando cual estamos queriendo reproducir

//para los estilos, podemos o hacer todo en CSS "puro" , o podemos utilizar las clases de Bootstrap.
//IMPORTANTE, el atributo "class" en React lo reemplazamos por "className"

//los estilos podemos ponerlo en el css de index.css para que aplique a las 3 paginas; en una hoja aparte css por cada componente para que aplique en cada uno de ellos y sus componentes "hijos"