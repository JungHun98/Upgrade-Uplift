import styled, {css, keyframes} from 'styled-components';
import {flexCenter} from '../../../style/common';

const growAnimation = keyframes`
  0% {
    clip-path: polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%);
  }
  100% {
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
  }
`;

const S = {
  Wrapper: styled.div<{$currheight?: number}>`
    flex: 6;
  `,

  Container: styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
  `,

  ImageBox: styled.div<{$isActive: boolean}>`
    ${flexCenter}
    position: absolute;
    width: 100%;
    height: 100%;
    transition: clip-path 1s;
    background: #fff;
    ${({$isActive}) =>
      $isActive &&
      css`
        animation: ${growAnimation} 0.5s both cubic-bezier(1, 0, 0.5, 1);
        animation-delay: 0.2s;
      `}
  `,

  ImageBoxImg: styled.img<{$option: number}>`
    object-fit: cover;
    height: ${({$option}) => ($option === 3 ? 80 : 100)}%;
  `,
};

export default S;
