import React from 'react';
import { TextInput } from 'react-native-gesture-handler';

export default function PasscodeInputs({
  inputRef,
  style,
  autoFocus,
  onChangeText,
  keyboardType,
}) {
  return (
    <TextInput
      ref={r => {
        inputRef && inputRef(r);
      }}
      style={style}
      autoFocus={autoFocus}
      onChangeText={onChangeText}
      keyboardType={keyboardType}
    ></TextInput>
  );
}
