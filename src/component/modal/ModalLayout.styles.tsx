import styled from 'styled-components';
import {flexCenter} from '@/style/common';
import {colors} from '@/style/theme';
import {Title2_Medium, Popup_Regular, Body2_Medium} from '@/style/fonts';

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

  DescriptionWrapper: styled.div`
    ${flexCenter};
    gap: 12px;
    flex-direction: column;
    margin-bottom: 24px;
  `,

  Description: styled.p`
    color: ${colors.Main_Hyundai_Blue};
    text-align: center;
    ${Popup_Regular}
    white-space: pre-wrap;
  `,

  DescriptionImg: styled.img`
    width: 100%;
  `,

  ButtonWrapper: styled.div`
    ${flexCenter};
    gap: 8px;
  `,

  ButtonProgress: styled.div`
    ${flexCenter}
    width: 150px;
    height: 46px;
    border-radius: 6px;
    background: ${colors.Cool_Grey_001};
    gap: 10px;
    color: ${colors.Main_Hyundai_Blue};
    ${Body2_Medium};
    cursor: pointer;
  `,

  ButtonClose: styled.div`
    ${flexCenter}
    width: 150px;
    height: 46px;
    border-radius: 6px;
    background: ${colors.Main_Hyundai_Blue};
    gap: 10px;
    color: ${colors.Hyundai_White};
    ${Body2_Medium};
    cursor: pointer;
  `,
};

export default S;
