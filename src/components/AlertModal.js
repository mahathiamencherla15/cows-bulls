import React from 'react';
import Modal from 'react-modal';

class AlertModal extends React.Component {
  constructor(props) {
    super(props)    
  }  

  render(){     
    return(
      <Modal
      isOpen={!!this.props.alert}
      onRequestClose={this.props.closeAlert}
      contentLabel="Teams"
      closeTimeoutMS={200}
      backdropOpacity={1}      
      ariaHideApp={false}
      className="modal">
          <h2 className="modal__title">Uh-Oh!</h2>                   
          <p>{this.props.alert}</p>
          <br></br>
          <button className="button" onClick={this.props.closeAlert}>Okay</button>
      </Modal>
    )
  }
}

export default AlertModal;
