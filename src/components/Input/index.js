import React from "react";
import { Container, InputLabel, TextInput, Edit } from "./styles";

export function CustomInput(props) {
  return (
    <Container style={props.style}>
      <InputLabel>{props.label}</InputLabel>
      <TextInput {...props} />
    </Container>
  );
}

export function EditableInput(props) {
  return (
    <Container style={props.style}>
      <InputLabel>{props.label}</InputLabel>
      <TextInput {...props} editable={props.editable ? true : false} />
      {props.editable ? <Edit>Edit</Edit> : null}
    </Container>
  );
}
