import React, {useContext} from 'react';
import {Link} from 'react-router-dom'
import {Button} from "../button/Button";
import {AuthContext} from '../../../context'

export const Navbar = () => {
  const {isAuth, setIsAuth} = useContext(AuthContext)

  const logout = () => {
    setIsAuth(false)
    localStorage.removeItem('auth')
  }
  return (
    <div className={"navbar"}>
      <Button onClick={logout}>Log out</Button>
      <div className="navbar__links">
        <Link to={"/about"}>About</Link>
        <Link to={"/posts"}>Posts</Link>
      </div>
    </div>
  );
};