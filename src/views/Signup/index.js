import React, { useState } from "react";
import CustomInput from "../../components/Input";
import { Container } from "./styles";
import metadata from "../../constants/meta";

export default function Signup(props) {
  // setting header nav bar action for component

  const { navigate } = props.navigation;

  const initialFormState = {
    fullName: "",
    email: "",
    password: "",
    countryOfResidence: "",
    phone: ""
  };
  const [fields, setFields] = useState(initialFormState);

  const handleChange = field => text => {
    setFields({ ...fields, [field]: text });
  };

  const { signupPage } = metadata;
  const { type, text } = signupPage[0];

  return (
    <Container>
      <CustomInput
        defaultValue={fields[type]}
        textContentType={text}
        onChangeText={handleChange(type)}
        editable={true}
        {...signupPage[0]}
      />
    </Container>
  );
}
