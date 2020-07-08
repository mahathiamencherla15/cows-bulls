import React, { createRef } from 'react';
import {generateWord, getCowsAndBulls, hasRepeatingLetter} from '../gameplay/gameComputer'
import GuessList from './GuessList'
import GuessTitle from './GuessTitle'
import AlertModal from './AlertModal'
import ResultModal from './ResultModal'

export default class ComputervPlayer extends React.Component{
  constructor (props) {
    super(props)
    this.state = {
      alert: undefined,
      result:undefined,      
      answer: generateWord(parseInt(this.props.match.params.id, 10)),
      count : 0,
      guess : [],
      currGuess : Array(parseInt(this.props.match.params.id)).fill(""),
      inputRefs : Array(parseInt(this.props.match.params.id)).fill(0)
    }        
  }

retry = () => {
  this.setState(() => ({
      alert: undefined,
      result:undefined,           
      count : 0,
      guess : [],
      currGuess : Array(parseInt(this.props.match.params.id)).fill("")
  }))
}

componentDidMount() {  
  this.state.inputRefs[0].focus()  
}

componentDidUpdate() {  
  if(this.state.currGuess.join("") === "")
    this.state.inputRefs[0].focus()     
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
    currGuess : Array(parseInt(this.props.match.params.id)).fill("")
  }))
}

closeAlert = () => {
  this.setState(() => ({alert:undefined}))
}

handleChange = (e) => {  
  let value = e.target.value  
  if (value.length === 2){
    value = value.split("")
    value = String(value[1])
  }  
  const id = parseInt(e.target.id)    
  this.setState((state) => {
    if (/^[a-zA-Z]/.test(value) || value === ""){
      state.currGuess[id] = value.toLowerCase()    
      if(/^[a-zA-Z]/.test(value) && id != state.answer.length-1){
        this.state.inputRefs[id+1].focus()
      }      
    }
      
    return({
      currGuess : state.currGuess
    })   
  })    
}

handleSubmit = () => {
  const currGuess = this.state.currGuess 
  let score = {}
  
  if (currGuess.includes("") ){
    const alert = `Please enter a valid  ${this.state.answer.length}-letter word`
    this.setState(() => ({alert}))     
    
  }else if (hasRepeatingLetter(currGuess.join(""))){
    const alert = "The word cannot have repeating characters"
    this.setState(() => ({alert}))         
  }else if (this.state.count > this.state.answer.length+4){
    this.setState(() => ({result:"loss"}))
  }else{
    score = getCowsAndBulls(this.state.answer, currGuess.join(""))
    this.addGuess(currGuess.join(""), score.cow, score.bull) 
    this.clearCurrGuess()     
  }  
  if(score.bull === this.state.answer.length){
    this.setState(() => ({result:"win"}))
  }  
}

render() {   
  const difficulty = parseInt(this.props.match.params.id, 10)  
  console.log(this.state.inputRefs)
  //console.log(this.state.answer)
  

  let inputArr = []
  for (let i =0; i< difficulty; i++){
    inputArr.push(<input  
      ref={inputEl => (this.state.inputRefs[i] = inputEl)}
      name = {`${i}`}
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
          <div className="Slno"><p>{this.state.count + 1 >9 ? ""+String(this.state.count+1) : "0"+String(this.state.count+1)} </p></div>
          <div className="Guess">
            {inputArr}            
          </div>          
          <div className="Score">      
            <div><p>_</p></div>
            <div><p>_</p></div>
          </div>   
        </div>
      </div> 

      { !!this.state.alert && <AlertModal 
      alert={this.state.alert}
      closeAlert={this.closeAlert}
     />}

     { this.state.result==="win" && <ResultModal
        result = {this.state.result}
        title = {"Congratulations!"}
        message = {"You won the game"}
        retryButton = {undefined}
        />
      }

      { this.state.result === "loss" && <ResultModal
      result = {this.state.result}
      title = {"Better luck next time!"}
      message = {"Try again"}
      retryButton = {"yes"}
      retry = {this.retry}
      />
      }    
    </div>   
  )
};        
}