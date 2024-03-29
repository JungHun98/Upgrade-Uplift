import styled from 'styled-components';
import {Popup_Regular} from '@/style/fonts';
import {colors} from '@/style/theme';

const S = {
  Wrapper: styled.button<{$selected: string}>`
    display: inline-flex;
    align-items: center;
    height: 16px;
    ${Popup_Regular}
    font-size: 12px;
    font-weight: 500;
    line-height: 130%;
    letter-spacing: -0.36px;
    color: ${colors.Cool_Grey_003};
    gap: 2px;

    pointer-events: ${(props) => (props.$selected === 'true' ? '' : 'none')};
  `,
};

export default S;
