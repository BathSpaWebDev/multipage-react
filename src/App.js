import { BrowserRouter, Routes, Route } from "react-router-dom";
import './styles/App.scss';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Layout from './layouts/main';
import DashboardLayout from './layouts/dashboard';
import Dashboard from './pages/dashboard';

import {useState} from 'react';

function App() {

  const [darkmode, setDarkmode] = useState(false);
  
  const toggleDarkmode = () =>{
    setDarkmode(!darkmode); 
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* Normal layout */}
          <Route path="/" element={<Layout darkmode={darkmode} toggleDarkmode={toggleDarkmode} />}  >
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
          </Route>

          <Route path="/dashboard" element={<DashboardLayout darkmode={darkmode} toggleDarkmode={toggleDarkmode} />}  >
            <Route index element={<Dashboard />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
