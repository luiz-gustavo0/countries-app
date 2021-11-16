import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { ReactComponent as IconLupa } from '../../img/search.svg';
import * as S from './styles';
import { Card } from '../../components/Card';

export const Home = () => {
  const [coutries, setCoutries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [region, setRegion] = useState('');

  useEffect(() => {
    async function getCountries() {
      setLoading(true);
      const response = await axios.get('https://restcountries.com/v2/all');
      setCoutries(response.data);
      setLoading(false);
    }
    getCountries();
  }, []);

  const results =
    !searchTerm && region === 'All'
      ? coutries
      : coutries.filter(
          (country) =>
            country.name.toString().toLowerCase().includes(searchTerm.trim()) &&
            country.region.includes(region)
        );

  if (loading) return <p>Carregando...</p>;
  return (
    <S.Container>
      <S.FilterContainer>
        <S.Search>
          <button>
            <IconLupa />
          </button>
          <input
            type='text'
            placeholder='Search for a country...'
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
        </S.Search>
        <select
          value={region}
          onChange={(event) => setRegion(event.target.value)}
        >
          <option value='All'>Filter by region</option>
          <option value='Africa'>Africa</option>
          <option value='America'>America</option>
          <option value='Asia'>Asia</option>
          <option value='Europe'>Europe</option>
          <option value='Oceania'>Oceania</option>
        </select>
      </S.FilterContainer>
      <S.CardContainer>
        {results?.map((country) => (
          <Card country={country} key={country.name} />
        ))}
      </S.CardContainer>
    </S.Container>
  );
};
