import {colors} from '@/style/theme';
import styled from 'styled-components';
import {Label2_Regular} from '@/style/fonts';

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

  InfoBox: styled.div`
    display: flex;
    flex-direction: column;
    width: 334px;
    height: 64px;
    margin-top: 17px;
    padding: 12px;
    border-radius: 6px;
    background: #f3f3f3;
    gap: 8px;
  `,

  Info: styled.div`
    display: flex;
    width: 100%;
    gap: 8px;

    div {
      ${Label2_Regular}
    }
  `,

  InfoTitle: styled.div``,
  InfoDescription: styled.div``,
};

export default S;
