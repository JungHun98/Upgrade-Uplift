import styled from 'styled-components';
import {flexCenter} from '@/style/common';
import {colors} from '@/style/theme';

const S = {
  Wrapper: styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999999;
    ${flexCenter}
  `,

  ModalWrapper: styled.div`
    width: 343px;
    border-radius: 6px;
    box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.3);
    background: ${colors.Hyundai_White};
    opacity: 1;
    ${flexCenter}
    padding : 26px 18px 18px 18px;
  `,

  Background: styled.div`
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.8);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999999;
  `,
};

export default S;
