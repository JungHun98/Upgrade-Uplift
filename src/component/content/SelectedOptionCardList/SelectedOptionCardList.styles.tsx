import styled from 'styled-components';

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
