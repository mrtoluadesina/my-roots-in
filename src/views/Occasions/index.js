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
  CardTitle,
  cardSizeStyle
} from "./styles";

import { images } from "../../../assets/images";
import { SimpleLinearGradientButton } from "../../components/Buttons";
import { SimpleCard } from "../../components/Cards";
import { colors } from "../../constants/colors";

export default function OccasionTypes() {
  return (
    <Container>
      <Background>
        <Header>
          <Greeting>Type of occasion</Greeting>
          <Avater source={images.getDefaultAvater}></Avater>
        </Header>
        <Body>
          <Description>Choose the type of occasion</Description>
          <Choices>
            <SimpleCard style={cardSizeStyle}>
              <images.GiftImage />
              <CardTitle>birthdays</CardTitle>
            </SimpleCard>
            <SimpleCard style={cardSizeStyle}>
              <images.AnniversaryImage />
              <CardTitle>anniversary</CardTitle>
            </SimpleCard>
            <SimpleCard style={cardSizeStyle}>
              <images.HolidayImage />
              <CardTitle>holidays</CardTitle>
            </SimpleCard>
            <SimpleCard style={cardSizeStyle}>
              <images.OtherImage />
              <CardTitle>others</CardTitle>
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
          onPress={() => navigate("HowToPlant")}
        />
      </Background>
    </Container>
  );
}
