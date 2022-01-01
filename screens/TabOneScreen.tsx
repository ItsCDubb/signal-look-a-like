import React from "react";
import { FlatList, View } from "react-native";
import MessageList from "../components/MessageList";
import ChatRooms from "../assets/dummy-data/ChatRooms";
import styles from "../App.styles";

export default function TabOneScreen() {
  return (
    <View style={styles.page}>
      <FlatList
        data={ChatRooms}
        renderItem={({ item }) => <MessageList chatRoom={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
