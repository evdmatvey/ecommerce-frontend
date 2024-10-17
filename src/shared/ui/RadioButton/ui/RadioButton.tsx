import { ComponentProps } from 'react';
import styles from './RadioButton.module.css';

interface RadioButtonProps extends Omit<ComponentProps<'input'>, 'type'> {}

const RadioButton = ({ ...props }: RadioButtonProps) => {
  return <input className={styles.root} type="radio" {...props} />;
};

export default RadioButton;
