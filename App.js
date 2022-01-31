/* eslint-disable quotes */
/* eslint-disable prettier/prettier */ /* eslint-disable comma-dangle */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-unused-vars */
/* eslint-disable no-trailing-spaces */

import React from "react";

import Navigation from "./src/navigation";

import { SafeAreaView, StyleSheet } from "react-native";
import Amplify from "aws-amplify";
import config from "./src/aws-exports";

Amplify.configure(config);

const App = () => {
  //Auth.signOut();
  return (
    <SafeAreaView style={styles.root}>
      <Navigation />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#F9FBFC",
  },
});

export default App;
