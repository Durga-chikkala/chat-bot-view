
import './App.css';
import { Outlet } from "react-router-dom";

import PortalNavbar from './components/Navbar/PortalNavbar';
// import PortalFooter from './components/Footer/PortalFooter';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const checkUserToken = () => {
      const userToken = localStorage.getItem('user-token');
      if (!userToken || userToken === 'undefined') {
          setIsLoggedIn(false);
      }
      setIsLoggedIn(true);
  }
  useEffect(() => {
      checkUserToken();
  }, [isLoggedIn]);


  return (
    <div >
    
<React.Fragment>
            {isLoggedIn && <PortalNavbar />}
            <Outlet />
            {/* {isLoggedIn && <PortalFooter />} */}
        </React.Fragment>

    </div>
  );
}

export default App;
