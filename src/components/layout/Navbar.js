import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
// import '../../style.css'
// import Logo from "https://lh3.googleusercontent.com/-_bvJHSWdW38/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucnuAk8slSzdE8N7KzncONjFfKG-3Q/photo.jpg?sz=500";
const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  useEffect(() => {
    // console.log(localStorage.getItem('user'))
    if(localStorage.getItem('user') !== null) {
      setIsLoggedIn(true)
    } else {
      setIsLoggedIn(false)
    }
  }, [])
  const handleLogout = () => {
    localStorage.removeItem('user')
    localStorage.removeItem('authToken')
    window.location.href = '/login'
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{zIndex: '1', backgroundColor: '#282c34'}}>
      <div className="container">
        <Link className="navbar-brand" exact to="/">
          
          <img src="https://lh3.googleusercontent.com/-_bvJHSWdW38/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucnuAk8slSzdE8N7KzncONjFfKG-3Q/photo.jpg?sz=40" alt ="sarvsahayak_logo" href="/" />
          &nbsp; SarvSahayak
        </Link>
       {isLoggedIn && <Link className="btn btn-outline-light" onClick={() => handleLogout() }>  Log Out</Link>}
      </div>
    </nav>
  );
};

export default Navbar;
