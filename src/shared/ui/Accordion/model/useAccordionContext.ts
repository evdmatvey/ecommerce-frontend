import { useContext } from 'react';
import { AccordionContext } from './accordion.context';

export const useAccordionContext = () => {
  const { activeId, toggleAccordion, size } =
    useContext<AccordionContext>(AccordionContext);

  return { activeId, toggleAccordion, size };
};
