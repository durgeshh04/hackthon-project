import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faTrash,
  faUser,
  faSort,
} from "@fortawesome/free-solid-svg-icons";
import { FaSearch} from "react-icons/fa";
import { Link } from "react-router-dom";

const usersData = [
  {
    id: 123,
    name: "Ramesh",
    mobile: "8756453402",
    email: "Ramesh@gmail.com",
    role: "Admin",
    status: "Active",
  },
  {
    id: 124,
    name: "Geeta",
    mobile: "9987654323",
    email: "Geeta@gmail.com",
    role: "Super Admin",
    status: "Inactive",
  },
  {
    id: 125,
    name: "Arun",
    mobile: "8865758485",
    email: "Arun@gmail.com",
    role: "Caller",
    status: "Inactive",
  },
  {
    id: 126,
    name: "Soham",
    mobile: "9734564565",
    email: "Soham@gmail.com",
    role: "Account",
    status: "Active",
  },
];

const ViewUsers = () => {
  const handleDelete = (id) => {
    console.log("Deleted user with id:", id);
  };

  const handleEdit = (id) => {
    console.log("Edit user with id:", id);
  };

  return (
    <div className="h-full p-6 border rounded-2xl shadow-2xl">
      {/* Header with user icon, search bar, and Add New button */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <FontAwesomeIcon icon={faUser} className="text-3xl mr-4" />
          <h2 className="text-2xl font-bold">User</h2>
          <div className="relative ml-4">
            <input
              type="text"
              className="w-96 pl-8 pr-2 py-1 border border-gray-500 rounded-md outline-none"
            />
            <FaSearch className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
        <div className="flex items-center space-x-4">
        
          <Link
            to="/users/add"
            className="bg-purple-600 text-white px-4 py-2 rounded-md"
          >
            Add New
          </Link>
        </div>
      </div>

      {/* User table */}
      <table className="w-full text-left border-separate border-spacing-y-2">
        <thead className="bg-yellow-200">
          <tr>
            <th className="px-4 py-2">
              Id <FontAwesomeIcon icon={faSort} />
            </th>
            <th className="px-4 py-2">
              Name <FontAwesomeIcon icon={faSort} />
            </th>
            <th className="px-4 py-2">
              Mobile <FontAwesomeIcon icon={faSort} />
            </th>
            <th className="px-4 py-2">
              Email-Id <FontAwesomeIcon icon={faSort} />
            </th>
            <th className="px-4 py-2">
              Role <FontAwesomeIcon icon={faUser} className="mr-2 text-lg" />
            </th>
            <th className="px-4 py-2">
              Status <FontAwesomeIcon icon={faSort} />
            </th>
            <th className="px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {usersData.map((user) => (
            <tr key={user.id} className="bg-gray-200">
              <td className="px-4 py-2">{user.id}</td>
              <td className="px-4 py-2">{user.name}</td>
              <td className="px-4 py-2">{user.mobile}</td>
              <td className="px-4 py-2">
                <a
                  href={`mailto:${user.email}`}
                  className="text-blue-500 overflow-hidden"
                >
                  {user.email}
                </a>
              </td>
              <td className="px-4 py-2 flex items-center">{user.role}</td>
              <td
                className={`px-4 py-2 ${
                  user.status === "Active" ? "text-green-600" : "text-red-500"
                }`}
              >
                {user.status}
              </td>
              <td className="px-4 py-2">
                <button
                  onClick={() => handleEdit(user.id)}
                  className="text-blue-500 hover:text-blue-700 mr-4"
                >
                  <FontAwesomeIcon icon={faEdit} />
                </button>
                <button
                  onClick={() => handleDelete(user.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewUsers;
