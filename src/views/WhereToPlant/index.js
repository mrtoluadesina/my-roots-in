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
  cardSizeStyle
} from "./styles";
import { images } from "../../../assets/images";
import { SimpleLinearGradientButton } from "../../components/Buttons";
import { SimpleCard } from "../../components/Cards";
import { colors } from "../../constants/colors";

function WhereToPlant(props) {
  const { navigate } = props.navigation;
  return (
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
              <CardImage source={images.allCountriesImg} />
              <CardTitle>54 Countries</CardTitle>
            </SimpleCard>
            <SimpleCard
              style={{
                ...cardSizeStyle,
                backgroundColor: "#79C700"
              }}
            >
              <CardImage source={images.greatGreenWallImg} />
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

export default WhereToPlant;
