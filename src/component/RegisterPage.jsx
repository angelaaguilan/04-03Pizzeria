import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import React from 'react'


const RegisterPage = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    const password2 = form.password.value;
    const passwordConfirm2 = form.passwordConfirm.value;
    event.preventDefault();

    if (form.checkValidity() === false) {
      alert("Error - Todos los campos son obligatorios");
      event.stopPropagation();
      setValidated(true);
      return;
    } if (password2.length < 6) {
      alert("Error - Contraseña debe tener al menos 6 caracteres");
      event.stopPropagation();
      setValidated(true);
      return;
    } else if (password2 !== passwordConfirm2) {
      alert("Error - Contraseñas deben ser iguales");
      event.stopPropagation();
      setValidated(true);
      return;
    } 
    alert(`Datos enviados`)
    setValidated(false);
    form.email.value = '';
    form.password.value= '';
    form.passwordConfirm.value='';
  };

  return (
    <Form
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
      className="m-3"
    >
      <Form.Label column="lg" lg={3}>
        Formulario de Registro
      </Form.Label>
      <Form.Group as={Col} md="3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          required
          type="email"
          placeholder="Email"
          defaultValue=""
          name="email"
        />
      </Form.Group>

      <Form.Group as={Col} md="3" controlId="formBasicPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control
          required
          type="password"
          placeholder="Contraseña"
          defaultValue=""
          name="password"
        />
      </Form.Group>

      <Form.Group as={Col} md="3" controlId="formBasicPassword">
        <Form.Label>Confirmar Contraseña</Form.Label>
        <Form.Control
          required
          type="password"
          placeholder="Confirma Contraseña"
          defaultValue=""
          name="passwordConfirm"
        />
      </Form.Group>
      <Button type="submit" className="my-3">
        Enviar
      </Button>
    </Form>
  );
}

export default RegisterPage;