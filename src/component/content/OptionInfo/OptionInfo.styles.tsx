import styled from 'styled-components';
import {flexCenter} from '@/style/common';
import {colors} from '@/style/theme';
import {Title1_Medium, Title3_Regular} from '@/style/fonts';

const S = {
  Wrapper: styled.div`
    ${flexCenter}
    flex: 4;
  `,

  ModalWrapper: styled.div<{$isopen: string}>`
    position: absolute;
    top: 26px;
    width: 375px;
    height: 440px;
    margin-top: ${(props) => (props.$isopen === 'true' ? '0px' : '130%')};
    padding: 50px 0px;
    border-radius: 6px;
    border: 2px solid ${colors.Cool_Grey_001};
    background: #fff;
    box-shadow: 0px 4px 14px 0px rgba(104, 104, 104, 0.1);
    z-index: 2;
    transition: margin 0.5s;
  `,

  Container: styled.div`
    position: relative;
    width: 375px;
    height: 565px;
    padding-top: 27px;
    overflow: hidden;
    &::before {
      content: '';
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 284px;
      background: linear-gradient(
        180deg,
        rgba(255, 255, 255, 0) 38.32%,
        rgba(255, 255, 255, 0.53) 50.05%,
        #fff 75.57%
      );
      z-index: 3;
      pointer-events: none;
    }
  `,

  OptionTitle: styled.div`
    ${Title1_Medium}
    display: inline-block;
    font-size: 24px;
  `,

  Text: styled.span`
    ${Title3_Regular}
    font-size: 24px;
  `,
};

export default S;
