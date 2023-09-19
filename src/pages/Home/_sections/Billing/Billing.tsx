import { Button } from 'src/components';
import { BILLING_BENEFITS } from 'src/constants';
import { useTimer } from 'src/hooks';
import { EScrollableSections } from 'src/types';

import style from './Billing.module.scss';
import downloadsIcon from 'src/assets/image/icons/downloads.svg';
import moneyBackIcon from 'src/assets/image/icons/money-back.svg';
import billingBanner from 'src/assets/image/images/billing.svg';

export const Billing = () => {
  const seconds = useTimer(30 * 60);

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  const formatTime = `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;

  return (
    <div className="bg-primary-blue" id={EScrollableSections.billing}>
      <img src={billingBanner} width="100%" />
      <div className="px-6 pt-5 pb-[38px] section">
        <h2 className="text-white text-center">Start your spy-free week for as low as</h2>

        <div className="mt-5 bg-white rounded-2xl px-6 pt-6 pb-[30.5px]">
          {!!seconds && (
            <div className={style.timeBox}>
              <span>Special offer valid for</span>
              <p className="-mt-0.5 font-bold">
                {formatTime} <span>min</span>
              </p>
            </div>
          )}

          <div className={style.priceBox}>
            <span className="text-[42px] leading-9 align-top">$</span>
            <span className="text-[80px] leading-[66px]">2</span>
            <div className="flex flex-col justify-between">
              <span className="text-2xl leading-[26px] ">99</span>
              <span className="text-2xl leading-[26px] text-gray-main opacity-30">/7 days</span>
            </div>
          </div>

          <p className="mt-[18px] font-bold text-center">What you get:</p>
          <div className="flex justify-center">
            <div className={style.benefitsList}>
              {BILLING_BENEFITS.map(({ icon, label }) => (
                <div key={label}>
                  <img src={icon} /> {label}
                </div>
              ))}
            </div>
          </div>

          <Button className="mt-[33.5px]" isFullWidth size="large">
            Try for $2.99
          </Button>

          <p className="my-4 text-[9px] leading-3 text-center opacity-50">
            By clicking above, you agree to try 7 days of $2.99 as a special offer. Your subscription will
            renew for $39.9/month every 2 months. Cancel anytime or manage your subscription in your ....
          </p>

          <div className="flex gap-2 items-center">
            <img src={moneyBackIcon} />
            <p className="text-[10px] leading-[14px]">30-day money-back guarantee</p>
          </div>
          <div className="flex gap-2 items-center mt-4">
            <img src={downloadsIcon} />
            <p className="text-[10px] leading-[14px]">100.000 + downloads</p>
          </div>
        </div>
      </div>
    </div>
  );
};
