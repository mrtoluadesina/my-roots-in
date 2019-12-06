import styled from "styled-components";
import { colors } from "../../constants/colors";
import { black } from "ansi-colors";

export const Container = styled.ScrollView`
  flex: 1;
`;

export const Background = styled.View`
  flex: 1;
  width: 100%;
  padding: 0 50px;
  font-family: "Helvetica-Bold";
  font-weight: 800;
  align-items: center;
  justify-content: center;
  color: ${colors.rootBlack};
`;

export const Greeting = styled.Text`
  font-family: "Helvetica";
  font-size: 26px;
  line-height: 31px;
  color: ${colors.rootGreenDark};
`;

export const Header = styled.View`
  padding-top: 5px;
  flex-direction: row;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
`;

export const Avater = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20;
`;

export const Body = styled.View`
  margin-top: 40px;
  width: 80%;
  align-items: center;
`;

export const Description = styled.Text`
  width: 90%;
  font-family: "Helvetica-Bold";
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  padding-top: 40px;
`;

export const Choices = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 70px;
  margin-bottom: 80px;
  width: 100%;
  justify-content: space-around;
  align-items: center;
`;

export const CardTitle = styled.Text`
  text-transform: capitalize;
  font-size: 12px;
  line-height: 14px;
  color: #323643;
  opacity: 0.5;
  text-align: center;
  width: 120%;
  font-family: "Helvetica-Bold";
`;

export const CardImage = styled.Image`
  width: 90%;
  height: 90%;
  border-radius: 2;
`;

export const cardSizeStyle = {
  height: 120,
  width: 120,
  position: "relative",
  alignItems: "center",
  justifyContent: "center",
  borderWidth: 0.5,
  borderColor: `${colors.boxShadow}`,
  borderBottomWidth: 0,
  shadowColor: `${colors.boxShadow}`,
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.5,
  shadowRadius: 2,
  elevation: 2
};

export const CountrySize = {
  width: 120,
  height: 120,
  position: "relative",
  borderWidth: 1,
  ...cardSizeStyle
};

export const ImageContainer = styled.ImageBackground`
  width: 100%;
  height: 100%;
  flex: 1;
`;

export const checkBoxStyle = {
  height: 105,
  width: 110,
  marginBottom: 50,
  marginLeft: 0,
  position: "relative",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 2,
  shadowColor: colors.rootShadow,
  shadowOffset: { width: 2, height: 6 },
  shadowOpacity: 0.2,
  shadowRadius: 6,
  elevation: 2
};

export const buttonStyle = {
  shadowColor: colors.rootShadow,
  justifyContent: "center",
  alignItems: "center",
  shadowOffset: {
    width: 0,
    height: 4
  },
  shadowOpacity: 0.4,
  shadowRadius: 15,
  elevation: 3
};

export const styles = {
  fullWidth: {
    width: "80%",
    height: 52,
    backgroundColor: colors.rootWhite,
    ...buttonStyle
  },
  textColor: {
    color: colors.rootGreenDark,
    fontSize: 14,
    fontFamily: "Helvetica-Bold"
  }
};
