import React from 'react';
import Header from '@/component/header/Header';
import GuideContent from '@/component/guidecontent/GuideContent';
import Content from '@/component/content/Content/Content';
import Progress from '@/component/progress/Progress/Progress';
import S from './styles';
import {useGuideFlowState} from '@/provider/guideFlowProvider';

function Guide() {
  const {showGuide} = useGuideFlowState();
  return (
    <S.Wrapper>
      <S.TopWrapper>
        <Header />
        {showGuide && <Progress />}
      </S.TopWrapper>
      {showGuide ? <Content /> : <GuideContent />}
    </S.Wrapper>
  );
}

export default Guide;
