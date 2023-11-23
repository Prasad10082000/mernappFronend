import { Route, Routes } from "react-router-dom";
import "./App.css";
import Loginpage from "./components/Login/Loginpage";
import Signuppage from "./components/Signup/Signuppage";
import DataProvider from "./context/DataProvider";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <DataProvider>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/signup" element={<Signuppage />} />
      </Routes>
    </DataProvider>
  );
}

export default App;
