import React from "react";
import Input from "../../shared/components/FormElements/Input";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
} from "../../shared/components/Util/validators";
import "./Auth.css";
import Button from "../../shared/components/FormElements/Button";
import { useForm } from "../../shared/Hooks/form-hook";

const Auth = () => {
  const [formState, inputHandler] = useForm(
    {
      email: { value: "", isValid: false },
      password: { value: "", isValid: false },
    },
    false
  );

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs);
  };

  return (
    <form className="place-form" onSubmit={submitHandler}>
      <Input
        id="email"
        element="input"
        type="email"
        label="email"
        validators={[VALIDATOR_EMAIL()]}
        errorText="Please enter a valid email"
        onInput={inputHandler}
      />
      <Input
        id="password"
        element="input"
        type="password"
        label="password"
        validators={[VALIDATOR_MINLENGTH(6)]}
        errorText="Please enter a valid password"
        onInput={inputHandler}
      />
      <Button type="submit" disabled={!formState.isValid}>
        Login
      </Button>
    </form>
  );
};

export default Auth;
