import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faHome, faUsersCog, faUsers, faPlay } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/logo.jpg';
import { NavLink, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="flex flex-col h-screen">
      {/* Navbar */}
      <nav className="bg-purple-900 p-4 text-white flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-10 w-auto mr-2" />
        </div>
        <div className='cursor-pointer'>
          <FontAwesomeIcon icon={faUser} className="text-xl" />
        </div>
      </nav>
      
      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="bg-gray-200 w-52 p-5 space-y-4 overflow-y-auto">
          {/* Home Link */}
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `w-full flex items-center justify-between p-2 rounded ${
                isActive ? "bg-yellow-200" : "hover:bg-yellow-200"
              }`
            }
          >
            <div className="flex items-center w-full">
              <FontAwesomeIcon icon={faHome} className="mr-2" />
              <span>Home</span>
            </div>
            <FontAwesomeIcon icon={faPlay} className="ml-5" />
          </NavLink>
          
          {/* Roles Link */}
          <NavLink
            to="/roles"
            className={({ isActive }) =>
              `w-full flex items-center justify-between p-2 rounded ${
                isActive ? "bg-yellow-200" : "hover:bg-yellow-200"
              }`
            }
          >
            <div className="flex items-center w-full">
              <FontAwesomeIcon icon={faUsersCog} className="mr-2" />
              <span>Roles</span>
            </div>
            <FontAwesomeIcon icon={faPlay} className="ml-5" />
          </NavLink>
          
          {/* Users Link */}
          <NavLink
            to="/users"
            className={({ isActive }) =>
              `w-full flex items-center justify-between p-2 rounded ${
                isActive ? "bg-yellow-200" : "hover:bg-yellow-200"
              }`
            }
          >
            <div className="flex items-center w-full">
              <FontAwesomeIcon icon={faUsers} className="mr-2" />
              <span>Users</span>
            </div>
            <FontAwesomeIcon icon={faPlay} className="ml-5" />
          </NavLink>
        </div>

        {/* Main content area */}
        <div className="p-6 flex-1 overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
