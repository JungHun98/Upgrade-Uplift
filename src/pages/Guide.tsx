import React from 'react';
import Header from '@/component/header/Header';
import GuideContent from '@/component/guidecontent/GuideContent';
import Content from '@/component/content/Content';
import Progress from '@/component/progress/Progress';
import {Wrapper, TopWrapper} from './styles';
import {useGuideFlowState} from '@/provider/guideFlowProvider';

function Guide() {
  const {showGuide} = useGuideFlowState();
  return (
    <Wrapper>
      <TopWrapper>
        <Header />
        {showGuide && <Progress />}
      </TopWrapper>
      {showGuide ? <Content /> : <GuideContent />}
    </Wrapper>
  );
}

export default Guide;
