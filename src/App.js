import { useEffect, useState } from "react";
import "./App.css";
import { getAllPokemon } from "./utils/pokemon";
import { getPokemon } from "./utils/pokemon";
import Card from "./components/Card/Card";
import Navbar from "./components/Navbar/Navbar";
import ReactLoading from "react-loading";
import Modal from "./components/Modal/Modal";

function App() {
  const initialURL = "https://pokeapi.co/api/v2/pokemon";
  const [loading, setLoading] = useState(true);
  const [pokemonData, setPokemonData] = useState([]);
  const [nextURL, setNextURL] = useState("");
  const [prevURL, setPrevURL] = useState("");
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  useEffect(() => {
    const fetchPokemonData = async () => {
      // すべてのポケモンデータを取得
      let res = await getAllPokemon(initialURL);
      // 各ポケモンの詳細なデータを取得
      loadPokemon(res.results);
      // console.log(res.results);
      setNextURL(res.next);
      setPrevURL(res.previous); //null
      setLoading(false);
    };
    fetchPokemonData();
  }, []);

  const loadPokemon = async (data) => {
    let _pokemonData = await Promise.all(
      data.map((pokemon) => {
        // console.log(pokemon);
        let pokemonRecord = getPokemon(pokemon.url);
        return pokemonRecord;
      })
    );
    setPokemonData(_pokemonData);
  };

  // console.log(pokemonData);

  const handleNextPage = async () => {
    setLoading(true);
    let data = await getAllPokemon(nextURL);
    // console.log(data);
    await loadPokemon(data.results);
    setNextURL(data.next);
    setPrevURL(data.previous);
    setLoading(false);
  };

  const handlePrevPage = async () => {
    if (!prevURL) return;

    setLoading(true);
    let data = await getAllPokemon(prevURL);
    await loadPokemon(data.results);
    setNextURL(data.next);
    setPrevURL(data.previous);
    setLoading(false);
  };

  // Cardのボタンをクリックした対象のポケモンの名前をidにセットする
  const onClickCard = (id) => {
    setSelectedPokemon(id);
  };

  // console.log(selectedPokemon);　//クリックしたポケモンの名前

  // selectedPokemonの値がnull以外になったら、対象idと同じidの情報をとってくる
  const modalData = pokemonData.find(({ name }) => name === selectedPokemon);
  // console.log(modalData);

  return (
    <>
      <Navbar />
      <div className="App">
        {loading ? (
          <ReactLoading
            type="spinningBubbles"
            color="black"
            height={"10%"}
            width={"10%"}
            className="loading"
          />
        ) : (
          <>
            <div className="pokemonCardContainer">
              {pokemonData.map((pokemon, i) => {
                return (
                  <Card key={i} pokemon={pokemon} onClickCard={onClickCard} />
                );
              })}
            </div>
            <div className="btn">
              <button
                onClick={handlePrevPage}
                className={prevURL === null ? "isTop" : "isNotTop"}
              >
                前へ
              </button>
              <button onClick={handleNextPage} className="isNotTop">
                次へ
              </button>
            </div>
          </>
        )}
      </div>
      {selectedPokemon === null ? <></> : <Modal modalData={modalData} />}
    </>
  );
}

export default App;
