import React from "react";
import { Container } from "./styles";

export const CheckBox = props => {
  const toggleCheck = selected => {
    if (!props.handleChange) return null;
    props.handleChange(selected);
  };

  const checkBoxStyles = {
    marginLeft: 10,
    borderRadius: 1,
    shadowColor: `${props.checked ? props.backgroundColor : props.shadowColor}`,
    shadowOffset: { width: 1, height: 3 },
    shadowOpacity: `${props.checked ? 0.6 : 0.3}`,
    shadowRadius: `${props.checked ? 6 : 3}`,
    elevation: 10
  };

  return (
    <Container
      onPress={() => toggleCheck(props)}
      underlayColor="transparent"
      style={[checkBoxStyles, props.styles]}
      checked={props.checked}
    >
      {props.children}
    </Container>
  );
};
