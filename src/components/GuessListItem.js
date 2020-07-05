import React from 'react';

export default class GuessListItem extends React.Component {
    constructor (props){
        super(props)
    }   

    render(){

        let inputArr = []        
        let guessLetters = this.props.value.split("")
        for (let i =0; i< this.props.difficulty; i++){            
            inputArr.push(<input 
            value={guessLetters[i]} 
            key={i+(this.props.difficulty*this.props.count)}                         
            className="letterBox" type="text" 
            readOnly={true}     
            />)
        }        

        return(
            <div className="Guess">
                {inputArr}
            </div>
        )
        
        };

} 

