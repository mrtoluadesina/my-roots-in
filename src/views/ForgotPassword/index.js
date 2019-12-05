import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView
} from "react-native";
import { CustomInput } from "../../components/Input";
import { Container, BigTitle } from "../Dashboard/styles";
import { SimpleButton, LinkButton } from "../../components/Buttons";
import { images } from "../../../assets/images";
import { colors } from "../../constants/colors";

function ForgotPassword(props) {
  const { navigate } = props.navigation;

  const [value, setValue] = useState({ email: "" });

  const handleChange = email => setValue({ ...email, email });

  return (
    <KeyboardAvoidingView
      behavior="position"
      contentContainerStyle={styles.wrapper}
    >
      <Container style={styles.content}>
        <View style={styles.header}>
          <BigTitle>Forgot Password</BigTitle>
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
          <SimpleButton
            class={styles.btn}
            textStyle={styles.whiteText}
            title="Login"
            onPress={() => navigate("Login")}
          />
          <LinkButton
            title="Remembered your login"
            textStyle={styles.blackText}
            onPress={() => navigate("Login")}
          />
        </View>
      </Container>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    height: "100%",
    alignItems: "center"
  },
  content: {
    marginTop: 50
  },
  header: {
    width: "100%",
    alignItems: "center"
  },
  imageWrapper: {
    width: "80%",
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
    backgroundColor: colors.rootGreenDark,
    paddingVertical: 15,
    marginVertical: 10
  },
  whiteText: {
    color: colors.rootWhite
  },
  blackText: {
    color: colors.rootBlack,
    fontSize: 14,
    opacity: 0.5,
    textDecorationLine: "underline"
  },
  formWrapper: {
    width: "70%"
  }
});

export default ForgotPassword;
