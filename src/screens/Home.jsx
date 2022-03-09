import { useEffect, useState } from "react";
import { FlatList, Text, Dimensions } from "react-native";
import Center from "../components/Center";
import { SafeAreaView } from "react-native-safe-area-context";
import Item from "../components/Item";
export default function Home({ navigation }) {
  useEffect(() => {
    fetchImages();
  }, []);
  const [loading, setLoading] = useState(true);
  const [images, setImages] = useState([]);
  async function fetchImages() {
    const res = await fetch("https://picsum.photos/v2/list");
    const images = await res.json();
    setImages(images);
    setLoading(false);
  }
  const [screen, setscreen] = useState(() => Dimensions.get("window"));
  return !loading ? (
    <SafeAreaView>
      <FlatList
        //   snapToAlignment="start"
        decelerationRate="normal"
        snapToStart={true}
        snapToInterval={screen.height}
        keyExtractor={(item) => item.id}
        data={images}
        renderItem={({ item }) => <Item item={item} />}
      />
    </SafeAreaView>
  ) : (
    <Center>
      <Text>Loading...</Text>
    </Center>
  );
}
