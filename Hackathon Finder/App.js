// src/App.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [hackathons, setHackathons] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/hackathons')
      .then(response => {
        setHackathons(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the hackathons!", error);
      });
  }, []);

  return (
    <div className="App">
      <h1>Upcoming Hackathons & Tech Events</h1>
      <div className="hackathon-list">
        {hackathons.map(hackathon => (
          <div key={hackathon.id} className="hackathon-card">
            <h2>{hackathon.name}</h2>
            <p><strong>Date:</strong> {hackathon.date}</p>
            <p><strong>Location:</strong> {hackathon.location}</p>
            <p>{hackathon.description}</p>
            <a href={hackathon.link} target="_blank" rel="noopener noreferrer">Learn more</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
