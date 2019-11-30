import React, { useState } from "react";
import { Container, Check } from "./styles";
import { colors } from "../../constants/colors";
import { images } from "../../../assets/images";

export const CheckBox = props => {
  const toggleCheck = ({ value }) => {
    props.handleChange(value);
  };

  const checkBoxStyles = {
    marginLeft: 10,
    borderRadius: 1,
    shadowColor: `${props.checked ? colors.rootGreenLight : colors.rootShadow}`,
    shadowOffset: { width: 1, height: 3 },
    shadowOpacity: `${props.checked ? 0.6 : 0.3}`,
    shadowRadius: `${props.checked ? 6 : 3}`,
    elevation: 10
  };

  return (
    <Container
      onPress={() => toggleCheck(props)}
      underlayColor="transparent"
      style={checkBoxStyles}
      checked={props.checked}
    >
      <Check source={images.tickImg} resizeMode="contain"></Check>
    </Container>
  );
};