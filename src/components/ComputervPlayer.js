import React from 'react';
import {generateWord, getCowsAndBulls, hasRepeatingLetter} from '../gameplay/gameComputer'
import GuessList from './GuessList'
import GuessTitle from './GuessTitle'

export default class ComputervPlayer extends React.Component{
  constructor (props) {
    super(props)
    this.state = {
      answer: generateWord(parseInt(this.props.match.params.id, 10)),
      count : 0,
      guess : [],
      currGuess : this.props.match.params.id === "4" ? ["","","",""] :this.props.match.params.id === "5"? ["","","","",""]: ["","","","","",""]  
    }        
  }

addGuess = (word, cow, bull) => {
    this.setState((state) => ({
      count : state.count + 1,
      guess : state.guess.concat({
        word,
        cow,
        bull
      })
    }))
}  

clearCurrGuess = () => {
  this.setState((state) => ({
    currGuess : this.props.match.params.id === "4" ? ["","","",""] :this.props.match.params.id === "5"? ["","","","",""]: ["","","","","",""]  
  }))
}

handleChange = (e) => {
  let value = e.target.value  
  if (value.length === 2){
    value = value.split("")
    value = String(value[1])
  }  
  const id = parseInt(e.target.id)   
  this.setState((state) => {
    if (/^[a-zA-Z]/.test(value) || value === "")
      state.currGuess[id] = value.toLowerCase()    
    return({
      currGuess : state.currGuess
    })   
  })       
}

handleSubmit = () => {
  const currGuess = this.state.currGuess
  if (currGuess.includes("")){
    alert("Please enter a valid word")
  }else if (hasRepeatingLetter(currGuess.join(""))){
    alert("The word should a have unique characters")
  }else{
    const score = getCowsAndBulls(this.state.answer, currGuess.join(""))
    if(score.bull === this.state.answer.length){
      alert("You won the game!!")
    }else{
      this.addGuess(currGuess.join(""), score.cow, score.bull) 
      this.clearCurrGuess()     
    }    
  } 
  
}

render() {   
  const difficulty = parseInt(this.props.match.params.id, 10)  
  //console.log(this.state.answer)

  let inputArr = []
  for (let i =0; i< difficulty; i++){
    inputArr.push(<input 
      value={this.state.currGuess[i]} 
      key={i} 
      id = {i}      
      className="letterBox" type="text" 
      onChange={this.handleChange} 
      onKeyPress={event => {
        if (event.key === 'Enter') {
          this.handleSubmit()
        }
      }}      
      />)
  }  
  
  return(    
    <div className="CvP_container">

      <div className="game_container">          

        <GuessTitle difficulty={difficulty} />

        <GuessList 
          prevGuess={this.state.guess}           
          difficulty={difficulty}
           />

        <div className="turn_container">
          <div className="Slno"><p>{this.state.count + 1}</p></div>
          <div className="Guess">
            {inputArr}            
          </div>          
          <div className="Score">      
            <div><p>_</p></div>
            <div><p>_</p></div>
          </div>   
        </div>

      </div> 

    </div>   
  )
};        
}