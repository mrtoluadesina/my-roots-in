import React from "react";
import { StyleSheet } from "react-native";
import { images } from "../../../assets/images";
import { SimpleLinearGradientButton } from "../../components/Buttons";
import { SimpleCard } from "../../components/Cards/index";
import { colors } from "../../constants/colors";
import {
  Container,
  ImageContainer,
  Section,
  Heading,
  Paragraph
} from "./styles";

export default function VerificationCompleted(props) {
  const { navigate } = props.navigation;
  return (
    <Container>
      <SimpleCard style={styles.shadow}>
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

const styles = StyleSheet.create({
  shadow: {
    borderColor: colors.rootShadow,
    shadowColor: colors.rootShadow,
    width: "80%",
    height: "60%",
    justifyContent: "center",
    alignItems: "center",
    shadowOffset: {
      width: 0,
      height: 15
    },
    shadowOpacity: 0.4,
    shadowRadius: 55,
    elevation: 1,
    borderRadius: 10
  },
  fullWidth: {
    marginTop: 35,
    width: "100%"
  },
  textColor: {
    color: "white",
    fontSize: 14,
    fontFamily: "Helvetica-Bold"
  }
});
