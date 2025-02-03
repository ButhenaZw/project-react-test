import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './hero.css';

function Hero() {
  const { t, i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  const changeLanguage = (lang) => {
    setSelectedLanguage(lang);
    i18n.changeLanguage(lang);
  };

  return (
    <>
      <div>
        <nav
          style={{
            backgroundColor: 'white',
            height: '80px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 50px',
            direction: selectedLanguage === 'ar' ? 'rtl' : 'ltr',
          }}
        >
          <div>
            <img
              style={{ width: '100px' }}
              src="https://i.imgur.com/EC9WLYR.png"
              alt="Logo"
            />
          </div>

          <div
            style={{
              fontSize: '18px',
              color: 'black',
              display: 'flex',
              gap: '30px',
              textAlign: selectedLanguage === 'ar' ? 'right' : 'left', 
            }}
          >
                       <a
              href="#"
              style={{ color: 'black', textDecoration: 'none' }}
              onMouseEnter={(e) => (e.target.style.color = 'orange')}
              onMouseLeave={(e) => (e.target.style.color = 'black')}
            >
              {t('home')}
            </a>
            <a
              href="#"
              style={{ color: 'black', textDecoration: 'none' }}
              onMouseEnter={(e) => (e.target.style.color = 'orange')}
              onMouseLeave={(e) => (e.target.style.color = 'black')}
            >
              {t('about')}
            </a>
            <a
              href="#"
              style={{ color: 'black', textDecoration: 'none' }}
              onMouseEnter={(e) => (e.target.style.color = 'orange')}
              onMouseLeave={(e) => (e.target.style.color = 'black')}
            >
              {t('example')}
            </a>
            <a
              href=""
              style={{ color: 'black', textDecoration: 'none' }}
              onMouseEnter={(e) => (e.target.style.color = 'orange')}
              onMouseLeave={(e) => (e.target.style.color = 'black')}
            >
              {t('Service')}
            </a>
            <a
              href="#"
              style={{ color: 'black', textDecoration: 'none' }}
              onMouseEnter={(e) => (e.target.style.color = 'orange')}
              onMouseLeave={(e) => (e.target.style.color = 'black')}
            >
              {t('teams')}
            </a>
          </div>

          <select
            value={selectedLanguage}
            onChange={(e) => changeLanguage(e.target.value)}
            style={{
              fontSize: '16px',
              color: 'white',
              backgroundColor: 'orange',
              border: 'none',
              padding: '8px 12px',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            <option value="en" style={{ color: 'black' }}>
              En
            </option>
            <option value="ar" style={{ color: 'black' }}>
            AR
            </option>
          </select>
        </nav>
      </div>

      <div
        className="container-heros"
        style={{
          width: '100%',
          height: '480px',
          textAlign: selectedLanguage === 'ar' ? 'right' : 'left', // Align text
          direction: selectedLanguage === 'ar' ? 'rtl' : 'ltr', // RTL for Arabic
        }}
      >
        <h1 className="h222">{t('aboutUsHeader')}</h1>
        <div
          className="container-heros2"
          style={{
            width: '100%',
            height: '480px',
          }}
        ></div>
      </div>
    </>
  );
}

export default Hero;
