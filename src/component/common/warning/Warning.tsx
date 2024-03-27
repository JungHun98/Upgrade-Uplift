import React from 'react';

import S from './Warning.styles';

function Warning({
  text,
  onPopup,
  onNext,
}: {
  text: string;
  onPopup: (state: boolean) => void;
  onNext: () => void;
}) {
  return (
    <S.Warnings.Wrapper>
      <S.Warnings.Box>
        <S.Warnings.Text>
          {text}을 <br />
          선택 완료하지 않으셨습니다.
          <br />
          <br /> 그래도 견적을 보시겠습니까?
        </S.Warnings.Text>
        <S.Warnings.ButtonWrapper>
          <S.Warnings.Cancel onClick={() => onPopup(true)}>
            <S.Warnings.CancelP>아니오</S.Warnings.CancelP>
          </S.Warnings.Cancel>
          <S.Warnings.Confrim onClick={() => onNext()}>
            <S.Warnings.ConfirmP>예</S.Warnings.ConfirmP>
          </S.Warnings.Confrim>
        </S.Warnings.ButtonWrapper>
      </S.Warnings.Box>
    </S.Warnings.Wrapper>
  );
}
export default Warning;
