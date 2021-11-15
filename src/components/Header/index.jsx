import React from 'react';

import iconDarkMode from '../../img/brightness_low.svg';
import iconLightMode from '../../img/brightness_3.svg';

import * as S from './styles';

export const Header = ({ toggleTheme, isDarkMode }) => {
  return (
    <S.Container>
      <S.Content>
        <span>
          <strong> Where in the world?</strong>
        </span>

        <S.ContainerButton>
          {isDarkMode ? (
            <button onClick={toggleTheme}>
              <img src={iconDarkMode} alt='Icone de um sol' />
              Light Mode
            </button>
          ) : (
            <button onClick={toggleTheme}>
              <img src={iconLightMode} alt='Icone de uma lua' />
              Dark Mode
            </button>
          )}
        </S.ContainerButton>
      </S.Content>
    </S.Container>
  );
};
