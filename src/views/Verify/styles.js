/*****
 ** Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation
 ** files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy,
 ** modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software
 ** is furnished to do so, subject to the following conditions:
 ** The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 ** THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 ** OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 ** LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 ** CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *****/

import styled from 'styled-components';
import { colors } from '../../constants/colors';

export const Header = styled.View`
  width: 220px;
  height: 220px;
  align-items: center;
  justify-content: center;
  border-radius: 110px;
  overflow: hidden;
`;

export const HeaderImage = styled.Image`
  width: 150px;
  height: 150px;
`;

export const PageHeader = styled.View`
  align-items: center;
  width: 70%;
`;

export const HeaderVerification = styled.Text`
  font-size: 25px;
  font-weight: 600;
  padding: 15px;
  color: ${colors.rootGreenDark};
`;

export const HeaderSubtitle = styled.Text`
  font-size: 18px;
  opacity: 0.4;
  text-align: center;
`;

export const CardSizeStyle = {
  backgroundColor: colors.rootWhite,
  width: '80%',
  height: 'auto',
  elevation: 17,
  borderRadius: 10,
  padding: 5,
  flexDirection: 'column',
  justifyContent: 'space-between',
  paddingHorizontal: 30,
  paddingVertical: 30,
};

export const FormField = {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
};

export const FormInputFields = {
  borderWidth: 2,
  borderColor: '#ccc',
  width: '20%',
  textAlign: 'center',
  paddingVertical: 10,
  fontSize: 20,
  color: '#9bb0cd',
  fontWeight: 'bold',
  borderRadius: 5,
};

export const GradientBtn = {
  marginVertical: 10,
  width: '100%',
  backgroundColor: colors.rootGreenDark,
};

export const scrollViewStyle = {
  marginTop: 10,
  alignItems: 'center',
  justifyContent: 'space-evenly',
};
