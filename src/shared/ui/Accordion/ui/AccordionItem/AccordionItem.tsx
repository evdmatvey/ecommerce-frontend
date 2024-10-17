import clsx from 'clsx';
import { type ReactNode } from 'react';
import { MinusIcon, PlusIcon } from '@/shared/ui/Icons';
import Typography from '@/shared/ui/Typography';
import { useAccordionContext } from '../../model/useAccordionContext';
import styles from './AccordionItem.module.css';

export interface AccordionItemProps {
  title: string;
  id: number;
  children: ReactNode;
  icon?: ReactNode;
}

const AccordionItem = ({ children, id, title, icon }: AccordionItemProps) => {
  const { activeId, toggleAccordion, size } = useAccordionContext();

  const classes = clsx(styles.root, styles[size ?? 'standard']);
  const isActive = activeId === id;

  const toggleAccordionHandler = () => {
    if (toggleAccordion) toggleAccordion(id);
  };

  return (
    <div className={classes}>
      <div className={styles.header} onClick={toggleAccordionHandler}>
        <div className={styles.title}>
          {icon && <span>{icon}</span>}
          <Typography
            variant={size === 'large' ? 'heading 5' : 'heading 6'}
            component="h3"
          >
            {title}
          </Typography>
        </div>
        <span>{isActive ? <MinusIcon /> : <PlusIcon />}</span>
      </div>
      {isActive && (
        <div className={styles.content}>
          <Typography
            variant={size === 'large' ? 'regular' : 's'}
            component="p"
          >
            {children}
          </Typography>
        </div>
      )}
    </div>
  );
};

export default AccordionItem;
