import React, { useState } from "react";
import { Text, View } from "react-native";

export default function PokemonIndex() {
  const [results, setResults] = useState<any>([]);

  return (
    <View>
      <Text> {JSON.stringify(JSON)} </Text>
    </View>
  );
}
