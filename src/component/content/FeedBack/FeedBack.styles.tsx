import styled, {keyframes} from 'styled-components';
import {colors} from '@/style/theme';
import {Body3_Regular, Title2_Medium} from '@/style/fonts';

const opacityAni = keyframes`
0%{
    opacity: 0;
}
100%{
    opacity: 1;
}
`;

const moveOpacityAni = keyframes`
0%{
    opacity: 0;
    left: 0;
}
100%{
    opacity: 1;
    left: 100%;
}
`;

const S = {
  Wrapper: styled.div`
    position: absolute;
    width: 375px;
    height: 154px;
    top: -2px;
    left: -2px;
    padding: 20px;
    border-radius: 6px;
    background: ${colors.Main_Hyundai_Blue};
    animation: ${opacityAni} 0.5s forwards;
  `,

  IconContainer: styled.div`
    position: relative;
    width: 30px;
    height: 30px;

    div {
      transition: 0.5s;
    }

    .smile2 {
      opacity: 0;
      animation: ${opacityAni} 0.5s forwards;
      animation-delay: 0.5s;
    }

    .good {
      opacity: 0;
      top: -3px;
      animation: ${moveOpacityAni} 0.5s forwards;
      animation-delay: 0.5s;
    }
  `,

  IconBox: styled.div`
    position: absolute;
    top: 0;
    left: 0;
  `,

  TitleBox: styled.div`
    ${Title2_Medium}
    margin-top: 14px;
    color: ${colors.Hyundai_White};
  `,

  Description: styled.div`
    ${Body3_Regular}
    margin-top: 8px;
    color: ${colors.Hyundai_White};
  `,
};

export default S;
