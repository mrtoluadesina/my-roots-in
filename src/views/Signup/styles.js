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
  margin-top: 20px;
`;

export const Greeting = styled.Text`
  width: 100%;
  font-family: "Helvetica-Bold";
  font-size: 26px;
  line-height: 26px;
  letter-spacing: 0.67px;
  text-transform: capitalize;
  color: ${colors.rootGreenDark};
  text-align: center;
`;

export const Description = styled.Text`
  margin-top: 10px;
  width: 100%;
  font-family: "Helvetica";
  font-size: 20px;
  line-height: 22px;
  letter-spacing: 0.07px;
  text-align: center;
`;

export const Form = styled.View`
  width: 100%;
  margin-top: 30px;
`;

export const Signin = styled.Text`
  font-size: 12px;
  line-height: 18px;
  margin-top: 10px;
  text-decoration: underline;
  text-decoration-color: #9da3b4;
  color: #9da3b4;
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
    width: "80%",
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
