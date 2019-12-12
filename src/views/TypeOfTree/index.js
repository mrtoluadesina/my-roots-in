import React, { useState } from "react";
import { ImageBackground } from "react-native";
import Toaster from "react-native-easy-toast";

import {
  Container,
  Background,
  Greeting,
  Description,
  Body,
  Choices,
  CardTitle,
  CardImage,
  buttonStyle,
  checkBoxStyle
} from "./styles";

import { images } from "../../../assets/images";
import { SimpleButton } from "../../components/Buttons";
import { colors } from "../../constants/colors";
import { CheckBox } from "../../components/CheckBox";

export default function OccasionTypes(props) {
  const [selected, setSelected] = useState({ isSelected: "", label: "" });
  const [toast, setToast] = useState({});

  const handleChecked = ({ label, value }) => {
    setSelected({ ...selected, isSelected: value, label });
  };

  const handleSubmit = () => {
    const { isSelected, label } = selected;
    if (!isSelected.length && !label.length) {
      return toast.show("Please select an option!");
    }

    // payload
    const treeType = label;

    // do your redux logic here

    navigate("PlantedSuccessfully");
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
          <Body>
            <Greeting>What type of tree</Greeting>
            <Description>
              Choose the type of tree for planting your roots
            </Description>
            <Choices>
              <CheckBox
                label="decorationTree"
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
                label="fruitTree"
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
                label="environmentalTree"
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
            class={buttonStyle.fullWidth}
            textStyle={buttonStyle.textColor}
            onPress={handleSubmit}
          />
        </Background>
      </Container>
      <Toaster ref={e => setToast(e)} />
    </ImageBackground>
  );
}
