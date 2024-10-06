import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsersCog } from '@fortawesome/free-solid-svg-icons';
import { FaSearch, FaSort, FaEdit, FaTrash } from "react-icons/fa";

const ViewRoles = () => {
  return (
    <div className="p-4 h-full border rounded-lg shadow-2xl">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <FontAwesomeIcon icon={faUsersCog} className="text-2xl mr-2" />
          <h2 className="text-xl font-bold">Roles</h2>
          <div className="relative ml-4">
            <input
              type="text"
              className="w-96 pl-8 pr-2 py-1 border border-gray-500 rounded-md outline-none"
            />
            <FaSearch className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
        <div className="flex items-center">
          <Link
            to="/roles/add"
            className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
          >
            Add New
          </Link>
        </div>
      </div>
      <div className="overflow-x-auto">
  <div className="min-w-full border flex flex-col gap-2 border-gray-300 bg-white">
    {/* Header */}
    <div className="grid grid-cols-4 gap-x-40 font-bold bg-yellow-200 px-4 py-2">
      <div className="flex items-center">
        <span className="mr-1">ID</span>
        <FaSort className="cursor-pointer" />
      </div>
      <div className="flex items-center">
        <span className="mr-1">Role Name</span>
        <FaSort className="cursor-pointer" />
      </div>
      <div className="flex items-center">
        <span className="mr-1">Status</span>
        <FaSort className="cursor-pointer" />
      </div>
      <div className="flex items-center">
        <span>Action</span>
      </div>
    </div>

    {/* Body */}
    
    <div className="grid grid-cols-4 gap-x-40 px-4 py-2 bg-gray-200">
      <div>1</div>
      <div className="overflow-hidden">Superadmin</div>
      <div className="text-red-500">active</div>
      <div className="flex">
        <FaEdit className="mr-2 cursor-pointer text-blue-500 hover:text-blue-700" />
        <FaTrash className="cursor-pointer text-red-500 hover:text-red-700" />
      </div>
    </div>
  </div>
</div>

    </div>
  );
};

export default ViewRoles;
