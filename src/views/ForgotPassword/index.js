import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView
} from "react-native";
import CustomInput from "../../components/Input";
import {
  SimpleLinearGradientButton,
  SimpleButton
} from "../../components/Buttons";
import { images } from "../../../assets/images";
import { colors } from "../../constants/colors";

function ForgotPassword(props) {
  const { navigate } = props.navigation;

  const [value, setValue] = useState({ email: "" });

  const handleChange = email => setValue({ ...email, email });

  return (
    <ScrollView contentContainerStyle={styles.content}>
      <KeyboardAvoidingView
        behavior="position"
        contentContainerStyle={styles.wrapper}
      >
        <View style={styles.header}>
          <Text style={styles.title}>Forgot Password</Text>
        </View>
        <View style={styles.imageWrapper}>
          <Image style={styles.image} source={images.forgotPasswordImg} />
        </View>
        <View style={styles.formWrapper}>
          <CustomInput
            defaultValue={value.email}
            textContentType={"emailAddress"}
            onChangeText={handleChange}
            label="Email"
            style={{ marginBottom: 26 }}
          />
        </View>
        <View style={styles.buttonWrapper}>
          <SimpleLinearGradientButton
            class={styles.btnGradient}
            textStyle={styles.whiteText}
            title="Login"
            onPress={() => navigate("Login")}
          />
          <SimpleButton
            title="Remembered your login"
            onPress={() => navigate("Login")}
          />
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30
  },
  wrapper: {
    height: "100%",
    alignItems: "center",
    justifyContent: "space-evenly"
  },
  content: {
    flex: 1
  },
  header: {
    width: "80%"
  },
  imageWrapper: {
    width: "80%",
    height: 150,
    marginVertical: 50,
    alignItems: "center",
    justifyContent: "center"
  },
  image: {
    width: "100%",
    resizeMode: "contain"
  },
  buttonWrapper: {
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
  whiteText: {
    color: colors.rootWhite
  },
  blackText: {
    color: colors.rootBlack
  },
  formWrapper: {
    width: "80%"
  }
});

export default ForgotPassword;
