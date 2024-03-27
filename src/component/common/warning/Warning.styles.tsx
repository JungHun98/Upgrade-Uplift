import styled from 'styled-components';
import {flexCenter} from '@/style/common';
import {colors} from '@/style/theme';
import {Label2_Regular, Title4_Medium} from '@/style/fonts';

const S = {
  Warnings: {
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
      height: 200px;
      ${flexCenter};
      flex-direction: column;
      background-color: white;
      border-radius: 8px;
      padding: 20px;
    `,
    Text: styled.p`
      color: ${colors.Main_Hyundai_Blue};
      ${Title4_Medium};
      text-align: center;
    `,
    Cancel: styled.div`
      width: 50px;
      height: 30px;
      background-color: ${colors.Cool_Grey_001};
      border-radius: 8px;
      ${flexCenter};
      margin-top: 16px;
      cursor: pointer;
      border: 1px solid ${colors.Cool_Grey_002};
    `,
    Confrim: styled.div`
      width: 50px;
      height: 30px;
      background-color: ${colors.Main_Hyundai_Blue};
      border-radius: 8px;
      ${flexCenter};
      margin-top: 16px;
      cursor: pointer;
    `,
    CancelP: styled.p`
      color: black;
      ${Label2_Regular};
    `,
    ConfirmP: styled.p`
      color: white;
      ${Label2_Regular};
    `,
    ButtonWrapper: styled.div`
      ${flexCenter};
      gap: 16px;
    `,
  },
};

export default S;
