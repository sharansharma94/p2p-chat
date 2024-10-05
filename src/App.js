import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route , Routes} from "react-router-dom";
import Home from './components/Home';
import Chat from './components/Chat';
import Settings from './components/Settings';



function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/settings" element={<Settings/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
