import React, { useState } from "react";
import CustomInput from "../../components/Input";
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
      <Background>
        <Greeting>welcome</Greeting>
        <Description>
          To verify your identity. please fill your personal information
        </Description>
        <Form>
          <CustomInput
            defaultValue={fields[details[0].type]}
            textContentType={details[0].text}
            onChangeText={handleChange(details[0].type)}
            {...details[0]}
            style={{ marginBottom: 26 }}
          />
          <CustomInput
            defaultValue={fields[details[1].type]}
            textContentType={details[1].text}
            onChangeText={handleChange(details[1].type)}
            {...details[1]}
            style={{ marginBottom: 26 }}
          />
          <CustomInput
            defaultValue={fields[details[2].type]}
            textContentType={details[2].text}
            onChangeText={handleChange(details[2].type)}
            {...details[2]}
            style={{ marginBottom: 26 }}
          />
          <CustomInput
            defaultValue={fields[details[3].type]}
            textContentType={details[3].text}
            onChangeText={handleChange(details[3].type)}
            {...details[3]}
            style={{ marginBottom: 26 }}
          />
          <CustomInput
            defaultValue={fields[details[4].type]}
            textContentType={details[4].text}
            onChangeText={handleChange(details[4].type)}
            {...details[4]}
            style={{ marginBottom: 50 }}
          />
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
    </Container>
  );
}
