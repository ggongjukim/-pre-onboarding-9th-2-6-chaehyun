import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import * as S from '@chakra-ui/react';
import { useColorModeValue, useColorMode } from '@chakra-ui/react';
import CardComponent from '../components/CardComponent';
import { getContents } from '../api';
import { getContentList } from '../store/contentSlice';

const MainPage = () => {
  const dispatch = useDispatch();
  const content = useSelector((state) => state.contents);

  useEffect(() => {
    if (content.length === 0) {
      (async () => {
        const result = await getContents();
        dispatch(getContentList(result));
      })();
    }
  }, []);

  return (
    <>
      <Link to="/reservations">장바구니</Link>

      <S.SimpleGrid columns={4} spacing={4} margin="100px">
        {content?.map((item) => (
          <CardComponent key={item.idx} content={item} />
        ))}
      </S.SimpleGrid>
    </>
  );
};

export default MainPage;
