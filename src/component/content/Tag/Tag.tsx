import {OptionContext} from '@/provider/optionProvider';
import React, {useContext, useEffect, useState} from 'react';
import {useGuideFlowState} from '@/provider/guideFlowProvider';
import {postFetchData} from '@/api/postFetchData';

import S from './Tag.styles';

const categoryName: Record<number, string> = {
  0: 'powertrain',
  1: 'driving_system',
  2: 'bodytype',
  3: 'exterior_color',
  4: 'interior_color',
  5: 'wheel',
  6: 'additional_option',
};

interface Props {
  id: number;
}

interface SelectionRate {
  id: number;
  selectionRatio: number;
}

function TagBox({id}: Props) {
  const {option} = useContext(OptionContext);
  const category = categoryName[option];
  const {dataObject, optionTag} = useGuideFlowState();
  const selectTags = dataObject.options;
  const [tagArr, setTagArr] = useState([]);

  useEffect(() => {
    const getTags = async () => {
      if (selectTags) {
        const requestBody = {
          category: category,
          optionId: id,
          tag1: selectTags[0],
          tag2: selectTags[1],
          tag3: selectTags[2],
        };

        const tagIds = await postFetchData('/sale/tag', requestBody);

        const tags = tagIds.map((elem: SelectionRate, index: number) => {
          let keyword = undefined;
          optionTag.forEach((data) => {
            data.tags.forEach((tag) => {
              if (tag.id === elem.id) keyword = tag.name;
            });
          });
          return (
            <S.Tag key={index}>
              <div>{keyword}</div>
              <div>{elem.selectionRatio}%</div>
            </S.Tag>
          );
        });
        setTagArr(tags);
      }
    };
    getTags();
  }, []);
  return <S.Wrapper>{tagArr}</S.Wrapper>;
}

export default TagBox;
