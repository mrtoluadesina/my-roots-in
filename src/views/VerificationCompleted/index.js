import React from "react";
import { View, Text, ScrollView, StyleSheet, Image } from "react-native";

export default function VerificationCompleted() {
  return (
    <ScrollView style={styles.main}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image></Image>
          <Text>Image for children playing</Text>
        </View>
        <View style={styles.article}>
          <Text style={styles.heading}>Verification successful</Text>
          <Text style={styles.paragraph}>
            Your verification has been verified
          </Text>
          <Text style={styles.paragraph}>please login with your details</Text>
        </View>
        <View style={styles.footer}>
          <Text>Got it!</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  container: {
    borderStyle: "solid",
    borderColor: "red",
    backgroundColor: "grey",
    width: "80%",
    height: 500,
    alignItems: "center",
    justifyContent: "center"
  },
  imageContainer: {},
  article: {},
  heading: {},
  paragraph: {}
});
