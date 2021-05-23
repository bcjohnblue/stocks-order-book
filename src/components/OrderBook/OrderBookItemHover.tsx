import { ItemData } from '../../hooks/useStockWebSocket/type';
import { numberWithCommas } from '../../utils';

type Props = {
  data: ItemData;
};
const OrderBookItemHover: React.FC<Props> = (props) => {
  const totalPrice = (+props.data.price * +props.data.size).toFixed(1);
  const avgPrice = (+totalPrice / +props.data.culmulativeTotal).toFixed(1);

  return (
    <div className="item-hover absolute -right-0">
      <div
        className="fixed bg-gray flex flex-col ml-2 p-2 rounded-md text-left text-sm"
        style={{ transform: 'translateY(calc(-50% + 16px))' }}
      >
        <div>
          Avg Price:{' '}
          <span className="font-bold">{numberWithCommas(avgPrice)}</span> USD
        </div>
        <div>
          Total Value:{' '}
          <span className="font-bold">{numberWithCommas(totalPrice)}</span> USD
        </div>
      </div>
    </div>
  );
};

export default OrderBookItemHover;
