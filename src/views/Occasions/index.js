import React, { useState } from "react";
import { ImageBackground } from "react-native";
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
  checkBoxStyle,
  CardImage,
  styles
} from "./styles";

import { images } from "../../../assets/images";
import { SimpleButton } from "../../components/Buttons";
import { CheckBox } from "../../components/CheckBox";
import { colors } from "../../constants/colors";
import { typeOfOcassionMethod } from "../Dashboard/redux/action";

function OccasionTypes(props) {
  const { navigate, getParam } = props.navigation;

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
    const payload = label;

    props.handleOccasionType(payload);
    navigate("HowToPlant");
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
          <Body>
            <Greeting>
              Type of{" "}
              {JSON.stringify(getParam("label", "occasion")).slice(1, -1)}
            </Greeting>
            <Description>
              Choose the type of{" "}
              {JSON.stringify(getParam("label", "occasion")).slice(1, -1)}
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
                <CardImage source={images.giftImage} resizeMode={"contain"} />
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
                <CardImage
                  source={images.anniversaryImg}
                  resizeMode={"contain"}
                />
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
                <CardImage
                  source={images.holidayImage}
                  resizeMode={"contain"}
                />
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
                <CardImage source={images.otherImage} resizeMode={"contain"} />
                <CardTitle>others</CardTitle>
              </CheckBox>
            </Choices>
          </Body>
          <SimpleButton
            title="Next"
            class={styles.fullWidth}
            textStyle={styles.textColor}
            onPress={handleSubmit}
          />
        </Background>
      </Container>
      <Toaster ref={e => setToast(e)} />
    </ImageBackground>
  );
}

const mapStateToProps = ({roots}) => ({
  isLoading: roots.isLoading
})

const mapDispatchToProps = dispatch => ({
  handleOccasionType: payload => dispatch(typeOfOcassionMethod(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(OccasionTypes);