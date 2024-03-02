import {flexCenter} from '@/style/common';
import {Title4_Medium} from '@/style/fonts';
import React from 'react';
import styled from 'styled-components';
import Icon from '@/component/common/Icons';

import ModelPointOption from './Point/ModelPointOption';
import ModelOuterOption from './Outer/ModelOuterOption';
import ModelInnerOption from './Inner/ModelInnerOption';
import ModelDefaultOption from './Default/ModelDefaultOption';

function ModelOptionContainer({name}: {name: string}) {
  const modelOptionList = {
    '핵심 옵션': <ModelPointOption />,
    '외장 색상': <ModelOuterOption />,
    '내장 색상': <ModelInnerOption />,
    '기본 포함 품목': <ModelDefaultOption />,
  };
  return (
    <Option.Wrapper>
      <Option.Title>{name}</Option.Title>
      <Icon name="OptionSeparator" />
      {modelOptionList[name as keyof typeof modelOptionList]}
    </Option.Wrapper>
  );
}

export default ModelOptionContainer;

const Option = {
  Wrapper: styled.div`
    width: 1024px;
    ${flexCenter}
    gap: 32px;
    flex-direction: column;
    margin-bottom: 56px;
  `,
  Title: styled.p`
    width: 100%;
    ${Title4_Medium}
  `,
};
