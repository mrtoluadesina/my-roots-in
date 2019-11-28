import React from "react";
import { StyleSheet, Text, ScrollView, View, Alert, Image } from "react-native";
import {
  SimpleButton,
  SimpleLinearGradientButton
} from "../../components/Buttons";
import { colors } from "../../constants/colors";
import { images } from "../../../assets/images";

export default function Home(props) {
  const { navigate } = props.navigation;

  return (
    <ScrollView contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <Text style={styles.title}>Your home. Greener.</Text>
        <Text style={styles.subtitle}>Enjoy the experience.</Text>
      </View>
      <View style={styles.imageWrapper}>
        <Image style={styles.image} source={images.getStartedImg} />
      </View>
      <View style={styles.buttonWrapper}>
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
        <SimpleButton
          title="Terms of service"
          onPress={() => Alert.alert("Simple Button")}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: "Helvetica-Bold",
    fontWeight: "800",
    backgroundColor: colors.rootWhite
  },
  content: {
    flex: 1,
    marginTop: 10,
    alignItems: "center",
    justifyContent: "space-evenly"
  },
  header: {
    width: "100%",
    alignItems: "center"
  },
  btn: {
    backgroundColor: colors.rootGreenLight,
    paddingVertical: 15,
    marginVertical: 10
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
    height: 300,
    marginVertical: 50,
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
  title: {
    fontSize: 30
  },
  subtitle: {
    fontSize: 20,
    opacity: 0.3
  }
});
