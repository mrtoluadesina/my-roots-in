import React, { useEffect, useState } from "react";
import axios from "axios";
import RNPickerSelect from "react-native-picker-select";

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
  const [countries, setCountries] = useState([]);
  const [whereToPlant, setWhereToPlant] = useState({ selected: "" });
  const [selected, setSelected] = useState({ isSelected: "", label: "" });

  const handleChange = selected => setWhereToPlant({ selected });

  const handleChecked = ({ label, value }) => {
    setSelected({ ...selected, isSelected: value, label });
  };

  const { navigate } = props.navigation;

  const { greatGreenWallCountries } = metadata;

  useEffect(() => {
    axios
      .get("https://restcountries.eu/rest/v2/region/africa")
      .then(({ data }) => {
        const countries = data.reduce((acc, { name }) => {
          const country = { value: name, label: name };
          return [...acc, country];
        }, []);
        setCountries(countries);
      })
      .catch(console.log);
  }, []);
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
                checked={selected.isSelected == "is54Countries" ? true : false}
                shadowColor={colors.rootShadow}
                handleChange={handleChecked}
                styles={checkBoxStyle}
              >
                <RNPickerSelect
                  onValueChange={handleChange}
                  items={countries}
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
                checked={
                  selected.isSelected == "isGreatGreenWall" ? true : false
                }
                shadowColor={colors.rootShadow}
                handleChange={handleChecked}
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
            onPress={() => navigate("PlantTree")}
          />
        </Background>
      </Container>
    </ImageContainer>
  );
}

export default WhereToPlant;
