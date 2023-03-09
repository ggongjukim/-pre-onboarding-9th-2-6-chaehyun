import { useEffect, useState } from 'react';
import * as S from '@chakra-ui/react';
import CardComponent from '../components/CardComponent';
import { getContents } from '../api';

const MainPage = () => {
  const [content, setContent] = useState();

  useEffect(() => {
    (async () => {
      const result = await getContents();
      console.log('result', result);
      setContent(result);
    })();
  }, []);

  return (
    <S.SimpleGrid columns={4} spacing={4} margin="100px">
      {content?.map((item) => (
        <CardComponent key={item.idx} content={item} />
      ))}
    </S.SimpleGrid>
  );
};

export default MainPage;
