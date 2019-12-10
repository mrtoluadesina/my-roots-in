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
  background-color: ${colors.rootWhite};
  flex-direction: row;
  height: 70;
  align-items: flex-end;
  padding: 0px 32px;
  padding-left: 0;
`;

export const TouchableOpacity = styled.TouchableOpacity`
  width: 20%;
  height: 100%;
  padding-top: 10px;
  padding-left: 32px;
  justify-content: flex-end;
`;

export const ProgressContainer = styled.View`
  flex: 1;
  height: 12;
  justify-content: center;
  align-items: flex-end;
`;

export const CardImage = styled.Image`
  width: 100%;
  height: 13px;
`;
