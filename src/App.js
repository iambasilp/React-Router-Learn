
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Home } from './Pages/Home';
import { Settings } from './Pages/Settings';
import { Users } from './Pages/Users';
import { Usage } from './Pages/Usage';


function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Link to="Home">Home</Link>
        <Link to="Settings">Settings</Link>
        <Link to="Users">Users</Link>
        <Link to="Usage">Usage</Link>
      </div>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='Home' element={<Home />} />
        <Route path='Settings' element={<Settings />} />
        <Route path='Users' element={<Users />} />
        <Route path='Usage' element={<Usage />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
