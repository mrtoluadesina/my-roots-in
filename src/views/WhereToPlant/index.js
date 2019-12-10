import React, { useState } from "react";
import RNPickerSelect from "react-native-picker-select";
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
  ImageContainer,
  checkBoxStyle,
  buttonStyle
} from "./styles";

import { images } from "../../../assets/images";
import { SimpleButton } from "../../components/Buttons";
import { colors } from "../../constants/colors";
import metadata from "../../constants/meta";
import { CheckBox } from "../../components/CheckBox";

function WhereToPlant(props) {
  const { navigate } = props.navigation;

  const [whereToPlant, setWhereToPlant] = useState({ selected: "" });
  const [toast, setToast] = useState({});

  const handleChange = selected => {
    console.log(selected);
    setWhereToPlant({ ...whereToPlant, selected });
  };

  const handleSubmit = () => {
    console.log(selected);
    const { selected } = whereToPlant;
    if (!selected.length) {
      return toast.show("Please select an option!");
    }
    navigate("PlantTree");
  };

  const { greatGreenWallCountries, allAfricanCountries } = metadata;

  return (
    <ImageContainer source={images.whereToPlantATreeBgImg}>
      <Container>
        <Background>
          <Body>
            <Greeting>Where to plant</Greeting>
            <Description>Choose the location to plant your roots</Description>
            <Choices>
              <CheckBox
                label="54Countries"
                value="is54Countries"
                shadowColor={colors.rootShadow}
                styles={checkBoxStyle}
              >
                <RNPickerSelect
                  onValueChange={handleChange}
                  items={allAfricanCountries}
                  style={{
                    width: "100%",
                    height: "100%"
                  }}
                >
                  <CardImage
                    source={images.allCountriesImg}
                    resizeMode="contain"
                  />
                  <CardTitle>54 countries</CardTitle>
                </RNPickerSelect>
              </CheckBox>

              <CheckBox
                label="greatGreenWall"
                value="isGreatGreenWall"
                shadowColor={colors.rootShadow}
                styles={checkBoxStyle}
              >
                <RNPickerSelect
                  onValueChange={handleChange}
                  items={greatGreenWallCountries}
                >
                  <CardImage
                    source={images.greatGreenWallImg}
                    resizeMode="contain"
                  />
                  <CardTitle>great green wall</CardTitle>
                </RNPickerSelect>
              </CheckBox>
            </Choices>
          </Body>
          <SimpleButton
            title="Next"
            class={buttonStyle.fullWidth}
            textStyle={buttonStyle.textColor}
            onPress={handleSubmit}
          />
        </Background>
      </Container>
      <Toaster ref={e => setToast(e)} />
    </ImageContainer>
  );
}

export default WhereToPlant;
