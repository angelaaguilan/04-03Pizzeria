import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import React from 'react'

const LoginPage = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    const password2 = form.password.value;
    event.preventDefault();

    if (form.checkValidity() === false) {
      alert("Error - Todos los campos son obligatorios");
      event.stopPropagation();
      setValidated(true);
      return;
    } if (password2.length < 6) {
      alert("Password debe tener al menos 6 caracteres");
      event.stopPropagation();
      setValidated(true);
      return;
    } 
    alert(`Authentication successful!`)
    setValidated(false);
    form.email.value = '';
    form.password.value= '';
  };

  return (
    <Form
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
      className="m-3"
    >
      <Form.Label column="lg" lg={3}>
        Formulario de Login
      </Form.Label>
      <Form.Group as={Col} md="3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          required
          type="email"
          placeholder="Enter your email"
          defaultValue=""
          name="email"
        />
      </Form.Group>

      <Form.Group as={Col} md="3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          required
          type="password"
          placeholder="Enter your password"
          defaultValue=""
          name="password"
        />
      </Form.Group>

      <Button type="submit" className="my-3">
        Login
      </Button>
    </Form>
  );
}

export default LoginPage;