import logo from '../assets/logo.jpg'; // Optional logo

const Home = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <img src={logo} alt="Logo" className="h-70 w-80" />
    </div>
  );
};

export default Home;
