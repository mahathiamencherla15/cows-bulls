import React from 'react';
import GuessListItem from './GuessListItem'

export default class GuessList extends React.Component {
    constructor (props){
        super(props)
    }   

    render(){         
        //console.log("prev",this.props)
        const length = this.props.prevGuess.length
        return (
        <div>
          {            
            length === 0 ? (
              null
            ) : (
                this.props.prevGuess.map((guess, index) => {
                  return (
                    <div className="turn_container" key = {index+length+1} >
                      <div className="Slno" key = {index+length+2} >
                        <p key = {index+length+3} >
                          {index + 1}
                        </p>
                      </div>
                        
                      <GuessListItem 
                          difficulty={this.props.difficulty} 
                          value = {guess.word}
                          count = {index}                           
                          key = {index}               
                      />
                        
                      <div className="Score" key = {index+length+4} >      
                        <div key = {index+length+5} >
                          <p key = {index+length+6} >
                            {guess.cow}
                          </p>
                        </div>
                        <div key = {index+length+7}>
                          <p key = {index+length+8} >
                            {guess.bull}
                          </p>
                        </div>
                      </div>   
                    </div>
                  )
                })
              )
          }
        </div>
        )};

} 