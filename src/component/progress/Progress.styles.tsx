import styled from 'styled-components';
import {flexCenter} from '@/style/common';
import {colors} from '@/style/theme';

const S = {
  Wrapper: styled.div`
    position: relative;
    ${flexCenter}
    width: 100%;
    height: 26px;
    flex-direction: column;
  `,

  OptionItemWrapper: styled.div`
    /* width: 100%; */
    height: 100%;
    ${flexCenter}
    position: relative;
  `,

  SelectedBar: styled.div<{$active: number}>`
    position: absolute;
    left: ${({$active}) => `${$active * 120}px`};
    bottom: -2px;

    display: flex;
    justify-content: center;
    text-align: center;

    width: 120px;
    height: 2px;

    background-color: ${colors.Main_Hyundai_Blue};

    transition: 0.4s ease-in-out;

    z-index: 1;
  `,
};

export default S;
