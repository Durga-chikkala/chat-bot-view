import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/login/login';
import Auth from './components/Auth/Auth';
import ProtectedRoute from './util/ProtectedRoute';
import Home from './components/Home/Home';
import Chat from './components/chat/Chat';
import Signup from './components/Signup/Signup';
import Aboutus from './components/AboutUs/Aboutus';
import FetchData from './components/DataFetch/FetchData';
import NotFound from './components/NotFound/NotFound';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
 
       <BrowserRouter>
          <Routes>
          <Route path='/auth' element={<Auth />}>
            <Route path='login' element={<Login />} />
        </Route>
            
            <Route path='/signup' element={<Signup/>}></Route>
            <Route path="/home" element={ <ProtectedRoute>
                    <Home />
                </ProtectedRoute>} > </Route>
            <Route path="/chat" element={<Chat/>} > </Route>
            <Route path="/about-us" element={<Aboutus/>} > </Route>
            <Route path="/frequent-questions" element={<FetchData/>}></Route>
            <Route path="*" element={<NotFound/>}></Route>
          </Routes>
        </BrowserRouter> 

   
 

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
