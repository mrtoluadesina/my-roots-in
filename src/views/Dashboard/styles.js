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

export const Main = styled.ScrollView`
  flex: 1;
`;

export const ImageBg = styled.ImageBackground`
  width: 100%;
  height: 100%;
  padding: 20px;
  flex: 1;
`;

export const Container = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
  align-items: center;
  padding-top: 20;
`;

export const Title = styled.Text`
  font-size: 20;
  opacity: 0.7;
  letter-spacing: 1;
  color: ${colors.rootGreenDark};
`;

export const BigTitle = styled.Text`
  font-size: 26;
  letter-spacing: 1;
  color: ${colors.rootGreenDark};
`;

export const DashboardBg = styled.ImageBackground`
  width: 100%;
  height: 100%;
  position: relative;
  padding: 20px;
  justify-content: space-between;
`;

export const Row = styled.View`
  padding-top: 10px;
  padding-bottom: 30px;
  flex-direction: row;
  width: 100%;
`;

export const Avatar = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20;
`;

export const ImageView = styled.View`
  flex-basis: 25%;
`;

export const OverviewImage = styled.Image`
  width: 40px;
  height: 40px;
`;

export const DetailsView = styled.View`
  flex-basis: 75%;
`;

export const buttonShadows = {
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

export const buttonStyles = {
  fullWidth: {
    width: "45%",
    height: 52,
    backgroundColor: colors.rootGreenDark,
    ...buttonShadows
  },
  textColor: {
    color: colors.rootWhite,
    fontSize: 11,
    fontFamily: "Helvetica-Bold"
  }
};
