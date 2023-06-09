import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Messenger from "./pages/messenger/Messenger";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";


function App() {
  const { user } = useContext(AuthContext);

  return (



    <Router>
      <Routes>
        <Route exact path="/" element={user ? <Home /> : <Register />} />
        <Route path="/login" element={user ? <Navigate replace to="/" /> : <Login />} />
        <Route path="/register" element={user ? <Navigate replace to="/" /> : <Register />} />
        <Route path="/messenger" element={!user ? <Navigate replace to="/" /> : <Messenger />} />
        <Route path="/profile/:username" element={<Profile />} />
        <Route path="/messenger" element={<Messenger />} />

      </Routes>
    </Router>
  );

}

export default App;

