import React from "react";
import { View, Text, ScrollView, StyleSheet, Image } from "react-native";
import { images } from "../../../assets/images";
import { SimpleLinearGradientButton } from "../../components/Buttons";
import {
  Container,
  ImageContainer,
  Section,
  Heading,
  Paragraph,
  FullWidth,
  TextColor
} from "./styles";

export default function VerificationCompleted() {
  return (
    <Container>
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
        ></SimpleLinearGradientButton>
      </Section>
    </Container>
    // <View style={styles.container}>
    //   <Image source={images.verification} style={styles.imageContainer}></Image>
    //   <View style={styles.section}>
    //     <Text style={styles.heading}>Verification successful</Text>
    //     <Text style={styles.paragraph}>
    //       Your verification has been verified please login with your details
    //     </Text>
    //     <SimpleLinearGradientButton
    //       title="Got it!"
    //       textStyle={styles.textColor}
    //       class={styles.fullWidth}
    //     ></SimpleLinearGradientButton>
    //   </View>
    // </View>
  );
}

const styles = StyleSheet.create({
 

  fullWidth: {
    marginTop: 35,
    width: "100%"
  },
  textColor: {
    color: "white",
    fontSize: 14,
    fontFamily: "Helvetica-Bold"
  },
});
