import React, {useContext, useState} from 'react';

import {OptionContext} from '@/provider/optionProvider';
import {TempOptionContext} from '@/provider/tempOptionProvider';
import {SelectedOptionContext} from '@/provider/selectedOptionProvider';
import {TempAdditionalOptionsContext} from '@/provider/tempAdditionalOptionProvider';
import {SelectedAdditionalOptionsContext} from '@/provider/additionalOptionProvider';

import {getTotalPrice} from '@//util/getTotPrice';

import Warning from '@/component/common/warning/Warning';

import S from './Footer.styles';

interface props {
  onClick: () => void;
  setIsSaved: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
}

const keyMapping: Record<number, string> = {
  0: '파워트레인',
  1: '구동 방식',
  2: '바디 타입',
  3: '외장 색상',
  4: '내장 색상',
  5: '휠',
};

const upperButton = (isModalOpen: boolean) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      style={{
        transform: isModalOpen ? 'rotate(-180deg)' : '',
        transition: '0.5s',
      }}
    >
      <path
        d="M7.99952 7.21865L4.69952 10.5186L3.75685 9.57598L7.99952 5.33331L12.2422 9.57598L11.2995 10.5186L7.99952 7.21865Z"
        fill="#AEB1B7"
      />
    </svg>
  );
};

function Footer({onClick, isOpen, setIsSaved}: props) {
  const {option, setOption} = useContext(OptionContext);
  const {tempOption} = useContext(TempOptionContext);
  const {selectedOptions, addOption} = useContext(SelectedOptionContext);
  const {additionOptions} = useContext(TempAdditionalOptionsContext);
  const {selectedAdditionalOption, setSelectedAdditionalOption} = useContext(
    SelectedAdditionalOptionsContext,
  );
  const [isWarning, setIsWarning] = useState<boolean>(true);
  const [warningText, setWarningText] = useState<string>('');
  const [warningIndex, setWarningIndex] = useState<number>(0);
  const totalPrice = getTotalPrice(
    selectedOptions,
    tempOption,
    additionOptions,
    selectedAdditionalOption,
  );
  const nextStep = () => {
    if (additionOptions) setSelectedAdditionalOption(additionOptions);
    setOption(option + 1);
  };
  const handleSelectComplete = () => {
    setIsSaved(true);
    if (option !== 6) {
      if (tempOption.key === keyMapping[option]) {
        const updatedTempOption = {
          ...tempOption,
          userSelect: true,
        };

        addOption(updatedTempOption);
      }
      document.body.style.pointerEvents = 'none';
      setTimeout(() => {
        setOption(option + 1);
        document.body.style.pointerEvents = '';
      }, 2500);
    } else {
      const notSelectedOptions = selectedOptions.filter(
        (option) => option.userSelect !== true,
      );
      if (notSelectedOptions.length > 0) {
        const notSelectedIndex = selectedOptions.findIndex(
          (option) => option.key === notSelectedOptions[0].key,
        );
        setIsWarning(false);
        setWarningText(notSelectedOptions.map((item) => item.key).join(','));
        setWarningIndex(notSelectedIndex);
      } else {
        nextStep();
      }
    }
  };
  return (
    <>
      {!isWarning && (
        <Warning text={warningText} onPopup={setIsWarning} onNext={nextStep} />
      )}
      <S.Wrapper>
        <S.Total>
          <S.ModalToggle onClick={onClick}>
            총 견적금액
            <S.IconBox>{upperButton(isOpen)}</S.IconBox>
          </S.ModalToggle>
          <S.TotalPrice>{totalPrice.toLocaleString()} 원</S.TotalPrice>
        </S.Total>
        <S.OptionSwitcher>
          <S.PrevOptionButton onClick={() => setOption(option - 1)}>
            이전
          </S.PrevOptionButton>
          <S.NextOptionButton
            onClick={() => {
              handleSelectComplete();
            }}
          >
            선택 완료
          </S.NextOptionButton>
        </S.OptionSwitcher>
      </S.Wrapper>
    </>
  );
}

export default Footer;
