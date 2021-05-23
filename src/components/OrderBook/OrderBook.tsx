import OrderBookList from './OrderBookList';
import useStockWebSocket from '../../hooks/useStockWebSocket';
import type { OrderBookData } from '../../hooks/useStockWebSocket/type';

export type SocketData = {
  data: OrderBookData | null;
  [key: string]: unknown;
};

const OrderBook = () => {
  const data = useStockWebSocket(['btseIndex:BTCPFC', 'orderBook:BTCPFC_1']);

  return (
    <div className="w-300px m-auto bg-primary text-white">
      <div className="flex p-3 align-items justify-between">
        <h2 className="text-lg">Order Book</h2>
        <div className="flex align-items">
          <div className="mr-6">Grouping</div>
          <div className="cursor-pointer">-</div>
          <div className="mx-4">1</div>
          <div className="cursor-pointer">+</div>
        </div>
      </div>
      <div className="border-gray-500 border-t-2 h-2"></div>
      <div className="grid grid-cols-3 gap-4 px-4 text-right text-secondary">
        <div>Price[USD]</div>
        <div>Size</div>
        <div>Total</div>
      </div>
      <OrderBookList data={data}></OrderBookList>
    </div>
  );
};

export default OrderBook;
