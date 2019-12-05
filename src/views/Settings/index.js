import React, { useState, useEffect, useCallback } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  AsyncStorage,
  Text
} from "react-native";
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
  NotificationToggle,
  KeyboardWrapper
} from "./styles";

import metadata from "../../constants/meta";
import { images } from "../../../assets/images";
import { colors } from "../../constants/colors";
import { SimpleLinearGradientButton } from "../../components/Buttons";

export default function Settings(props) {
  const details = metadata.signupPage;
  const [fields, setFields] = useState({});
  const [notification, setNotification] = useState({ toggle: false });

  useEffect(() => {
    const loadUser = async () => {
      const user = await AsyncStorage.getItem("userData");
      setFields(JSON.parse(user));
    };
    loadUser();
  }, []);

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
        contentContainerStyle={KeyboardWrapper}
      >
        <Background>
          <Header>
            <Greeting>Settings</Greeting>
            <Avater source={images.getDefaultAvatar}></Avater>
          </Header>
          <Form>
            <EditableInput
              defaultValue={fields.name}
              textContentType={details[0].text}
              onChangeText={handleChange(details[0].type)}
              editable={true}
              {...details[0]}
              style={{ marginBottom: 26 }}
            />
            <EditableInput
              defaultValue={fields.email}
              textContentType={details[1].text}
              onChangeText={handleChange(details[1].type)}
              editable={false}
              {...details[1]}
              style={{ marginBottom: 26 }}
            />

            <EditableInput
              defaultValue={fields.country}
              textContentType={details[3].text}
              onChangeText={handleChange(details[3].type)}
              editable={true}
              {...details[3]}
              style={{ marginBottom: 26 }}
            />
            <EditableInput
              defaultValue={fields.phone}
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
