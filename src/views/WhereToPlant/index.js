import React, { useEffect, useState } from "react";
import axios from "axios";
import RNPickerSelect from "react-native-picker-select";

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
  cardSizeStyle,
  CountrySize,
  ImageContainer,
  checkBoxStyle
} from "./styles";

import { images } from "../../../assets/images";
import { SimpleButton } from "../../components/Buttons";
import { SimpleCard } from "../../components/Cards";
import { colors } from "../../constants/colors";
import { CheckBox } from "../../components/CheckBox";

function WhereToPlant(props) {
  const { navigate } = props.navigation;
  const [countries, setCountries] = useState([]);
  const [whereToPlant, setWhereToPlant] = useState({ selected: "" });
  const [selected, setSelected] = useState({ isSelected: "", label: "" });

  const handleChange = selected => setWhereToPlant({ selected });

  const handleChecked = ({ label, value }) => {
    setSelected({ ...selected, isSelected: value, label });
  };

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
          <Header>
            <Avater source={images.getDefaultAvatar}></Avater>
          </Header>
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
                <RNPickerSelect onValueChange={handleChange} items={countries}>
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
                <CardImage
                  source={images.greatGreenWallImg}
                  resizeMode="contain"
                />
                <CardTitle>great green wall</CardTitle>
              </CheckBox>
            </Choices>
          </Body>
          <SimpleButton
            title="Next"
            class={{
              width: "90%",
              backgroundColor: colors.rootGreenDark,
              shadowColor: colors.rootGreenDark,
              shadowOffset: {
                width: 0,
                height: 10
              },
              shadowOpacity: 0.51,
              shadowRadius: 16.16,
              elevation: 24
            }}
            textStyle={{
              color: colors.rootWhite,
              fontSize: 14
            }}
            onPress={() => navigate("PlantTree")}
          />
        </Background>
      </Container>
    </ImageContainer>
  );
}

export default WhereToPlant;
