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

export const Header = styled.View`
  width: 220;
  height: 220;
  align-items: "center";
  justify-content: "center";
  border-radius: 220 / 2;
  overflow: "hidden";
`;

export const HeaderImage = styled.Image`
  width: 220;
  height: 220;
  background-color: "#e7e6f0";
`;

export const PageHeader = styled.View`
  align-items: "center";
  width: "70%";
`;

export const HeaderVerification = styled.Text`
  font-size: 25;
  font-weight: "600";
  padding: 15;
`;

export const HeaderSubtitle = styled.Text`
  font-size: 18;
  opacity: 0.4;
  text-align: "center";
`;

export const CardSizeStyle = {
  backgroundColor: colors.rootWhite,
  width: "80%",
  height: "auto",
  shadowColor: colors.rootShadow,
  shadowOffset: {
    width: 0,
    height: 12
  },
  shadowOpacity: 0.1,
  shadowRadius: 16,
  elevation: 17,
  borderRadius: 10,
  padding: 5,
  flexDirection: "column",
  justifyContent: "space-between",
  paddingHorizontal: 30,
  paddingVertical: 30
};

export const FormField = {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center"
};

export const FormInputFields = {
  borderBottomWidth: 2,
  borderBottomColor: "#eceef1",
  width: "20%",
  textAlign: "center",
  paddingVertical: 10,
  fontSize: 20,
  color: "#9bb0cd",
  fontWeight: "bold"
};

export const GradientBtn = {
  marginVertical: 10,
  width: "100%"
};

export const scrollViewStyle = {
  flex: 1,
  marginTop: 10,
  alignItems: "center",
  justifyContent: "space-evenly"
};
