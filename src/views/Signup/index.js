import React, { useState } from "react";
import { CustomInput } from "../../components/Input";
import { KeyboardAvoidingView, ImageBackground } from "react-native";
import {
  Container,
  Background,
  Greeting,
  Description,
  Form,
  Signin,
  KeyboardWrapper,
  styles
} from "./styles";

import { images } from "../../../assets/images";
import metadata from "../../constants/meta";
import { SimpleButton } from "../../components/Buttons";

export default function Signup(props) {
  const { navigate } = props.navigation;
  const details = metadata.signupPage;

  const initialFormState = {
    name: "John Doe",
    email: "Lawson@gmail.com",
    password: "8392198489712",
    country: "London",
    phone: "+2345678909876"
  };
  const [fields, setFields] = useState(initialFormState);

  const handleChange = field => text => {
    setFields({ ...fields, [field]: text });
  };

  return (
    <ImageBackground
      source={images.signUpBgImg}
      style={{
        flex: 1,
        width: "100%",
      }}
      imageStyle={{ resizeMode: "stretch" }}
    >
      <KeyboardAvoidingView
        behavior="position"
        contentContainerStyle={KeyboardWrapper}
      >
        <Background>
          <Greeting>welcome</Greeting>
          <Description>
            To verify your identity. please fill your personal information
          </Description>
          <Form>
            {details.map((value, index) => (
              <CustomInput
                key={index}
                defaultValue={fields[value.type]}
                textContentType={value.text}
                onChangeText={handleChange(value.type)}
                {...value}
                style={{
                  marginBottom: index != details.length - 1 ? 25 : 20
                }}
              />
            ))}
          </Form>

          <SimpleButton
            title="Submit"
            class={styles.fullWidth}
            textStyle={styles.textColor}
            onPress={() => navigate("Verify")}
          />
          <Signin onPress={() => navigate("Login")}>
            Have an account signin?
          </Signin>
        </Background>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}
