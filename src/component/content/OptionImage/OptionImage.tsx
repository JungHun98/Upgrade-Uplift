import React, {useContext, useEffect, useRef} from 'react';
import {cardDataType} from '../contentInterface';
import {OptionContext} from '@/provider/optionProvider';

import S from './OptionImage.styles';

interface ImageProps {
  cardData: cardDataType[];
  selectedIndex: number;
}

function OptionImage({cardData, selectedIndex}: ImageProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const prevRef = useRef<number | undefined>(undefined);
  const imgBox = wrapperRef.current?.childNodes[selectedIndex];
  const {option} = useContext(OptionContext);

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

  const imageList =
    cardData &&
    cardData.map((elem, index) => {
      return (
        <S.ImageBox
          key={index}
          $isActive={index === selectedIndex}
          style={{
            display:
              index === selectedIndex || index === prevRef.current
                ? ''
                : 'none',
          }}
          onAnimationEnd={() => {
            if (prevRef.current !== undefined && wrapperRef.current) {
              const prevImgBox = wrapperRef.current.childNodes[prevRef.current];
              const currImgBox = wrapperRef.current.childNodes[selectedIndex];
              if (
                prevImgBox instanceof HTMLElement &&
                currImgBox instanceof HTMLElement
              ) {
                if (prevRef.current !== selectedIndex) {
                  prevImgBox.style.display = 'none';
                  currImgBox.style.zIndex = '';
                }
              }
              prevRef.current = selectedIndex;
            }
          }}
        >
          <S.ImageBoxImg src={elem.imageSrc} $option={option}></S.ImageBoxImg>
        </S.ImageBox>
      );
    });

  return (
    <S.Wrapper $currheight={wrapperRef.current?.clientHeight}>
      <S.Container ref={wrapperRef}>{imageList}</S.Container>
    </S.Wrapper>
  );
}

export default OptionImage;
