import React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  View,
  Alert,
  Image
} from "react-native";
import { SimpleButton } from "../../components/Buttons";
import { colors } from "../../constants/colors";

export default function Home() {
  return (
    <ScrollView contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <Text>Landing page</Text>
        <Text>My Roots In</Text>
      </View>
      <View style={styles.imageWrapper}>
        <Image
          style={styles.image}
          source={require("../../../assets/images/get-started-tree.png")}
        />
      </View>
      <View style={styles.buttonWrapper}>
        <SimpleButton
          class={styles.btn}
          textStyle={styles.whiteText}
          title="Press Me"
          onPress={() => Alert.alert("Simple Button")}
        />
        <SimpleButton
          class={styles.btnWhite}
          textStyle={styles.blackText}
          title="Press Me"
          onPress={() => Alert.alert("Simple Button")}
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
    backgroundColor: colors.rootGreen,
    paddingVertical: 15,
    marginVertical: 5,
    shadowColor: colors.rootBlack,
  },
  btnWhite: {
    backgroundColor: colors.rootWhite,
    paddingVertical: 15,
    marginVertical: 5,
    shadowColor: colors.rootBlack,
    shadowOpacity: 0.15,
    shadowOffset: {
      width: 1,
      height: 4
    }
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
    width: '100%',
    alignItems: "center",
  }
});
