import PokemonCard from "@/components/PokemonCard";
import { useEffect, useState } from "react";
import { ScrollView, TextInput } from "react-native";
interface Pokemon {
  name: string;
  url: string;
}

export default function Index() {
  const [allResults, setAllResults] = useState<Pokemon[]>([]);
  const [results, setResults] = useState<Pokemon[]>([]);
  const [text, setText] = useState("");
  useEffect(() => {
    console.log("Entre en pantalla");
    getPokemons();
  }, []);

  const getPokemons = async () => {
    try {
      const URL = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";
      const response = await fetch(URL, {
        method: "GET",
      });
      if (response.ok) {
        const data = await response.json();
        setResults(data.results);
        setAllResults(data.results);
      } else {
        console.log("Bard Request");
      }
    } catch (error) {
      console.log("Ocurrió un error");
    }
  };

  const handleChangeText = (text: string) => {
    setText(text);
    filterPokemon(text);
  };

  const filterPokemon = (text: string) => {
    const arrayFiltered = allResults.filter((item) => item.name.includes(text));
    setResults(arrayFiltered);
  };
  return (
    <ScrollView>
      <TextInput
        value={text}
        onChangeText={handleChangeText}
        placeholder="busca un pokemon.."
      ></TextInput>
      {results.map((item) => {
        return <PokemonCard name={item.name} url={item.url}></PokemonCard>;
      })}
    </ScrollView>
  );
}
