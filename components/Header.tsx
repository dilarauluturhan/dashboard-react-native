import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Colors from "@/constants/Colors";

export default function Header() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.userInfoWrapper}>
          <Image
            source={{ uri: "https://i.pravatar.cc/250" }}
            style={styles.userImg}
          />
          <View style={{ marginLeft: 10 }}>
            <Text style={{ color: Colors.white, fontSize: 12 }}>
              Hi, Dilotabi!
            </Text>
            <Text
              style={{ color: Colors.tintColor, fontSize: 16, fontWeight: 500 }}
            >
              Your Budget
            </Text>
          </View>
        </View>

        <TouchableOpacity onPress={() => {}} style={styles.btnWrapper}>
          <Text style={{ color: Colors.white, fontSize: 12 }}>
            My Transactions
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.black },
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 70,
    paddingHorizontal: 20,
  },
  userInfoWrapper: { flexDirection: "row", alignItems: "center" },
  userImg: { width: 50, height: 50, borderRadius: 30 },
  btnWrapper: {
    borderColor: "#666",
    borderWidth: 1,
    padding: 8,
    borderRadius: 10,
  },
});
