import React from 'react'

const GuessTitle = (props) => {
  let inputArr = []
  for (let i =0; i< props.difficulty; i++){
    inputArr.push(<input 
      maxLength="1"
      key={i}             
      className="letterBox" type="text"       
      />)
  }  
  
  return(
    <div className="turn_container_title">
        <div className="Slno_title"><p>Sl.No</p></div>
        <div className="Guess_title">
          {inputArr}
        </div>
        <div className="Score_title">      
        <div><p>Cows</p></div>
        <div><p>Bulls</p></div>
        </div>
    </div>
  )
}

export default GuessTitle;