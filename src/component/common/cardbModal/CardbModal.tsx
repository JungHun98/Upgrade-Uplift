import React from 'react';
import {
  useCardbDispatch,
  useCardbState,
  CLOSE_MODAL,
} from '@/provider/cardbProvider';

import S from './CardbModal.styles';

const bookIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="21"
      viewBox="0 0 18 21"
      fill="none"
    >
      <path
        d="M9.75 17.475V18.75H8.25V17.475H2.25C2.05109 17.475 1.86032 17.4078 1.71967 17.2883C1.57902 17.1687 1.5 17.0066 1.5 16.8375V6.6375C1.5 6.46843 1.57902 6.30628 1.71967 6.18672C1.86032 6.06717 2.05109 6 2.25 6H6.75C7.17569 5.99957 7.59659 6.07635 7.98459 6.2252C8.37259 6.37405 8.71877 6.59155 9 6.86318C9.28123 6.59155 9.62741 6.37405 10.0154 6.2252C10.4034 6.07635 10.8243 5.99957 11.25 6H15.75C15.9489 6 16.1397 6.06717 16.2803 6.18672C16.421 6.30628 16.5 6.46843 16.5 6.6375V16.8375C16.5 17.0066 16.421 17.1687 16.2803 17.2883C16.1397 17.4078 15.9489 17.475 15.75 17.475H9.75ZM15 16.2V7.275H11.25C10.8522 7.275 10.4706 7.40933 10.1893 7.64844C9.90804 7.88755 9.75 8.21185 9.75 8.55V16.2H15ZM8.25 16.2V8.55C8.25 8.21185 8.09196 7.88755 7.81066 7.64844C7.52936 7.40933 7.14782 7.275 6.75 7.275H3V16.2H8.25Z"
        fill="#FFA724"
      />
      <rect
        x="3"
        y="2.25"
        width="1.5"
        height="3"
        rx="0.75"
        transform="rotate(-30 3 2.25)"
        fill="#FFA724"
      />
      <rect
        width="1.5"
        height="3"
        rx="0.75"
        transform="matrix(-0.866025 -0.5 -0.5 0.866025 14.8008 2.25)"
        fill="#FFA724"
      />
      <rect x="8.25" y="0.75" width="1.5" height="3" rx="0.75" fill="#FFA724" />
    </svg>
  );
};

const attachParticle = (koreanText: string) => {
  const charCode = koreanText.charCodeAt(koreanText.length - 1);
  if (!charCode) return;

  const consonantCode = (charCode - 44032) % 28;

  return consonantCode === 0 ? `${koreanText}가` : `${koreanText}이`;
};

function CardbModal() {
  const {dataObject, modalOpen} = useCardbState();
  const dispatch = useCardbDispatch();

  const handleClickBtn = () => {
    dispatch({type: CLOSE_MODAL, payload: {}});
  };

  return (
    <S.Wrapper $modalOpen={modalOpen}>
      <S.Header.Container>
        <S.Header.Left>
          <S.Header.IconBox>{bookIcon()}</S.Header.IconBox>
          <S.Header.Title>
            {attachParticle(dataObject.keyword)} 뭔가요?
          </S.Header.Title>
        </S.Header.Left>
        <S.Header.CloseBtn onClick={handleClickBtn}>
          이해했어요!
        </S.Header.CloseBtn>
      </S.Header.Container>
      <S.Description.Container>
        {dataObject.imgSrc && <S.ImageBox $src={dataObject.imgSrc} />}
        {dataObject.description}
      </S.Description.Container>
    </S.Wrapper>
  );
}

export default CardbModal;
