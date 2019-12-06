import React, { useState } from "react";
import { TouchableOpacity, ImageBackground } from "react-native";
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
  buttonStyle,
  checkBoxStyle,
  CardImage
} from "./styles";

import { images } from "../../../assets/images";
import { SimpleButton } from "../../components/Buttons";
import { colors } from "../../constants/colors";
import { CheckBox } from "../../components/CheckBox";

export default function HowToPlant(props) {
  const { navigate, getParam } = props.navigation;

  const [selected, setSelected] = useState({ isSelected: "", label: "" });

  const handleChecked = ({ label, value }) => {
    setSelected({ ...selected, isSelected: value, label });
  };

  return (
    <ImageBackground
      source={images.howToPlantBgImg}
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
            <Greeting>How to plant a tree</Greeting>
            <Description>Choose how to plant your roots</Description>
            <Choices>
              <CheckBox
                label="remote"
                value="isRemote"
                checked={selected.isSelected == "isRemote" ? true : false}
                shadowColor={colors.rootShadow}
                handleChange={handleChecked}
                styles={checkBoxStyle}
              >
                {/* <images.RemoteImage /> */}
                <CardImage source={images.remoteImg} resizeMode={"contain"} />
                <CardTitle>birthdays</CardTitle>
              </CheckBox>
              <CheckBox
                label="person"
                value="isPerson"
                checked={selected.isSelected == "isPerson" ? true : false}
                shadowColor={colors.rootShadow}
                handleChange={handleChecked}
                styles={checkBoxStyle}
              >
                <images.InPersonImage />
                <CardTitle>birthdays</CardTitle>
              </CheckBox>
            </Choices>
          </Body>
          <SimpleButton
            title="Next"
            class={buttonStyle.fullWidth}
            textStyle={buttonStyle.textColor}
            onPress={() => navigate("TypeOfTree")}
          />
        </Background>
      </Container>
    </ImageBackground>
  );
}
