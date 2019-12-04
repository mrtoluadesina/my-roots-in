import React from "react";
import { images } from "../../../assets/images";
import { SimpleLinearGradientButton } from "../../components/Buttons";
import { SimpleCard } from "../../components/Cards/index";

import {
  Container,
  ImageContainer,
  Section,
  Heading,
  Paragraph,
  cardSizeStyle,
  styles
} from "./styles";

export default function VerificationCompleted(props) {
  const { navigate } = props.navigation;
  return (
    <Container>
      <SimpleCard style={cardSizeStyle}>
        <ImageContainer source={images.verification}></ImageContainer>
        <Section>
          <Heading>Verification successful</Heading>
          <Paragraph>
            Your verification has been verified please login with your details
          </Paragraph>
          <SimpleLinearGradientButton
            title="Got it!"
            textStyle={styles.textColor}
            class={styles.fullWidth}
            onPress={() => navigate("Login")}
          ></SimpleLinearGradientButton>
        </Section>
      </SimpleCard>
    </Container>
  );
}
