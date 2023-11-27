import React from 'react';
import Header from '../component/header/Header';
import Progress from '../component/progress/Progress';
import Content from '@/component/content/Content';
import {Wrapper, TopWrapper} from './styles';

function Self() {
  return (
    <Wrapper>
      <TopWrapper>
        <Header />
        <Progress />
      </TopWrapper>
      <Content />
    </Wrapper>
  );
}

export default Self;
