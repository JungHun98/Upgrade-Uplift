import React, {useEffect, useContext, useRef, useState} from 'react';

import OptionCard from '../OptionCard/OptionCard';
import {cardDataType} from '../contentInterface';

import {OptionContext} from '@/provider/optionProvider';
import {TempAdditionalOptionsContext} from '@/provider/tempAdditionalOptionProvider';

import {fetchData} from '@/api/fetchData';

import {getCategory} from '@//util/getCategory';

import S from './SelectedOptionCardList.styles';

interface cardListProps {
  cardData: cardDataType[];
  isSaved: boolean;
  setNewIndex: (index: number) => void;
  selectedIndex: number;
  categoryIdx: number;
}

interface SelectionRatioProps {
  id: number;
  selectionRatio: number;
}

const scrollIntoSelected = (
  elem: React.RefObject<HTMLUListElement>,
  index: number,
) => {
  const scrollBlock: ScrollIntoViewOptions = {
    behavior: 'smooth',
    block: 'center',
  };
  if (elem && elem.current && elem.current.childNodes[index]) {
    const scrollItem = elem.current.childNodes[index] as HTMLElement;

    if (elem.current.lastChild === scrollItem) {
      scrollBlock.block = 'end';
    }
    scrollItem.scrollIntoView(scrollBlock);
  }
};

function SelectedOptionCardList({
  cardData,
  setNewIndex,
  isSaved,
  selectedIndex,
  categoryIdx,
}: cardListProps) {
  const {option} = useContext(OptionContext);
  const {additionOptions, setAdditionalOptions, removeOption} = useContext(
    TempAdditionalOptionsContext,
  );

  const [ratioList, setRatioList] = useState<SelectionRatioProps[]>([]);
  const ulRef = useRef<HTMLUListElement>(null);

  const handleItemClick = (index: number) => {
    const clickedItem = cardData[index];
    const isItemIncluded = additionOptions.some(
      (item) => item.id === clickedItem.id,
    );
    if (isItemIncluded) {
      removeOption(clickedItem.id);
    } else {
      setAdditionalOptions([...additionOptions, clickedItem]);
    }
    setNewIndex(index);
  };
  const categoryName = getCategory(option);
  useEffect(() => {
    if (cardData) scrollIntoSelected(ulRef, selectedIndex);
  }, [selectedIndex, cardData]);
  useEffect(() => {
    const fetchRateList = async () => {
      const categoryMap: Record<number, string> = {
        0: 'system',
        1: 'temperature',
        2: 'outer_device',
        3: 'inner_device',
      };
      const queryCategory = categoryMap[categoryIdx] || 'system';
      const endpoint = `/sale/${categoryName}/select?category=${queryCategory}`;

      const getRatioList = await fetchData(endpoint);
      setRatioList(getRatioList);
    };
    fetchRateList();
  }, [cardData, categoryIdx]);
  const cards: React.JSX.Element[] =
    cardData &&
    cardData.map((elem, index) => (
      <OptionCard
        key={index}
        selected={
          additionOptions.find((element) => elem.id === element.id) !==
          undefined
        }
        isSaved={isSaved}
        onClick={() => handleItemClick(index)}
        data={elem}
        ratioList={ratioList}
      />
    ));

  return (
    <S.Wrapper key={option}>
      <S.Container ref={ulRef}>{cards}</S.Container>
    </S.Wrapper>
  );
}

export default SelectedOptionCardList;
