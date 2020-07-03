import React from 'react';
import Modal from 'react-modal';

const CompModal = (props) => (
    <Modal
    isOpen={!!props.selectedOption}
    onRequestClose={props.handleSelectedOption}
    contentLabel="Teams"
    closeTimeoutMS={200}
    ariaHideApp={false}
    className="modal">
        <h3 className="modal__title">Computer</h3>
        {/* {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>} */}
        <select>
          <option>Easy - 4 words</option>
          <option>Medium - 5 words</option>
          <option>Hard - 6 words</option>
        </select>
        <button className="button" onClick={props.handleSelectedOption}>Start Game</button>
    </Modal>
)

export default CompModal;