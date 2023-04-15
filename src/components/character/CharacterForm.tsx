import React from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import { Character } from '@/types/data/character';
import { useState, useEffect } from 'react';
import { charactersAtom } from '@/state/character';
import { useAtom } from 'jotai';
const CharacterForm = () => {
  const [characters, setCharacters] = useAtom(charactersAtom);
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;

    const newCharacter: Character = {
      id: uuidv4(),
      name: form.characterName.value,
      description: form.description.value,
      age: form.age.value,
      gender: form.gender.value,
      job: form.job.value,
      personality: form.personality.value,
      appearance: form.appearance.value,
      sampleDialogue: form.sampleDialogue.value,
      relationship: form.relationship.value,
      sexuality: form.sexuality.value,
      race: form.race.value,
      nationality: form.nationality.value,
    };

    const newCharacters = characters;
    newCharacters.push(newCharacter);

    setCharacters(newCharacters);
  };
  return (
    <StyledForm className="nes-container with-title" onSubmit={onSubmit}>
      <p className="title" style={{ fontSize: '20px' }}>
        캐릭터 프로필 입력
      </p>

      <div className="nes-field">
        <label>
          이름<span className="nes-text is-error">*</span>{' '}
        </label>
        <input type="text" name="characterName" className="nes-input" placeholder="출력된 언어와 일치하는 언어 추천" />
      </div>
      <div className="nes-field">
        <label>나이 </label>
        <input min={0} type="number" name="age" className="nes-input" placeholder="나이를 숫자로 입력" />
        <label>
          <input type="checkbox" name="11" className="nes-checkbox"></input> <span>모름</span>
        </label>
      </div>

      <div className="nes-field">
        <label>성별</label>
        <div className="nes-select">
          <select name="gender">
            <option value="female">여</option>
            <option value="male">남</option>
            <option value="unknown">모름</option>
            <option value="etc">기타 (직접 입력)</option>
          </select>
        </div>
        <input type="text" maxLength={10} name="gender-text" className="nes-input" placeholder="직접 입력하세요" />
      </div>

      <div className="nes-field">
        <label>
          상세 설명 <span className="nes-text is-error">*</span>
        </label>
        <textarea
          name="description"
          className="nes-textarea is-success"
          placeholder="자세한 설명은 여기에, 긴 내용은 영어 추천"
          maxLength={300}
        ></textarea>
      </div>

      <div className="nes-field">
        <label>말투 </label>
        <input type="text" maxLength={100} name="sampleDialogue" className="nes-input" placeholder="샘플 대사 입력" />
      </div>

      <div className="nes-text">
        추가 옵션 보기
        <label>
          <input type="checkbox" name="extraOption" className="nes-checkbox"></input> <span> </span>
        </label>
      </div>

      <div className="nes-container">
        <div className="nes-field">
          <label>직업 </label>
          <input type="text" maxLength={10} name="job" className="nes-input" placeholder="직업" />
        </div>

        <div className="nes-field">
          <label>국적 </label>
          <input type="text" maxLength={10} name="nationality" className="nes-input" placeholder="국적" />
        </div>

        <div className="nes-field">
          <label>외모 </label>
          <input
            maxLength={100}
            type="text"
            name="appearance"
            className="nes-input"
            placeholder="여러 항목은 '/'로 구분"
          />
        </div>

        <div className="nes-field">
          <label>성격 </label>
          <input
            maxLength={100}
            type="text"
            name="personality"
            className="nes-input"
            placeholder="캐릭터의 상세 성격"
          />
        </div>

        <div className="nes-field">
          <label>관계 </label>
          <input
            maxLength={100}
            type="text"
            name="relationship"
            className="nes-input"
            placeholder="다른 캐릭터와의 관계 등"
          />
        </div>

        <div className="nes-field">
          <label>성적 지향</label>
          <input maxLength={10} type="text" name="sexuality" className="nes-input" placeholder="성적 지향 등" />
        </div>

        <div className="nes-field">
          <label>종족</label>
          <input type="text" maxLength={20} name="race" className="nes-input" placeholder="인간" />
        </div>
      </div>

      <div className="nes-text">
        커스텀 옵션 추가
        <label>
          <input type="checkbox" name="customOptions" className="nes-checkbox"></input> <span> </span>
        </label>
      </div>

      <div className="nes-container">
        <div className="nes-field">
          <div className="custom-container">
            <input
              style={{ width: '15%' }}
              maxLength={20}
              type="key"
              name="name"
              className="nes-input"
              placeholder="key"
            />
            <input maxLength={100} type="value" name="name" className="nes-input" placeholder="value" />
          </div>
          <div style={{ width: '100%', textAlign: 'right' }}>삭제</div>
        </div>
        <button type="submit" className="nes-btn">
          추가
        </button>
      </div>

      <button className="nes-btn is-primary">저장</button>
      <button className="nes-btn">취소</button>

      <div className="lists">
        <ul className="nes-list is-disc">
          <li>모든 데이터는 브라우저 로컬스토리지에 저장됩니다.</li>
        </ul>
      </div>
    </StyledForm>
  );
};

const StyledForm = styled.form`
  div.nes-field,
  div.nes-container {
    margin-bottom: 15px;
  }

  button {
    margin-right: 10px;
  }

  .lists {
    margin: 10px 0 0 20px;
  }

  .custom-container {
    display: flex;
    justify-content: space-between;
  }
`;
export default CharacterForm;
