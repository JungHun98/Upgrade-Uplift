import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';

import OptionCardList from '../OptionCardList/OptionCardList';
import Modal from '../Right/Optioninfo/Modal';
import Footer from '../Footer/Footer';

import CardbModal from '@/component/common/cardbModal/CardbModal';

import {cardDataType} from '../contentInterface';
import {OptionContext} from '@/provider/optionProvider';
import {textParse} from '@/util/textParse';

import S from './OptionInfo.styles';

interface cardDataProps {
  cardData: cardDataType[];
  setNewIndex: (index: number) => void;
  selectedIndex: number;
}

function OptionInfo({cardData, setNewIndex, selectedIndex}: cardDataProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const {option} = useContext(OptionContext);
  const menuItems = [
    '<cardb>파워트레인</cardb>',
    '<cardb>구동방식</cardb>',
    '바디 타입',
    '외장 색상',
    '내장 색상',
    '휠',
    '옵션',
  ];

  const modalRef = useRef<HTMLDivElement>(null);
  const handleModalView = useCallback(() => {
    setIsModalOpen((prev) => !prev);
  }, []);

  useEffect(() => {
    setIsSaved(false);
  }, [option]);

  return (
    <S.Wrapper>
      <S.Container>
        <S.OptionTitle>{textParse(menuItems[option])}</S.OptionTitle>
        <S.Text>을 선택해주세요.</S.Text>
        <OptionCardList
          cardData={cardData}
          isSaved={isSaved}
          setNewIndex={setNewIndex}
          selectedIndex={selectedIndex}
        ></OptionCardList>
        <S.ModalWrapper ref={modalRef} $isopen={isModalOpen.toString()}>
          <Modal onClick={handleModalView}></Modal>
        </S.ModalWrapper>
        <Footer
          onClick={handleModalView}
          setIsSaved={setIsSaved}
          isOpen={isModalOpen}
        ></Footer>
        <CardbModal></CardbModal>
      </S.Container>
    </S.Wrapper>
  );
}

export default OptionInfo;
