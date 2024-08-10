import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import Colors from "@/constants/Colors";
import { Stack } from "expo-router";
import { AntDesign } from "@expo/vector-icons";

export default function Page() {
  const accountItems = [
    { icon: "meh", text: "Edit Profile" },
    { icon: "Safety", text: "Security" },
    { icon: "bells", text: "Notifications" },
    { icon: "lock", text: "Privacy" },
  ];

  const supportItems = [
    { icon: "creditcard", text: "My Subscription" },
    { icon: "questioncircleo", text: "Help & Support" },
    { icon: "infocirlceo", text: "Terms & Policies" },
  ];

  const cacheAndCellularItems = [
    { icon: "delete", text: "Free Up Space" },
    { icon: "save", text: "Date Saver" },
  ];

  const dashboardItems = [
    { icon: "flag", text: "Report a Problem" },
    { icon: "adduser", text: "Add Account" },
    { icon: "logout", text: "Log out" },
  ];

  const renderSettingsItem = ({
    icon,
    text,
  }: {
    icon: string;
    text: string;
  }) => (
    <TouchableOpacity
      onPress={() => {}}
      style={{
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 8,
        paddingLeft: 30,
      }}
    >
      <AntDesign name={icon} size={24} color={Colors.white} />
      <Text
        style={{
          color: Colors.white,
          marginLeft: 10,
          fontWeight: 600,
          fontSize: 16,
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <SafeAreaView style={styles.container}>
        <ScrollView style={{ marginHorizontal: 12 }}>
          {/* Account */}
          <View style={styles.wrapper}>
            <View
              style={{
                borderColor: Colors.grey,
                borderWidth: 1,
                borderRadius: 100,
                marginBottom: 7,
              }}
            >
              <Text
                style={{
                  color: Colors.white,
                  paddingVertical: 12,
                  paddingLeft: 22,
                  fontSize: 20,
                  fontWeight: 600,
                  paddingHorizontal: 12,
                }}
              >
                Account
              </Text>
            </View>
            <View>
              {accountItems.map((item, index) => (
                <React.Fragment key={index}>
                  {renderSettingsItem(item)}
                </React.Fragment>
              ))}
            </View>
          </View>

          {/* Support and About */}
          <View style={styles.wrapper}>
            <View
              style={{
                borderColor: Colors.grey,
                borderWidth: 1,
                borderRadius: 100,
                marginBottom: 7,
              }}
            >
              <Text
                style={{
                  color: Colors.white,
                  paddingVertical: 12,
                  paddingLeft: 22,
                  fontSize: 20,
                  fontWeight: 600,
                  paddingHorizontal: 12,
                }}
              >
                Support & About
              </Text>
            </View>
            <View>
              {supportItems.map((item, index) => (
                <React.Fragment key={index}>
                  {renderSettingsItem(item)}
                </React.Fragment>
              ))}
            </View>
          </View>

          {/* Cache And Cellular */}
          <View style={styles.wrapper}>
            <View
              style={{
                borderColor: Colors.grey,
                borderWidth: 1,
                borderRadius: 100,
                marginBottom: 7,
              }}
            >
              <Text
                style={{
                  color: Colors.white,
                  paddingVertical: 12,
                  paddingLeft: 22,
                  fontSize: 20,
                  fontWeight: 600,
                  paddingHorizontal: 12,
                }}
              >
                Cache And Cellular
              </Text>
            </View>
            <View>
              {cacheAndCellularItems.map((item, index) => (
                <React.Fragment key={index}>
                  {renderSettingsItem(item)}
                </React.Fragment>
              ))}
            </View>
          </View>

          {/* Dashboard Settings */}
          <View style={styles.wrapper}>
            <View
              style={{
                borderColor: Colors.grey,
                borderWidth: 1,
                borderRadius: 100,
                marginBottom: 7,
              }}
            >
              <Text
                style={{
                  color: Colors.white,
                  paddingVertical: 12,
                  paddingLeft: 22,
                  fontSize: 20,
                  fontWeight: 600,
                  paddingHorizontal: 12,
                }}
              >
                Dashboard Settings
              </Text>
            </View>
            <View>
              {dashboardItems.map((item, index) => (
                <React.Fragment key={index}>
                  {renderSettingsItem(item)}
                </React.Fragment>
              ))}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
  },
  wrapper: {
    marginBottom: 12,
  },
});
