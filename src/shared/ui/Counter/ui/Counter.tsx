import clsx from 'clsx';
import { MinusIcon, PlusIcon } from '../../Icons';
import styles from './Counter.module.css';

interface CounterProps {
  count: number;
  min?: number;
  max?: number;
  size?: 'small' | 'medium' | 'large';
  decrement: () => void;
  increment: () => void;
}

const Counter = ({
  size = 'medium',
  count,
  min,
  max,
  decrement,
  increment,
}: CounterProps) => {
  const classes = clsx(styles.root, styles[size]);

  return (
    <div className={classes}>
      <button
        className={styles.decrement}
        onClick={decrement}
        disabled={min ? count === min : false}
        data-testid="decrement"
      >
        <MinusIcon />
      </button>
      <span className={styles.count}>{count}</span>
      <button
        className={styles.increment}
        onClick={increment}
        disabled={max ? count === max : false}
        data-testid="increment"
      >
        <PlusIcon />
      </button>
    </div>
  );
};

export default Counter;
