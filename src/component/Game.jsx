import React, { useState } from 'react'
import Square from './Square'

export const Game = () => {
  const [num, setnum] = useState([...Array(9).fill(null)])
  const [cond, setcond] = useState(true)

  console.log(num)
  const checkwinner =() =>{
    let winner=[
      
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],

  
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],

  
  [0, 4, 8],
  [2, 4, 6]
    ]
    for(let i=0;i<winner.length;i++){
      let[a,b,c]=winner[i]
      if(num[a]!=null && num[a]==num[b]&&num[b]==num[c]){
        return num[a]
      }
    }
      
     return false;
  }
  let result=checkwinner()

  const handlclick=(index)=>{
    if(num[index]!=null){
      return
    }
    let copyArray=[...num];
   
    copyArray[index]=cond? "x":"o";
    setnum(copyArray) 
    setcond(!cond)
  }

  const playAgain=()=>{
    setnum(Array(9).fill(null))
    
  }
  const isfill = () => {
    return num.every(item => item !== null);
  };
  
  return (
    <div className='container'>
      <h1 className='head'>Tic Tac Toe</h1>
      {!result && (
  <h3 className='head'>{cond ? "x" : "o"} your turn</h3>)}
      {
  !result && isfill() && (
    <>
      <h2 className="head">Game is a Tie!</h2>
      <button className="win" onClick={playAgain}>Restart</button>
    </>
  )
}


      {result ? (
        <>
          <h1 className='win'>{result} wins</h1>
          <button className='win' onClick={playAgain}>Play Again</button>
        </>
      ) :  (
          <>
          <div className='row'>
          <Square onClick={()=>handlclick(0)} value={num[0]}/>
          <Square onClick={()=>handlclick(1)}  value={num[1]}/>
          <Square onClick={()=>handlclick(2)} value={num[2]}/>
        </div>
        <div className='row'>
          <Square onClick={()=>handlclick(3)} value={num[3]}/>
          <Square onClick={()=>handlclick(4)} value={num[4]}/>
          <Square onClick={()=>handlclick(5)} value={num[5]}/>
        </div>
        <div className='row'>
          <Square onClick={()=>handlclick(6)} value={num[6]}/>
          <Square onClick={()=>handlclick(7)} value={num[7]}/>
          <Square onClick={()=>handlclick(8)} value={num[8]}/>
        </div></>
        )
      }
        
    </div>
  )
}
export default Game