import React from 'react';
import { useForm } from 'react-hook-form';

const AddUser = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Handle adding user logic
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>User Name</label>
        <input {...register("userName")} />
      </div>
      <div>
        <label>Email</label>
        <input {...register("email")} />
      </div>
      <button type="submit" className="bg-green-500 text-white p-2 mt-4">Add User</button>
    </form>
  );
};

export default AddUser;
