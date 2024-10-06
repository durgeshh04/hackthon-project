import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Layout from "./components/Layout";
import Home from "./pages/Home"; // Ensure this component exists
import ViewRoles from "./pages/roles/ViewRoles.jsx";
import AddRole from "./pages/roles/AddRoles.jsx"; // Corrected import path
import ViewUsers from "./pages/users/ViewUsers.jsx";
import AddUser from "./pages/users/AddUser.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Public Route for Login */}
        <Route path="/" element={<Login />} />

        {/* Protected Routes (Only accessible after login) */}
        <Route path="/" element={<Layout />}>
          <Route path="dashboard" element={<Home />} />
          <Route path="roles" element={<ViewRoles />} />
          <Route path="roles/add" element={<AddRole />} />
          <Route path="users" element={<ViewUsers />} />
          <Route path="users/add" element={<AddUser />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
