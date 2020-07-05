import React from 'react';
import GuessListItem from './GuessListItem'

export default class GuessList extends React.Component {
    constructor (props){
        super(props)
    }   

    render(){         
        //console.log("prev",this.props)
        return (
        <div>
          {            
            this.props.prevGuess.length === 0 ? (
              null
            ) : (
                this.props.prevGuess.map((guess, index) => {
                  return (
                <div className="turn_container">
                  <div className="Slno"><p>{index + 1}</p></div>
                    
                      <GuessListItem 
                          difficulty={this.props.difficulty} 
                          value = {guess.word}
                          count = {index}                           
                          key = {index}               
                        />
                    
                    <div className="Score">      
                      <div><p>{guess.cow}</p></div>
                      <div><p>{guess.bull}</p></div>
                    </div>   
                </div>
                  )
                })
              )
          }
        </div>
        )};

} 