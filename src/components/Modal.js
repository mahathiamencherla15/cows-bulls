import React from 'react';
import Modal from 'react-modal';

const AllModal = (props) => (
    <Modal
    isOpen={!!props.selectedOption}
    onRequestClose={props.handleSelectedOption}
    contentLabel="Teams"
    closeTimeoutMS={200}
    ariaHideApp={false}
    className="modal">
        <h2 className="modal__title">{props.selectedOption}</h2>
        <select>
          <option>Easy - 4 words</option>
          <option>Medium - 5 words</option>
          <option>Hard - 6 words</option>
        </select><br></br>
        <button className="button">Start Game</button>
        <button className="button" onClick={props.handleSelectedOption}>Close</button>
    </Modal>
)

export default AllModal;