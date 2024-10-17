import { useContext } from 'react';
import { SelectContext } from './select.context';

export const useSelectContext = () => {
  const { activeOption, selectItem, size } =
    useContext<SelectContext>(SelectContext);

  return { activeOption, selectItem, size };
};
