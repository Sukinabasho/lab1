import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { StyledEngineProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Aut from '../../src/containers/AuthForm';
import TextField from '@mui/material/TextField';
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
export default function GetAuth() {
    const {
        register,
        formState: { errors },
        handleSubmit
      } = useForm({
        criteriaMode: "all"
      });
      const divStyle = {
        top:'250px',
        left:'250px',
        background: 'grey',
        color: 'black',
        fontSize: '25px',
      };
      const onSubmit = (data) => console.log(data);
      return (
        <div style={divStyle}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>Log in</h1>
           <TextField
                label="Email"
                type="text"
                {...register("Email", {
                    required: "Поле почты должно быть заполнено",
                  })}
            />
            <ErrorMessage
            errors={errors}
            name="Email"
            render={({ messages }) => {
              console.log("messages", messages);
              return messages
                ? Object.entries(messages).map(([type, message]) => (
                    <p key={type}>{message}</p>
                  ))
                : null;
            }}
          />
          <p></p>
            <TextField
                label="Password"
                type="password"
                {...register("Password", {
                    required: "Поле пароля должно быть заполнено",
                  })}
            />
          <ErrorMessage
            errors={errors}
            name="Password"
            render={({ messages }) => {
              console.log("messages", messages);
              return messages
                ? Object.entries(messages).map(([type, message]) => (
                    <p key={type}>{message}</p>
                  ))
                : null;
            }}
          />
          <p></p>
          <Button type="submit" style={{backgroundColor: '#145ea8'}}>Login</Button>
        </form>
        </div>
      );
  }