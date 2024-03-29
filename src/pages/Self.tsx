import React from 'react';
import Header from '../component/header/Header';
import Progress from '../component/progress/Progress/Progress';
import Content from '@/component/content/Content/Content';
import S from './styles';

function Self() {
  return (
    <S.Wrapper>
      <S.TopWrapper>
        <Header />
        <Progress />
      </S.TopWrapper>
      <Content />
    </S.Wrapper>
  );
}

export default Self;
