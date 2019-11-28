import { View } from "react-native";
import styled from "styled-components";
import { colors } from "../../constants/colors";

export const Card = styled(View)`
  background: #fff;
  min-height: 100px;
  min-width: 100px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid ${colors.boxBorder};
  box-shadow: 0 3px 6px ${colors.boxShadow};
`;
