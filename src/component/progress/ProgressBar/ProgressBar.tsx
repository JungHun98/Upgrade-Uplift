import React from 'react';
import bar from '@/assets/icons/progressBar.svg';
import S from './ProgressBar.styles';

function ProgressBar() {
  return (
    <S.Wrapper>
      <S.Progress src={bar}></S.Progress>
    </S.Wrapper>
  );
}

export default ProgressBar;
