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
        <Routes>
          <Route path='/' element={<Header />}>
            <Route index element={<Home />} />
            <Route path='Home' element={<Home />}></Route>
            <Route path='About' element={<About />}></Route>
            <Route path='Users'>
              <Route index element={<Users />} />
              <Route path=':userId' element={<Details />}>
                <Route index element={<Marks />}></Route>
                <Route path="Sports" element={<Sports />}></Route>
              </Route>
            </Route>
            <Route path='Contact' element={<Contact />}></Route>
            <Route path='Details' element={<Details />}>
            </Route>
            <Route path='*' element={<Notfound />}></Route>
          </Route>

        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
