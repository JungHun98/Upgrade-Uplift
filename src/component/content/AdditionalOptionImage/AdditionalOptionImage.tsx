import React, {useEffect, useRef} from 'react';
import {cardDataType} from '../contentInterface';
import {useImageSrcState} from '@/provider/tempImageProvider';

import S from './AdditionalOptionImage.styles';

interface ImageProps {
  cardData: cardDataType[];
  selectedIndex: number;
}

function OptionImage({cardData, selectedIndex}: ImageProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const prevRef = useRef<number | undefined>(undefined);
  const imgBox = wrapperRef.current?.childNodes[selectedIndex];

  if (prevRef.current !== undefined) {
    const prevImgBox = wrapperRef.current?.childNodes[
      prevRef.current
    ] as HTMLElement;
    if (prevImgBox) {
      prevImgBox.style.display = '';
      prevImgBox.style.zIndex = '';
    }
  }

  if (imgBox instanceof HTMLElement) {
    imgBox.style.display = '';
    imgBox.style.zIndex = '10';
  }

  useEffect(() => {
    prevRef.current = selectedIndex;
  });

  const {imgSrc} = useImageSrcState();
  const imageList = imgSrc ? (
    <S.ImageBox>
      <S.ImageBoxImg src={imgSrc} />
    </S.ImageBox>
  ) : (
    cardData &&
    cardData.map((elem, index) => {
      return (
        <S.ImageBox
          key={index}
          style={{
            display:
              index === selectedIndex || index === prevRef.current
                ? ''
                : 'none',
          }}
        >
          <S.ImageBoxImg src={elem.imageSrc}></S.ImageBoxImg>
        </S.ImageBox>
      );
    })
  );

  return (
    <S.Wrapper $currheight={wrapperRef.current?.clientHeight}>
      <S.Container ref={wrapperRef}>{imageList}</S.Container>
    </S.Wrapper>
  );
}

export default OptionImage;
