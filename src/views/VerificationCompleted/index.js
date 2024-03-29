import React from "react";
import { ImageBackground } from "react-native";
import { images } from "../../../assets/images";
import { SimpleButton } from "../../components/Buttons";

import {
  Container,
  ImageContainer,
  Section,
  Heading,
  Paragraph,
  styles
} from "./styles";

export default function VerificationCompleted(props) {
  const { navigate } = props.navigation;
  return (
    <Container>
      <ImageBackground
        source={images.verificationCompleteBgImg}
        style={{
          flex: 1,
          width: "100%",
          height: "100%",
          alignContent: "center"
        }}
        imageStyle={{ resizeMode: "stretch" }}
      >
        <Section style={{ flex: 1, width: "100%" }}>
          <ImageContainer source={images.verificationImg}></ImageContainer>

          <Section style={{ marginBottom: 250, marginTop: 60 }}>
            <Heading>Verification successful</Heading>
            <Paragraph>
              Your verification has been verified please login with your details
            </Paragraph>
            <SimpleButton
              title="Got it!"
              textStyle={styles.textColor}
              class={styles.fullWidth}
              onPress={() => navigate("Login")}
            ></SimpleButton>
          </Section>
        </Section>
      </ImageBackground>
    </Container>
  );
}
