import Clock from "./components/clock"
import MyButton from "./components/button"
import { useState } from "react"
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import toast,{Toaster} from 'react-hot-toast'



const Square = ({value, onSquareClick: callBackFunc}) => {

  return <>
            <div className="buttonWrapper">
              <div className="square" style={{display: "flex", justifyContent: 'center', alignItems: 'center', backgroundColor: '#344350ff', height :'100%', width: '100%'
              }} onClick={ callBackFunc } >{value}</div>
            </div>
        </>
}

  

const RestartButton = (props) => {
  return <button className={props.className} onClick={props.clickAction} style={{color: props.textColor, backgroundColor:props.bgColor, ...props.extraStyles}}> {props.buttonText}</button>
}


const App = () => {

  const [square,setSquare] = useState( Array(9).fill(null) );
  const [xisUp, setTurn] = useState(true);
  const [playStatus, setPlay] = useState(false);

  const winner = calculateWinner(square);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xisUp ? "X" : "O");
  }


  function handleClick(i) {
    console.log(i)
    
    //Makes copy of the array to allow re-render
    let newSquares = [ ...square ]
    

    
    //checks to see if the square pressed has a truthy value. If it does it'll return nothing.
    if(square[i] || calculateWinner(square)) {return}
    
    xisUp == true ? newSquares[i] = "X" : newSquares[i]="O";
    
    //Updates the states
    setSquare(newSquares);
    setTurn(!xisUp)
    let w = calculateWinner(newSquares);
    if (w) setPlay(true)
    if (w) toast(`Good Job! Player ${w}`, { icon: '👏', });
    
  }

  function restartAction() {
  
  const restartArray = square.filter((i) => { return i != null && true })


  if(restartArray.length >= 1)
    {
  console.log(restartArray)
  //Creates an array with nine indexes filled with the value of null
  const square = Array(9).fill(null);

  //makes a copy of the square array above and sets it into newGamesSquares
  const newGameSquares = [...square];
  setSquare(newGameSquares);

  //Alert for new game started!
  toast.success('New Game Started!')

  //Resets playStatus to false
  setPlay(false)
    }

  else 
    {
    toast('No Need to Restart!', { icon: '🙄', style: { borderRadius: '10px', background: '#333', color: '#fff', }, } );
    }

}

function calculateWinner(square) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (square[a] && square[a] === square[b] && square[a] === square[c]) {
      return square[a];
    }
  }
  return null;
}



  return (

    <div>
             
          <div className="winoverlay">
              <DotLottieReact
            src="https://lottie.host/7aa47339-e962-45cb-859e-ae8e8391249a/XufJayM4Wz.lottie"
            loop={false}
            autoplay={playStatus}
            key={playStatus}
            />
          </div>
          <Toaster position="top-center" />
          <h3 style={{ fontFamily: 'Poppins',fontSize: '2rem', display: 'flex', justifyContent: "center", margin: '0', padding:'0'}}>Tic Tac Toe</h3>
          <h4 style={{display: 'flex', justifyContent: 'center', alignItems: 'center' , marginBottom: '15px', marginTop: 5}}>{status}</h4>
          <div className="square-container">
           
             <Square cool="i am cool" onSquareClick={()=>{ handleClick(0)} } value={square[0]} />
             <Square onSquareClick={()=>{handleClick(1)}}  value={square[1]}/>
             <Square onSquareClick={()=>{handleClick(2)}}  value={square[2]}/>
          
          
             <Square onSquareClick={()=>{handleClick(3)}}  value={square[3]}/>
             <Square onSquareClick={()=>{handleClick(4)}}  value={square[4]}/>
             <Square onSquareClick={()=>{handleClick(5)}}  value={square[5]}/>
          
          
             <Square onSquareClick={()=>{handleClick(6)}}  value={square[6]}/>
             <Square onSquareClick={()=>{handleClick(7)}}  value={square[7]}/>
             <Square onSquareClick={()=>{handleClick(8)}}  value={square[8]}/>          
          </div>
            
          <RestartButton className="tester" extraStyles={ {marginTop: '40px', width: "100%", outline: 'none',}} clickAction={restartAction} buttonText="Restart Game" textColor="#1B3C53" bgColor="#D2C1B6"/>

        </div>

  )

}
export default App