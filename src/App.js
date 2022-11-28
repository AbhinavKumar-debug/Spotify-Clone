import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './Component/Login';
import { getTokenFromUrl } from './Component/spotify';
import SpotifyWebApi from "spotify-web-api-js";
import Player from './Component/Player';
import { useDataLayerValue } from './Component/DataLayer';

const spotify = new SpotifyWebApi();

function App() {
  const[{user,token}, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash="";

    const _token = hash.access_token;
    if(_token){

      dispatch({
        type: "SET_USER",
        token: _token,
      })

      spotify.setAccessToken(_token);

      spotify.getMe().then(user => {
        dispatch({
          type: 'SET_USER',
          user: user,
        });
      });

      spotify.getUserPlaylists().then((playlists)=>{
        dispatch({
          type:"SET_PLAYLISTS",
          playlists: playlists,
        });
      });
    }

  },[]);

  // console.log("&",token);

  return (
    <div className="app">
      {token ? <Player spotify={spotify}/>: <Login />}
    </div>
  );
}

export default App;