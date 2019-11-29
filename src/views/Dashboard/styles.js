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
  position: relative;
  padding: 20px;
  justify-content: space-between
`;

export const Container = styled.View`
`;

export const Row = styled.View`
  padding-top: 30px;
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
  width: 60px;
  height: 60px;
`;

export const DetailsView = styled.View`
  flex-basis: 75%;
`;