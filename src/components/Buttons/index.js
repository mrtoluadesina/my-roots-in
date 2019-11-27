import React from "react";
import { Text } from "react-native";
import { Button } from "./style";

export const SimpleButton = props => (
  <Button style={props.class} onPress={props.onPress}>
    <Text style={props.textStyle}>{props.title}</Text>
  </Button>
);

