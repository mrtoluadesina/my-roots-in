import styled from "styled-components";
import { colors } from "../../constants/colors";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const ImageContainer = styled.Image`
  width: 150;
  height: 150;
`;

export const Section = styled.View`
  margin-top: 50;
  width: 90%;
  align-items: center;
`;

export const Heading = styled.Text`
  font-size: 20;
  line-height: 24;
  letter-spacing: 1;
  font-family: "Helvetica-Bold";
`;

export const Paragraph = styled.Text`
  font-size: 15;
  line-height: 18;
  letter-spacing: 0.5;
  font-family: "Helvetica";
  color: #313543;
  width: 250;
  text-align: center;
  margin-top: 2;
`;

export const cardSizeStyle = {
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
};

export const styles = {
  fullWidth: {
    marginTop: 35,
    width: "100%"
  },
  textColor: {
    color: "white",
    fontSize: 14,
    fontFamily: "Helvetica-Bold"
  }
};
