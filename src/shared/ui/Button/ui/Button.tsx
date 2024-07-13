import clsx from 'clsx';
import { type ComponentProps, type ReactNode } from 'react';
import styles from './Button.module.css';

interface ButtonProps extends ComponentProps<'button'> {
  color?:
    | 'primary'
    | 'secondary'
    | 'info'
    | 'success'
    | 'warning'
    | 'danger'
    | 'black'
    | 'gray';
  size?: 'small' | 'medium' | 'large';
  variant?: 'outlined' | 'solid';
  icon?: ReactNode;
  iconPosition?: 'left' | 'right' | 'only';
  children?: ReactNode;
}

const Button = ({
  color = 'primary',
  size = 'medium',
  variant = 'solid',
  iconPosition = 'left',
  icon,
  children,
  ...props
}: ButtonProps) => {
  const classes = clsx(
    props.className,
    styles.root,
    styles[size],
    styles[color],
    {
      [styles.solid]: variant === 'solid',
      [styles.outlined]: variant === 'outlined',
      [styles.iconOnly]: iconPosition === 'only',
      [styles.icon]: icon,
    },
  );
  return (
    <button className={classes} {...props} data-testid="button">
      {iconPosition === 'left' && <span data-testid="icon-left">{icon}</span>}
      {iconPosition === 'only' ? (
        <span data-testid="icon-only">{icon}</span>
      ) : (
        <span data-testid="children">{children}</span>
      )}
      {iconPosition === 'right' && <span data-testid="icon-right">{icon}</span>}
    </button>
  );
};

export default Button;
