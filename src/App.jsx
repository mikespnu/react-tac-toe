import Clock from "./components/clock"
import MyButton from "./components/button"
import { useState } from "react"
import { DotLottieReact } from '@lottiefiles/dotlottie-react';



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

  function handleClick(i) {
    console.log(i)
    let newSquares = [ ...square ]
    if(square[i]) {return}
    
    xisUp == true ? newSquares[i] = "X" : newSquares[i]="O";

     xisUp && console.log('Current turn for X!')

    setPlay(true)
    setSquare(newSquares);
    setTurn(!xisUp)
  }

  function restartAction() {

  const restartArray = square.filter((i) => { return i != null && true })

  if(restartArray.length >= 1)
    {
  console.log(restartArray)
  const square = Array(9).fill(null);
  const newGameSquares = [...square];
  setSquare(newGameSquares);
  alert('New Game Started!')
    }

  else {
    console.log(restartArray.length)
    alert('No need to restart!')
    }

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

          <h3 style={{ fontFamily: 'Poppins',fontSize: '2rem', display: 'flex', justifyContent: "center"}}>Tic Tac Toe</h3>
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
            
          <RestartButton className="tester" extraStyles={ {marginTop: '40px', width: "100%", outline: 'none',}} clickAction={restartAction} buttonText="Restart Game" textColor="white" bgColor="darkblue"/>

        </div>

  )

}
export default App