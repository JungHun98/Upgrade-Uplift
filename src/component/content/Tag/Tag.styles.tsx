import {flexCenter} from '@/style/common';
import {Popup_Regular} from '@/style/fonts';
import styled from 'styled-components';

const S = {
  Wrapper: styled.div`
    display: flex;
    width: -webkit-fill-available;
    padding-left: 8px;
    gap: 8px;
  `,

  Tag: styled.div`
    ${Popup_Regular}
    ${flexCenter}
  padding: 4px 8px;
    border-radius: 2px;
    background: #deebff;
    gap: 10px;
  `,
};

export default S;
