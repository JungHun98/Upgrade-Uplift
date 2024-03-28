import styled, {css} from 'styled-components';
import {colors} from '@/style/theme';
import {Body2_Regular, Popup_Regular, Title2_Medium} from '@/style/fonts';

const Default = css<{$isGiude: boolean}>`
  background: ${colors.Cool_Grey_001};
  border: 2px solid transparent;
  cursor: pointer;

  &:hover {
    border: 2px solid ${colors.Cool_Grey_003};
    .blue {
      color: ${({$isGiude}) =>
        $isGiude ? colors.Sub_Active_Blue : colors.Main_Hyundai_Blue};
    }
    .black {
      color: ${colors.Cool_Grey};
    }
  }
  div {
    color: ${colors.Cool_Grey_003};
    transition: 0.5s;
  }
`;

const Select = css<{$isGiude: boolean}>`
  border: 2px solid
    ${({$isGiude}) =>
      $isGiude ? colors.Sub_Active_Blue : colors.Main_Hyundai_Blue};
`;

const flexBetween = css`
  display: flex;
  justify-content: space-between;
`;

const imageBlur = css`
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${colors.Cool_Grey_001};
    opacity: 0.5;
  }
`;

const S = {
  Wrapper: styled.li<{$selected: boolean; $isGiude: boolean}>`
    display: flex;
    flex-shrink: 0;
    flex-direction: column;
    position: relative;
    width: 375px;
    min-height: 150px;
    padding: 20px;
    border-radius: 6px;
    ${(props) => (props.$selected ? Select : Default)};
    transition: 0.5s;
  `,

  Container: styled.div``,
  CardSection: styled.div<{$height?: number; $end?: boolean}>`
    ${flexBetween}
    align-items: ${(props) => (props.$end ? 'flex-end' : 'center')};

    height: ${(props) => (props.$height ? props.$height : '')}px;
  `,

  IconBox: styled.div`
    width: 24px;
    height: 24px;
    flex-shrink: 0;
    transition: 0.5s;
  `,

  Parts: styled.div<{$url: string; $selected: boolean}>`
    display: flex;
    align-items: center;
    position: relative;
    width: 84px;
    height: 24px;
    background: url(${(props) => props.$url}) no-repeat;
    background-position: center;
    background-size: contain;
    ${(props) => {
      return props.$selected ? '' : imageBlur;
    }}
  `,

  TextBox: styled.div`
    gap: 4px;
  `,

  Text1: styled.div<{$isGiude: boolean}>`
    ${Popup_Regular}
    font-size: 12px;
    line-height: 130%;
    height: 16px;
    margin-top: 10px;
    color: ${({$isGiude}) =>
      $isGiude ? colors.Sub_Active_Blue : colors.Main_Hyundai_Blue};
  `,

  Text2: styled.div`
    ${Title2_Medium}
    height: 26px;
    color: ${colors.Cool_Grey};
  `,

  MiddleImg: styled.div<{$url: string; $selected: boolean}>`
    display: flex;
    align-items: center;
    position: relative;
    width: 150px;
    height: 60px;
    background: url(${(props) => props.$url}) no-repeat;
    background-position: center;
    ${(props) => {
      return !props.$selected && imageBlur;
    }}
  `,

  ColorBox: styled.div<{$colorcode: string}>`
    width: 60px;
    height: 60px;
    border: 1px solid ${colors.Cool_Grey_002};
    border-radius: 100%;
    background-image: url(${(props) => props.$colorcode});
  `,

  Price: styled.div`
    ${Body2_Regular}
    color: ${colors.Main_Hyundai_Blue};
  `,
};

export default S;
