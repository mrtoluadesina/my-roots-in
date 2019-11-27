import React from "react";
import { Text } from "react-native";
import { Button, LinearGradientButton } from "./style";

export const SimpleButton = props => (
  <Button style={props.class} onPress={props.onPress}>
    <Text style={props.textStyle}>{props.title}</Text>
  </Button>
);

export const SimpleLinearGradientButton = props => (
  <Button style={props.class} onPress={props.onPress}>
    <LinearGradientButton colors={["#0AC4BA", "#2BDA8E"]}>
      <Text style={props.textStyle}>{props.title}</Text>
    </LinearGradientButton>
  </Button>
);
