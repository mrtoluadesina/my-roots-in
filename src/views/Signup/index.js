import React, { useState } from "react";
import {CustomInput} from "../../components/Input";
import { KeyboardAvoidingView, StyleSheet } from "react-native";
import {
  Container,
  Background,
  Greeting,
  Description,
  Form,
  Signin
} from "./styles";
import metadata from "../../constants/meta";
import { colors } from "../../constants/colors";

import { SimpleLinearGradientButton } from "../../components/Buttons";

export default function Signup(props) {
  const { navigate } = props.navigation;
  const details = metadata.signupPage;

  const initialFormState = {
    fullName: "John Doe",
    email: "Lawson@gmail.com",
    password: "8392198489712",
    countryOfResidence: "London",
    phone: "+2345678909876"
  };
  const [fields, setFields] = useState(initialFormState);

  const handleChange = field => text => {
    setFields({ ...fields, [field]: text });
  };

  return (
    <Container>
      <KeyboardAvoidingView
        behavior="position"
        contentContainerStyle={StyleSheet.wrapper}
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
                style={{ marginBottom: index != details.length - 1 ? 26 : 50 }}
              />
            ))}
          </Form>

          <SimpleLinearGradientButton
            title="Submit"
            class={{
              width: "100%"
            }}
            textStyle={{
              color: colors.rootWhite,
              fontSize: 14
            }}
            onPress={() => navigate("Verify")}
          />
          <Signin onPress={() => navigate("Login")}>
            Have an account signin?
          </Signin>
        </Background>
      </KeyboardAvoidingView>
    </Container>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  }
});
