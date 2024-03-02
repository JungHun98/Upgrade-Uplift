import React, {useContext, useState} from 'react';
import OptionItem from '../OptionItem/OptionItem';
import ProgressBar from '../ProgressBar/ProgressBar';
import {OptionContext} from '@/provider/optionProvider';
import {SelectedOptionContext} from '@/provider/selectedOptionProvider';
import S from './Progress.styles';
import Warning from '../../common/Warning';

function Progress() {
  const {option, setOption} = useContext(OptionContext);
  const [isWarning, setIsWarning] = useState<boolean>(true);
  const [warningText, setWarningText] = useState<string>('');
  const menuItems = [
    '파워트레인',
    '구동 방식',
    '바디 타입',
    '외장 색상',
    '내장 색상',
    '휠 선택',
    '옵션 선택',
    '견적 내기',
  ];
  const {selectedOptions} = useContext(SelectedOptionContext);
  const nextStep = () => {
    setOption(7);
    setIsWarning(true);
  };
  const handleOptionClick = (index: number) => {
    if (index === 7) {
      const notSelectedOptions = selectedOptions.filter(
        (option) => option.userSelect !== true,
      );
      if (notSelectedOptions.length > 0) {
        setIsWarning(false);
        setWarningText(notSelectedOptions.map((item) => item.key).join(','));
      }
    } else {
      setOption(index);
    }
  };
  const menuItemController = () => {
    return menuItems.map((menuItem: string, index: number) => (
      <OptionItem
        key={index}
        idx={index}
        menuName={menuItem}
        selected={index === option}
        onClick={() => handleOptionClick(index)}
      />
    ));
  };

  return (
    <>
      {!isWarning && (
        <Warning text={warningText} onPopup={setIsWarning} onNext={nextStep} />
      )}
      <S.Wrapper>
        <S.OptionItemWrapper>
          {menuItemController()}
          <S.SelectedBar $active={option} />
        </S.OptionItemWrapper>
        <ProgressBar />
      </S.Wrapper>
    </>
  );
}

export default Progress;
