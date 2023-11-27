import styled from 'styled-components';
import {colors} from '@/style/theme';
import {Title5_Regular} from '@/style/fonts';

export const Wrapper = styled.div`
  width: 120px;
  height: 100%;
  text-align: center;
`;

export const Option = styled.p<{selected: boolean}>`
  color: ${(props) =>
    props.selected ? colors.Main_Hyundai_Blue : colors.Cool_Grey_002};
  ${Title5_Regular};
  cursor: pointer;
`;
