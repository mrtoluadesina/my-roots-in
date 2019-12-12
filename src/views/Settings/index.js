import React, { useState, useEffect } from "react";
import { ImageBackground } from "react-native";
import { KeyboardAvoidingView, AsyncStorage } from "react-native";
import { EditableInput } from "../../components/Input";
import {
  Background,
  Greeting,
  Header,
  Form,
  Footer,
  Notification,
  NotificationTitle,
  NotificationToggle,
  KeyboardWrapper,
  Container,
  styles
} from "./styles";

import metadata from "../../constants/meta";
import { images } from "../../../assets/images";
import { colors } from "../../constants/colors";
import { SimpleButton } from "../../components/Buttons";

export default function Settings(props) {
  const { navigate } = props.navigation;
  const details = metadata.settings;

  const initialFormState = {
    name: "John Doe",
    email: "Lawson@gmail.com",
    country: "London",
    phone: "+2345678909876"
  };

  const [fields, setFields] = useState(initialFormState);
  const [notification, setNotification] = useState({ toggle: false });

  useEffect(() => {
    const loadUser = async () => {
      const user = await AsyncStorage.getItem("userData");
      if (user) setFields(JSON.parse(user));
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
    <ImageBackground
      source={images.profileBgImg}
      style={{
        flex: 1,
        width: "100%"
      }}
      imageStyle={{ resizeMode: "stretch" }}
    >
      <KeyboardAvoidingView
        behavior="position"
        contentContainerStyle={KeyboardWrapper}
      >
        <Container>
          <Background>
            <Header>
              <Greeting>Settings</Greeting>
            </Header>
            <Form>
              {details.map((value, index) => (
                <EditableInput
                  defaultValue={fields[value.type]}
                  textContentType={value.text}
                  onChangeText={handleChange(value.type)}
                  editable
                  {...value}
                  key={index}
                  style={{
                    marginBottom: index != details.length - 1 ? 25 : 60
                  }}
                />
              ))}
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
            <SimpleButton
              title="Logout"
              class={styles.fullWidth}
              textStyle={styles.textColor}
              onPress={() => navigate("Home")}
            />
          </Footer>
        </Container>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}
