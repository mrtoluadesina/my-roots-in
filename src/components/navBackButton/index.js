import React from "react";
import * as Progress from "react-native-progress";

import { Image, Platform } from "react-native";
import { Container, ProgressContainer, TouchableOpacity } from "./styles";

export default function NavBackButton({ onPress }) {
  return (
    <Container Platform={Platform}>
      <TouchableOpacity onPress={onPress}>
        <Image source={require("../../../assets/images/nav-back-button.png")} />
      </TouchableOpacity>
      <ProgressContainer>
        <Progress.Bar
          progress={0.5}
          color="#0AC4BA"
          unfilledColor="#EBF0FF"
          borderWidth={0}
          height={2}
          width={350}
          style={{ width: "90%" }}
        />
      </ProgressContainer>
    </Container>
  );
}
