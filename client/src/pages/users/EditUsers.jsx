import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form"; // Import React Hook Form
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faUser } from "@fortawesome/free-solid-svg-icons";

const EditUsers = () => {
  const [imagePreview, setImagePreview] = useState(null);
  const navigate = useNavigate();

  // Initialize useForm hook
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const onSubmit = (data) => {
    console.log("Form Data: ", data);
    // Handle the user submission logic
  };

  const handleCancel = () => {
    reset(); // Navigate back to users list on cancel
  };

  return (
    <div className="p-8 bg-white border rounded-2xl shadow-2xl h-full flex flex-col">
      {/* Heading with Back Icon */}
      <div className="flex items-center mb-6">
        <FontAwesomeIcon
          icon={faArrowLeft}
          className="text-xl cursor-pointer mr-4"
          onClick={() => navigate("/users")} // Navigate back when clicking the back icon
        />
        <h2 className="text-2xl font-bold">Edit User</h2>
      </div>

      {/* Form section */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-3 gap-8"
      >
        <div className="col-span-3 md:col-span-1">
          <label className="block mb-2 text-lg">Name</label>
          <input
            {...register("name", { required: "Name is required" })}
            type="text"
            placeholder="Enter Name"
            className={`w-full p-3 border ${
              errors.name ? "border-red-500" : "border-gray-300"
            } rounded-md focus:outline-none`}
          />
          {errors.name && (
            <span className="text-red-500">{errors.name.message}</span>
          )}
        </div>

        <div className="col-span-3 md:col-span-1">
          <label className="block mb-2 text-lg">Mobile</label>
          <input
            {...register("mobile", { required: "Mobile is required" })}
            type="text"
            placeholder="Enter Mobile"
            className={`w-full p-3 border ${
              errors.mobile ? "border-red-500" : "border-gray-300"
            } rounded-md focus:outline-none`}
          />
          {errors.mobile && (
            <span className="text-red-500">{errors.mobile.message}</span>
          )}
        </div>

        <div className="col-span-3 md:col-span-1">
          <label className="block mb-2 text-lg">Email-id</label>
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                message: "Invalid email",
              },
            })}
            type="email"
            placeholder="Enter Email"
            className={`w-full p-3 border ${
              errors.email ? "border-red-500" : "border-gray-300"
            } rounded-md focus:outline-none`}
          />
          {errors.email && (
            <span className="text-red-500">{errors.email.message}</span>
          )}
        </div>

        <div className="col-span-3 md:col-span-1">
          <label className="block mb-2 text-lg">Role</label>
          <select
            {...register("role", { required: "Role is required" })}
            className={`w-full p-3 border ${
              errors.role ? "border-red-500" : "border-gray-300"
            } rounded-md focus:outline-none`}
          >
            <option value="">Select Role</option>
            <option value="admin">Admin</option>
            <option value="superadmin">Superadmin</option>
            <option value="caller">Caller</option>
            <option value="account">Account</option>
          </select>
          {errors.role && (
            <span className="text-red-500">{errors.role.message}</span>
          )}
        </div>

        {/* Image upload section */}
        <div className="col-span-3 md:col-span-2 flex items-center">
          <div className="flex flex-col items-center mr-8 border w-48 h-32 rounded-md">
            <label className="mb-2">Upload Image</label>
            <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
              {imagePreview ? (
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="w-full h-full object-cover"
                />
              ) : (
                <FontAwesomeIcon
                  icon={faUser}
                  className="text-gray-400 text-4xl"
                />
              )}
            </div>
          </div>
          <div className="flex flex-col justify-center items-center border w-48 h-32">
            <input
              {...register("image")}
              type="file"
              onChange={handleImageUpload}
              className="p-2 w-24 border-gray-300 rounded-md"
            />
            <p className="text-sm text-gray-500 mt-2 text-center">
              Upload maximum allowed file size is 10MB
            </p>
          </div>

          <div className="col-span-3 md:col-span-1 ml-5 w-48 h-32">
            <label className="block mb-2 text-lg">Status</label>
            <select
              {...register("status", { required: "status is required" })}
              className={`w-full p-3 border ${
                errors.status ? "border-red-500" : "border-gray-300"
              } rounded-md focus:outline-none`}
            >
              <option value="">Select Status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
            {errors.status && (
              <span className="text-red-500">{errors.status.message}</span>
            )}
          </div>
        </div>

        {/* Buttons */}
        <div className="col-span-3 flex justify-end mt-8">
          <button
            type="button"
            onClick={handleCancel}
            className="bg-gray-300 text-gray-700 px-6 py-2 rounded-md hover:bg-gray-400 mr-4"
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

export default EditUsers;
