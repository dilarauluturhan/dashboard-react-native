import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import {
  AntDesign,
  FontAwesome,
  SimpleLineIcons,
  Ionicons,
} from "@expo/vector-icons";
import Colors from "@/constants/Colors";
import { StatusBar } from "expo-status-bar";

export default function Layout() {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarStyle: {
            backgroundColor: Colors.grey,
            position: "absolute",
            bottom: 40,
            justifyContent: "center",
            alignSelf: "center",
            height: 63,
            marginHorizontal: 100,
            paddingHorizontal: 20,
            paddingVertical: 8,
            paddingBottom: 8,
            borderRadius: 40,
            borderWidth: 1,
            borderTopWidth: 1,
            borderColor: "#333",
            borderTopColor: "#333",
          },
          tabBarShowLabel: false,
          tabBarInactiveTintColor: "#999",
          tabBarActiveTintColor: Colors.white,
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            tabBarIcon: ({ color, size, focused }) => (
              <View
                style={{
                  padding: 10,
                  borderRadius: 30,
                  backgroundColor: focused ? Colors.tintColor : Colors.grey,
                }}
              >
                <SimpleLineIcons name="pie-chart" size={19} color={color} />
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            tabBarIcon: ({ color, size, focused }) => (
              <View
                style={{
                  padding: 10,
                  borderRadius: 30,
                  backgroundColor: focused ? Colors.tintColor : Colors.grey,
                }}
              >
                <FontAwesome name="user-o" size={19} color={color} />
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="settings"
          options={{
            tabBarIcon: ({ color, size, focused }) => (
              <View
                style={{
                  padding: 10,
                  borderRadius: 30,
                  backgroundColor: focused ? Colors.tintColor : Colors.grey,
                }}
              >
                <Ionicons name="settings-outline" size={24} color={color} />
              </View>
            ),
          }}
        />
      </Tabs>
      <StatusBar style="light" />
    </>
  );
}
