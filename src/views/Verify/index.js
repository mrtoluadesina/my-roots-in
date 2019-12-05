import React, { useState } from 'react';
import { ScrollView, View, Alert, TextInput, StyleSheet } from 'react-native';
import { ImageBg } from '../Dashboard/styles';
import {
  Header,
  HeaderImage,
  PageHeader,
  HeaderVerification,
  HeaderSubtitle,
  CardSizeStyle,
  FormField,
  FormInputFields,
  GradientBtn,
  scrollViewStyle,
} from './styles';

import { colors } from '../../constants/colors';
import { images } from '../../../assets/images';
import { SimpleButton } from '../../components/Buttons';
import { SimpleCard } from '../../components/Cards';
import PasscodeInputs from '../../components/PasscodeInputs';

export default function(props) {
  const { navigate } = props.navigation;
  const [otp, setOtp] = useState('');
  const [isFocused, setIsFocused] = useState({ focused: true, index: 0 });

  //Refactor later to make it work with a loop
  const inputs = Array(4).fill(0);

  function renderInputs() {
    return inputs.map((input, index) => {
      const nextFocus = `passcode${index + 1}`;
      return (
        <TextInput
          style={
            isFocused.focused && index === isFocused.index
              ? styles.inputFieldsFocused
              : styles.inputFields
          }
          autoFocus={index === 0 ? true : false}
          key={index}
          keyboardType={'number-pad'}
          onChangeText={event => {
            event && nextFocus.focus();
          }}
          ref={
            index !== 0
              ? r => r => {
                  nextFocus.focus();
                }
              : null
          }
        ></TextInput>
      );
    });
  }

  function inputChangeHandler(event) {
    setOtp(`${otp}${event}`);
  }

  return (
    <ImageBg
      imageStyle={[styles.imageBg, scrollViewStyle]}
      source={images.verificationBgImg}
    >
      {/* <ScrollView contentContainerStyle={scrollViewStyle}> */}
      <Header>
        <HeaderImage
          source={images.verificationEmailImg}
          resizeMode="contain"
        />
      </Header>
      <PageHeader>
        <HeaderVerification>Verification</HeaderVerification>
        <HeaderSubtitle>
          Enter the 4 digit sent to your email address
        </HeaderSubtitle>
      </PageHeader>
      <View style={CardSizeStyle}>
        <SimpleCard style={FormField}>
          <>
            <PasscodeInputs
              style={FormInputFields}
              autoFocus={true}
              onChangeText={event => {
                event && passcode2.focus();
                inputChangeHandler(event);
              }}
              keyboardType={'number-pad'}
            />
            <PasscodeInputs
              style={FormInputFields}
              inputRef={r => {
                this.passcode2 = r;
              }}
              keyboardType={'number-pad'}
              onChangeText={event => {
                event && this.passcode3.focus();
                inputChangeHandler(event);
              }}
            />
            <PasscodeInputs
              style={FormInputFields}
              inputRef={r => {
                this.passcode3 = r;
              }}
              keyboardType={'number-pad'}
              onChangeText={event => {
                event && this.passcode4.focus();
                inputChangeHandler(event);
              }}
            />
            <PasscodeInputs
              style={FormInputFields}
              inputRef={r => {
                passcode4 = r;
              }}
              keyboardType={'number-pad'}
              onChangeText={event => inputChangeHandler(event)}
            />
          </>
        </SimpleCard>
        <SimpleButton
          class={GradientBtn}
          textStyle={colors.rootWhite}
          title="Submit"
          onPress={() => Alert.alert('Gradient button clicked')}
        />
      </View>
      {/* </ScrollView> */}
    </ImageBg>
  );
}
const styles = StyleSheet.create({
  imageBg: {
    resizeMode: 'stretch',
    display: 'flex',
    alignItems: 'center',
  },
});
