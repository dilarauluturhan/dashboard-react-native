import {
  View,
  Text,
  FlatList,
  ListRenderItem,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { ExpenseType } from "@/types";
import Colors from "@/constants/Colors";
import { Feather } from "@expo/vector-icons";

export default function ExpenseBlock({
  expensList,
}: {
  expensList: ExpenseType[];
}) {
  const renderItem: ListRenderItem<Partial<ExpenseType>> = ({
    item,
    index,
  }) => {
    if (index == 0) {
      return (
        <TouchableOpacity onPress={() => {}}>
          <View style={styles.addItemBtn}>
            <Feather name="plus" size={22} color={"#CCC"} />
          </View>
        </TouchableOpacity>
      );
    }
    return (
      <View
        style={[
          styles.expensBlock,
          {
            backgroundColor:
              item.name === "Food"
                ? Colors.blue
                : item.name === "Saving"
                ? Colors.white
                : Colors.tintColor,
          },
        ]}
      >
        <Text
          style={{
            fontSize: 14,
            color:
              item.name === "Food"
                ? Colors.black
                : item.name === "Saving"
                ? Colors.black
                : Colors.white,
          }}
        >
          {item.name}
        </Text>
        <Text
          style={{
            color:
              item.name === "Food"
                ? Colors.black
                : item.name === "Saving"
                ? Colors.black
                : Colors.white,
            fontSize: 16,
            fontWeight: 600,
          }}
        >
          ${item.amount}
        </Text>
        <View
          style={{
            backgroundColor: "rgba(255,255,255,0.2)",
            paddingHorizontal: 5,
            paddingVertical: 3,
            borderRadius: 10,
          }}
        >
          <Text
            style={{
              color:
                item.name === "Food"
                  ? Colors.black
                  : item.name === "Saving"
                  ? Colors.black
                  : Colors.white,
              fontSize: 14,
            }}
          >
            {item.percentage}%
          </Text>
        </View>
      </View>
    );
  };

  const staticItem = [{ name: "Add Item" }];

  return (
    <View style={{ paddingVertical: 20 }}>
      <FlatList
        data={staticItem.concat(expensList)}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  expensBlock: {
    backgroundColor: Colors.blue,
    width: 100,
    padding: 15,
    borderRadius: 15,
    marginRight: 20,
    gap: 7,
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  addItemBtn: {
    flex: 1,
    borderWidth: 2,
    borderColor: "#666",
    borderStyle: "dashed",
    borderRadius: 10,
    marginRight: 20,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
