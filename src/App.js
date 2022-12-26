
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './Pages/Home';
import { Settings } from './Pages/Settings';
import { Users } from './Pages/Users';
import { Usage } from './Pages/Usage';
import { Details } from './Pages/Details';
import Header from './components/Header';
import { Notfound } from './Pages/Notfound';
import { Marks } from './Pages/Marks';
import { Sports } from './Pages/Sports'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Header />}>
          <Route index element={<Home />}></Route>
          <Route path='Home' element={<Home />} />
          <Route path='Settings' element={<Settings />} />
          <Route path='Users'>
            <Route index element={<Users />} />
            <Route path=':userId' element={<Details />}>
              <Route index element={<Marks />}></Route>
              <Route path="Sports" element={<Sports />}></Route>
            </Route>
          </Route>
          <Route path='Usage' element={<Usage />} />
          <Route path='Details' element={<Details />} />
          <Route path='*' element={<Notfound />}></Route>
        </Route>

      </Routes>
    </BrowserRouter>

  );
}

export default App;
