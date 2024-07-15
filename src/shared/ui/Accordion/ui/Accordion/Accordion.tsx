import { type FC, type ReactNode, useState } from 'react';
import { AccordionContext } from '../../model/accordion.context';
import AccordionItem, {
  AccordionItemProps,
} from '../AccordionItem/AccordionItem';
import styles from './Accordion.module.css';

interface AccordionProps {
  children: ReactNode;
  defaultActiveId: number;
  size: 'standard' | 'large';
}

const Accordion: FC<AccordionProps> & { Item: FC<AccordionItemProps> } = ({
  size = 'standard',
  defaultActiveId = 1,
  children,
}) => {
  const [activeId, setActiveId] = useState(defaultActiveId);

  const toggleAccordion = (id: number) => setActiveId(id);

  return (
    <AccordionContext.Provider value={{ activeId, toggleAccordion, size }}>
      <div className={styles.root}>{children}</div>
    </AccordionContext.Provider>
  );
};

Accordion.Item = AccordionItem;

export default Accordion;
