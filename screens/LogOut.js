import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

export default class LogOut extends Component {
  componentDidMount() {
    firebase.auth().signOut();
  }
    render() {
      return (
        <View style={styles.container}>
          <Text>Tela de log out</Text>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      color:"purple",
    },
  });