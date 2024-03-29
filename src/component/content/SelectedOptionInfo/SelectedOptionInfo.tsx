import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';

import Modal from '../Right/Optioninfo/Modal';
import Footer from '../Footer/Footer';
import SelectedOptionCardList from '../SelectedOptionCardList/SelectedOptionCardList';

import {cardDataType} from '../contentInterface';

import {OptionContext} from '@/provider/optionProvider';
import CardbModal from '@/component/common/cardbModal/CardbModal';

import S from './SelectedOptionInfo.styles';
interface cardDataProps {
  cardData: cardDataType[];
  setNewIndex: (index: number) => void;
  selectedIndex: number;
  setCategory: (index: number) => void;
  selectedCategory: number;
}

function SelectedOptionInfo({
  cardData,
  setNewIndex,
  selectedIndex,
  setCategory,
  selectedCategory,
}: cardDataProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const {option} = useContext(OptionContext);
  const modalRef = useRef<HTMLDivElement>(null);
  const handleModalView = useCallback(() => {
    setIsModalOpen((prev) => !prev);
  }, []);

  useEffect(() => {
    setIsSaved(false);
  }, [option]);
  const categories = ['시스템', '온도관리', '외부장치', '내부장치'];
  const handleCategoryClick = (idx: number) => {
    setCategory(idx);
    setNewIndex(0);
  };
  return (
    <S.Wrapper>
      <S.Category.Wrapper>
        {categories.map((category, idx) => (
          <S.Category.Button
            key={idx}
            $isSelected={idx === selectedCategory}
            onClick={() => handleCategoryClick(idx)}
          >
            <S.Category.ButtonP $isSelected={idx === selectedCategory}>
              {category}
            </S.Category.ButtonP>
          </S.Category.Button>
        ))}
      </S.Category.Wrapper>
      <S.Container>
        <S.OptionTitle>옵션</S.OptionTitle>
        <S.Text>을 선택해주세요.</S.Text>
        <SelectedOptionCardList
          cardData={cardData}
          isSaved={isSaved}
          setNewIndex={setNewIndex}
          selectedIndex={selectedIndex}
          categoryIdx={selectedCategory}
        ></SelectedOptionCardList>
        <S.ModalWrapper ref={modalRef} $isopen={isModalOpen.toString()}>
          <Modal onClick={handleModalView}></Modal>
        </S.ModalWrapper>
        <Footer
          onClick={handleModalView}
          setIsSaved={setIsSaved}
          isOpen={isModalOpen}
        ></Footer>
        <CardbModal />
      </S.Container>
    </S.Wrapper>
  );
}

export default SelectedOptionInfo;
