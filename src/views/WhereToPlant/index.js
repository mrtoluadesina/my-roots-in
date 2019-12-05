import React, { useEffect, useState } from "react";
import { Picker, View } from "react-native";
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
  ImageContainer
} from "./styles";
import { images } from "../../../assets/images";
import { SimpleButton } from "../../components/Buttons";
import { SimpleCard } from "../../components/Cards";
import { colors } from "../../constants/colors";
import RNPickerSelect from "react-native-picker-select";
import axios from "axios";
function WhereToPlant(props) {
  const { navigate } = props.navigation;
  const [countries, setCoutries] = useState([]);
  useEffect(() => {
    let obj = {};
    axios
      .get("https://restcountries.eu/rest/v2/region/africa")
      .then(res => {
        let data = res.data.reduce((acc, item, index) => {
          let value = item.name;
          let label = item.name;
          obj = { value, label };
          return acc.concat(obj);
        }, []);
        setCoutries(data);
      })
      .catch(error => {
        console.log("wsedrtgybh", error);
      });
  }, []);
  console.log(countries);
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
              <SimpleCard style={cardSizeStyle}>
                <RNPickerSelect
                  style={{}}
                  onValueChange={value => console.log(value)}
                  items={countries}
                >
                  <CardImage source={images.allCountriesImg} />
                  <CardTitle>54 Countries</CardTitle>
                </RNPickerSelect>
              </SimpleCard>
              <SimpleCard style={CountrySize}>
                <CardTitle>Great green wall</CardTitle>
                <CardTitle style={{ color: colors.rootGreenDark }}>
                  Learn more
                </CardTitle>
              </SimpleCard>
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
