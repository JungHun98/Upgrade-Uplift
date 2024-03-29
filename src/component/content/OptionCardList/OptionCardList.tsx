import React, {useEffect, useContext, useRef, useState} from 'react';

import OptionCard from '../OptionCard/OptionCard';
import {cardDataType} from '../contentInterface';

import {OptionContext} from '@/provider/optionProvider';

import {fetchData} from '@/api/fetchData';

import {getCategory} from '@//util/getCategory';

import S from './OptionCardList.styles';

interface cardListProps {
  cardData: cardDataType[];
  isSaved: boolean;
  setNewIndex: (index: number) => void;
  selectedIndex: number;
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
interface SelectionRatioProps {
  id: number;
  selectionRatio: number;
}
function OptionCardList({
  cardData,
  setNewIndex,
  isSaved,
  selectedIndex,
}: cardListProps) {
  const {option} = useContext(OptionContext);
  const ulRef = useRef<HTMLUListElement>(null);
  const [ratioList, setRatioList] = useState<SelectionRatioProps[]>([]);

  const handleItemClick = (index: number) => {
    if (selectedIndex === index) return;
    setNewIndex(index);
  };

  useEffect(() => {
    if (cardData) scrollIntoSelected(ulRef, selectedIndex);
  }, [selectedIndex, cardData]);
  const categoryName = getCategory(option);
  useEffect(() => {
    const fetchRateList = async () => {
      const getRatioList = await fetchData(`/sale/${categoryName}/select`);
      setRatioList(getRatioList);
    };
    fetchRateList();
  }, [cardData]);

  const cards: React.JSX.Element[] =
    cardData &&
    cardData.map((elem, index) => (
      <OptionCard
        key={index}
        selected={selectedIndex === index}
        isSaved={isSaved}
        onClick={() => {
          handleItemClick(index);
        }}
        data={elem}
        ratioList={ratioList}
      />
    ));

  return (
    <>
      <S.Wrapper key={option}>
        <S.Container ref={ulRef}>{cards}</S.Container>
      </S.Wrapper>
    </>
  );
}

export default OptionCardList;
