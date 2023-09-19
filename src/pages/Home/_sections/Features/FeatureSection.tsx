import { useRef } from 'react';

import { useIsVisible } from 'src/hooks';
import { TFeatureSection } from 'src/types';

import style from './Features.module.scss';

export const FeatureSection = ({ bgcolor, description, features, isShowLog, image, title }: TFeatureSection) => {
  const ref = useRef<HTMLDivElement>(null);

  useIsVisible(ref, { onVisible: () => isShowLog && console.log(`==Feature Show ${title}n==`) });

  return (
    <div ref={ref}>
      <div className={style.imageContainer} style={{ '--bg-container-color': bgcolor } as React.CSSProperties}>
        <img src={image} />
      </div>
      <h4 className="mt-[15px] text-center">{title}</h4>
      <p className="text-center">{description}</p>
      <div className={style.featuresList}>
        <div className="flex flex-col gap-[15px]">
          {features.map(({ icon, label }) => (
            <div key={label} className="flex gap-2 items-center">
              <img src={icon} />
              <p className="text-sm font-bold">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
