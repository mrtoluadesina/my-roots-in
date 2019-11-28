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
  width: 100%;
  margin-top: 30px;
  font-family: "Helvetica-Bold";
  font-size: 26px;
  line-height: 26px;
  letter-spacing: 0.67px;
  text-transform: capitalize;
`;

export const Description = styled.Text`
  margin-top: 20px;
  width: 100%;
  font-family: "Helvetica";
  font-size: 18px;
  line-height: 22px;
  letter-spacing: 0.07px;
`;

export const Form = styled.View`
  flex: 1;
  width: 100%;
  margin-top: 40px;
`;

export const Signin = styled.Text`
  font-size: 12px;
  line-height: 18px;
  margin-top: 10px;
  text-decoration: underline;
  text-decoration-color: #9da3b4;
  color: #9da3b4;
`;
