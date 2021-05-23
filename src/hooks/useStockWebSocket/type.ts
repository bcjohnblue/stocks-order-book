export interface BtseIndexData {
  id: string;
  gains: number;
  high: number;
  price: number;
}

export interface ItemData {
  price: string;
  size: string;
  culmulativeTotal: string;
  isSameSize?: boolean;
  isNewQuote?: boolean;
}

export interface OrderBookData {
  buyQuote: Array<ItemData>;
  sellQuote: Array<ItemData>;
  gain: string;
  lastPrice: string;
}

export interface Data {
  btseIndex: BtseIndexData | null;
  orderBook: OrderBookData | null;
}
