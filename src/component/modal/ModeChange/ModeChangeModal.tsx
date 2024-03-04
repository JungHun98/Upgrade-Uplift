import React from 'react';
import Icon from '@/component/common/Icons';
import S from './ModeChangeModal.styles';
import {getTitleByPath} from '@/util/getTitleByPath';
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
    <S.Wrapper>
      <S.TitleWrapper>
        <Icon name="Fix" size={36} />
        <S.Title>내 차 만들기 방식 변경하기</S.Title>
      </S.TitleWrapper>
      <S.ModeWrapper>
        <S.Mode onClick={handleSelfModeClick}>
          <S.NameWrapper>
            <S.Name>셀프 모드</S.Name>
            {isProgress === 'self' && <S.Progress>현재 진행중</S.Progress>}
          </S.NameWrapper>
          <S.Description>
            가장 일반적으로 많은 사람들이 선택한
            <br />
            인기있는 옵션들을 보며 내 취향에 맞게 자유롭게
            <br />
            옵션을 선택할 수 있어요.
          </S.Description>
          <Icon name="ArrowRight" size={20} />
        </S.Mode>
        <S.Mode onClick={handleGuideModeClick}>
          <S.NameWrapper>
            <S.Name>가이드 모드</S.Name>
            {isProgress === 'guide' && <S.Progress>현재 진행중</S.Progress>}
          </S.NameWrapper>
          <S.Description>
            내 상황과 성향에 맞는 옵션들을 추천받아
            <br />
            나에게 딱 맞는 옵션들로 구성된 차량 견적을
            <br />
            받아볼 수 있어요. 옵션을 선택할 수 있어요.
          </S.Description>
          <Icon name="ArrowRight" size={20} />
        </S.Mode>
      </S.ModeWrapper>
    </S.Wrapper>
  );
}

export default ModeChangeModal;
