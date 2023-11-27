import styled from 'styled-components';

const S = {
  Wrapper: styled.section`
    width: 100%;
    flex-grow: 1;
    padding-top: 111px;
  `,
  Container: styled.div<{$option: number}>`
    display: flex;
    width: 100%;
    height: 100%;
  `,
};

export default S;
