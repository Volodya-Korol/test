import clsx from 'clsx';
import { ButtonHTMLAttributes, forwardRef, PropsWithChildren, Ref } from 'react';

import styles from './Button.module.scss';

export type TButtonProps = {
  isFullWidth?: boolean;
  size?: 'small' | 'medium' | 'large';
} & PropsWithChildren &
  ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = forwardRef<HTMLButtonElement, TButtonProps>((props, ref: Ref<HTMLButtonElement>) => {
  const { children, isFullWidth, size = 'small', ...rest } = props;

  return (
    <button
      {...rest}
      ref={ref}
      className={clsx(styles.button, styles[size], rest.className, isFullWidth && styles.isFullWidth)}
    >
      {children}
    </button>
  );
});
