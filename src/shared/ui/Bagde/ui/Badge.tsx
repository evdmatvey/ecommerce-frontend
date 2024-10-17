import clsx from 'clsx';
import { ReactNode } from 'react';
import styles from './Badge.module.css';

interface BadgeProps {
  color?: 'primary' | 'info' | 'danger' | 'warning' | 'success';
  variant?: 'solid' | 'translucent';
  iconPosition?: 'left' | 'only' | 'right';
  children?: ReactNode;
  icon?: ReactNode;
}

const Badge = ({
  variant = 'solid',
  color = 'primary',
  iconPosition = 'left',
  icon,
  children,
}: BadgeProps) => {
  const classes = clsx(styles.root, styles[color], {
    [styles.solid]: variant === 'solid',
    [styles.translucent]: variant === 'translucent',
    [styles.iconOnly]: iconPosition === 'only',
    [styles.icon]: icon,
  });

  return (
    <span className={classes} data-testid="badge-testid">
      {iconPosition === 'left' && (
        <span data-testid="icon-left-testid">{icon}</span>
      )}
      {iconPosition === 'only' ? (
        <span data-testid="icon-only-testid">{icon}</span>
      ) : (
        children
      )}
      {iconPosition === 'right' && (
        <span data-testid="icon-right-testid">{icon}</span>
      )}
    </span>
  );
};

export default Badge;
