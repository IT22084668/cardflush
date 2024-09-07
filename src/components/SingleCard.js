import './SingleCard.css';

function SingleCard({card,handleChoice,flipped,disabled}) {
   
    const handleClick=()=>{
        if (!disabled){
            handleChoice(card);
        }
    }
    return (
        <div className='card'>
          <div className={flipped ? 'flipped' : ''}>
            <div className='image'>
                <img className='front' src={card.src} alt='card front'/>
            </div>
            <img className='back' 
                src='./img/cover.png' 
                onClick={handleClick} 
                alt='card back' />
          </div>
        </div>
    );
}

export default SingleCard;