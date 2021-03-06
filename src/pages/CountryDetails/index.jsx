import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

import * as S from './styles';

export const CountryDetails = () => {
  const [country, setCountry] = useState(null);
  const params = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    async function getCountry() {
      const response = await axios.get(
        `https://restcountries.com/v2/alpha/${params.code}`
      );

      setCountry(response.data);
    }

    getCountry();
  }, [params]);
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
              <p className='languages'>
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
                <li key={i}>
                  <Link to={`/country-details/${border}`}>{border}</Link>
                </li>
              ))}
            </ul>
          </S.InfoCountryBorders>
        </S.InfoCountry>
      </S.Content>
    </S.Container>
  );
};
