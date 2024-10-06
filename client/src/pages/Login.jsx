import background from "../assets/background.jpg";
import logo from "../assets/logo.jpg";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    // Navigate to the home page after login
    navigate("/dashboard");
  };

  return (
    <div className="background w-full h-screen flex justify-center items-center relative">
      <div className="absolute inset-0 bg-purple-500 opacity-50"></div>
      <img
        src={background}
        alt="background"
        className="absolute max-h-screen object-cover mix-blend-multiply"
      />
      <div className="login flex flex-col items-start justify-between max-h-screen w-80 bg-white p-6 rounded-lg shadow-lg relative z-10 mr-auto ml-80">
        <div className="w-full">
          <img src={logo} alt="logo" className="w-32 mx-auto mb-2" />
          <h2 className="text-gray-700 text-center mb-6">
            Welcome to Digitalflake admin
          </h2>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          <input
            {...register("email", { required: true })}
            type="email"
            placeholder="Email"
            className="w-full mb-4 p-2 border border-gray-300 rounded"
          />
          <input
            {...register("password", { required: true })}
            type="password"
            placeholder="Password"
            className="w-full mb-2 p-2 border border-gray-300 rounded"
          />
          <div className="text-right mb-4">
            <a href="#" className="text-purple-500 text-sm">
              Forgot password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full bg-purple-900 text-white py-2 rounded hover:bg-purple-600 transition-colors"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
