import { useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";

export default function PokemonDetailsScreen() {
  const params = useLocalSearchParams();
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    getPokemonData();
  }, []);

  const getPokemonData = async () => {
    const URL = `https://pokeapi.co/api/v2/pokemon/${params.name}`;
    const response = await fetch(URL);
    const data = await response.json();
    setPokemonData(data);
  };
  return (
    <View>
      <Text>
        {params.name}
        {JSON.stringify(pokemonData)}
      </Text>
    </View>
  );
}
