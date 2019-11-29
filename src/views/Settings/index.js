import React, { useState } from "react";
import {KeyboardAvoidingView, StyleSheet} from 'react-native';
import { EditableInput } from "../../components/Input";
import {
  Container,
  Background,
  Greeting,
  Header,
  Avater,
  Form,
  Footer,
  Notification,
  NotificationTitle,
  NotificationToggle
} from "./styles";

import metadata from "../../constants/meta";
import { images } from "../../../assets/images";
import { colors } from "../../constants/colors";
import { SimpleLinearGradientButton } from "../../components/Buttons";

export default function Settings(props) {
  const details = metadata.signupPage;

  const initialFormState = {
    fullName: "John Doe",
    email: "Lawson@gmail.com",
    password: "8392198489712",
    countryOfResidence: "London",
    phone: "+2345678909876"
  };
  const [fields, setFields] = useState(initialFormState);
  const [notification, setNotification] = useState({ toggle: false });

  toggleNotification = value => {
    setNotification({ toggle: value });
  };

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
        <Header>
          <Greeting>Settings</Greeting>
          <Avater source={images.getDefaultAvatar}></Avater>
        </Header>
        <Form>
          <EditableInput
            defaultValue={fields[details[0].type]}
            textContentType={details[0].text}
            onChangeText={handleChange(details[0].type)}
            editable={true}
            {...details[0]}
            style={{ marginBottom: 26 }}
          />
          <EditableInput
            defaultValue={fields[details[1].type]}
            textContentType={details[1].text}
            onChangeText={handleChange(details[1].type)}
            editable={true}
            {...details[1]}
            style={{ marginBottom: 26 }}
          />
          <EditableInput
            defaultValue={fields[details[2].type]}
            textContentType={details[2].text}
            onChangeText={handleChange(details[2].type)}
            editable={true}
            {...details[2]}
            style={{ marginBottom: 26 }}
          />
          <EditableInput
            defaultValue={fields[details[3].type]}
            textContentType={details[3].text}
            onChangeText={handleChange(details[3].type)}
            editable={true}
            {...details[3]}
            style={{ marginBottom: 26 }}
          />
          <EditableInput
            defaultValue={fields[details[4].type]}
            textContentType={details[4].text}
            onChangeText={handleChange(details[4].type)}
            editable={true}
            {...details[4]}
            style={{ marginBottom: 50 }}
          />
        </Form>
      </Background>
      <Footer>
        <Notification>
          <NotificationTitle>notification</NotificationTitle>
          <NotificationToggle
            onValueChange={toggleNotification}
            value={notification.toggle}
            trackColor={{ true: colors.rootGreenDark }}
            style={{ transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }] }}
          />
        </Notification>
        <SimpleLinearGradientButton
          title="Logout"
          class={{
            width: "100%"
          }}
          textStyle={{
            color: colors.rootWhite,
            fontSize: 14
          }}
          onPress={() => navigate("Home")}
        />
      </Footer>
      </KeyboardAvoidingView>
    </Container>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  }
});