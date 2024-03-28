import React, {useState} from 'react';
import S from './DetailToggle.styles';

interface props {
  onClick: (event: React.MouseEvent) => void;
  opened: boolean;
  selected: boolean;
  onHover: () => void;
  onHoverEnd: () => void;
}

const DetailIcon = (isOpen: boolean) => {
  const transform: string = isOpen ? 'rotate(180deg)' : 'rotate(0deg)';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      style={{transform}}
    >
      <path
        d="M7.77818 7.84802L12.0129 3.88813L13.2226 5.0193L7.77818 10.1104L2.33374 5.0193L3.54343 3.88813L7.77818 7.84802Z"
        fill="#AEB1B7"
      />
    </svg>
  );
};

function DetailToggle({onClick, opened, selected, onHover, onHoverEnd}: props) {
  const buttonText: string = opened ? '접기' : '자세히보기';
  const [isHovered, setIsHovered] = useState(false);
  return (
    <S.Wrapper
      onClick={onClick}
      $selected={selected.toString()}
      onMouseEnter={() => {
        setIsHovered(true);
        onHover();
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        onHoverEnd();
      }}
    >
      {buttonText}
      {DetailIcon(opened)}
    </S.Wrapper>
  );
}

export default DetailToggle;
