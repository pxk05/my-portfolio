import React, { useRef } from 'react';
import './WhoIsThis.css';
import { useNavigate } from 'react-router-dom';
import avatar1 from './assets/avatar 1.png';
import avatar2 from './assets/avatar 2.png';
import avatar3 from './assets/avatar 3.png';
import avatar4 from './assets/avatar 4.png';

const WhoIsThis = ({ onSelectRole }) => {
  const navigate = useNavigate();
  const audioRef = useRef(null); // Create a ref for the audio element
  const roles = [
    { id: 'recruiter', name: 'Recruiter', avatar: avatar1 },
    { id: 'developer', name: 'Developer', avatar: avatar2 },
    { id: 'teacher', name: 'Teacher', avatar: avatar3 },
    { id: 'stalker', name: 'Stalker', avatar: avatar4 },
  ];

  const handleRoleSelection = (roleId) => {
    if (audioRef.current) {
      audioRef.current.play(); // Play the audio
    }
    onSelectRole(roleId);
    navigate('/'); // Navigate to the home page after role selection
  };

  return (
    <div className="who-is-this-container">
      <h1>Who's This?</h1>
      <div className="roles-list">
        {roles.map((role) => (
          <div key={role.id} className="role-card" onClick={() => handleRoleSelection(role.id)}>
            <img src={role.avatar} alt={role.name} className="role-avatar" />
            <div className="role-name">{role.name}</div>
          </div>
        ))}
      </div>
      <audio ref={audioRef} src="/netflix_intro.mp3" preload="auto" />
    </div>
  );
};

export default WhoIsThis;