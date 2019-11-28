import React, { useState } from "react";
import { StyleSheet, View, Text, Image, ScrollView } from "react-native";
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

  const initialState = {
    email: "tadesina90@gmail.com",
    password: ""
  };

  const [values, setValues] = useState(initialState);
  return (
    <ScrollView contentContainerStyle={styles.wrapper}>
      <View style={styles.header}>
        <Text style={styles.title}>Login.</Text>
      </View>
      <View style={styles.imageWrapper}>
        <Image style={styles.image} source={images.loginImg} />
      </View>
      <View style={styles.formWrapper}>
        <CustomInput label="Email" />
      </View>
      <View style={styles.formWrapper}>
        <CustomInput label="Password" />
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
          onPress={() => Alert.alert("Simple Button")}
        />
      </View>
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
    flex: 1,
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

export default Login;
