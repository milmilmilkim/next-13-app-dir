'use client';

import { useAtom } from 'jotai';
import { charactersAtom } from '@/state/character';
import { useState } from 'react';
import styled from 'styled-components';

import CharacterForm from '@/components/character/CharacterForm';
const CharacterPage = () => {
  const [characters, setCharacters] = useAtom(charactersAtom);
  const [isShowCharacterForm, setIsShowCharacterForm] = useState(false);
  const toggleNewCharacterForm = () => {
    setIsShowCharacterForm(!isShowCharacterForm);
  };

  return (
    <StyledContainer>
      <button className="nes-btn" onClick={toggleNewCharacterForm}>
        {isShowCharacterForm ? '취소' : '새 캐릭터 추가'}
      </button>
      {isShowCharacterForm && <CharacterForm />}

      <hr className="my-2 border" />

      {characters.map((character) => (
        <ul key={character.id}>
          <li>{character.name}</li>
          <li>{character.description}</li>
        </ul>
      ))}
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  .nes-btn {
    margin-bottom: 15px;
  }
`;
export default CharacterPage;
