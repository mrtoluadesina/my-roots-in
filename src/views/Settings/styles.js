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

import styled from "styled-components";
import { colors } from "../../constants/colors";

export const Background = styled.View`
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
  font-family: "Helvetica-Bold";
  font-size: 26px;
  line-height: 26px;
  letter-spacing: 0.67px;
  text-transform: capitalize;
`;

export const Header = styled.View`
  padding-top: 30px;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const Form = styled.View`
  width: 100%;
  margin-top: 40px;
`;

export const Notification = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
`;

export const NotificationTitle = styled.Text`
  text-transform: capitalize;
  font-size: 12px;
  line-height: 14px;
  color: ${colors.rootInputLabel};
`;

export const NotificationToggle = styled.Switch``;

export const Footer = styled.View`
  flex: 1;
  border-top-width: 1px;
  border-top-color: #e1e3e8;
  border-style: solid;
  width: 100%;
  padding: 30px 50px;
`;

export const KeyboardWrapper = {
  height: "100%"
};

export const buttonStyle = {
  shadowColor: colors.rootGreenDark,
  justifyContent: "center",
  alignItems: "center",
  shadowOffset: {
    width: 0,
    height: 10
  },
  shadowOpacity: 0.6,
  shadowRadius: 15,
  elevation: 1
};

export const styles = {
  fullWidth: {
    width: "100%",
    height: 52,
    backgroundColor: colors.rootGreenDark,
    ...buttonStyle
  },
  textColor: {
    color: "white",
    fontSize: 14,
    fontFamily: "Helvetica-Bold"
  }
};
