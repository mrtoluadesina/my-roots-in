import React from 'react';

import {
  Container,
  Background,
  Greeting,
  Header,
  Avater,
  Description,
  Body,
  Choices,
  CardTitle,
  CardImage,
  CardPrice,
  cardSizeStyle,
  GradientBtn,
} from './styles';

import { images } from '../../../assets/images';
import { SimpleButton } from '../../components/Buttons';
import { SimpleCard } from '../../components/Cards';
import { colors } from '../../constants/colors';

export default function OccasionTypes(props) {
  const { navigate } = props.navigation;

  return (
    <Container>
      <Background>
        <Header>
          <Greeting>What type of tree</Greeting>
          <Avater source={images.getDefaultAvater}></Avater>
        </Header>
        <Body>
          <Description>
            Choose the type of tree for planting your roots
          </Description>
          <Choices>
            <SimpleCard style={cardSizeStyle}>
              <CardImage source={images.decorationImg} resizeMode="contain" />
              <CardPrice>$50</CardPrice>
              <CardTitle>decoration trees</CardTitle>
            </SimpleCard>
            <SimpleCard style={cardSizeStyle}>
              <CardImage source={images.fruitsImg} resizeMode="contain" />
              <CardPrice>$50</CardPrice>
              <CardTitle>fruit trees</CardTitle>
            </SimpleCard>
            <SimpleCard style={cardSizeStyle}>
              <CardImage
                source={images.environmentalImg}
                resizeMode="contain"
              />
              <CardPrice>$50</CardPrice>
              <CardTitle>environmental trees</CardTitle>
            </SimpleCard>
          </Choices>
        </Body>
        <SimpleButton
          title="Submit"
          class={GradientBtn}
          textStyle={{
            color: colors.rootWhite,
            fontSize: 14,
          }}
          onPress={() => navigate('Payment')}
        />
      </Background>
    </Container>
  );
}
