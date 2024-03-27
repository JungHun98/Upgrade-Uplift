import React, {useRef} from 'react';
import {textParse} from '@/util/textParse';

import S from './DetilBox.styles';

interface Info {
  title: string;
  description: string;
}
interface DetailData {
  title: string;
  description: string;
  info?: string;
}

interface DetailBoxProps {
  isOpen: boolean;
  id: number;
  descriptionData: DetailData | null;
}

function DetailBox({isOpen, id, descriptionData}: DetailBoxProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  let info: React.JSX.Element[] = [];

  if (descriptionData?.info) {
    info = JSON.parse(descriptionData?.info).map(
      (elem: Info, index: number) => (
        <S.Info key={index}>
          <S.InfoTitle>{textParse(elem.title)}</S.InfoTitle>
          <S.InfoDescription>{textParse(elem.description)}</S.InfoDescription>
        </S.Info>
      ),
    );
  }

  return (
    <S.Wrapper $isOpen={isOpen} $height={contentRef?.current?.clientHeight}>
      <S.DetailContent ref={contentRef}>
        <S.DescriptionBox>
          {descriptionData && textParse(descriptionData.description)}
        </S.DescriptionBox>
        {descriptionData?.info && <S.InfoBox>{info}</S.InfoBox>}
      </S.DetailContent>
    </S.Wrapper>
  );
}
export default DetailBox;
