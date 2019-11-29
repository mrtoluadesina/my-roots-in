import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { SimpleCard } from "../../components/Cards";
import {
  Container,
  ImageBg,
  Row,
  Avatar,
  OverviewImage,
  DetailsView,
  ImageView
} from "./styles";
import { images } from "../../../assets/images";
import { colors } from "../../constants/colors";

function Dashboard(props) {
  return (
    <Container contentContainerStyle={styles.dashboard}>
      <ImageBg source={images.dashboardBg}>
        <Row style={styles.header}>
          <Avatar source={images.getDefaultAvatar}></Avatar>
        </Row>
        <Row>
          <SimpleCard style={styles.overviewCard}>
            <SimpleCard style={{ ...styles.details, ...styles.padSide }}>
              <ImageView>
                <OverviewImage source={images.getStartedImg} />
              </ImageView>
              <DetailsView>
                <Text style={styles.spanTitle}>The 54 Countries</Text>
                <View style={styles.details}>
                  <Text style={styles.quantity}>5</Text>
                  <Text style={styles.description}>
                    You have 0 trees planted on the 54 countries of Africa
                  </Text>
                </View>
              </DetailsView>
            </SimpleCard>
          </SimpleCard>
        </Row>
      </ImageBg>
    </Container>
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
    paddingHorizontal: 15,
    paddingVertical: 10
  },
  details: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  padSide: {
    paddingHorizontal: 15
  },
  spanTitle: {
    color: colors.rootDashboardSpanTitle,
    fontSize: 16,
    letterSpacing: 1
  },
  quantity: {
    fontSize: 40,
    paddingRight: 10,
    width:"15%"
  },
  description: {
    flexWrap: 'wrap',
    width: "85%"
  }
});
