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

export const Container = styled.View`
  width: 100%;
  border-bottom-width: 1px;
  border-bottom-color: ${colors.rootInputUnderline};
  height: 58;
  justify-content: space-between;
  position: relative;
`;

export const InputLabel = styled.Text`
  font-size: 18px;
  color: ${colors.rootInputLabel};
  letter-spacing: 2px;
  font-family: "Helvetica-Light";
  font-weight: 400;
`;

export const TextInput = styled.TextInput`
  font-size: 15px;
  color: ${colors.rootBlack};
  text-transform: capitalize;
  letter-spacing: 1px;
  height: 60%;
  margin-top: 4px;
`;

export const Edit = styled.Text`
  position: absolute;
  right: 0;
  bottom: 0;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.05px;
  text-transform: capitalize;
  color: ${colors.rootGreenDark};
  margin-bottom: 4px;
  padding-right: 4px;
`;
