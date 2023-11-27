import React from 'react';
import Icon from '@/component/common/icons';
import Modal from './ModeChangeModal.styles';
import {getTitleByPath} from '@/component/util/getTitleByPath';
import {useModalContext} from '@/provider/modalProvider';

function ModeChangeModal() {
  const {openModal, closeModal} = useModalContext();
  const isProgress = getTitleByPath(window.location.pathname);
  const handleSelfModeClick = () => {
    if (isProgress === 'self') {
      closeModal();
    } else {
      openModal('mode_to_self');
    }
  };

  const handleGuideModeClick = () => {
    if (isProgress === 'guide') {
      closeModal();
    } else {
      openModal('mode_to_guide');
    }
  };

  return (
    <Modal.Wrapper>
      <Modal.TitleWrapper>
        <Icon name="Fix" size={36} />
        <Modal.Title>내 차 만들기 방식 변경하기</Modal.Title>
      </Modal.TitleWrapper>
      <Modal.ModeWrapper>
        <Modal.Mode onClick={handleSelfModeClick}>
          <Modal.NameWrapper>
            <Modal.Name>셀프 모드</Modal.Name>
            {isProgress === 'self' && (
              <Modal.Progress>현재 진행중</Modal.Progress>
            )}
          </Modal.NameWrapper>
          <Modal.Description>
            가장 일반적으로 많은 사람들이 선택한
            <br />
            인기있는 옵션들을 보며 내 취향에 맞게 자유롭게
            <br />
            옵션을 선택할 수 있어요.
          </Modal.Description>
          <Icon name="ArrowRight" size={20} />
        </Modal.Mode>
        <Modal.Mode onClick={handleGuideModeClick}>
          <Modal.NameWrapper>
            <Modal.Name>가이드 모드</Modal.Name>
            {isProgress === 'guide' && (
              <Modal.Progress>현재 진행중</Modal.Progress>
            )}
          </Modal.NameWrapper>
          <Modal.Description>
            내 상황과 성향에 맞는 옵션들을 추천받아
            <br />
            나에게 딱 맞는 옵션들로 구성된 차량 견적을
            <br />
            받아볼 수 있어요. 옵션을 선택할 수 있어요.
          </Modal.Description>
          <Icon name="ArrowRight" size={20} />
        </Modal.Mode>
      </Modal.ModeWrapper>
    </Modal.Wrapper>
  );
}

export default ModeChangeModal;
