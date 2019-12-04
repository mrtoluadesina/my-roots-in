import React from 'react';
import * as Progress from 'react-native-progress';

import { Image, Platform } from 'react-native';
import { Container, ProgressContainer, TouchableOpacity } from './styles';
import { colors } from '../../constants/colors';

export default function NavBackButton({
  onPress,
  showProgress,
  progressLevel,
}) {
  return (
    <Container Platform={Platform}>
      <TouchableOpacity onPress={onPress}>
        <Image source={require('../../../assets/images/nav-back-button.png')} />
      </TouchableOpacity>
      <ProgressContainer>
        <Progress.Bar
          progress={progressLevel}
          color={colors.rootGreenDark}
          unfilledColor={colors.unfilledColor}
          borderWidth={0}
          height={2}
          width={350}
          style={{ width: '90%' }}
        />
      </ProgressContainer>
      {showProgress ? (
        <ProgressContainer>
          <Progress.Bar
            progress={0.5}
            color={colors.rootGreenDark}
            unfilledColor={colors.unfilledColor}
            borderWidth={0}
            height={2}
            width={350}
            style={{ width: '90%' }}
          />
        </ProgressContainer>
      ) : null}
    </Container>
  );
}
