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
export const Container = styled.ScrollView`
  flex: 1;
`;

export const Background = styled.View`
  flex: 1;
  width: 100%;
  padding: 0 50px;
  font-family: "Helvetica-Bold";
  font-weight: 800;
  align-items: center;
  justify-content: center;
  color: ${colors.rootBlack};
`;

export const Greeting = styled.Text`
  font-family: "Helvetica";
  font-size: 26px;
  line-height: 31px;
  color: ${colors.rootGreenDark};
  margin-bottom: 30px;
`;

export const Header = styled.View`
  padding-top: 10px;
  flex-direction: row;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
`;

export const Avater = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20;
`;

export const Body = styled.View`
  margin-top: 10px;
  width: 80%;
  align-items: center;
`;

export const Description = styled.Text`
  width: 90%;
  font-family: "Helvetica-Bold";
  font-size: 20px;
  line-height: 24px;
  text-align: center;
`;

export const Choices = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 50px;
  margin-bottom: 80px;
  width: 100%;
  justify-content: space-around;
  align-items: center;
`;

export const CardTitle = styled.Text`
  text-transform: capitalize;
  font-size: 12px;
  line-height: 14px;
  color: ${colors.rootBlack};
  opacity: 0.5;
  text-align: center;
  position: absolute;
  bottom: -20;
  width: 150%;
  font-family: "Helvetica-Bold";
`;

export const CardPrice = styled.Text`
  text-transform: capitalize;
  font-size: 12px;
  line-height: 14px;
  color: ${colors.rootGreenDark};
  text-align: center;
  position: absolute;
  bottom: 5;
  right: 0;
  padding-right: 7px;
  font-family: "Helvetica-Bold";
`;

export const CardImage = styled.Image`
  width: 80%;
  height: 80%;
`;

export const cardSizeStyle = {
  height: 105,
  width: 110,
  marginBottom: 50,
  position: "relative",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 2,
  shadowColor: `${colors.boxShadow}`,
  shadowOffset: { width: 0, height: 3 },
  shadowOpacity: 1,
  shadowRadius: 6,
  elevation: 10
};

export const GradientBtn = {
  marginVertical: 10,
  width: "100%",
  backgroundColor: colors.rootGreenDark
};

export const checkBoxStyle = {
  height: 105,
  width: 110,
  marginBottom: 50,
  marginLeft: 0,
  position: "relative",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 2,
  shadowColor: colors.rootShadow,
  shadowOffset: { width: 2, height: 6 },
  shadowOpacity: 0.2,
  shadowRadius: 6,
  elevation: 2
};

export const buttonStyle = {
  shadowColor: colors.rootShadow,
  justifyContent: "center",
  alignItems: "center",
  shadowOffset: {
    width: 0,
    height: 4
  },
  shadowOpacity: 0.4,
  shadowRadius: 15,
  elevation: 3
};

export const styles = {
  fullWidth: {
    width: "80%",
    height: 52,
    backgroundColor: colors.rootWhite,
    ...buttonStyle
  },
  textColor: {
    color: colors.rootGreenDark,
    fontSize: 14,
    fontFamily: "Helvetica-Bold"
  }
};
