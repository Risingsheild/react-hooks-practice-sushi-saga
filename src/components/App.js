import React, {useState, useEffect} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const[sushis, setSushis] = useState([])
  const[wallet, setWallet] = useState(100)

  useEffect(() => {
  fetch(API)
    .then((r) =>r.json())
    .then((sushis) => {
      const updatedSushis = sushis.map((sushi) => {
        return {...sushi, eatan: false }
      })
      setSushis(updatedSushis)
    })
}, [])

  function handleEatSushi(eatenSushi) {
    if (wallet >= eatenSushi.price) {
      const updatedSushis = sushis.map((sushi) => {
        if (sushi.id === eatenSushi.id) return {...sushi, eaten: true}
        return sushi
      })
      setSushis(updatedSushis)
      setWallet((wallet) => wallet - eatenSushi.price)
    } else {
      alert("You need more Money")
    }
  }

  function handleAddMoney(moreMoney) {
    setWallet((wallet) => wallet + moreMoney)
  }

  const ateSushis = sushis.filter((sushi)=> sushi.eaten)

  return (
    <div className="app">
      <SushiContainer sushis={sushis} onEatSushi={handleEatSushi}/>
      <Table wallet={wallet} onAddMoney={handleAddMoney} plates={ateSushis} />
    </div>
  );
}

export default App;
