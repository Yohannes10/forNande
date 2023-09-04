import React, { useState } from 'react';
import Add from './Add';
import './Team.css'; // Import the CSS file

function Team() {
  // State to store the selected user by the admin
  const [selectedUser, setSelectedUser] = useState('');

  // Function to handle user selection from the dropdown
  const handleUserSelect = (e) => {
    setSelectedUser(e.target.value);
  };

  return (
    <div className="team-container"> {/* Apply the CSS class */}
      {/* Dropdown for admin to select a user */}
      <div className="form-group team-dropdown"> {/* Apply the CSS class */}
        <label>Select a User</label>
        <select
          className="form-control"
          value={selectedUser}
          onChange={handleUserSelect}
        >
          <option value="">Select a user...</option>
          {/* Populate the dropdown with user data */}
          {/* Replace the following options with actual user data */}
          <option value="user1">User 1</option>
          <option value="user2">User 2</option>
          {/* Add more user options as needed */}
        </select>
      </div>

      {/* Pass the selectedUser to the Add component */}
      <Add selectedUser={selectedUser} />
    </div>
  );
}

export default Team;
