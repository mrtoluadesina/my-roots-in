import React, { useState } from "react";
import { StyleSheet, View, Text, ImageBackground } from "react-native";
import { colors } from "../../constants/colors";
import { Container, ImageBg, Header, Greeting, Avatar } from "./styles";
import { images } from "../../../assets/images";

function Dashboard(props) {
  return (
    <Container contentContainerStyle={styles.dashboard}>
      <ImageBg source={images.dashboardBg}>
        <Header>
          <Greeting>Settings</Greeting>
          <Avatar source={images.getDefaultAvatar}></Avatar>
        </Header>
      </ImageBg>
    </Container>
  );
}

export default Dashboard;

const styles = StyleSheet.create({
  dashboard: {
    alignItems: "center",
    justifyContent: "center",
    height: "100%"
  }
}); 
