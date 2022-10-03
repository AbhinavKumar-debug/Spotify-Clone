import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './Component/Login';
import { getTokenFromUrl } from './Component/spotify';
import SpotifyWebApi from "spotify-web-api-js";
import Player from './Component/Player';

const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash="";

    const _token = hash.access_token;
    if(_token){
      setToken(_token)

      spotify.setAccessToken(_token);

      spotify.getMe().then(user => {
        console.log("user ",user);
      })
    }

    // console.log("I have a token :)",_token);
  },[]);

  return (
    <div className="app">
      {
        token ? (
          <Player />
        ): (
          <Login />
        )
      }
    </div>
  );
}

export default App;
