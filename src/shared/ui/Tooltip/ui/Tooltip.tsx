import clsx from 'clsx';
import { ReactNode, useState } from 'react';
import styles from './Tooltip.module.css';

interface TooltipProps {
  position?: 'top' | 'right' | 'bottom' | 'left';
  title: string;
  children: ReactNode;
}

const Tooltip = ({ position = 'top', title, children }: TooltipProps) => {
  const [isActive, setActive] = useState(false);

  const showTooltip = () => setActive(true);
  const hideTooltip = () => setActive(false);

  const classes = clsx(styles.title, styles[position]);

  return (
    <div
      className={styles.root}
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
      data-testid="tooltip-testid"
    >
      {isActive && (
        <div className={classes} data-testid="title-testid">
          {title}
        </div>
      )}
      {children}
    </div>
  );
};

export default Tooltip;
