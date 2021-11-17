import React from 'react';
import { useNavigate } from 'react-router';
import * as S from './styles';

export const Card = ({ country }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/country-details/${country.alpha3Code}`);
  };

  return (
    <S.Card>
      <img
        onClick={handleClick}
        src={country.flag}
        alt={`Bandeira ${country.name}`}
      />
      <div>
        <h4>{country.name}</h4>
        <p>
          <span>Population: </span>
          {new Intl.NumberFormat().format(country.population)}
        </p>
        <p>
          <span>Region: </span>
          {country.region}
        </p>
        <p>
          <span>Capital: </span>
          {country.capital}
        </p>
      </div>
    </S.Card>
  );
};
