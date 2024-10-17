import { ComponentProps } from 'react';
import styles from './Switch.module.css';

interface SwitchProps extends Omit<ComponentProps<'input'>, 'type'> {}

const Switch = (props: SwitchProps) => {
  return <input className={styles.root} type="checkbox" {...props} />;
};

export default Switch;
