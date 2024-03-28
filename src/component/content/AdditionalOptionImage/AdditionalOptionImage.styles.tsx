import styled, {keyframes} from 'styled-components';
import {flexCenter} from '../../../style/common';

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

  ImageBox: styled.div`
    ${flexCenter}
    position: absolute;
    width: 100%;
    height: 100%;
    transition: clip-path 1s;
    background: #fff;
  `,
  ImageBoxImg: styled.img`
    /* object-fit: cover; */
    width: 100%;
  `,
};

export default S;
