import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  Alert,
  Image,
  TextInput,
} from 'react-native';
import { colors } from '../../constants/colors';
import { SimpleLinearGradientButton } from '../../components/Buttons';
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

  console.log(otp);

  return (
    <ScrollView contentContainerStyle={styles.content}>
      <View style={styles.imageWrapper}>
        <Image
          style={styles.image}
          source={require('../../../assets/images/verification.png')}
        />
      </View>
      <View style={styles.pageHeaderView}>
        <Text style={styles.pageHeader}>Verification</Text>
        <Text style={styles.subtitle}>
          Enter the 4 digit sent to your email address
        </Text>
      </View>
      <View style={styles.formArea}>
        <SimpleCard style={styles.fieldsArea}>
          <>
            <PasscodeInputs
              style={styles.inputFields}
              autoFocus={true}
              onChangeText={event => {
                event && passcode2.focus();
                inputChangeHandler(event);
              }}
              keyboardType={'number-pad'}
            />
            <PasscodeInputs
              style={styles.inputFields}
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
              style={styles.inputFields}
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
              style={styles.inputFields}
              inputRef={r => {
                passcode4 = r;
              }}
              keyboardType={'number-pad'}
              onChangeText={event => inputChangeHandler(event)}
            />
          </>
        </SimpleCard>
        <SimpleLinearGradientButton
          class={styles.btnGradient}
          textStyle={styles.whiteText}
          title="Submit"
          onPress={() => Alert.alert('Gradient button clicked')}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  btnGradient: {
    marginVertical: 10,
    width: '100%',
  },
  imageWrapper: {
    width: 220,
    height: 220,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 220 / 2,
    overflow: 'hidden',
  },
  image: {
    width: 220,
    height: 220,
    resizeMode: 'contain',
    backgroundColor: '#e7e6f0',
  },
  whiteText: {
    color: colors.rootWhite,
  },
  formArea: {
    backgroundColor: '#fff',
    width: '80%',
    height: 'auto',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.1,
    shadowRadius: 16,
    elevation: 17,
    borderRadius: 10,
    padding: 5,
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    paddingVertical: 30,
  },
  fieldsArea: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputFields: {
    borderBottomWidth: 2,
    borderBottomColor: '#eceef1',
    width: '20%',
    textAlign: 'center',
    paddingVertical: 10,
    fontSize: 20,
    color: '#9bb0cd',
    fontWeight: 'bold',
  },
  inputFieldsFocused: {
    borderBottomWidth: 2,
    borderBottomColor: '#0bc5b7',
    width: '20%',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    opacity: 0.4,
    textAlign: 'center',
  },
  pageHeaderView: {
    alignItems: 'center',
    width: '70%',
  },
  pageHeader: {
    fontSize: 25,
    fontWeight: '600',
    padding: 15,
  },
});
