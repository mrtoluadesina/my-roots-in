import React from "react";
import { StyleSheet, View, Image } from "react-native";
import {
  SimpleButton
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
            <Image source={images.getStartedImg} />
          </View>
          <Title>I can literally say</Title>
          <Title>i have roots in Africa!</Title>
        </View>
        <View style={{ ...styles.buttonWrapper, ...styles.padUp }}>
          <SimpleButton
            class={styles.btn}
            title="Login"
            onPress={() => navigate("Login")}
          />
          <SimpleButton
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
  header: {
    width: "100%",
    alignItems: "center"
  },
  padUp: {
    paddingTop: 50
  },
  btn: {
    backgroundColor: colors.rootGreenDark
  },
  imageWrapper: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center"
  },
  buttonWrapper: {
    width: "100%",
    alignItems: "center"
  }
});
