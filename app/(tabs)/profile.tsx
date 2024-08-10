import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Colors from "@/constants/Colors";
import { Stack } from "expo-router";
import {
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";

export default function Page() {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={styles.container}>
        <SafeAreaView style={styles.safeArea}>
          <View style={styles.topSection}>
            <View style={styles.propicArea}>
              <Image
                source={{ uri: "https://i.pravatar.cc/250?img=10" }}
                style={styles.propic}
              />
            </View>
            <Text style={styles.text}>Dilotabi</Text>
          </View>

          <View>
            <TouchableOpacity style={styles.btnSection} activeOpacity={0.7}>
              <View style={styles.btnArea}>
                <FontAwesome name="user-o" size={22} color={Colors.white} />
                <Text style={styles.btnText}>Account</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnSection} activeOpacity={0.7}>
              <View style={styles.btnArea}>
                <Ionicons
                  name="notifications-outline"
                  size={24}
                  color={Colors.white}
                />
                <Text style={styles.btnText}>Notifications</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnSection} activeOpacity={0.7}>
              <View style={styles.btnArea}>
                <Ionicons
                  name="settings-outline"
                  size={24}
                  color={Colors.white}
                />
                <Text style={styles.btnText}>Settings</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnSection} activeOpacity={0.7}>
              <View style={styles.btnArea}>
                <MaterialCommunityIcons
                  name="help-circle-outline"
                  size={25}
                  color={Colors.white}
                />
                <Text style={styles.btnText}>Help</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnSection} activeOpacity={0.7}>
              <View style={styles.btnArea}>
                <SimpleLineIcons name="logout" size={23} color={Colors.white} />
                <Text style={styles.btnText}>Logout</Text>
              </View>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
  },
  safeArea: {
    flex: 1,
  },
  topSection: {
    height: 300,
    justifyContent: "center",
    alignItems: "center",
  },
  propicArea: {
    width: 150,
    height: 150,
    borderRadius: 100,
    borderWidth: 5,
    borderColor: Colors.tintColor,
  },
  propic: {
    width: "100%",
    height: "100%",
    borderRadius: 100,
  },
  text: {
    color: Colors.white,
    fontSize: 32,
    marginTop: 20,
  },
  btnText: {
    color: Colors.white,
    fontSize: 17,
  },
  btnSection: {
    paddingHorizontal: 25,
    marginBottom: 12,
  },
  btnArea: {
    paddingHorizontal: 15,
    paddingVertical: 13,
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
    borderColor: Colors.grey,
    borderWidth: 1,
    borderRadius: 100,
    marginBottom: 7,
  },
});
