import { ComponentProps } from 'react';
import styles from './Checkbox.module.css';

interface CheckboxProps extends Omit<ComponentProps<'input'>, 'type'> {}

const Checkbox = (props: CheckboxProps) => {
  return (
    <div className={styles.root}>
      <input className={styles.checkbox} type="checkbox" {...props} />
      <span className={styles.icon}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20.6187 5.38128C20.9604 5.72299 20.9604 6.27701 20.6187 6.61872L9.61872 17.6187C9.27701 17.9604 8.72299 17.9604 8.38128 17.6187L3.38128 12.6187C3.03957 12.277 3.03957 11.723 3.38128 11.3813C3.72299 11.0396 4.27701 11.0396 4.61872 11.3813L9 15.7626L19.3813 5.38128C19.723 5.03957 20.277 5.03957 20.6187 5.38128Z"
            fill="#181D25"
          />
        </svg>
      </span>
    </div>
  );
};

export default Checkbox;
