import {styled} from 'styled-components';

import {flexBetween, flexCenter} from '@/style/common';
import {colors} from '@/style/theme';
import {Popup_Regular, Title4_Medium} from '@/style/fonts';

const S = {
  Wrapper: styled.div<{$modalOpen: boolean}>`
    ${({$modalOpen}) => !$modalOpen && 'display: none;'}
    position: absolute;
    bottom: 120px;
    width: 375px;
    min-height: 165px;
    border-radius: 6px;
    padding: 16px 20px 20px 20px;
    background: ${colors.Cool_Grey};
    box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.3);
    z-index: 50;
    div {
      color: ${colors.Hyundai_White};
    }
  `,

  Header: {
    Container: styled.div`
      ${flexBetween}
    `,
    Left: styled.div`
      ${flexCenter}
      gap: 6px;
    `,
    IconBox: styled.div`
      ${flexCenter}
      width: 18px;
      height: 18px;
    `,
    Title: styled.div`
      ${Title4_Medium}
    `,

    CloseBtn: styled.button`
      display: inline-flex;
      padding: 5px 9px;
      justify-content: center;
      align-items: center;
      gap: 8px;
      border-radius: 2px;
      background: ${colors.Cool_Grey_004};
    `,
  },

  ImageBox: styled.div<{$src: string}>`
    width: 337px;
    height: 145px;
    margin-bottom: 14px;
    border-radius: 4px;
    background: url(${({$src}) => $src}) no-repeat;
    background-size: cover;
  `,

  Description: {
    Container: styled.div`
      ${Popup_Regular}
      width: 100%;
      margin-top: 12px;
      padding-top: 14px;
      border-top: 1px solid ${colors.Cool_Grey_004};
    `,
  },
};

export default S;
