import styled from 'styled-components';

const S = {
  Wrapper: styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
  `,

  TopWrapper: styled.div`
    width: 100%;
    min-height: 111px;
    position: fixed;
    background: white;
    z-index: 999999;
  `,
};

export default S;
