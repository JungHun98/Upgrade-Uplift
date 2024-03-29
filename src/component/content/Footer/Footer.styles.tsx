import styled from 'styled-components';
import {flexCenter} from '../../../style/common';
import {colors} from '../../../style/theme';
import {Body2_Medium, Title1_Medium} from '@/style/fonts';

const S = {
  Wrapper: styled.div`
    display: flex;
    justify-content: space-between;
    position: absolute;
    bottom: 0;
    width: 100%;

    z-index: 3;
  `,

  Total: styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    width: 135px;
    height: 100%;
    gap: 5px;
  `,

  ModalToggle: styled.button`
    ${flexCenter}
    ${Body2_Medium};
    color: ${colors.Cool_Grey_003};
    gap: 5px;
  `,

  TotalPrice: styled.div`
    ${Title1_Medium};
    text-wrap: nowrap;
  `,

  OptionSwitcher: styled.div`
    display: flex;
    justify-content: space-between;
    width: 150px;
    height: 100%;
  `,

  NextOptionButton: styled.button`
    ${flexCenter}
    ${Body2_Medium};
    width: 113px;
    padding: 14px 20px;
    border-radius: 6px;
    background: ${colors.Main_Hyundai_Blue};
    color: white;
    gap: 8px;
  `,

  PrevOptionButton: styled.button`
    ${Body2_Medium};
    color: ${colors.Cool_Grey_003};
  `,

  IconBox: styled.div`
    width: 16px;
    height: 16px;
    flex-shrink: 0;
    border-radius: 2px;
    background: var(--001, #f2f4f7);
  `,
};

export default S;
