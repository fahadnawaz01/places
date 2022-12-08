import React, { useCallback } from "react";
import Input from "../../shared/components/FormElements/Input";
import "./PlaceForm.css";
import { useReducer } from "react";
import Button from "../../shared/components/FormElements/Button";
import { useForm } from "../../shared/Hooks/form-hook";
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/components/Util/validators";

const NewPlace = () => {
  const [formState, inputHandler] = useForm(
    {
      title: { value: "", isValid: false },
      description: { value: "", isValid: false },
      address: { value: "", isValid: false },
    },
    false
  );

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(formState); //we will send this to backend
  };

  return (
    <form className="place-form" onSubmit={submitHandler}>
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]} //diffrent validators logics that is passed
        errorText="please enter a valid title"
        onInput={inputHandler}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]} //diffrent validators logics that is passed
        errorText="please enter a valid discription of 5 characters"
        onInput={inputHandler}
      />
      <Input
        id="address"
        element="input"
        label="address"
        validators={[VALIDATOR_REQUIRE()]} //diffrent validators logics that is passed
        errorText="please enter a valid address"
        onInput={inputHandler}
      />
      <Button type="submit" disabled={!formState.isValid}>
        Add place
      </Button>
    </form>
  );
};

export default NewPlace;
