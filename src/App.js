import './App.css';
import {useEffect, useState} from 'react';
import SingleCard from './components/SingleCard';

const CardImages=[
  {"src": "./img/spidy.png",matched:false},
  {"src": "./img/america.png",matched:false},
  {"src": "./img/hulk.png",matched:false},
  {"src": "./img/thor.png",matched:false},
  {"src": "./img/wol.png",matched:false},
  {"src": "./img/IronMan.png",matched:false},
]

function App() {

  const [cards,setCards] = useState([]);
  const [turns,setTurns] = useState(0);
  const [choiceOne,setChoiceOne] = useState(null);
  const [choiceTwo,setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);

  const shuffleCards=()=>{
    const shuffleCards = [...CardImages,...CardImages]
    .sort(()=> Math.random() - 0.5)
    .map((card)=>({...card, id:Math.random()}) )

    setChoiceOne(null);
    setChoiceTwo(null);
    setCards(shuffleCards)
    setTurns(0)
  }

  const handleChoice = (card) =>{
      choiceOne ? setChoiceTwo(card) : setChoiceOne(card)    
  }

  useEffect(()=>{
    if(choiceOne && choiceTwo){
      setDisabled(true);
      if (choiceOne.src === choiceTwo.src) {
        setCards(prevCards =>{
         return prevCards.map(card =>{
           if (card.src === choiceOne.src) {
             return{...card,matched:true}
           } else {
             return card
           }
         })
        })
        resetTurn()
       }else {
        setTimeout(()=>resetTurn(),1000)
       }
      }
  },[choiceOne,choiceTwo])

  console.log(cards);
  

  const resetTurn = ()=>{
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(prevTurns => prevTurns+1)
    setDisabled(false)
  }


  useEffect(()=>{
    shuffleCards();
  },[])
  
  return (
    <div className="App">
      <h1>Card Flush</h1>
      <button onClick={shuffleCards}>New Game</button>

      <div className='card-grid'>
        {cards.map(card =>(
            <SingleCard 
              key={card.id} 
              card={card}
              handleChoice={handleChoice}
              flipped ={card === choiceOne||card === choiceTwo || card.matched}
              disabled={disabled}
              />
          ))}
      </div>
      <p>Turns : {turns}</p>
    </div>
  );
}

export default App;
