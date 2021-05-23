import { useMemo } from 'react';
import OrderBookItem from './OrderBookItem';
import OrderBookFinalPrice from './OrderBookFinalPrice';

import { Data, ItemData } from '../../hooks/useStockWebSocket/type';

type Props = {
  data: Data;
};
const OrderBookList: React.FC<Props> = (props) => {
  const orderBookData = useMemo(() => {
    const result: {
      buy: ItemData[];
      sell: ItemData[];
    } = {
      buy: [],
      sell: []
    };

    if (props.data.orderBook?.buyQuote) {
      const buyQuote = props.data.orderBook.buyQuote;
      result.buy = buyQuote.slice(0, 7).sort((a, b) => +b.price - +a.price);
    }
    if (props.data.orderBook?.sellQuote) {
      const sellQuote = props.data.orderBook.sellQuote;
      result.sell = sellQuote.slice(0, 7).sort((a, b) => +b.price - +a.price);
    }

    return result;
  }, [props.data.orderBook]);

  return (
    <>
      {orderBookData.sell.map((sellData, index) => (
        <OrderBookItem key={index} type="sell" data={sellData}></OrderBookItem>
      ))}
      <OrderBookFinalPrice data={props.data.btseIndex}></OrderBookFinalPrice>
      {orderBookData.buy.map((buyData, index) => (
        <OrderBookItem key={index} type="buy" data={buyData}></OrderBookItem>
      ))}
    </>
  );
};

export default OrderBookList;
