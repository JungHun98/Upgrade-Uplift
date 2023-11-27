import React from 'react';
import Icon, {IconType} from '../common/icons';
import {useModalContext} from '@/provider/modalProvider';
import S from './ModalLayout.styles';

interface ModalLayoutProps {
  iconName: string;
  title: string;
  description: string;
  progressText: string;
  closeText: string;
  imgSrc?: string;
  onClickLeft?: () => void;
  onClickRight?: () => void;
}

function ModalLayout({
  iconName,
  title,
  description,
  progressText,
  closeText,
  imgSrc,
  onClickLeft,
  onClickRight,
}: ModalLayoutProps) {
  const {closeModal} = useModalContext();
  const handleBtnRightClick = () => {
    if (onClickRight) {
      onClickRight();
    } else {
      closeModal();
    }
  };
  const handleBtnLeftClick = () => {
    if (onClickLeft) {
      onClickLeft();
    } else {
      closeModal();
    }
  };
  return (
    <S.Wrapper>
      <S.TitleWrapper>
        <Icon name={iconName as IconType} size={36} />
        <S.Title>{title}</S.Title>
      </S.TitleWrapper>
      <S.DescriptionWrapper>
        <S.Description>{description}</S.Description>
        {imgSrc && <S.DescriptionImg src={`/image/${imgSrc}.png`} />}
      </S.DescriptionWrapper>
      <S.ButtonWrapper>
        <S.ButtonProgress onClick={handleBtnLeftClick}>
          {progressText}
        </S.ButtonProgress>
        <S.ButtonClose onClick={handleBtnRightClick}>{closeText}</S.ButtonClose>
      </S.ButtonWrapper>
    </S.Wrapper>
  );
}
export default ModalLayout;
