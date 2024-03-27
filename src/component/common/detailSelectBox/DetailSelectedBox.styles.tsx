import {colors} from '@/style/theme';
import styled from 'styled-components';
import {Label1_Medium, Label2_Regular} from '@/style/fonts';

const S = {
  Wrapper: styled.div<{$isOpen: boolean; $height?: number}>`
    position: relative;
    width: 334px;
    height: ${({$isOpen, $height}) => ($isOpen ? $height : '0')}px;
    opacity: ${({$isOpen}) => ($isOpen ? '1' : '0')};
    pointer-events: ${({$isOpen}) => !$isOpen && 'none'};
    overflow: hidden;
    transition:
      height 1s,
      opacity 1s;
  `,

  DetailContent: styled.div`
    position: absolute;
    width: 100%;
    padding-top: 10px;
    padding-bottom: 10px;
    border-top: 1px solid ${colors.Cool_Grey_001};
  `,

  DescriptionBox: styled.div`
    ${Label2_Regular}
  `,
  TitleWrapper: styled.div`
    display: flex;
    width: 335px;
    align-items: flex-start;
    align-content: flex-start;
    gap: 4px 0px;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin-bottom: 8px;

    & > * {
      margin-right: 1px;
    }

    & > *:not(:last-child)::after {
      content: 'ㆍ';
      margin: 0 1px;
    }
  `,

  Title: styled.div<{$isSelected: boolean}>`
    cursor: pointer;
    ${(props) => (props.$isSelected ? {Label1_Medium} : Label2_Regular)};
    white-space: nowrap;
    transition: background-color 0.3s;
    color: ${(props) =>
      props.$isSelected ? colors.Cool_Grey : colors.Cool_Grey_003};
    &:hover {
      opacity: 0.8;
    }
  `,
};

export default S;
