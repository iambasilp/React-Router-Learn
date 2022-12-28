import Header from './Components/Header'
import { Home } from './Pages/Home';
import { About } from './Pages/About';
import { Users } from './Pages/Users';
import { Contact } from './Pages/Contact';
import { Details } from './Pages/Details';
import { Marks } from './Pages/Marks';
import { Sports } from './Pages/Sports';
import Notfound from './Pages/NotFound';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='Home' element={<Home />}></Route>
          <Route path='About' element={<About />}></Route>
          <Route path='Users' element={<Users />}></Route>
          <Route path='Contact' element={<Contact />}></Route>
          <Route path='Details' element={<Details />}>
          </Route>
          <Route path='Details/:userId' element={<Details />}>
            <Route path="" element={<Marks />} />
            <Route path="Marks" element={<Marks />} />
            <Route path="Sports" element={<Sports />} />
          </Route>
          <Route path='*' element={<Notfound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
