import { useState } from "react";
import { Image, Dimensions, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

export default function Item({ navigation, item: { author, download_url } }) {
  const [like, setlike] = useState(false);
  const [screen] = useState(() => Dimensions.get("window"));

  return (
    <View
      style={{
        position: "relative",
      }}
    >
      <Image
        source={{
          uri: download_url,
          height: screen.height,
        }}
      />
      <Text
        style={{
          position: "absolute",
          bottom: 10,
          left: 10,
          color: "white",
          fontSize: 20,
        }}
      >
        {author}
      </Text>
      <View
        style={{
          display: "flex",
          position: "absolute",
          justifyContent: "space-around",
          height: 250,
          bottom: 200,
          right: 15,
          zIndex: 999,
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("About")}>
          <Image
            style={{
              borderRadius: 50,
              shadowColor: "black",
              shadowRadius: 6,
              shadowOffset: { height: 6, width: 6 },
              shadowOpacity: 0.1,
            }}
            source={{ uri: download_url, width: 40, height: 40 }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setlike(!like)}>
          <AntDesign
            name={"heart"}
            size={40}
            color={like ? "rgb(255, 43, 84)" : "white"}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alert("Hola mundo")}>
          <Ionicons name="chatbubble-ellipses" size={40} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alert("Hola mundo")}>
          <MaterialCommunityIcons name="share" size={40} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
