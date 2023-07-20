import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Image,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { ScrollView } from "react-native-gesture-handler";
import DropDownPicker from "react-native-dropdown-picker";
import { RFValue } from "react-native-responsive-fontsize";

export default class Createpost extends Component {
  constructor() {
    super();
    this.state = {
      previewImage: "image_1",
      dropdownHeight: 40,
      fontsLoaded: false,
    };
  }

  render() {
    if (this.state.fontsLoaded) {
      SplashScreen.hideAsync();
      let preview_images = {
        image_1: require("../assets/image_1.jpg"),
        image_2: require("../assets/image_2.jpg"),
        image_3: require("../assets/image_3.jpg"),
        image_4: require("../assets/image_4.jpg"),
        image_5: require("../assets/image_5.jpg"),
      };
      return (
        <View style={styles.container}>
          <SafeAreaView style={styles.droidSafeArea}></SafeAreaView>
          <View style={styles.appTitle}>
            <View style={styles.appIcon}>
              <Image
                source={require("../assets/logo.png")}
                style={styles.iconImage}
              ></Image>
            </View>
            <View style={styles.appTitleTextContainer}>
              <Text style={styles.appTitleText}>Novo Post</Text>
            </View>
          </View>
          <View style={styles.fieldsContainer}>
            <ScrollView>
              <Image
                source={preview_images[this.state.previewImage]}
                style={styles.previewImage}
              ></Image>
              <View style={{ height: RFValue(tis.state.dropdownHeight) }}>
                <DropDownPicker
                  items={[
                    { label: "Image 1", value: "image_1.jpg" },
                    { label: "Image 2", value: "image_2.jpg" },
                    { label: "Image 3", value: "image_3.jpg" },
                    { label: "Image 4", value: "image_4.jpg" },
                    { label: "Image 5", value: "image_5.jpg" },
                    { label: "Image 6", value: "image_6.jpg" },
                    { label: "Image 7", value: "image_7.jpg" },
                  ]}
                  defaultValue={this.state.previewImage}
                  containerStyle={{
                    height: 40,
                    borderRadius: 20,
                    marginBottom: 10,
                  }}
                  onOpen={() => {
                    this.setState({ dropdownHeight: 170 });
                  }}
                  onClose={() => {
                    this.setState({ dropdownHeight: 40 });
                  }}
                  style={{ backgroundColor: "transparent" }}
                  itemStyle={{ justifyContent: "flex-start" }}
                  dropDownStyle={{ backgroundColor: "2a2a2a" }}
                  labelStyle={{ color: "white" }}
                  arrowStyle={{ color: "white" }}
                  onChangeItem={(item) =>
                    this.setState({ previewImage: item.value })
                  }
                ></DropDownPicker>
              </View>
              <TextInput
                style={styles.inputFont}
                onChangeText={(caption) => this.setState({ caption })}
                placeholder={"Legenda"}
                placeholderTextColor="white"
                numberOfLines={5}
              ></TextInput>
            </ScrollView>
          </View>
          <View style={{ flex: 0.08 }}></View>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    color: "blue",
  },

  droidSafeArea: {
    marginTop:
      Plataform.OS === "android" ? StatusBar.currentHeight : RFValue(35),
  },

  appTitle: {
    flex: 0.07,
    flexDirection: "row",
  },

  appIcon: {
    flex: 0.2,
    justifyContent: "center",
    alignItems: "center",
  },

  iconImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },

  appTitleTextContainer: {
    flex: 0.8,
    justifyContent: "center",
  },

  appTitleText: {
    color: "white",
    fontSize: RFValue(28),
  },

  cardContainer: {
    flex: 0.85,
  },
});
