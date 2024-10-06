import React from 'react';
import { Link } from 'react-router-dom';

const ViewUsers = () => {
  return (
    <div>
      <h2>Users</h2>
      {/* Display users here */}
      <Link to="/users/add" className="bg-blue-500 text-white p-2 mt-4 inline-block">Add User</Link>
    </div>
  );
};

export default ViewUsers;
