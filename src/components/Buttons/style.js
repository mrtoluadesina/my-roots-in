import { TouchableOpacity } from "react-native";
import styled from "styled-components";
import { LinearGradient } from "expo-linear-gradient";
import { colors } from "../../constants/colors";

export const Button = styled(TouchableOpacity)`
  width: 70%;
  align-items: center;
  border-radius: 30px;
  background-color: ${colors.rootGreenLight};
  padding: 15px;
  margin: 10px 0;
  box-shadow: 0 5px 15px rgba(157, 163, 180, 0.45);
`;

export const Value = styled.Text`
  color: white;
  font-size: 16px;
  letter-spacing: 1px;
`;

export const LinearGradientButton = styled(LinearGradient)`
  width: 100%;
  padding: 15px;
  justify-content: center;
  border-radius: 25px;
  flex-direction: row;
`