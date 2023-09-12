import { ActivityIndicator } from "react-native";
import { CheckBox } from "react-native-elements";
import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled5 = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><CheckBox style={styles.MNLYmMGe} title="Checkbox Title"></CheckBox><ActivityIndicator style={styles.WItEchXJ}></ActivityIndicator><CheckBox style={styles.txhKsFMD} title="Checkbox Title"></CheckBox></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  MNLYmMGe: {
    width: 183,
    height: 69
  },
  WItEchXJ: {
    width: 50,
    height: 50
  },
  txhKsFMD: {
    width: 183,
    height: 69
  }
});
export default Untitled5;