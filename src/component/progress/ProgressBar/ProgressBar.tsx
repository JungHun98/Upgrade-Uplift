import React from 'react';
import bar from '@/assets/icons/progressBar.svg';
import {Wrapper, Progress} from './ProgressBar.styles';

function ProgressBar() {
  return (
    <Wrapper>
      <Progress src={bar}></Progress>
    </Wrapper>
  );
}

export default ProgressBar;
