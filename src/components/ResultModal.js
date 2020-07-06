import React, { Component } from 'react';
import Modal from 'react-modal';
import { withRouter } from 'react-router-dom';

class ResultModal extends React.Component {
  constructor(props) {
    super(props)    
  }

  //
  //home handle
  //New game
  //Retry only for loss clear all states except answer

  goHome = (e) => {    
    this.props.history.push(`/`)
  }

  playAgain = (e) => {    
    window.location.reload(); 
  }  

  render(){ 
    
    return(
      <Modal
      isOpen={!!this.props.result}
      onRequestClose={this.props.retry}
      contentLabel="Teams"
      closeTimeoutMS={200}
      backdropOpacity={1}
      ariaHideApp={false}
      className="modal">
          <h2 className="modal__title">{this.props.title}</h2>
          <p>{this.props.message}</p>
          <br></br>
          <button className="button" onClick={this.goHome}>Home</button>
          <button className="button" onClick={this.playAgain}>Play Again</button>
          {!!this.props.retryButton && <button className="button" onClick={this.props.retry}>Retry</button>}
      </Modal>
    )
  }
}

export default withRouter(ResultModal);
