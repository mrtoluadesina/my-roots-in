import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text>Landing page</Text>
      <Text>My Roots In</Text>
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
});
