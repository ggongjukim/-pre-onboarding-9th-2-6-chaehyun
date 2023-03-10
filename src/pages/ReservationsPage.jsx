import { Link } from 'react-router-dom';
import * as S from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';
import {
  addcurrentPurchases,
  subtractcurrentPurchases,
  deleteReservationsList,
} from '../store/reservationsSlice';
import Payment from '../components/Payments';

const ReservationsPage = () => {
  const dispatch = useDispatch();
  const reservations = useSelector((state) => state.reservations);
  const content = useSelector((state) => state.contents);

  return (
    <>
      <Link to="/main">메인으로</Link>
      <S.TableContainer margin="200px">
        <S.Table variant="striped" colorScheme="blue">
          <S.TableCaption placement="top">예약 내역 조회</S.TableCaption>
          <S.Thead>
            <S.Tr>
              <S.Th>상품 번호</S.Th>
              <S.Th>상품 이름</S.Th>
              <S.Th>수량</S.Th>
              <S.Th>금액</S.Th>
              <S.Th>삭제</S.Th>
            </S.Tr>
          </S.Thead>
          <S.Tbody>
            {reservations?.map((item) => (
              <S.Tr key={item.id}>
                <S.Td>{item.id}</S.Td>
                <S.Td>{content[item.id].name}</S.Td>
                <S.Td>
                  <S.NumberInput
                    size="sm"
                    maxW={20}
                    value={item.currentPurchases}
                    min={1}
                    max={content[item.id].maximumPurchases}
                  >
                    <S.NumberInputField readOnly />
                    <S.NumberInputStepper>
                      <S.NumberIncrementStepper
                        onClick={() => {
                          dispatch(
                            addcurrentPurchases({
                              id: item.id,
                              max: content[item.id].maximumPurchases,
                            })
                          );
                        }}
                      />
                      <S.NumberDecrementStepper
                        onClick={() => {
                          dispatch(subtractcurrentPurchases(item.id));
                        }}
                      />
                    </S.NumberInputStepper>
                  </S.NumberInput>
                </S.Td>
                <S.Td>{content[item.id].price}</S.Td>
                <S.Td>
                  <S.Button
                    onClick={() => {
                      dispatch(deleteReservationsList(item.id));
                      console.log(reservations);
                    }}
                  >
                    삭제
                  </S.Button>
                </S.Td>
              </S.Tr>
            ))}
          </S.Tbody>
          <S.Tfoot>
            <S.Tr>
              <S.Th>{''}</S.Th>
              <S.Th>{''}</S.Th>
              <S.Th>{''}</S.Th>
              <S.Th>총 금액</S.Th>
              <S.Th>{''}</S.Th>
            </S.Tr>
          </S.Tfoot>
        </S.Table>
      </S.TableContainer>
      <Payment />
    </>
  );
};
export default ReservationsPage;
