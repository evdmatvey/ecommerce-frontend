import clsx from 'clsx';
import { type ComponentProps, type ReactNode } from 'react';
import { CheckCircleIcon, CloseCircleIcon } from '../../Icons';
import styles from './TextField.module.css';

interface TextFieldProps extends ComponentProps<'input'> {
  variant?: 'small' | 'medium' | 'large';
  iconPosition?: 'right' | 'left';
  error?: string;
  isSuccess?: boolean;
  icon?: ReactNode;
}

const TextField = ({
  variant = 'medium',
  isSuccess = false,
  iconPosition = 'left',
  icon,
  error,
  ...props
}: TextFieldProps) => {
  const isSuccessIconVisible = isSuccess && !error;
  const classes = clsx(props.className, styles.input);
  const wrapperClasses = clsx(
    styles.wrapper,
    styles[variant],
    styles[iconPosition],
    {
      [styles.inputError]: error,
      [styles.inputSuccess]: isSuccessIconVisible,
      [styles.withIcon]: icon,
    },
  );

  return (
    <div className={styles.root}>
      <div className={wrapperClasses}>
        <input {...props} className={classes} />
        {isSuccessIconVisible && (
          <span>
            <CheckCircleIcon />
          </span>
        )}
        {error && (
          <span>
            <CloseCircleIcon />
          </span>
        )}
        {icon && <span className={styles.icon}>{icon}</span>}
      </div>

      {error && <div className={styles.error}>{error}</div>}
    </div>
  );
};

export default TextField;
