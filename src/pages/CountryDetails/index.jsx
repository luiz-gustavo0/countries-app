import React, { useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react/cjs/react.development';

import * as S from './styles';

export const CountryDetails = () => {
  const { code } = useParams();
  const [country, setCountry] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    async function getCountry() {
      const response = await axios.get(
        `https://restcountries.com/v2/alpha/${code}`
      );

      setCountry(response.data);
    }

    getCountry();
  }, [code]);
  console.log(country);
  return (
    <S.Container>
      <button
        onClick={() => {
          navigate('/', { replace: true });
        }}
      >
        <span>&#8592;</span> Back
      </button>
      <S.Content>
        <S.WrapperImg>
          <img src={country?.flag} alt={`Bandeira ${country?.name}`} />
        </S.WrapperImg>
        <S.InfoCountry>
          <h2>{country?.name}</h2>
          <S.InfoCountryText>
            <div>
              <p>
                <strong>Native Name: </strong>
                {country?.nativeName}
              </p>
              <p>
                <strong>População: </strong>
                {new Intl.NumberFormat().format(country?.population)}
              </p>
              <p>
                <strong>Region: </strong>
                {country?.region}
              </p>
              <p>
                <strong>Sub Region: </strong>
                {country?.subregion}
              </p>
              <p>
                <strong>Capital: </strong>
                {country?.capital}
              </p>
            </div>
            <div>
              <p>
                <strong>Top Level Domain: </strong>
                {country?.topLevelDomain.map((domain, i) => (
                  <span key={i}>{domain}</span>
                ))}
              </p>
              <p>
                <strong>Currencies: </strong>
                {country?.currencies.map((currency, i) => (
                  <span key={i}>{currency?.name}</span>
                ))}
              </p>
              <p>
                <strong>Languages: </strong>
                {country?.languages.map((language, i) => (
                  <span key={i}>{language?.name},</span>
                ))}
              </p>
            </div>
          </S.InfoCountryText>
          <S.InfoCountryBorders>
            <h6>Border Countries:</h6>
            <ul>
              {country?.borders?.map((border, i) => (
                <li key={i}>{border}</li>
              ))}
            </ul>
          </S.InfoCountryBorders>
        </S.InfoCountry>
      </S.Content>
    </S.Container>
  );
};
