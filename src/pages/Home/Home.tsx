import { Billing, Features, Feedbacks, SecureDevice, Steps, Welcome } from './_sections';

export const Home = () => {
  return (
    <>
      <Welcome />
      <Features />
      <Steps />
      <Billing />
      <Feedbacks />
      <SecureDevice />
    </>
  );
};
