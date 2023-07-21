import { useAuth0 } from '@auth0/auth0-react';
import Home from './pages/Home';
import { Login } from './auth/Login';
import { Logout } from './auth/Logout';
import { Link, Route, Routes } from 'react-router-dom';
import { Favorites } from './pages/Favorites';
import SearchBar from './components/SearchBar';
import './App.css';



function App() {
  const { isAuthenticated } = useAuth0();
  return (
    <div className="App">
      <header className="App-header">
        {isAuthenticated ? (
          <>
            <nav >
              <div className="titulo">
                <h2 >CELEBRIDADES</h2>

                <div className="hol">
                  <Link type="button" class="btn btn-outline-info" to='/favorites' ><li>Favoritos</li></Link>
                </div>
                <div  className="hol">
                  <Link type="button" class="btn btn-outline-info" to='/home' ><li>Home</li> </Link>
                </div>
                <div className="hol">
                  <Link type="button" class="btn btn-outline-info" to='/logout' ><li>Logout</li> </Link>
                </div>
              </div>
            </nav>
          </>
        ) : (
          <Login />
        )}
      </header>
      <br />

      <Routes>
        <Route path='/favorites' element={<Favorites />} />
        <Route path='/home' element={<SearchBar />} />
        <Route path='/logout' element={<Logout />} />
      </Routes>

    </div>
  );
}

export default App;
