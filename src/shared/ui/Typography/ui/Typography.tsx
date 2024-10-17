import clsx from 'clsx';
import { ReactNode } from 'react';
import styles from './Typography.module.css';

interface TypographyProps {
  component?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
  variant?:
    | 'display 1'
    | 'display 2'
    | 'display 3'
    | 'display 4'
    | 'display 5'
    | 'display 6'
    | 'heading 1'
    | 'heading 2'
    | 'heading 3'
    | 'heading 4'
    | 'heading 5'
    | 'heading 6'
    | 'xl'
    | 'l'
    | 'nav link'
    | 'nav link s'
    | 'regular'
    | 's'
    | 'xs'
    | 'nav link xs';
  children: ReactNode;
}

const Typography = ({
  component: Tag = 'div',
  variant = 'regular',
  children,
}: TypographyProps) => {
  const classnames = clsx({
    [styles.display1]: variant === 'display 1',
    [styles.display2]: variant === 'display 2',
    [styles.display3]: variant === 'display 3',
    [styles.display4]: variant === 'display 4',
    [styles.display5]: variant === 'display 5',
    [styles.display6]: variant === 'display 6',
    [styles.heading1]: variant === 'heading 1',
    [styles.heading2]: variant === 'heading 2',
    [styles.heading3]: variant === 'heading 3',
    [styles.heading4]: variant === 'heading 4',
    [styles.heading5]: variant === 'heading 5',
    [styles.heading6]: variant === 'heading 6',
    [styles.xl]: variant === 'xl',
    [styles.l]: variant === 'l',
    [styles.navLink]: variant === 'nav link',
    [styles.navLinkS]: variant === 'nav link s',
    [styles.navLinkXs]: variant === 'nav link xs',
    [styles.s]: variant === 's',
    [styles.xs]: variant === 'xs',
  });
  return <Tag className={classnames}>{children}</Tag>;
};

export default Typography;
