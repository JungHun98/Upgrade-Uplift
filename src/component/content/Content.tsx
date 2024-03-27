import React, {useContext, useEffect, useRef, useState} from 'react';
import OptionImage from '@/component/content/Left/OptionImage';
import OptionInfo from '@/component/content/Right/OptionInfo';
import TotalEstimate from '@/component/content/Totalestimate/TotalEstimate';
import Spinner from '@/component/common/spinner/Spinner';
import SelectedOptionContent from '@/component/content/SelectedOptionContent';

import {OptionContext} from '@/provider/optionProvider';
import {TempOptionContext} from '@/provider/tempOptionProvider';
import {SelectedOptionContext} from '@/provider/selectedOptionProvider';
import {useGuideFlowState} from '@/provider/guideFlowProvider';

import {fetchData} from '@/api/fetchData';
import {postFetchData} from '@/api/postFetchData';

import {Option} from '@/@types/Response';

import S from '@/component/content/Content.styles';

type cardData = {
  id: number;
  name: string;
  imageSrc: string;
  price: number;
  saleRate?: number;
};

type OptionUrls = Record<number, string | string[]>;

const keyMapping: Record<number, string> = {
  0: '파워트레인',
  1: '구동 방식',
  2: '바디 타입',
  3: '외장 색상',
  4: '내장 색상',
  5: '휠',
};

const categoryMapping: Record<number, string> = {
  0: 'car',
  1: 'car',
  2: 'car',
  3: 'color',
  4: 'color',
  5: 'car',
};

interface SelectionRate {
  id: number;
  selectionRatio: number;
}
let selectionRateArr: SelectionRate[][] = [];
export const preventClose = (e: BeforeUnloadEvent) => {
  e.preventDefault();
  e.returnValue = '나갈거임?';
};

function Content() {
  useEffect(() => {
    (() => {
      window.addEventListener('beforeunload', preventClose);
    })();

    return () => {
      window.removeEventListener('beforeunload', preventClose);
    };
  }, []);
  const [cardDataList, setCardDataList] = useState<cardData[][]>([]);
  const [additionalOptionList, setAddOptionList] = useState<cardData[][]>([]);
  const [selectedIndex, setIndex] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const {option} = useContext(OptionContext);
  const optionRef = useRef<number>(option);
  const {selectedOptions} = useContext(SelectedOptionContext);
  const {showGuide, dataObject} = useGuideFlowState();
  const {setTempOption} = useContext(TempOptionContext);

  let propsIndex: number = 0;

  const updateTempOption = (index: number) => {
    if (option !== 6) {
      const selectedCardData = cardDataList[option][index];
      if (selectedCardData) {
        const tempOpt: Option = {
          key: keyMapping[option],
          value: selectedCardData.name,
          category: categoryMapping[option],
          price: selectedCardData.price,
          id: selectedCardData.id,
          imgSrc: selectedCardData.imageSrc,
          userSelect: false,
        };
        setTempOption(tempOpt);
      }
    }
  };
  const setNewIndex = (nextIndex: number) => {
    updateTempOption(nextIndex);
    setIndex(nextIndex);
  };
  const urlEndpoint: OptionUrls = {
    0: '/info/powertrain',
    1: '/info/driving-system',
    2: '/info/bodytype',
    3: '/info/exterior-color',
    4: '/info/interior-color',
    5: '/info/wheel',
    6: [
      '/info/additional-option?category=system',
      '/info/additional-option?category=temperature',
      '/info/additional-option?category=outer_device',
      '/info/additional-option?category=inner_device',
    ],
    7: '',
  };
  const sortBySelectionRate = (
    array: cardData[],
    index: number,
    selectArr: SelectionRate[][],
  ) => {
    const sortedCardDataArray: cardData[] = array.map((card) => {
      const rateData = selectArr[index].find(
        (rate: {id: number; selectionRatio: number}) => rate.id === card.id,
      );

      let reulstData: cardData = {
        id: 0,
        name: '',
        imageSrc: '',
        price: 0,
        saleRate: 0,
      };

      if (rateData) {
        reulstData = {...card, saleRate: rateData.selectionRatio};
        return reulstData;
      } else {
        return {...card, saleRate: 0};
      }
    });

    sortedCardDataArray.sort(
      (a: cardData, b: cardData) => (b.saleRate || 0) - (a.saleRate || 0),
    );

    return sortedCardDataArray;
  };

  useEffect(() => {
    const fetchAllData = async () => {
      const results = await Promise.all(
        Object.values(urlEndpoint).map(async (endpoint) => {
          if (typeof endpoint === 'string' && endpoint) {
            return fetchData(endpoint);
          } else if (Array.isArray(endpoint)) {
            return Promise.all(endpoint.map(fetchData));
          }
        }),
      );

      if (showGuide && dataObject.options) {
        const requestBody = {
          age: dataObject.age,
          gender: dataObject.gender,
          tag1: dataObject.options[0],
          tag2: dataObject.options[1],
          tag3: dataObject.options[2],
        };

        const endpoints = [
          '/sale/powertrain/tag',
          '/sale/driving-system/tag',
          '/sale/bodytype/tag',
          '/sale/exterior-color/tag',
          '/sale/interior-color/tag',
          '/sale/wheel/tag',
          '/sale/additional-option/tag',
        ];

        selectionRateArr = await Promise.all(
          endpoints.map(async (url: string) => {
            return postFetchData(url, requestBody);
          }),
        );

        const sortCardArr = results
          .slice(0, 6)
          .map((card, index) =>
            sortBySelectionRate(card, index, selectionRateArr.slice(0, 6)),
          );
        setCardDataList(sortCardArr);

        const newAdditionalOptionList = results[6] as cardData[][];
        setAddOptionList(newAdditionalOptionList);
      } else {
        const newCardDataList = results.slice(0, 6) as cardData[][];
        const newAdditionalOptionList = results[6] as cardData[][];

        setCardDataList(newCardDataList);
        setAddOptionList(newAdditionalOptionList);
      }
      setIsLoading(true);
    };

    fetchAllData();
  }, []);

  if (optionRef.current !== option && option < 6) {
    const currentKey = keyMapping[option];
    const foundOption = selectedOptions.find((opt) => opt.key === currentKey);
    const targetIndex = cardDataList[option].findIndex(
      (card) => card.id === foundOption?.id,
    );
    propsIndex = targetIndex;
    optionRef.current = option;
  } else {
    propsIndex = selectedIndex;
  }

  return (
    <S.Wrapper>
      {!isLoading && <Spinner />}
      <S.Container $option={option}>
        {option < 7 ? (
          <>
            {option !== 6 ? (
              <>
                <OptionImage
                  key={option}
                  cardData={cardDataList[option]}
                  selectedIndex={propsIndex}
                />
                <OptionInfo
                  cardData={cardDataList[option]}
                  setNewIndex={(index: number) => setNewIndex(index)}
                  selectedIndex={propsIndex}
                />
              </>
            ) : (
              <SelectedOptionContent
                selectedOptionData={additionalOptionList}
                setNewIndex={(index: number) => setNewIndex(index)}
                selectedIndex={selectedIndex}
              />
            )}
          </>
        ) : (
          <TotalEstimate></TotalEstimate>
        )}
      </S.Container>
    </S.Wrapper>
  );
}

export default Content;
