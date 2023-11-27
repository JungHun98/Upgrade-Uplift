import React from 'react';
import Icon, {IconType} from '../common/icons';
import {useModalContext} from '@/provider/modalProvider';
import Modal from './ModalLayout.styles';

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
    <Modal.Wrapper>
      <Modal.TitleWrapper>
        <Icon name={iconName as IconType} size={36} />
        <Modal.Title>{title}</Modal.Title>
      </Modal.TitleWrapper>
      <Modal.DescriptionWrapper>
        <Modal.Description>{description}</Modal.Description>
        {imgSrc && <Modal.DescriptionImg src={`/image/${imgSrc}.png`} />}
      </Modal.DescriptionWrapper>
      <Modal.ButtonWrapper>
        <Modal.ButtonProgress onClick={handleBtnLeftClick}>
          {progressText}
        </Modal.ButtonProgress>
        <Modal.ButtonClose onClick={handleBtnRightClick}>
          {closeText}
        </Modal.ButtonClose>
      </Modal.ButtonWrapper>
    </Modal.Wrapper>
  );
}
export default ModalLayout;
