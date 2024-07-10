import clsx from 'clsx';
import Image from 'next/image';
import { FC } from 'react';
import styles from './Logo.module.css';

interface LogoProps {
  withoutIcon?: boolean;
  size?: 'large' | 'standard';
}

const Logo: FC<LogoProps> = ({
  withoutIcon = false,
  size = 'standard',
}: LogoProps) => {
  const classes = clsx({
    [styles.withoutIcon]: withoutIcon,
    [styles.withIcon]: !withoutIcon,
    [styles.large]: size === 'large',
    [styles.standard]: size === 'standard',
  });
  return (
    <Image
      width={141}
      height={40}
      src={withoutIcon ? '/logo.svg' : '/icon-logo.svg'}
      className={classes}
      alt="cartzilla logo"
    />
  );
};

export default Logo;
