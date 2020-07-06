import React from 'react'

const GuessTitle = (props) => { 
  
  return(
    <div className="turn_container_title"> 
        <div className="empty_div_turn_container_title">        
        </div> 
        <div className="Score_title">
        <div><p>Cows</p></div>
        <div><p>Bulls</p></div>  
        </div>      
    </div>
  )
}

export default GuessTitle;