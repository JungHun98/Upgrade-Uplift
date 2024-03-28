import React, {useContext, useEffect} from 'react';
import {useState, useCallback} from 'react';

import DetailBox from '@/component/common/detailBox/DetilBox';
import DetailSelectedBox from '@/component/common/detailSelectBox/DetailSelectedBox';
import DetailToggle from '../Right/Card/DetailToggle';
import FeedBack from '../Right/Card/FeedBack';
import TagBox from '../Right/Card/Tag';

import {OptionContext} from '@/provider/optionProvider';
import {useGuideFlowState} from '@/provider/guideFlowProvider';
import {useImageSrcDispatch} from '@/provider/tempImageProvider';

import {fetchData} from '@/api/fetchData';

import {getCategory} from '@//util/getCategory';
import {textParse} from '@/util/textParse';

import {cardDataType} from '../contentInterface';

import {colors} from '@/style/theme';
import S from './OptionCard.styles';

interface Info {
  title: string;
  description: string;
}

interface DetailData {
  title: string;
  description: string;
  info?: Info[];
  imageSrc?: string;
}

interface CardProps {
  selected: boolean;
  isSaved: boolean;
  onClick: () => void;
  data: cardDataType;
  ratioList: SelectionRatioProps[];
}
interface SelectionRatioProps {
  id: number;
  selectionRatio: number;
}
const SelectIcon = (isGuide: boolean) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM10.643 16.243L17.713 9.172L16.299 7.758L10.643 13.415L7.814 10.586L6.4 12L10.643 16.243Z"
        fill={isGuide ? colors.Sub_Active_Blue : '#0E2B5C'}
      />
    </svg>
  );
};

const DefaultIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M12.4004 22.1064C6.87739 22.1064 2.40039 17.6294 2.40039 12.1064C2.40039 6.58345 6.87739 2.10645 12.4004 2.10645C17.9234 2.10645 22.4004 6.58345 22.4004 12.1064C22.4004 17.6294 17.9234 22.1064 12.4004 22.1064ZM11.0434 16.3494L18.1134 9.27845L16.6994 7.86445L11.0434 13.5214L8.21439 10.6924L6.80039 12.1064L11.0434 16.3494Z"
        fill="#AAAAAA"
      />
    </svg>
  );
};

const DetailOption = new Set([0, 1, 2, 5, 6]);

const hasDetail = (option: number) => {
  return DetailOption.has(option);
};

function OptionCard({selected, onClick, data, isSaved, ratioList}: CardProps) {
  const [toggle, setToggle] = useState(false);
  const {option} = useContext(OptionContext);
  const {showGuide} = useGuideFlowState();
  const [descriptionData, setDescriptionData] = useState<DetailData[] | null>(
    null,
  );
  const [rate, setRate] = useState<number>(0);
  const dispatch = useImageSrcDispatch();
  const clickedToggle = useCallback(
    (event: React.MouseEvent) => {
      event.stopPropagation();
      setToggle(!toggle);
    },
    [toggle],
  );
  const categoryName = getCategory(option);
  const handleToggleHover = () => {
    if (hasDetail(option) && !descriptionData) {
      const endpoint = `/detail/${categoryName}/${data.id}`;
      fetchData(endpoint)
        .then((response) => {
          setDescriptionData(response);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }
  };
  const handleToggleHoverEnd = () => {};
  useEffect(() => {
    setToggle(false);
    dispatch({type: 'RESET_IMAGE_SRC'});
  }, [selected]);
  useEffect(() => {
    const matchIdRatio = ratioList.find(
      (item: SelectionRatioProps) => item.id === data.id,
    );
    if (matchIdRatio) setRate(matchIdRatio.selectionRatio);
  }, [ratioList]);

  return (
    <S.Wrapper onClick={onClick} $selected={selected} $isGiude={showGuide}>
      <S.Container>
        <S.CardSection $height={24}>
          <S.IconBox>
            {selected ? SelectIcon(showGuide) : DefaultIcon()}
          </S.IconBox>
          {showGuide && <TagBox id={data.id}></TagBox>}
          {data.partsSrc ? (
            <S.Parts $url={data.partsSrc} $selected={selected}></S.Parts>
          ) : (
            ''
          )}
        </S.CardSection>

        <S.CardSection $height={60}>
          <S.TextBox>
            <S.Text1 className="blue" $isGiude={showGuide}>
              {data.saleRate
                ? `나와 비슷한 ${data.saleRate}%가 선택한`
                : `구매자의 ${rate}%가 선택했어요!`}
            </S.Text1>
            <S.Text2 className="black">{textParse(data.name)}</S.Text2>
          </S.TextBox>
          {data.iconSrc ? (
            <S.MiddleImg $url={data.iconSrc} $selected={selected}></S.MiddleImg>
          ) : (
            ''
          )}
          {data.colorCode ? (
            <S.ColorBox $colorcode={data.colorCode}></S.ColorBox>
          ) : (
            ''
          )}
        </S.CardSection>
        {hasDetail(option) &&
          (option !== 6
            ? !Array.isArray(descriptionData) && (
                <DetailBox
                  isOpen={toggle && selected && !isSaved}
                  id={data.id}
                  descriptionData={descriptionData}
                />
              )
            : Array.isArray(descriptionData) && (
                <DetailSelectedBox
                  isOpen={toggle && selected && !isSaved}
                  id={data.id}
                  descriptionData={descriptionData}
                />
              ))}

        <S.CardSection $height={26} $end={true}>
          <S.Price className="blue">{`+ ${data.price.toLocaleString()}원`}</S.Price>

          {hasDetail(option) ? (
            <DetailToggle
              onClick={clickedToggle}
              opened={toggle && selected && !isSaved}
              selected={selected}
              onHover={handleToggleHover}
              onHoverEnd={handleToggleHoverEnd}
            />
          ) : (
            ''
          )}
        </S.CardSection>
      </S.Container>
      {isSaved && option !== 6 && selected && (
        <FeedBack id={data.id}></FeedBack>
      )}
    </S.Wrapper>
  );
}

export default OptionCard;
