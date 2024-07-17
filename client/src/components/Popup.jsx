import React from 'react';
import { ImCross } from 'react-icons/im';

const Popup = ({ message, onConfirm, onCancel }) => {
  return (
    <div className="popup-container">
      <div className="popup delete-popup">
        <ImCross onClick={onCancel} className="cross" />
        <h1 className="title">Are you sure?</h1>
        <p className="message">{message}</p>
        <div className="buttons">
          <button className="cancelBtn" onClick={onCancel}>
            Cancel
          </button>
          <button onClick={onConfirm} className="deleteBtn">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
