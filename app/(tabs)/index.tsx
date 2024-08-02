import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import Colors from "@/constants/Colors";
import { Stack } from "expo-router";
import Header from "@/components/Header";
import { PieChart } from "react-native-gifted-charts";
import ExpenseBlock from "@/components/ExpenseBlock";
import ExpensList from "@/data/expenses.json";

export default function Page() {
  const pieData = [
    {
      value: 47,
      color: Colors.tintColor,
      focused: true,
      text: "47%",
    },
    { value: 40, color: Colors.blue, text: "40%" },
    { value: 16, color: Colors.white, text: "16%" },
    { value: 7, color: Colors.grey, text: "16%" },
  ];
  return (
    <>
      <Stack.Screen
        options={{
          header: () => <Header />,
        }}
      />
      <View style={[styles.container, { paddingTop: 75 }]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View style={{ gap: 10 }}>
              <Text
                style={{ color: Colors.white, fontSize: 14, fontWeight: 500 }}
              >
                My Expenses
              </Text>
              <Text
                style={{ color: Colors.white, fontSize: 36, fontWeight: 700 }}
              >
                $7000.<Text style={{ fontSize: 24, fontWeight: 400 }}>77</Text>
              </Text>
            </View>
            <View style={{ paddingVertical: 20, alignItems: "center" }}>
              <PieChart
                data={pieData}
                donut
                showGradient
                sectionAutoFocus
                // focusOnPress
                semiCircle
                radius={70}
                innerRadius={55}
                innerCircleColor={Colors.black}
                centerLabelComponent={() => {
                  return (
                    <View
                      style={{ justifyContent: "center", alignItems: "center" }}
                    >
                      <Text
                        style={{
                          fontSize: 22,
                          color: "white",
                          fontWeight: "bold",
                        }}
                      >
                        77%
                      </Text>
                    </View>
                  );
                }}
              />
            </View>
          </View>

          <ExpenseBlock expensList={ExpensList} />
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
    paddingHorizontal: 20,
  },
});
