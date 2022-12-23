
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { Home } from './Pages/Home';
import { Settings } from './Pages/Settings';
import { Users } from './Pages/Users';
import { Usage } from './Pages/Usage';
import { Details } from './Pages/Details';
import Header from './components/Header';


function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
      </div>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='Home' element={<Home />} />
        <Route path='Settings' element={<Settings />} />
        <Route path='Users' element={<Users />} />
        <Route path='Usage' element={<Usage />} />
        <Route path='Details' element={<Details />} />
        <Route path='Details/:userId' element={<Details />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
