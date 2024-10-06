// import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const AddRole = () => {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data); // Handle adding role logic
    // Reset the form after submitting
    reset();
  };

  return (
    <div className="p-8 bg-white border rounded-2xl shadow-2xl h-full flex flex-col">
      {/* Heading with Back Icon */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <FontAwesomeIcon
            icon={faArrowLeft}
            className="text-xl cursor-pointer mr-4"
            onClick={() => navigate('/roles')} // Navigate back when clicking the back icon
          />
          <h2 className="text-2xl font-bold">Add Role</h2>
        </div>
      </div>

      {/* Form section */}
      <form onSubmit={handleSubmit(onSubmit)} className="flex-1">
        <div className="mb-6">
          <label className="block mb-2 text-lg">Role Name</label>
          <input
            {...register('roleName', { required: true })}
            placeholder="Enter Role Name"
            className="w-96 p-3 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Fixed position button container at the bottom */}
        <div className="fixed bottom-0 right-0 p-8 flex justify-end space-x-4">
          <button
            type="button"
            onClick={() => reset()} // Reset the form on cancel
            className="bg-gray-300 text-gray-700 px-6 py-2 rounded-md hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-purple-500 text-white px-6 py-2 rounded-md hover:bg-purple-600"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRole;
