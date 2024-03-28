import React from 'react';
import spinner from '/image/Spinner.gif';

import S from './Spinner.styles';

function Spinner() {
  return (
    <S.Loading.Wrapper>
      <S.Loading.Box>
        <img src={spinner}></img>
        <S.Loading.Text>잠시만 기다려주세요</S.Loading.Text>
      </S.Loading.Box>
    </S.Loading.Wrapper>
  );
}
export default Spinner;
