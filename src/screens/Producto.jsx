import Center from "../components/Center";
import { useEffect, useState } from "react";

import Slideshow from "react-native-image-slider-show";
import { ScrollView, Text } from "react-native-web";

export default function Producto() {
  useEffect(() => {
    fetchImages();
  }, []);

  const [images, setImages] = useState([]);
  async function fetchImages() {
    const res = await fetch("https://picsum.photos/v2/list");
    const data = await res.json();
    console.log(data);
    setImages(() => data.map((e) => ({ ...e, url: e.download_url })));
  }
  return (
    <ScrollView>
      <Slideshow dataSource={images} />
      <Text>Nombre de producto</Text>
      <Text>Lps.400</Text>
      <Text>Descripcion de producto</Text>
    </ScrollView>
  );
}
