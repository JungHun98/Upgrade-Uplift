import React from 'react';
import {Wrapper, Option} from './OptionItem.styles';

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
    <Wrapper onClick={handleClick}>
      <Option selected={selected}>
        0{idx + 1} {menuName}
      </Option>
    </Wrapper>
  );
}

export default OptionItem;
