import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  View,
  Text,
  ScrollView
} from "react-native";
import { SimpleButton, LinkButton } from "../../components/Buttons";
import { CustomInput } from "../../components/Input";
import metadata from "../../constants/meta";
import { connect } from "react-redux";
import { images } from "../../../assets/images";
import { colors } from "../../constants/colors";
import { login } from "./redux/action";
import { ImageBg, Title, Container } from "../Dashboard/styles";

function Login(props) {
  const { navigate } = props.navigation;
  const details = metadata.loginPage;

  const initialState = {
    email: "tadesina90@gmail.com",
    password: "8392198489712"
  };

  const [values, setValues] = useState(initialState);

  const handleChange = field => text => setValues({ ...values, [field]: text });

  const handleSubmit = async () => {
    try {
      const payload = {
        ...values
      };
      const { status, message } = await props.loginHandler(payload);
      if (status >= 400) throw new Error(message);
      navigate("Dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.wrapper}>
      <ImageBg imageStyle={styles.imageBg} source={images.loginBgImg}>
        <KeyboardAvoidingView
          behavior="position"
          contentContainerStyle={styles.content}
        >
          <Container style={styles.container}>
            <View style={styles.header}>
              <Title>Login.</Title>
            </View>
            <View style={styles.formWrapper}>
              <CustomInput
                defaultValue={values[details[0].type]}
                textContentType={details[0].text}
                keyboardType={"email-address"}
                onChangeText={handleChange(details[0].type)}
                {...details[0]}
                style={{ marginBottom: 26 }}
              />
              <CustomInput
                defaultValue={values[details[1].type]}
                textContentType={details[1].text}
                onChangeText={handleChange(details[1].type)}
                {...details[1]}
                style={{ marginBottom: 26 }}
              />
            </View>
            <View style={styles.forgotAuth}>
              <Text
                onPress={() => {
                  navigate("ForgotPassword");
                }}
              >
                Forgot Password?
              </Text>
            </View>
            <View style={styles.buttonWrapper}>
              <SimpleButton
                class={styles.btn}
                textStyle={styles.whiteText}
                title="Login"
                loading={props.isLoading}
                onPress={() => handleSubmit()}
              />
              <LinkButton
                title="Don't have an account yet?"
                textStyle={styles.blackText}
                onPress={() => navigate("Settings")}
              />
            </View>
          </Container>
        </KeyboardAvoidingView>
      </ImageBg>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  imageBg: {
    resizeMode: "stretch"
  },
  wrapper: {
    flex: 1
  },
  content: {
    height: "100%", 
    alignItems: "center",
    paddingHorizontal: 5
  },
  container: {
    paddingTop: 100
    // justifyContent: "center"
  },
  header: {
    width: "80%",
    alignItems: "center",
    paddingVertical: 50
  },
  buttonWrapper: {
    width: "100%",
    alignItems: "center",
    paddingTop: 20
  },
  btn: {
    backgroundColor: colors.rootGreenDark,
    paddingVertical: 15,
  },
  whiteText: {
    color: colors.rootWhite
  },
  blackText: {
    color: colors.rootBlack
  },
  formWrapper: {
    width: "80%",
    paddingTop: 10
  },
  forgotAuth: {
    width: "80%",
    alignItems: "flex-end"
  }
});

const mapStateToProps = state => ({
  isLoading: state.Login.isLoading
});

const mapDispatchToProps = dispatch => ({
  loginHandler: payload => dispatch(login(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
