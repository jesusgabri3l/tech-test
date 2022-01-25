/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';

import avianca from '../avianca.png';

function Option({ option, setSelectedOption, selected }: any) {
  const handleClick = () => setSelectedOption(option);
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <li className={`option ${selected ? 'selected' : ''}`} onClick={() => handleClick()}>
      <img src={avianca} alt="logo" className="option__logo" />
      <div className="option__description">
        <h3 className="text title option__description__title">{option.name}</h3>
        {option.discount && (
          <span className="option__description__discount">- {option.discount}%</span>
        )}
        <p className="text option__description__description">{option.description}</p>
      </div>
    </li>
  );
}

export default Option;
