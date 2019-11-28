import React from "react";
import { Container, InputLabel, TextInput, Edit } from "./styles";

export default function CustomInput(props) {
  return (
    <Container style={props.style}>
      <InputLabel>{props.label}</InputLabel>
      <TextInput {...props} editable={props.editable ? true : false} />
      {props.editable ? <Edit>Edit</Edit> : null}
    </Container>
  );
}
