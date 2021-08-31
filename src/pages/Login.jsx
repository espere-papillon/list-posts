import React from 'react';
import {Input} from "../components/UI/input/Input";
import {Button} from "../components/UI/button/Button";

export const Login = () => {
  return (
    <div>
      <h2 className="containerLoader">Log in</h2>
      <form>
        <Input type="text" placeholder="Login"/>
        <Input type="text" placeholder="Password"/>
        <Button>Log in</Button>
      </form>
    </div>
  );
};