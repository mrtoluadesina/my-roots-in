import React from "react";
import { TouchableOpacity, Text } from "react-native";

export const SimpleButton = props => (
  <TouchableOpacity style={props.class} onPress={props.onPress}>
    <Text>{props.title}</Text>
  </TouchableOpacity>
);
