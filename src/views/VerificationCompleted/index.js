import React from "react";
import { View, Text, ScrollView, StyleSheet, Image } from "react-native";
import { images } from "../../../assets/images";
import { SimpleLinearGradientButton } from "../../components/Buttons";

export default function VerificationCompleted() {
  return (
    <View style={styles.container}>
      <Image source={images.verification} style={styles.imageContainer}></Image>
      <View style={styles.section}>
        <Text style={styles.heading}>Verification successful</Text>
        <Text style={styles.paragraph}>
          Your verification has been verified please login with your details
        </Text>
        <SimpleLinearGradientButton
          title="Got it!"
          textStyle={styles.textColor}
          class={styles.fullWidth}
        ></SimpleLinearGradientButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 50,
    paddingTop: 0,
    paddingBottom: 0,
    marginVertical: "20%"
  },

  fullWidth: {
    marginTop: 35,
    width: "100%"
  },

  imageContainer: {
    width: 150,
    height: 150
  },
  textColor: {
    color: "white",
    fontSize: 14,
    fontFamily: "Helvetica-Bold"
  },
  section: {
    marginTop: 50,
    width: "90%",
    alignItems: "center"
  },

  heading: {
    fontSize: 20,
    lineHeight: 24,
    letterSpacing: 1,
    fontFamily: "Helvetica-Bold"
  },
  paragraph: {
    fontSize: 15,
    lineHeight: 18,
    letterSpacing: 0.5,
    fontFamily: "Helvetica",
    color: "#313543",
    width: 250,
    textAlign: "center",
    marginTop: 20
  }
});
