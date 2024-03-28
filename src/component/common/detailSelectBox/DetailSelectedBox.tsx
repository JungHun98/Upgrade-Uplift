import React, {useState, useRef, useEffect} from 'react';
import {useImageSrcDispatch} from '@/provider/tempImageProvider';
import S from './DetailSelectedBox.styles';

interface Info {
  title: string;
  description: string;
}

interface DetailData {
  title: string;
  description: string;
  info?: Info[];
  imageSrc?: string;
}

interface DetailSelectedBoxProps {
  isOpen: boolean;
  id: number;
  descriptionData: DetailData[] | null;
}

function DetailSelectedBox({
  isOpen,
  id,
  descriptionData,
}: DetailSelectedBoxProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number | undefined>(0);
  const [selectedDataIndex, setSelectedDataIndex] = useState<number>(0);
  const dispatch = useImageSrcDispatch();
  const handleTitleClick = (
    event: React.MouseEvent,
    index: number,
    image?: string,
  ) => {
    event.stopPropagation();
    setSelectedDataIndex(index);
    dispatch({type: 'SET_IMAGE_SRC', payload: {imgSrc: image}});
  };
  useEffect(() => {
    setSelectedDataIndex(0);
  }, [isOpen]);
  useEffect(() => {
    setHeight(contentRef?.current?.clientHeight);
  }, [selectedDataIndex]);
  return (
    <S.Wrapper $isOpen={isOpen} $height={height}>
      <S.DetailContent ref={contentRef}>
        <S.TitleWrapper>
          {descriptionData?.map((data, index) => (
            <S.Title
              key={index}
              onClick={(event) => handleTitleClick(event, index, data.imageSrc)}
              $isSelected={selectedDataIndex === index}
            >
              {data.title}
            </S.Title>
          ))}
        </S.TitleWrapper>
        <S.DescriptionBox>
          {descriptionData && descriptionData[selectedDataIndex].description}
        </S.DescriptionBox>
      </S.DetailContent>
    </S.Wrapper>
  );
}

export default DetailSelectedBox;
