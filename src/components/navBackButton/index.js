import React from "react";
import * as Progress from "react-native-progress";

import { Platform } from "react-native";
import {
  Container,
  ProgressContainer,
  TouchableOpacity,
  CardImage
} from "./styles";
import { colors } from "../../constants/colors";
import { images } from "../../../assets/images";

export default function NavBackButton({
  onPress,
  showProgress,
  progressLevel,
  styles
}) {
  return (
    <Container Platform={Platform} style={styles}>
      <TouchableOpacity onPress={onPress}>
        <CardImage source={images.backButtonImg} resizeMode="contain" />
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
            style={{ width: "95%" }}
          />
        </ProgressContainer>
      ) : null}
    </Container>
  );
}
