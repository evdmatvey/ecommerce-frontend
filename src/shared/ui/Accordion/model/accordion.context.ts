import { createContext } from 'react';

export interface AccordionContext {
  size?: 'large' | 'standard';
  activeId?: number;
  toggleAccordion?: (id: number) => void;
}

export const AccordionContext = createContext<AccordionContext>({});
