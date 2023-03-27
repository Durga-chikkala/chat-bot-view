import Login from './components/login/login';
import './App.css';
// import Signup from './components/Signup/Signup';
import Home from './components/Home/Home';
import Signup from './components/Signup/Signup';
// import Chat from './components/chat/Chat';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from './components/NotFound/NotFound';
import Aboutus from './components/AboutUs/Aboutus';
import Chat from './components/chat/Chat';
import FetchData from './components/DataFetch/FetchData';
import {PrivateRoute} from './components/App/PrivateRoutes';
import { Fragment } from 'react';

function App() {

  return (
    <div className="App">
        <BrowserRouter>
        <Fragment>
          <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path='/signup' element={<Signup/>}></Route>
            <Route exact path='/home' element={<PrivateRoute/>}>
                   <Route exact path='/home' element={<Home/>}/>
            </Route>
            <Route exact path='/chat' element={<PrivateRoute/>}>
                   <Route exact path='/chat' element={<Chat/>}/>
            </Route>
            <Route exact path='/about-us' element={<PrivateRoute/>}>
                   <Route exact path='/about-us' element={<Aboutus/>}/>
            </Route>
            <Route exact path='/frequent-questions' element={<PrivateRoute/>}>
                   <Route exact path='/frequent-questions' element={<FetchData/>}/>
            </Route>
            <Route path="*" element={<NotFound/>}></Route>
          </Routes>
          </Fragment>
        </BrowserRouter>
    </div>
  );
}

export default App;
