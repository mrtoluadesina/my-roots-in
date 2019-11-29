import styled from "styled-components";
import { colors } from "../../constants/colors";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding: 20px;
  padding-top: 0;
  padding-bottom: 0;
  margin: 15% 10% 20% 10%;
  border-radius: 10px;
  box-shadow: 0px 5px 5px black;
  border: 1px solid black;
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
