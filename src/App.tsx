import './styles/styles.scss';

import React, { useState } from 'react';
import FormView from 'views/Form';
import OptionsView from 'views/Options';

function App() {
  const [currentView, setCurrentView] = useState('options');
  const [selectedOption, setSelectedOption] = useState(null);

  const viewHandler = (view: string) => setCurrentView(view);
  const renderView = () => {
    if (currentView === 'options')
      return (
        <OptionsView
          viewHandler={viewHandler}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
        />
      );
    if (currentView === 'form')
      return (
        <FormView
          viewHandler={viewHandler}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
        />
      );
  };

  return (
    <div className="container">
      <div className="menu">{renderView()}</div>
    </div>
  );
}

export default App;
