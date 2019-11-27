import React from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import { SimpleButton } from '../../components/Buttons';


export default function Home() {
  return (
    <View style={styles.container}>
      <Text>Landing page</Text>
      <Text>My Roots In</Text>
      <SimpleButton class={styles.btn} title="Press Me" onPress={() => Alert.alert('Simple Button')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: "Helvetica-Bold",
    fontWeight: '800',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    backgroundColor: "#dddddd",
    paddingVertical: 5,
    paddingHorizontal: 10
  }
});
