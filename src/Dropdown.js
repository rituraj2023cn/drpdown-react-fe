import React, { useState } from 'react';

const Dropdown = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (item) => {
    setIsOpen(false);
    // Here, you can perform any action based on the selected item.
    console.log('Selected:', item);
  };

  return (
    <div className="dropdown">
      <button className="dropdown-button" onClick={handleButtonClick}>
        Select
      </button>
      {isOpen && (
        <ul className="dropdown-list">
          {items.map((item, index) => (
            <li key={index} onClick={() => handleOptionClick(item)}>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
