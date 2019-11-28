import React from "react";
import { Text } from "react-native";
import { Button, LinearGradientButton } from "./style";
import {colors} from '../../constants/colors';

export const SimpleButton = props => (
  <Button style={props.class} onPress={props.onPress}>
    <Text style={props.textStyle}>{props.title}</Text>
  </Button>
);

export const SimpleLinearGradientButton = props => (
  <Button style={props.class} onPress={props.onPress}>
    <LinearGradientButton
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      colors={[colors.linearGradientFrom, colors.linearGradientTo]}
    >
      <Text style={props.textStyle}>{props.title}</Text>
    </LinearGradientButton>
  </Button>
);
