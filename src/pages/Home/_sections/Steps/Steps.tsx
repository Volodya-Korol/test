import { Step } from './Step';

const steps = [
  {
    title: 'Install ...',
    content: 'Relax and letRelax .',
  },
  {
    title: 'Set up your protection',
    content: 'Relax and leRelax and let ... do the job.Relax and let ... do the job.t ... do the job.',
  },
  {
    title: 'Enjoy spy-free life',
    content: 'Relax and let ... do the job.',
  },
];

export const Steps = () => {
  return (
    <div className="pt-[29px] px-10 pb-9 section">
      <h2 className="text-center">
        All you need to do is <span className="text-primary-green">3 easy steps</span>.
      </h2>
      <div className="mt-[29px]">
        {steps.map((step, index, array) => (
          <Step key={step.title} {...step} index={index + 1} stepsLength={array.length} />
        ))}
      </div>
    </div>
  );
};
