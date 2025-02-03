import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Activity from "./components/ProjectReacta/ac/Activty";
import Contact from "./components/ProjectReacta/cont/contacet2";
import Hero from "./components/ProjectReacta/hero/Contact";
import Team from "./components/ProjectReacta/teams/teams";
import Login from "./components/ProjectReacta/log/signup";
import Signup from "./components/ProjectReacta/sing/login";
import Services from "./components/ProjectReacta/services/services";
import Dashboard from "./components/aboutus/dashboard"
import Dashboards from "./components/dashboard/dashboards"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<Login />} />
        <Route path="/login" element={<Signup />} />
        <Route path="/" element={<><Hero id="home"/><Activity id="activity"/><Services/><Team/><Contact/>    </>} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dash" element={<Dashboards />} />

        

        
      </Routes>
    </Router>
  );
}

export default App;
