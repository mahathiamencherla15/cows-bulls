import React, { Component } from 'react';
import Modal from 'react-modal';
import { withRouter } from 'react-router-dom';

class AllModal extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      difficulty : "4"
    }
  }

  handleOnChange = (e) => {    
    const key = e.target.value
    if (key === "6"){
      this.setState(() => ({difficulty: "6"}))
    }else if (key === "5"){
      this.setState(() => ({difficulty: "5"}))
    }else if (key === "4"){
      this.setState(() => ({difficulty: "4"}))
    }        
  }

  handleOnSubmit = (e) => {    
    this.props.history.push(`/play/${this.props.selectedOption}/${this.state.difficulty}`)
  }  

  render(){ 
    
    return(
      <Modal
      isOpen={!!this.props.selectedOption}
      onRequestClose={this.props.handleSelectedOption}
      contentLabel="Teams"
      closeTimeoutMS={200}
      backdropOpacity={1}
      ariaHideApp={false}
      className="modal">
          <h2 className="modal__title">{this.props.selectedOption}</h2>
          <select             
            value={this.state.difficulty}
            onChange={this.handleOnChange}            
          >
            <option value = "4">Easy - 4 letter words</option>
            <option value = "5">Medium - 5 letter words</option>
            <option value = "6">Hard - 6 letter words</option>
          </select><br></br>
          <button className="button" onClick={this.handleOnSubmit}>Start Game</button>
          <button className="button" onClick={this.props.handleSelectedOption}>Close</button>
      </Modal>
    )
  }
}

export default withRouter(AllModal);
