import React, {useEffect} from 'react';
import {useModalContext, ModalType} from '@/provider/modalProvider';
import S from './Modal.styles';
import ExitModal from './exit/ExitModal';
import ModelChangeModal from './modelChange/ModelChangeModal';
import PowerTrainModal from './powerTrainChange/PowerTrainModal';
import SelfChangeModal from './modeChange/SelfChangeModal';
import GuideChangeModal from './modeChange/GuideChangeModal';
import ModeChangeModal from './modeChange/ModeChangeModal';

type NonNullableModalType = Exclude<ModalType, null>;

const ModalContent: Record<NonNullableModalType, React.FC> = {
  exit: () => <ExitModal />,
  model_change: () => <ModelChangeModal />,
  powertrain_change: () => <PowerTrainModal />,
  type_change: () => <div>타입 바꾸는 모달</div>,
  mode_to_self: () => <SelfChangeModal />,
  mode_to_guide: () => <GuideChangeModal />,
  mode_change: () => <ModeChangeModal />,
};
function Modal() {
  const {isVisible, activeModal, closeModal} = useModalContext();

  useEffect(() => {
    const handlePopState = () => {
      closeModal();
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [closeModal]);
  if (!isVisible || !activeModal) return null;

  const ContentComponent = ModalContent[activeModal] ?? (() => null);
  const handleWrapperClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };
  return (
    <>
      <S.Background />
      <S.Wrapper onClick={closeModal}>
        <S.ModalWrapper onClick={handleWrapperClick}>
          <ContentComponent />
        </S.ModalWrapper>
      </S.Wrapper>
    </>
  );
}

export default Modal;
