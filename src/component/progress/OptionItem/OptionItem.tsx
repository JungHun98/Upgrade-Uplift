import React from 'react';
import S from './OptionItem.styles';

interface OptionItemProps {
  idx: number;
  menuName: string;
  selected: boolean;
  onClick: () => void;
}

function OptionItem({idx, menuName, selected, onClick}: OptionItemProps) {
  const handleClick = () => {
    onClick();
  };

  return (
    <S.Wrapper onClick={handleClick}>
      <S.Option selected={selected}>
        0{idx + 1} {menuName}
      </S.Option>
    </S.Wrapper>
  );
}

export default OptionItem;
