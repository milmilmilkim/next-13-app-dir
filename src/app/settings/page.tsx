'use client';

import { useAtom } from 'jotai';
import { storyRequestOptionsAtom } from '@/state/story';

const Settings = () => {
  const [storyRequestOptions, setStoryRequestOptions] = useAtom(storyRequestOptionsAtom);

  const handleRange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(e.currentTarget.value);
    const property = e.currentTarget.name;

    setProperty(property, newValue);
  };

  const setProperty = (propertyName: string, newValue: number | string) => {
    const next = {
      ...storyRequestOptions,
      [propertyName]: newValue,
    };
    setStoryRequestOptions(next);
  };

  const properties = [
    {
      name: 'temperature',
      min: '0',
      max: '1',
      step: '0.01',
    },
    {
      name: 'presencePenalty',
      min: '0',
      max: '2',
      step: '0.01',
    },
    {
      name: 'frequencyPenalty',
      min: '0',
      max: '2',
      step: '0.01',
    },
    {
      name: 'maxTokens',
      min: '0',
      max: '200',
      step: '1',
    },
  ];

  return (
    <div>
      <h1 className="text-lg">settings..</h1>
      <hr className="my-1" />

      <p>gpt 3.5 모델의 설정을 변경합니다. 자세한 내용은 open ai 공식 문서를 참고하세요.</p>

      <br />

      {properties.map((property) => (
        <div key={property.name}>
          <label htmlFor="minmax-range" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            {property.name}
          </label>
          <input
            id="minmax-range"
            type="range"
            name={property.name}
            min={property.min}
            max={property.max}
            value={storyRequestOptions[property.name as keyof typeof storyRequestOptions]}
            step={property.step}
            onChange={handleRange}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
          ></input>
          <span>{storyRequestOptions[property.name as keyof typeof storyRequestOptions]}</span>
        </div>
      ))}
    </div>
  );
};

export default Settings;
