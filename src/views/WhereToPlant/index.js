import React, { useState } from "react";
import RNPickerSelect from "react-native-picker-select";
import Toaster from "react-native-easy-toast";
import {connect} from 'react-redux';
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
  buttonStyle,
  SelectedCountry,
  SelectedCountryCard
} from "./styles";

import { images } from "../../../assets/images";
import { SimpleButton } from "../../components/Buttons";
import { colors } from "../../constants/colors";
import metadata from "../../constants/meta";
import { CheckBox } from "../../components/CheckBox";
import { whereToPlantMethod } from "../Dashboard/redux/action";

function WhereToPlant(props) {
  const { navigate } = props.navigation;

  const [whereToPlant, setWhereToPlant] = useState({
    country: "",
    locationType: ""
  });

  const [toast, setToast] = useState({});

  const handleChange = locationType => country => {
    setWhereToPlant({ ...whereToPlant, locationType, country });
  };

  const handleSubmit = async () => {
    const { country, locationType } = whereToPlant;
    if (!country.length && !locationType.length) {
      return toast.show("Please select an option!");
    }

    // payload
    const payload = { country, locationType };

    // do your redux logic here
    await props.handleWhereToPlant(payload);
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

            <SelectedCountryCard>
              <SelectedCountry>
                {whereToPlant.country
                  ? whereToPlant.country
                  : "Country of choice"}
              </SelectedCountry>
            </SelectedCountryCard>
            <Choices>
              <CheckBox
                label="54Countries"
                value="is54Countries"
                shadowColor={colors.rootShadow}
                styles={checkBoxStyle}
              >
                <RNPickerSelect
                  onValueChange={handleChange("54C")}
                  items={allAfricanCountries}
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
                  onValueChange={handleChange("GGW")}
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

const mapStateToProps = ({roots}) => ({
  isLoading: roots.isLoading,
});

const mapDispatchToProps = dispatch => ({
  handleWhereToPlant: payload => dispatch(whereToPlantMethod(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(WhereToPlant);
