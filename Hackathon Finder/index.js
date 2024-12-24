// index.js
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

// Mock data for hackathons
const hackathons = [
  {
    id: 1,
    name: 'Tech Hackathon 2024',
    date: '2024-03-15',
    location: 'Virtual',
    description: 'A hackathon for tech enthusiasts to build innovative solutions.',
    link: 'https://example.com',
  },
  {
    id: 2,
    name: 'AI & ML Hackathon',
    date: '2024-04-20',
    location: 'San Francisco, CA',
    description: 'A hackathon focused on AI and machine learning applications.',
    link: 'https://example.com',
  },
  // Add more events as needed
];

app.use(cors());
app.use(express.json());

// Route to get all hackathons
app.get('/api/hackathons', (req, res) => {
  res.json(hackathons);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
