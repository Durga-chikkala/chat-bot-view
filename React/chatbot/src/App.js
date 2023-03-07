import Login from './components/login/login';
import './App.css';
// import Signup from './components/Signup/Signup';
import Home from './components/Home/Home';
import Signup from './components/Signup/Signup';
// import Chat from './components/chat/Chat';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from './components/NotFound/NotFound';

function App() {

  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path='/signup' element={<Signup/>}></Route>
            <Route path="/Home" element={<Home/>} > </Route>
            <Route path="*" element={<NotFound/>}> </Route>
           
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
