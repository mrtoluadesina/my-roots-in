import React from "react";
import * as Progress from "react-native-progress";

import { Image, Platform } from "react-native";
import { Container, ProgressContainer, TouchableOpacity } from "./styles";
import { colors } from "../../constants/colors";
import { images } from "../../../assets/images";

export default function NavBackButton({
  onPress,
  showProgress,
  progressLevel
}) {
  return (
    <Container Platform={Platform}>
      <TouchableOpacity onPress={onPress}>
        <Image source={images.backButtonImg} />
      </TouchableOpacity>
      {showProgress ? (
        <ProgressContainer>
          <Progress.Bar
            progress={progressLevel}
            color={colors.rootGreenDark}
            unfilledColor={colors.unfilledColor}
            borderWidth={0}
            height={2}
            width={350}
            style={{ width: "90%" }}
          />
        </ProgressContainer>
      ) : null}
    </Container>
  );
}
