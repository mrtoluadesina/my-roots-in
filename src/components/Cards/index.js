import React from "react";
import { Alert } from "react-native";
import { Card } from "./style";

export const SimpleCard = props => (
  <Card onPress={() => Alert.alert("This is how to press it")}>
    {props.children}
  </Card>
);
