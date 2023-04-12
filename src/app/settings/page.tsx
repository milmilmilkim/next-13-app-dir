'use client';

import { useAtom } from 'jotai';
import { storyRequestAtom } from '@/state/story';

const Settings = () => {
  const [storyRequest, setStoryRequest] = useAtom(storyRequestAtom);

  const handleRange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(e.currentTarget.value);
    const property = e.currentTarget.name;

    setProperty(property, newValue);
  };

  const setProperty = (propertyName: string, newValue: number | string) => {
    const next = {
      ...storyRequest,
      options: {
        ...storyRequest.options,
        [propertyName]: newValue,
      },
    };
    setStoryRequest(next);
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
            value={storyRequest.options[property.name as keyof typeof storyRequest.options]}
            step={property.step}
            onChange={handleRange}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
          ></input>
          <span>{storyRequest.options[property.name as keyof typeof storyRequest.options]}</span>
        </div>
      ))}
    </div>
  );
};

export default Settings;
