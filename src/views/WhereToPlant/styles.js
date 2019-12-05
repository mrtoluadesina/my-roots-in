import styled from "styled-components";
import { colors } from "../../constants/colors";

export const Container = styled.ScrollView`
  flex: 1;
`;

export const Background = styled.View`
  flex: 1;
  width: 100%;
  padding: 0 50px;
  font-family: "Helvetica-Bold";
  font-weight: 800;
  background-color: #ffffff;
  align-items: center;
  justify-content: center;
  color: ${colors.rootBlack};
`;

export const Greeting = styled.Text`
  font-family: "Helvetica";
  font-size: 26px;
  line-height: 31px;
`;

export const Header = styled.View`
  padding-top: 30px;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
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

export const CardTitle = styled.Text`
  text-transform: capitalize;
  font-size: 12px;
  line-height: 14px;
  color: #323643;
  opacity: 0.5;
  text-align: center;
  position: absolute;
  bottom: -20;
  width: 120%;
  font-family: "Helvetica-Bold";
`;

export const CardImage = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 2;
`;

export const cardSizeStyle = {
  height: 105,
  width: 110,
  marginBottom: 50,
  position: "relative",
  alignItems: "center",
  justifyContent: "center",
  borderWidth: 0.5,
  borderRadius: 2,
  borderColor: `${colors.boxShadow}`,
  borderBottomWidth: 0,
  shadowColor: `${colors.boxShadow}`,
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.5,
  shadowRadius: 2,
  elevation: 2
};
