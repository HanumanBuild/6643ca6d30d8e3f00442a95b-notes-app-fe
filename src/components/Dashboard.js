import React, { useState, useEffect } from 'react';
import API from '../api'; // Import the Axios base instance

function Dashboard() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await API.get('/notes');
        setNotes(response.data);
      } catch (error) {
        console.error('Error fetching notes:', error.response);
      }
    };
    fetchNotes();
  }, []);

  return (
    <div>
      {notes.map(note => (
        <div key={note._id}>{note.content}</div>
      ))}
    </div>
  );
}

export default Dashboard;