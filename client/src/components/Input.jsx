import React from "react";

const TextInput = ({ placeholder, button }) => {
  return (
    <div className="input-field">
      <input className="text-input" type="text" placeholder={placeholder} />
      <button className="submit-btn">{button}</button>
    </div>
  );
};

export default TextInput;
