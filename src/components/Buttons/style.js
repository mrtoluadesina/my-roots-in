import { TouchableOpacity } from "react-native";
import styled from "styled-components";
import { LinearGradient } from "expo-linear-gradient";

export const Button = styled(TouchableOpacity)`
  width: 100%;
  height: 100%;
  align-items: center;
  border-radius: 30px;
`;

export const LinearGradientButton = styled(LinearGradient)`
  width: 100%;
  padding: 15px;
  justify-content: center;
  border-radius: 25px;
  flex-direction: row;
`;
