import styled from 'styled-components';
import {flexCenter} from '@/style/common';
import {colors} from '@/style/theme';
import {Title2_Medium, Title5_Medium, Label2_Regular} from '@/style/fonts';

const S = {
  Wrapper: styled.div`
    ${flexCenter}
    flex-direction : column;
  `,

  TitleWrapper: styled.div`
    ${flexCenter};
    flex-direction: column;
    gap: 8px;
    margin-bottom: 12px;
  `,

  Title: styled.p`
    color: ${colors.Main_Hyundai_Blue};
    ${Title2_Medium};
  `,

  ModeWrapper: styled.div`
    display: flex;
    gap: 8px;
    flex-direction: column;
  `,

  Mode: styled.div`
    padding: 18px 18px 24px 18px;
    width: 301px;
    height: 116px;
    border-radius: 6px;
    border: 1px solid black;
    display: flex;
    gap: 8px;
    flex-direction: column;
    position: relative;
    svg {
      position: absolute;
      right: 0;
      top: 40%;
    }
    &:hover {
      background-color: ${colors.Sub_Active_Blue};
      border: none;
      p,
      div {
        color: white;
        opacity: 1;
      }
      svg {
        fill: white;
      }
    }
    cursor: pointer;
  `,

  NameWrapper: styled.div`
    display: flex;
    gap: 8px;
  `,

  Name: styled.p`
    ${Title5_Medium};
    color: #000;
  `,

  Progress: styled.div`
    width: 54px;
    height: 16px;
    border-radius: 2px;
    background: ${colors.Hyundai_Sky_Blue};
    color: ${colors.Main_Hyundai_Blue};
    font-family: 'Hyundai Sans Text Medium';
    font-size: 10px;
    font-style: normal;
    font-weight: 500;
    line-height: 130%;
    letter-spacing: -0.3px;
    ${flexCenter};
  `,

  Description: styled.p`
    color: #000;
    ${Label2_Regular};
    opacity: 0.5;
  `,
};

export default S;
