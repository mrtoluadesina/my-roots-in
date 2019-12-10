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

export default function PlantedSuccessfully(props) {
  const { navigate } = props.navigation;
  return (
    <Container>
      <ImageBackground
        source={images.verificationCompleteBgImg}
        style={{
          flex: 1,
          width: "100%"
        }}
        imageStyle={{ resizeMode: "stretch" }}
      >
        <Section>
          <ImageContainer
            source={images.verificationImg}
            imageStyle={{ resizeMode: "contain" }}
          />

          <Section style={{ marginBottom: 250, marginTop: 60 }}>
            <Heading>Reservation successful</Heading>
            <Paragraph>
              Your reservation has been taken and its been processed
            </Paragraph>
            <SimpleButton
              title="Got it!"
              textStyle={styles.textColor}
              class={styles.fullWidth}
              onPress={() => navigate("Dashboard")}
            ></SimpleButton>
          </Section>
        </Section>
      </ImageBackground>
    </Container>
  );
}
