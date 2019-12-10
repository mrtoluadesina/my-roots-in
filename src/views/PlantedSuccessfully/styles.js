import styled from "styled-components";
import { colors } from "../../constants/colors";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const ImageContainer = styled.Image`
  width: 100;
  height: 100;
`;

export const Section = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const Heading = styled.Text`
  font-size: 23;
  line-height: 27;
  letter-spacing: 1;
  margin-bottom: 8;
  font-family: "Helvetica-Bold";
  color: ${colors.rootGreenDark};
`;

export const Paragraph = styled.Text`
  width: 250;
  font-family: "Helvetica";
  font-size: 15;
  font-weight: 500;
  text-align: center;
  line-height: 18;
  letter-spacing: 0.5;
  opacity: 0.7;
  color: ${colors.rootBlack};
  margin-top: 2;
`;

export const buttonStyle = {
  shadowColor: colors.rootGreenDark,
  justifyContent: "center",
  alignItems: "center",
  shadowOffset: {
    width: 0,
    height: 10
  },
  shadowOpacity: 0.6,
  shadowRadius: 15,
  elevation: 1
};

export const styles = {
  fullWidth: {
    marginTop: 55,
    height: 52,
    backgroundColor: colors.rootGreenDark,
    ...buttonStyle
  },
  textColor: {
    color: "white",
    fontSize: 14,
    fontFamily: "Helvetica-Bold"
  }
};
