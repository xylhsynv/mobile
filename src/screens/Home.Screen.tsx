import { View, Text } from "react-native";
import React from "react";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { Avatar } from "../components/Avatar";
import { Header } from "../components/Header";
import RightVectors from "../../assets/vectors/ring.svg";

export const HomeScreen = () => {
  return (
    <View>
      <Header
        left={
          <Avatar
            title="Messi Lionel"
            caption="Gold Member"
            url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROxFPNWkkpp5rDVmbELbQ6I5FkofReavOltGXBdR1atg&s"
          />
        }
        right={<RightVectors color={"red"} width={20} height={20} />}
      />
      <Text style={{ color: "#fff" }}>Home.Screen</Text>
    </View>
  );
};
