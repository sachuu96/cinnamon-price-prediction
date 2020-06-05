import React, { Component } from "react";
import { years, months, days, types, grades } from "./data";
import {
  Picker,
  Button,
  StyleSheet,
  ImageBackground,
  pre,
  Image,
  Text,
  View,
  TextInput,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
} from "react-native";

import { Dropdown } from "react-native-material-dropdown";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      year: 2020,
      month: "June",
      day: 1,
      grade: "",
      type: "",
    };
    this.onChangeField = this.onChangeField.bind(this);
  }

  onChangeField(field) {
    this.setState({
      ...this.state,
      ...field,
    });
  }

  render() {
    const { year, month, day, type, grade } = this.state;

    return (
      <ImageBackground
        style={styles.container}
        source={require("./123.jpg")}
        imageStyle={{ resizeMode: "cover" }}
      >
        <SafeAreaView style={{ backgroundColor: "transparent" }}></SafeAreaView>
        <Text
          style={{
            backgroundColor: "transparent",
            height: 50,
            fontSize: 28,
            padding: (10, 10, 50, 10),
            color: "white",
            borderBottomWidth: 0.5,
            borderBottomColor: "#7d90a0",
          }}
        >
          Prediction of Cinnamon Price{" "}
        </Text>

        <Text
          style={{
            backgroundColor: "#663300",
            height: 35,
            fontSize: 18,
            padding: 5,
            color: "white",
            borderBottomWidth: 0.5,
            borderBottomColor: "#7d90a0",
          }}
        >
          Select A Year
        </Text>

        <Dropdown
          data={years}
          value={year}
          label="Year"
          labelFontSize={18}
          itemColor={"black"}
          fontSize={20}
          useNativeDriver={true}
          onChangeText={(value) => this.onChangeField({ year: value })}
        />

        <Text
          style={{
            backgroundColor: "#663300",
            height: 35,
            fontSize: 18,
            padding: 5,
            color: "white",
            borderBottomWidth: 0.5,
            borderBottomColor: "#7d90a0",
          }}
        >
          Select A Month
        </Text>

        <Dropdown
          data={months}
          value={month}
          label="Month"
          labelFontSize={18}
          itemColor={"black"}
          fontSize={20}
          useNativeDriver={true}
          onChangeText={(value) => this.onChangeField({ month: value })}
        />

        <Text
          style={{
            backgroundColor: "#663300",
            height: 35,
            fontSize: 18,
            padding: 5,
            color: "white",
            borderBottomWidth: 0.5,
            borderBottomColor: "#7d90a0",
          }}
        >
          Select A Day
        </Text>

        <Dropdown
          data={days}
          value={day}
          label="Day"
          labelFontSize={18}
          itemColor={"black"}
          fontSize={20}
          useNativeDriver={true}
          onChangeText={(value) => this.onChangeField({ day: value })}
        />

        <Text
          style={{
            backgroundColor: "#663300",
            height: 35,
            fontSize: 18,
            padding: 5,
            color: "white",
            borderBottomWidth: 0.5,
            borderBottomColor: "#7d90a0",
          }}
        >
          Select Grade
        </Text>

        <Dropdown
          data={grades}
          value={grade}
          label="Grade"
          labelFontSize={18}
          itemColor={"black"}
          fontSize={20}
          useNativeDriver={true}
          onChangeText={(value) => this.onChangeField({ grade: value })}
        />

        <Text
          style={{
            backgroundColor: "#663300",
            height: 35,
            fontSize: 18,
            padding: 5,
            color: "white",
            borderBottomWidth: 0.5,
            borderBottomColor: "#7d90a0",
          }}
        >
          Select Type
        </Text>

        <Dropdown
          data={types}
          value={type}
          label="Type"
          labelFontSize={18}
          itemColor={"black"}
          fontSize={20}
          useNativeDriver={true}
          onChangeText={(value) => this.onChangeField({ type: value })}
        />

        <Button
          title="OK"
          color="white"
          accessibilityLabel="Learn more about this purple button"
        />

        <Text
          input
          style={{
            backgroundColor: "transparent",
            height: 50,
            fontSize: 20,
            padding: 10,
            color: "white",
            borderBottomWidth: 0.5,
            borderBottomColor: "#7d90a0",
          }}
        >
          This is predicted price
        </Text>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6666ff",
  },
});
