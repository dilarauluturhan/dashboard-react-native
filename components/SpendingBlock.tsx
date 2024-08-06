import { View, Text } from "react-native";
import React from "react";
import { SpendingType } from "@/types";
import Colors from "@/constants/Colors";
import {
  DollarIcon,
  AirbnbIcon,
  NetflixIcon,
  SpotifyIcon,
  AmazonIcon,
  FigmaIcon,
  ShoopingCartIcon,
} from "@/constants/Icons";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";

export default function SpendingBlock({
  spendingList,
}: {
  spendingList: SpendingType[];
}) {
  let icon = <DollarIcon width={22} height={22} color={Colors.white} />;

  return (
    <View style={{ marginVertical: 20, alignItems: "flex-start" }}>
      <Text
        style={{
          color: Colors.white,
          fontSize: 14,
          fontWeight: 500,
          marginBottom: 10,
        }}
      >
        February <Text style={{ fontWeight: 700 }}>Sale</Text>
      </Text>

      {spendingList.map((item) => {
        if (item.name == "Trendyol") {
          icon = (
            <MaterialCommunityIcons
              name="shopping-outline"
              size={21}
              width={22}
              height={22}
              color={Colors.white}
            />
          );
        } else if (item.name == "Hepsiburada") {
          icon = (
            <ShoopingCartIcon width={22} height={22} color={Colors.white} />
          );
        } else if (item.name == "Amazon") {
          icon = <AmazonIcon width={22} height={22} color={Colors.white} />;
        } else if (item.name == "Online Shopping") {
          icon = (
            <ShoopingCartIcon width={22} height={22} color={Colors.white} />
          );
        }
        return (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginVertical: 10,
            }}
            key={item.id}
          >
            <View
              style={{
                backgroundColor: Colors.grey,
                padding: 10,
                borderRadius: 50,
                marginRight: 10,
              }}
            >
              {icon}
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View style={{ gap: 5 }}>
                <Text
                  style={{
                    color: Colors.white,
                    fontSize: 16,
                    fontWeight: "600",
                  }}
                >
                  {item.name}
                </Text>
                <Text style={{ color: Colors.white }}>{item.date}</Text>
              </View>
              <Text
                style={{ color: Colors.white, fontSize: 16, fontWeight: "600" }}
              >
                ${item.amount}
              </Text>
            </View>
          </View>
        );
      })}
    </View>
  );
}
