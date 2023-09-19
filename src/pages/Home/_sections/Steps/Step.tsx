import clsx from 'clsx';
import { useState } from 'react';

import { Accordion } from 'src/components';

import style from './Steps.module.scss';

type TStepProps = {
  title: string;
  content: string;
  index: number;
  stepsLength: number;
};

export const Step = ({ title, content, index, stepsLength }: TStepProps) => {
  const [collapse, setCollapse] = useState(false);

  const isPreLast = stepsLength - 1 === index;
  const isLast = stepsLength === index;

  return (
    <div key={title} className={`flex gap-2 ${isLast ? 'mt-[13.5px]' : 'mt-1'}`}>
      <div className="flex flex-col items-center">
        <div className={clsx(style.stepCircle, collapse && style.collapse)}>{index}</div>
        {isLast || <div className={clsx(style.stepRoad, { [style.preLast]: isPreLast })} />}
      </div>
      <div className="w-full">
        <Accordion title={title} collapse={collapse} toggleCollapse={() => setCollapse((prev) => !prev)}>
          {content}
        </Accordion>
      </div>
    </div>
  );
};
