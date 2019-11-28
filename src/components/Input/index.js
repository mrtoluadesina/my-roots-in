import React from "react";
import { Container, InputLabel, TextInput } from "./styles";

export default function CustomInput(props) {
  return (
    <Container>
      <InputLabel>{props.label}</InputLabel>
      <TextInput {...props} />
    </Container>
  );
}
