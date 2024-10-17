import { createContext } from 'react';

export interface SelectContext {
  size?: 'large' | 'small' | 'medium';
  activeOption?: string;
  selectItem?: (id: string) => void;
}

export const SelectContext = createContext<SelectContext>({});
