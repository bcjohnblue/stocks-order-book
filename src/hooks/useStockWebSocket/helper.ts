import { OrderBookData, ItemData } from './type';

export const compareData = (
  prevList: ItemData[] | undefined,
  nextList: ItemData[]
) => {
  const MAX_SHOW_ROW = 7;

  if (!nextList) return [];

  return nextList.map((next, index) => {
    if (!prevList) return next;
    if (index > MAX_SHOW_ROW) return next;

    const target = prevList.find((prev) => prev.price === next.price);
    if (target) {
      next.isSameSize = target.size === next.size;
    } else {
      next.isNewQuote = true;
    }

    return next;
  });
};

export const getOrderBookData = (
  prevData: OrderBookData | null,
  nextData: OrderBookData
): OrderBookData | null => {
  const prevBuyData = prevData?.buyQuote;
  const nextBuyData = nextData.buyQuote;
  const newBuyData = compareData(prevBuyData, nextBuyData);

  const prevSellData = prevData?.sellQuote;
  const nextSellData = nextData.sellQuote;
  nextSellData.sort((a, b) => +a.price - +b.price);
  const newSellData = compareData(prevSellData, nextSellData);

  return {
    ...nextData,
    buyQuote: newBuyData,
    sellQuote: newSellData
  };
};
