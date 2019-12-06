import React, { useState } from "react";
import { ImageBackground, TouchableOpacity, Alert } from "react-native";

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
  GradientBtn,
  checkBoxStyle
} from "./styles";

import { images } from "../../../assets/images";
import { SimpleButton } from "../../components/Buttons";
import { colors } from "../../constants/colors";
import { CheckBox } from "../../components/CheckBox";

export default function OccasionTypes(props) {
  const [selected, setSelected] = useState({ isSelected: "", label: "" });

  const handleChecked = ({ label, value }) => {
    setSelected({ ...selected, isSelected: value, label });
  };

  const { navigate } = props.navigation;

  return (
    <ImageBackground
      source={images.whatTypeOfTreeBgImg}
      style={{
        flex: 1,
        width: "100%"
      }}
      imageStyle={{ resizeMode: "stretch" }}
    >
      <Container>
        <Background>
          <Header>
            <TouchableOpacity onPress={() => navigate("Settings")}>
              <Avater source={images.getDefaultAvatar}></Avater>
            </TouchableOpacity>
          </Header>
          <Body>
            <Greeting>What type of tree</Greeting>
            <Description>
              Choose the type of tree for planting your roots
            </Description>
            <Choices>
              <CheckBox
                label="decoration"
                value="isDecoration"
                checked={selected.isSelected == "isDecoration" ? true : false}
                shadowColor={colors.rootShadow}
                handleChange={handleChecked}
                styles={checkBoxStyle}
              >
                <CardImage source={images.decorationImg} resizeMode="contain" />
                <CardTitle>decoration trees</CardTitle>
              </CheckBox>
              <CheckBox
                label="fruit"
                value="isFruit"
                checked={selected.isSelected == "isFruit" ? true : false}
                shadowColor={colors.rootShadow}
                handleChange={handleChecked}
                styles={checkBoxStyle}
              >
                <CardImage source={images.fruitsImg} resizeMode="contain" />
                <CardTitle>fruit trees</CardTitle>
              </CheckBox>
              <CheckBox
                label="environmental"
                value="isEnvironmental"
                checked={
                  selected.isSelected == "isEnvironmental" ? true : false
                }
                shadowColor={colors.rootShadow}
                handleChange={handleChecked}
                styles={checkBoxStyle}
              >
                <CardImage
                  source={images.environmentalImg}
                  resizeMode="contain"
                />
                <CardTitle>environmental trees</CardTitle>
              </CheckBox>
            </Choices>
          </Body>
          <SimpleButton
            title="Submit"
            class={GradientBtn}
            textStyle={{
              color: colors.rootWhite,
              fontSize: 14
            }}
            onPress={() => navigate("PlantedSuccessfully")}
          />
        </Background>
      </Container>
    </ImageBackground>
  );
}
