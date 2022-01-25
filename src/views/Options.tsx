import React, { useEffect, useState } from 'react';

import Loading from '../components/Loading';
import Option from '../components/Option';
import { options } from '../data/options.js';

function OptionsView({ viewHandler, selectedOption, setSelectedOption }: any) {
  const [loading, setLoading] = useState(true);
  const renderOptions = () =>
    options.map((option: any) => (
      <Option
        option={option}
        selected={selectedOption && selectedOption.id === option.id ? true : false}
        setSelectedOption={setSelectedOption}
        key={option.id}
      />
    ));
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <h2 className="text title menu__title">Select an option</h2>
          <ul className="grid entrance">{renderOptions()}</ul>
          <button
            className="button button--primary menu__button"
            type="button"
            onClick={() => viewHandler('form')}
            disabled={selectedOption === null && true}>
            Continue
          </button>
        </>
      )}
    </>
  );
}

export default OptionsView;
