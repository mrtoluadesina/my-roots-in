import React from "react";

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
} from "./styles";

import { images } from "../../../assets/images";
import { SimpleLinearGradientButton } from "../../components/Buttons";
import { SimpleCard } from "../../components/Cards";
import { colors } from "../../constants/colors";

export default function HowToPlant() {
  return (
    <Container>
      <Background>
        <Header>
          <Greeting>Type of occasion</Greeting>
          <Avater source={images.getDefaultAvater}></Avater>
        </Header>
        <Body>
          <Description>Choose how to plant your roots</Description>
          <Choices>
            <SimpleCard style={cardSizeStyle}>
              <images.RemoteImage />
              <CardTitle>remote</CardTitle>
            </SimpleCard>
            <SimpleCard style={cardSizeStyle}>
              <images.InPersonImage />
              <CardTitle>in person</CardTitle>
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
          onPress={() => navigate("WhatTypeOfTree")}
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
