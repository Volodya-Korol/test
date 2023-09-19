import { ProtectMeButton } from 'src/features';

export const SecureDevice = () => {
  return (
    <div className="px-6 pt-[70px] pb-20 flex flex-col items-center section">
      <h1 className="text-center">
        Stop your <span className="text-primary-blue">phone from being spied on</span>.
      </h1>

      <ProtectMeButton className="mt-10" size="large" isFullWidth />
    </div>
  );
};
