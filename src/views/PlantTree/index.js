import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default function PlantTree() {
  return (
    <ScrollView>
      <View style={styles.pageHeader}>
        <Text style={styles.headerText}>Why plant a tree</Text>
        <Image
          style={styles.imageStyle}
          source={require('../../../assets/images/8.jpg')}
        />
      </View>
      <View style={styles.briefView}>
        <Text style={styles.mainBrief}>
          Choose the reason for planting your roots
        </Text>
      </View>
      <View style={styles.selectOptions}>
        <View style={styles.singleSelect}>
          <Image
            style={styles.singleSelectImage}
            source={require('../../../assets/images/13.jpg')}
          />
        </View>
        <View style={styles.singleSelect}>
          <Image
            style={styles.singleSelectImage}
            source={require('../../../assets/images/8.jpg')}
          />
        </View>
        <View style={styles.singleSelect}>
          <Image
            style={styles.singleSelectImage}
            source={require('../../../assets/images/CAM_Special-Occasions_eDM-icons_lc_Retirement.png')}
          />
        </View>
        <View style={styles.singleSelect}>
          <Image
            style={styles.singleSelectImage}
            source={require('../../../assets/images/365cons_dribbble_setd-58.png')}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  pageHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  imageStyle: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
  },
  headerText: {
    fontSize: 25,
    fontWeight: '300',
  },
  briefView: {
    alignItems: 'center',
    marginVertical: 15,
  },
  mainBrief: {
    fontSize: 25,
    fontWeight: '500',
    width: '70%',
    textAlign: 'center',
  },
  selectOptions: {
    marginTop: 20,
  },
  singleSelect: {
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#f2f3f4',
    paddingVertical: 10,
    paddingTop: 30,
    paddingHorizontal: 20,
  },
  singleSelectImage: {
    width: 50,
    height: 50,
    borderRadius: 4,
  },
});
