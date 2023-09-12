import React from 'react';
import { useTranslation } from 'react-i18next';
import './App.css';

function App() {

  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className="App">
      <h1>{t('welcome')}</h1>
      <button onClick={() => i18n.changeLanguage('en')}>English</button>
      <button onClick={() => i18n.changeLanguage('ha')}>Hausa</button>
      <button onClick={() => i18n.changeLanguage('fr')}>Français</button>
    </div>
  );
}

export default App;