import React, { useState, createContext } from 'react';
import { Option } from '@/@types/Response';

interface SelectedOptionContextType {
  selectedOptions: Option[];
  addOption: (option: Option) => void;
}

const initialOptions: Option[] = [
  {
    key: '파워트레인',
    value: '디젤 2.2',
    category: 'car',
    price: 1480000,
    id: 0,
    imgSrc:
      'https://drive.google.com/uc?id=1MJzeVrcfijHK35sK0Ks4ej-CAfonILC6',
    userSelect: false,
  },
  {
    key: '구동 방식',
    value: '2WD',
    category: 'car',
    price: 0,
    id: 0,
    imgSrc:
      'https://drive.google.com/uc?id=1OaNNRpEr5HX7XjZ-9mverxdG-oX1ulBM',
    userSelect: false,
  },
  {
    key: '바디 타입',
    value: '7인승',
    category: 'car',
    price: 0,
    id: 0,
    imgSrc: 'https://drive.google.com/uc?id=1jo56bmgaRARUyiLoFoRUoMe8JipWNXaQ',
    userSelect: false,
  },
  {
    key: '외장 색상',
    value: '어비스 블랙펄',
    category: 'color',
    price: 0,
    id: 0,
    imgSrc:
      'https://drive.google.com/uc?id=1ZSeoqFhTy6fBMLBel7QtNJbGNM4D0xcZ',
    userSelect: false,
  },
  {
    key: '내장 색상',
    value: '퀼팅천연(블랙)',
    category: 'color',
    price: 0,
    id: 0,
    imgSrc:
      'https://drive.google.com/uc?id=1kJdy3kwL4WbLOFwZRHkYP1f21sedVPFP',
    userSelect: false,
  },
  {
    key: '휠',
    value: '20인치 알로이 휠 & 타이어',
    category: 'car',
    price: 0,
    id: 0,
    imgSrc:
      'https://drive.google.com/uc?id=1fledlcc2BT0O5br7KT2b8oqIhkaUaIL6',
    userSelect: false,
  },
];

const defaultContextValue: SelectedOptionContextType = {
  selectedOptions: initialOptions,
  addOption: () => {},
};

export const SelectedOptionContext =
  createContext<SelectedOptionContextType>(defaultContextValue);

interface SelectedOptionProviderProps {
  children: React.ReactNode;
}

const SelectedOptionProvider = ({children}: SelectedOptionProviderProps) => {
  const [selectedOptionsState, setSelectedOptionsState] =
    useState<Option[]>(initialOptions);
  const order = [
    '파워트레인',
    '구동 방식',
    '바디 타입',
    '외장 색상',
    '내장 색상',
    '휠',
  ];

  const addOption = (newOption: Option) => {
    setSelectedOptionsState((prevOptions) => {
      // 기존 배열에서 동일한 key를 가진 아이템 제거
      const filteredOptions = prevOptions.filter(
        (opt) => opt.key !== newOption.key,
      );
      // 새로운 아이템 추가
      const sortedOptions = [...filteredOptions, newOption].sort((a, b) => {
        return order.indexOf(a.key) - order.indexOf(b.key);
      });

      return sortedOptions;
    });
  };

  const contextValue = {
    selectedOptions: selectedOptionsState,
    addOption,
  };

  return (
    <SelectedOptionContext.Provider value={contextValue}>
      {children}
    </SelectedOptionContext.Provider>
  );
};

export default SelectedOptionProvider;

// const { selectedOptions, addOption } = useContext(SelectedOptionContext);
