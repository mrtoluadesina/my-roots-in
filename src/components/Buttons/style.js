import { TouchableOpacity } from "react-native";
import styled from "styled-components";
import { LinearGradient } from "expo-linear-gradient";

export const Button = styled(TouchableOpacity)`
  width: 80%;
  align-items: center;
  border-radius: 5px;
`;

export const LinearGradientButton = styled(LinearGradient)`
  width: 100%;
  padding: 15px;
  align-items: center;
  border-radius: 5px;
`