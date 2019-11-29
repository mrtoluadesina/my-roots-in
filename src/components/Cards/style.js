import { View } from 'react-native';
import styled from 'styled-components';
import { colors } from '../../constants/colors';

export const Card = styled(View)`
  background: #fff;
  min-height: 100px;
  min-width: 100px;
  border-radius: 5px;
`;
// removed border: 1px solid ${colors.boxBorder};
//remove box shadow box-shadow: 0 3px 6px ${colors.boxShadow};
