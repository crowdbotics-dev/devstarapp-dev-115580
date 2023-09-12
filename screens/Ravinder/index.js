import { Slider } from "react-native-elements";
import { CheckBox } from "react-native-elements";
import { useSelector } from "react-redux";
import { ActivityIndicator } from "react-native";
import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Ravinder = () => {
  const {
    entities: VerifyEmails
  } = useSelector(state => state.VerifyEmails);
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><ActivityIndicator style={styles.bXsHTxsb} hidesWhenStopped={true} animating={true} color="#c04747" data={VerifyEmails}></ActivityIndicator><CheckBox style={styles.pQkobTvN} title="Checkbox Title"></CheckBox><Slider style={styles.xEgxKoRj} thumbStyle={{
        height: 20,
        width: 20
      }} thumbTintColor="#0000FF" maximumValue={1} minimumValue={0}></Slider><CheckBox style={styles.CAxqdIPO} title="Checkbox Title"></CheckBox></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  bXsHTxsb: {
    width: 50,
    height: 50,
    position: "absolute",
    left: 74,
    top: 75,
    backgroundColor: "#ded8d8"
  },
  pQkobTvN: {
    width: 183,
    height: 69,
    position: "absolute",
    left: 76,
    top: 235
  },
  xEgxKoRj: {
    width: 150,
    height: 40
  },
  CAxqdIPO: {
    width: 183,
    height: 69
  }
});
export default Ravinder;