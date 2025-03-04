import React from 'react';
import UserSidebar from './UserSidebar';
import UserNavbar from './UserNavbar';

const UserHome = () => {
  return (
      <div className="flex min-h-screen">
        <UserSidebar />
        <UserNavbar/>
      </div>
  );
};

export default UserHome;
