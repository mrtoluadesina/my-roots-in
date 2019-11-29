import React, { useState } from "react";
import { StyleSheet, View, Text, Alert } from "react-native";
import { SimpleCard } from "../../components/Cards";
import {
  Main,
  ImageBg,
  Container,
  Row,
  Avatar,
  OverviewImage,
  DetailsView,
  ImageView
} from "./styles";
import { images } from "../../../assets/images";
import { colors } from "../../constants/colors";
import { SimpleButton, SimpleLinearGradientButton } from "../../components/Buttons";

function Dashboard(props) {
  return (
    <Main contentContainerStyle={styles.dashboard}>
      <ImageBg source={images.dashboardBg}>
        <Container>
          <Row style={styles.header}>
            <Avatar source={images.getDefaultAvatar}></Avatar>
          </Row>
          <Row>
            <SimpleCard style={styles.overviewCard}>
              <SimpleCard style={{ ...styles.details, ...styles.padAll }}>
                <ImageView>
                  <OverviewImage source={images.getStartedImg} />
                </ImageView>
                <DetailsView>
                  <Text style={styles.spanTitle}>The 54 Countries</Text>
                  <View style={styles.details}>
                    <Text style={styles.quantity}>0</Text>
                    <Text style={styles.description}>
                      You have 0 trees planted on the 54 countries of Africa
                    </Text>
                  </View>
                </DetailsView>
              </SimpleCard>
              <SimpleCard style={{ ...styles.details, ...styles.padAll }}>
                <ImageView>
                  <OverviewImage source={images.getStartedImg} />
                </ImageView>
                <DetailsView>
                  <Text style={styles.spanTitle}>The Green Great Wall</Text>
                  <View style={styles.details}>
                    <Text style={styles.quantity}>5</Text>
                    <Text style={styles.description}>
                      You have 5 trees planted on the great green wall
                    </Text>
                  </View>
                </DetailsView>
              </SimpleCard>
            </SimpleCard>
          </Row>
        </Container>
        <Container>
          <Row style={styles.column}>
            <Text style={styles.salut}>Good Morning, Jane Doe!</Text>
            <Text style={styles.info}>
              Plant a tree save the planet and support Africa by creating a job
            </Text>
          </Row>
          <Row style={styles.btns}>
            <SimpleButton
              title="GEOTAG A TREE"
              class={{
                width: "45%",
                backgroundColor: colors.rootWhite,
                justifyContent: "center",
                paddingVertical: 15
              }}
              textStyle={{
                color: colors.rootBlack,
                fontSize: 14
              }}
              onPress={() => Alert.alert("This option is not currently available")}
            />
            <SimpleButton
              title="PLANT A TREE"
              class={{
                width: "45%",
                backgroundColor: colors.rootGreenDark,
                justifyContent: "center"
              }}
              textStyle={{
                color: colors.rootWhite,
                fontSize: 14
              }}
              onPress={() => Alert.alert("Plant a Tree")}
            />
          </Row>
        </Container>
      </ImageBg>
    </Main>
  );
}

export default Dashboard;

const styles = StyleSheet.create({
  dashboard: {
    height: "100%"
  },
  header: {
    justifyContent: "flex-end"
  },
  overviewCard: {
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 20
  },
  details: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  padAll: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginVertical: 10
  },
  spanTitle: {
    color: colors.rootDashboardSpanTitle,
    fontSize: 16,
    letterSpacing: 1
  },
  quantity: {
    fontSize: 40,
    paddingRight: 10,
    width: "15%"
  },
  description: {
    flexWrap: "wrap",
    width: "85%",
    fontSize: 12
  },
  salut: {
    fontSize: 24,
    fontWeight: "800",
    color: colors.rootWhite,
    paddingBottom: 15
  },
  column: {
    flexDirection: "column",
    paddingBottom: "30%"
  },
  info: {
    color: colors.rootWhite,
    width: "55%",
    fontSize: 16,
    paddingBottom: 15
  },
  btns: {
    justifyContent: "space-between"
  }
});
