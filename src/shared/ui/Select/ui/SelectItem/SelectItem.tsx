import clsx from 'clsx';
import { type ReactNode } from 'react';
import { useSelectContext } from '../../model/useSelectContext';
import styles from './SelectItem.module.css';

export interface SelectItemProps {
  children: ReactNode;
  disabled?: boolean;
  selectItemCallback?: () => void;
}

const SelectItem = ({
  children,
  disabled,
  selectItemCallback,
}: SelectItemProps) => {
  const { activeOption, selectItem, size } = useSelectContext();

  const classes = clsx(styles.root, styles[size ?? 'medium'], {
    [styles.disabled]: disabled,
    [styles.active]: activeOption === (children as string),
  });

  const toggleSelectOptionHandler = () => {
    if (!selectItem || disabled) return;

    const newTitle = (activeOption !== children ? children : '') as string;

    selectItem(newTitle);
    if (selectItemCallback) selectItemCallback();
  };

  return (
    <li onClick={toggleSelectOptionHandler} className={classes}>
      {children}
    </li>
  );
};

export default SelectItem;
