import { FEATURES_SECTIONS } from 'src/constants';
import { FeatureSection } from './FeatureSection';

import style from './Features.module.scss';

export const Features = () => {
  return (
    <div className="pb-10">
      <div className="flex justify-center px-6 pt-5">
        <h2 className="text-center max-w-xs">... helps you easily avoid spying.</h2>
      </div>
      <div className={style.section}>
        {FEATURES_SECTIONS.map((section) => (
          <FeatureSection key={section.title} {...section} />
        ))}
      </div>
    </div>
  );
};
