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
  CardImage,
  CardPrice
} from "./styles";

import { images } from "../../../assets/images";
import { SimpleLinearGradientButton } from "../../components/Buttons";
import { SimpleCard } from "../../components/Cards";
import { colors } from "../../constants/colors";

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
        <SimpleLinearGradientButton
          title="Next"
          class={{
            width: "90%"
          }}
          textStyle={{
            color: colors.rootWhite,
            fontSize: 14
          }}
          onPress={() => navigate("Payment")}
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
  borderRadius: 2,
  shadowColor: `${colors.boxShadow}`,
  shadowOffset: { width: 0, height: 3 },
  shadowOpacity: 1,
  shadowRadius: 6,
  elevation: 10
};
