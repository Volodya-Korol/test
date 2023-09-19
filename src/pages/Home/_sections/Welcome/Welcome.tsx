import clsx from 'clsx';
import { useRef } from 'react';

import { ProtectMeButton } from 'src/features';
import { useAppContext, useIsVisible } from 'src/hooks';
import { EHeaderTypes } from 'src/types';

import style from './Welcome.module.scss';
import { ReactComponent as AppleIcon } from 'src/assets/image/icons/apple.svg';
import { ReactComponent as MarkIcon } from 'src/assets/image/icons/mark.svg';
import { ReactComponent as PcIcon } from 'src/assets/image/icons/pc.svg';
import video from 'src/assets/video/Radar_2x.mp4';

const appAbilities = [
  'reveal hidden spying apps',
  'stop silent location tracking',
  'avoid social media hacks',
  'provide 24/7 expert security help',
];

export const Welcome = () => {
  const { setHeaderType } = useAppContext();
  const ref = useRef<HTMLButtonElement>(null);

  useIsVisible(ref, {
    onHide: () => setHeaderType(EHeaderTypes.sticky),
    onVisible: () => setHeaderType(EHeaderTypes.default),
  });

  return (
    <div className="bg-gray-light">
      <div className={clsx(style.section, 'section')}>
        <div>
          <h1 className="text-center">
            Stop your <span className="text-primary-blue">phone from being spied on</span>
          </h1>

          <p className="text-center opacity-70">
            Try ..., a smart anti-spy app that effectively protects your privacy.
          </p>
        </div>

        <ProtectMeButton ref={ref} size="large" isFullWidth />

        <div className={style.devices}>
          <div className="flex gap-1 items-center">
            <AppleIcon className="-mt-0.5" />
            iOS
          </div>
          <div className="flex gap-1 items-center">
            <PcIcon />
            macOS, Windows
          </div>
        </div>

        <div className={style.videoWrapper}>
          <video src={video} autoPlay muted loop />
        </div>

        <div className={style.listWrapper}>
          <p className={style.listTitle}>The anti-spy ... app can:</p>
          {appAbilities.map((label) => (
            <div key={label} className={style.listItem}>
              <MarkIcon />
              {label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
