import { CheckBox } from "react-native-elements";
import { ActivityIndicator } from "react-native";
import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled7 = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><ActivityIndicator style={styles.nCKkduzz}></ActivityIndicator><CheckBox style={styles.WgUMULBQ} title="Checkbox Title"></CheckBox></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  nCKkduzz: {
    width: 50,
    height: 50,
    position: "absolute",
    left: 65,
    top: 23
  },
  WgUMULBQ: {
    width: 183,
    height: 69
  }
});
export default Untitled7;