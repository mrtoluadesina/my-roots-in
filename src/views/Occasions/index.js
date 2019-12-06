import React, { useState } from "react";
import { ImageBackground } from "react-native";

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
  checkBoxStyle,
  styles
} from "./styles";

import { images } from "../../../assets/images";
import { SimpleButton } from "../../components/Buttons";
import { CheckBox } from "../../components/CheckBox";
import { colors } from "../../constants/colors";

export default function OccasionTypes(props) {
  const { navigate } = props.navigation;

  const [selected, setSelected] = useState({ isSelected: "" });

  const handleChecked = key => {
    setSelected({ ...selected, isSelected: key });
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
            <Avater source={images.getDefaultAvatar}></Avater>
          </Header>
          <Body>
            <Greeting>
              Type of {props.title ? props.title : "occasion"}
            </Greeting>
            <Description>
              Choose the type of {props.title ? props.title : "occasion"}
            </Description>
            <Choices>
              <CheckBox
                label="birthday"
                value="isBirthday"
                checked={selected.isSelected == "isBirthday" ? true : false}
                shadowColor={colors.rootShadow}
                handleChange={handleChecked}
                styles={checkBoxStyle}
              >
                <images.GiftImage />
                <CardTitle>birthdays</CardTitle>
              </CheckBox>
              <CheckBox
                label="anniversary"
                value="isAnniversary"
                checked={selected.isSelected == "isAnniversary" ? true : false}
                shadowColor={colors.rootShadow}
                handleChange={handleChecked}
                styles={checkBoxStyle}
              >
                <images.AnniversaryImg />
                <CardTitle>anniversary</CardTitle>
              </CheckBox>
              <CheckBox
                label="holidays"
                value="isHolidays"
                checked={selected.isSelected == "isHolidays" ? true : false}
                shadowColor={colors.rootShadow}
                handleChange={handleChecked}
                styles={checkBoxStyle}
              >
                <images.HolidayImage />
                <CardTitle>holidays</CardTitle>
              </CheckBox>
              <CheckBox
                label="others"
                value="isOthers"
                checked={selected.isSelected == "isOthers" ? true : false}
                shadowColor={colors.rootShadow}
                handleChange={handleChecked}
                styles={checkBoxStyle}
              >
                <images.OtherImage />
                <CardTitle>others</CardTitle>
              </CheckBox>
            </Choices>
          </Body>
          <SimpleButton
            title="Next"
            class={styles.fullWidth}
            textStyle={styles.textColor}
            onPress={() => navigate("HowToPlant")}
          />
        </Background>
      </Container>
    </ImageBackground>
  );
}
