import styled from "styled-components";
import { colors } from "../../constants/colors";
export const Container = styled.ScrollView`
  flex: 1;
`;

export const Background = styled.View`
  width: 100%;
  padding: 0 40px;
  align-items: center;
  justify-content: center;
`;

export const Greeting = styled.Text`
  font-family: "Helvetica";
  font-size: 26px;
  line-height: 31px;
  text-align: center;
  width: 100%;
  margin-bottom: 30px;
  font-weight: 500;
  color: ${colors.rootGreenDark};
`;

export const Body = styled.View`
  margin-top: 30px;
  width: 100%;
  align-items: center;
`;

export const Description = styled.Text`
  width: 100%;
  font-family: "Helvetica-Bold";
  font-size: 15px;
  line-height: 24px;
  text-align: center;
  color: ${colors.rootBlack};
`;

export const Choices = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 50px;
  margin-bottom: 80px;
  width: 100%;
  justify-content: space-around;
  align-items: center;
`;

export const SelectedCountryCard = styled.View`
  width: 90%;
  /* padding: 0 40px; */
  align-items: center;
  justify-content: center;
  background-color: #f7f7f7;
  height: 50px;
  margin-top: 20px;
  border-radius: 5px;
`;

export const SelectedCountry = styled.Text`
  font-size: 12px;
  line-height: 14px;
  color: ${colors.rootBlack};
  opacity: 0.8;
  text-align: center;
  width: 100%;
  font-family: "Helvetica-Bold";
`;

export const CardTitle = styled.Text`
  text-transform: capitalize;
  font-size: 12px;
  line-height: 14px;
  color: ${colors.rootBlack};
  opacity: 0.5;
  text-align: center;
  /* position: relative;
  bottom: 0; */
  width: 100%;
  font-family: "Helvetica-Bold";
`;

export const CardImage = styled.Image`
  width: 100%;
  height: 100%;
`;

export const ImageContainer = styled.ImageBackground`
  flex: 1;
  width: 100%;
`;

export const checkBoxStyle = {
  width: 120,
  height: 120,
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

export const buttonShadow = {
  shadowColor: colors.rootShadow,
  justifyContent: "center",
  alignItems: "center",
  shadowOffset: { width: 0, height: 4 },
  shadowOpacity: 0.4,
  shadowRadius: 15,
  elevation: 3
};

export const buttonStyle = {
  fullWidth: {
    width: "80%",
    height: 52,
    backgroundColor: colors.rootGreenDark,
    ...buttonShadow
  },
  textColor: {
    color: colors.rootWhite,
    fontSize: 14,
    fontFamily: "Helvetica-Bold"
  }
};
