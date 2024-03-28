import styled, {css} from 'styled-components';
import {colors} from '@/style/theme';

const costum = {
  cardbOnCss: css`
    background: ${colors.Icon_Yellow};
    cursor: pointer;
  `,

  modalOnCss: css`
    background: ${colors.Cool_Grey};
    color: ${colors.Hyundai_White};
    cursor: pointer;
  `,
};

const S = {
  Wrapper: styled.div<{$cardbOn: boolean; $modalOn: boolean}>`
    display: inline-flex;
    position: relative;
    transition: 0.5s;
    border-radius: 6px;
    gap: 4px;
    ${({$cardbOn}) => $cardbOn && costum.cardbOnCss}
    ${({$modalOn}) => $modalOn && costum.modalOnCss}
  `,

  TextBox: styled.div`
    display: inline-block;
  `,
};

export default S;
