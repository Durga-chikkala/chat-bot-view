import logo from './logo.svg';
import Login from './components/login/login';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Head/Head';
import College from './components/colleges/College';
import Frequent from './components/frequent/Frequent';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <h2>Our Engineering Colleges</h2>
      <College/>
      <Frequent/>
      <Footer/>
    </div>
  );
}

export default App;
