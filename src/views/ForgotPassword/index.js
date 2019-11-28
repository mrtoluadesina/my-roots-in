import React, { useState } from "react";
import { StyleSheet, View, Text, Image, ScrollView } from "react-native";
import CustomInput from "../../components/Input";
import { SimpleLinearGradientButton } from "../../components/Buttons";
import { images } from "../../../assets/images";
import { colors } from "../../constants/colors";

function ForgotPassword(props) {
  const {navigate} = props.navigation;

  return (
    <View>
      <Text>ForgotPassword</Text>
    </View>
  );
}

export default ForgotPassword;