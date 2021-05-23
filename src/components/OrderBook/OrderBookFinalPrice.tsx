import { useEffect } from 'react';
import { BtseIndexData } from '../../hooks/useStockWebSocket/type';
import { ReactComponent as DownArrowSVG } from '../../assets/down-arrow.svg';
import { numberWithCommas } from '../../utils';

import clsx from 'clsx';

type Props = {
  data: BtseIndexData | null;
};
const OrderBookFinalPrice: React.FC<Props> = (props) => {
  const price = props.data?.price.toFixed(1);
  const gains = props.data?.gains.toFixed(2) || 0;

  useEffect(() => {
    if (!price) return;
    document.title = `${gains > 0 ? '▲' : '▼'}${numberWithCommas(
      price
    )} (Order Book)`;
  }, [props.data]);

  if (!props.data) return null;
  return (
    <div
      className={clsx([
        'flex',
        'justify-center',
        'items-center',
        'p-1',
        gains > 0 ? 'text-green' : 'text-red'
      ])}
      style={{
        backgroundColor:
          gains > 0 ? 'rgba(16, 186, 104, 0.12)' : 'rgba(255, 90, 90, 0.12)',
        minHeight: '36px'
      }}
    >
      <div className="text-xl font-bold">{numberWithCommas(price || 0)}</div>
      <DownArrowSVG
        width={16}
        height={16}
        fill="white"
        stroke="white"
        className={clsx([
          'mx-1',
          'transform',
          'fill-current',
          gains > 0 ? 'text-green' : 'text-red',
          gains > 0 ? 'rotate-180' : 'rotate-0'
        ])}
      ></DownArrowSVG>
      <div
        className={clsx([
          'flex',
          'align-middle',
          'px-2',
          'border',
          gains > 0 ? 'border-green' : 'border-red'
        ])}
      >
        {gains > 0 ? '+' : ''}
        {+gains}%
      </div>
    </div>
  );
};

export default OrderBookFinalPrice;
