import React from 'react';
import { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './Pages/Home';
import { Settings } from './Pages/Settings';
import { Usage } from './Pages/Usage';
import { Details } from './Pages/Details';
import Header from './components/Header';
import { Notfound } from './Pages/Notfound';
import { Marks } from './Pages/Marks';
import { Sports } from './Pages/Sports'
import Login from './Pages/Login';
import Remarks from './Pages/Remarks';
import './App.css';


const MyUsers = React.lazy(() =>
  import('./Pages/Users').then(module => ({ default: module.Users }))
);

function App() {
  return (
    <BrowserRouter basename='React-Router-Learn'>
      <Suspense fallback={<div style={{backgroundColor:"black"}}><h1>Loading ...</h1></div>}>
        <Routes>
        <Route path='Login' element={<Login/>}></Route>
          <Route path='/' element={<Header />}>
            <Route index element={<Home />}></Route>
            <Route path='Home' element={<Home />} />
            <Route path='Settings' element={<Settings />} />
            <Route path='Users'>
              <Route index element={<MyUsers />} />
              <Route path=':userId' element={<Details />}>
                <Route index element={<Marks />}></Route>
                <Route path="Sports" element={<Sports />}></Route>
                <Route path="Remarks" element={<Remarks />}></Route>
              </Route>
            </Route>
            <Route path='Usage' element={<Usage />} />
            <Route path='Details' element={<Details />} />
            <Route path='*' element={<Notfound />}></Route>
          </Route>

        </Routes>
      </Suspense>
    </BrowserRouter>

  );
}

export default App;
