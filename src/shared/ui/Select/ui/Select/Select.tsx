import clsx from 'clsx';
import { type FC, type ReactNode, useRef, useState } from 'react';
import { usePopup } from '@/shared/model/usePopup';
import ArrowDownIcon from '@/shared/ui/Icons/ui/ArrowDownIcon';
import { SelectContext } from '../../model/select.context';
import SelectItem, { SelectItemProps } from '../SelectItem/SelectItem';
import styles from './Select.module.css';

interface SelectProps {
  placeholder: string;
  children: ReactNode;
  size?: 'small' | 'medium' | 'large';
  defaultSelectedOption?: string;
}

const Select: FC<SelectProps> & { Item: FC<SelectItemProps> } = ({
  placeholder,
  children,
  defaultSelectedOption,
  size = 'medium',
}) => {
  const [activeOption, setActiveOption] = useState(defaultSelectedOption ?? '');

  const ref = useRef<HTMLDivElement>(null);
  const { isOpen, togglePopupHandler } = usePopup(ref);

  const classes = clsx(styles.root, styles[size]);
  const titleClasses = clsx(styles.title, {
    [styles.placeholder]: !activeOption,
    [styles.open]: isOpen,
  });

  const selectItem = (title: string) => {
    setActiveOption(title);
  };

  return (
    <SelectContext.Provider value={{ activeOption, selectItem, size }}>
      <div ref={ref} className={classes}>
        <div className={titleClasses} onClick={togglePopupHandler}>
          {activeOption ? activeOption : placeholder}
          <span>
            <ArrowDownIcon />
          </span>
        </div>
        {isOpen && <ul className={styles.options}>{children}</ul>}
      </div>
    </SelectContext.Provider>
  );
};

Select.Item = SelectItem;

export default Select;
