import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView
} from "react-native";
import {
  SimpleButton,
  SimpleLinearGradientButton
} from "../../components/Buttons";
import CustomInput from "../../components/Input";
import metadata from "../../constants/meta";
import { connect } from "react-redux";
import { images } from "../../../assets/images";
import { colors } from "../../constants/colors";
import { login } from "./redux/action";

function Login(props) {
  const { navigate } = props.navigation;
  const details = metadata.loginPage;

  const initialState = {
    email: "tadesina90@gmail.com",
    password: "8392198489712"
  };

  const [values, setValues] = useState(initialState);

  const handleChange = field => text => setValues({ ...values, [field]: text });

  return (
    <ScrollView contentContainerStyle={styles.wrapper}>
      <KeyboardAvoidingView behavior="position" contentContainerStyle={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>Login.</Text>
        </View>
        <View style={styles.imageWrapper}>
          <Image style={styles.image} source={images.loginImg} />
        </View>
        <View style={styles.formWrapper}>
          <CustomInput
            defaultValue={values[details[0].type]}
            textContentType={details[0].text}
            onChangeText={handleChange(details[0].type)}
            {...details[0]}
            style={{ marginBottom: 26 }}
          />
        </View>
        <View style={styles.formWrapper}>
          <CustomInput
            defaultValue={values[details[1].type]}
            textContentType={details[1].text}
            onChangeText={handleChange(details[1].type)}
            {...details[1]}
            style={{ marginBottom: 26 }}
          />
          <Text
            onPress={() => {
              navigate("ForgotPassword");
            }}
          >
            Forgot Password?
          </Text>
        </View>
        <View style={styles.buttonWrapper}>
          <SimpleLinearGradientButton
            class={styles.btnGradient}
            textStyle={styles.whiteText}
            title="Login"
            onPress={() => navigate("Login")}
          />
          <SimpleButton
            title="Don't have an account yet?"
            onPress={() => navigate("Signup")}
          />
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  border: {
    borderWidth: 1
  },
  title: {
    fontSize: 30
  },
  wrapper: {
    flex: 1
  },
  content: {
    height: "100%",
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingHorizontal: 5
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

const mapStateToProps = state => ({
  isLoading: state.Login.isLoading
});

const mapDispatchToProps = dispatch => ({
  loginHandler: payload => dispatch(login(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
