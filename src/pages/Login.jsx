import React, {useContext} from 'react';
import {Input} from "../components/UI/input/Input";
import {Button} from "../components/UI/button/Button";
import {AuthContext} from '../context'

export const Login = () => {
  const {isAuth, setIsAuth} = useContext(AuthContext)

  const login = event => {
    event.preventDefault()
    setIsAuth(true)
    localStorage.setItem('auth', 'true')
  }
  return (
    <div>
      <h2 className="containerLoader">Log in</h2>
      <form onSubmit={login}>
        <Input type="text" placeholder="Login"/>
        <Input type="text" placeholder="Password"/>
        <Button>Log in</Button>
      </form>
    </div>
  );
};