import styled from 'styled-components';
import {flexCenter} from '@/style/common';
import {colors} from '@/style/theme';
import {Title4_Medium} from '@/style/fonts';

const S = {
  Loading: {
    Wrapper: styled.div`
      width: 100vw;
      height: 100vh;
      position: fixed;
      background: rgba(0, 0, 0, 0.8);
      top: 0;
      left: 0;
      z-index: 9999999;
      display: flex;
      align-items: center;
      justify-content: center;
    `,
    Box: styled.div`
      width: 300px;
      height: 200px;
      ${flexCenter};
      flex-direction: column;
      background-color: white;
      border-radius: 8px;
    `,
    Text: styled.p`
      color: ${colors.Main_Hyundai_Blue};
      ${Title4_Medium};
    `,
  },
};

export default S;
