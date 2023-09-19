import clsx from 'clsx';
import { PropsWithChildren, ReactNode, useRef } from 'react';

import style from './Accordion.module.scss';
import { ReactComponent as CollapseArrow } from 'src/assets/image/icons/collapse-arrow.svg';

export type TAccordionProps = {
  collapse: boolean;
  title?: ReactNode;
  toggleCollapse?: () => void;
};

export const Accordion = ({ title, collapse, toggleCollapse, children }: PropsWithChildren<TAccordionProps>) => {
  const accordionBodyRef = useRef<HTMLDivElement>(null);

  const bodyHeight = collapse ? accordionBodyRef.current?.clientHeight : 0;

  return (
    <div className={style.accordion}>
      <div className={clsx(style.header, { [style.collapsed]: collapse })} onClick={toggleCollapse}>
        {title}

        <CollapseArrow className={style.arrow} />
      </div>

      <div className={style.collapse} style={{ height: bodyHeight }}>
        <div ref={accordionBodyRef}>{children}</div>
      </div>
    </div>
  );
};
