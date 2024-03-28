import styled, {keyframes} from 'styled-components';

const moveTop = keyframes`
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(0);
  }
`;

const S = {
  Wrapper: styled.div`
    &::-webkit-scrollbar {
      display: none;
    }

    width: 100%;
    height: 375px;
    margin-top: 32px;
    overflow-y: scroll;
  `,

  Container: styled.ul`
    li {
      width: 100%;
    }
    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 30px;
    width: 100%;
    gap: 16px;
  `,
};

export default S;
