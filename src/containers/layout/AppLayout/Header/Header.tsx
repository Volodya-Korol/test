import { clsx } from 'clsx';

import { ProtectMeButton } from 'src/features';
import { useAppContext } from 'src/hooks';
import { EHeaderTypes } from 'src/types';

import styles from './Header..module.scss';
import logo from 'src/assets/image/logo/logo.svg';

export const Header = () => {
  const { headerType } = useAppContext();

  return (
    <div className={clsx(styles.header, headerType === EHeaderTypes.sticky ? 'justify-between' : 'justify-center')}>
      <img src={logo} width="80px" height="22px" />

      {headerType === EHeaderTypes.sticky && <ProtectMeButton size="small" />}
    </div>
  );
};
