'use client';

import { useAtom } from 'jotai';
import { charactersAtom } from '@/state/character';
import { ChangeEvent } from 'react';
import { useState } from 'react';
import { Character } from '@/types/data/character';
import { v4 as uuidv4 } from 'uuid';

const CharacterPage = () => {
  const [characters, setCharacters] = useAtom(charactersAtom);
  const [newCharacter, setNewCharacter] = useState<Character>({
    id: uuidv4(),
    name: '',
    description: '',
  });
  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setNewCharacter({
      ...newCharacter,
      [name]: value,
    } as Character);
  };

  const addCharacter = () => {
    const nextCharacters = [...characters, newCharacter];
    setCharacters(nextCharacters);
    setNewCharacter({
      id: uuidv4(),
      name: '',
      description: '',
    });
  };

  return (
    <>
      <input className="border" type="text" name="name" value={newCharacter.name} onChange={handleInput}></input>
      <input
        className="border"
        type="text"
        name="description"
        value={newCharacter.description}
        onChange={handleInput}
      ></input>
      <button onClick={addCharacter} className="bg-pink-500 border px-2 text-white">
        add
      </button>

      <hr className="my-2 border" />

      {characters.map((character) => (
        <ul key={character.id}>
          <li>{character.name}</li>
          <li>{character.description}</li>
        </ul>
      ))}
    </>
  );
};

export default CharacterPage;
