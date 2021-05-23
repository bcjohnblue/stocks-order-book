import { useState } from 'react';
import { useSpring, config, animated } from 'react-spring';
import { ItemData } from '../../hooks/useStockWebSocket/type';
import { numberWithCommas } from '../../utils';

import OrderBookItemHover from './OrderBookItemHover';

const getFlashColor = (type: 'buy' | 'sell') =>
  type === 'buy' ? 'rgba(0, 177, 93, 0.5)' : 'rgba(255, 91, 90, 0.5)';

type Props = {
  data: ItemData;
  type: 'buy' | 'sell';
};
const OrderBookItem: React.FC<Props> = (props) => {
  const animateStyle = useSpring({
    to: { opacity: 0.8 },
    from: { opacity: 0 },
    reset: true,
    reverse: true,
    // delay: 200,
    config: config.wobbly
    // onRest: () => set(!flip)
  });

  const [showHover, setShowHover] = useState(false);

  return (
    <div
      className="grid grid-cols-3 gap-4 px-4 text-right py-1 relative"
      onMouseEnter={() => setShowHover(true)}
      onMouseLeave={() => setShowHover(false)}
    >
      {props.data.isNewQuote && (
        <animated.div
          className="absolute w-full h-full"
          style={{
            backgroundColor: getFlashColor(props.type),
            ...animateStyle
          }}
        ></animated.div>
      )}
      <div className={props.type === 'buy' ? 'text-green' : 'text-red'}>
        {numberWithCommas(props.data.price)}
      </div>
      <div className="relative">
        {!props.data.isNewQuote && !props.data.isSameSize && (
          <animated.div
            className="absolute w-full h-full"
            style={{
              backgroundColor: getFlashColor(props.type),
              ...animateStyle
            }}
          ></animated.div>
        )}
        {numberWithCommas(props.data.size)}
      </div>
      <div>{numberWithCommas(props.data.culmulativeTotal)}</div>
      {showHover && <OrderBookItemHover data={props.data}></OrderBookItemHover>}
    </div>
  );
};

export default OrderBookItem;
