import * as S from '@chakra-ui/react';
import { createReservations } from '../api';

const CardComponent = (props) => {
  const { idx, name, mainImage, spaceCategory, price } = props.content;
  const onClickReservation = (_id) => {
    (async () => {
      const result = await createReservations(_id);
      console.log('result', result);
    })();
  };

  return (
    <S.Card maxWidth="mid">
      <S.CardBody>
        <S.Center>
          <S.Image width="90%" src={mainImage} alt={name} borderRadius="lg" />
        </S.Center>
        <S.Stack mt="6" spacing="3">
          <S.Heading marginLeft="auto" size="md">{`${idx} ${name}`}</S.Heading>
          <S.Text align="right" mt="6" fontWeight="bold">
            <S.Highlight
              query={spaceCategory}
              styles={{ px: '2', py: '1', rounded: 'full', bg: 'red.100' }}
            >
              {spaceCategory}
            </S.Highlight>
          </S.Text>
          <S.Text align="right" color="blue.600" fontSize="2xl">
            {`${price.toLocaleString()}원`}
          </S.Text>
        </S.Stack>
      </S.CardBody>
      <S.Divider />
      <S.CardFooter>
        <S.ButtonGroup marginLeft="auto" spacing="2">
          <S.Button variant="ghost" colorScheme="blue">
            상세보기
          </S.Button>
          <S.Button
            variant="solid"
            colorScheme="blue"
            onClick={() => onClickReservation(idx)}
          >
            예약하기
          </S.Button>
        </S.ButtonGroup>
      </S.CardFooter>
    </S.Card>
  );
};
export default CardComponent;
