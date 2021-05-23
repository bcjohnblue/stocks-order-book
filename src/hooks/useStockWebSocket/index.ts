import { useState, useEffect } from 'react';
import useWebSocket from 'react-use-websocket';
import { getOrderBookData } from './helper';
import type { Data } from './type';

const useStockWebSocket = (topics: string[]) => {
  const { sendMessage, lastMessage, readyState } = useWebSocket(
    'wss://ws.btse.com/ws/futures'
  );
  useEffect(() => {
    sendMessage(
      JSON.stringify({
        op: 'subscribe',
        args: topics
      })
    );
  }, []);

  const [data, setData] = useState<Data>({
    btseIndex: null,
    orderBook: null
  });
  useEffect(() => {
    if (!lastMessage || !lastMessage.data) return;
    const data = JSON.parse(lastMessage?.data || '');
    if (!data) return;

    switch (data.topic) {
      case 'btseIndex':
        setData((prevData) => ({
          ...prevData,
          btseIndex: data.data.BTCPFC_2
        }));
        break;
      case 'orderBook':
        setData((prevData) => ({
          ...prevData,
          orderBook: getOrderBookData(prevData.orderBook, data.data)
        }));
        break;
      default:
        break;
    }
  }, [lastMessage]);

  return data;
};

export default useStockWebSocket;
