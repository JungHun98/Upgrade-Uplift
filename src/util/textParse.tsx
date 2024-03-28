import Cardb from '@/component/common/cardb/Cardb';
import React from 'react';

export const textParse = (text: string) => {
  const parts = text.split(/(<cardb>.*?<\/cardb>)/).map((part, index) => {
    if (part.startsWith('<cardb>')) {
      const tagContent = part.replace(/<\/?cardb>/g, '');
      return <Cardb key={index}>{tagContent}</Cardb>;
    }
    return part;
  });

  return <>{parts}</>;
};
