import React, { useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { images } from "../../../assets/images";
import { colors } from "../../constants/colors";
import { SimpleButton } from "../../components/Buttons";
import { CheckBox } from "../../components/CheckBox";
import { Check } from "../../components/CheckBox/styles";

export default function PlantTree(props) {
  const { navigate } = props.navigation;

  const [options, setOptions] = useState({ isOccasion: false, isGift: false });

  const handleChecked = key => {
    setOptions({ ...options, [key]: !options[key] });
  };

  return (
    <ScrollView>
      <View style={styles.pageHeader}>
        <Text style={styles.headerText}>Why plant a tree</Text>
        <Image style={styles.imageStyle} source={images.getDefaultAvatar} />
      </View>
      <View style={styles.briefView}>
        <Text style={styles.mainBrief}>
          Choose the reason for planting your roots
        </Text>
      </View>
      <View style={styles.selectOptions}>
        <View style={styles.singleSelect}>
          <Image style={styles.singleSelectImage} source={images.climateImg} />
          <View style={styles.description}>
            <Text style={styles.reason}>Climate action</Text>
            <Text style={styles.action}>To support climate action</Text>
          </View>
          <CheckBox
            label="climate"
            value="isClimate"
            checked={true}
            shadowColor={colors.rootShadow}
            backgroundColor={colors.rootGreenDark}
            handleChange={handleChecked}
          >
            <Check source={images.tickImg} resizeMode="contain"></Check>
          </CheckBox>
        </View>
        <View style={styles.singleSelect}>
          <Image style={styles.singleSelectImage} source={images.jobsImg} />
          <View style={styles.description}>
            <Text style={styles.reason}>Create a job</Text>
            <Text style={styles.action}>To create jobs inside africa</Text>
          </View>
          <CheckBox
            label="job"
            value="isJob"
            checked={true}
            shadowColor={colors.rootShadow}
            backgroundColor={colors.rootGreenDark}
            handleChange={handleChecked}
          >
            <Check source={images.tickImg} resizeMode="contain"></Check>
          </CheckBox>
        </View>
        <View style={styles.singleSelect}>
          <Image style={styles.singleSelectImage} source={images.occasionImg} />
          <View style={styles.description}>
            <Text style={styles.reason}>For occasion</Text>
            <Text style={styles.action}>To mark a special occasion </Text>
          </View>
          <CheckBox
            label="occasion"
            value="isOccasion"
            shadowColor={colors.rootShadow}
            backgroundColor={colors.rootGreenDark}
            checked={options.isOccasion}
            handleChange={handleChecked}
          >
            <Check source={images.tickImg} resizeMode="contain"></Check>
          </CheckBox>
        </View>
        <View style={styles.singleSelect}>
          <Image style={styles.singleSelectImage} source={images.giftImg} />
          <View style={styles.description}>
            <Text style={styles.reason}>For gift</Text>
            <Text style={styles.action}>To gift to self or loved one</Text>
          </View>
          <CheckBox
            label="gift"
            value="isGift"
            shadowColor={colors.rootShadow}
            backgroundColor={colors.rootGreenDark}
            checked={options.isGift}
            handleChange={handleChecked}
          >
            <Check source={images.tickImg} resizeMode="contain"></Check>
          </CheckBox>
        </View>
      </View>
      <View style={styles.briefView}>
        <SimpleButton
          title="Next"
          class={{
            marginTop: 50,
            width: "70%"
          }}
          textStyle={{
            color: colors.rootWhite,
            fontSize: 14
          }}
          onPress={() => navigate("HowToPlant")}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  pageHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 30,
    paddingVertical: 20
  },
  imageStyle: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2
  },
  headerText: {
    fontSize: 25,
    fontWeight: "300"
  },
  briefView: {
    alignItems: "center",
    marginVertical: 15
  },
  mainBrief: {
    fontSize: 25,
    fontWeight: "500",
    width: "70%",
    textAlign: "center"
  },
  selectOptions: {
    marginTop: 20
  },
  singleSelect: {
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "#f2f3f4",
    paddingVertical: 10,
    paddingTop: 30,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center"
  },
  singleSelectImage: {
    width: 50,
    height: 50,
    borderRadius: 4
  },
  description: {
    flex: 1,
    marginLeft: 30,
    justifyContent: "center"
  },
  reason: {
    fontSize: 15,
    fontFamily: "Helvetica-Bold",
    lineHeight: 18,
    fontWeight: "800",
    color: colors.rootBlack
  },
  action: {
    fontSize: 12,
    fontFamily: "Helvetica",
    lineHeight: 14,
    letterSpacing: 1,
    color: colors.rootInputLabel
  }
});
