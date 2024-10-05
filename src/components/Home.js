import React from 'react';
import {Link} from "react-router-dom";
import CreateServer from './CreateServer';
import JoinChat from './JoinChat';



const Home = () => {
  console.log("Home");
  return (
    <div className="home">
      <h1>P2P Chat</h1>
      <CreateServer />
      <JoinChat />
      <Link to="/settings">Settings</Link>
    </div>
  );
};

export default Home;