import './App.css';
import {useState} from 'react';
import RestrictedPage from './components/RestrictedPage'

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const user = 'Charles'
  const Login = () => setIsLoggedIn(true)
  const Logout = () => setIsLoggedIn(false)

  return (

    <div className="App">
      <div className="App-header">
        <RestrictedPage isLoggedIn={isLoggedIn} user={user} Login={Login} Logout={Logout}></RestrictedPage>
      </div>
    </div>

  );

}

export default App;
