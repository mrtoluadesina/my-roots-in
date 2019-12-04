import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import {
  SimpleButton,
  SimpleLinearGradientButton
} from "../../components/Buttons";
import { colors } from "../../constants/colors";
import { images } from "../../../assets/images";
import { ImageBg, Container, Title } from "../Dashboard/styles";

export default function Home(props) {
  const { navigate } = props.navigation;

  return (
    <ImageBg imageStyle={styles.imageBg} source={images.getStartedBgImg}>
      <Container>
        <View style={styles.header}>
          <Title>World's #1</Title>
          <Title>Climate Action App.</Title>
          <View style={{ ...styles.imageWrapper, ...styles.padUp }}>
            <Image style={styles.image} source={images.getStartedImg} />
          </View>
          <Title>I can literally say</Title>
          <Title>i have roots in Africa!</Title>
        </View>
        <View style={{ ...styles.buttonWrapper, ...styles.padUp }}>
          <SimpleLinearGradientButton
            class={styles.btnGradient}
            textStyle={styles.whiteText}
            title="Login"
            onPress={() => navigate("Login")}
          />
          <SimpleButton
            class={styles.btnWhite}
            textStyle={styles.blackText}
            title="Signup"
            onPress={() => navigate("Signup")}
          />
        </View>
      </Container>
    </ImageBg>
  );
}

const styles = StyleSheet.create({
  imageBg: {
    resizeMode: "stretch"
  },
  content: {
    flex: 1,
    marginTop: 20,
    alignItems: "center"
  },
  header: {
    width: "100%",
    alignItems: "center"
  },
  padUp: {
    paddingTop: 40
  },
  btnGradient: {
    marginVertical: 10
  },
  btnWhite: {
    backgroundColor: colors.rootWhite,
    paddingVertical: 15,
    marginVertical: 10,
    shadowOffset: {
      width: 0,
      height: 15
    },
    shadowRadius: 55,
    shadowOpacity: 0.7,
    shadowColor: colors.rootShadow,
    elevation: 1
  },
  imageWrapper: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center"
  },
  image: {
    width: "100%",
    resizeMode: "contain"
  },
  whiteText: {
    color: colors.rootWhite
  },
  blackText: {
    color: colors.rootBlack
  },
  buttonWrapper: {
    width: "100%",
    alignItems: "center"
  },
  subtitle: {
    fontSize: 20,
    opacity: 0.7,
    letterSpacing: 1,
    color: colors.rootGreenDark
  }
});
