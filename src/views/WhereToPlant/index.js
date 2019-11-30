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
  CardTitle
} from './styles';
import {images} from '../../../assets/images';
import {SimpleLinearGradientButton} from "../../components/Buttons";
import {SimpleCard} from '../../components/Cards';
import {colors} from "../../constants/colors";

function WhereToPlant(props) {
  const {navigate} = props.navigation
  return(
    <Container>
      <Background>
        <Header>
          <Greeting>Where to plant</Greeting>
          <Avater source={images.getDefaultAvatar}></Avater>
        </Header>
        <Body>
          <Description>Choose the location to plant your roots</Description>
          <Choices>
            <SimpleCard style={cardSizeStyle}>
              <images.GiftImage />
              <CardTitle>54 Countries</CardTitle>
            </SimpleCard>
            <SimpleCard style={cardSizeStyle}>
              <images.AnniversaryImage />
              <CardTitle>Great green wall</CardTitle>
            </SimpleCard>
          </Choices>
        </Body>
        <SimpleLinearGradientButton
          title="Next"
          class={{
            width: "90%"
          }}
          textStyle={{
            color: colors.rootWhite,
            fontSize: 14
          }}
          onPress={() => navigate("PlantTree")}
        />
      </Background>
    </Container>
  );
}

const cardSizeStyle = {
  height: 105,
  width: 110,
  marginBottom: 50,
  position: "relative",
  alignItems: "center",
  justifyContent: "center",
  borderWidth: 0.5,
  borderRadius: 2,
  borderColor: `${colors.boxShadow}`,
  borderBottomWidth: 0,
  shadowColor: `${colors.boxShadow}`,
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.5,
  shadowRadius: 2,
  elevation: 2
};

export default WhereToPlant;