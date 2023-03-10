import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react';
import { useSelector } from 'react-redux';

export default function Payment() {
  //   const reservedProducts = useSelector((state) => state.reserve);

  return (
    <Box
      margin="auto"
      marginBottom="auto"
      w={'50%'}
      borderWidth="1px"
      borderRadius="lg"
      px={8}
      py={4}
    >
      <Heading size="lg" mb={8}>
        요금 명세서
      </Heading>
      <Flex justifyContent="space-between">
        <Text>결제 금액</Text>
        <Text>원</Text>
      </Flex>
      <Flex justifyContent="space-between">
        <Text>할인 금액</Text>
        <Text>0</Text>
      </Flex>
      <Flex justifyContent="space-between">
        <Text>총 결제 금액</Text>
        <Text>원</Text>
      </Flex>
      <Flex justifyContent="center">
        <Button mt={8} w="50%" colorScheme="teal" alignSelf="center">
          구매하기
        </Button>
      </Flex>
    </Box>
  );
}
