import React from "react";
import { Text, ActivityIndicator } from "react-native";
import { Button, LinearGradientButton, Value, Link } from "./style";
import { colors } from "../../constants/colors";

export const SimpleButton = props => (
  <Button style={props.class} onPress={props.onPress}>
    <Value style={props.textStyle}>{props.title}</Value>
  </Button>
);

export const LinkButton = props => (
  <Link style={props.class} onPress={props.onPress}>
    <Value style={props.textStyle}>{props.title}</Value>
  </Link>
);

export const SimpleLinearGradientButton = props => (
  <Button style={props.class} onPress={props.onPress}>
    <LinearGradientButton
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      colors={[colors.linearGradientFrom, colors.linearGradientTo]}
    >
      {props.loading ? (
        <ActivityIndicator
          size="small"
          color="#ffffff"
          style={{ paddingRight: 10 }}
        />
      ) : null}
      <Value style={props.textStyle}>{props.title}</Value>
    </LinearGradientButton>
  </Button>
);
