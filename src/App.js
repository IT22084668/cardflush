import './App.css';
import {useState} from 'react';

const CardImages=[
  {"src": "./img/spidy.png"},
  {"src": "./img/america.png"},
  {"src": "./img/hulk.png"},
  {"src": "./img/thor.png"},
  {"src": "./img/wol.png"},
  {"src": "./img/IronMan.png"},
]

function App() {

  const [cards,setCards] = useState([])
  const [turns,setTurns] = useState(0)

  const shuffleCards=()=>{
    const shuffleCards = [...CardImages,...CardImages]
    .sort(()=> Math.random() - 0.5)
    .map((card)=>({...card, id:Math.random()}) )

    setCards(shuffleCards)
    setTurns(0)
  }

  console.log(cards, turns);
  
  return (
    <div className="App">
      <h1>Card Flush</h1>
      <button onClick={shuffleCards}>New Game</button>

      <div className='card-grid'>
        {cards.map(card =>(
        <div className='card' key={card.id}>
          <div>
            <img className='front' src={card.src} alt='card front'/>
            <img className='back' src='./img/cover.png' alt='card back' />
          </div>
        </div>
          ))}
      </div>
    </div>
  );
}

export default App;
